import React from "react";
import Layout from "./components/Layout";

export default function Kontakt() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto p-8 py-10 text-gray-800">
        <h2 className="text-2xl font-bold mb-4">Kontakt</h2>
        <p className="mb-2">HerzensKleidung e. V.</p>
        <p className="mb-2">Musterstraße 12</p>
        <p className="mb-2">89073 Ulm</p>
        <p className="mb-2">Telefon: 0123 / 456789</p>
        <p className="mb-2">E-Mail: <a href="mailto:kontakt@herzenskleidung.de" className="text-green-600 hover:underline">kontakt@herzenskleidung.de</a></p>
        <p className="mt-4">Bitte zögern Sie nicht, uns bei Fragen zu kontaktieren!</p>
      </div>
    </Layout>
  );
}