document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchResultsDropdown = document.getElementById("searchResultsDropdown");

    
    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.trim().toLowerCase();
        searchResultsDropdown.innerHTML = ""; // Очищаем предыдущие результаты

        // Проход по содержимому файлов translations
        for (let i = 1; i <= 7; i++) {
            let prev = '';
            fetch(`js/translations${i}.js`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text();
                })
                .then(text => {
                    const titleMatch = text.match(/"h1_0":\s*\{\s*"ru":\s*'(.*?)'/);
                    const lessonTitle = titleMatch ? titleMatch[1] : `lesson${i}`;
                    const lines = text.split('\n');
                    let linkCreated = false; 
                    lines.forEach(line => {
                        if (line.toLowerCase().includes(searchTerm) && !linkCreated) {
                            const regex = /\?lang=(\w+)&#(\w+)/g;
                            const match = regex.exec(line);
                            let lang = '';
                            let anchorId = '';
                            if (match) {
                                    lang = match[1];
                                    anchorId = match[2];
                            }
                            const regex3 = /\id="(\w+)"/g;
                            const match3 = regex3.exec(line);
                            let newid = '';
                            if (match3) {
                                newid = match2[1];
                            }
                            let href = '';
                            //const href = lang && anchorId ? `lesson${i}.html?lang=${lang}&#${anchorId}` : `lesson${i}.html?lang=ru&#${prev}`;
                            if (lang && anchorId) {
                                href = `lesson${i}.html?lang=${lang}&#${anchorId}`;
                            }
                            else if (newid) {
                                href = `lesson${i}.html?lang=ru&#${newid}`;
                            }
                            else {
                                href = `lesson${i}.html?lang=ru&#${prev}`;
                            }
                            /*
                            //prev = '';
                            const link = document.createElement("a");
                            link.href = href;
                            //link.textContent = `Найдено в lesson${i}.html`;
                            let foundLine = line.match(new RegExp(`.{0,30}${searchTerm}.{0,30}`, 'i'))[0];
                            link.textContent = `Найдено в ${lessonTitle}\n${foundLine}`;

                            const listItem = document.createElement("div");
                            listItem.classList.add("search-result-item"); // Добавляем класс для стилизации
                            listItem.appendChild(link);
                            searchResultsDropdown.appendChild(listItem);
                            linkCreated = true; // Устанавливаем флаг, что ссылка создана
                            */
                            const lineWithoutTags = line.replace(/<\/?[^>]+(>|$)/g, "");

                            // Найти строку и выделить искомую фразу
                            let foundLine = lineWithoutTags.match(new RegExp(`.{0,30}${searchTerm}.{0,30}`, 'i'))[0];
                            const highlightedLine = foundLine.replace(new RegExp(searchTerm, 'gi'), match => `<mark>${match}</mark>`);

                            const link = document.createElement("a");
                            link.href = href;
                            link.style.color = "black"; // Ссылка будет черного цвета

                            link.innerHTML = `<span style="font-weight: bold;">Найдено в ${lessonTitle}</span><br><span>${highlightedLine}</span>`;

                            const listItem = document.createElement("div");
                            listItem.classList.add("search-result-item"); // Добавляем класс для стилизации
                            listItem.appendChild(link);
                            searchResultsDropdown.appendChild(listItem);
                            linkCreated = true;
                        }
                        if (!line.toLowerCase().includes(searchTerm)) {
                            const regex2 = /\"(\w+)":{/g;
                            const match2 = regex2.exec(line);
                            if (match2) {
                                prev = match2[1];
                            }
                            else {
                                const regex4 = /\id="(\w+)"/g; 
                                const match4 = regex4.exec(line);
                                if (match4) {
                                    prev = match4[1];
                                }

                            }
                        }
                    });
                })
                .catch(error => {
                    console.error('Ошибка', error);
                });
        }

        searchResultsDropdown.style.display = "block";

        
        searchResultsDropdown.style.width = `${searchInput.offsetWidth}px`;
        
        searchResultsDropdown.style.right = `300 px`;
        searchResultsDropdown.style.top = `${searchInput.offsetTop + searchInput.offsetHeight}px`;
    });
    searchInput.addEventListener("focus", function () {
        if (searchInput.value.trim() !== "") {
            searchResultsDropdown.style.display = "block";
        }
    });
    
    document.addEventListener("click", function(event) {
        const isClickInside = searchResultsDropdown.contains(event.target);
        const isClickOnInput = event.target === searchInput;
        if (!isClickInside && !isClickOnInput) {
            searchResultsDropdown.style.display = "none";
        }
    });
});
