
function addSearch(){
    document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById("searchForm");
        const searchInput = document.getElementById("searchInput");
        const searchResultsDropdown = document.getElementById("searchResultsDropdown");
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            const searchTerm = searchInput.value.trim().toLowerCase();
            searchResultsDropdown.innerHTML = ""; // Очистить предыдущие результаты
    
            // Проход по содержимому файлов translations
            for (let i = 1; i <= 7; i++) { 
                fetch(`js/translations${i}.js`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.text();
                    })
                    .then(text => {
                        const lines = text.split('\n');
                        let linkCreated = false; // Переменная для отслеживания создания ссылки
                        lines.forEach(line => {
                            //let linkCreated = false;
                            if (line.toLowerCase().includes(searchTerm) && !linkCreated) {
                                const regex = /\?lang=(\w+)&#(\w+)/g;
                                const match = regex.exec(line);
                                let lang = '';
                                let anchorId = '';
                                if (match) {
                                    lang = match[1];
                                    anchorId = match[2];
                                }
                                const href = lang && anchorId ? `lesson${i}.html?lang=${lang}&#${anchorId}` : `lesson${i}.html`;
                                const link = document.createElement("a");
                                link.href = href;
                                link.textContent = `Найдено в lesson${i}.html`;
                                const listItem = document.createElement("li");
                                listItem.appendChild(link);
                                searchResultsDropdown.appendChild(listItem);
                                linkCreated = true; // Устанавливаем флаг, что ссылка создана
                            }
                        });
                    })
                    .catch(error => {
                        console.error('ашибка', error);
                    });
            }
        });
    });
}
function updateSearch(){
    const form = document.getElementById("searchForm");
        const searchInput = document.getElementById("searchInput");
        const searchResultsDropdown = document.getElementById("searchResultsDropdown");
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            const searchTerm = searchInput.value.trim().toLowerCase();
            searchResultsDropdown.innerHTML = ""; // Очистить предыдущие результаты
    
            // Проход по содержимому файлов translations
            for (let i = 1; i <= 7; i++) { 
                fetch(`js/translations${i}.js`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.text();
                    })
                    .then(text => {
                        const lines = text.split('\n');
                        let linkCreated = false; // Переменная для отслеживания создания ссылки
                        lines.forEach(line => {
                            //let linkCreated = false;
                            if (line.toLowerCase().includes(searchTerm) && !linkCreated) {
                                const regex = /\?lang=(\w+)&#(\w+)/g;
                                const match = regex.exec(line);
                                let lang = '';
                                let anchorId = '';
                                if (match) {
                                    lang = match[1];
                                    anchorId = match[2];
                                }
                                const href = lang && anchorId ? `lesson${i}.html?lang=${lang}&#${anchorId}` : `lesson${i}.html`;
                                const link = document.createElement("a");
                                link.href = href;
                                link.textContent = `Найдено в lesson${i}.html`;
                                const listItem = document.createElement("li");
                                listItem.appendChild(link);
                                searchResultsDropdown.appendChild(listItem);
                                linkCreated = true; // Устанавливаем флаг, что ссылка создана
                            }
                        });
                    })
                    .catch(error => {
                        console.error('ашибка', error);
                    });
            }
        });
}
