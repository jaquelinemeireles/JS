function carregar (){
var msg = document.getElementById(`msg`)
var img = window.document.getElementById(`imagem`)
var data = new Date()
var hora = data.getHours()
msg.innerHTML=`Agora sao ${hora} horas.`

if(hora >= 0 && hora <= 12) {
    // BOM DIA 
    img.src = `foto manha.jpg`
    document.body.style.background = `#22142b`
}
else if(hora >= 12 && hora <= 18) {
    // BOA TARDE
    img.src=`foto tarde.jpg`
document.body.style.background = "#21145f"
}
else if(hora >= 19 && hora <= 23) {
    // BOA NOITE
    img.src=`fotonoite.jpg`
    document.body.style.background ="#23314h"
}

}
