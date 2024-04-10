var toMain='https://dog2023g.github.io/GuideToOnlineCourses/Main/';
var lessons='https://dog2023g.github.io/GuideToOnlineCourses/Main/';
var aboutUs=window.location.href.split(/[#?]+/)[0];
var openedu='https://openedu.ru/?ysclid=luha0dkctv671818426';
var elern='https://elearn.urfu.ru/';
var exam1='https://exam1.urfu.ru/';
var exam2='https://exam2.urfu.ru/';
var lesson_1='https://dog2023g.github.io/GuideToOnlineCourses/Lesson_1/';
var lesson_2='https://dog2023g.github.io/GuideToOnlineCourses/Lesson_2/';
var lesson_3='https://dog2023g.github.io/GuideToOnlineCourses/Lesson_3/';
var lesson_4='https://dog2023g.github.io/GuideToOnlineCourses/Lesson_4/';
var lesson_5='https://dog2023g.github.io/GuideToOnlineCourses/Lesson_5/';
var lesson_6='https://dog2023g.github.io/GuideToOnlineCourses/Lesson_6/';
var lesson_7='https://dog2023g.github.io/GuideToOnlineCourses/Lesson_7/';
const language={
    "link_our_name":{ //навигационная панель
        "ru": '<a class="navbar-brand" href="'+toMain+'"><img src="img/seal_12890965.png" alt="&nbspТюлени Свободы" width="50" height="50"></a>',
        "en": '<a class="navbar-brand" href="'+toMain+'?lang=en&"><img src="img/seal_12890965.png" alt="&nbspRadio Seals" width="50" height="50"></a>',
        "ch": '<a class="navbar-brand" href="'+toMain+'?lang=ch&"><img src="img/seal_12890965.png" alt="&nbsp自由印章" width="50" height="50"></a>',
        "ar": '<a class="navbar-brand" href="'+toMain+'?lang=ar&"><img src="img/seal_12890965.png" alt="&nbspأختام الحرية" width="50" height="50"></a>'
    },
    "link_name":{ //навигационная панель
        "ru": '<a class="nav-link active" aria-current="page" href="'+toMain+'">Главная</a>',
        "en": '<a class="nav-link active" aria-current="page" href="'+toMain+'?lang=en&">Main</a>',
        "ch": '<a class="nav-link active" aria-current="page" href="'+toMain+'?lang=ch&">首頁</a>',
        "ar": '<a class="nav-link active" aria-current="page" href="'+toMain+'?lang=ar&">بيت</a>'
    },
    "link_lessons":{ //навигационная панель
        "ru": '<a class="nav-link" href="'+lessons+'?lang=ru&#to_lessons">Уроки</a>',
        "en": '<a class="nav-link" href="'+lessons+'?lang=en&#to_lessons">Lessons</a>',
        "ch": '<a class="nav-link" href="'+lessons+'?lang=ch&#to_lessons">教訓</a>',
        "ar": '<a class="nav-link" href="'+lessons+'?lang=ar&#to_lessons">دروس</a>'
    },
    "link_about_us":{ //навигационная панель
        "ru": '<a class="nav-link" href="'+aboutUs+'?lang=ru&#footer">О нас</a>',
        "en": '<a class="nav-link" href="'+aboutUs+'?lang=en&#footer">About us</a>',
        "ch": '<a class="nav-link" href="'+aboutUs+'?lang=ch&#footer">關於我們</a>',
        "ar": '<a class="nav-link" href="'+aboutUs+'?lang=ar&#footer">معلومات عنا</a>'
    },
    "search":{ //навигационная панель
        "ru": '<input class="form-control me-2" type="search" placeholder="Например: Exam2" aria-label="Search"><button class="btn btn-outline-success" type="submit">Найти</button>',
        "en": '',
        "ch": '',
        "ar": ''
    },
    "link_openedu":{ //футер
        "ru": '<a class="nav-link" href="'+openedu+'">OpenEdu (Открытое образование)</a>',
        "en": '<a class="nav-link" href="'+openedu+'">OpenEdu (Открытое образование (Open Education) platform)</a>',
        "ch": '<a class="nav-link" href="'+openedu+'">OpenEdu</a>',
        "ar": '<a class="nav-link" href="'+openedu+'">OpenEdu</a>'
    },
    "link_elearn":{ //футер
        "ru": '<a class="nav-link" href="'+elern+'">elearn (Портал электронного обучения)</a>',
        "en": '<a class="nav-link" href="'+elern+'">elearn (Electronic Learning Portal)</a>',
        "ch": '<a class="nav-link" href="'+elern+'">elearn</a>',
        "ar": '<a class="nav-link" href="'+elern+'">elearn</a>',
    },
    "link_exam1":{ //футер
        "ru": '<a class="nav-link" href="'+exam1+'">Exam1 (Центр независимой оценки результатов обучения)</a>',
        "en": '<a class="nav-link" href="'+exam1+'">Exam1 (Center for Independent Assessment of Learning Outcomes)</a>',
        "ch": '<a class="nav-link" href="'+exam1+'">Exam1</a>',
        "ar": '<a class="nav-link" href="'+exam1+'">Exam1</a>',
    },
    "link_exam2":{ //футер
        "ru": '<a class="nav-link" href="'+exam2+'">Exam2</a>',
        "en": '<a class="nav-link" href="'+exam2+'">Exam2</a>',
        "ch": '<a class="nav-link" href="'+exam2+'">Exam2</a>',
        "ar": '<a class="nav-link" href="'+exam2+'">Exam2</a>',
    },
    "h1_footer":{ //футер
        "ru": 'Полезные ссылки',
        "en": 'Useful links',
        "ch": '有用的網站鏈接',
        "ar": 'روابط مفيدة للمواقع',
    },
    "h2_footer":{ //футер
        "ru": 'Учебные платформы:',
        "en": 'Educational platforms:',
        "ch": '培訓平台：',
        "ar": 'منصات التدريب:',
    },
    "footer_images":{ //футер
        "ru": 'Изображения:',
        "en": 'Images:',
        "ch": '圖片：',
        "ar": 'الصور:',
    },
    "to_lesson_1":{ //ссылка на урок
        "ru": '<button type="button" class="btn btn-success"> <a class="footer_a" href="'+lesson_1+'?lang=ru">К первому уроку!</a></button>',
        "en": '<button type="button" class="btn btn-success"> <a class="footer_a" href="'+lesson_1+'?lang=en">To the first lesson!</a></button>',
        "ch": '<button type="button" class="btn btn-success"> <a class="footer_a" href="'+lesson_1+'?lang=ch">進入第一課！</a></button>',
        "ar": '<button type="button" class="btn btn-success"> <a class="footer_a" href="'+lesson_1+'?lang=ar">إلى الدرس الأول!</a></button>',
    },
    "to_lesson_2":{ //ссылка на урок
        "ru": '<button type="button" class="btn btn-success"> <a class="footer_a" href="'+lesson_2+'?lang=ru">К второму уроку!</a></button>',
        "en": '<button type="button" class="btn btn-success"> <a class="footer_a" href="'+lesson_2+'?lang=en">To the second lesson!</a></button>',
        "ch": '<button type="button" class="btn btn-success"> <a class="footer_a" href="'+lesson_2+'?lang=ch">繼續第二課！</a></button>',
        "ar": '<button type="button" class="btn btn-success"> <a class="footer_a" href="'+lesson_2+'?lang=ar">إلى الدرس الثاني!</a></button>',
    },
    "to_lesson_3":{ //ссылка на урок
        "ru": '<button type="button" class="btn btn-success"> <a class="footer_a" href="'+lesson_3+'?lang=ru">К третьему уроку!</a></button>',
        "en": '<button type="button" class="btn btn-success"> <a class="footer_a" href="'+lesson_3+'?lang=en">To the third lesson!</a></button>',
        "ch": '<button type="button" class="btn btn-success"> <a class="footer_a" href="'+lesson_3+'?lang=ch">繼續第三課！</a></button>',
        "ar": '<button type="button" class="btn btn-success"> <a class="footer_a" href="'+lesson_3+'?lang=ar">إلى الدرس الثالث!</a></button>',
    },
    "to_lesson_4":{ //ссылка на урок
        "ru": '<button type="button" class="btn btn-success"> <a class="footer_a" href="'+lesson_4+'?lang=ru">К четвертому уроку!</a></button>',
        "en": '<button type="button" class="btn btn-success"> <a class="footer_a" href="'+lesson_4+'?lang=en">To the fourth lesson!</a></button>',
        "ch": '<button type="button" class="btn btn-success"> <a class="footer_a" href="'+lesson_4+'?lang=ch">繼續第四課</a></button>',
        "ar": '<button type="button" class="btn btn-success"> <a class="footer_a" href="'+lesson_4+'?lang=ar">إلى الدرس الرابع!</a></button>',
    },
    "to_lesson_5":{ //ссылка на урок
        "ru": '<button type="button" class="btn btn-success"> <a class="footer_a" href="'+lesson_5+'?lang=ru">К пятому уроку!</a></button>',
        "en": '<button type="button" class="btn btn-success"> <a class="footer_a" href="'+lesson_5+'?lang=en">To the fifth lesson!</a></button>',
        "ch": '<button type="button" class="btn btn-success"> <a class="footer_a" href="'+lesson_5+'?lang=ch">繼續第五課！</a></button>',
        "ar": '<button type="button" class="btn btn-success"> <a class="footer_a" href="'+lesson_5+'?lang=ar">إلى الدرس الخامس!</a></button>',
    },
    "to_lesson_6":{ //ссылка на урок
        "ru": '<button type="button" class="btn btn-success"> <a class="footer_a" href="'+lesson_6+'?lang=ru">К шестому уроку!</a></button>',
        "en": '<button type="button" class="btn btn-success"> <a class="footer_a" href="'+lesson_6+'?lang=en">To the sixth lesson!</a></button>',
        "ch": '<button type="button" class="btn btn-success"> <a class="footer_a" href="'+lesson_6+'?lang=ch"繼續第六課！</a></button>',
        "ar": '<button type="button" class="btn btn-success"> <a class="footer_a" href="'+lesson_6+'?lang=ar">إلى الدرس السادس!</a></button>',
    },
    "to_lesson_7":{ //ссылка на урок
        "ru": '<button type="button" class="btn btn-success"> <a class="footer_a" href="'+lesson_7+'?lang=ru">К седьмому уроку!</a></button>',
        "en": '<button type="button" class="btn btn-success"> <a class="footer_a" href="'+lesson_7+'?lang=en">To the seventh lesson!</a></button>',
        "ch": '<button type="button" class="btn btn-success"> <a class="footer_a" href="'+lesson_7+'?lang=ch"繼續第七課！</a></button>',
        "ar": '<button type="button" class="btn btn-success"> <a class="footer_a" href="'+lesson_7+'?lang=ar">إلى الدرس السابع!</a></button>',
    },
    "greeting_text":{
        "ru": '<h1>Учиться не сложно!</h1>Привет! Поздравляем с поступлением в Уральский федеральный университет! <br> Во время своего обучения ты, скорее всего, столкнёшься с онлайн-курсами. Мы же постараемся помочь тебе с этим делом, расскажем про основные моменты и нюансы. <br> Всю информацию мы разделили на 7 уроков, ознакомившись с которыми ты будешь полностью готов к успешному прохождению. <br><br><span> Предлагаем начать как можно скорее! </span>',
        "en": '<h1>Learning is not difficult!</h1>Hello! Congratulations on getting into the Ural Federal University! During your studies, you will likely come across online courses. We will try to help you with this matter, telling you about the main points and nuances. We have divided all the information into 7 lessons, and after familiarizing yourself with them, you will be fully prepared for successful completion. <br><br><span>  We suggest starting as soon as possible! </span>',
        "ch": '<h1>學習並不難！</h1>你好！ 恭喜您被烏拉爾聯邦大學錄取！ <br> 在學習過程中，您很可能會遇到線上課程。 我們將盡力幫助您解決這個問題，我們將告訴您要點和細微差別。 <br> 我們將所有資訊分為7課，讀完後您將為成功完成做好充分準備。 <br><br><span> 我們建議您盡快開始！ </span>',
        "ar": '<h1>التعلم ليس صعبا!</h1>مرحبًا! تهانينا على قبولك في جامعة الأورال الفيدرالية! <br> أثناء دراستك، من المرجح أن تواجه دورات عبر الإنترنت. سنحاول مساعدتك في هذا الأمر، وسنخبرك بالنقاط الرئيسية والفروق الدقيقة. <br> لقد قمنا بتقسيم جميع المعلومات إلى 7 دروس، وبعد قراءتها ستكون مستعدًا تمامًا لإكمالها بنجاح. <br><br><span> نقترح عليك أن تبدأ في أقرب وقت ممكن! </span>',
    },
    "to_lesson_1_main":{
        "ru": '<button type="button" class="btn btn-success"> <a class="footer_a" href="'+lesson_1+'?lang=ru">Открыть руководство!</a></button>',
        "en": '<button type="button" class="btn btn-success"> <a class="footer_a" href="'+lesson_1+'?lang=en">Open the guide!</a></button>',
        "ch": '<button type="button" class="btn btn-success"> <a class="footer_a" href="'+lesson_1+'?lang=ch">打開指南!</a></button>',
        "ar": '<button type="button" class="btn btn-success"> <a class="footer_a" href="'+lesson_1+'?lang=ar">افتح الدليل!</a></button>',
    },
    "link_1_lesson":{
        "ru": '<div class="card-body"><h5 class="card-title">Регистрация почты Урфу</h5><p class="card-text">Здесь небольшое описание</p><a href="'+lesson_1+'?lang=ru" class="btn btn-success">Перейти!</a></div>',
        "en": '<div class="card-body"><h5 class="card-title">Registration of mail @urfu</h5><p class="card-text">Here is a short description</p><a href="'+lesson_1+'?lang=en" class="btn btn-success">Get start!</a></div>',
        "ch": '<div class="card-body"><h5 class="card-title">註冊信箱@urfu</h5><p class="card-text">這是一個簡短的描述</p><a href="'+lesson_1+'?lang=ch" class="btn btn-success">去第一課</a></div>',
        "ar": '<div class="card-body"><h5 class="card-title">تسجيل البريد @urfu</h5><p class="card-text">وهنا وصف قصير</p><a href="'+lesson_1+'?lang=ar" class="btn btn-success">إلى الدرس الأول!</a></div>',
    },
    "link_2_lesson":{
        "ru": '<div class="card-body"><h5 class="card-title">Регистрация на платформах</h5><p class="card-text">Здесь небольшое описание</p><a href="'+lesson_2+'?lang=ru" class="btn btn-success">Перейти!</a></div>',
        "en": '<div class="card-body"><h5 class="card-title">Registration on educational platforms</h5><p class="card-text">Here is a short description</p><a href="'+lesson_2+'?lang=en" class="btn btn-success">Get start!</a></div>',
        "ch": '<div class="card-body"><h5 class="card-title">教育平台註冊</h5><p class="card-text">這是一個簡短的描述</p><a href="'+lesson_2+'?lang=ch" class="btn btn-success">去！</a></div>',
        "ar": '<div class="card-body"><h5 class="card-title">التسجيل على المنصات التعليمية</h5><p class="card-text">وهنا وصف قصير</p><a href="'+lesson_2+'?lang=ar" class="btn btn-success">يذهب!</a></div>',
    },
    "link_3_lesson":{
        "ru": '<div class="card-body"><h5 class="card-title">Регистрация на курс</h5><p class="card-text">Здесь небольшое описание</p><a href="'+lesson_3+'?lang=ru" class="btn btn-success">Перейти!</a></div>',
        "en": '<div class="card-body"><h5 class="card-title">Registration for the course</h5><p class="card-text">Here is a short description</p><a href="'+lesson_3+'?lang=en" class="btn btn-success">Get start!</a></div>',
        "ch": '<div class="card-body"><h5 class="card-title">註冊課程</h5><p class="card-text">這是一個簡短的描述</p><a href="'+lesson_3+'?lang=ch" class="btn btn-success">去！</a></div>',
        "ar": '<div class="card-body"><h5 class="card-title">التسجيل للدورة</h5><p class="card-text">وهنا وصف قصير</p><a href="'+lesson_3+'?lang=ar" class="btn btn-success">يذهب!</a></div>',
    },
    "link_4_lesson":{
        "ru": '<div class="card-body"><h5 class="card-title">Фишки онлайн-курсов</h5><p class="card-text">Здесь небольшое описание</p><a href="'+lesson_4+'?lang=ru" class="btn btn-success">Перейти!</a></div>',
        "en": '<div class="card-body"><h5 class="card-title">Features of online courses</h5><p class="card-text">Here is a short description</p><a href="'+lesson_4+'?lang=en" class="btn btn-success">Get start!</a></div>',
        "ch": '<div class="card-body"><h5 class="card-title">線上課程的特點</h5><p class="card-text">這是一個簡短的描述</p><a href="'+lesson_4+'?lang=ch" class="btn btn-success">去！</a></div>',
        "ar": '<div class="card-body"><h5 class="card-title">مميزات الدورات التدريبية عبر الإنترنت</h5><p class="card-text">وهنا وصف قصير</p><a href="'+lesson_4+'?lang=ar" class="btn btn-success">يذهب!</a></div>',
    },
    "link_5_lesson":{
        "ru": '<div class="card-body"><h5 class="card-title">О прокторинге</h5><p class="card-text">Здесь небольшое описание</p><a href="'+lesson_5+'?lang=ru" class="btn btn-success">Перейти!</a></div>',
        "en": '<div class="card-body"><h5 class="card-title">About proctoring</h5><p class="card-text">Here is a short description</p><a href="'+lesson_5+'?lang=en" class="btn btn-success">Get start!</a></div>',
        "ch": '<div class="card-body"><h5 class="card-title">關於考試期間的監考</h5><p class="card-text">這是一個簡短的描述</p><a href="'+lesson_5+'?lang=ch" class="btn btn-success">去！</a></div>',
        "ar": '<div class="card-body"><h5 class="card-title">بخصوص المراقبة أثناء الامتحان</h5><p class="card-text">وهنا وصف قصير</p><a href="'+lesson_5+'?lang=ar" class="btn btn-success">يذهب!</a></div>',
    },
    "link_6_lesson":{
        "ru": '<div class="card-body"><h5 class="card-title">Перевод баллов у различных институтов</h5><p class="card-text">Здесь небольшое описание</p><a href="'+lesson_6+'?lang=ru" class="btn btn-success">Перейти!</a></div>',
        "en": '<div class="card-body"><h5 class="card-title">Transfer of points from various institutes</h5><p class="card-text">Here is a short description</p><a href="'+lesson_6+'?lang=en" class="btn btn-success">Get start!</a></div>',
        "ch": '<div class="card-body"><h5 class="card-title">各機構的積分轉移</h5><p class="card-text">這是一個簡短的描述</p><a href="'+lesson_6+'?lang=ch" class="btn btn-success">去！</a></div>',
        "ar": '<div class="card-body"><h5 class="card-title">تحويل النقاط من المعاهد المختلفة</h5><p class="card-text">وهنا وصف قصير</p><a href="'+lesson_6+'?lang=ar" class="btn btn-success">يذهب!</a></div>',
    },
    "link_7_lesson":{
        "ru": '<div class="card-body"><h5 class="card-title">Про пересдачи</h5><p class="card-text">Здесь небольшое описание</p><a href="'+lesson_7+'?lang=ru" class="btn btn-success">Перейти!</a></div>',
        "en": '<div class="card-body"><h5 class="card-title">About retaking exams</h5><p class="card-text">Here is a short description</p><a href="'+lesson_7+'?lang=en" class="btn btn-success">Get start!</a></div>',
        "ch": '<div class="card-body"><h5 class="card-title">關於重考</h5><p class="card-text">這是一個簡短的描述</p><a href="'+lesson_7+'?lang=ch" class="btn btn-success">去！</a></div>',
        "ar": '<div class="card-body"><h5 class="card-title">بخصوص إعادة الامتحانات</h5><p class="card-text">وهنا وصف قصير</p><a href="'+lesson_7+'?lang=ar" class="btn btn-success">يذهب!</a></div>',
    },
    "h1_lessons":{ 
        "ru": 'Уроки и курсы <span id="to_lessons"></span>',
        "en": 'Lessons and courses <span id="to_lessons"></span>',
        "ch": '課程和課程 <span id="to_lessons"></span>：',
        "ar": 'الدروس والدورات <span id="to_lessons"></span>',
    },
};
