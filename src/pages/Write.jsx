import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CATS } from "../lib/seed";

export default function Write({ posts, onCreate, onUpdate }) {
  const { id } = useParams();
  const nav = useNavigate();
  const editing = id ? posts.find((b) => b.id === id) : null;

  const [form, setForm] = useState(() =>
    editing
      ? { ...editing, tags: (editing.tags || []).join(", ") }
      : { title: "", category: CATS[0], tags: "", excerpt: "", content: "" }
  );
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  function save(e) {
    e.preventDefault();
    if (!form.title.trim() || !form.content.trim()) { alert("Title aur Content zaroori hai!"); return; }
    const data = {
      title: form.title.trim(),
      category: form.category,
      tags: form.tags.split(",").map((t) => t.trim().toLowerCase()).filter(Boolean),
      excerpt: form.excerpt.trim() || form.content.replace(/[#*`>-]/g, "").slice(0, 140) + "...",
      content: form.content,
      author: "HoshiyarStock",
    };
    if (editing) { onUpdate(editing.id, data); nav(`/post/${editing.slug || editing.id}`); }
    else { const b = onCreate(data); nav(`/post/${b.id}`); }
  }

  return (
    <div className="container wide">
      <br />
      <h2>{editing ? "✏️ Edit Karo" : "✍️ Naya Article Likho"}</h2>
      <form className="form" onSubmit={save}>
        <input value={form.title} onChange={set("title")} placeholder="Title..." />
        <div className="row2">
          <select value={form.category} onChange={set("category")}>
            {CATS.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <input value={form.tags} onChange={set("tags")} placeholder="Tags (comma se)" />
        </div>
        <input value={form.excerpt} onChange={set("excerpt")} placeholder="Summary (khali = auto)" />
        <textarea className="big" value={form.content} onChange={set("content")} placeholder="Markdown me likho..." />
        <div className="form-actions">
          <button type="button" className="btn btn-ghost" onClick={() => nav(-1)}>Cancel</button>
          <button type="submit" className="btn btn-primary">🚀 {editing ? "Update" : "Publish"}</button>
        </div>
      </form>
    </div>
  );
}
