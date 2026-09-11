// lib/utils/proposers.ts

/**
 * Converts a person's full name to their first and last name initials.
 * Example: "Michael Eneyufoh Umoize" -> "M.U."
 * Example: "Helin Gül" -> "H.G."
 * Example: "Eyad Al-Moaid" -> "E.A."
 */
export function formatProposerInitials(fullName: string): string {
  if (!fullName || typeof fullName !== "string") return "";

  const trimmed = fullName.trim();
  const parts = trimmed.split(/\s+/).filter(Boolean);

  if (parts.length === 0) return "";
  if (parts.length === 1) {
    const firstChar = parts[0].charAt(0).toUpperCase();
    return `${firstChar}.`;
  }

  const firstInitial = parts[0].charAt(0).toUpperCase();
  const lastPart = parts[parts.length - 1];
  const lastInitial = lastPart.charAt(0).toUpperCase();

  return `${firstInitial}.${lastInitial}.`;
}

/**
 * Converts a list of proposer names into a formatted string of initials.
 * Removes duplicates and never uses the word "intern".
 * Example: ["Michael Eneyufoh Umoize", "Helin Gül"] -> "M.U., H.G."
 */
export function formatProposersList(names: string[]): string {
  if (!names || !Array.isArray(names)) return "";

  const formattedList: string[] = [];
  const seen = new Set<string>();

  for (const name of names) {
    const initials = formatProposerInitials(name);
    if (initials && !seen.has(initials)) {
      seen.add(initials);
      formattedList.push(initials);
    }
  }

  return formattedList.join(", ");
}
