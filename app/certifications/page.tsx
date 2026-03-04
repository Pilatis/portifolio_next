"use client";

import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import Certifications from "@/components/Certifications";
import { useLanguage } from "@/context/LanguageContext";

export default function CertificationsPage() {
  const { t } = useLanguage();
  const certT = t("certifications") as { pageBack?: string };

  return (
    <div className="min-h-screen bg-black-100 relative overflow-hidden">
      <div
        className="fixed inset-0 pointer-events-none bg-grid-white/[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgba(255,255,255,0.03)'%3E%3Cpath d='M0 .5H31.5V32'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="fixed inset-0 pointer-events-none bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <Link
          href="/#certifications"
          className="inline-flex items-center gap-2 text-white-200 hover:text-purple transition-colors text-sm md:text-base mb-10"
        >
          <IoArrowBack className="text-lg" />
          {certT.pageBack ?? "Voltar ao portfólio"}
        </Link>

        <Certifications variant="full" />
      </div>
    </div>
  );
}
