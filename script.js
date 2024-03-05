$('form').on('submit', function (e) {
  e.preventDefault()

  const cadastrarTarefa = $('#input-task').val()
  const exibirTarefa = $(`<li> ${cadastrarTarefa} </li>`)
  exibirTarefa.appendTo('ul')

  $('li').click(function () {
    $(this).toggleClass('done')
  })
})
