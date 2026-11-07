import {
  RoleCode,
  PermissionCode,
  RbacPermission,
  RbacRole,
  RbacRolePermission,
  RbacUserRole,
} from '../types';

/**
 * Catálogo Canónico de Permisos del Sistema FlashLens (v1.0 RBAC)
 */
export const RBAC_PERMISSIONS: RbacPermission[] = [
  // --- MÓDULO FLASHCARDS ---
  {
    id: 'perm-card-01',
    code: 'CARDS:CREATE_CAMERA',
    module: 'FLASHCARDS',
    action: 'CREATE',
    displayName: 'Crear con Cámara',
    description: 'Capturar objetos del mundo real con el visor Lens y generar tarjetas',
  },
  {
    id: 'perm-card-02',
    code: 'CARDS:CREATE_VOICE',
    module: 'FLASHCARDS',
    action: 'CREATE',
    displayName: 'Crear por Voz',
    description: 'Dictar conceptos en español para crear tarjetas asociadas',
  },
  {
    id: 'perm-card-03',
    code: 'CARDS:CREATE_ABSTRACT',
    module: 'FLASHCARDS',
    action: 'CREATE',
    displayName: 'Crear Conceptos Abstractos',
    description: 'Crear tarjetas de gramática, emociones, conectores y false friends',
  },
  {
    id: 'perm-card-04',
    code: 'CARDS:CREATE_MANUAL',
    module: 'FLASHCARDS',
    action: 'CREATE',
    displayName: 'Crear Manualmente',
    description: 'Ingresar vocabulario personalizado mediante formulario manual',
  },
  {
    id: 'perm-card-05',
    code: 'CARDS:REVIEW_SRS',
    module: 'FLASHCARDS',
    action: 'READ',
    displayName: 'Repasar Mazo SRS',
    description: 'Estudiar con animación 3D y algoritmo SuperMemo-2 (Mal/Difícil/Bien/Fácil)',
  },
  {
    id: 'perm-card-06',
    code: 'CARDS:FAVORITE_TOGGLE',
    module: 'FLASHCARDS',
    action: 'UPDATE',
    displayName: 'Gestionar Favoritas',
    description: 'Marcar y desmarcar tarjetas favoritas en el mazo',
  },
  {
    id: 'perm-card-07',
    code: 'CARDS:EDIT_OWN',
    module: 'FLASHCARDS',
    action: 'UPDATE',
    displayName: 'Editar Tarjetas Propias',
    description: 'Modificar ejemplos, oraciones de contexto y mnemotecnias personales',
  },
  {
    id: 'perm-card-08',
    code: 'CARDS:DELETE_OWN',
    module: 'FLASHCARDS',
    action: 'DELETE',
    displayName: 'Eliminar Tarjetas Propias',
    description: 'Remover tarjetas creadas por el usuario del mazo local',
  },
  {
    id: 'perm-card-09',
    code: 'CARDS:DAILY_PILL_ADD',
    module: 'FLASHCARDS',
    action: 'CREATE',
    displayName: 'Añadir Píldora Diaria',
    description: 'Incorporar la recomendación diaria de vocabulario voluntariamente',
  },
  {
    id: 'perm-card-10',
    code: 'CARDS:FILTER_ADVANCED',
    module: 'FLASHCARDS',
    action: 'READ',
    displayName: 'Filtros Avanzados',
    description: 'Filtrar por las 13 subcategorías y estado de dominio',
  },
  {
    id: 'perm-card-11',
    code: 'CARDS:VIEW_PHONETICS_FACILITATED',
    module: 'FLASHCARDS',
    action: 'READ',
    displayName: 'Fonética Facilitada',
    description: 'Ver la pronunciación adaptada a fonemas del español',
  },
  {
    id: 'perm-card-12',
    code: 'CARDS:VIEW_PHONETICS_IPA',
    module: 'FLASHCARDS',
    action: 'READ',
    displayName: 'Fonética IPA',
    description: 'Ver la transcripción técnica del Alfabeto Fonético Internacional',
  },
  {
    id: 'perm-card-13',
    code: 'CARDS:VERB_THREE_FORMS',
    module: 'FLASHCARDS',
    action: 'READ',
    displayName: 'Tres Formas Verbales',
    description: 'Visualizar Base Form, Past Simple y Past Participle en Lado B (v1.2)',
  },
  {
    id: 'perm-card-14',
    code: 'CARDS:EXPORT_PERSONAL_DECK',
    module: 'FLASHCARDS',
    action: 'READ',
    displayName: 'Exportar Mazo Personal',
    description: 'Descargar o exportar el mazo en formato digital imprimible',
  },

  // --- MÓDULO AUDIO LAB ---
  {
    id: 'perm-audio-01',
    code: 'AUDIO_LAB:PLAY_BURST',
    module: 'AUDIO_LAB',
    action: 'EXECUTE',
    displayName: 'Modo Ráfaga',
    description: 'Jugar cuestionarios auditivos a contrarreloj de 15 segundos',
  },
  {
    id: 'perm-audio-02',
    code: 'AUDIO_LAB:PLAY_DICTATION',
    module: 'AUDIO_LAB',
    action: 'EXECUTE',
    displayName: 'Dictado Adaptativo',
    description: 'Completar dictado en casillas exactas, expansión y texto libre',
  },
  {
    id: 'perm-audio-03',
    code: 'AUDIO_LAB:AMBIENT_NOISE',
    module: 'AUDIO_LAB',
    action: 'EXECUTE',
    displayName: 'Simulador de Ruido Acústico',
    description: 'Activar ambientes acústicos (Cafetería, Tráfico, Lluvia)',
  },
  {
    id: 'perm-audio-04',
    code: 'AUDIO_LAB:SPEED_STANDARD',
    module: 'AUDIO_LAB',
    action: 'EXECUTE',
    displayName: 'Velocidades de Audio Estándar',
    description: 'Permite seleccionar las velocidades base: 0.75x, 1.0x y 1.25x',
  },
  {
    id: 'perm-audio-05',
    code: 'AUDIO_LAB:SPEED_EXTENDED',
    module: 'AUDIO_LAB',
    action: 'UNLIMITED',
    displayName: 'Velocidades de Audio Extendidas (Premium)',
    description: 'Desbloquea velocidades extremas: 0.5x (análisis lento) y 1.50x (alta velocidad)',
  },

  // --- MÓDULO ROADMAP & DIAGNÓSTICO ---
  {
    id: 'perm-road-01',
    code: 'ROADMAP:PLAY_LESSON',
    module: 'ROADMAP',
    action: 'EXECUTE',
    displayName: 'Jugar Lecciones Roadmap',
    description: 'Avanzar en el árbol de nodos pedagógicos A1 y A2',
  },
  {
    id: 'perm-road-02',
    code: 'ROADMAP:VIEW_THEORY',
    module: 'ROADMAP',
    action: 'READ',
    displayName: 'Ver Explicaciones Teóricas',
    description: 'Consultar diapositivas conceptuales estilo SoloLearn intercaladas',
  },
  {
    id: 'perm-road-03',
    code: 'ROADMAP:SUBMIT_ANSWERS',
    module: 'ROADMAP',
    action: 'EXECUTE',
    displayName: 'Calificar Ejercicios',
    description: 'Enviar respuestas interactivas y recibir evaluación de acierto',
  },
  {
    id: 'perm-diag-01',
    code: 'DIAGNOSTIC:TAKE',
    module: 'DIAGNOSTIC',
    action: 'EXECUTE',
    displayName: 'Presentar Prueba Diagnóstica',
    description: 'Calibrar nivel MCER (A0-A2) con las 25 preguntas ICFES',
  },

  // --- MÓDULO VIDAS Y ANUNCIOS ---
  {
    id: 'perm-live-01',
    code: 'LIVES:USE_STANDARD',
    module: 'LIVES_AND_ADS',
    action: 'EXECUTE',
    displayName: 'Economía de 5 Corazones',
    description: 'Sistema de vidas formativas con regeneración automática',
  },
  {
    id: 'perm-live-02',
    code: 'LIVES:UNLIMITED',
    module: 'LIVES_AND_ADS',
    action: 'UNLIMITED',
    displayName: 'Vidas Infinitas (Premium)',
    description: 'Acceso continuo sin bloqueo por pérdida de corazones',
  },
  {
    id: 'perm-ads-01',
    code: 'ADS:BYPASS',
    module: 'LIVES_AND_ADS',
    action: 'UNLIMITED',
    displayName: 'Sin Publicidad (Zero Ads)',
    description: 'Supresión total de anuncios intersticiales y rewarded videos',
  },

  // --- MÓDULO ADMINISTRACIÓN & CMS ---
  {
    id: 'perm-adm-01',
    code: 'ADMIN:ACCESS_CMS',
    module: 'ADMIN',
    action: 'READ',
    displayName: 'Acceso a Panel CMS',
    description: 'Ingresar a las herramientas de administración del sistema (v1.5)',
  },
  {
    id: 'perm-adm-02',
    code: 'ADMIN:CURATE_PENDING_TERMS',
    module: 'ADMIN',
    action: 'CURATE',
    displayName: 'Curar Términos Pendientes',
    description: 'Revisar y aprobar capturas con estado PENDING_REVIEW',
  },
  {
    id: 'perm-adm-03',
    code: 'ADMIN:REPLACE_CANONICAL_IMAGE',
    module: 'ADMIN',
    action: 'UPDATE',
    displayName: 'Sustituir Imagen Canónica',
    description: 'Asignar fotografía oficial HD de Cloudinary a un término',
  },
  {
    id: 'perm-adm-04',
    code: 'ADMIN:MANAGE_ROADMAP',
    module: 'ADMIN',
    action: 'UPDATE',
    displayName: 'Gestionar Contenido Roadmap',
    description: 'Editar preguntas, fórmulas gramaticales y explicaciones',
  },
  {
    id: 'perm-adm-05',
    code: 'ADMIN:MANAGE_ROLES_PERMISSIONS',
    module: 'ADMIN',
    action: 'UPDATE',
    displayName: 'Gestionar Roles y Permisos',
    description: 'Asignar, revocar y definir privilegios RBAC a usuarios',
  },
  {
    id: 'perm-v15-01',
    code: 'WRITING_COACH:UNLIMITED',
    module: 'WRITING_COACH',
    action: 'UNLIMITED',
    displayName: 'AI Writing Coach Ilimitado',
    description: 'Redacción asistida por IA sin límite de 3 envíos diarios (v1.5)',
  },
  {
    id: 'perm-v20-01',
    code: 'ARENA:UNLIMITED_SESSIONS',
    module: 'ARENA',
    action: 'UNLIMITED',
    displayName: 'Sesiones Arena Ilimitadas',
    description: 'Duelos PvP y Roleplay por voz ilimitados en tiempo real (v2.0)',
  },
];

/**
 * Roles Base del Sistema FlashLens
 */
export const RBAC_ROLES: RbacRole[] = [
  {
    id: 'role-01',
    code: 'ROLE_STUDENT',
    displayName: 'Estudiante Regular',
    description: 'Acceso completo al núcleo de aprendizaje, cámara, mazo SRS y velocidades estándar (0.75x, 1.0x, 1.25x).',
    priority: 10,
    isSystem: true,
    isDefault: true,
  },
  {
    id: 'role-02',
    code: 'ROLE_PREMIUM_STUDENT',
    displayName: 'Estudiante Premium',
    description: 'Beneficios VIP: Vidas infinitas, sin anuncios, velocidades extendidas (0.5x, 1.50x) y exportación de mazos.',
    priority: 50,
    isSystem: true,
    isDefault: false,
  },
  {
    id: 'role-03',
    code: 'ROLE_ADMIN',
    displayName: 'Administrador de Contenidos',
    description: 'Control total de la plataforma, curaduría de términos nuevos, gestión pedagógica y administración RBAC.',
    priority: 100,
    isSystem: true,
    isDefault: false,
  },
];

/**
 * Matriz de Permisos Concedidos por Rol (Role-Permissions)
 */
const STUDENT_PERMISSIONS: PermissionCode[] = [
  'CARDS:CREATE_CAMERA',
  'CARDS:CREATE_VOICE',
  'CARDS:CREATE_ABSTRACT',
  'CARDS:CREATE_MANUAL',
  'CARDS:REVIEW_SRS',
  'CARDS:FAVORITE_TOGGLE',
  'CARDS:EDIT_OWN',
  'CARDS:DELETE_OWN',
  'CARDS:DAILY_PILL_ADD',
  'CARDS:FILTER_ADVANCED',
  'CARDS:VIEW_PHONETICS_FACILITATED',
  'CARDS:VIEW_PHONETICS_IPA',
  'CARDS:VERB_THREE_FORMS',
  'AUDIO_LAB:PLAY_BURST',
  'AUDIO_LAB:PLAY_DICTATION',
  'AUDIO_LAB:AMBIENT_NOISE',
  'AUDIO_LAB:SPEED_STANDARD', // [0.75, 1.0, 1.25]
  'ROADMAP:PLAY_LESSON',
  'ROADMAP:VIEW_THEORY',
  'ROADMAP:SUBMIT_ANSWERS',
  'DIAGNOSTIC:TAKE',
  'LIVES:USE_STANDARD',
];

const PREMIUM_EXTRA_PERMISSIONS: PermissionCode[] = [
  'CARDS:EXPORT_PERSONAL_DECK',
  'AUDIO_LAB:SPEED_EXTENDED', // [0.5, 1.50]
  'LIVES:UNLIMITED',
  'ADS:BYPASS',
  'WRITING_COACH:UNLIMITED',
  'ARENA:UNLIMITED_SESSIONS',
];

const ADMIN_EXTRA_PERMISSIONS: PermissionCode[] = [
  'ADMIN:ACCESS_CMS',
  'ADMIN:CURATE_PENDING_TERMS',
  'ADMIN:REPLACE_CANONICAL_IMAGE',
  'ADMIN:MANAGE_ROADMAP',
  'ADMIN:MANAGE_ROLES_PERMISSIONS',
];

/**
 * Tabla relacional intermedia RolePermission precalculada
 */
export const RBAC_ROLE_PERMISSIONS: RbacRolePermission[] = [
  // Permisos para ROLE_STUDENT
  ...STUDENT_PERMISSIONS.map((permCode, idx) => ({
    id: `rp-student-${idx + 1}`,
    roleId: 'role-01',
    permissionId: `perm-${permCode}`,
    permissionCode: permCode,
    grantedAt: '2026-09-01T00:00:00.000Z',
  })),

  // Permisos para ROLE_PREMIUM_STUDENT (hereda estudiante + extras)
  ...[...STUDENT_PERMISSIONS, ...PREMIUM_EXTRA_PERMISSIONS].map((permCode, idx) => ({
    id: `rp-premium-${idx + 1}`,
    roleId: 'role-02',
    permissionId: `perm-${permCode}`,
    permissionCode: permCode,
    grantedAt: '2026-09-01T00:00:00.000Z',
  })),

  // Permisos para ROLE_ADMIN (hereda premium + extras de CMS)
  ...[...STUDENT_PERMISSIONS, ...PREMIUM_EXTRA_PERMISSIONS, ...ADMIN_EXTRA_PERMISSIONS].map((permCode, idx) => ({
    id: `rp-admin-${idx + 1}`,
    roleId: 'role-03',
    permissionId: `perm-${permCode}`,
    permissionCode: permCode,
    grantedAt: '2026-09-01T00:00:00.000Z',
  })),
];

/**
 * Servicio de Utilidades RBAC para Frontend y Backend
 */
export const rbacService = {
  /**
   * Obtiene la lista completa y única de permisos para un rol dado
   */
  getPermissionsForRole(roleCode: RoleCode): PermissionCode[] {
    switch (roleCode) {
      case 'ROLE_ADMIN':
        return [
          ...STUDENT_PERMISSIONS,
          ...PREMIUM_EXTRA_PERMISSIONS,
          ...ADMIN_EXTRA_PERMISSIONS,
        ];
      case 'ROLE_PREMIUM_STUDENT':
        return [...STUDENT_PERMISSIONS, ...PREMIUM_EXTRA_PERMISSIONS];
      case 'ROLE_STUDENT':
      default:
        return [...STUDENT_PERMISSIONS];
    }
  },

  /**
   * Obtiene la unión sin duplicados de permisos para un conjunto de roles
   */
  getPermissionsForRoles(roleCodes: RoleCode[]): PermissionCode[] {
    const permSet = new Set<PermissionCode>();
    roleCodes.forEach((code) => {
      this.getPermissionsForRole(code).forEach((perm) => permSet.add(perm));
    });
    return Array.from(permSet);
  },

  /**
   * Verifica si una lista de roles contiene el rol especificado
   */
  hasRole(userRoles: RoleCode[] | undefined, targetRole: RoleCode): boolean {
    if (!userRoles || !Array.isArray(userRoles)) return false;
    // Si es admin, tiene facultades de todos los roles inferiores
    if (userRoles.includes('ROLE_ADMIN')) return true;
    return userRoles.includes(targetRole);
  },

  /**
   * Verifica si una lista de permisos contiene el permiso solicitado
   */
  hasPermission(
    userPermissions: PermissionCode[] | undefined,
    targetPermission: PermissionCode
  ): boolean {
    if (!userPermissions || !Array.isArray(userPermissions)) return false;
    return userPermissions.includes(targetPermission);
  },

  /**
   * Retorna las velocidades de audio permitidas para el usuario según sus permisos
   */
  getAvailableAudioSpeeds(userPermissions: PermissionCode[] | undefined): number[] {
    // Velocidades estándar base para todo estudiante (0.75x, 1.0x, 1.25x)
    const speeds = [0.75, 1.0, 1.25];

    // Si tiene permiso de velocidades extendidas (Premium / Admin), agrega 0.5x y 1.50x
    if (this.hasPermission(userPermissions, 'AUDIO_LAB:SPEED_EXTENDED')) {
      return [0.5, 0.75, 1.0, 1.25, 1.5];
    }

    return speeds;
  },

  /**
   * Crea las entidades relacionales iniciales de UserRole para un nuevo usuario
   */
  createDefaultUserRoles(userId: string): {
    userRoles: RbacUserRole[];
    roles: RoleCode[];
    permissions: PermissionCode[];
  } {
    const studentRole = RBAC_ROLES.find((r) => r.isDefault) || RBAC_ROLES[0];
    const initialUserRole: RbacUserRole = {
      id: `ur-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      userId,
      roleId: studentRole.id,
      roleCode: studentRole.code,
      isActive: true,
      assignedAt: new Date().toISOString(),
      assignedBy: null,
      expiresAt: null,
    };

    const roles: RoleCode[] = [studentRole.code];
    const permissions = this.getPermissionsForRoles(roles);

    return {
      userRoles: [initialUserRole],
      roles,
      permissions,
    };
  },
};
