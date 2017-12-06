/**
 * Init search
 */
mySearch = new Search("bing");


function gotoSubreddit(query) {
	mySearch.goto(`http://reddit.com/r/${query}`);
}

function run(event) {
	if (event.keyCode == 13) {
		var searchQuery = document.getElementById('searchQuery').value;

		if (searchQuery.indexOf('.') > -1 
			&& searchQuery.indexOf('. ') < 0
			&& searchQuery.indexOf(' . ') < 0) {
			mySearch.goto(searchQuery);
		} else if(searchQuery.indexOf('r/') > -1) {
			var query = searchQuery.split('/')[1];
			gotoSubreddit(query);
		} else {
			mySearch.search(searchQuery);
		}
	}
}