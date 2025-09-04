import { useState, useEffect } from "react";
import './Style.css';


API_KEY = process.env.REACT_APP_API_URL
const FLAGS = {
  en: "https://storage.123fakturere.no/public/flags/GB.png",
  sv: "https://storage.123fakturere.no/public/flags/SE.png",
};

const WALLPAPER =
  "https://storage.123fakturera.se/public/wallpapers/sverige43.jpg";

export default function Terms() {
  const [locale, setLocale] = useState("en");
  const [terms, setTerms] = useState(null);

  useEffect(() => {
    fetch(`${API_KEY}/api/terms/${locale}`)
      .then(res => res.json())
      .then(data => setTerms(data))
      .catch(err => console.error("Error fetching terms:", err));
  }, [locale]);

  return (
    <div
      className="terms-page"
      style={{ backgroundImage: `url(${WALLPAPER})` }}
    >
      <div className="terms-shell">
        <div className="lang-toggle">
          <button onClick={() => setLocale("en")}>
            <img src={FLAGS.en} alt="EN" />
          </button>
          <button onClick={() => setLocale("sv")}>
            <img src={FLAGS.sv} alt="SV" />
          </button>
        </div>

        {terms && terms.length > 0 ? (
  <>
    <h1>Terms ({locale.toUpperCase()})</h1>
    <div className="terms-content">
      {terms.map(t => (
        <p key={t.id}>{t.content}</p>
      ))}
    </div>
  </>
) : (
  <p>Loading terms...</p>
)}

      </div>
    </div>
  );
}
