function semaforo(){
    const estados = [
        //status: Sinal via P verde://
        {principal: "verde" , secundaria: "vermelho", pedestres: "vermelho" , mensagem:"Carros da via principal podem seguir ou virar"},
        //status: Sinal via p Amarelo//
        {principal: "amarelo" , secundaria: "vermelho", pedestres: "vermelho" , mensagem: "O sinal irá fechar"},
        //status:Sinal via p Vermelho | sinal pedestres e secundária vermelho//
        {principal: "vermelho" , secundaria: "verde", pedestres: "verde" , mensagem: "Carros da via secundária podem seguir"},
        //status: Sinal via p Vermelho | Sinal pedestres & secundária Verde //
        {principal: "vermelho" , secundaria: "amarelo", pedestres: "vermelho" , mensagem: "O sinal irá fechar"},
        //reiniciando ciclo//
    ];

    let index = 0;//variavel para executar o ciclo começando no primeiro item do array//

    //função para troca dos sinais//
    function trocadesinais(){
        const atual = estados[index];
        console.log("------TROCA DE SINAIS------");
        console.log(`Sinal Via Principal:   ${atual.principal}`);
        console.log(`Sinal Via Secundária:  ${atual.secundaria}`);
        console.log(`Sinal Via Pedestres:  ${atual.pedestres}`);
        console.log(`Atenção:  ${atual.mensagem}`);


        index = (index + 1) % estados.length //garante que avance para a proxima etápa e quando terminar retorne ao zero//

        //intevalo para a troca dos sinais de 1 min//
        setTimeout(trocadesinais , 5000);
    }    
    //inicia o sinal
    trocadesinais();
};    

    //chama a função para iniciar a execução
    semaforo();