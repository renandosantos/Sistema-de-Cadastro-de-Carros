# 🚗 Sistema de Cadastro de Carros

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Handlebars.js](https://img.shields.io/badge/Handlebars.js-F57B22?style=for-the-badge&logo=handlebars.js&logoColor=white)](https://handlebarsjs.com/)

## 📝 Descrição do Projeto

Este é um projeto back-end simples e funcional, desenvolvido para praticar e demonstrar as habilidades essenciais de um desenvolvedor júnior. O sistema permite realizar as quatro operações básicas de um CRUD (Create, Read, Update, Delete) em um banco de dados MySQL, utilizando Node.js e o framework Express.

A aplicação inclui uma interface de usuário minimalista para interação, com design limpo e responsivo.

## ✨ Funcionalidades

- **Criar (Create):** Formulário para adicionar novos carros ao banco de dados.
- **Ler (Read):** Listagem de todos os carros cadastrados, com opção de ver detalhes ou editar/deletar diretamente da lista.
- **Atualizar (Update):** Formulário pré-preenchido com os dados de um carro específico para edição.
- **Deletar (Delete):** Remoção de um carro do banco de dados com apenas um clique.

## 🛠️ Tecnologias Utilizadas

**Back-end:**
- `Node.js`: Ambiente de execução.
- `Express.js`: Framework para a criação do servidor e rotas.
- `MySQL2`: Driver para conexão e interação com o banco de dados MySQL.
- `Nodemon`: Ferramenta para monitorar e reiniciar o servidor automaticamente durante o desenvolvimento.

**Front-end:**
- `Handlebars.js`: Motor de templates para renderizar as páginas dinamicamente.
- `HTML5`: Estrutura das páginas.
- `CSS3`: Estilização e layout da interface.

## 🚀 Como Rodar o Projeto

### Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/en/) e o [MySQL](https://www.mysql.com/) instalados em sua máquina.

### Passos

1.  **Clone este repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    ```
2.  **Navegue até a pasta do projeto:**
    ```bash
    cd seu-repositorio
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
    ```
4.  **Configure o Banco de Dados:**
    - Crie um banco de dados chamado `car_system` no seu MySQL.
    - Crie uma tabela `cars` com as colunas `id` (INT, PRIMARY KEY, AUTO_INCREMENT), `modelo`, `marca`, `ano` e `cor`.

5.  **Crie um arquivo de configuração:**
    - Na raiz do projeto, crie um arquivo chamado `config.js` para armazenar a senha do seu banco de dados.
    ```javascript
    // config.js
    module.exports = {
        dbPassword: 'sua_senha_do_mysql'
    };
    ```

6.  **Inicie o servidor:**
    ```bash
    nodemon index.js
    ```

O projeto estará disponível em `http://localhost:3000`.

## ✍️ Autor

- **[Seu Nome Aqui]** - [Link para o seu GitHub](https://github.com/seu-usuario)
- [Link para o seu LinkedIn](https://www.linkedin.com/in/seu-usuario)