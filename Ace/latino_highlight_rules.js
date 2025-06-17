define(function(require, exports, module) {
    "use strict";

    var oop = require("../lib/oop");
    var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

    var LatinoHighlightRules = function() {

        this.$rules = {
            "start": [
                {
                    token: "comment.start",
                    regex: "/\\*",
                    next: "comment_block"
                },
                {
                    token: "comment",
                    regex: "//.*$"
                },
                {
                    token: "comment",
                    regex: "#.*$"
                },
                {
                    token: "string", // comillas dobles con escapes
                    regex: '"(?:\\\\.|[^"\\\\])*"'
                },
                {
                    token: "string", // comillas simples con escapes
                    regex: "'(?:\\\\.|[^'\\\\])*'"
                },
                {
                    token: "constant.numeric",
                    regex: "\\b\\d+(\\.\\d+)?\\b"
                },
                {
                    token: "keyword",
                    regex: "\\b(caso|cierto|verdadero|continuar|defecto|otro|desde|elegir|error|escribir|imprimir|poner|falso|fin|funcion|fun|global|hasta|imprimirf|incluir|mientras|nulo|osi|repetir|retorno|retornar|ret|romper|si|sino|tipo|rango|ir)\\b"
                },
                {
                    token: "identifier",
                    regex: "[a-zA-Z_\\u00C0-\\u017F][a-zA-Z0-9_\\u00C0-\\u017F]*"
                }
            ],

            "comment_block": [
                {
                    token: "comment.end",
                    regex: "\\*/",
                    next: "start"
                },
                {
                    defaultToken: "comment"
                }
            ]
        };
    };

    oop.inherits(LatinoHighlightRules, TextHighlightRules);
    exports.LatinoHighlightRules = LatinoHighlightRules;
});