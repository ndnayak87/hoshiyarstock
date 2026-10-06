import { useState, useEffect } from "react";
import { SEED_POSTS } from "./seed";

const KEY = "hstock_posts_v4";

function read() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const arr = JSON.parse(raw);
      if (Array.isArray(arr)) return arr;
    }
  } catch {}
  return SEED_POSTS;
}

export function calcReadTime(md) {
  const words = (md || "").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 180));
}

export function usePosts() {
  const [posts, setPosts] = useState(read);
  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(posts)); } catch {}
  }, [posts]);

  function create(data) {
    const p = {
      id: "p" + Date.now(),
      date: new Date().toISOString().slice(0, 10),
      readTime: calcReadTime(data.content),
      cover: "📈",
      ...data,
    };
    setPosts((prev) => [p, ...prev]);
    return p;
  }
  function update(id, data) {
    setPosts((prev) => prev.map((b) =>
      b.id === id ? { ...b, ...data, readTime: calcReadTime(data.content) } : b
    ));
  }
  function remove(id) {
    setPosts((prev) => prev.filter((b) => b.id !== id));
  }
  return { posts, create, update, remove };
}
