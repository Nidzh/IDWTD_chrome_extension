function init() {
    let excludedWord = 'арахис';
    let currentOrigin = location.origin;
    let map = {
        'https://vkusvill.ru': 'vkusvill',
        'https://www.vprok.ru': 'vprok'
    }

    let currentDataProperty = map[currentOrigin];

    let currentData = window.IDWTD[currentDataProperty];

    function mark(elementToMark) {
        elementToMark.insertAdjacentHTML('afterBegin', '<img src="http://s1.iconbird.com/ico/2014/1/567/w512h5121389807754burnicon.png" class="underpic" style="position: absolute; width: 16%; z-index: 1; right: 7%; top: 60%;" />');
    }

    function parse(currentData) {
        currentData.labels.forEach((label, i) => {
            let labelElements = document.querySelectorAll(label);
            let markElements = document.querySelectorAll(currentData.mark[i]);
            labelElements.forEach((label, z) => {
                let text = label.innerText;
                if (text) text = text.trim();

                let composition = currentData.data[text];
                if (!composition) {
                    console.warn('[IDWTD] не найден состав продукта - ' + text);
                    return;
                }

                composition = composition.toLowerCase();
                let catchedExcludedWord = composition.includes(excludedWord);
                if (catchedExcludedWord) {
                    mark(markElements[z]);
                }
            })
        })
    }

    parse(currentData)
}



function inject() {
    let script = document.createElement('script');
    script.text = `(${init.toString()})();`;
    document.documentElement.appendChild(script);
}

inject();
