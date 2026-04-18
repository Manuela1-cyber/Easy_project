"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Eye,
  EyeOff,
  Lock,
  Mail,
  ShieldCheck,
  UserRound,
} from "lucide-react";

export default function InscriptionPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(true);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (!fullName.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      setError("Veuillez renseigner tous les champs.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    if (!agreeToTerms) {
      setError("Veuillez accepter les conditions pour continuer.");
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      router.push("/dashboard");
    } catch {
      setError("Impossible de creer le compte pour le moment.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f5efe8]">
      <Image
        src="/images.jpeg"
        alt=""
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(30,16,38,0.9),rgba(131,82,165,0.6),rgba(237,127,61,0.3))]" />
      <div className="absolute left-[-6rem] top-[-5rem] h-56 w-56 rounded-full bg-amber-300/20 blur-3xl" />
      <div className="absolute bottom-[-8rem] right-[-5rem] h-80 w-80 rounded-full bg-fuchsia-300/20 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-[36px] border border-white/25 bg-white/12 shadow-[0_24px_80px_rgba(15,23,42,0.32)] backdrop-blur-xl lg:grid-cols-[0.95fr_1.05fr]">
          <section className="bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,244,252,0.9))] p-6 sm:p-8 lg:p-10">
            <div className="mx-auto max-w-md">
              <div className="flex items-center justify-between">
                <div className="h-14 w-14 overflow-hidden rounded-[20px] border border-[#8352A5]/15 shadow-sm">
                  <Image
                    src="/logo.jpeg"
                    alt="Logo"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="inline-flex items-center gap-2 rounded-full bg-[#8352A5]/8 px-3 py-1 text-xs font-semibold text-[#6c4390]">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Nouvelle inscription
                </div>
              </div>

              <div className="mt-8">
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8352A5]/70">
                  Inscription
                </p>
                <h1 className="mt-3 text-3xl font-bold text-slate-900">
                  Creez votre espace de gestion
                </h1>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Mettez en place votre compte pour commencer a suivre proprietes,
                  locataires et paiements dans un meme espace.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-700">
                    Nom complet
                  </span>
                  <div className="flex items-center gap-3 rounded-2xl border border-[#8352A5]/15 bg-white px-4 py-3 shadow-sm transition focus-within:border-[#8352A5]/50 focus-within:ring-4 focus-within:ring-[#8352A5]/10">
                    <UserRound className="h-5 w-5 shrink-0 text-[#8352A5]" />
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Votre nom et prenom"
                      className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-700">
                    Adresse email
                  </span>
                  <div className="flex items-center gap-3 rounded-2xl border border-[#8352A5]/15 bg-white px-4 py-3 shadow-sm transition focus-within:border-[#8352A5]/50 focus-within:ring-4 focus-within:ring-[#8352A5]/10">
                    <Mail className="h-5 w-5 shrink-0 text-[#8352A5]" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="exemple@gmail.com"
                      className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-700">
                    Mot de passe
                  </span>
                  <div className="flex items-center gap-3 rounded-2xl border border-[#8352A5]/15 bg-white px-4 py-3 shadow-sm transition focus-within:border-[#8352A5]/50 focus-within:ring-4 focus-within:ring-[#8352A5]/10">
                    <Lock className="h-5 w-5 shrink-0 text-[#8352A5]" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Choisissez un mot de passe"
                      className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((current) => !current)}
                      className="text-[#8352A5]/70 transition hover:text-[#8352A5]"
                      aria-label={
                        showPassword
                          ? "Masquer le mot de passe"
                          : "Afficher le mot de passe"
                      }
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-700">
                    Confirmation du mot de passe
                  </span>
                  <div className="flex items-center gap-3 rounded-2xl border border-[#8352A5]/15 bg-white px-4 py-3 shadow-sm transition focus-within:border-[#8352A5]/50 focus-within:ring-4 focus-within:ring-[#8352A5]/10">
                    <Lock className="h-5 w-5 shrink-0 text-[#8352A5]" />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Retapez le mot de passe"
                      className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword((current) => !current)}
                      className="text-[#8352A5]/70 transition hover:text-[#8352A5]"
                      aria-label={
                        showConfirmPassword
                          ? "Masquer la confirmation du mot de passe"
                          : "Afficher la confirmation du mot de passe"
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </label>

                {error && (
                  <div className="rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#8352A5] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(131,82,165,0.28)] transition hover:bg-[#734694] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <span>{isSubmitting ? "Creation..." : "Creer mon compte"}</span>
                  {!isSubmitting && <ArrowRight className="h-4 w-4" />}
                </button>
              </form>

              <p className="mt-8 text-center text-sm text-slate-600">
                Vous avez deja un compte ?{" "}
                <Link
                  href="/connexion"
                  className="font-semibold text-[#8352A5] transition hover:text-[#6b3f8f]"
                >
                  Se connecter
                </Link>
              </p>
            </div>
          </section>

          <section className="hidden flex-col justify-between bg-[linear-gradient(160deg,rgba(255,255,255,0.16),rgba(255,255,255,0.04))] p-10 text-white lg:flex">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
               
              </div>

              

            </div>

            <div className="space-y-4">
              <div className="rounded-3xl border border-white/15 bg-white/10 p-5">
                
              </div>

              <div className="rounded-3xl border border-white/15 bg-white/10 p-5">
                
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
