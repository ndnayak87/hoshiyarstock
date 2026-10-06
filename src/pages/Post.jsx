import { useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { renderMarkdown } from "../lib/markdown";
import { useAuth } from "../lib/auth";

export default function Post({ posts, onDelete }) {
  const { id } = useParams();
  const nav = useNavigate();
  const { isAdmin } = useAuth();
  const post = posts.find((b) => b.id === id || b.slug === id);

  useEffect(() => {
    document.title = post ? `${post.title} — HoshiyarStock` : "HoshiyarStock";
    return () => { document.title = "HoshiyarStock — Candle Patterns Hindi Me Seekho!"; };
  }, [post]);

  if (!post) {
    return (
      <div className="container narrow center-box">
        <h2>Nahi mila 😕</h2>
        <Link className="btn btn-ghost" to="/">← Home</Link>
      </div>
    );
  }

  return (
    <div className="container narrow">
      <br />
      <Link className="back" to="/">← Sab articles</Link>
      <div className="post-head">
        <div className="card-cat">{post.category} • {post.readTime} min • {post.date}</div>
        <h1>{post.title}</h1>
      </div>
      <div className="post-cover">{post.cover && post.cover.startsWith("/") ? <img src={post.cover} alt={post.title} /> : (post.cover || "📈")}</div>
      <article className="md" dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }} />
      <div className="disclaimer">⚠️ Shiksha ke liye hai, salah nahi! Paise lagane se pehle khud research karo!</div>
      {isAdmin && (
        <div className="post-admin">
          <button className="btn btn-ghost btn-small" onClick={() => nav(`/edit/${post.id}`)}>✏️ Edit</button>
          <button className="btn btn-danger btn-small" onClick={() => {
            if (confirm("Delete?")) { onDelete(post.id); nav("/"); }
          }}>🗑️ Delete</button>
        </div>
      )}
      <div className="footer">Made by <a href="https://hoshiyartech.in/company" target="_blank" rel="noreferrer"><b>HoshiyarTech</b></a></div>
    </div>
  );
}
