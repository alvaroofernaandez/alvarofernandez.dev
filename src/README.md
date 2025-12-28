# Estructura del Proyecto Refactorizado

Esta es la nueva estructura modular y organizada del proyecto.

## 📁 Estructura de Carpetas

```
src/
├── components/          # Componentes React organizados por dominio
│   ├── common/         # Componentes reutilizables comunes
│   │   ├── animation/  # Componentes de animación
│   │   ├── section/    # Componentes de sección
│   │   ├── separator/  # Separadores
│   │   └── scroll-indicator/ # Indicadores de scroll
│   ├── features/      # Componentes de características/features
│   │   ├── hero/      # Sección Hero
│   │   ├── experience/ # Sección de experiencia
│   │   ├── about/     # Sección sobre mí
│   │   └── contact/   # Sección de contacto
│   ├── layout/        # Componentes de layout
│   │   └── nav/       # Navegación
│   └── seo/           # Componentes SEO
├── constants/          # Constantes centralizadas
├── hooks/             # Hooks personalizados
├── types/             # Tipos TypeScript
└── utils/             # Utilidades y helpers
```

## 🎯 Principios de Organización

### 1. **Separación por Dominio**
- `common/`: Componentes reutilizables sin lógica de negocio
- `features/`: Componentes específicos de características
- `layout/`: Componentes de estructura y layout
- `seo/`: Componentes relacionados con SEO

### 2. **Modularidad**
- Cada componente tiene su propia carpeta cuando es necesario
- Componentes pequeños y enfocados en una responsabilidad
- Uso de `memo()` para optimización de rendimiento

### 3. **Reutilización**
- Componentes comunes extraídos y reutilizables
- Hooks personalizados para lógica compartida
- Utilidades centralizadas

### 4. **Tipado Fuerte**
- Tipos TypeScript centralizados en `types/`
- Interfaces bien definidas
- Constantes tipadas

## 📦 Componentes Principales

### Common Components
- `Section`: Wrapper de sección con soporte para id y className
- `SectionHeader`: Header estandarizado para secciones
- `TypewriterText`: Animación de texto tipo máquina de escribir
- `CounterAnimation`: Animación de contador numérico
- `ScrollIndicator`: Indicador de scroll
- `SeparatorLine`: Línea separadora

### Feature Components
- `HeroSection`: Sección principal con hero
- `ExperienceSection`: Sección de experiencia profesional
- `AboutSection`: Sección sobre mí
- `ContactSection`: Sección de contacto

### Layout Components
- `Nav`: Navegación principal con selector de idioma

### SEO Components
- `StructuredData`: Datos estructurados para SEO
- `StructuredBreadcrumb`: Breadcrumbs estructurados

## 🪝 Hooks Personalizados

- `useScrollSection`: Detecta la sección activa en el scroll
- `useClickOutside`: Detecta clicks fuera de un elemento

## 🔧 Utilidades

- `cn()`: Función helper para combinar clases de Tailwind
- `scrollToSection()`: Función para hacer scroll suave a una sección
- `getActiveSection()`: Obtiene la sección activa según el scroll

## 📝 Constantes

- `SITE_CONFIG`: Configuración del sitio (URLs, redes sociales, etc.)
- `NAV_SECTIONS`: Secciones de navegación
- `MAIN_TECHNOLOGIES`: Tecnologías principales
- `ANIMATION_DELAYS`: Delays de animación

## 🚀 Mejoras Implementadas

1. **Rendimiento**
   - Memoización de componentes con `memo()`
   - **Lazy loading implementado** para todas las secciones
   - Optimización de re-renders
   - Code splitting automático

2. **Mantenibilidad**
   - Código modular y organizado
   - Separación de responsabilidades
   - Fácil de extender

3. **Escalabilidad**
   - Estructura preparada para crecimiento
   - Componentes reutilizables
   - Patrones consistentes

4. **Accesibilidad**
   - ARIA labels donde es necesario
   - Navegación por teclado
   - Semántica HTML correcta

5. **SEO**
   - Datos estructurados organizados
   - Breadcrumbs estructurados
   - Meta tags optimizados

6. **Testing**
   - Jest + React Testing Library configurado
   - Tests unitarios para componentes críticos
   - Tests para utilidades y hooks
   - Coverage configurado

## 📖 Uso

### Importar Componentes

```typescript
// Desde índices (recomendado)
import { HeroSection, ExperienceSection } from "@/src/components/features"
import { Section, SectionHeader } from "@/src/components/common"
import { Nav } from "@/src/components/layout"

// O directamente
import { HeroSection } from "@/src/components/features/hero/hero-section"
```

### Usar Hooks

```typescript
import { useScrollSection } from "@/src/hooks/use-scroll-section"
import { useClickOutside } from "@/src/hooks/use-click-outside"
```

### Usar Utilidades

```typescript
import { cn, scrollToSection } from "@/src/utils"
import { SITE_CONFIG, MAIN_TECHNOLOGIES } from "@/src/constants"
```

## 🧪 Testing

### Ejecutar Tests

```bash
# Ejecutar todos los tests
npm test

# Modo watch
npm run test:watch

# Con coverage
npm run test:coverage
```

### Estructura de Tests

Los tests están organizados junto a los componentes que prueban:

```
src/
├── components/
│   └── common/
│       ├── __tests__/
│       │   └── section.test.tsx
│       └── section/
└── utils/
    ├── __tests__/
    │   └── index.test.ts
    └── index.ts
```

## ⚡ Lazy Loading

Todas las secciones principales están cargadas con lazy loading para mejorar el rendimiento inicial:

```typescript
const HeroSection = lazy(() =>
  import("@/src/components/features/hero/hero-section").then((mod) => ({
    default: mod.HeroSection,
  }))
)
```

Cada sección tiene un `Suspense` boundary con un skeleton de carga.

## 🔄 Migración desde Estructura Anterior

Los componentes antiguos en `components/` han sido eliminados. Solo se mantiene la carpeta `components/ui/` para los componentes de shadcn/ui.
