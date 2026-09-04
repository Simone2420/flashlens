/**
 * FlashLens Network Service
 * Monitorea activamente la conectividad real a internet sin depender de librerías nativas extras.
 * Utiliza sondeo ligero contra el endpoint 204 universal para garantizar conexión verídica.
 */

class NetworkService {
  private isChecking = false;
  private checkInterval: any = null;
  private listeners: ((isConnected: boolean) => void)[] = [];
  private consecutiveFailures = 0;
  private lastKnownState: boolean = true;

  /**
   * Realiza un probe ligero (GET generate_204 estándar) con timeout prudente de 5s
   */
  public async checkInternetConnectivity(): Promise<boolean> {
    if (this.isChecking) return this.lastKnownState;
    this.isChecking = true;

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      // Endpoint estándar Android de conectividad (204 No Content, sin cuerpo)
      const response = await fetch('https://connectivitycheck.gstatic.com/generate_204', {
        method: 'GET',
        signal: controller.signal,
        cache: 'no-cache',
      });

      clearTimeout(timeoutId);
      const connected = response.status === 204 || response.ok;
      
      if (connected) {
        this.consecutiveFailures = 0;
        this.notifyListeners(true);
        return true;
      } else {
        this.consecutiveFailures++;
      }
    } catch {
      this.consecutiveFailures++;
    } finally {
      this.isChecking = false;
    }

    // Solo notificar desconexión tras 2 fallos consecutivos para evitar falsos positivos por latencia móvil
    if (this.consecutiveFailures >= 2) {
      this.notifyListeners(false);
      return false;
    }

    return this.lastKnownState;
  }

  /**
   * Permite que cualquier servicio exitoso (ej. OpenRouter o Google Sheets) marque inmediatamente la red como activa
   */
  public markConnected() {
    this.consecutiveFailures = 0;
    this.notifyListeners(true);
  }

  public subscribe(callback: (isConnected: boolean) => void): () => void {
    this.listeners.push(callback);
    setTimeout(() => {
      callback(this.lastKnownState);
    }, 0);
    return () => {
      this.listeners = this.listeners.filter(l => l !== callback);
    };
  }

  private notifyListeners(connected: boolean) {
    if (this.lastKnownState !== connected) {
      this.lastKnownState = connected;
      this.listeners.forEach(cb => cb(connected));
    }
  }

  public startMonitoring(intervalMs = 10000) {
    if (this.checkInterval) return;
    this.checkInternetConnectivity();
    this.checkInterval = setInterval(() => {
      this.checkInternetConnectivity();
    }, intervalMs);
  }

  public stopMonitoring() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
  }
}

export const networkService = new NetworkService();
