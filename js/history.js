class History
{
    /**
     * History
     * 
     * @param {string} historyView the div where the history will be rendered 
     * @param {object} savedHistory the history object saved in the browser
     * @param {instance} renderer an instance of the renderer class
     * @param {int} historyLimit limit to the amount of history objects saved. (default = 2)
     */
    constructor(historyView, savedHistory, renderer, historyLimit = 2) {
        this.renderer = renderer;
        this.historyView = historyView;
        this.savedHistory = savedHistory;
        this.historyLimit = historyLimit;
    }

    /**
     * Add url to history
     * 
     * @param {string} url 
     */
    updateHistory(url) {
        if (url.lastIndexOf('//') < 0)
            url = "http://" + url;

        let newEntry = {url: url, style: 'query-link', type: 'a'};

        if (this.savedHistory.length > this.historyLimit)
            this.savedHistory.pop();
        this.savedHistory.push(newEntry);
        this.saveHistory();
        return this.renderHistory();
    }

    /**
     * TODO: implement 
     */
    removeFromHistory() {}

    /**
     * Clear history
     */
    clearHistory() {
        let clearedHistory = JSON.stringify(this.savedHistory = []);

        localStorage.setItem('saveData', clearedHistory);
    }

    /**
     * Get history
     */
    get history() {
        return this.savedHistory;
    }

    /**
     * Save current history to browser
     */
    saveHistory() {
        let saveData = JSON.stringify(this.savedHistory);

        return localStorage.setItem('saveData', saveData);
    }

    /**
     * Render history
     */
    renderHistory() {
        this.renderer.render(this.historyView, this.savedHistory);
    }
}