<?php
// Определение пути к директории с уроками и скриптами
$lessonsDir = "";
$scriptsDir = "js/";

// Получение списка файлов в директории с уроками
$lessonFiles = glob($lessonsDir. "lesson*.html");
// Получение списка файлов в директории с скриптами
$scriptFiles = glob($scriptsDir. "translations*.js");

// Нахождение максимального номера урока
$maxLessonNum = 0;
foreach($lessonFiles as $lessonFile) {
    $num = intval(preg_replace('/lesson(\d+)\.html/', '$1', basename($lessonFile)));
    $maxLessonNum = max($maxLessonNum, $num);
}

// Нахождение максимального номера скрипта
$maxScriptNum = 0;
foreach($scriptFiles as $scriptFile) {
    $num = intval(preg_replace('/translations(\d+)\.js/', '$1', basename($scriptFile)));
    $maxScriptNum = max($maxScriptNum, $num);
}

// Создание нового урока и скрипта с номером на 1 больше максимального
$newLessonNum = $maxLessonNum + 1;
$newScriptNum = $maxScriptNum + 1;
$newLessonFilename = $lessonsDir. "lesson".$newLessonNum. ".html";
$newScriptFilename = $scriptsDir. "translations".$newScriptNum. ".js";

// Текст для нового урока и скрипта
$text1 = file_get_contents('example1.txt');
$text2 = file_get_contents('example2.txt');

// Создание нового урока и скрипта
file_put_contents($newLessonFilename, $text1);
file_put_contents($newScriptFilename, $text2);

// Добавление HTML-кода в index.html
$indexFile = 'index.html';
$indexContent = file_get_contents($indexFile);
$newCardHtml = '
<div id="card_link_'.$newLessonNum.'_lesson" class="card text-center mb-3" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">новый урок</h5>
        <p class="card-text">Здесь небольшое описание</p>
        <a href="#" class="btn btn-success">Перейти!</a>
    </div>
</div>';

// Вставка HTML-кода в нужное место в index.html
$pos = strpos($indexContent, '<div class="row row-cols-1 row-cols-md-3 g-4">') + strlen('<div class="row row-cols-1 row-cols-md-3 g-4">');
$newIndexContent = substr_replace($indexContent, $newCardHtml, $pos, 0);
file_put_contents($indexFile, $newIndexContent);

// Обновление содержимого файла translations.js
$translationsFile = $scriptsDir. "translations.js";
$translationsContent = file_get_contents($translationsFile);

$newTranslationsJs = '
"card_link_'.$newLessonNum.'_lesson":{
    "ru": \'<div class="card-body"><h5 class="card-title">новый урок рус</h5><p class="card-text">Здесь небольшое описание</p><a href="lesson'.$newLessonNum.'.html?lang=ru&" class="btn btn-success">Перейти!</a></div>\',
    "en": \'<div class="card-body"><h5 class="card-title">новый урок англ</h5><p class="card-text">Here is a short description</p><a href="lesson'.$newLessonNum.'.html?lang=en&" class="btn btn-success">Get start!</a></div>\',
    "ch": \'<div class="card-body"><h5 class="card-title">на кит-м</h5><p class="card-text">這是一個簡短的描述</p><a href="lesson'.$newLessonNum.'.html?lang=ch&" class="btn btn-success">去！</a></div>\',
    "ar": \'<div class="card-body"><h5 class="card-title">на араб</h5><p class="card-text">وهنا وصف قصير</p><a href="lesson'.$newLessonNum.'.html?lang=ar&" class="btn btn-success">يذهب!</a></div>\',
},
';

// Вставка нового блока в translations.js перед "card_main_page__h1_lessons":{}
$pos = strpos($translationsContent, '"card_main_page__h1_lessons":{');
$newTranslationsContent = substr_replace($translationsContent, $newTranslationsJs, $pos, 0);
file_put_contents($translationsFile, $newTranslationsContent);

// Вставка нового блока перед "greeting_text":{}
$newBlockJs = '
"to_lesson_'.$newLessonNum.'":{ // ссылка на урок
     "ru": \'<button type="button" class="btn btn-success"> <a class="white_link" href="lesson'.$newLessonNum.'.html?lang=ru&">К '.$newLessonNum.' уроку!</a></button>\',
     "en": \'<button type="button" class="btn btn-success"> <a class="white_link" href="lesson'.$newLessonNum.'.html?lang=en&">To the '.$newLessonNum.' lesson!</a></button>\',
     "ch": \'<button type="button" class="btn btn-success"> <a class="white_link" href="lesson'.$newLessonNum.'.html?lang=ch&">繼續第 '.$newLessonNum.' 課！</a></button>\',
     "ar": \'<button type="button" class="btn btn-success"> <a class="white_link" href="lesson'.$newLessonNum.'.html?lang=ar&">إلى الدرس ال'.$newLessonNum.'!</a></button>\',
 },
';

$pos = strpos($translationsContent, '"greeting_text":{');
$newTranslationsContent = substr_replace($newTranslationsContent, $newBlockJs, $pos, 0);
file_put_contents($translationsFile, $newTranslationsContent);

echo "Новый урок создан: ".$newLessonFilename. "<br>";
echo "Новый скрипт создан: ".$newScriptFilename. "<br>";
?>
