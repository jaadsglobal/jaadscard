"use client";

import QRCode from "qrcode";
import { Download } from "lucide-react";
import { useEffect, useRef } from "react";
import type { Profile } from "@/config/profile";

type QRCodeCardProps = {
  profile: Profile;
};

export function QRCodeCard({ profile }: QRCodeCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    QRCode.toCanvas(canvasRef.current, window.location.href, {
      width: 184,
      margin: 1,
      color: {
        dark: "#050607",
        light: "#ffffff",
      },
      errorCorrectionLevel: "H",
    });
  }, []);

  function handleDownload() {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const anchor = document.createElement("a");
    anchor.href = canvas.toDataURL("image/png");
    anchor.download = "codigo-qr-tarjeta-digital.png";
    anchor.click();
  }

  return (
    <section
      aria-labelledby="qr-title"
      className="mt-6 rounded-3xl border border-white/10 bg-black/20 p-4"
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 id="qr-title" className="text-sm font-semibold text-white">
            Compartir mi tarjeta
          </h2>
          <p className="mt-1 text-xs leading-5 text-slate-400">
            Escanea para abrir esta tarjeta.
          </p>
        </div>
        <button
          type="button"
          onClick={handleDownload}
          className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.055] text-white transition hover:border-white/20 hover:bg-white/[0.09]"
          aria-label="Descargar QR"
          title="Descargar QR"
        >
          <Download aria-hidden="true" size={18} />
        </button>
      </div>
      <div className="mt-4 flex justify-center">
        <div className="rounded-3xl bg-white p-3 shadow-2xl shadow-black/30">
          <canvas
            ref={canvasRef}
            width={184}
            height={184}
            aria-label={`Código QR de la tarjeta digital de ${profile.name}`}
            role="img"
            className="block size-[184px]"
          />
        </div>
      </div>
    </section>
  );
}
