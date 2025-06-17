define(function(require, exports, module) {
    "use strict";

    var langTools = require("ace/ext/language_tools");

    var keywordList = [
        "caso", "cierto", "verdadero", "continuar", "defecto", "otro", "desde", "elegir",
        "error", "escribir", "imprimir", "poner", "falso", "fin", "funcion", "fun",
        "global", "hasta", "imprimirf", "incluir", "mientras", "nulo", "osi", "repetir",
        "retorno", "retornar", "ret", "romper", "si", "sino", "tipo", "rango", "ir"
    ];

    var keywords = keywordList.map(function(word) {
        return {
            caption: word,
            value: word,
            meta: "palabra clave"
        };
    });

    var latinoCompleter = {
        getCompletions: function(editor, session, pos, prefix, callback) {
            if (prefix.length === 0) { 
                callback(null, []);
                return;
            }
            callback(null, keywords);
        }
    };

    langTools.addCompleter(latinoCompleter);
});