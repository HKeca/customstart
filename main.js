/**
 * Search
 */
function search(query) {
	document.location = `https://www.bing.com/search?q=${query}`;
}

/**
* Goto url
*/
function gotoUrl(query) {
	document.location = `http://${query}`;
}

/**
* Goto sub reddit
*/
function gotoSubreddit(query) {
	document.location = `http://reddit.com/r/${query}`;
}


function run(event) {
	if (event.keyCode == 13) {
		var searchQuery = document.getElementById('search').value;

		if (searchQuery.indexOf('.') > -1 
			&& searchQuery.indexOf('. ') < 0
			&& searchQuery.indexOf(' . ') < 0) {
			gotoUrl(searchQuery);
		} else if(searchQuery.indexOf('r/') > -1) {
			var query = searchQuery.split('/')[1];
			gotoSubreddit(query);
		} else {
			search(document.getElementById('search').value);
		}
	}
}