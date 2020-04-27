    function validar (){
    var vn = document.getElementById("nome");
    var vnome = vn.value;
    var vp = document.getElementById("preco");
    var vpreco = vp.value;
    var vq = document.getElementById("quant");
    var vquant = vq.value;
    var vv = document.getElementById("validade");
    var vvalidade = vv.value;
    var vi = document.getElementById("imagem");
    var vimagem = vi.value;
    var vl = document.getElementById("lista");
    var vlista = vl.value;


        if(vnome.length < 3 ){
            alert("Campo nome obrigatório e necessário pelo menos 3 carácteres!");
            return false;
        }
        else if(vpreco <= 0 ){
            alert("O preço precisa ser positivo!");
            return false;
        }
        else if(vquant <= 0 ){
            alert("A quantidade precisa ser maior que zero(0)!");
            return false;
        }
        else if(vvalidade <= 0 ){
            alert("Insira uma validade posterior á uma semana!");
            return false;
        }
        else if(vimagem <= 0 ){
            alert("Insira uma imagem do produto!");
            return false;
        }
        else if(vlista == "" ){
            alert("Insira uma categoria do produto!");
            return false;
        }
        else
        return true;

    }