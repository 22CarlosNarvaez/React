# Mi primer proyecto REACT (RED SCIENCE)


Aplicación web progresiva (PWA) construida con React y Vite. El proyecto reúne una página de inicio, pantallas de acceso y registro, recuperación de contraseña, navegación adaptable y cambio de tema claro/oscuro.

> La autenticación y el envío de recuperación de contraseña son demostraciones de interfaz. No hay un backend conectado ni se crean cuentas reales.

## Requisitos

- Node.js compatible con Vite 8 (Node.js `20.19+` o `22.12+`).
- npm.

## Instalación y desarrollo

Clona el repositorio y entra en la carpeta del proyecto:

```bash
git clone https://github.com/22CarlosNarvaez/React.git
cd React
npm install
npm run dev
```

Vite mostrará en la terminal la dirección local para abrir la aplicación en el navegador.

## Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo con recarga en caliente. |
| `npm run build` | Genera la versión de producción en `dist/`. |
| `npm run preview` | Sirve localmente la compilación de producción. |
| `npm run lint` | Analiza el código con Oxlint. |

## Funcionalidades

- **Inicio (`/`)**: página de bienvenida con seis tarjetas de ejemplo.
- **Inicio de sesión (`/login`)**: formulario con validación básica de campos y enlaces a registro y recuperación. La autenticación está simulada en el cliente.
- **Registro (`/register`)**: formulario con validación de campos, longitud mínima de contraseña y confirmación. No guarda usuarios; al completarlo, navega a la pantalla de inicio de sesión.
- **Recuperar contraseña (`/forgot-password`)**: formulario de correo con estado de confirmación simulado. No envía mensajes.
- **API (`/api`)**: pantalla del componente de API, accesible desde la navegación.
- **Navegación**: menú con enlaces a las pantallas existentes y opciones visuales aún sin una ruta o acción implementada.
- **Tema claro/oscuro**: detecta la preferencia del sistema, permite cambiar el tema y conserva la selección en `localStorage`.
- **Búsqueda**: el formulario de navegación construye una URL `/search?q=...`; la pantalla de resultados todavía no está implementada y, por ello, esa ruta muestra el 404.
- **PWA**: configuración de manifiesto, registro/actualización del service worker, recursos para instalación e imagen de captura.
- **Diseño adaptable**: maquetación con utilidades y componentes de Bootstrap.

Las rutas no definidas muestran una página **404 - Página no encontrada**.

## Tecnologías

- React 19 y React DOM.
- Vite 8 y `@vitejs/plugin-react`.
- React Router DOM 7.
- Bootstrap 5.
- `vite-plugin-pwa` y Workbox para capacidades PWA.
- Oxlint para análisis estático.
- `styled-components` está declarado como dependencia; la interfaz actual utiliza principalmente clases de Bootstrap.

## Estructura del proyecto

```text
.
├── index.html                         # Documento HTML, metadatos y punto de montaje
├── package.json                       # Dependencias y scripts npm
├── package-lock.json                  # Versiones bloqueadas de dependencias
├── vite.config.js                     # Vite y configuración de la PWA
├── public/
│   ├── PWA.png                        # Captura declarada en el manifiesto
│   ├── descarga.png                   # Recurso gráfico
│   ├── descargab.png                  # Recurso gráfico
│   ├── favicon.svg                    # Favicon disponible
│   └── icons/
│       ├── icon-192.png               # Icono PWA de 192 px
│       ├── icon-512.png               # Icono PWA de 512 px
│       ├── icon-maskable-512.png       # Icono PWA adaptable
│       ├── icons.svg                  # Recursos SVG
│       └── logo.png                   # Logotipo
└── src/
    ├── App.jsx                        # Rutas y estructura común de la aplicación
    ├── main.jsx                       # Montaje de React e importación de Bootstrap
    ├── assets/
    │   ├── hero.png                   # Imagen principal
    │   ├── react.svg                  # Recurso SVG
    │   └── vite.svg                   # Recurso SVG
    ├── features/
    │   ├── auth/
    │   │   └── components/
    │   │       ├── ForgotPassword.jsx # Recuperación de contraseña
    │   │       ├── Login.jsx          # Inicio de sesión
    │   │       └── Register.jsx       # Registro
    │   └── landing/
    │       └── components/
    │           ├── Boton.jsx          # Botón reutilizable de ejemplo
    │           ├── Footer.jsx         # Pie de página
    │           ├── Header.jsx         # Navegación y controles
    │           ├── Main.jsx           # Contenido de inicio
    │           ├── SearchBar.jsx      # Formulario de búsqueda
    │           └── ThemeToggle.jsx    # Control de tema
    └── shared/
        └── hooks/
            └── useTheme.js            # Estado y persistencia del tema
```

## Rutas

| Ruta | Pantalla |
| --- | --- |
| `/` | Inicio |
| `/login` | Iniciar sesión |
| `/register` | Crear cuenta |
| `/forgot-password` | Recuperar contraseña |
| `/api` | Componente API |
| Cualquier otra ruta | Página 404 |

## Compilar y revisar

Para crear y revisar la compilación de producción:

```bash
npm run build
npm run preview
```

Para ejecutar el análisis estático:

```bash
npm run lint
```

## Estado y siguientes pasos

- Conectar los formularios de acceso, registro y recuperación a un backend y definir el manejo seguro de sesión.
- Implementar la página de resultados de búsqueda para `/search`.
- Sustituir las opciones de navegación de ejemplo por enlaces y funcionalidades reales.
- Revisar la configuración PWA si se modifican las rutas, el nombre, los iconos o los recursos precargados.

Para instalar la PWA en un dispositivo, sirve la aplicación mediante HTTPS o desde `localhost` y usa la opción de instalación del navegador compatible.
