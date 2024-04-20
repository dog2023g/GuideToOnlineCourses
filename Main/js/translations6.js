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
      question: '1. Ты не понимаешь, откуда у тебя такие баллы за курс, ведь ты рассчитывал на другое. Что сделаешь?',
      answers: ['Пересмотрю коэффициенты в БРС, посмотрю систему оценивания онлайн-курсу',
      'Обижусь на тех, кто выставил такие баллы',
    'Сообщу об ошибке'],
      correct: 1,
    },
    ],
      en:[
        {
            question: '1. You dont understand where you got these grades for the course, as you were expecting something else. What will you do?',
            answers: ['Review the coefficients in the BRS, look at the assessment system of the online course.',
            ' Get mad at those who gave you such grades.',
        ' Report the mistake.'],
            correct: 1,
          },
          ],
        ch:[
            {
                question: '',
                answers: ['',
                '',
            ''],
                correct: 1,
              },],
            ar:[
                {
                    question: '',
                    answers: ['',
                    '',
                ''],
                    correct: 1,
                  },]
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
    "h1_0":{ //Начальные теги в уроках
        "ru": 'Перевод баллов',
        "en": 'Score Conversion',
        "ch": '',
        "ar": '',
    },
    "h2_0":{ //Начальные теги в уроках
        "ru": 'План урока',
        "en": 'Themes',
        "ch": '',
        "ar": '',
    },
    "contents":{ //Начальные теги в уроках
        "ru": '<li> <a class="page_lesson_contents" href="#h2_1" onclick="reloadPageForContents();">Смешанные курсы </a></li>'+
               '<li><a class="page_lesson_contents" href="#h2_2" onclick="reloadPageForContents();">Курсы на платформе «Открытое образование»</a></li>'+
               '<li><a class="page_lesson_contents" href="#test" onclick="reloadPageForContents();">Проверка знаний 😉</a></li>',
        "en": '<li> <a class="page_lesson_contents" href="#h2_1" onclick="reloadPageForContents();"> Mixed courses</a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_2" onclick="reloadPageForContents();">Courses on the "Открытое образование (Open Education)" platform</a></li>'+
        '<li><a class="page_lesson_contents" href="#test" onclick="reloadPageForContents();">Knowledge check 😉</a></li>',
        "ch": '<li> <a class="page_lesson_contents" href="#h2_1" onclick="reloadPageForContents();"> Как завести личный кабинет УрФУ? </a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_2" onclick="reloadPageForContents();">Как получить доступ к office.com и своей почте?</a></li>'+
        '<li><a class="page_lesson_contents" href="#test" onclick="reloadPageForContents();">Проверка знаний 😉</a></li>',
        "ar": '<li> <a class="page_lesson_contents" href="#h2_1" onclick="reloadPageForContents();"> Как завести личный кабинет УрФУ? </a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_2" onclick="reloadPageForContents();">Как получить доступ к office.com и своей почте?</a></li>'+
        '<li><a class="page_lesson_contents" href="#test" onclick="reloadPageForContents();">Проверка знаний 😉</a></li>',
    },
    "h2_0__p_0":{ 
        "ru": 'Надеемся, ты справился с тестированием. Теперь ты узнаешь, как полученные тобой баллы за курс будут перенесены в БРС.',
        "en": 'We hope you did well on the test. Now you will learn how the scores you received for the course will be transferred to the students academic record.',
        "ch": '',
        "ar": '',
    },
    "h2_1":{ 
        "ru": 'Смешанные курсы',
        "en": 'Mixed courses',
        "ch": '',
        "ar": '',
    },
    "h2_1__p_0":{ 
        "ru": 'Курсы предметов смешанного формата переводятся согласно коэффициентам в <a href="https://istudent.urfu.ru/s/servis-informirovaniya-studenta-o-ballah-brs"> БРС</a>. Причём прогресс и экзамен идут отдельно друг от друга.',
        "en": 'Courses in a mixed format are converted according to coefficients in the <a href="https://istudent.urfu.ru/s/servis-informirovaniya-studenta-o-ballah-brs">  BRS </a> (Point-Rating system). Progress and exams are separate from each other.',
        "ch": '',
        "ar": '',
    },
    "h2_2":{ 
        "ru": 'Курсы на платформе «Открытое образование»',
        "en": 'Courses on the "Открытое образование (Open Education)" platform',
        "ch": '',
        "ar": '',
    },
    "h2_2__p_0":{ 
        "ru": 'Онлайн-курсы как отдельный самостоятельный предмет, переводятся следующим образом:',
        "en": 'Online courses as a separate independent subject are transferred as follows:',
        "ch": '',
        "ar": '',
    },
    "h2_2__ul_0":{ 
        "ru": '<li> В БРС нет разделения на экзамен и прогресс</li>'+
        '<li> Курсы от УрФУ переводятся в точности с отображаемыми баллами</li>'+
        '<li> Курсы с совпадающей системой оценивания так же переводятся в точности с отображаемыми баллами</li>'+
        '<li>Курсы от вузов-партнёров с несовпадающей системой оценивания переводятся в соответствии с формулой: </li>',
        "en": '<li> There is no division into exam and progress in the BRS.</li>'+
        '<li> Courses from the Ural Federal University (UrFU) are transferred exactly with the displayed scores.</li>'+
        '<li>Courses with a matching assessment system are also transferred exactly with the displayed scores. </li>'+
        '<li> Courses from partner universities with a non-matching assessment system are transferred in accordance with the formula: </li>',
        "ch": '<li> </li>'+
        '<li> </li>'+
        '<li> </li>'+
        '<li> </li>',
        "ar": '<li> </li>'+
        '<li> </li>'+
        '<li> </li>'+
        '<li> </li>',
    },
    "h2_2__p_1":{ 
        "ru": 'Где Бу – балл по 100-бальной шкале УрФУ',
        "en": 'Где Бу – score on the 100-point scale of Ural Federal University',
        "ch": '',
        "ar": '',
    },
    "h2_2__p_2":{ 
        "ru": '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Бп – балл по 100-бальной шкале вуза-партнера',
        "en": '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Бп – score on the 100-point scale of partner university',
        "ch": '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
        "ar": '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
    },
    "h2_2__p_3":{ 
        "ru": '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Нп – значение нижней границы диапазона, соответствующего определённой оценке по   5-балльной шкале вуза-партнера',
        "en": '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Нп – value of the lower boundary of the range corresponding to a particular grade on the 5-point scale of the partner university',
        "ch": '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
        "ar": '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
    },
    "h2_2__p_4":{ 
        "ru": '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ну – значение нижней границы диапазона, соответствующего определённой оценке по   5-балльной шкале УрФУ',
        "en": '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ну – value of the lower boundary of the range corresponding to a particular grade on the 5-point scale of Ural Federal University',
        "ch": '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
        "ar": '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
    },
    "h2_2__p_5":{ 
        "ru": '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; КЗп – количество значений в диапазоне, соответствующего той же оценке по  5-балльной шкале вуза-партнера',
        "en": '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;КЗп – number of values in the range corresponding to the same grade on the 5-point scale of the partner university',
        "ch": '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
        "ar": '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
    },
    "h2_2__p_6":{ 
        "ru": '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; КЗп – количество значений в диапазоне, соответствующего той же оценке по  5-балльной шкале УрФУ',
        "en": '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; КЗу – number of values in the range corresponding to the same grade on the 5-point scale of Ural Federal University',
        "ch": '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
        "ar": '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
    },
    "h2_2__ul_1":{ 
        "ru": '<li>Формула выглядит сложно и непонятно, но это нормально. Главное – старайся набрать как можно больше баллов, чтобы не гадать, набрал ли на зачёт или нет.</li>',
        "en": '<li>The formula looks complicated and unclear, but its okay. The main thing is to try to score as many points as possible so that you dont have to guess if you passed the exam or not. </li>',
        "ch": '<li> </li>',
        "ar": '<li> </li>',
    },



    "test":{ //test
        "ru": 'Тест',
        "en": 'Test',
        "ch": '',
        "ar": '',
    },
    "after_test":{ //тест
        "ru": 'Отлично! Теперь пора приступать к следующему уроку!',
        "en": 'Great! Now its time to move on to the next lesson!',
        "ch": '',
        "ar": '',
    },
};