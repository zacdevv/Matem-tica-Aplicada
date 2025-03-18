function semaforo(){
    const estados = [
        //status: Sinal via P verde | Sinal Pedestres 2: Verde | Via Pedestres e Secundaria: Vermelho//
        {principal: "Verde" , secundaria: "Vermelho", pedestres: "Vermelho" , pedestres2: "Verde" , mensagem:"Carros da via principal podem seguir ou virar á direita e pedestres da segunda via podem atravessar"},
        //status: Sinal via p Amarelo | Secundaria e Pedestres: Vermelho | Pedestres 2: Verde//
        {principal: "Amarelo" , secundaria: "Vermelho", pedestres: "Vermelho" ,pedestres2: "Verde" , mensagem: "O sinal da via principal irá fechar"},
        //status:Sinal via p Vermelho | sinal pedestres Verde | Secundária: Amarelo | Pedestre2: Vermelho//
        {principal: "Vermelho" , secundaria: "Amarelo", pedestres: "Verde" , pedestres2: "Vermelho" , mensagem: "Carros da via secundária podem seguir ou virar á direita"},
        //status: Sinal via p Vermelho | Sinal pedestres2 & secundária Verde //
        {principal: "Vermelho" , secundaria: "Amarelo", pedestres: "Verde" , pedestres2: "Vermelho" , mensagem: "O sinal da via secundária irá fechar"},
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
        console.log(`Sinal Via Pedestres 2: ${atual.pedestres2}`);
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
