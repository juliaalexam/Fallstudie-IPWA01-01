import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Layout({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const pages = [
    { name: "Startseite", path: "/" },
    { name: "Registrierung", path: "/registrieren" },
    { name: "Über uns", path: "/ueber-uns" },
    { name: "Kontakt", path: "/kontakt" },
    { name: "Impressum", path: "/impressum" },
    { name: "Datenschutz", path: "/datenschutz" },
    { name: "rechtliche Hinweise", path: "/rechtliches" },
    { name: "Facebook", path: "https://facebook.com", external: true },
    { name: "Instagram", path: "https://instagram.com", external: true }
  ];

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term.length > 0) {
      const filtered = pages.filter((page) =>
        page.name.toLowerCase().includes(term.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  };

  const handleSelect = (page) => {
    setSearchTerm("");
    setResults([]);
    if (page.external) {
      window.open(page.path, "_blank");
    } else {
      navigate(page.path);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-100 shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Logo + Titel */}
          <Link to="/" className="flex items-center space-x-3">
            <img src="/logo.png" alt="Logo" className="h-16 w-auto" />
            <h1 className="text-2xl font-bold">
              <span className="text-red-600">Herzens</span>
              <span className="text-green-600">Kleidung</span>
            </h1>
          </Link>

          {/* Suchfeld */}
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Suche z. B. 'Kontakt', 'Impressum'..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {results.length > 0 && (
              <ul className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded shadow">
                {results.map((result, idx) => (
                  <li
                    key={idx}
                    onClick={() => handleSelect(result)}
                    className="px-4 py-2 hover:bg-green-100 cursor-pointer"
                  >
                    {result.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Kontakt + Social Media */}
          <div className="flex items-center space-x-4 text-sm text-gray-700">
            <a href="/kontakt" className="hover:text-green-600">Kontakt</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-green-600">
              Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-green-600">
              Instagram
            </a>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-white border-t border-gray-300">
          <div className="max-w-7xl mx-auto px-4 py-2 flex space-x-6 text-sm font-medium text-gray-700">
            <a href="/" className="hover:text-green-600">Startseite</a>
            <a href="/registrieren" className="hover:text-green-600">Registrierung</a>
            <a href="/ueber-uns" className="hover:text-green-600">Über uns</a>
          </div>
        </nav>
      </header>

      {/* Hauptinhalt */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center text-sm text-gray-500 py-4 border-t">
        &copy; {new Date().getFullYear()} HerzensKleidung. Alle Rechte vorbehalten. |
        <a href="/impressum" className="underline ml-1">Impressum</a> |
        <a href="/datenschutz" className="underline ml-1">Datenschutz</a> |
        <a href="/rechtliches" className="underline ml-1">Rechtliche Hinweise</a>
      </footer>
    </div>
  );
}

export default Layout;