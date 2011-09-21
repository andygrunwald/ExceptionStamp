ExceptionStamp = {
	options: {},
	init: function(options) {
		this.options = options;
		
		if($(location).attr("hash") == this.options.backgroundHash) {
			e = {
				'data': {
					'pObj': this
				}
			};
			this.showBackgroundInformation(e);
		}
		
		$(this.options.backgroundLinkCls).click({'pObj': this}, this.showBackgroundInformation);
		$(this.options.applicationLinkCls).click({'pObj': this}, this.hideBackgroundInformation);

		return this;
	},
	writeStamp: function(node) {
		$(this.options.timestampId).text(parseInt(jQuery.now() / 1000));
		return this;
	},
	showBackgroundInformation: function(e) {
		$(location).attr("hash", e.data.pObj.options.backgroundHash);
		$(e.data.pObj.options.applicationId).hide();
		$(e.data.pObj.options.backgroundId).show();
	},
	hideBackgroundInformation: function(e) {
		$(location).attr("hash", '#');
		$(e.data.pObj.options.applicationId).show();
		$(e.data.pObj.options.backgroundId).hide();
	}
};

$(document).ready(function() {
	var options = {
		'backgroundId': '#background',
		'backgroundHash': '#background',
		'backgroundLinkCls': '.background-link',
		'applicationId': '#container',
		'applicationLinkCls': '.application-link',
		'timestampId': '#tstamp'
	};
	ExceptionStamp.init(options).writeStamp();
});