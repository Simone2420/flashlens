/**
 * FlashLens Network Service
 * Monitorea activamente la conectividad real a internet sin depender de librerías nativas extras.
 * Utiliza sondeo ligero contra el endpoint 204 universal para garantizar conexión verídica.
 */

class NetworkService {
  private isChecking = false;
  private checkInterval: any = null;
  private listeners: ((isConnected: boolean) => void)[] = [];
  private lastKnownState: boolean = true;

  /**
   * Realiza un probe ultraligero (HEAD request) con timeout de 2.5s
   */
  public async checkInternetConnectivity(): Promise<boolean> {
    if (this.isChecking) return this.lastKnownState;
    this.isChecking = true;

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2500);

      // Endpoint 204 universal de Google (sin cuerpo, ~100 bytes)
      const response = await fetch('https://www.google.com/generate_204', {
        method: 'HEAD',
        signal: controller.signal,
        cache: 'no-cache',
      });

      clearTimeout(timeoutId);
      const connected = response.status === 204 || response.ok;
      this.notifyListeners(connected);
      return connected;
    } catch {
      // Si falla o da timeout, no hay acceso a internet
      this.notifyListeners(false);
      return false;
    } finally {
      this.isChecking = false;
    }
  }

  public subscribe(callback: (isConnected: boolean) => void): () => void {
    this.listeners.push(callback);
    callback(this.lastKnownState);
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
