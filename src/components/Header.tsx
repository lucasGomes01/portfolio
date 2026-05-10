export function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        color: "#fff",
      }}
    >
      <strong>Lucas Gomes</strong>

      <nav>
        <a href="#" style={{ margin: "0 10px", color: "#fff" }}>Home</a>
        <a href="#" style={{ margin: "0 10px", color: "#fff" }}>Sobre</a>
        <a href="#" style={{ margin: "0 10px", color: "#fff" }}>Projetos</a>
        <a href="#" style={{ margin: "0 10px", color: "#fff" }}>Contato</a>
      </nav>
    </header>
  );
}