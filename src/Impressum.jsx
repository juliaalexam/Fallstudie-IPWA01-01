import React from "react";
import Layout from "./components/Layout";

export default function Impressum() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto p-6 py-10">
        <h2 className="text-2xl font-bold mb-4">Impressum</h2>
        <p className="mb-2">Angaben gemäß § 5 TMG:</p>
        <p className="mb-4">
          HerzensKleidung e.V.<br />
          Musterstraße 1<br />
          89073 Ulm
        </p>
        <p className="mb-2">Vertreten durch:</p>
        <p>Julia Muster</p>
        <p className="mt-4 text-gray-600 text-sm">
          Dieses Impressum dient nur als Platzhalter.
        </p>
      </div>
    </Layout>
  );
}