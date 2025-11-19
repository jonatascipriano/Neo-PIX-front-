# NEOPIX

NEOPIX é uma aplicação front-end em React criada com Vite. Trata-se de uma Single Page Application (SPA) com rotas básicas (`login` e `home`) e configuração de desenvolvimento pronta (Vite, ESLint).

**Resumo:**

- **Framework:** React 19
- **Bundler / Dev server:** Vite
- **Roteamento:** react-router-dom
- **Lint:** ESLint

**Objetivo do repositório**: servir como base para um projeto de interface (ex.: painel/fluxo de pagamento, autenticação) com estrutura simples, pronta para expandir.

## Tecnologias

- React 19
- Vite
- React Router DOM
- ESLint

## Recursos

- Roteamento entre páginas (`/login`, `/`) usando `react-router-dom`.
- Configuração de desenvolvimento com HMR via Vite.
- Scripts úteis: `dev`, `build`, `preview`, `lint`.

## Pré-requisitos

- Node.js (recomendo v18+)
- npm (ou pnpm/yarn, adaptando os comandos)

## Instalação e execução (Windows PowerShell)

1. Instale dependências:

```powershell
npm install
```

2. Inicie o servidor de desenvolvimento:

```powershell
npm run dev
```

3. Acesse a aplicação em `http://localhost:5173` (porta padrão do Vite).

4. Build para produção:

```powershell
npm run build

# Para servir a build localmente (preview):
npm run preview
```

5. Rodar o lint:

```powershell
npm run lint
```

## Scripts (do `package.json`)

- `dev` — inicia o servidor Vite em modo desenvolvimento.
- `build` — gera a build para produção.
- `preview` — serve a build gerada localmente para testes.
- `lint` — executa o ESLint sobre o projeto.

## Estrutura do projeto (resumo)

```
neopix/
├─ public/
├─ src/
│  ├─ assets/
│  ├─ home/
│  │  ├─ home.jsx
│  │  └─ home.css
│  ├─ login/
│  │  ├─ login.jsx
│  │  └─ login.css
│  ├─ App.jsx
│  ├─ App.css
│  ├─ main.jsx
│  └─ router.jsx
├─ index.html
├─ package.json
└─ vite.config.js
```

Observações rápidas:

- A pasta `src/login` contém a tela de autenticação.
- A pasta `src/home` contém a tela principal pós-login.
- `router.jsx` define as rotas com `react-router-dom`.

## Como contribuir

1. Fork o repositório.
2. Crie uma branch com uma descrição curta: `feat/nova-funcionalidade`.
3. Faça commits atômicos com mensagens claras.
4. Abra um Pull Request explicando a mudança.

## Dúvidas / Contato

Se quiser que eu adapte o README (ex.: adicionar screenshots, demo, deploy, instruções de CI/CD, ou preencher mais detalhes sobre as telas), diga o que prefere e eu atualizo.

---
Arquivo gerado automaticamente pelo assistente. Boa codificação!
