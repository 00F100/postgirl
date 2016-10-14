chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.windows.create({
		'url': 'layout/index.html',
		'type': 'popup',
		'left': 0,
		'top': 0,
		'width': screen.width,
		'height': screen.height
	}, function(window) {});
});