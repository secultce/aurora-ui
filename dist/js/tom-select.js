document.addEventListener("DOMContentLoaded", function () {
    new TomSelect("#select-state",{
        plugins: {
            remove_button:{
                title:'Remover esse item',
            },
            clear_button:{
                title:'Apagar todos itens selecionados',
            }
        },
        maxItems: 3,
    });
});