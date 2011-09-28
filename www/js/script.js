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