var toMain='#';
var lessons='link_lessons';
var aboutUs='"link_about_us"';
var openedu='https://openedu.ru/?ysclid=luha0dkctv671818426';
var elern='https://elearn.urfu.ru/';
var exam1='https://exam1.urfu.ru/';
var exam2='https://exam2.urfu.ru/';
var lesson_1='#';
var lesson_2='#';
var lesson_3='#';
var lesson_4='#';
var lesson_5='#';
var lesson_6='#';
var lesson_7='#';
const language={
    "link_our_name":{
        "ru": '<a class="navbar-brand" href="'+toMain+'#ru"><img src="img/seal_12890965.png" alt="&nbspТюлени Свободы" width="50" height="50"></a>',
        "en": '<a class="navbar-brand" href="'+toMain+'#en"><img src="img/seal_12890965.png" alt="&nbspRadio Seals" width="50" height="50"></a>',
        "ch": '<a class="navbar-brand" href="'+toMain+'#ch"><img src="img/seal_12890965.png" alt="&nbsp自由印章" width="50" height="50"></a>',
        "ar": '<a class="navbar-brand" href="'+toMain+'#ar"><img src="img/seal_12890965.png" alt="&nbspأختام الحرية" width="50" height="50"></a>'
    },
    "link_name":{
        "ru": '<a class="nav-link active" aria-current="page" href="'+toMain+'#ru">Главная</a>',
        "en": '<a class="nav-link active" aria-current="page" href="'+toMain+'#en">Main</a>',
        "ch": '<a class="nav-link active" aria-current="page" href="'+toMain+'#ch">首頁</a>',
        "ar": '<a class="nav-link active" aria-current="page" href="'+toMain+'#ar">بيت</a>'
    },
    "link_lessons":{
        "ru": '<a class="nav-link" href="'+lessons+'#ru">Уроки</a>',
        "en": '<a class="nav-link" href="'+lessons+'#en">Lessons</a>',
        "ch": '<a class="nav-link" href="'+lessons+'#ch">教訓</a>',
        "ar": '<a class="nav-link" href="'+lessons+'#ar">دروس</a>'
    },
    "link_about_us":{
        "ru": '<a class="nav-link" href="'+aboutUs+'#ru">О нас</a>',
        "en": '<a class="nav-link" href="'+aboutUs+'#en">About us</a>',
        "ch": '<a class="nav-link" href="'+aboutUs+'#ch">關於我們</a>',
        "ar": '<a class="nav-link" href="'+aboutUs+'#ar">معلومات عنا</a>'
    },
    "search":{
        "ru": '<input class="form-control me-2" type="search" placeholder="Например: Exam2" aria-label="Search"><button class="btn btn-outline-success" type="submit">Найти</button>',
        "en": '<input class="form-control me-2" type="search" placeholder="For example: Exam2" aria-label="Search"><button class="btn btn-outline-success" type="submit">Find</button>',
        "ch": '',
        "ar": ''
    },
    "link_openedu":{
        "ru": '<a class="nav-link" href="'+openedu+'">OpenEdu (Открытое образование)</a>',
        "en": '<a class="nav-link" href="'+openedu+'">OpenEdu</a>',
        "ch": '<a class="nav-link" href="'+openedu+'">OpenEdu</a>',
        "ar": '<a class="nav-link" href="'+openedu+'">OpenEdu</a>'
    },
    "link_elearn":{
        "ru": '<a class="nav-link" href="'+elern+'">elearn (Портал электронного обучения)</a>',
        "en": '<a class="nav-link" href="'+elern+'">elearn</a>',
        "ch": '<a class="nav-link" href="'+elern+'">elearn</a>',
        "ar": '<a class="nav-link" href="'+elern+'">elearn</a>',
    },
    "link_exam1":{
        "ru": '<a class="nav-link" href="'+exam1+'">exam1 (Центр независимой оценки результатов обучения)</a>',
        "en": '<a class="nav-link" href="'+exam1+'">exam1</a>',
        "ch": '<a class="nav-link" href="'+exam1+'">exam1</a>',
        "ar": '<a class="nav-link" href="'+exam1+'">exam1</a>',
    },
    "link_exam2":{
        "ru": '<a class="nav-link" href="'+exam2+'">exam2</a>',
        "en": '<a class="nav-link" href="'+exam2+'">exam2</a>',
        "ch": '<a class="nav-link" href="'+exam2+'">exam2</a>',
        "ar": '<a class="nav-link" href="'+exam2+'">exam2</a>',
    },
    "greeting_text":{
        "ru": '<h1>Учиться не сложно!</h1>Привет! Поздравляем с поступлением в Уральский федеральный университет! <br> Во время своего обучения ты, скорее всего, столкнёшься с онлайн-курсами. Мы же постараемся помочь тебе с этим делом, расскажем про основные моменты и нюансы. <br> Всю информацию мы разделили на 7 уроков, ознакомившись с которыми ты будешь полностью готов к успешному прохождению. <br><br><span> Предлагаем начать как можно скорее! </span>',
        "en": '<h1>Learning is not difficult!</h1>Hello! Congratulations on getting into the Ural Federal University! During your studies, you will likely come across online courses. We will try to help you with this matter, telling you about the main points and nuances. We have divided all the information into 7 lessons, and after familiarizing yourself with them, you will be fully prepared for successful completion. <br><br><span>  We suggest starting as soon as possible! </span>',
        "ch": '<h1>學習並不難！</h1>你好！ 恭喜您被烏拉爾聯邦大學錄取！ <br> 在學習過程中，您很可能會遇到線上課程。 我們將盡力幫助您解決這個問題，我們將告訴您要點和細微差別。 <br> 我們將所有資訊分為7課，讀完後您將為成功完成做好充分準備。 <br><br><span> 我們建議您盡快開始！ </span>',
        "ar": '<h1>التعلم ليس صعبا!</h1>مرحبًا! تهانينا على قبولك في جامعة الأورال الفيدرالية! <br> أثناء دراستك، من المرجح أن تواجه دورات عبر الإنترنت. سنحاول مساعدتك في هذا الأمر، وسنخبرك بالنقاط الرئيسية والفروق الدقيقة. <br> لقد قمنا بتقسيم جميع المعلومات إلى 7 دروس، وبعد قراءتها ستكون مستعدًا تمامًا لإكمالها بنجاح. <br><br><span> نقترح عليك أن تبدأ في أقرب وقت ممكن! </span>',
    },
    "link_1_lesson_gr":{
        "ru": '<button type="button" class="btn btn-success"> <a class="footer_a" href="'+lesson_1+'">Открыть руководство!</a></button>',
        "en": '<button type="button" class="btn btn-success"> <a class="footer_a" href="'+lesson_1+'">Open the guide!</a></button>',
        "ch": '<button type="button" class="btn btn-success"> <a class="footer_a" href="'+lesson_1+'">打開指南!</a></button>',
        "ar": '<button type="button" class="btn btn-success"> <a class="footer_a" href="'+lesson_1+'">افتح الدليل!</a></button>',
    },
};
