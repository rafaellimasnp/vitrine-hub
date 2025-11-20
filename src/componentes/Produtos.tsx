import type { Produto } from "../App";

interface ProdutosProps {
  Produto: Produto;
  onAdicionar: () => void;
  onRemover: () => void;
}

const Produtos = ({ Produto, onAdicionar, onRemover }: ProdutosProps) => {
  return (
    <div
      className="
        rounded-2xl p-4 flex flex-col gap-3
        bg-(--fundo-cartao)
        border border-(--borda-cartao)
        shadow-(--sombra-suave)
      "
    >
      <div className="flex justify-between items-start gap-4">
        <div>
          <h3 className="font-semibold text-(--texto-principal)">
            {Produto.descricao}
          </h3>
          {Produto.categoria && (
            <p className="text-sm text-(--texto-secundario)">
              {Produto.categoria}
            </p>
          )}
        </div>
        <span className="font-bold text-(--cor-primaria)">
          R$ {Produto.preco.toFixed(2)}
        </span>
      </div>

      {Produto.complemento && (
        <p className="text-xs text-(--texto-suave)">
          <span className="font-semibold text-(--texto-principal)">
            complemento:
          </span>{" "}
          {Produto.complemento}
        </p>
      )}

      <div className="flex justify-between gap-2 mt-2">
        <button
          type="button"
          onClick={onAdicionar}
          className="
            flex-1 inline-flex items-center justify-center
            rounded-xl px-3 py-2 text-sm font-semibold
            bg-(--cor-primaria) text-white
            hover:bg-(--cor-primaria-hover)
            transition
          "
        >
          Adicionar ao carrinho
        </button>
        <button
          type="button"
          onClick={onRemover}
          className="
            inline-flex items-center justify-center
            rounded-xl px-3 py-2 text-xs font-semibold
            border border-(--cor-alerta)
            text-(--cor-alerta)
            hover:bg-(--cor-alerta-suave)
            transition
          "
        >
          Remover produto
        </button>
      </div>
    </div>
  );
};

export default Produtos;
