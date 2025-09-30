/**
 * @function validarEntrada
 * @description Valida descrição e valor inseridos pelo usuário.
 * @param {string} descricao - Descrição da transação
 * @param {number} valor - Valor da transação
 * @returns {boolean} - Retorna true se válido
 */
export function validarEntrada(descricao, valor) {
  return descricao.length > 0 && !isNaN(valor) && valor > 0;
}
