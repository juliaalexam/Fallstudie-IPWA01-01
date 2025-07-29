import React from "react";
import Layout from "./components/Layout";

export default function Datenschutz() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto p-6 py-10">
        <h2 className="text-2xl font-bold mb-4">Datenschutzerklärung</h2>
        <p className="mb-4">
          Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese
          Datenschutzerklärung informiert Sie über die Art, den Umfang und Zweck
          der Verarbeitung personenbezogener Daten auf dieser Website.
        </p>
        <p className="text-gray-600 text-sm">
          Diese Erklärung ist ein Platzhalter und nicht rechtsverbindlich.
        </p>
      </div>
    </Layout>
  );
}