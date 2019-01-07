chrome.tabs.onUpdated.addListener(function(id, info, tab) {
    chrome.tabs.executeScript({
		code: '(' + function(params) {
				if((e = document.querySelector("#LOGGING_DIALOG")) !== null){
					e.style.display = 'none';
				}		
				return {success: true};
			} + ')(' + JSON.stringify('success') + ');'
		}, 
		function(results) {
			console.log(results[0]);
		}
	);
});