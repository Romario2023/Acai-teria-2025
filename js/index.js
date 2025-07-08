function enviarPedidoWhatsApp(tamanho, adicionais) {
  const numero = "5562992819068"; //Número do WhatsApp
  const mensagem = encodeURI(
    `Ola, gostaria de pedir um copo de ${tamanho} com os seguintes adicionais: ${adicionais}.\n\nID do pedido: ${gerarID()}`
  );
  window.open(`https://wa.me/${numero}?text=${mensagem}`, "_blank");
}

function gerarID() {
  const caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "ACAÍ-";
  for (let i = 0; i < 6; i++) {
    id += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return id;
}
