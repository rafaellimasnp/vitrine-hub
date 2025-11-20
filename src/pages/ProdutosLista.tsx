import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import Produtos from "../componentes/Produtos";
import type { AppContextType } from "../App";

const ProdutosLista = () => {
  const { produtos, addTocarrinho, removeProduto } =
    useOutletContext<AppContextType>();
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const categorias = Array.from(
    new Set(produtos.map((p) => p.categoria).filter(Boolean))
  ) as string[];

  const filtered = produtos.filter((p) => {
    const text = (
      p.descricao +
      " " +
      (p.categoria ?? "") +
      " " +
      (p.complemento ?? "")
    ).toLowerCase();
    const matchesSearch = text.includes(search.toLowerCase());
    const matchesCategory =
      !categoryFilter || p.categoria === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="space-y-4">
      <header className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-(--texto-principal)">
          Produtos
          </h1>
          <p className="text-sm text-(--texto-secundario)">
            Pesquise e adicione itens ao carrinho.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            placeholder="Buscar por nome, categoria ou complemento..."
            className="
              w-full sm:w-64 rounded-xl px-3 py-2 text-sm
              border border-(--borda-cartao)
              bg-(--fundo-corpo)
              text-(--texto-principal)
              placeholder:text-(--texto-suave)
              focus:outline-none focus:ring-2 focus:ring-(--cor-primaria)
            "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="
              w-full sm:w-40 rounded-xl px-3 py-2 text-sm
              border border-(--borda-cartao)
              bg-(--fundo-corpo)
              text-(--texto-principal)
              focus:outline-none focus:ring-2 focus:ring-(--cor-primaria)
            "
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="">Todas categorias</option>
            {categorias.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </header>

      {filtered.length === 0 ? (
        <p className="text-sm text-(--texto-secundario)">
          Nenhum produto encontrado.
        </p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((produto) => (
            <Produtos
              key={produto.id}
              Produto={produto}
              onAdicionar={() => addTocarrinho(produto.id)}
              onRemover={() => removeProduto(produto.id)}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProdutosLista;
