import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./components/Layout";

export default function SpendenFormular() {
  const navigate = useNavigate();

  const [uebergabeart, setUebergabeart] = useState("geschaeftsstelle");
  const [plz, setPlz] = useState("");
  const [adresse, setAdresse] = useState("");
  const [kleidung, setKleidung] = useState("");
  const [gebiet, setGebiet] = useState("");
  const [fehler, setFehler] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (uebergabeart === "abholung") {
      if (!/^\d{5}$/.test(plz)) {
        setFehler("Bitte geben Sie eine gültige 5-stellige Postleitzahl ein.");
        return;
      }
      if (!plz.startsWith("89")) {
        setFehler("Abholung nicht möglich: PLZ muss im Raum Ulm liegen (89...).");
        return;
      }
      if (!/^\s*[\p{L}\d\s.-]+\s+\d+[a-zA-Z]?\s*$/u.test(adresse)) {
        setFehler("Bitte geben Sie eine vollständige Adresse mit Straße und Hausnummer ein.");
        return;
      }
    }

    setFehler("");

    navigate("/bestaetigung", {
      state: {
        kleidung,
        gebiet,
        ort:
          uebergabeart === "geschaeftsstelle"
            ? "Geschäftsstelle"
            : `${plz}, ${adresse}`,
        zeit: new Date().toLocaleString("de-DE"),
      },
    });
  };

  const handlePLZChange = (e) => {
    setPlz(e.target.value);
    setFehler("");
  };

  return (
    <Layout>
      <div className="max-w-xl mx-auto p-6 py-10">
        <h2 className="text-2xl font-bold mb-4">Kleiderspende registrieren</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Übergabeart</label>
            <div className="flex gap-4">
              <label>
                <input
                  type="radio"
                  name="uebergabeart"
                  value="geschaeftsstelle"
                  checked={uebergabeart === "geschaeftsstelle"}
                  onChange={() => setUebergabeart("geschaeftsstelle")}
                  className="mr-2"
                />
                Übergabe an der Geschäftsstelle
              </label>
              <label>
                <input
                  type="radio"
                  name="uebergabeart"
                  value="abholung"
                  checked={uebergabeart === "abholung"}
                  onChange={() => setUebergabeart("abholung")}
                  className="mr-2"
                />
                Abholung
              </label>
            </div>
          </div>

          {uebergabeart === "abholung" && (
            <>
              <div>
                <label className="block font-medium mb-1">Postleitzahl</label>
                <input
                  type="text"
                  value={plz}
                  onChange={handlePLZChange}
                  className="w-full border rounded px-3 py-2"
                  placeholder="89..."
                  required
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Straße und Hausnummer</label>
                <input
                  type="text"
                  value={adresse}
                  onChange={(e) => setAdresse(e.target.value)}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
            </>
          )}

          <div>
            <label className="block font-medium mb-1">Art der Kleidung</label>
            <select
              value={kleidung}
              onChange={(e) => setKleidung(e.target.value)}
              className="w-full border rounded px-3 py-2"
              required
            >
              <option value="">Bitte wählen</option>
              <option value="Winterkleidung">Winterkleidung</option>
              <option value="Sommerkleidung">Sommerkleidung</option>
              <option value="Kinderkleidung">Kinderkleidung</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">Krisengebiet</label>
            <select
              value={gebiet}
              onChange={(e) => setGebiet(e.target.value)}
              className="w-full border rounded px-3 py-2"
              required
            >
              <option value="">Bitte wählen</option>
              <option value="Ukraine">Ukraine</option>
              <option value="Israel">Afghanistan</option>
              <option value="Syrien">Syrien</option>
              <option value="Sudan">Sudan</option>
              <option value="Somalia">Somalia</option>
              <option value="Myanmar">Myanmar</option>
            </select>
          </div>

          {fehler && <p className="text-red-600">{fehler}</p>}

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
          >
            Spende registrieren
          </button>
        </form>
      </div>
    </Layout>
  );
}