function main(){
    FlashingInscription();
    Translate();
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
function Translate(){
    let inf_language = window.location.hash;
    inf_language = inf_language.substr(1);
    if (!(inf_language=="en" || inf_language=="ch" || inf_language=="ar")){
        inf_language="ru";
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
}
main();
