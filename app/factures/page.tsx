"use client";

import { Plus } from "lucide-react";

export default function Factures() {
  
 

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Factures</h1>
          <p className="text-gray-500 mt-1">Gérez les factures et paiements d'eau</p>
        </div>
        <button className="bg-purple-900 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-purple-800 transition-colors">
          <Plus className="w-5 h-5" />
          Nouvelle facture
        </button>
      </div>

    </div>
  );
}