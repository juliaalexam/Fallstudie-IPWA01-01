import React from "react";
import Layout from "./components/Layout";

export default function UeberUns() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto p-8 py-10 text-gray-800">
        <h2 className="text-2xl font-bold mb-4">Über uns</h2>
        <p className="mb-4">
          Wir sind ein lokaler, gemeinnütziger Verein, der sich mit Herzblut
          für Menschen in Not einsetzt – insbesondere durch die Organisation und
          Logistik von Kleiderspenden.
        </p>
        <p className="mb-4">
          Unsere Arbeit wird ehrenamtlich getragen, und unser Ziel ist es,
          Spenden sinnvoll, transparent und zielgerichtet dorthin zu bringen,
          wo sie dringend gebraucht werden.
        </p>
        <p className="mb-4">
          Ein besonderer Gedanke unseres Projekts ist, dass die Spendenden selbst
          entscheiden können, in welches aktuelle Krisengebiet ihre Kleiderspende
          versendet wird.
        </p>
        <p className="mb-4">
          Über unser digitales Portal können Sie ganz einfach Ihre Spende registrieren –
          ob zur Abholung oder zur Übergabe bei unserer Geschäftsstelle. 
        </p>
        <p className="mb-4">
          An unserer Geschäftstelle ist ein Tablet platziert. Im Falle einer persönlichen Übergabe, können Sie Ihre Spende direkt vor Ort, schnell und einfach registrieren.
        </p>
        <p>
          Vielen Dank für Ihre Unterstützung!
        </p>
      </div>
    </Layout>
  );
}