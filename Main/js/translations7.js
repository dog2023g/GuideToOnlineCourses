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
      question: '1. Что ж, ты попал на пересдачу. Твои действия?',
      answers: ['Спокойно выявляю причину, уверенно решаю проблему',
      'Не понимаю, что делать. Паника!', 'Вообще пофиг'],
      correct: 1,
    },
    {
        question: '2. НТК не пройден, а электронного письма с разъяснением нет. Что делать?',
        answers: ['Писать в техподдержку exam1@urfu.ru',
        'Надеяться на лучшее',],
        correct: 1,
      },
      {
        question: '3. Не сдал прокторинг с первого раза. Что будешь делать?',
        answers: ['Понадеюсь, что и так всё засчитают',
        'Буду следить за новостями о датах пересдачи и запишусь на повторный итоговый контроль',],
        correct: 2,
      }],
      en:[
        {
            question: '',
            answers: ['',
            '', ''],
            correct: 1,
          },
          {
              question: '',
              answers: ['',
              '',],
              correct: 1,
            },
            {
              question: '',
              answers: ['',
              '',],
              correct: 2,
            }],
        ch:[
            {
                question: '',
                answers: ['',
                '', ''],
                correct: 1,
              },
              {
                  question: '',
                  answers: ['',
                  '',],
                  correct: 1,
                },
                {
                  question: '',
                  answers: ['',
                  '',],
                  correct: 2,
                }],
            ar:[
                {
                    question: '',
                    answers: ['',
                    '', ''],
                    correct: 1,
                  },
                  {
                      question: '',
                      answers: ['',
                      '',],
                      correct: 1,
                    },
                    {
                      question: '',
                      answers: ['',
                      '',],
                      correct: 2,
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
    "h1_0":{ //Начальные теги в уроках
        "ru": 'Про пересдачи',
        "en": 'Registration of URFU Mail',
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
        "ru": '<li> <a class="page_lesson_contents" href="#h2_1" onclick="reloadPageForContents();">Пересдача курсов на платформе «Центр независимой оценки результатов обучения»</a></li>'+
               '<li><a class="page_lesson_contents" href="#h2_2" onclick="reloadPageForContents();">Задолженность по онлайн-курсам на платформе «Открытое образование»</a></li>'+
               '<li><a class="page_lesson_contents" href="#h2_3" onclick="reloadPageForContents();">Пересдача итогового контроля на платформе «Открытое образование»</a></li>'+
               '<li><a class="page_lesson_contents" href="#test" onclick="reloadPageForContents();">Проверка знаний 😉</a></li>',
        "en": '<li> <a class="page_lesson_contents" href="#h2_1" onclick="reloadPageForContents();"> How to create a personal account at UrFU?</a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_2" onclick="reloadPageForContents();">How to get access to office.com and your email?</a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_3" onclick="reloadPageForContents();">Пересдача итогового контроля на платформе «Открытое образование»</a></li>'+
        '<li><a class="page_lesson_contents" href="#test" onclick="reloadPageForContents();">Knowledge check 😉</a></li>',
        "ch": '<li> <a class="page_lesson_contents" href="#h2_1" onclick="reloadPageForContents();"> Как завести личный кабинет УрФУ? </a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_2" onclick="reloadPageForContents();">Как получить доступ к office.com и своей почте?</a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_3" onclick="reloadPageForContents();">Пересдача итогового контроля на платформе «Открытое образование»</a></li>'+
        '<li><a class="page_lesson_contents" href="#test" onclick="reloadPageForContents();">Проверка знаний 😉</a></li>',
        "ar": '<li> <a class="page_lesson_contents" href="#h2_1" onclick="reloadPageForContents();"> Как завести личный кабинет УрФУ? </a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_2" onclick="reloadPageForContents();">Как получить доступ к office.com и своей почте?</a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_3" onclick="reloadPageForContents();">Пересдача итогового контроля на платформе «Открытое образование»</a></li>'+
        '<li><a class="page_lesson_contents" href="#test" onclick="reloadPageForContents();">Проверка знаний 😉</a></li>',
    },
    "h2_0__p_0":{ 
        "ru": 'Очень надеемся на то, что тебе этот урок не понадобится, но тем не менее он очень важен. Итак, ты попал на пересдачу. Не переживай, это вполне нормальное явление.',
        "en": '',
        "ch": '',
        "ar": '',
    },
    "h2_1":{ 
        "ru": 'Пересдача курсов на платформе «Центр независимой оценки результатов обучения»',
        "en": '',
        "ch": '',
        "ar": '',
    },
    "h2_1__p_0":{ 
        "ru": 'О неуспешной сдаче итогового контроля и причине тебе сообщат по почте. А ещё скажут дату пересдачи этого экзамена, она автоматически появится в графе «Меню» в списке экзаменов.',
        "en": '',
        "ch": '',
        "ar": '',
    },
    "h2_1__p_1":{ 
        "ru": 'Первая и вторая пересдачи проводятся онлайн, следующая – очно.',
        "en": '',
        "ch": '',
        "ar": '',
    },
    "h2_2":{ 
        "ru": 'Задолженность по онлайн-курсам на платформе «Открытое образование»',
        "en": '',
        "ch": '',
        "ar": '',
    },
    "h2_2__p_0":{ 
        "ru": 'Для погашения задолженности в текущих условиях тебе необходимо сделать следующее:',
        "en": '',
        "ch": '',
        "ar": '',
    },
    "h2_2__ul_0":{ 
        "ru": '<li>Записаться на актуальный запуск курса в новом семестре </li>'+
        '<li>Написать по адресу openedu@urfu.ru письмо с просьбой добавить тебя в группу должников для предоставления полного доступа к курсу </li>'+
        '<li>Набрать проходные баллы по каждому из разделов, кроме итогового контроля </li>'+
        '<li> Подать заявку на открытие доступа для прохождения итогового контроля. После обработки заявки на электронную почту придет уведомление, когда можно приступить к прохождению итогового контроля.</li>'+
        '<li>Записаться на прохождение итогового контроля с прокторингом и пройти его без нарушений. </li>'+
        '<li> Написать письмо на openedu@urfu.ru и попросить зафиксировать результат и загрузить его в БРС.</li>',
        "en": '<li> </li>'+
        '<li> </li>'+
        '<li> </li>'+
        '<li> </li>'+
        '<li> </li>'+
        '<li> </li>',
        "ch": '<li> </li>'+
        '<li> </li>'+
        '<li> </li>'+
        '<li> </li>'+
        '<li> </li>'+
        '<li> </li>',
        "ar": '<li> </li>'+
        '<li> </li>'+
        '<li> </li>'+
        '<li> </li>'+
        '<li> </li>'+
        '<li> </li>',
    },
    "h2_2__p_1":{ 
        "ru": 'После этого задолженность будет закрыта.',
        "en": '',
        "ch": '',
        "ar": '',
    },
    "h2_3":{ 
        "ru": 'Пересдача итогового контроля на платформе «Открытое образование»',
        "en": '',
        "ch": '',
        "ar": '',
    },
    "h2_3__p_0":{ 
        "ru": 'Если итоговый контроль не сдан, пропущен, отклонён проктором или стоит низкий балл, то его нужно пересдать. Для этого:',
        "en": '',
        "ch": '',
        "ar": '',
    },
    "h2_3__ul_0":{ 
        "ru": '<li>Иметь проходной балл за решение курса </li>'+
        '<li> Группа должна быть «УрФУ_Весна/Осень*год*» либо «УрФУ_Задолженность»</li>'+
        '<li>Записаться на новый экзамен в соответствующей системе прокторинга </li>',
        "en": '<li> </li>'+
        '<li> </li>'+
        '<li> </li>',
        "ch": '<li> </li>'+
        '<li> </li>'+
        '<li> </li>',
        "ar": '<li> </li>'+
        '<li> </li>'+
        '<li> </li>',
    },
    "h2_3__p_1":{ 
        "ru": 'Советуем смотреть разделы «Экзамен» и «Итоговое тестирование», так как там зачастую появляется информация про пересдачи, а ещё там можно обратиться в поддержку курса.',
        "en": '',
        "ch": '',
        "ar": '',
    },


    "test":{ //test
        "ru": 'Тест',
        "en": 'Test',
        "ch": '',
        "ar": '',
    },
    "after_test":{ //тест
        "ru": 'Поздравляем, Ты прошел курс!',
        "en": 'Congratulations, you have completed the course! ',
        "ch": '',
        "ar": '',
    },
};
