import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProdutosLista from "./pages/ProdutosLista.tsx"
import ProdutosForm from "./pages/ProdutosForm.tsx"
import Carrinho from "./pages/Carrinho.tsx"

import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<ProdutosLista />} />
          <Route path="cadastro" element={<ProdutosForm />} />
          <Route path="carrinho" element={<Carrinho />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
