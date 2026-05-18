const btnImovel = document.getElementById("btn-imovel");
const btnVeiculo = document.getElementById("btn-veiculo");

const continuarStep1 = document.getElementById("continuar-step-1");
const voltarStep1 = document.getElementById("voltar-step-1");

const continuarStep2 = document.getElementById("continuar-step-2");
const voltarStep2 = document.getElementById("voltar-step-2");

const finalizarSimulacao = document.getElementById("finalizar-simulacao");

const step1 = document.getElementById("step-1");
const step2 = document.getElementById("step-2");
const step3 = document.getElementById("step-3");

const valorInput = document.getElementById("valor-input");
const rendaInput = document.getElementById("renda-input");

const nomeInput = document.getElementById("nome-input");
const whatsappInput = document.getElementById("whatsapp-input");
const emailInput = document.getElementById("email-input");



// =========================
// TEXTOS DOS CARDS
// =========================

const imovelLabel = document.getElementById("imovel-label");
const imovelTitle = document.getElementById("imovel-title");
const imovelText = document.getElementById("imovel-text");

const veiculoLabel = document.getElementById("veiculo-label");
const veiculoTitle = document.getElementById("veiculo-title");
const veiculoText = document.getElementById("veiculo-text");



let objetivoSelecionado = "imovel";



// =========================
// OBJETIVO
// =========================

btnImovel.addEventListener("click", () => {

    objetivoSelecionado = "imovel";

    ativarImovel();

});

btnVeiculo.addEventListener("click", () => {

    objetivoSelecionado = "veiculo";

    ativarVeiculo();

});



// =========================
// STEP 1 → STEP 2
// =========================

continuarStep1.addEventListener("click", () => {

    step1.classList.add("hidden");

    step2.classList.remove("hidden");

});



// =========================
// VOLTAR STEP 2 → STEP 1
// =========================

voltarStep1.addEventListener("click", () => {

    step2.classList.add("hidden");

    step1.classList.remove("hidden");

});



// =========================
// STEP 2 → STEP 3
// =========================

continuarStep2.addEventListener("click", () => {

    step2.classList.add("hidden");

    step3.classList.remove("hidden");

});



// =========================
// VOLTAR STEP 3 → STEP 2
// =========================

voltarStep2.addEventListener("click", () => {

    step3.classList.add("hidden");

    step2.classList.remove("hidden");

});



// =========================
// MÁSCARA VALOR
// =========================

valorInput.addEventListener("input", (e) => {

    let value = e.target.value;

    value = value.replace(/\D/g, "");

    if (!value) {

        e.target.value = "";

        return;

    }

    value = (Number(value) / 100).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    e.target.value = value;

});



// =========================
// MÁSCARA RENDA
// =========================

rendaInput.addEventListener("input", (e) => {

    let value = e.target.value;

    value = value.replace(/\D/g, "");

    if (!value) {

        e.target.value = "";

        return;

    }

    value = (Number(value) / 100).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    e.target.value = value;

});



// =========================
// FINALIZAR
// =========================

finalizarSimulacao.addEventListener("click", () => {

    const nome = nomeInput.value;
    const whatsapp = whatsappInput.value;
    const email = emailInput.value;

    const valor = valorInput.value;
    const renda = rendaInput.value;



    // VALIDAÇÃO

    if (!nome || !whatsapp || !email) {

        alert("Preencha todos os campos.");

        return;

    }



    // TEXTO OBJETIVO

    const objetivoTexto =
        objetivoSelecionado === "imovel"
            ? "Imóvel"
            : "Veículo";



    // MENSAGEM

    const mensagem = `Olá Victoria! Acabei de fazer uma simulação no site.

Objetivo: ${objetivoTexto}

Valor desejado: ${valor}

Renda mensal: ${renda}

Nome: ${nome}

WhatsApp: ${whatsapp}

E-mail: ${email}`;



    // ENCODE

    const mensagemFormatada = encodeURIComponent(mensagem);



    // WHATSAPP

    window.open(
        `https://wa.me/5511990048472?text=${mensagemFormatada}`,
        "_blank"
    );

});



// =========================
// ESTILO IMÓVEL
// =========================

function ativarImovel() {

    btnImovel.classList.remove(
        "border-black/10",
        "bg-[#FAFAFA]"
    );

    btnImovel.classList.add(
        "border-gold",
        "bg-gold"
    );

    btnVeiculo.classList.remove(
        "border-gold",
        "bg-gold"
    );

    btnVeiculo.classList.add(
        "border-black/10",
        "bg-[#FAFAFA]"
    );



    // TEXTOS IMÓVEL

    imovelLabel.classList.remove("text-zinc-900/40");
    imovelTitle.classList.remove("text-zinc-900");
    imovelText.classList.remove("text-zinc-900/60");

    imovelLabel.classList.add("text-white/70");
    imovelTitle.classList.add("text-white");
    imovelText.classList.add("text-white/75");



    // TEXTOS VEÍCULO

    veiculoLabel.classList.remove("text-white/70");
    veiculoTitle.classList.remove("text-white");
    veiculoText.classList.remove("text-white/75");

    veiculoLabel.classList.add("text-zinc-900/40");
    veiculoTitle.classList.add("text-zinc-900");
    veiculoText.classList.add("text-zinc-900/60");

}



// =========================
// ESTILO VEÍCULO
// =========================

function ativarVeiculo() {

    btnVeiculo.classList.remove(
        "border-black/10",
        "bg-[#FAFAFA]"
    );

    btnVeiculo.classList.add(
        "border-gold",
        "bg-gold"
    );

    btnImovel.classList.remove(
        "border-gold",
        "bg-gold"
    );

    btnImovel.classList.add(
        "border-black/10",
        "bg-[#FAFAFA]"
    );



    // TEXTOS VEÍCULO

    veiculoLabel.classList.remove("text-zinc-900/40");
    veiculoTitle.classList.remove("text-zinc-900");
    veiculoText.classList.remove("text-zinc-900/60");

    veiculoLabel.classList.add("text-white/70");
    veiculoTitle.classList.add("text-white");
    veiculoText.classList.add("text-white/75");



    // TEXTOS IMÓVEL

    imovelLabel.classList.remove("text-white/70");
    imovelTitle.classList.remove("text-white");
    imovelText.classList.remove("text-white/75");

    imovelLabel.classList.add("text-zinc-900/40");
    imovelTitle.classList.add("text-zinc-900");
    imovelText.classList.add("text-zinc-900/60");

}