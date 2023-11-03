
$(document).ready(function(){
    $('header button').click(function () {
    $('form').slideDown();

})
$('#cancelar').click(function (){
    $('form').slideUp();
})
$('form').on('submit',function (e){
    e.preventDefault();
   
    const enderecoNovaimagem = $('#imagem-nova').val()
    const novoItem = $('<li></li>')
    $(`<img src = "$(enderecoNovaimagem)" />`).appendTo(novoItem);
    $(`
        <div class = "$(over-imagem)" >
            <a hrelf="$(enderecoNovaimagem)" target = "_blank">
                ver imagem em tamanho real
            <a/>
        </div>
    `).appendTo(novoItem)
    $(novoItem).appendTo('ul');
    
   
    

})
   
})






