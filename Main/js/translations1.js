var toMain='https://dog2023g.github.io/GuideToOnlineCourses/Main/index.html';
var lessons='https://dog2023g.github.io/GuideToOnlineCourses/Main/index.html';
var aboutUs=window.location.href.split(/[#?]+/)[0];
var openedu='https://openedu.ru/?ysclid=luha0dkctv671818426';
var elern='https://elearn.urfu.ru/';
var exam1='https://exam1.urfu.ru/';
var exam2='https://exam2.urfu.ru/';
var lesson_1='https://dog2023g.github.io/GuideToOnlineCourses/Main/lesson1.html';
var lesson_2='https://dog2023g.github.io/GuideToOnlineCourses/Main/lesson2.html';
var lesson_3='https://dog2023g.github.io/GuideToOnlineCourses/Main/lesson3.html';
var lesson_4='https://dog2023g.github.io/GuideToOnlineCourses/Main/lesson4.html';
var lesson_5='https://dog2023g.github.io/GuideToOnlineCourses/Main/lesson5.html';
var lesson_6='https://dog2023g.github.io/GuideToOnlineCourses/Main/lesson6.html';
var lesson_7='https://dog2023g.github.io/GuideToOnlineCourses/Main/lesson7.html';
const tests_any_lang={ 
    ru:[
    {
      question: '1. Твои данные в поле идентификатора не находятся. Что будешь делать?',
      answers: ['Проверю корректность своих данных, а также удостоверюсь, что уже можно начинать регистрироваться',
      'Начну истерить, что ничего не получается'],
      correct: 1,
    },
    {
        question: '2. Доступ к office.com не активировался сразу после подачи заявки. Твои действия?',
        answers: ['Паникую, навожу суету',
        'Пишу в техподдержку, чтобы как можно быстрее дали доступ!',
        'Терпеливо жду 36 часов'],
        correct: 3,
      },
      {
        question: '3. Получив корпоративную почту, ты…',
        answers: ['Запомнишь её, зафиксируешь в заметках',
        'Тут же забудешь про неё. Зачем тебе ещё одна?',],
        correct: 1,
      }],
      en:[
        {
          question: '1. Your data is not in the identifier field. What will you do?',
          answers: ['Check the correctness of my data and make sure that I can start registering soon',
          'Start panicking that nothing is working ☹'],
          correct: 1,
        },
        {
            question: '2. Access to office.com was not activated immediately after submitting the application. What will you do? ',
            answers: ['Panic and create a fuss',
            'Write to technical support to give access as soon as possible!',
            'Patiently wait for a 36 hours'],
            correct: 3,
          },
          {
            question: '3. After receiving the corporate email, you...',
            answers: ['Remember it and fix it in notes',
            'Immediately forget about it. Why do you need another one?',],
            correct: 1,
          }],
        ch:[
            {
              question: '',
              answers: ['',
              ''],
              correct: 1,
            },
            {
                question: '',
                answers: ['',
                '',
                ''],
                correct: 3,
              },
              {
                question: '',
                answers: ['',
                '',],
                correct: 1,
              }],
            ar:[
                {
                  question: '',
                  answers: ['',
                  ''],
                  correct: 1,
                },
                {
                    question: '',
                    answers: ['',
                    '',
                    ''],
                    correct: 3,
                  },
                  {
                    question: '',
                    answers: ['',
                    '',],
                    correct: 1,
            }]
    };

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
    "footer_about_us":{ //футер
        "ru": 'О нас:',
        "en": 'About Us:',
        "ch": '關於我們：',
        "ar": 'معلومات عنا',
    },
    "footer_about_us_p1":{ //футер
        "ru": 'Расскажем немного про себя. Наша команда «Тюлени Свободы» была создана в 2023 для создания классных программных продуктов',
        "en": 'Lets tell you a little about ourselves. Our team "Freedom Seals" was created in 2023 to create cool software products',
        "ch": '讓我們向您介紹一下我們自己。 我們的團隊「Freedom Seals」成立於 2023 年，致力於創造酷炫的軟體產品',
        "ar": 'دعنا نخبرك قليلاً عن أنفسنا. تم إنشاء فريقنا "Freedom Seals" في عام 2023 لإنشاء منتجات برمجية رائعة',
    },
    "to_lesson_1":{ //ссылка на урок
        "ru": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_1+'?lang=ru&">К первому уроку!</a></button>',
        "en": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_1+'?lang=en&">To the first lesson!</a></button>',
        "ch": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_1+'?lang=ch&">進入第一課！</a></button>',
        "ar": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_1+'?lang=ar&">إلى الدرس الأول!</a></button>',
    },
    "to_lesson_2":{ //ссылка на урок
        "ru": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_2+'?lang=ru&">К второму уроку!</a></button>',
        "en": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_2+'?lang=en&">To the second lesson!</a></button>',
        "ch": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_2+'?lang=ch&">繼續第二課！</a></button>',
        "ar": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_2+'?lang=ar&">إلى الدرس الثاني!</a></button>',
    },
    "to_lesson_3":{ //ссылка на урок
        "ru": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_3+'?lang=ru&">К третьему уроку!</a></button>',
        "en": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_3+'?lang=en&">To the third lesson!</a></button>',
        "ch": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_3+'?lang=ch&">繼續第三課！</a></button>',
        "ar": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_3+'?lang=ar&">إلى الدرس الثالث!</a></button>',
    },
    "to_lesson_4":{ //ссылка на урок
        "ru": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_4+'?lang=ru&">К четвертому уроку!</a></button>',
        "en": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_4+'?lang=en&">To the fourth lesson!</a></button>',
        "ch": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_4+'?lang=ch&">繼續第四課</a></button>',
        "ar": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_4+'?lang=ar&">إلى الدرس الرابع!</a></button>',
    },
    "to_lesson_5":{ //ссылка на урок
        "ru": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_5+'?lang=ru&">К пятому уроку!</a></button>',
        "en": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_5+'?lang=en&">To the fifth lesson!</a></button>',
        "ch": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_5+'?lang=ch&">繼續第五課！</a></button>',
        "ar": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_5+'?lang=ar&">إلى الدرس الخامس!</a></button>',
    },
    "to_lesson_6":{ //ссылка на урок
        "ru": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_6+'?lang=ru&">К шестому уроку!</a></button>',
        "en": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_6+'?lang=en&">To the sixth lesson!</a></button>',
        "ch": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_6+'?lang=ch&"繼續第六課！</a></button>',
        "ar": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_6+'?lang=ar&">إلى الدرس السادس!</a></button>',
    },
    "to_lesson_7":{ //ссылка на урок
        "ru": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_7+'?lang=ru&">К седьмому уроку!</a></button>',
        "en": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_7+'?lang=en&">To the seventh lesson!</a></button>',
        "ch": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_7+'?lang=ch&"繼續第七課！</a></button>',
        "ar": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_7+'?lang=ar&">إلى الدرس السابع!</a></button>',
    },
    "h1_0":{ 
        "ru": 'Регистрация почты УрФУ',
        "en": 'Registration of URFU Mail',
        "ch": '',
        "ar": '',
    },
    "h2_0":{ 
        "ru": 'План урока',
        "en": 'Themes',
        "ch": '',
        "ar": '',
    },
    "contents":{ 
        "ru": '<li> <a class="page_lesson_contents" href="#h2_1" onclick="reloadPageForContents();"> Как завести личный кабинет УрФУ? </a></li>'+
               '<li><a class="page_lesson_contents" href="#h2_2" onclick="reloadPageForContents();">Как получить доступ к office.com и своей почте?</a></li>'+
               '<li><a class="page_lesson_contents" href="#test" onclick="reloadPageForContents();">Проверка знаний 😉</a></li>',
        "en": '<li> <a class="page_lesson_contents" href="#h2_1" onclick="reloadPageForContents();"> How to create a personal account at UrFU?</a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_2" onclick="reloadPageForContents();">How to get access to office.com and your email?</a></li>'+
        '<li><a class="page_lesson_contents" href="#test" onclick="reloadPageForContents();">Knowledge check 😉</a></li>',
        "ch": '<li> <a class="page_lesson_contents" href="#h2_1" onclick="reloadPageForContents();"> Как завести личный кабинет УрФУ? </a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_2" onclick="reloadPageForContents();">Как получить доступ к office.com и своей почте?</a></li>'+
        '<li><a class="page_lesson_contents" href="#test" onclick="reloadPageForContents();">Проверка знаний 😉</a></li>',
        "ar": '<li> <a class="page_lesson_contents" href="#h2_1" onclick="reloadPageForContents();"> Как завести личный кабинет УрФУ? </a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_2" onclick="reloadPageForContents();">Как получить доступ к office.com и своей почте?</a></li>'+
        '<li><a class="page_lesson_contents" href="#test" onclick="reloadPageForContents();">Проверка знаний 😉</a></li>',
    },
    "h2_1":{ 
        "ru": 'Как завести личный кабинет УрФУ?',
        "en": 'How to create a personal account at UrFU?',
        "ch": '',
        "ar": '',
    },
    "h2_1__p_0":{ 
        "ru": 'Первым делом тебе необходимо завести личный кабинет УрФУ, учетную запись студента УрФУ. Для этого:',
        "en": 'First of all, you need to create a personal account at UrFU, a student account at UrFU. To do this:',
        "ch": '',
        "ar": '',
    },
    "h2_1__ul_0":{ 
        "ru": '<li>Зайди на сайт идентификации <a href="https://id.urfu.ru/AccessManagement/Identify/GetAccount">id.urfu.ru</a>.</li>',
        "en": '',
        "ch": '',
        "ar": '',
    },
    "h2_1__ul_1":{ 
        "ru": '<li>В поле «Идентификатор» введи свои контактные данные из списка.</li>'+
        '<li>Найди себя, пройди аутентификацию и зарегистрируйся на портале.</li>',
        "en": '<li>Go to the identification website id.urfu.ru.</li>'+
                '<li>In the "Identifier" field, enter your contact information from the list.</li>',
        "ch": '',
        "ar": '',
    },
    "h2_1__p_1":{ 
        "ru": 'Поздравляем! Теперь у тебя есть свой личный кабинет!',
        "en": 'Congratulations! Now you have your own personal account!',
        "ch": '',
        "ar": '',
    },
    "h2_2":{ 
        "ru": 'Как получить доступ к office.com и своей почте?',
        "en": 'How to access office.com and your email?',
        "ch": '',
        "ar": '',
    },
    "h2_2__p_0":{ 
        "ru": 'Далее тебе необходимо получить личную корпоративную почту от УрФУ. Для этого:',
        "en": 'Next, you need to get your personal corporate email from Ural Federal University. To do this:',
        "ch": '',
        "ar": '',
    },
    "h2_2__ul_0":{ 
        "ru": '<li>Пройди на соответствующую <a href="https://office365.urfu.ru/">страницу</a> и войди в аккаунт студента УрФУ.</li>'+
        '<li>Далее необходимо получить доступ к сервисам Microsoft Office 365. На странице будет кнопка «Перейти к активации», нажми на неё. На новой странице ознакомься с соглашениями и нажми на «Активировать». В течении 36 часов заявка будет одобрена.</li>',
        "en": '<li>Go to the corresponding <a href="https://office365.urfu.ru/">page</a> and log in to the Ural Federal University student account.</li>'+
        '<li>Next, you need to access Microsoft Office 365 services. On the page, there will be a pink button "Activate", click on it. Within 36 hours, the request will be approved.</li>',
        "ch": '',
        "ar": '',
    },
    "h2_2__ul_1":{ 
        "ru": '<li>Когда доступ будет активирован, на этой же странице снова будет розовая кнопка «Перейти к использованию сервиса». Нажав на неё, ты попадёшь на портал <a href="https://www.microsoft365.com/">office.com</a>. Выполнив минимальные настройки, ты наконец получишь доступ к некоторым веб-приложениям и персональную почту с доменом @urfu.me.</li>',
        "en": '<li>When the access is activated, on the same page, there will be a pink button "Go to use the service" again. By clicking on it, you will go to the <a href="https://www.microsoft365.com/">office.com</a> portal. After making minimal settings, you will finally get access to some web applications and personal email with the @urfu.me domain</li>',
        "ch": '',
        "ar": '',
    },
    "h2_2__p_1":{ 
        "ru": 'Запомни её! Она пригодится на следующем этапе.',
        "en": 'Remember it! It will come in handy at the next stage.',
        "ch": '',
        "ar": '',
    },
    "h2_2__p_2":{ 
        "ru": '<a href="https://vk.com/video-196169577_456239026"> Cсылка</a> на источник двух предыдущих фото',
        "en": '<a href="https://vk.com/video-196169577_456239026">Link </a> to the source of the two previous photos',
        "ch": '',
        "ar": '',
    },
    "test":{ 
        "ru": 'Тест',
        "en": 'Test',
        "ch": '',
        "ar": '',
    },
    "after_test":{ 
        "ru": 'Отлично! Теперь пора приступать к следующему этапу!',
        "en": 'Great! Now its time to move on to the next stage!',
        "ch": '',
        "ar": '',
    },
};
