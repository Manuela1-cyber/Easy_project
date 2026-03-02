// import CreateInvoiceForm from "../components/wrapper/CreateInvoiceForm";
import { ArrowRight, CheckCircle, Shield, Building, Zap, Banknote, Hourglass, Check } from "lucide-react";

export default function Dashboard() {
  const invoices = [
    {
      id: 1,
      name: "Amadou",
      status: "En attente",
      statusColor: "bg-amber-50 text-amber-700",
      address: "Résidence Les Palmiers - Appartement A1",
      issuedAt: "1 févr. 2026",
      dueAt: "28 févr. 2026",
      amount: "5 000 F",
      type: "Prix fixe",
    },
    {
      id: 2,
      name: "Sall",
      status: "En attente",
      statusColor: "bg-amber-50 text-amber-700",
      address: "Résidence Les Palmiers - Appartement A2",
      issuedAt: "1 févr. 2026",
      dueAt: "28 févr. 2026",
      amount: "6 250 F",
      type: "Variable",
      note: "≈ 25 m³",
    },
    {
      id: 3,
      name: "Moussa",
      status: "Payé",
      statusColor: "bg-emerald-50 text-emerald-700",
      address: "Résidence Les Palmiers - Appartement B1",
      issuedAt: "1 janv. 2026",
      dueAt: "31 janv. 2026",
      amount: "4 500 F",
      type: "Prix fixe",
    },
  ];
  return (
    <div className="p-6 space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
        <p className="text-gray-500">Bienvenue dans votre espace de gestion</p>
      </div>
      
      {/* Cartes du haut */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: Check,
            label: "Total facturé",
            value: "45 750 F",
            extra: "Février 2026",
          },
          {
            icon: Banknote,
            label: "Payées",
            value: "1",
            extra: "4 500 F encaissés",
          },
          {
            icon: Hourglass,
            label: "En attente",
            value: "2",
            extra: "11 250 F à recouvrer",
          },
          {
            icon: Building,
            label: "Propriétés",
            value: "4",
            extra: "Résidence Les Palmiers",
          },
        ].map((card, idx) => {
          const Icon = card.icon;
          const isPrimary = idx === 0;

          return (
            <div
              key={idx}
              className={
                isPrimary
                  ? "rounded-3xl bg-[#9b5cff] text-white px-6 py-5 flex flex-col justify-between"
                  : "rounded-3xl bg-white border border-slate-100 px-6 py-5 flex flex-col justify-between"
              }
            >
              <div className="flex items-center gap-2 text-xs font-medium tracking-wide uppercase">
                <span
                  className={
                    isPrimary
                      ? "inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-white/15 text-white"
                      : "inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-[#9b5cff]/10 text-[#9b5cff]"
                  }
                >
                  <Icon className="w-4 h-4" />
                </span>
                <span
                  className={
                    isPrimary ? "text-white/80" : "text-gray-500"
                  }
                >
                  {card.label}
                </span>
              </div>

              <div className="mt-4">
                <p
                  className={
                    isPrimary
                      ? "text-4xl font-extrabold leading-tight"
                      : "text-3xl font-extrabold leading-tight text-gray-900"
                  }
                >
                  {card.value}
                </p>
                <p
                  className={
                    isPrimary
                      ? "mt-3 text-sm text-white/80"
                      : "mt-3 text-sm text-gray-600"
                  }
                >
                  {card.extra}
                </p>
              </div>
            </div>
          );
        })}
      </div>
          
        <div className="rounded-3xl bg-white border border-slate-100 px-6 py-5 shadow-sm">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Taux de recouvrement
            </h3>
            <p className="text-sm text-gray-500">
              1 facture payée sur 3 ce mois-ci
            </p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-extrabold text-[#9b5cff]">33%</p>
          </div>
        </div>
        <div className="mt-4">
          <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
            <div className="h-full rounded-full bg-[#9b5cff]" style={{ width: "33%" }} />
          </div>
          <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
            <span>4 500 F</span>
            <span>4 500 F / 45 750 F</span>
          </div>
        </div>
      </div>
          
    


      <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
        <div className="flex items-baseline justify-between gap-4 mb-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Liste desFactures
            </h2>
            <p className="text-sm text-gray-500">
              Toutes les factures de paiement d'eau
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {invoices.map((invoice) => (
            <div
              key={invoice.id}
              className="flex items-center justify-between gap-4 rounded-2xl border border-slate-100 bg-white px-4 py-4 shadow-[0_1px_3px_rgba(15,23,42,0.06)] hover:shadow-md transition-shadow"
            >
              {/* Colonne gauche : icône + infos client */}
              <div className="flex items-start gap-3 min-w-0">
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-50">
                  <span className="text-lg">📄</span>
                </div>
                <div className="space-y-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-semibold text-gray-900">
                      {invoice.name}
                    </p>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${invoice.statusColor}`}
                    >
                      {invoice.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 truncate">
                    {invoice.address}
                  </p>
                  <p className="text-xs text-gray-400">
                    Émise: {invoice.issuedAt} · Échéance: {invoice.dueAt}
                  </p>
                </div>
              </div>

              
              <div className="flex flex-col items-end gap-2 shrink-0">
                <div className="text-right">
                  <p className="text-base font-semibold text-gray-900">
                    {invoice.amount}
                  </p>
                  <p className="text-xs text-gray-400">
                    {invoice.type}
                    {invoice.note ? ` · ${invoice.note}` : null}
                  </p>
                </div>
                <button className="inline-flex items-center rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-slate-50">
                  Détails
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-4 w-full rounded-full border border-dashed border-slate-200 py-2 text-sm font-medium text-gray-500 hover:bg-slate-50">
          Charger plus de factures
        </button>
      </section>
    </div>
  );

}
