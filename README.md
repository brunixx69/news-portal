# 🚀 TechHub News Portal

Una plataforma moderna de noticias de tecnología y hardware construida con las mejores prácticas de desarrollo frontend. TechHub ofrece una experiencia premium con consumo de datos en tiempo real, búsqueda inteligente y un diseño adaptativo de alto rendimiento.

![TechHub Preview](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200)

## ✨ Características Principales

- **Real-time News**: Integración directa con [GNews API](https://gnews.io/) para obtener las últimas noticias.
- **Resiliencia Extrema**: Sistema de fallback a `MockData` de alta calidad en caso de fallos de API o falta de conexión.
- **Búsqueda Global**: Buscador con **debounce** para una experiencia de filtrado fluida.
- **Modo Oscuro/Claro**: Tema dinámico con persistencia en `localStorage`.
- **Diseño Premium**: Interfaz construida con **Material UI v5/v6**, tipografía Inter y animaciones suaves.
- **Caché Inteligente**: Gestión de estado asíncrono con **TanStack Query** (StaleTime: 5 min).

## 🛠️ Tech Stack

- **Framework**: React 18 (Vite)
- **Lenguaje**: TypeScript (Strict Mode)
- **UI & Styling**: Material UI (MUI), Emotion
- **Fetch & State**: TanStack Query (React Query), Axios
- **Iconografía**: MUI Icons
- **Fechas**: date-fns

## 📦 Instalación y Uso

1. **Clonar el repositorio**:

   ```bash
   git clone <url-del-repo>
   cd news-portal
   ```

2. **Instalar dependencias**:

   ```bash
   npm install
   ```

3. **Configurar variables de entorno**:
   Crea un archivo `.env` en la raíz basado en `.env.example`:

   ```env
   VITE_GNEWS_API_KEY=tu_clave_de_gnews_aqui
   ```

4. **Iniciar servidor de desarrollo**:

   ```bash
   npm run dev
   ```

## 🏗️ Arquitectura del Proyecto

```text
src/
├── api/             # Servicios de API y configuración de QueryClient
├── components/      # Componentes de UI reutilizables
├── context/         # Estado global (Theme, Category, Search)
├── hooks/           # Custom hooks para lógica de negocio
├── theme/           # Definición de temas dinámicos
└── types/           # Definiciones de TypeScript
```

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](./LICENSE) para más detalles.

---
Desarrollado por Bruno Leon.
