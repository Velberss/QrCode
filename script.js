var btnGerar = document.querySelector("#btn-gerar");
let box = document.querySelector(".box");
let divQrcode = document.querySelector(".qr-code");
let downloadLink = document.querySelector("#download-link");

function gerarCodigoQr() {
    let linkInput = document.querySelector("#campo-qr").value;

    if (linkInput.trim() !== "") {
        // Limpa o QR anterior (evita sobreposição)
        box.innerHTML = "";

        var qrcode = new QRCode(box, {
            text: linkInput,
            width: 256,
            height: 256,
        });

        // Torna a div visível
        divQrcode.classList.add("display-hidden");

        // Espera um pouco para o QR code renderizar e pega a imagem
        setTimeout(() => {
            let img = box.querySelector("img") || box.querySelector("canvas");
            if (img) {
                let imgSrc = img.src || img.toDataURL();
                downloadLink.href = imgSrc;
                downloadLink.download = "qrcode.png";
            }
        }, 300);
    }
}

btnGerar.addEventListener("click", gerarCodigoQr);