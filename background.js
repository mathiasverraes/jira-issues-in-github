chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
	chrome.pageAction.show(sender.tab.id);
	
	if (request.method == "getLocalStorage")
		sendResponse({
			data : localStorage[request.key]
		});
	else
		sendResponse({});
});
