import { calcularResumo } from './calculos.js';
import { validarEntrada } from './validacao.js';

const form = document.getElementById("formTransacao");
const lista = document.getElementById("listaTransacoes");

let transacoes = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const descricao = document.getElementById("descricao").value.trim();
  const valor = parseFloat(document.getElementById("valor").value);
  const tipo = document.getElementById("tipo").value;

  if (!validarEntrada(descricao, valor)) {
    alert("Preencha os dados corretamente!");
    return;
  }

  const nova = { descricao, valor, tipo };
  transacoes.push(nova);

  renderizarTabela();
  calcularResumo(transacoes);
  form.reset();
});

function renderizarTabela() {
  lista.innerHTML = "";
  transacoes.forEach((t) => {
    const row = `<tr>
        <td>${t.descricao}</td>
        <td>R$ ${t.valor.toFixed(2)}</td>
        <td>${t.tipo}</td>
      </tr>`;
    lista.innerHTML += row;
  });
}
