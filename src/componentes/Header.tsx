import { Link, NavLink } from "react-router-dom";

interface HeaderProps {
  carrinhoCount: number;
}

const Header = ({ carrinhoCount }: HeaderProps) => {
  const linkBase =
    "px-3 py-2 rounded-lg text-sm font-medium transition " +
    "flex items-center gap-1 " +
    "hover:bg-(--cor-primaria-suave)";

  const ativo =
    "bg-(--cor-primaria-suave) text-(--cor-primaria)";
  const inativo = "text-(--texto-secundario)";

  return (
    <header
      className="
        border-b border-(--borda-cartao)
        bg-(--fundo-cartao)
        backdrop-blur
      "
    >
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-lg font-semibold text-(--cor-primaria)">
            Vitrine Hub
          </span>
        </Link>

        <nav className="flex gap-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${linkBase} ${isActive ? ativo : inativo}`
            }
          >
            Vitrine
          </NavLink>

          <NavLink
            to="/cadastro"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? ativo : inativo}`
            }
          >
            Cadastro
          </NavLink>

          <NavLink
            to="/carrinho"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? ativo : inativo}`
            }
          >
            <span>Carrinho</span>
            {carrinhoCount > 0 && (
              <span
                className="
                  ml-1 inline-flex h-5 min-w-5 items-center justify-center
                  rounded-full px-1
                  bg-(--cor-primaria)
                  text-[10px] font-bold text-white
                "
              >
                {carrinhoCount}
              </span>
            )}
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
