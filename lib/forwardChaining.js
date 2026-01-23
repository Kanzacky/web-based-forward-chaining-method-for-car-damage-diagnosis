export function forwardChaining(selectedGejala, rules) {
  return rules.filter(rule =>
    selectedGejala.includes(rule.kode_gejala)
  );
}
