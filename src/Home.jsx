import React from "react";
import Layout from "./components/Layout";

function Home() {
  return (
    <Layout>
      <div className="text-center py-20">
        <h2 className="text-4xl font-semibold">
          Ihre Kleidung kann Leben verändern
        </h2>
        <p className="mt-3 text-xl text-gray-600">
          Spenden Sie gezielt an Krisenregionen Ihrer Wahl.
        </p>
        <a href="/registrieren">
          <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded">
            Jetzt Spende registrieren
          </button>
        </a>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-xl font-bold mb-6 text-green-700 text-center">
          Aktuelle Krisenregionen
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { name: "Ukraine", flag: "🇺🇦" },
            { name: "Afghanistan", flag: "🇦🇫" },
            { name: "Syrien", flag: "🇸🇾" },
            { name: "Sudan", flag: "🇸🇩" },
            { name: "Myanmar", flag: "🇲🇲" },
            { name: "Somalia", flag: "🇸🇴" }
          ].map((region) => (
            <div
              key={region.name}
              className="bg-white border border-gray-200 rounded-lg transition p-6 text-center"
            >
              <div className="text-4xl mb-2">{region.flag}</div>
              <h3 className="text-lg font-semibold text-gray-800">{region.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Home;