---
title: "Desarrollando FreakDays: Mi proyecto personal de tiempo libre"
date: "2025-01-28"
description: "Te cuento sobre FreakDays, una aplicación web que estoy desarrollando en mi tiempo libre para gestionar la vida friki de manera gamificada."
author: "Álvaro Fernández"
tags: ["desarrollo", "proyecto personal", "nuxt", "vue", "supabase", "gamificación"]
image: ""
---

# Desarrollando FreakDays: Mi proyecto personal de tiempo libre

En mi tiempo libre, estoy trabajando en **FreakDays**, una aplicación web moderna diseñada para personas frikis que buscan gestionar su vida cotidiana de manera gamificada y organizada. La aplicación combina funcionalidades de tracking, productividad y gamificación en una sola plataforma.

## ¿Qué es FreakDays?

FreakDays es tu compañero definitivo para gestionar tu vida friki. La idea surgió de la necesidad de tener una herramienta que combinara diferentes aspectos de mi vida diaria (anime, manga, entrenamientos, tareas) en un solo lugar, con un sistema de gamificación que hiciera todo más divertido y motivador.

## Características principales

### 🎮 Gamificación

El sistema de gamificación es el corazón de FreakDays. Los usuarios ganan EXP (experiencia) completando diferentes actividades, lo que les permite subir de nivel y desbloquear recompensas. Esto hace que gestionar tu vida diaria sea más entretenido y motivador.

### 📺 Gestión de Anime

He integrado la API de Jikan (MyAnimeList) para permitir a los usuarios:
- Crear listas personalizadas de anime
- Hacer seguimiento de episodios vistos
- Explorar un marketplace integrado con información detallada de series
- Mantener un registro completo de su progreso

### 📚 Colección de Manga

Para los amantes del manga físico:
- Tracking completo de tu colección
- Wishlist de volúmenes que quieres comprar
- Gestión de volúmenes y costos
- Organización por series y estados

### 💪 Entrenamientos

Un módulo completo para registrar:
- Workouts y ejercicios realizados
- Estadísticas de progreso
- Historial de entrenamientos
- Métricas de rendimiento

### ✅ Quests (Misiones)

Sistema de tareas diarias con:
- Diferentes niveles de dificultad
- Recompensas EXP según la complejidad
- Seguimiento de progreso
- Misiones recurrentes y únicas

### 👥 Party System

Funcionalidad social que permite:
- Crear grupos con códigos de invitación
- Gestionar miembros del grupo
- Compartir progreso y logros
- Competir de manera amigable

### 📅 Calendario

Un calendario mensual completo con:
- Drag and drop para eventos (desktop)
- Gestión táctil para mobile/tablet
- Integración con todas las funcionalidades
- Vista mensual y semanal

### 📊 Estadísticas

Dashboard completo con:
- Métricas de progreso
- Gráficos y visualizaciones
- Análisis de actividad
- Logros y hitos alcanzados

### 🖼️ Perfil personalizado

- Avatar y banner personalizables
- Editor de imágenes integrado
- Personalización completa del perfil
- Sistema de logros y badges

## Stack tecnológico

### Frontend

- **Nuxt.js 4**: Framework Vue.js con SSR y todas las optimizaciones modernas
- **Vue.js 3**: Con Composition API y `<script setup>`
- **TypeScript**: Para type safety y mejor DX
- **Tailwind CSS**: Para estilos utility-first
- **Shadcn-vue**: Componentes UI de alta calidad
- **Radix Vue**: Componentes accesibles y sin estilos
- **Pinia**: Para gestión de estado
- **Lucide Icons**: Iconos modernos y consistentes

### Backend

- **Supabase**: Backend as a Service que proporciona:
  - PostgreSQL como base de datos
  - Autenticación integrada
  - Storage para archivos
  - Real-time subscriptions

### ORM y Base de Datos

- **Prisma**: ORM que actúa como intermediario entre la aplicación y Supabase
- **PostgreSQL**: Base de datos relacional robusta

### Fuentes

He elegido una paleta de fuentes específica para diferentes propósitos:
- **Inter**: Para textos generales (legibilidad)
- **Outfit**: Para títulos (moderna y versátil)
- **Righteous**: Para logos y elementos destacados (impacto visual)
- **Inconsolata**: Para código (monoespaciada y clara)

## Arquitectura del proyecto

El proyecto sigue una arquitectura limpia y modular:

```
freak-days/
├── app/                    # Aplicación Nuxt
│   ├── components/         # Componentes Vue
│   ├── pages/              # Páginas/rutas
│   ├── layouts/            # Layouts
│   ├── composables/        # Composables Vue
│   └── assets/             # Assets estáticos
├── domain/                 # Lógica de negocio (framework-agnostic)
│   ├── types/              # Tipos TypeScript
│   └── modules/            # Módulos del dominio
├── stores/                 # Stores de Pinia
├── server/                 # Código del servidor (Nuxt)
│   ├── api/                # API Routes
│   └── utils/              # Utilidades del servidor
├── prisma/                 # Prisma ORM
│   └── schema.prisma      # Schema de Prisma
├── database/               # Migraciones SQL
│   └── migrations/         # Scripts de migración
└── tests/                  # Tests
```

## Desafíos y aprendizajes

### Desafíos técnicos

1. **Integración con Jikan API**: Trabajar con una API externa y manejar rate limits fue un desafío interesante. Implementé un sistema de caché para optimizar las peticiones.

2. **Sistema de gamificación**: Diseñar un sistema balanceado de EXP y niveles que fuera motivador pero no abrumador requirió bastante iteración.

3. **Calendario con drag and drop**: Implementar drag and drop que funcionara tanto en desktop como en mobile fue más complejo de lo esperado. Usé diferentes estrategias para cada plataforma.

4. **Editor de imágenes**: Crear un editor de imágenes funcional directamente en el navegador fue un reto técnico significativo.

### Aprendizajes

- **Nuxt.js 4**: Profundicé mucho en las nuevas características de Nuxt 4, especialmente en el manejo de server components y optimizaciones de rendimiento.

- **Prisma con Supabase**: Aprender a usar Prisma como intermediario con Supabase me ayudó a tener mejor control sobre las queries y migraciones.

- **Arquitectura limpia**: Separar la lógica de negocio del framework me ha permitido mantener el código más testeable y mantenible.

- **Gamificación UX**: Diseñar sistemas de gamificación que sean realmente motivadores requiere entender psicología del usuario, no solo código.

## Estado actual del proyecto

El proyecto está en **desarrollo activo**. Actualmente tengo implementadas las funcionalidades core:

- ✅ Sistema de autenticación
- ✅ Perfil de usuario con avatar y banner
- ✅ Gestión básica de anime y manga
- ✅ Sistema de quests
- ✅ Calendario básico
- ✅ Dashboard de estadísticas
- 🚧 Party system (en desarrollo)
- 🚧 Editor de imágenes avanzado (en desarrollo)

## Próximos pasos

1. **Completar el Party System**: Permitir que los usuarios formen grupos y compitan entre sí.

2. **Mejorar el sistema de gamificación**: Añadir más tipos de recompensas y logros.

3. **Optimizaciones de rendimiento**: Mejorar los tiempos de carga y la experiencia en mobile.

4. **Testing**: Aumentar la cobertura de tests, especialmente en la lógica de negocio.

5. **Documentación**: Crear documentación más completa para desarrolladores que quieran contribuir.

## Open Source y colaboración

FreakDays es un proyecto **open source** bajo una licencia personalizada que permite colaboración pero protege los derechos comerciales. Estoy abierto a contribuciones de la comunidad, especialmente en:

- Nuevas funcionalidades
- Mejoras de UI/UX
- Optimizaciones de rendimiento
- Corrección de bugs
- Documentación

Si te interesa el proyecto, puedes encontrarlo en [GitHub](https://github.com/alvaroofernaandez/freak-days).

## Reflexiones

Desarrollar FreakDays en mi tiempo libre ha sido una experiencia increíblemente enriquecedora. No solo me ha permitido aprender nuevas tecnologías y patrones, sino que también me ha dado la oportunidad de crear algo que realmente uso y disfruto.

La clave para mantener la motivación en un proyecto personal es:
- Construir algo que realmente necesites o uses
- Establecer metas pequeñas y alcanzables
- No tener miedo de refactorizar cuando aprendes algo nuevo
- Compartir el progreso con la comunidad

¿Tienes algún proyecto personal en desarrollo? ¡Me encantaría conocerlo!

---

**¿Quieres saber más sobre FreakDays?** Puedes seguir el desarrollo en [GitHub](https://github.com/alvaroofernaandez/freak-days) o contactarme si tienes preguntas o sugerencias.

