import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../lib/auth";

const IG_URL = "https://www.instagram.com/hoshiyargroup/";

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

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
          <a className="btn btn-ghost btn-small ig-link" href={IG_URL} target="_blank" rel="noreferrer" aria-label="Instagram par follow karo">
            <InstagramIcon />
            <span>Instagram</span>
          </a>
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
