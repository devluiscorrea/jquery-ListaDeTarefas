$(document).ready(function () {
  $('#form-tarefa').submit(function (e) {
    e.preventDefault(); // Impede o reload da página

    const nomeTarefa = $('#tarefa').val();

    if (nomeTarefa.trim() !== '') {
      $('#lista-tarefas').append('<li>' + nomeTarefa + '</li>');
      $('#tarefa').val('');
    }
  });

  // Ao clicar em um item, adiciona/remover a classe "riscado"
  $('#lista-tarefas').on('click', 'li', function () {
    $(this).toggleClass('riscado');
  });
});