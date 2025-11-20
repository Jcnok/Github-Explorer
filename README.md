# GitHub Explorer: Uma Nova Janela para o Universo do Código

Você já se sentiu sobrecarregado ao tentar encontrar perfis de desenvolvedores e navegar por seus projetos no GitHub? A interface, embora poderosa, muitas vezes pode parecer utilitária demais, faltando uma experiência mais focada e agradável.

O **GitHub Explorer** nasceu dessa necessidade. Ele transforma a exploração de perfis do GitHub em uma jornada visualmente atraente e direta. Em vez de se perder em abas, você obtém uma visão clara e organizada da história de um desenvolvedor, seus projetos mais importantes e sua atividade, tudo em um design moderno e limpo.

[![Deploy with Vercel](https://vercel.com/button)](https://github-explorer-kappa-woad.vercel.app/)


[![Pré-visualização do GitHub Explorer](image.png)](https://github-explorer-kappa-woad.vercel.app/)

---

## ✨ Funcionalidades Principais

*   **Busca Inteligente de Usuários:** Encontre qualquer desenvolvedor no GitHub com uma busca rápida e em tempo real.
*   **Perfil de Usuário Detalhado:** Visualize informações essenciais do perfil, incluindo biografia, contagem de seguidores, e um link direto para o perfil no GitHub.
*   **Listagem de Repositórios com Paginação:** Navegue facilmente por todos os repositórios de um usuário com um sistema de paginação simples.
*   **Tema Claro e Escuro (Dark/Light Mode):** Alterne entre os temas para uma experiência de visualização confortável a qualquer hora do dia. O tema escolhido é salvo para sua próxima visita.
*   **Design Responsivo:** Acesse de qualquer dispositivo, seja no desktop, tablet ou celular, com uma interface que se adapta perfeitamente.

## 🚀 Como Usar a Aplicação

1.  **Pesquise por um Usuário:** Na página inicial, digite o nome de usuário do GitHub que deseja encontrar e pressione Enter ou clique no botão de busca.
2.  **Explore o Perfil:** Se o usuário for encontrado, você verá um card com suas informações principais. Clique neste card para ser levado à página de detalhes.
3.  **Navegue pelos Repositórios:** Na página de detalhes, você encontrará uma lista dos repositórios públicos do usuário. Use os botões de paginação na parte inferior para ver mais projetos.
4.  **Alterne o Tema:** Clique no ícone de sol/lua no canto superior direito para mudar o tema da aplicação.

## 🛠️ Tecnologias Utilizadas

*   **Core:** React, TypeScript
*   **Build Tool:** Vite
*   **Estilização:** Tailwind CSS
*   **Roteamento:** React Router DOM
*   **Requisições API:** GitHub REST API (via `fetch`)

## ⚙️ Como Rodar o Projeto Localmente

Para executar este projeto em sua máquina local, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/Jcnok/Github-Explorer.git
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd Github-Explorer
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

5.  Abra seu navegador e acesse `http://localhost:5173` (ou a porta indicada no seu terminal).

## 📝 Licença

Este projeto é distribuído sob a licença MIT.
