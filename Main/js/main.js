function main(){
    pageGoToId();
    FlashingInscription();
    Translate();
}
function pageGoToId(){
    document.addEventListener('DOMContentLoaded', function() {
        const hash = window.location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
}
async function FlashingInscription(){
    var button_translate = document.getElementById("button_translate");
    await new Promise(r => setTimeout(r, 1500));
    button_translate.innerHTML="Translate";
    await new Promise(r => setTimeout(r, 3000));
    button_translate.innerHTML="ترجم";
    await new Promise(r => setTimeout(r, 3000));
    button_translate.innerHTML="翻譯";
    await new Promise(r => setTimeout(r, 3000));
    button_translate.innerHTML="Перевод";
}

function getQueryParameterValue(key) {
    const queryString = window.location.href.split('?')[1];
    if (!queryString) {
        return null;
    }

    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(key);
}
function updateQueryParameter(key, value) {
    const url = window.location.href;
    const urlObj = new URL(url);
    const params = new URLSearchParams(urlObj.search);

    if (!params.has(key)) {
        params.append(key, value);
    } else {
        params.set(key, value);
    }

    urlObj.search = params.toString()+"&";

    window.history.replaceState({}, '',urlObj.toString());
    pageGoToId();
}
function Translate(){
    let inf_language = getQueryParameterValue("lang");
    if (!(inf_language=="en" || inf_language=="ch" || inf_language=="ar")){
        inf_language='ru';
        updateQueryParameter('lang', 'ru')
    }
    for (let element in language){
        let path = document.getElementById(element);
        if (path){
            if (language[element][inf_language]==undefined){
                console.log("Ошибка: перевод на '"+inf_language+"' для элемента '"+element+"' не существует");
                continue;
            }
            path.innerHTML = language[element][inf_language];
        }
        else{
            console.log("Ошибка: элемент '"+element+"', объявленный в массиве с переводами, не существует на странице");
            continue
        }
    }
    pageGoToId();
}
main();
