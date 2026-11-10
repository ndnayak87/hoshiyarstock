import { useEffect, useState } from "react";

const HIDE_AFTER = 15000; // 15 seconds
const FADE_MS = 420;

export default function FestivalBanner() {
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
      <div className={"festival" + (closing ? " festival-hide" : "")} role="status" aria-live="polite">
        <span className="festival-icon" aria-hidden="true">🐄</span>
        <div className="festival-text">
          <strong>शुभ गोवर्धन पूजा!</strong>
          <p>HoshiyarStock परिवार की ओर से आपको और आपके परिवार को गोवर्धन पूजा की हार्दिक शुभकामनाएँ।</p>
        </div>
        <button className="festival-x" onClick={() => setClosing(true)} aria-label="Message band karo">✕</button>
      </div>
    </div>
  );
}
