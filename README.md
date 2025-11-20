# Vitrine Hub

Vitrine Hub é uma aplicação web feita em **React + TypeScript** para simular uma
vitrine de produtos com carrinho de compras.

O objetivo do projeto é servir como estudo/prática de front-end moderno, com:

- React + TypeScript
- React Router (múltiplas páginas)
- Tailwind CSS
- Sistema de tema com variáveis CSS (design system simples)
- Persistência no `localStorage`

---

## Funcionalidades

- **Vitrine de produtos**
  - Lista os produtos cadastrados
  - Filtro por texto (nome, categoria, complemento)
  - Filtro por categoria

- **Carrinho**
  - Adicionar produto ao carrinho
  - Aumentar/diminuir quantidade
  - Remover item específico
  - Limpar carrinho
  - Cálculo automático do total

- **Cadastro de produtos**
  - Formulário para cadastrar novos produtos
  - Campos: descrição, preço, categoria, complemento, código PDV, URL da imagem
  - Os produtos ficam salvos no navegador via `localStorage`

- **Tema / Estilo**
  - Layout inspirado em apps de delivery (tons claros e verde como cor principal)
  - Estilos centralizados com **variáveis CSS em português**  
    (ex: `--fundo-corpo`, `--cor-primaria`, `--texto-principal` etc.)
  - Fácil de trocar as cores do projeto editando apenas o `:root`

---

## Tecnologias utilizadas

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## Como rodar o projeto

```bash
# instalar dependências
npm install

# rodar em modo desenvolvimento
npm run dev

# build para produção
npm run build

# pré-visualizar o build
npm run preview
