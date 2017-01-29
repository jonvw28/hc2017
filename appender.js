var app = new PusherPlatform.App({
  appId: '5e5db560-dace-472b-b118-1ed0f5872d96',
});

function feed_sub(id){
	if (typeof curFeed !== 'undefined'){
		cacheFeed.options.onEnd = null;
		cacheFeed.options.onError = null;
		cacheFeed.abort(null);
		var buts = document.getElementsByClassName('alert-success');
			while (buts.length) {
				buts[0].className = 'alert alert-info';
			}
	}
	document.getElementById("feed_items").innerHTML = ""
	curFeed = app.feed(id);
	cacheFeed = curFeed.subscribe({
		lastEventId: "0",
		onOpen: item => console.log('Connection established'),
		onItem: item => {
			console.log('Item:', item);
			var itemEl = document.createElement("li");
			itemEl.innerText = item.body;
			document.getElementById("feed_items").insertBefore(itemEl,feed_items.firstChild);
		},
		onError: error => console.error('Error:', error),
	});
	document.getElementById(id).className = "alert alert-success"
	var a = document.getElementById('tweets')
	if(id == 'cambridge'){
		a.href = "https://twitter.com/hashtag/cambridge"; 
		//a.data-widget-id = "825520061171560448";
	}
	 if(id == 'london'){
		a.href = "https://twitter.com/hashtag/london";
		//a.data-widget-id = "825676998215340032";		
	}
	if(id == 'oxford'){
		a.href = "https://twitter.com/hashtag/oxford"; 
		//a.data-widget-id = "825675275350507521";
	}
}


function feed_append(act){
	curFeed.append(act)
	.then(response => console.log('Success:', response))
	.catch(err => console.error('Error:', err));
}
          