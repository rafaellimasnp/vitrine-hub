const Footer = () => {
  return (
    <footer
      className="
        mt-8 border-t border-(--borda-cartao)
        bg-(--fundo-cartao)
      "
    >
      <div className="max-w-5xl mx-auto px-4 py-4">
        <p className="text-xs text-center text-(--texto-secundario)">
          Projeto desenvolvido por{" "}
          <span className="font-semibold text-(--cor-primaria)">
            Rafael Lima
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
