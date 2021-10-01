let excludedWord = 'арахис';
let currentOrigin = location.origin;
let map = {
    'https://vkusvill.ru': 'vkusvill',
    'https://www.vprok.ru': 'vprok'
}

let currentDataProperty = map[currentOrigin];

let currentData = IDWTD[currentDataProperty];

function mark(elementToMark) {
    elementToMark.insertAdjacentHTML('afterBegin', '<img src="https://cdn-icons-png.flaticon.com/512/1090/1090662.png" class="underpic" style="position: absolute; width: 16%; z-index: 1; right: 7%; top: 60%;" />');
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
