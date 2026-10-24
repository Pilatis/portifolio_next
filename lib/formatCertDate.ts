/** Formata período de certificação; evita "2026-05 – 2026-05". */
export function formatCertDateRange(
  startedAt: string,
  issuedAt: string | null,
  inProgressLabel: string,
): string {
  if (issuedAt === null) return inProgressLabel;
  if (startedAt === issuedAt) return issuedAt;
  return `${startedAt} – ${issuedAt}`;
}
