

function menuOp(esc){
    const cdp = document.getElementById("cardapio");
    const pdd = document.getElementById("pedidos");
    const mnt = document.getElementById("montarPizza");
    switch(esc){
        case 1:
            cdp.style.display = 'flex';
            pdd.style.display = 'none';
            mnt.style.display = 'none';
        break;
        case 2:
            cdp.style.display = 'none';
            pdd.style.display = 'flex';
            mnt.style.display = 'none';
        break;
        case 3:
            cdp.style.display = 'none';
            pdd.style.display = 'none';
            mnt.style.display = 'flex';
        break;
    }
}