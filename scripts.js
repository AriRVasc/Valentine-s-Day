function aceitarProposta() {
    alert("Que bom! Eu também quero namorar com você!");
    /*var imagem = document.createElement("img");
    imagem.src = "img.jpg";
    document.body.appendChild(imagem); 
    var audio = new Audio("music.mp3");
    audio.play();*/
    window.location.href = "nova_pagina.html";
    
}

function recusarProposta(botao) {
    botao.style.position = 'absolute';
    botao.style.left = Math.random() * (window.innerWidth - botao.clientWidth) + 'px';
    botao.style.top = Math.random() * (window.innerHeight - botao.clientHeight) + 'px';
    console.log("Falha no sistema.")
}
