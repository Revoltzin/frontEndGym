<<<<<<< HEAD
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
=======
A UI está em HTML/CSS puro, sem dependências, então você pode abrir direto no navegador. Ela inclui sidebar, menu, cards de treino, botão “Criar novo treino”, avatar e layout responsivo.

Para evolução real do projeto, minha recomendação é:

React + Vite + TypeScript para o front-end.
Java Spring Boot para o back-end.
Comunicação entre eles por API REST.
Depois, se quiser estilizar mais rápido: Tailwind CSS ou CSS Modules.


Necessita linkar com o back End em RestApi
>>>>>>> 271f4af (Readme)

