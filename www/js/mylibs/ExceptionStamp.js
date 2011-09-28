ExceptionStamp = {
	options: {},
	init: function(options) {
		this.options = options;
		
		if($(location).attr("hash") == this.options.backgroundHash) {
			this.showBackgroundInformation();
		}
		
		$(this.options.backgroundLinkCls).click($.proxy(this.showBackgroundInformation, this));
		$(this.options.applicationLinkCls).click($.proxy(this.hideBackgroundInformation, this));

		return this;
	},
	writeStamp: function(node) {
		$(this.options.timestampId).text(parseInt(jQuery.now() / 1000));
		return this;
	},
	showBackgroundInformation: function(e) {
		$(location).attr("hash", this.options.backgroundHash);
		$(this.options.applicationId).hide();
		$(this.options.backgroundId).show();
	},
	hideBackgroundInformation: function(e) {
		$(location).attr("hash", '#');
		$(this.options.applicationId).show();
		$(this.options.backgroundId).hide();
	}
};