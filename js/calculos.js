/**
 * @function calcularResumo
 * @description Calcula totais de receitas, despesas e saldo.
 * @param {Array} transacoes - Lista de transações {descricao, valor, tipo}
 */
export function calcularResumo(transacoes) {
  const totalReceitas = transacoes
    .filter(t => t.tipo === "Receita")
    .reduce((acc, t) => acc + t.valor, 0);

  const totalDespesas = transacoes
    .filter(t => t.tipo === "Despesa")
    .reduce((acc, t) => acc + t.valor, 0);

  document.getElementById("totalReceitas").textContent = `R$ ${totalReceitas.toFixed(2)}`;
  document.getElementById("totalDespesas").textContent = `R$ ${totalDespesas.toFixed(2)}`;
  document.getElementById("saldo").textContent = `R$ ${(totalReceitas - totalDespesas).toFixed(2)}`;
}

function atualizarResumo() {
  const totalReceitas = registros
    .filter(r => r.tipo === "receita")
    .reduce((acc, r) => acc + r.valor, 0);
  const totalDespesas = registros
    .filter(r => r.tipo === "despesa")
    .reduce((acc, r) => acc + r.valor, 0);
  const saldo = totalReceitas - totalDespesas;
  // Atualiza nos cards
  document.getElementById("totalReceitas").textContent = `R$ ${totalReceitas.toFixed(2)}`;
  document.getElementById("totalDespesas").textContent = `R$ ${totalDespesas.toFixed(2)}`;
  document.getElementById("saldo").textContent = `R$ ${saldo.toFixed(2)}`;
 }