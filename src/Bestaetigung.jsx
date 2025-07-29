import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "./components/Layout";

export default function Bestaetigung() {
  const { state } = useLocation();

  return (
    <Layout>
      <div className="max-w-xl mx-auto p-6 text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          Vielen Dank für Ihre Spende!
        </h2>
        <p className="text-gray-700 mb-2">Ihre Registrierung war erfolgreich.</p>
        {state && (
          <>
            <p className="text-gray-700 mb-2">
              <strong>Art der Kleidung:</strong> {state.kleidung}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Krisengebiet:</strong> {state.gebiet}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Datum und Uhrzeit:</strong> {state.zeit}
            </p>
            <p className="text-gray-700">
              <strong>Ort:</strong> {state.ort}
            </p>
          </>
        )}
         <a href="/">
          <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded">
            Zurück zur Startseite
          </button>
        </a>
      </div>
    </Layout>
  );
}