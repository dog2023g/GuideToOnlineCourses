function main(){
    pageGoToId();
    FlashingInscription();
    Translate();
}
function InitializeTests(lang){
    let path_tests = document.getElementById('lesson_tests');
    var tests = tests_any_lang[lang];
    path_tests.innerHTML='';
    for (i=0; i<tests.length; i++){
        var many_answers='';
        for (j=0; j<tests[i]["answers"].length; j++){
            many_answers+='<li>'+
            '<label>'+
              '<input type="radio" value="'+j+'" class="answer" name="answer'+i+'">'+
              '<span>'+tests[i]["answers"][j]+'</span>'+
            '</label>'+
          '</li>';
        }
        path_tests.innerHTML+='<div class="quiz_lesson" id="quiz_'+i+'">'+
        '<div class="quiz-header" id="header">'+
            '<p>'+tests[i]["question"]+'</p>'+
        '</div>'+
        '<ul class="quiz-list" id="list_'+i+'">'+ many_answers +'</ul>'+
        '<div class="bu"><button class="btn btn-success" onclick="checkAnswer('+i+', `'+lang+'`);" id="submit_'+i+'" >Ответить</button></div>'+
      '</div>';
    }
}
function checkAnswer(index_quiz, lang){
    var tests = tests_any_lang[lang];
    var path_quiz = document.getElementById('quiz_'+index_quiz);
    var answers=document.getElementById('list_'+index_quiz);
    var answer=answers.querySelector('input[type="radio"]:checked');
    var correct_answer=tests[index_quiz]['correct'];
    if (!answer){
        return;
    }
    var user_anwer=parseInt(answer.value)+1;
    var word_true = {ru:"Правильно!", en:"Correct!",ch:"正確的", ar:"يمين"};
    var word_false = {ru:"Неверно!", en:"Wrong!", ch:"錯誤的", ar:"خطأ"};
    if (correct_answer==user_anwer){
        var res ='<p style="color:rgb(86, 237, 86); font-weight: 500; padding-bottom: 16px;">'+word_true[lang]+ ' &#127881;</p>'
    }
    else{
        var res ='<p style="color:rgb(237, 86, 86); font-weight: 500; padding-bottom: 16px;">'+word_false[lang]+ ' &#128546;</p>'
    }
    var many_answers2=''
    for (i=0; i<tests[index_quiz]['answers'].length; i++)
    {
        if (i+1==correct_answer){
            many_answers2+='<li class="answered_true">'+tests[index_quiz]['answers'][i]+'</li>';
        }
        else{
            many_answers2+='<li class="answered_false">'+tests[index_quiz]['answers'][i]+'</li>';
        }
    }
    path_quiz.innerHTML='<div class="quiz-header" id="header">'+
    '<p>'+tests[index_quiz]["question"]+'</p>'+
    '</div>'+
    '<ul style="padding-left: 45px;" class="quiz-list" id="list_'+index_quiz+'">'+ many_answers2 +'</ul>'+ res+
  '</div>';
}
function pageGoToId() {
    document.addEventListener('DOMContentLoaded', function() {
        const hash = window.location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                const offset = -100; // Смещение на 100px вверх
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset + offset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
}
async function reloadPageForContents() {
    await new Promise(r => setTimeout(r, 1));
    const hash = window.location.hash;
    const queryString = window.location.search;
    const newUrl = window.location.pathname + queryString + hash;
    window.location.href = newUrl;
    location.reload();
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
        else if (element=='to_lesson_1'|| element=='to_lesson_2'|| element=='to_lesson_3'|| element=='to_lesson_4'|| element=='to_lesson_5'|| element=='to_lesson_6'||element=='to_lesson_7'){
            continue;
        }
        else{
            console.log("Ошибка: элемент '"+element+"', объявленный в массиве с переводами, не существует на странице");
            continue;
        }
    }
    InitializeTests(inf_language);
    pageGoToId();
}
main();
