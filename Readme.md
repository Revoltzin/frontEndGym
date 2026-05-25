# FitApp Frontend

Front-end do FitApp em React + Vite + TypeScript.

## Stack

- React
- Vite
- TypeScript
- CSS puro com variaveis de tema

## Scripts

```bash
npm install
npm run dev
npm run build
```

## Estrutura

```text
frontend/
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── App.tsx
│   ├── main.tsx
│   ├── styles.css
│   └── types.ts
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Integracao futura com API REST

Quando o backend estiver conectado, os dados mockados em `src/data/workouts.ts` podem ser substituidos por chamadas HTTP para a API REST Java.

