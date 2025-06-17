define(function(require, exports, module) {
    "use strict";

    var oop = require("../lib/oop");
    var TextMode = require("./text").Mode;
    var LatinoHighlightRules = require("./latino_highlight_rules").LatinoHighlightRules; // Cambiado aquí

    var Mode = function() {
        this.HighlightRules = LatinoHighlightRules;
    };
    oop.inherits(Mode, TextMode);

    (function() {
        this.$id = "ace/mode/latino"; // Cambiado aquí
    }).call(Mode.prototype);

    exports.Mode = Mode;
});
