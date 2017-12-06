class Search
{
    /**
     * Search
     * 
     * @param {string} searchEngine specify a search engine to use
     * @param {object} searchEngines specify a set of search engines (default only has bing)
     * 
     * Example searchEngines: {"bing": "www.bing.com/search?q=", "name": "url"}
     */
    constructor(searchEngine, searchEngines = null) {
        if (!searchEngines) {
            var searchEngines = {
                'bing': 'http://bing.com/search?q=',
            };
        }

        this.searchEngines = searchEngines;
        this.searchEngine = searchEngines[searchEngine] ? searchEngines[searchEngine] : searchEngines.bing;
    }

    /**
     * Get the current search engine used to search for queries
     */
    getSearchEngine() {
        return this.searchEngine;
    }

    /**
     * Set current search engine
     */
    setSearchEngine(searchEngine) {
        return this.searchEngine = this.searchEngines[searchEngine];
    }

    /**
     * Search using the current search engine
     * 
     * @param {string} query
     */
    search(query) {
        return document.location = `${this.searchEngine}${query}`;
    }

    /**
     * Go to a specific url
     * 
     * @param {string} query 
     */
    goto(query) {
        if (query.indexOf('http://') < 0)
            query = "http://" + query;
        
        return document.location = `${query}`;
    }
}