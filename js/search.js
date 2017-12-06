class Search
{
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
    get getSearchEngine() {
        return this.searchEngine;
    }

    /**
     * Set current search engine
     */
    set setSearchEngine(searchEngine) {
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
        return document.location = `${query}`;
    }
}