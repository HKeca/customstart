/**
 * Init
 */
let searchUrls = {
	"bing": "http://www.bing.com/search?q=",
	"google": "http://www.google.com/search?q="
};

mySearch	= new Search("bing", searchUrls);
Renderer	= new Renderer();

/**
 * Load savedata 
 */
let historyContainer 	= document.getElementById('history');
let saveData			= JSON.parse(localStorage.getItem('saveData')) || [];
History					= new History(historyContainer, saveData, Renderer);


// TODO: clean up main function
function gotoSubreddit(query) {
	mySearch.goto(`http://reddit.com/r/${query}`);
}

function run(event) {
	if (event.keyCode == 13) {
		var searchQuery = document.getElementById('searchQuery').value;

		if (searchQuery.indexOf('.') > -1 
			&& searchQuery.indexOf('. ') < 0
			&& searchQuery.indexOf(' . ') < 0) {
			History.updateHistory(searchQuery);			
			mySearch.goto(searchQuery);
		} else if(searchQuery.indexOf('r/') > -1) {
			var query = searchQuery.split('/')[1];
			gotoSubreddit(query);
		} else {
			mySearch.search(searchQuery);
		}
	}
}

History.renderHistory();