import { useState, type FormEvent } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import type { AppContextType } from "../App";

const ProdutosForm = () => {
  const { addProduto } = useOutletContext<AppContextType>();
  const navigate = useNavigate();

  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [categoria, setCategoria] = useState("");
  const [complemento, setcomplemento] = useState("");
  const [codigo, setCodigo] = useState("");
  const [imagemUrl, setImagemUrl] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!descricao || !preco) return;

    addProduto({
      descricao,
      preco: Number(preco),
      categoria: categoria || undefined,
      complemento: complemento || undefined,
      codigo: codigo || undefined,
      imagemUrl: imagemUrl || undefined,
    });

    setDescricao("");
    setPreco("");
    setCategoria("");
    setcomplemento("");
    setCodigo("");
    setImagemUrl("");
    navigate("/");
  };

  return (
    <section className="max-w-xl space-y-4">
      <header>
        <h1 className="text-2xl font-semibold text-(--texto-principal)">
          Cadastro de Produto
        </h1>
        <p className="text-sm text-(--texto-secundario)">
          Adicione novos itens na vitrine.
        </p>
      </header>

      <form
        onSubmit={handleSubmit}
        className="
          rounded-2xl p-4 space-y-4
          bg-(--fundo-cartao)
          border border-(--borda-cartao)
          shadow-(--sombra-suave)
        "
      >
        <div className="space-y-1">
          <label className="text-sm text-(--texto-principal)">
            Descrição *
          </label>
          <input
            type="text"
            className="
              w-full rounded-xl px-3 py-2 text-sm
              border border-(--borda-cartao)
              bg-(--fundo-corpo)
              text-(--texto-principal)
              placeholder:text-(--texto-suave)
              focus:outline-none focus:ring-2 focus:ring-(--cor-primaria)
            "
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="space-y-1">
            <label className="text-sm text-(--texto-principal)">
              Preço *
            </label>
            <input
              type="number"
              step="0.01"
              className="
                w-full rounded-xl px-3 py-2 text-sm
                border border-(--borda-cartao)
                bg-(--fundo-corpo)
                text-(--texto-principal)
                focus:outline-none focus:ring-2 focus:ring-(--cor-primaria)
              "
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm text-(--texto-principal)">
              Categoria
            </label>
            <input
              type="text"
              placeholder="Roupa, Lanche, Bebida..."
              className="
                w-full rounded-xl px-3 py-2 text-sm
                border border-(--borda-cartao)
                bg-(--fundo-corpo)
                text-(--texto-principal)
                placeholder:text-(--texto-suave)
                focus:outline-none focus:ring-2 focus:ring-(--cor-primaria)
              "
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-sm text-(--texto-principal)">
            Complemento
          </label>
          <textarea
            rows={3}
            className="
              w-full rounded-xl px-3 py-2 text-sm
              border border-(--borda-cartao)
              bg-(--fundo-corpo)
              text-(--texto-principal)
              focus:outline-none focus:ring-2 focus:ring-(--cor-primaria)
            "
            value={complemento}
            onChange={(e) => setcomplemento(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="space-y-1">
            <label className="text-sm text-(--texto-principal)">
              Código PDV
            </label>
            <input
              type="text"
              className="
                w-full rounded-xl px-3 py-2 text-sm
                border border-(--borda-cartao)
                bg-(--fundo-corpo)
                text-(--texto-principal)
                focus:outline-none focus:ring-2 focus:ring-(--cor-primaria)
              "
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm text-(--texto-principal)">
              URL da imagem
            </label>
            <input
              type="url"
              className="
                w-full rounded-xl px-3 py-2 text-sm
                border border-(--borda-cartao)
                bg-(--fundo-corpo)
                text-(--texto-principal)
                focus:outline-none focus:ring-2 focus:ring-(--cor-primaria)
              "
              value={imagemUrl}
              onChange={(e) => setImagemUrl(e.target.value)}
            />
          </div>
        </div>

        <button
          type="submit"
          className="
            w-full inline-flex items-center justify-center
            rounded-xl px-3 py-2 text-sm font-semibold
            bg-(--cor-primaria)] text-black
            hover:bg-(--cor-primaria-hover)
            transition
          "
        >
          Salvar produto
        </button>
      </form>
    </section>
  );
};

export default ProdutosForm;
