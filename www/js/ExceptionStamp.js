ExceptionStamp = {
	writeStamp: function(node) {
		node.text(parseInt(jQuery.now() / 1000));
		return this;
	}
};

$(document).ready(function() {
	ExceptionStamp.writeStamp($('#tstamp'));
});
