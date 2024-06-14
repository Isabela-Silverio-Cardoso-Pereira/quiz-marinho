function verificarresposta(){
    var respostaUsuario = document.getElementById("resposta").value;
    var respostaCorreta = "a";

    if(respostaUsuario.toLowerCase()===respostaCorreta){
        res.innerHTML = `resposta correta`;
        
        
    }else{
        res.innerHTML = "resposta incorreta";
    }
}
    function verificarresposta2(){
        var respostaUsuario2 = document.getElementById("resposta2").value;
        var respostaCorreta2 = "c";
        if(respostaUsuario2.toLowerCase()===respostaCorreta2){
            res2.innerHTML = "resposta correta";
        }else{
            res2.innerHTML = "resposta incorreta";
        }
    }

    function verificarresposta3(){
        var respostaUsuario3 = document.getElementById("resposta3").value;
        var respostaCorreta3 = "a";
        if(respostaUsuario3.toLowerCase()===respostaCorreta3){
            res3.innerHTML = "resposta correta";
        }else{
            res3.innerHTML = "resposta incorreta";
        }
    }


 function verificarresposta4(){
        var respostaUsuario4 = document.getElementById("resposta4").value;
        var respostaCorreta4 = "c";
        if(respostaUsuario4.toLowerCase()===respostaCorreta4){
            res4.innerHTML = "resposta correta";
        }else{
            res4.innerHTML = "resposta incorreta";
        }
    }

    function verificarresposta5(){
        var respostaUsuario5 = document.getElementById("resposta5").value;
        var respostaCorreta5 = "c";
        if(respostaUsuario5.toLowerCase()===respostaCorreta5){
            res5.innerHTML = "resposta correta";
        }else{
            res5.innerHTML = "resposta incorreta";
        }
    }

