import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./lib/auth";
import { usePosts } from "./lib/store";
import Header from "./components/Header";
import SubscribePopup from "./components/SubscribePopup";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Login from "./pages/Login";
import Write from "./pages/Write";

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function RouteTitle({ posts }) {
  const { pathname } = useLocation();
  useEffect(() => {
    const base = "HoshiyarStock";
    if (pathname === "/") {
      document.title = "HoshiyarStock — Candle Patterns Hindi Me Seekho!";
    } else if (pathname.startsWith("/post/")) {
      const id = decodeURIComponent(pathname.split("/")[2] || "");
      const p = posts.find((b) => b.id === id || b.slug === id);
      document.title = p ? `${p.title} | ${base}` : `Post | ${base}`;
    } else if (pathname === "/login") {
      document.title = `Login | ${base}`;
    } else {
      document.title = `${base} — Candle Patterns Hindi Me Seekho!`;
    }
  }, [pathname, posts]);
  return null;
}

function RequireAdmin({ children }) {
  const { isAdmin } = useAuth();
  if (!isAdmin) return <Navigate to="/login" replace />;
  return children;
}

function Shell() {
  const { posts, create, update, remove } = usePosts();
  const { isAdmin } = useAuth();
  const [search, setSearch] = useState("");
  return (
    <>
      <ScrollTop />
      <RouteTitle posts={posts} />
      <Header search={search} setSearch={setSearch} />
      <SubscribePopup />
      <Routes>
        <Route path="/" element={<Home posts={posts} search={search} />} />
        <Route path="/post/:id" element={<Post posts={posts} onDelete={remove} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/write" element={<RequireAdmin><Write posts={posts} onCreate={create} onUpdate={update} /></RequireAdmin>} />
        <Route path="/edit/:id" element={<RequireAdmin><Write posts={posts} onCreate={create} onUpdate={update} /></RequireAdmin>} />
        <Route path="*" element={<div className="container narrow center-box"><h2>404</h2></div>} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Shell />
      </AuthProvider>
    </BrowserRouter>
  );
}
