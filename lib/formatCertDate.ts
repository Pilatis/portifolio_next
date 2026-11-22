/** Converte `YYYY-MM` → `MM/YYYY` (padrão BR). */
function toBrazilianMonthYear(ym: string): string {
  const match = /^(\d{4})-(\d{2})$/.exec(ym);
  if (!match) return ym;
  return `${match[2]}/${match[1]}`;
}

function formatMonthYear(ym: string, lang?: string): string {
  return lang === "pt" ? toBrazilianMonthYear(ym) : ym;
}

/** Formata período de certificação; evita "2026-05 – 2026-05". Em PT usa MM/YYYY. */
export function formatCertDateRange(
  startedAt: string,
  issuedAt: string | null,
  inProgressLabel: string,
  lang?: string,
): string {
  if (issuedAt === null) return inProgressLabel;
  const start = formatMonthYear(startedAt, lang);
  const end = formatMonthYear(issuedAt, lang);
  if (startedAt === issuedAt) return start;
  return `${start} – ${end}`;
}
