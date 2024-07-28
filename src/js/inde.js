/*
O que precisamos fazer ? -  quando clicar no botão do personagem na lista, temos que marcar o botão como selecionado e mostrar o personagem correspondente.

    OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botão como selecionado.
        passo1 - pegar os botoe no JS para poder verificar quando o ususario clica em cima deles. 
        passo2 - adicionar a classe "selecionado" no botão que o usuario clicou. 
        passo3 - verificar se ja existe um botão selecionado, se sim. devemos remover a seleção dele.

        OBJETIVO 2 - quando clicar no botão do personagem mostrar as informaçoes do personagem.
        passo1 - pegar os personagens no JS para poder mostrar ou esconder ele.
        passo2 - adicionar a classe "selecionado" no personagem que o usuario selecionou.
        passo3 - verificar se ja existe um personagem seleionado, se sim, devemos remover a selação dele.
        */
//OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botão como selecionado.//

//passo1 - pegar os botoe no JS para poder verificar quando o ususario clica em cima deles. //
const botoes = document.querySelectorAll(".botao")

//OBJETIVO 2 - quando clicar no botão do personagem mostrar as informaçoes do personagem.
//passo1 do objetivo 2 - pegar os personagens no JS para poder mostrar ou esconder ele.

const personagens = document.querySelectorAll(".personagem")


//passo2 - adicionar a classe "selecionado" no botão que o usuario clicou. 

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {


        //passo3 - verificar se ja existe um botão selecionado, se sim. devemos remover a seleção dele.
        desseleionarBotao();
        //codigo a cima rafatorado 
        //passo2 - adicionar a classe "selecionado" no botão que o usuario clicou. 

        //passo3 do objetivo 2 - verificar se ja existe um personagem seleionado, se sim, devemos remover a selação dele.
        deselecionarPersonagem();
        //codigo acima refatorado


        botao.classList.add("selecionado");

        //passo2 do objetivo 2 - adicionar a classe "selecionado" no personagem que o usuario selecionou.
        personagens[indice].classList.add("selecionado");
    });
});

function deselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desseleionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

