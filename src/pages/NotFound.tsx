import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <h1>404: Página não encontrada</h1>
      <Link to="/">Voltar para a home</Link>
    </main>
  );
}
