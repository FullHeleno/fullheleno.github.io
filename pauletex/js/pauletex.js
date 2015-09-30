/**
 * Created by full heleno on 29/09/15.
 * Exe algoritxmo pega palavra por palavra e xubxtitui ox fonemax do array FONEMAS por X.
 */
//Os fonemas estão em ordem de prioridade

FONEMAS = {
    'ca' : 'ca',
    'ge ' : 'x😛💦ge',
    'gi' : 'x😛💦gi',
    'ce' : 'x😛💦e',
    'j' : 'x😛💦',
    's' : 'x😛💦',
    'z' : 'x😛💦',
};

var isLowerCase = function(s){
    return s.toLowerCase() === s;
};

/**
 * @param palavra
 * @returns palavra
 */
traduzPalavra = function(palavra){
    var palavra = palavra;
    for (var fonema in FONEMAS) {
        if (FONEMAS.hasOwnProperty(fonema)) {
            palavra = palavra.replace(new RegExp(fonema, 'gi'),function(match){
                var replaceString = "";
                var replaxe = FONEMAS[match.toLowerCase()];
                var lastLowerCase = true;
                for(var i=0; i<match.length && i<replaxe.length; i++){
                    var letra = match[i];
                    if(lastLowerCase = isLowerCase(letra))
                        replaceString = replaceString + replaxe[i];
                    else
                        replaceString = replaceString + replaxe[i].toUpperCase();
                }
                if(match.length < replaxe.length){
                    for(i=match.length; i<replaxe.length; i++){
                        if(lastLowerCase)
                            replaceString = replaceString + replaxe[i];
                        else
                            replaceString = replaceString + replaxe[i].toUpperCase();
                    }
                }
                return replaceString;
            });
        }
    }
    return palavra;
};

traduzTexto = function(texto){
    var traduzido = "";
    var palavras = texto.split(' ');
    for(var i=0; i<palavras.length; i++){
        var palavra = palavras[i];
        traduzido = traduzido+traduzPalavra(palavra)+" ";
    }
    return traduzido.trim();
};