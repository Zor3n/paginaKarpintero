function clickMenu() {
    var iconoMenu = document.getElementById('iconoMenu');
    var laLista = document.getElementById("listaMenu");
    var elementLista = document.getElementById('elementos');
    var elemento = document.getElementsByClassName('elemento');

    if (iconoMenu.innerText === 'menu') {
        laLista.style.cssText = 'align-items: start; display: flex;'+
                                'width: 61.252363636em;';

        elementLista.style.cssText = ' background-color: white; display: flex;'+
                                     'flex-direction: column; text-align: start;';
        
        for (let index = 0; index < elemento.length; index++) {
            const element = elemento[index];
            element.style.cssText = 'padding: 0.9091em 1.818181818em;'+
                                    'width: 100%;';
        }

        iconoMenu.innerText = 'menu_open';
    }else{
        laLista.style.display = 'none';
        iconoMenu.innerHTML = 'menu';
    }
}