(function() {

'use strict';

window.FSH = window.FSH || {};

FSH.environment = { // Legacy

	// main event dispatcher
	dispatch: function() { // jQuery

		var msgDiv = $('<div/>');
		msgDiv.append('<p>Your FallenSwordHelper is obsolete.</p>');
		msgDiv.append('<p>Please update it <a href="https://fallenswordhelper.' +
			'github.io/fallenswordhelper/Releases/Current/fallenswordhelper.user.' +
			'js">here</a>.</p>');
		msgDiv.dialog({
			dialogClass: 'no-close',
			closeOnEscape: false,
			draggable: false,
			modal: true,
			resizable: false,
			title: 'FSH Warning',
		});

	},

};

})();
