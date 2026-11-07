import { useEffect, useState } from "react";

const HIDE_AFTER = 15000; // 15 seconds
const FADE_MS = 420;

export default function DiwaliBanner() {
  const [visible, setVisible] = useState(true);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setClosing(true), HIDE_AFTER);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!closing) return;
    const t = setTimeout(() => setVisible(false), FADE_MS);
    return () => clearTimeout(t);
  }, [closing]);

  if (!visible) return null;

  return (
    <div className="container">
      <div className={"diwali" + (closing ? " diwali-hide" : "")} role="status" aria-live="polite">
        <span className="diwali-diya" aria-hidden="true">🪔</span>
        <div className="diwali-text">
          <strong>शुभ दीपावली!</strong>
          <p>HoshiyarStock परिवार की ओर से आपको और आपके परिवार को दिवाली की हार्दिक शुभकामनाएँ।</p>
        </div>
        <button className="diwali-x" onClick={() => setClosing(true)} aria-label="Message band karo">✕</button>
      </div>
    </div>
  );
}
