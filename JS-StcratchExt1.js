new (function() {
    var ext = this;

    // Ménage au chargement

    	ext._shutdown = function() {};

    // Status 

    	ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
	};

    // Code javascript des fonctions

	ext.doAlert = function(x) {
        	alert(x);
	};
	ext.doPrompt = function(x) {
		return prompt(x);
	};
	ext.doConfirm = function(x) {
		return confirm(x);
	};
	ext.runCommand = function(x) {
        	eval(x);
	};

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // type, block name, function name, param1 default value, param2 default value
		['', 'Alert %s', 'doAlert', 'Avertissement'],
		['r', 'Prompt %s', 'doPrompt', 'Saisie'],
		['b', 'Confirm %s', 'doConfirm', ''],
		['', 'EVAL %s', 'runCommand', 'alert("Coucou");'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('JSDilalogs', descriptor, ext);
})();

