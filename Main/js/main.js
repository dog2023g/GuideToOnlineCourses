function main(){
    pageGoToId();
    FlashingInscription();
    Translate();
}
function InitializeTests(){
    var path = document.getElementById("result_of_tests");
    if (path==null)
        return;
    path.innerHTML='';
    let lang= getQueryParameterValue("lang");
    let button_answer={ru:"Ответить", en:"Answer", ch:"回答", ar:"إجابة",}
    let path_tests = document.getElementById('lesson_tests');
    if (path_tests==null){
        return 0;
    }
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
        '<div class="bu"><button class="btn btn-success" onclick=" checkAnswer('+i+', `'+lang+'`);" id="submit_'+i+'" >'+button_answer[lang]+'</button></div>'+
      '</div>';
    }
}
function checkAnswer(index_quiz, lang){
    var maxTests=tests_any_lang["ru"].length;
    var tests = tests_any_lang[lang];
    var path = document.getElementById("result_of_tests");
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
    var word_result1={ru:"Ваш результат: ", en:"Your score: ",ch:"您的得分：", ar:" درجاتك:"};
    var word_result2={ru:" из ", en:" out of ",ch:" 分滿分 ", ar:" من"};
    var buttonUpdateTests={ru:"Пройти тест еще раз", en:"Take the test again",ch:"再次參加測試", ar:"قم بإجراء الاختبار مرة أخرى"};
    doneTests++;
    if (correct_answer==user_anwer){
        correctTests++;
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
  if (doneTests>0){
    path.innerHTML=word_result1[lang] + correctTests + word_result2[lang] + maxTests;
    path.innerHTML+= '<div  class="button" style="padding-top:10px"><button onclick="correctTests=0; doneTests=0;InitializeTests();" class="btn btn-success" id="updateTests">'+ buttonUpdateTests[lang]+'</button></div>';
  }
    
}
function pageGoToId() {
    document.addEventListener('DOMContentLoaded', function() {
        const hash = window.location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                const offset = -63; // Смещение на 100px вверх
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
    if (window.location.pathname.match(/lesson.+.html/))
        {
            const style = document.createElement('style');
  style.textContent = "#button_translate {animation-name: none ;}";
    document.head.appendChild(style);
    let inf_language = getQueryParameterValue("lang");
    var button_translate = document.getElementById("button_translate");
    if (inf_language=="ru")
    {
        button_translate.innerHTML="Перевод";
    }
    if (inf_language=="en")
        {
            button_translate.innerHTML="Translate";
        }
        if (inf_language=="ch")
            {
                button_translate.innerHTML="翻譯";
            }
        if (inf_language=="ar")
            {
                button_translate.innerHTML="ترجم";
            }
  return;
        }
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
    InitializeTests();
    pageGoToId();
}
main();
var doneTests=0;

var correctTests=0;
