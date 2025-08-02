# Lista de Tarefas

Este projeto foi desenvolvido para o aprendizado da tecnologia React. Nele, você pode explorar conceitos fundamentais, como Hooks, Componentes, manipulação de eventos e também como persistir dados utilizando o LocalStorage.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para criação de interfaces de usuário.
- **Vite**: Ferramenta de build que oferece um desenvolvimento ágil com suporte a módulos ES.
- **LocalStorage**: API do navegador utilizada para persistir as tarefas mesmo após o recarregamento da página.
- **ESLint**: Ferramenta para análise e padronização do código.

## Estrutura do Projeto

- **`src/App.jsx`**: Renderiza o componente principal `TodoList`.
- **`src/components/TodoList/TodoList.jsx`**: Componente que gerencia as tarefas, utilizando Hooks como `useState` e `useEffect` para lidar com o estado e persistir dados com o LocalStorage.
- **`src/components/TodoList/TodoList.css`**: Define os estilos do componente `TodoList`.
- **`vite.config.js`**: Configuração do Vite com o plugin `@vitejs/plugin-react`.

## Funcionalidades

- **Adicionar Tarefas**: Adicione novas tarefas através do formulário.
- **Marcar Como Concluída**: Clique na tarefa para alternar seu status de concluída.
- **Deletar Tarefa**: Remova tarefas individuais utilizando o botão "Deletar".
- **Deletar Todas as Tarefas**: Apague todas as tarefas com o botão "Deletar Todas".
- **Persistência com LocalStorage**: As tarefas são salvas no LocalStorage, garantindo que os dados permaneçam mesmo após atualizar a página.

## Como Executar o Projeto

1. **Instale as dependências**:
   ```sh
   npm install

2. **Inicie o servidor de desenvolvimento**:
  ```sh
  npm run dev
  ```

3. Acesse o endereço informado no terminal (normalmente http://localhost:3000).


## Aprendizado

Este projeto foi ideal para estar iniciando em React e aprender sobre:

- Componentes funcionais.
- Uso de Hooks como useState e useEffect.
- Persistência de dados com LocalStorage.
- Organização e estruturação de um projeto moderno com Vite.

Projeto realizado por [Swetony Ancelmo](https://github.com/swetonyancelmo)