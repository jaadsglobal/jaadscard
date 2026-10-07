"use client";

import { Share2 } from "lucide-react";
import { useState } from "react";
import { copyToClipboard } from "@/utils/share";

type ShareButtonProps = {
  title: string;
  description: string;
};

export function ShareButton({ title, description }: ShareButtonProps) {
  const [message, setMessage] = useState("");

  async function handleShare() {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url,
        });
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }
      }
    }

    await copyToClipboard(url);
    setMessage("Enlace copiado");
    window.setTimeout(() => setMessage(""), 2200);
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={handleShare}
        className="flex min-h-14 w-full min-w-0 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.055] px-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.09]"
        aria-label="Compartir tarjeta"
      >
        <Share2 aria-hidden="true" size={18} />
        <span className="min-w-0 truncate">Compartir tarjeta</span>
      </button>
      <p
        className="absolute inset-x-0 -bottom-7 text-center text-xs font-medium text-[var(--accent)]"
        aria-live="polite"
      >
        {message}
      </p>
    </div>
  );
}
