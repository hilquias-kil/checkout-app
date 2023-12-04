export function validCPF(cpf: string): boolean {
  // Remove non-numeric characters from the input
  cpf = cpf.replace(/\D/g, "");

  // Check if CPF length is valid and if it's not a repeated number pattern
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
    return false;
  }

  // Calculate the first verification digit
  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) {
    resto = 0;
  }
  if (resto !== parseInt(cpf.charAt(9))) {
    return false;
  }

  // Calculate the second verification digit
  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) {
    resto = 0;
  }
  return resto === parseInt(cpf.charAt(10));
}
