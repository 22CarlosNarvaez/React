/*
 * Destinos de la navbar: los usan Header (para dibujar el menú)
 * y SearchBar (para saber a dónde enviarte cuando buscas).
 *
 * - to:        ruta de react-router. Sin `to` = opción pendiente (no es buscable).
 * - keywords:  palabras extra con las que también se encuentra el destino.
 * - divider:   línea separadora del menú (no es buscable).
 */
export const links = [
    {
        to: '/',
        label: 'Inicio',
        end: true,
        keywords: ['home', 'principal', 'aportes', 'científicos colombianos']
    },
    {
        to: '/props',
        label: 'Props',
        keywords: ['científicos', 'personas', 'avances', 'gobierno del cambio']
    },
    {
        to: '/api',
        label: 'API',
        keywords: ['datos', 'servicio', 'interfaz de programación']
    }
];

export const menus = [
    {
        label: 'Cuenta',
        to: '/login', // al buscar "cuenta" te lleva aquí
        keywords: ['usuario', 'acceso'],
        items: [
            {
                to: '/login',
                label: 'Iniciar sesión',
                keywords: ['login', 'entrar', 'ingresar', 'acceder']
            },
            {
                to: '/register',
                label: 'Registrarse',
                keywords: ['register', 'registro', 'crear cuenta', 'sign up']
            },
            { divider: true },
            {
                to: '/forgot-password',
                label: 'Recuperar contraseña',
                keywords: ['olvidé', 'olvide', 'forgot', 'password', 'clave']
            }
        ]
    },
    {
        label: 'Más opciones',
        items: [
            { label: 'Mi perfil' },
            { label: 'Configuración' },
            { label: 'Notificaciones' },
            { divider: true },
            { label: 'Ayuda y soporte' },
            { label: 'Términos y condiciones' }
        ]
    }
];