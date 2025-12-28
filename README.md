# 🚀 Portfolio Personal - Álvaro Fernández

[![Portfolio](https://img.shields.io/badge/Portfolio-Live-brightgreen)](https://alvarofernandez.dev)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white)](https://github.com/alvaroofernaandez)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://linkedin.com/in/alvaroofernaandez)

> Portfolio web personal construido con Next.js 16, TypeScript y Tailwind CSS. Sitio web moderno y responsivo que muestra mi experiencia profesional, proyectos destacados, blog autogestionable y stack tecnológico.

## ✨ Características

- **Diseño Moderno**: Interfaz limpia y profesional con animaciones fluidas
- **Blog Autogestionable**: Sistema de blog con Markdown, solo agrega archivos `.md` y se integran automáticamente
- **Animaciones SVG con GSAP**: Animaciones de scroll con SVG y GSAP ScrollTrigger
- **Formulario de Contacto**: Formulario funcional con validación y envío a webhook
- **Internacionalización**: Soporte para español e inglés con cambio dinámico de idioma
- **Completamente Responsivo**: Optimizado para todos los dispositivos
- **Navegación Suave**: Scroll suave entre secciones
- **Secciones Organizadas**: Hero, Experiencia, Sobre Mí, Blog y Contacto
- **Optimizado para SEO**: Meta tags, structured data y estructura semántica
- **Performance**: Carga rápida, lazy loading y optimizaciones
- **Testing**: Suite de tests con Jest y React Testing Library

## 🛠️ Stack Tecnológico

### Frontend
- **Next.js 16** - Framework React con App Router
- **React 19** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework CSS utility-first
- **GSAP** - Animaciones de alto rendimiento
- **Shadcn/ui** - Componentes UI accesibles
- **Radix UI** - Componentes primitivos sin estilos

### Backend y APIs
- **Next.js API Routes** - Endpoints del servidor
- **Supabase** (opcional) - Backend as a Service

### Blog
- **gray-matter** - Parseo de frontmatter en Markdown
- **remark** - Procesador de Markdown
- **remark-html** - Conversión de Markdown a HTML

### Formularios y Validación
- **React Hook Form** - Gestión de formularios
- **Zod** - Validación de esquemas TypeScript-first

### Testing
- **Jest** - Framework de testing
- **React Testing Library** - Testing de componentes React
- **@swc/jest** - Compilador rápido para Jest

### Herramientas y Despliegue
- **pnpm** - Gestor de paquetes
- **PostCSS** - Procesador de CSS
- **Autoprefixer** - Prefijos CSS automáticos
- **Vercel** - Plataforma de despliegue

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 18+ 
- pnpm (recomendado), npm, yarn o bun

### Clonar el repositorio
```bash
git clone https://github.com/alvaroofernaandez/alvarofernandez.dev.git
cd alvarofernandez.dev/
```

### Instalar dependencias
```bash
pnpm install
# o
npm install
# o
yarn install
```

### Configurar variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
WEBHOOK_URL=https://tu-webhook-url.com/webhook
```

### Ejecutar en desarrollo
```bash
pnpm dev
# o
npm run dev
# o
yarn dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Ejecutar tests
```bash
pnpm test
# o
npm run test
```

### Construir para producción
```bash
pnpm build
pnpm start
# o
npm run build
npm run start
```

## 📁 Estructura del Proyecto

```
├── app/
│   ├── api/                    # API Routes
│   │   └── contact/            # Endpoint del formulario de contacto
│   ├── blog/                   # Páginas del blog
│   │   ├── page.tsx           # Listado de posts
│   │   └── [slug]/            # Página individual de post
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── manifest.ts            # Web App Manifest
│   └── sitemap.ts             # Sitemap dinámico
├── src/
│   ├── components/
│   │   ├── common/            # Componentes reutilizables
│   │   │   ├── animation/    # Animaciones (typewriter, counter, SVG)
│   │   │   ├── section/      # Section y SectionHeader
│   │   │   └── ...
│   │   ├── features/         # Componentes por feature
│   │   │   ├── hero/
│   │   │   ├── experience/
│   │   │   ├── about/
│   │   │   ├── contact/
│   │   │   └── blog/
│   │   └── layout/           # Componentes de layout
│   │       └── nav/
│   ├── hooks/                 # Custom hooks
│   ├── lib/                   # Utilidades y librerías
│   │   └── posts.ts          # Utilidades para el blog
│   ├── types/                 # Tipos TypeScript
│   ├── utils/                 # Funciones utilitarias
│   └── constants/             # Constantes del proyecto
├── content/
│   └── posts/                 # Posts del blog en Markdown
├── contexts/                   # React Contexts
│   └── LanguageContext.tsx   # Contexto de idioma
├── messages/                   # Traducciones i18n
│   ├── es.json
│   └── en.json
├── data/
│   ├── experience.ts
│   └── projects.ts
├── public/
│   ├── fonts/                # Fuentes locales
│   └── img.jpg
└── README.md
```

## 📝 Blog Autogestionable

El blog está completamente autogestionable. Solo necesitas agregar archivos Markdown en la carpeta `content/posts/` y se integrarán automáticamente.

### Crear un nuevo post

1. Crea un archivo `.md` en `content/posts/`
2. Agrega frontmatter con metadata:

```yaml
---
title: "Título del post"
date: "2025-01-28"
description: "Descripción breve"
author: "Álvaro Fernández"
tags: ["tag1", "tag2"]
---
```

3. Escribe tu contenido en Markdown
4. ¡Listo! El post aparecerá automáticamente en `/blog`

## 🧪 Testing

```bash
# Ejecutar todos los tests
pnpm test

# Modo watch
pnpm test:watch

# Con cobertura
pnpm test:coverage
```

## 🌐 Internacionalización

El sitio soporta múltiples idiomas (español e inglés). Las traducciones se encuentran en `messages/` y se pueden cambiar dinámicamente desde el selector de idioma en el nav.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-feature`)
3. Commit tus cambios (`git commit -m 'Agregar nueva feature'`)
4. Push a la rama (`git push origin feature/nueva-feature`)
5. Abre un Pull Request

### Convenciones

- Sigue las convenciones de código del proyecto
- Añade tests para nuevas funcionalidades
- Actualiza la documentación si es necesario
- Asegúrate de que todos los tests pasen

## 📞 Contacto

- **Email**: alvaroofernaandez@gmail.com
- **LinkedIn**: [linkedin.com/in/alvaroofernaandez](https://linkedin.com/in/alvaroofernaandez)
- **GitHub**: [github.com/alvaroofernaandez](https://github.com/alvaroofernaandez)
- **Portfolio**: [alvarofernandez.dev](https://alvarofernandez.dev)

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo una licencia personalizada.

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!

**Hecho con ❤️ en Córdoba, España**
