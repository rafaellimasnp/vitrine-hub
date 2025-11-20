import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";

export interface Produto {
  id: number;
  descricao: string;
  preco: number;
  categoria?: string;
  complemento?: string;
  codigo?: string;
  imagemUrl?: string;
  ativo: boolean;
}

export interface carrinhoItem {
  ProdutoId: number;
  quantidade: number;
}

export interface AppContextType {
  produtos: Produto[];
  carrinho: carrinhoItem[];
  addProduto: (Produto: Omit<Produto, "id" | "ativo">) => void;
  removeProduto: (id: number) => void;
  addTocarrinho: (ProdutoId: number) => void;
  updatecarrinhoquantidade: (ProdutoId: number, quantidade: number) => void;
  removeFromcarrinho: (ProdutoId: number) => void;
  clearcarrinho: () => void;
}

const produtos_KEY = "cardapio_produtos";
const carrinho_KEY = "cardapio_carrinho";

const initialprodutos: Produto[] = [
  {
    id: 1,
    descricao: "Hambúrguer Clássico",
    preco: 29.9,
    categoria: "Lanches",
    complemento: "Pão, carne, queijo, alface, tomate, maionese",
    codigo: "LAN001",
    imagemUrl: "",
    ativo: true,
  },
  {
    id: 2,
    descricao: "Suco de Laranja",
    preco: 8.5,
    categoria: "Bebidas",
    complemento: "Laranja, água, açúcar",
    codigo: "BEB001",
    imagemUrl: "",
    ativo: true,
  },
];

function loadFromLocalStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return parsed as T;
  } catch {
    return fallback;
  }
}

const App = () => {
  const [produtos, setprodutos] = useState<Produto[]>(() => {
    const dados = loadFromLocalStorage<Produto[]>(produtos_KEY, initialprodutos);  
    return dados.length > 0 ? dados : initialprodutos;
  });

  const [carrinho, setcarrinho] = useState<carrinhoItem[]>(() =>
    loadFromLocalStorage<carrinhoItem[]>(carrinho_KEY, [])
  );

  useEffect(() => {
    try {
      window.localStorage.setItem(produtos_KEY, JSON.stringify(produtos));
    } catch {
      // ignore
    }
  }, [produtos]);

  useEffect(() => {
    try {
      window.localStorage.setItem(carrinho_KEY, JSON.stringify(carrinho));
    } catch {
      // ignore
    }
  }, [carrinho]);

  const addProduto = (Produto: Omit<Produto, "id" | "ativo">) => {
    setprodutos((prev) => [
      ...prev,
      { ...Produto, id: Date.now(), ativo: true },
    ]);
  };

  const removeProduto = (id: number) => {
    setprodutos((prev) => prev.filter((p) => p.id !== id));
    setcarrinho((prev) => prev.filter((item) => item.ProdutoId !== id));
  };

  const addTocarrinho = (ProdutoId: number) => {
    setcarrinho((prev) => {
      const existing = prev.find((i) => i.ProdutoId === ProdutoId);
      if (existing) {
        return prev.map((i) =>
          i.ProdutoId === ProdutoId
            ? { ...i, quantidade: i.quantidade + 1 }
            : i
        );
      }
      return [...prev, { ProdutoId, quantidade: 1 }];
    });
  };

  const updatecarrinhoquantidade = (ProdutoId: number, quantidade: number) => {
    if (quantidade <= 0) {
      setcarrinho((prev) => prev.filter((i) => i.ProdutoId !== ProdutoId));
      return;
    }
    setcarrinho((prev) =>
      prev.map((i) =>
        i.ProdutoId === ProdutoId ? { ...i, quantidade } : i
      )
    );
  };

  const removeFromcarrinho = (ProdutoId: number) => {
    setcarrinho((prev) => prev.filter((i) => i.ProdutoId !== ProdutoId));
  };

  const clearcarrinho = () => setcarrinho([]);

  const carrinhoCount = carrinho.reduce((sum, item) => sum + item.quantidade, 0);

  const contextValue: AppContextType = {
    produtos,
    carrinho,
    addProduto,
    removeProduto,
    addTocarrinho,
    updatecarrinhoquantidade,
    removeFromcarrinho,
    clearcarrinho,
  };


return (
  <div className="min-h-screen bg-(--fundo-corpo) text-(--texto-principal) flex flex-col">
    <Header carrinhoCount={carrinhoCount} />

    <main className="flex-1 max-w-5xl mx-auto px-4 py-8">
      <Outlet context={contextValue} />
    </main>

    <Footer />
  </div>
);

}
export default App;
