import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../lib/auth";

export default function Header({ search, setSearch }) {
  const { isAdmin, logout } = useAuth();
  const nav = useNavigate();
  return (
    <header className="header">
      <div className="nav">
        <Link to="/" className="brand" onClick={() => { setSearch(""); window.scrollTo(0, 0); }}>
          <img className="blogo-img" src="/logo.png" alt="HoshiyarStock logo" />
          <h1>Hoshiyar<span>Stock</span><small>Candle seekho, samajhkar badho!</small></h1>
        </Link>
        <div className="nav-actions">
          <input className="search" placeholder="🔍 Dhoondho..." value={search} onChange={(e) => setSearch(e.target.value)} />
          {isAdmin ? (
            <>
              <button className="btn btn-primary btn-small" onClick={() => nav("/write")}>✍️ Likho</button>
              <button className="btn btn-ghost btn-small" onClick={() => { logout(); nav("/"); }}>Logout</button>
            </>
          ) : (
            <button className="btn btn-ghost btn-small" onClick={() => nav("/login")}>🔐 Login</button>
          )}
        </div>
      </div>
      <div className="risk">⚠️ Shiksha ke liye hai, salah nahi! Paise lagane se pehle khud research karo!</div>
    </header>
  );
}
