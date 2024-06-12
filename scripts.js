function aceitarProposta() {
    alert("Que bom! Eu também quero namorar com você!");
    window.location.href = "new.html";
    
}

function recusarProposta(botao) {
    botao.style.position = 'absolute';
    botao.style.left = Math.random() * (window.innerWidth - botao.clientWidth) + 'px';
    botao.style.top = Math.random() * (window.innerHeight - botao.clientHeight) + 'px';
    console.log("Falha no sistema.")
}
