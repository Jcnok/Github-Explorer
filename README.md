# GitHub Explorer Pro

![GitHub Explorer Banner](https://via.placeholder.com/1200x600/0f172a/6d28d9?text=GitHub+Explorer+Pro)

> Discover developer stories, explore repositories, and navigate the open-source universe with a modern, high-performance interface.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

## ✨ Features

*   **🎨 Modern UI/UX:** Glassmorphism, smooth animations, and storytelling elements to engage users.
*   **🌓 Dark/Light Theme:** System-aware theming with manual toggle and persistence.
*   **⚡ High Performance:** Debounced search, optimized rendering, and clean code architecture.
*   **📱 Fully Responsive:** Mobile-first design that looks great on any device.
*   **🔍 Advanced Search:** Real-time user lookup using GitHub's REST API.
*   **📄 Pagination:** Efficient pagination for browsing large repository lists.

## 🚀 Deploy no GitHub Pages

Este projeto foi configurado com `HashRouter` para ser totalmente compatível com o GitHub Pages.

### Passo a Passo para Deploy:

1.  **Crie um repositório** no GitHub.
2.  **Suba os arquivos** do projeto para o repositório (commits).
3.  Vá até a aba **Settings** (Configurações) do repositório.
4.  No menu lateral esquerdo, clique em **Pages**.
5.  Em **Build and deployment** > **Branch**, selecione `main` (ou `master`) e a pasta `/root` (ou a pasta onde estão seus arquivos).
6.  Clique em **Save**.

O GitHub irá gerar um link (ex: `https://seu-usuario.github.io/seu-repositorio/`). A aplicação funcionará imediatamente.

## 🛠️ Stack Tecnológica

*   **Core:** React 18, TypeScript
*   **Estilização:** Tailwind CSS, CSS Variables
*   **Roteamento:** React Router DOM (HashRouter)
*   **Dados:** GitHub REST API
*   **Ícones:** SVG Icons otimizados (sem dependências externas pesadas)

## 📁 Estrutura de Pastas

```
/
├── components/         # Componentes de UI reutilizáveis
│   ├── Hero.tsx       # Seção de marketing inicial
│   ├── Navbar.tsx     # Barra de navegação responsiva
│   ├── UserCard.tsx   # Card de exibição de usuário
│   ├── RepoList.tsx   # Lista de repositórios
│   └── ...
├── lib/               # Contextos e utilitários
│   └── ThemeContext.tsx
├── services/          # Integração com APIs
│   └── githubService.ts
├── types/             # Definições de Tipos TypeScript
├── App.tsx            # Componente Raiz e Roteamento
├── index.html         # Ponto de entrada (Import Maps & Tailwind)
└── index.tsx          # Renderização React
```

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor, sinta-se à vontade para enviar um Pull Request.

1.  Fork o projeto
2.  Crie sua Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4.  Push para a Branch (`git push origin feature/AmazingFeature`)
5.  Abra um Pull Request

## 📝 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.