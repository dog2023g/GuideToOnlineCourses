function main(){
    flashingInscription();
    
}
async function flashingInscription(){
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
main();
