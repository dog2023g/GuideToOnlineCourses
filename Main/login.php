<?php
session_start();
$login = 'admin'; 
$pass = '123456'; 

if(isset($_POST['login']) && isset($_POST['password'])) {
    if($_POST['login'] === $login && $_POST['password'] === $pass) {
        $_SESSION['authorized'] = true;
    } else {
        echo "Неправильный логин или пароль";
    }
}


if(isset($_SESSION['authorized']) && $_SESSION['authorized'] === true) {
    if(isset($_POST['pagename'])){
        $_SESSION['pagename']=$_POST['pagename'];
    };
    if(isset($_SESSION['pagename'])){
        $pagename=$_SESSION['pagename'];
    }else{
        $pagename='index.html';
    };


    $template=file_get_contents($pagename);


    echo('
    <html>
    <head>
    <meta charset="UTF-8">
    <style>
    body, html{
        padding: 0px; margin: 0px;
        background: #f2f3f5;
        text-align:center;
        font-family:sans-serif;
    }
    textarea{
        padding:20px;
        width:600px;
        height:300px;
        font-size:16px;
        box-shadow:0 0 0 1px #005bff; inset 0 0 0 2px #005bff;
        border:none;
    }
    iframe{
        width: 120%;
        height: 80vh;
        border: 10px solid #ccc; /* Добавить рамку */
        border-radius: 15px; /* Закруглить углы */
        overflow-y: scroll; /* Добавить вертикальную прокрутку */
        overflow-x: scroll; /* Скрыть горизонтальную прокрутку */
    }
    a{
        display:inline;
        -webkit-transition: all 555ms ease;
        transition: all 555ms ease;
        color: #005bff;
        text-decoration: none;
    }
    .kartinka{
        display:inline-block;
        text-decoration:none;
        padding:20px; padding-bottom:5px;
        text-align:center;
        cursor:pointer;
    }
    .kartinka:hover{
        background:#2196f33d;
        border-radius: 3px;
    }
    .kartinka img{
        height:100px;
        margin-bottom:10px;
    }
    .bigkartinka{
        height:300px;
        padding:50px;
    }
    #menu{
        background:#fffff0;
        padding-top:15px;
        padding-bottom:10px;
        padding-left:10px;
        margin-bottom:30px;
        height:50px;
        line-height:50px;
        text-align:center;
        font-size:20px;
        background-color:#2196f33d;
    }
    #myform{
        height:40px;line-height:400px;
        display:inline-block;
        vertical-align:top;
        padding-left:20px; padding-right:20px;
        margin-right:3px;
        text-align:center;
        font-size:90%;
    }
    
    #menu a{
        padding:7px 20px 9px 20px;
        background-color:#005bff;
        box-shadow:0 20px 18px -10px rgba(0, 91, 255, 0.43);
        box-shadow:0 20px 18px -10px rgba(0, 91, 255, 0.43);
        color:white;
        font-size:18px;
    }
    .mytext .cssjs{
        display:block;
        border-radius:5px;
        padding:10px; padding-left:20px; padding-right:20px;
        margin:20px;
        background:#fffff9;
        color:black;
    }
    .mytext:hover, .cssjs:hover{
        background: #2196f33d;
        cursor:pointer;
    }
    #help{
        max-width:850px; margin:0 auto; text-align:left; font-size:120%;
    }
    </style>
    </head>
    <body>
    <div id="menu">
    <form action="login.php" id ="myform" method="POST">
    <select name="pagename">
    ');

    $filelist1 = glob("*.html");
    $ddd=0;
    $ssss="";
    for($j=0; $j<count($filelist1);$j++){
        if($filelist1[$j]==$_SESSION['pagename']){
            $ssss.=('<option selected>'.$filelist1[$j].'</option>');
            $ddd=1;
        }else{
            $ssss.=('<option>'.$filelist1[$j].'</option>');
        };
    };
    if($ddd==0){
        $ssss="";
        for($j=0;$j<count($filelist1);$j++){
            if($filelist1[$j]=='index.html'){
                $ssss.=('<option>'.$filelist1[$j].'</option>');
                $ddd=1;
            }else{
                $ssss.=('<option>'.$filelist1[$j].'</option>');
            };
        };
    };
    echo($ssss);
    echo('
    <input type="submit" value="Редактировать" title="Редактировать">
    </select> 
    </form>
    <a href="login.php?mode=0">текст</a>
    <a href="login.php?mode=7">картинки/видео</a>
    <a href="login.php?mode=5">.html</a>
    <a href="login.php?mode=8">.css/.js</a>
    <a href="login.php">предпросмотр</a>
    <a href="newlesson.php" class="add-lesson">добавить урок</a>
    <a href= "/konstruktor/'.$pagename.'" class="constructor">конструктор</a>
    <a href="index.html" target="_blank">на сайт</a>
    </div>
    ');

    


    if($_GET['mode']=='7'){

        $imgreg = "/[\"|\(']((.*\\/\\/|)([\\/a-z0-9_%]+\\.(jpg|png|gif)))[\"|\)']/";
        preg_match_all($imgreg, $template,$imgmas);
        for($j=0;$j<count($imgmas[1]);$j++){
            $imgname=trim($imgmas[1][$j]);
            echo('<div class = "kartinka"><a href="login.php?mode=1&img='.$imgname.'"><img src="'.$imgname.'?'.rand(1,32000).'"></a><br>'.$imgname.'<br>');
            if(file_exists($imgname)){
                $size = getimagesize($imgname); echo "Размер картинки: $size[0]*$size[1]"."<p>";   
            } else{echo("Картинка не загружена");};
            echo("</div>"); 
        };
       
        $mycss = array();
        $cssreg = "/[\"']((.*\\/\\/|)([\\/a-z0-9_%]+\\.(css)))[\"']/";
        preg_match_all($cssreg , $template , $cssmas );
        for($j=0; $j<count($cssmas[1]);$j++){
            array_push($mycss, trim($cssmas[1][$j]));
        };
        echo('<hr>');

        for($i=0; $i<count($mycss);$i++){
            $template=file_get_contents($mycss[$i]);
            $imgreg = "/[.\(]((.*\\/\\/|)([\\/a-z0-9_%]+\\.(jpg|png|gif)))[\)]/";
            preg_match_all($imgreg, $template, $imgmas);
            for($j=0;$j<count($imgmas[1]);$j++){
                $imgname=trim($imgmas[1][$j]);
                echo('<div class="kartinka"><a href ="login.php?mode=1&img='.$imgname.'"><img src="'.$imgname.'?'.rand(1,32000).'"></a><br>'.$imgname.'<br>');
                if(file_exists($imgname)){
                    $size=getimagesize($imgname); echo "Размер картинки: $size[0]*$size[1]"."<p>";
                }else{
                    if(file_exists(substr($imgname,1))){
                        $size=getimagesize(substr($imgname,1)); echo "Размер картинки: $size[0]*$size[1]"."<p>";
                    }else{
                        echo("Картинка загружена");
                    };
                };
                echo("</div>");
            };
        };
        echo('<div>');
        echo('<form enctype="multipart/form-data" action="login.php?mode=11" method="POST">');
        echo('<input type="file" name="image" required>');
        echo('<input type="submit" value="Загрузить картинку">');
        echo('</form>');
        echo('</div>');

        echo('<div>');
        echo('<form method="POST" action="login.php?mode=12">');
        echo('<input type="text" name="youtube_link" placeholder="Введите ссылку на видео на YouTube" required>');
        echo('<input type="submit" value="Добавить видео">');
        echo('</form>');
        echo('</div>');

    };
      
    

    if($_GET['mode']=='1'){
        $imgname=$_GET['img'];
        if($imgname[0]=='/'){
            $imgname=substr($imgname,1);
        };
        echo('<center><img src="'.$imgname.'" class="bigkartinka"><br>'.$imgname.'<p>');
        if(file_exists($imgname)){
            $size=getimagesize($imgname); echo "Внимание!!! Размер картинки должен быть: $size[0]*$size[1]"."<p>";
        }else{
            if(file_exists(substr($imgname,1))){
                $size=getimagesize(substr($imgname,1)); echo "Размер картинки: $size[0]*$size[1]"."<p>";
            }else{
                echo("Картинка загружкна");
            };
        };
        echo('<form enctype="multipart/form-data" action="login.php?mode=2&img='.$imgname.'" method="POST">Загрузить картинку с пк: <p><input name="userfile" type="file" required><p><input
        type="submit" style="width:300px;
        padding-top:19px;
        padding-bottom:22px;
        background-color:#005bff;
        box-shadow:0 20px 18px -10px rgba(0,91,255,0.43);
        font-size:20px;
        color:white;
        margin-top:20px;" value="Начать загрузку" /></form>');
    };
        


    if($_GET['mode']=='2'){
        $imgname=$_GET['img'];
        if(move_uploaded_file($_FILES['userfile']['tmp_name'], $imgname)){
            echo "<br><br><center>Файл был успешно загружен.<p><a href='login.php?mode=7'>Вернуться к списку картинок</a><p>Обновите страницу)";
        };
    };
    

    if ($_GET['mode'] == '11') {
        // Путь для сохранения загруженных файлов
        $uploadDirectory = 'img/';

        // Обработка загруженной картинки
        $targetFile = $uploadDirectory . basename($_FILES['image']['name']);
        if (move_uploaded_file($_FILES['image']['tmp_name'], $targetFile)) {
            // Получаем относительный путь к загруженной картинке
            $relativePath = 'img/' . basename($_FILES['image']['name']);

            // Загружаем содержимое файла страницы
            $pageContent = file_get_contents($pagename);

            // Находим позицию, перед которой нужно вставить картинку
            $position = strpos($pageContent, '<div class="img');
            if ($position !== false) {
                // Генерируем HTML-код для вставки картинки на страницу
                $imageHtml = '<div><img src="'.$relativePath.'" alt=""></div>';

                // Вставляем HTML-код с картинкой перед указанным элементом
                $updatedPageContent = substr_replace($pageContent, $imageHtml, $position, 0);

                // Сохраняем обновленное содержимое страницы
                file_put_contents($pagename, $updatedPageContent);

                // Выводим сообщение об успешной загрузке
                echo 'Картинка была успешно загружена и добавлена на страницу.';
            } else {
                echo 'Не удалось найти место для вставки картинки.';
            }
        } else {
            echo 'Ошибка при загрузке картинки.';
        }
    };

    if ($_GET['mode'] == '12') {
        if (!empty($_POST['youtube_link'])) {
            $youtube_link = $_POST['youtube_link'];

            // Формируем HTML-код для вставки видео на страницу
            $video_code = '<br><div class="embed-responsive embed-responsive-16by9" style="display:flex; justify-content: center;">';
            $video_code .= '<iframe width="560" height="315" src="' . $youtube_link . '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
            $video_code .= '</div>';

            // Получаем содержимое файла страницы
            $page_content = file_get_contents($pagename);

            // Находим позицию, перед которой нужно вставить видео
            $position = strpos($page_content, '<div class="img');
            if ($position !== false) {
                // Вставляем HTML-код с видео перед указанным элементом
                $updated_page_content = substr_replace($page_content, $video_code, $position, 0);

                // Сохраняем обновленное содержимое страницы
                file_put_contents($pagename, $updated_page_content);

                // Выводим сообщение об успешном добавлении видео
                echo 'Видео было успешно добавлено на страницу.';
            } else {
                echo 'Не удалось найти место для вставки видео.';
            }
        } else {
            echo 'Не удалось получить ссылку на видео.';
        }
    };


    function getTranslationsFileName($pagename) {
    // Извлекаем номер урока из имени файла
        preg_match('/lesson(\d+)\.html/', $pagename, $matches);
        if (!empty($matches[1])) {
            $lessonNumber = intval($matches[1]);
            return "js/translations{$lessonNumber}.js";
        } else {
            // Если не удалось извлечь номер, возвращаем общий файл translations.js
            return "js/translations.js";
        }
    }

    
    $translationsFile = getTranslationsFileName($pagename);

    
    $translationsContent = file_get_contents($translationsFile);



    if($_GET['mode']=='0'){

        
        $tempTranslationsContent = '';
        
        preg_match_all('/"ru": \'(.*?)\'| "en": \'(.*?)\'| "ch": \'(.*?)\'| "ar": \'(.*?)\'/', $translationsContent, $matches);
        
        foreach ($matches[0] as $fragment) {
            if (!empty($fragment)) {
                $tempTranslationsContent .= $fragment;
            }
        }
        
        $translationsContent = $tempTranslationsContent;

        $ff=array(); $content=preg_replace('/<[^>]+>/', '^', $translationsContent);$teksta=explode('^',$content);
        for($j=0;$j<count($teksta);$j++){if(strlen(trim($teksta[$j]))>1) $ff[]=(trim($teksta[$j]));};
        /*
        for($j=0;$j<count($ff);$j++){
            echo('<a href="login.php?mode=3&j='.$j.'" class="mytext"><pre>'.$ff[$j].'</pre></a>');
        };
        */
        $columns = array('ru' => array(), 'en' => array(), 'ch' => array(), 'ar' => array());

        foreach ($ff as $text) {
            
            // Убираем тексты, которые содержат только "ru:", "en:", "ch:", "ar:" с пробелами и кавычками
            if (strpos($text, '"ru":') !== false && !preg_match('/[а-яА-ЯёЁ]/u', substr($text, 5))) {
                continue;
            }
            if (strpos($text, '"en":') !== false && !preg_match('/[a-zA-Z]/', substr($text, 5))) {
                 continue;
            }
            if (strpos($text, '"ch":') !== false && !preg_match('/[\x{4e00}-\x{9fff}]/u', substr($text, 5))) {
                continue;
            }
            if (strpos($text, '"ar":') !== false && !preg_match('/[\x{0600}-\x{06FF}]/u', substr($text, 5))) {
                 continue;
            }

            if (stripos($text, '"ru":') !== false) {
                $columns['ru'][] = $text;
            } elseif (stripos($text, '"en":') !== false) {
                $columns['en'][] = $text;
            } elseif (stripos($text, '"ch":') !== false) {
                $columns['ch'][] = $text;
            } elseif (stripos($text, '"ar":') !== false) {
                $columns['ar'][] = $text;
            } elseif (preg_match('/[а-яА-ЯёЁ]/u', $text)) {
                $columns['ru'][] = $text;
            } elseif (preg_match('/[a-zA-Z]/', $text)) {
                $columns['en'][] = $text;
            } elseif (preg_match('/[\x{4e00}-\x{9fff}]/u', $text)) {
                $columns['ch'][] = $text;
            } elseif (preg_match('/[\x{0600}-\x{06FF}]/u', $text)) {
                $columns['ar'][] = $text;
            }
        }

        $maxRows = max(count($columns['ru']), count($columns['en']), count($columns['ch']), count($columns['ar']));

        echo '<table border="1" cellpadding="5" cellspacing="0" style="width: 100%; table-layout: fixed;">';
        echo '<tr><th style="width: 25%;">Русский</th><th style="width: 25%;">Английский</th><th style="width: 25%;">Китайский</th><th style="width: 25%;">Арабский</th></tr>';

        for ($i = 0; $i < $maxRows; $i++) {
            echo '<tr>';
            foreach (['ru', 'en', 'ch', 'ar'] as $lang) {
                echo '<td style="word-break: break-word; white-space: pre-wrap; overflow-wrap: break-word; max-width: 0;">';
                if (isset($columns[$lang][$i])) {
                    echo '<a href="login.php?mode=3&j=' . array_search($columns[$lang][$i], $ff) . '" class="mytext"><pre style="word-break: break-word; white-space: pre-wrap;">' . $columns[$lang][$i] . '</pre></a>';
                }
                echo '</td>';
            }
            echo '</tr>';
        }

        echo '</table>';

    };




    if($_GET['mode']=='3'){

        
        $tempTranslationsContent = '';
        
        preg_match_all('/"ru": \'(.*?)\'| "en": \'(.*?)\'| "ch": \'(.*?)\'| "ar": \'(.*?)\'/', $translationsContent, $matches);
        
        foreach ($matches[0] as $fragment) {
            if (!empty($fragment)) {
                $tempTranslationsContent .= $fragment;
            }
        }
        
        $translationsContent = $tempTranslationsContent;
        
        $ff=array(); $content=preg_replace('/<[^>]+>/','^',$translationsContent); $teksta=explode('^',$content);
        for($j=0;$j<count($teksta);$j++){ if(strlen(trim($teksta[$j]))>1) $ff[]=(trim($teksta[$j]));};
            $jj=$_GET['j'];
            $tektekst=$ff[$jj];
            $kol=1;
            for($j=0;$j<$jj;$j++){
                $kol=$kol+substr_count($ff[$j], $tektekst);
        };
        echo('<div style="margin: 0 auto; text-align: center;"><form method="POST" action="login.php?mode=4&j='.$jj.'"><br><br><h2>Редактирование текстовго фрагмнта</h2><br><br><textarea name="mytext">'.$tektekst.'</textarea><br><input style="width: 300px;
        padding-top:19px;
        padding-bottom:22px;
        background-color: #005bff;
        box-shadow:0 20px 18px -10px rgba(0,91,255, 0.43);
        font-size:20px;
        color:white;
        margin-top: 20px;" type="submit" value="Заменить текст" title="Заменить текст"></form></div>');
    };
    



    if($_GET['mode']=='4'){

        
        $tempTranslationsContent = '';
        
        preg_match_all('/"ru": \'(.*?)\'| "en": \'(.*?)\'| "ch": \'(.*?)\'| "ar": \'(.*?)\'/', $translationsContent, $matches);
        
        foreach ($matches[0] as $fragment) {
            if (!empty($fragment)) {
                $tempTranslationsContent .= $fragment;
            }
        }
        
        $translationsContent = $tempTranslationsContent;

        $ff=array(); $content=preg_replace('/<[^>]+>/', '^', $translationsContent); $teksta=explode('^',$content);
        for($j=0;$j<count($teksta);$j++){ if(strlen(trim($teksta[$j]))>1) $ff[]=(trim($teksta[$j]));};
        $jj =$_GET['j'];
        $tektekst = $ff[$jj];
        $kol=1;
        for($j=0;$j<$jj;$j++){
            $kol=$kol+substr_count($ff[$j], $tektekst);
        };
        $subject=file_get_contents($translationsFile);
        function str_replace_nth($search, $replace, $subject, $nth)
        {
            $found = preg_match_all('/'.preg_quote($search).'/', $subject, $matches, PREG_OFFSET_CAPTURE);
            if( false !== $found && $found>$nth){
                return substr_replace($subject, $replace, $matches[0][$nth][1], strlen($search));
            }
            return $subject;
        };
        $rez=str_replace_nth($tektekst, $_POST['mytext'], $subject, $kol-1);
        file_put_contents($translationsFile, $rez);
        echo "<br><br><center>Текст был успешно изменен.<p><a href = 'login.php?mode=0'>Вернуться к списку текстов</a><p>Обновите страницу";
    };
        
    


    if($_GET['mode']=='5'){
        $template=htmlspecialchars(file_get_contents($pagename));
        echo('<div style="margin: 0 auto; text-align:center;"><form method="POST" action="login.php?mode=6"><br><br><h2>Редактирование HTML кода(файл: '.$pagename.')</h2><br><br><textarea name ="mytext" style="width:90%; height: 500px;">'.$template.'</textarea><br><input style ="width:300px;
        padding-top: 19px;
        padding-bottom:22px;
        background-color: #005bff;
        box-shadow:0 20px 18px -10px rgba(0, 91, 255, 0.43);
        font-size: 20px;
        color: white;
        margin-top: 20px;" type="submit" value="Заменить текст" title="Заменить текст"></form></div>');
    };

        
    

    if($_GET['mode']=='6'){
        file_put_contents($pagename, $_POST['mytext']);
    };
    
    
    
    if($_GET['mode']=='8'){
        echo('<br><h2>CSS и JS файлы относящиеся к '.$pagename.'</h2><p><br>');
        $cssreg = "/[\"']((.*\\/\\/|)([\\/a-z0-9_%]+\\.(css)))[\"']/";
        preg_match_all($cssreg,$template,$cssmas);
        for($j=0;$j<count($cssmas[1]);$j++){
            $rrr=trim($cssmas[1][$j]);
            if(!(strstr($rrr, "http"))){
                echo('<a class="cssjs" href="login.php?mode=9&fl='.$rrr.'">'.$rrr.'</a><p>');
            };
        };
        $cssreg="/[\"']((.*\\/\\/|)([\\/a-z0-9_%]+\\.(js)))[\"']/";
        preg_match_all($cssreg, $template, $cssmas);
        for($j=0; $j<count($cssmas[1]); $j++){
            $rrr=trim($cssmas[1][$j]);
            if(!(strstr($rrr,"http"))){
                echo('<a class="cssjs" href="login.php?mode=9&fl='.$rrr.'">'.$rrr.'</a><p>');
            };
        };
    };
        
         
        
    if($_GET['mode']=='9'){
        $template=htmlspecialchars(file_get_contents($_GET['fl']));
        echo('<div style="margin: 0 auto; text-align: center;"><form method ="POST" action="login.php?mode=10&fl='.$_GET['fl'].'"><br><br><h2>Редактирование кода</h2><br><br><textarea name="mytext" style ="width: 90%; height: 500px;">'.$template.'</textarea><br><input style="width:300px;
        padding-top: 19px;
        padding-bottom:22px;
        background-color: #005bff;
        box-shadow:0 20px 18px -10px rgba(0, 91, 255, 0.43);
        font-size:20px;
        color:white;
        margin-top: 20px;" type="submit" value = "Заменить текст" title="Заменить текст"></form></div>');
    };
        
    

    if($_GET['mode']=='10'){
        file_put_contents($_GET['fl'], $_POST['mytext']);
    };



    if(!isset($_GET['mode'])){
        echo('<div id="help"><iframe src="'.$pagename.'" frameborder="0"></iframe></div>');
    };
    echo('</body></html>');
}

else {
    echo('
    <!doctype html>
    <html lang = "ru">
    <head>
    <meta charset = "UTF-8">
    <meta http-equiv="Content-Type" content = "text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
    <center><form method="POST" action="login.php" style="margin-top:30px;">
    <div style ="color: #4e4e4e;
    height:54px;
    line-height:24px;
    font-size:31px;
    font-family:sans-serif;">Вход в админку</div>
    <input type="text" placeholder= "Логин" name="login" size="100" style="min-height:60px;
    margin-bottom:15px;
    border:1px solid transparent;
    background-color:transparent;
    background-position:0% 50%;
    background-size:16px;
    background-repeat:no-repeat;
    box-shadow:inset 0 -3px 0 0 #005bff;
    -webkit-transition:all 555ms ease;
    transition:all 555ms ease;
    font-size:18px;
    width:296px;
    text-align:center;"><br>
    <input type="password" placeholder= "Пароль" name="password" size="100" style="min-height:60px;
    margin-bottom:15px;
    border:1px solid transparent;
    background-color:transparent;
    background-position:0% 50%;
    background-size:16px;
    background-repeat:no-repeat;
    box-shadow:inset 0 -3px 0 0 #005bff;
    -webkit-transition:all 555ms ease;
    transition:all 555ms ease;
    font-size:18px;
    width:296px;
    text-align:center;"><br>
    <input type=submit name="save" value="Войти" style="width:300px;
    padding-top:19px;
    padding-bottom:22px;
    background-color:#005bff;
    box-shadow:0 20px 18px -10px rgba(0,91,255,0.43);
    font-size:20px;
    color:white;">
    </form></center></body></html>');
    exit();
};

?>

