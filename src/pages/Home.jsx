import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { CATS } from "../lib/seed";

export default function Home({ posts, search }) {
  const [cat, setCat] = useState("All");
  const filtered = useMemo(() => {
    const q = (search || "").trim().toLowerCase();
    return posts
      .filter((b) => (cat === "All" || b.category === cat) &&
        (!q || (b.title + " " + b.excerpt + " " + b.content).toLowerCase().includes(q)))
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [posts, search, cat]);

  return (
    <div className="container">
      <section className="hero">
        <div className="badge">🕯️ Candle Patterns • हिंदी में!</div>
        <h2>Candle Seekho, <span className="grad">Samajhkar Badho!</span></h2>
        <p>Hammer, Doji, Engulfing — har pattern aasaan Hindi me! Shiksha ke liye, salah nahi!</p>
        <div className="stats">
          <div className="stat"><b>{posts.length}</b>Articles</div>
          <div className="stat"><b>{CATS.length}</b>Categories</div>
          <div className="stat"><b>100% Free</b>Seekho!</div>
        </div>
      </section>

      <div className="filters">
        {["All", ...CATS].map((c) => (
          <button key={c} className={"chip" + (cat === c ? " active" : "")} onClick={() => setCat(c)}>{c}</button>
        ))}
        <span className="hint right">{filtered.length} articles</span>
      </div>

      {filtered.length === 0 ? (
        <div className="empty"><h3>😕 Kuch nahi mila</h3></div>
      ) : (
        <div className="grid">
          {filtered.map((b) => (
            <Link key={b.id} to={`/post/${b.slug || b.id}`} className="card">
              <div className="card-cover">{b.cover && b.cover.startsWith("/") ? <img src={b.cover} alt={b.title} loading="lazy" /> : (b.cover || "📈")}</div>
              <div className="card-body">
                <div className="card-cat">{b.category} • {b.readTime} min</div>
                <h3>{b.title}</h3>
                <p>{b.excerpt}</p>
                <div className="meta"><span>{b.date}</span></div>
              </div>
            </Link>
          ))}
        </div>
      )}
      <div className="disclaimer">⚠️ <b>Disclaimer:</b> Ye site shiksha ke liye hai, nivesh salah nahi! Share market me jokhim hai — paise lagane se pehle khud research karo ya SEBI-registered advisor se salah lo!</div>
      <div className="footer">Made by <a href="https://hoshiyartech.in/company" target="_blank" rel="noreferrer"><b>HoshiyarTech</b></a> • HoshiyarStock</div>
    </div>
  );
}
