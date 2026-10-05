"use client";
import { useState } from "react";
import { Mail, Check } from "lucide-react";

export default function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = email;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={copy}
      aria-label="Copiar email"
      title={copied ? "¡Copiado!" : `Copiar ${email}`}
      className="relative grid place-items-center transition hover:text-white"
    >
      {copied ? <Check size={20} className="text-[#c8f04a]" /> : <Mail size={20} />}
    </button>
  );
}
