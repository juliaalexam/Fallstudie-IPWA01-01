import React from "react";
import Layout from "./components/Layout";

export default function Rechtliches() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto p-6 py-10">
        <h2 className="text-2xl font-bold mb-4">Rechtliche Hinweise</h2>
        <p className="mb-4">
          Alle Inhalte dieser Website wurden mit größter Sorgfalt erstellt.
          Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
          übernehmen wir jedoch keine Gewähr.
        </p>
        <p className="text-gray-600 text-sm">
          Dieser Text ist ein rechtlich nicht bindendes Beispiel.
        </p>
      </div>
    </Layout>
  );
}