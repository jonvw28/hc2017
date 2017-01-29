var app = new PusherPlatform.App({
  appId: '5e5db560-dace-472b-b118-1ed0f5872d96',
});

function feed_sub(){
	if (typeof curFeed !== 'undefined'){
		cacheFeed.options.onEnd = null;
		cacheFeed.options.onError = null;
		cacheFeed.abort(null);
	}
	document.getElementById("feed_items").innerHTML = "";
	if (document.getElementById('r1').checked) {
		loc = document.getElementById('r1').value;
	}
	if (document.getElementById('r2').checked) {
		loc = document.getElementById('r2').value;
	}
	if (document.getElementById('r3').checked) {
		loc = document.getElementById('r3').value;
	}
	curFeed = app.feed(loc);
	cacheFeed = curFeed.subscribe({
		onOpen: () => console.log('Connection established'),
		onItem: item => {
			console.log('Item:', item);
			var itemEl = document.createElement("li");
			itemEl.innerText = item.body;
			document.getElementById("feed_items").insertBefore(itemEl,feed_items.firstChild);
		},
		onError: error => console.error('Error:', error),
	})
}


function feed_append(act){
	curFeed.append(act)
	.then(response => console.log('Success:', response))
	.catch(err => console.error('Error:', err));
}
