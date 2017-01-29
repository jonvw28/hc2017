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
	if(id == 'cambridge'){
		document.getElementById("pic").src = "http://www.thedrinksbusiness.com/wordpress/wp-content/uploads/2014/02/Kings_College_Chapel_Cambridge.jpg";
	}
	 if(id == 'london'){
		 document.getElementById("pic").src = "https://media.timeout.com/images/100644443/image.jpg";
		
	}
	if(id == 'oxford'){
		document.getElementById("pic").src = "http://www.trbimg.com/img-55fb428d/turbine/os-landfill-stinks-avalon-park-20150917";
		
	}

}


function feed_append(act){
	curFeed.append(act)
	.then(response => console.log('Success:', response))
	.catch(err => console.error('Error:', err));
}
          