import { useOutletContext } from "react-router-dom";
import type { AppContextType } from "../App";

const Carrinho = () => {
  const {
    produtos,
    carrinho,
    updatecarrinhoquantidade,
    removeFromcarrinho,
    clearcarrinho,
  } = useOutletContext<AppContextType>();

  const items = carrinho.map((item) => {
    const product = produtos.find((p) => p.id === item.ProdutoId);
    return { ...item, product };
  });

  const total = items.reduce((sum, item) => {
    if (!item.product) return sum;
    return sum + item.product.preco * item.quantidade;
  }, 0);

  return (
    <section className="space-y-4">
      <header className="flex justify-between items-center gap-2">
        <div>
          <h1 className="text-2xl font-semibold text-(--texto-principal)">
            Carrinho
          </h1>
          <p className="text-sm text-(--texto-secundario)">
            Revise os itens antes de fechar o pedido.
          </p>
        </div>
        {items.length > 0 && (
          <button
            type="button"
            onClick={clearcarrinho}
            className="
              text-xs rounded-xl px-3 py-2
              border border-(--cor-alerta)
              text-(--cor-alerta)
              hover:bg-(--cor-alerta-suave)
              transition
            "
          >
            Limpar carrinho
          </button>
        )}
      </header>

      {items.length === 0 ? (
        <p className="text-sm text-(--texto-secundario)">
          Seu carrinho está vazio.
        </p>
      ) : (
        <div className="space-y-3">
          {items.map((item) =>
            !item.product ? null : (
              <div
                key={item.ProdutoId}
                className="
                  flex items-center justify-between gap-3
                  rounded-2xl p-3
                  bg-(--fundo-cartao)
                  border border-(--borda-cartao)
                  shadow-(--sombra-suave)
                "
              >
                <div>
                  <h3 className="text-sm font-semibold text-(--texto-principal)">
                    {item.product.descricao}
                  </h3>
                  <p className="text-xs text-(--texto-secundario)">
                    R$ {item.product.preco.toFixed(2)} cada
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        updatecarrinhoquantidade(
                          item.ProdutoId,
                          item.quantidade - 1
                        )
                      }
                      className="
                        h-8 w-8 rounded-full text-sm
                        border border-(--borda-cartao)
                        hover:bg-(--fundo-cartao)
                        transition
                      "
                    >
                      -
                    </button>
                    <span className="w-8 text-center text-sm">
                      {item.quantidade}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        updatecarrinhoquantidade(
                          item.ProdutoId,
                          item.quantidade + 1
                        )
                      }
                      className="
                        h-8 w-8 rounded-full text-sm
                        border border-(--borda-cartao)
                        hover:bg-(--fundo-cartao)
                        transition
                      "
                    >
                      +
                    </button>
                  </div>

                  <div className="text-right">
                    <p className="text-sm font-semibold text-(--cor-primaria)">
                      R$ {(item.product.preco * item.quantidade).toFixed(2)}
                    </p>
                    <button
                      type="button"
                      onClick={() => removeFromcarrinho(item.ProdutoId)}
                      className="
                        mt-1 text-[11px]
                        text-(--cor-alerta)
                        hover:text-(--cor-alerta-suave)
                        transition
                      "
                    >
                      Remover
                    </button>
                  </div>
                </div>
              </div>
            )
          )}

          <div className="flex justify-end">
            <div
              className="
                rounded-2xl px-4 py-3
                bg-(--fundo-cartao)
                border border-(--borda-cartao)
                shadow-(--sombra-suave)
              "
            >
              <p className="text-sm text-(--texto-secundario)">Total</p>
              <p className="text-xl font-semibold text-(--cor-primaria)">
                R$ {total.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Carrinho;
