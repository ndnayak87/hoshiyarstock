import { marked } from "marked";
import DOMPurify from "dompurify";

marked.setOptions({ breaks: true, gfm: true });

function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

marked.use({
  renderer: {
    code(code, lang) {
      return `<pre class="md-pre"><code>${escapeHtml(code)}</code></pre>`;
    },
    codespan(code) {
      return `<code class="md-code">${escapeHtml(code)}</code>`;
    },
  },
});

export function renderMarkdown(md) {
  const html = marked.parse(md || "");
  return DOMPurify.sanitize(html);
}
