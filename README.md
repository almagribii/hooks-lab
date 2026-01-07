# 🎣 React Hooks Learning Lab

Proyek pembelajaran interaktif untuk memahami dan mempraktikkan berbagai React Hooks. Dibangun dengan **React 19**, **TypeScript**, **Vite**, dan **Tailwind CSS**.

## 📋 Daftar Isi

- [Fitur](#fitur)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Setup & Instalasi](#setup--instalasi)
- [Menjalankan Proyek](#menjalankan-proyek)
- [Struktur Proyek](#struktur-proyek)
- [Hooks yang Dipelajari](#hooks-yang-dipelajari)
- [Penjelasan Setiap Hook](#penjelasan-setiap-hook)

## ✨ Fitur

- 📚 Lab interaktif untuk 7 React Hooks utama
- 🎨 UI modern dengan Tailwind CSS
- 📱 Responsive design
- 🔄 Hot Module Replacement (HMR) untuk development
- 🧹 ESLint configuration untuk code quality
- 📦 TypeScript untuk type safety

## 🛠️ Teknologi yang Digunakan

| Teknologi | Versi | Keterangan |
|-----------|-------|-----------|
| React | 19.2.0 | Library UI |
| TypeScript | ~5.9.3 | Type safety |
| Vite | 7.2.4 | Build tool & dev server |
| Tailwind CSS | 4.1.18 | Styling utility |
| React Router | 7.11.0 | Navigation |
| Lucide React | 0.562.0 | Icon library |
| React Icons | 5.5.0 | Icon library |

## 📦 Setup & Instalasi

### Prerequisites
- Node.js (v18 atau lebih tinggi)
- npm atau yarn

### Langkah-langkah

1. Clone atau download proyek ini:
```bash
cd /home/almagribi/Repo/Exercise/hooks
```

2. Instalasi dependencies:
```bash
npm install
```

## 🚀 Menjalankan Proyek

### Development Mode (dengan HMR)
```bash
npm run dev
```
Server akan berjalan di `http://localhost:5173`

### Production Build
```bash
npm run build
```

### Preview Build
```bash
npm run preview
```

### Lint Code
```bash
npm run lint
```

## 📁 Struktur Proyek

```
hooks/
├── src/
│   ├── components/           # Komponen reusable
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Footer.tsx
│   │   ├── MainLayout.tsx
│   │   └── CollaborationInvite.tsx
│   ├── hooks-lab/           # Lab untuk setiap hook
│   │   ├── useCallback/
│   │   ├── useContext/      # AuthLab, DarkLightMode, LanguageMode
│   │   ├── useEffect/       # EventListener, FetchingData, Sync, Timer
│   │   ├── useMemo/
│   │   ├── useReducer/
│   │   ├── useRef/
│   │   └── useState/        # Counter, Forms, Toggle
│   ├── pages/               # Page components untuk setiap hook
│   ├── main.tsx
│   └── Root.tsx
├── public/                  # Static assets
├── package.json
├── vite.config.ts
├── tsconfig.json
└── eslint.config.js
```

## 🎣 Hooks yang Dipelajari

1. **useState** - State management di functional components
2. **useEffect** - Side effects dan lifecycle
3. **useContext** - Context API untuk global state
4. **useCallback** - Optimisasi callback functions
5. **useMemo** - Optimisasi computed values
6. **useReducer** - Complex state management
7. **useRef** - Direct DOM access dan mutable values

## 📖 Penjelasan Setiap Hook

### 1. useState
**Lokasi**: `src/hooks-lab/useState/`

Untuk mengelola state lokal di functional components.

**Contoh penggunaan**:
- Counter: Menambah/mengurangi nilai
- Forms: Input form handling
- Toggle: Toggle boolean state

### 2. useEffect
**Lokasi**: `src/hooks-lab/useEffect/`

Untuk menjalankan side effects di komponen React.

**Contoh penggunaan**:
- EventListener: Menambah/menghapus event listeners
- FetchingData: Fetch data dari API
- Synchronization: Sinkronisasi dengan sistem eksternal
- Timer: Interval dan timeout

### 3. useContext
**Lokasi**: `src/hooks-lab/useContext/`

Untuk mengakses context value tanpa prop drilling.

**Contoh penggunaan**:
- AuthLab: Authentication context
- DarkLightMode: Theme switching
- LanguageMode: Multi-language support

### 4. useCallback
**Lokasi**: `src/hooks-lab/useCallback/`

Untuk memoize function dan mencegah re-creation di setiap render.

**Use case**: Optimisasi performa saat passing callbacks ke child components.

### 5. useMemo
**Lokasi**: `src/hooks-lab/useMemo/`

Untuk memoize computed values dan mencegah re-computation.

**Use case**: Optimisasi performa untuk expensive calculations.

### 6. useReducer
**Lokasi**: `src/hooks-lab/useReducer/`

Untuk mengelola complex state dengan reducer pattern.

**Use case**: State dengan multiple sub-values atau complex transitions.

### 7. useRef
**Lokasi**: `src/hooks-lab/useRef/`

Untuk akses langsung ke DOM atau menyimpan mutable value.

**Use case**: Input focus, timer IDs, DOM measurements.

## 💡 Tips Pembelajaran

1. **Mulai dari useState**: Pahami dasar state management
2. **Lanjut ke useEffect**: Pahami lifecycle dan side effects
3. **Eksplorasi useContext**: Global state management
4. **Optimisasi dengan useCallback & useMemo**: Performa
5. **useReducer untuk complex logic**: Advanced state management
6. **useRef untuk special cases**: DOM access dan mutable refs

## 🔗 Resources

- [React Hooks Documentation](https://react.dev/reference/react/hooks)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## 📝 Catatan

- Semua contoh menggunakan **Functional Components** (bukan Class Components)
- Setiap hook memiliki **multiple examples** untuk better understanding
- Code menggunakan **TypeScript** untuk type safety
- Styling menggunakan **Tailwind CSS** untuk responsive design

## 🤝 Kontribusi

Untuk menambah contoh atau perbaikan:
1. Buat branch baru
2. Commit changes
3. Push ke branch
4. Buat Pull Request
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
