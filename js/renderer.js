class Renderer
{
    /**
     * Renderer
     */
    constructor() {}

    /**
     * Render elements to dom
     * 
     * @param {domElement} container 
     * @param {array} elements 
     */
    render(container, elements) {
        let list = this.createList(elements);

        if (container.firstChild)
            container.removeChild(container.firstChild);

        container.appendChild(list);
    }

    /**
     * Create a dom element
     * 
     * @param {object} meta 
     */
    createElement(meta) {
        if (meta.type == null)
            return false;

        let element = document.createElement(meta.type);

        if (meta.url) element.href = meta.url;
        if (meta.style) element.className = meta.style;

        // Set a name for the element
        // Split '//' from http:// to get just domain text
        if (meta.url.indexOf('//') > 0) {
            if (meta.url) element.innerText = meta.url.split('/')[2];
        } else {
            if (meta.url) element.innerText = meta.url;
        }     

        return element;
    }

    /**
     * Create a dom list from elements
     * 
     * @param {array} elements 
     */
    createList(elements, wrapInLi = true) {
        let tempList = document.createElement("ul");

        tempList.className = "previousSearchList";

        for (let i = 0; i < elements.length; i++) {
            let tempChild = this.createElement(elements[i]);

            if (!tempChild) {
                continue;                
            }

            let tmpContainer = document.createElement("li");

            tmpContainer.appendChild(tempChild);

            tempList.appendChild(tmpContainer);
        }

        return tempList;
    }
    
}