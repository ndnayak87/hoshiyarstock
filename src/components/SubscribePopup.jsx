import { useEffect, useState } from "react";

const SUB_KEY = "hstock_subscribed";
const CLOSE_KEY = "hstock_popup_closed";
const COOLDOWN = 7 * 24 * 60 * 60 * 1000;

export default function SubscribePopup() {
  const [show, setShow] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let t;
    try {
      if (localStorage.getItem(SUB_KEY)) return;
      const closed = parseInt(localStorage.getItem(CLOSE_KEY) || "0", 10);
      if (Date.now() - closed < COOLDOWN) return;
    } catch { /* show anyway */ }
    t = setTimeout(() => setShow(true), 5000);
    return () => clearTimeout(t);
  }, []);

  function close() {
    setShow(false);
    try { localStorage.setItem(CLOSE_KEY, String(Date.now())); } catch {}
  }
  function subscribe() {
    try { localStorage.setItem(SUB_KEY, "1"); } catch {}
    setDone(true);
    setTimeout(() => setShow(false), 2200);
  }

  if (!show) return null;
  return (
    <div className="popup-bg" onClick={close}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <button className="popup-x" onClick={close} aria-label="Band karo">✕</button>
        {done ? (
          <>
            <div className="popup-emoji">🎉</div>
            <h3>Dhanyavaad!</h3>
            <p className="muted">Naya article aate hi aapko yahin sabse pehle milega!</p>
          </>
        ) : (
          <>
            <div className="popup-emoji">📢</div>
            <h3>Aise hi aur articles chahiye?</h3>
            <p className="muted">Candle patterns aasaan Hindi me — naya article aate hi padho!</p>
            <button className="btn btn-primary" onClick={subscribe}>🔔 Abhi Subscribe Dabao</button>
            <button className="popup-skip" onClick={close}>Nahi, dhanyavaad</button>
          </>
        )}
      </div>
    </div>
  );
}
