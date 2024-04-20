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
      question: '1. За то время, пока ты писал экзамен, на улице стало темно и теперь тебя плохо видно на записи. Как предотвратить это?',
      answers: ['Никак. А если проверяющие зачтут экзамен – активно оспаривать их решение',
      'Заранее включить свет в комнате',
      'Посветить лицо телефоном'],
      correct: 2,
    },
    {
        question: '2. С тобой в комнате находится ещё один человек, никак не помогающий тебе сдать экзамен. Что с ним делать?',
        answers: ['Вежливо попросить покинуть помещение на время',
        'Делать вид, что его и нет',
        'Просить о помощи'],
        correct: 1,
      },
      {
        question: '3. Изображение документа, удостоверяющего личность, на фотографии получилось не совсем чётким. Что сделаешь?',
        answers: ['Сделаю ещё фотографии, чтобы информация была читаема',
        '«И так сойдёт»'
    ],
        correct: 1,
      }],
      en:[
        {
            question: '1. While you were taking the exam, it got dark outside and now you cant be seen clearly on the recording. How to prevent this?',
            answers: ['There is no way to prevent it. And if the examiners pass the exam - actively challenge their decision',
            'Turn on the light in the room in advance',
            'Shine your face with a phone'],
            correct: 2,
          },
          {
              question: '2. There is another person in the room with you, who is not helping you pass the exam. What to do with him?',
              answers: ['Politely ask them to leave the room for a while',
              'Pretend they are not there',
              'Ask for help'],
              correct: 1,
            },
            {
              question: '3. The image of the identity document in the photo turned out to be unclear. What will you do? ',
              answers: ['Take more photos to make the information readable',
        '"It will do"'
    ],
              correct: 1,
            }],
        ch:[
            {
                question: '',
                answers: ['',
                '',
                ''],
                correct: 2,
              },
              {
                  question: '',
                  answers: ['',
                  '',
                  ''],
                  correct: 1,
                },
                {
                  question: '',
                  answers: ['',
        ''
    ],
                  correct: 1,
                }],
            ar:[
                {
                    question: '',
                    answers: ['',
                    '',
                    ''],
                    correct: 2,
                  },
                  {
                      question: '',
                      answers: ['',
                      '',
                      ''],
                      correct: 1,
                    },
                    {
                      question: '',
                      answers: ['',
        ''
    ],
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
    "h1_0":{ //Начальные теги в уроках
        "ru": 'О прокторинге',
        "en": 'About Proctoring',
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
        "ru": '<li> <a class="page_lesson_contents" href="#h2_1" onclick="reloadPageForContents();">Независимый тестовый контроль </a></li>'+
               '<li><a class="page_lesson_contents" href="#h2_2" onclick="reloadPageForContents();">Прокторинг ITMOproctor</a></li>'+
               '<li> <a class="page_lesson_contents" href="#h2_3" onclick="reloadPageForContents();"> Прокторинг examus.net </a></li>'+
               '<li><a class="page_lesson_contents" href="#h2_4" onclick="reloadPageForContents();">Досрочная сдача</a></li>'+
               '<li><a class="page_lesson_contents" href="#test" onclick="reloadPageForContents();">Проверка знаний 😉</a></li>',
        "en": '<li> <a class="page_lesson_contents" href="#h2_1" onclick="reloadPageForContents();">Independent Test Control </a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_2" onclick="reloadPageForContents();">Proctoring ITMOproctor</a></li>'+
        '<li> <a class="page_lesson_contents" href="#h2_3" onclick="reloadPageForContents();"> Proctoring examus.net </a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_4" onclick="reloadPageForContents();">Early submission</a></li>'+
        '<li><a class="page_lesson_contents" href="#test" onclick="reloadPageForContents();">Knowledge check 😉</a></li>',
        "ch": '<li> <a class="page_lesson_contents" href="#h2_1" onclick="reloadPageForContents();">Независимый тестовый контроль </a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_2" onclick="reloadPageForContents();">Прокторинг ITMOproctor</a></li>'+
        '<li> <a class="page_lesson_contents" href="#h2_3" onclick="reloadPageForContents();"> Прокторинг examus.net </a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_4" onclick="reloadPageForContents();">Досрочная сдача</a></li>'+
        '<li><a class="page_lesson_contents" href="#test" onclick="reloadPageForContents();">Проверка знаний 😉</a></li>',
        "ar":'<li> <a class="page_lesson_contents" href="#h2_1" onclick="reloadPageForContents();">Независимый тестовый контроль </a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_2" onclick="reloadPageForContents();">Прокторинг ITMOproctor</a></li>'+
        '<li> <a class="page_lesson_contents" href="#h2_3" onclick="reloadPageForContents();"> Прокторинг examus.net </a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_4" onclick="reloadPageForContents();">Досрочная сдача</a></li>'+
        '<li><a class="page_lesson_contents" href="#test" onclick="reloadPageForContents();">Проверка знаний 😉</a></li>',
    },
    "h2_0__p_0":{ 
        "ru": '<span style="text-decoration: line-through;"> Судный час</span> Итоговое тестирование. Время проверить полученные знания. Есть два пути для этого: независимый тестовый контроль (НТК) и прокторинг. Расскажем подробнее про каждый.',
        "en": '<span style="text-decoration: line-through;"> Doomsday </span> Final exam. Its time to test the knowledge gained. There are two ways to do this: independent test control (ITC) and proctoring. Lets describe each in detail.' ,
        "ch": '',
        "ar": '',
    },
    "h2_1":{ 
        "ru": 'Независимый тестовый контроль',
        "en": 'Independent test control',
        "ch": '',
        "ar": '',
    },
    "h2_1__p_0":{ 
        "ru": 'Итак, основные моменты сдачи НТК:',
        "en": 'Key points of taking the ITC exam:',
        "ch": '',
        "ar": '',
    },
    "h2_1__ul_0":{ 
        "ru": '<li>Он проводится на платформе <a href="https://exam2.urfu.ru/">exam2.urfu.ru</a></li>'+
        '<li>О времени проведения будут известно заранее </li>'+
        '<li> Предстоящие экзамены будут отображаться в окошке «Навигация» в списке «Мои курсы» либо в списке «Расписание зимней/летней сессии», где в поиске необходимо указать свою академическую группу</li>'+
        '<li>С тебя требуется только лишь доступ к камере, с помощью которой каждые 30 секунд делается фотография тебя, делающего задания </li>'+
        '<li>Перед началом проверь работоспособность своей камеры </li>'+
        '<li>Подготовь рабочее место: твоё лицо должно быть хорошо освещено, в поле зрения камеры нет посторонних людей </li>'+
        '<li> Сфотографируй документ, удостоверяющий личность (паспорт либо студенческий билет) и убедись, что данные возможно прочитать</li>',
        "en": '<li>It is conducted on the platform <a href="https://exam2.urfu.ru/">exam2.urfu.ru</a> </li>'+
        '<li>The time of the exam will be known in advance </li>'+
        '<li>Upcoming exams will be displayed in the "Navigation" window in the "My courses" list or in the "Winter/Summer session schedule" list, where you need to specify your academic group in the search </li>'+
        '<li>You only need access to a camera, which takes a picture of you every 30 seconds while you are doing the tasks </li>'+
        '<li>Before starting, check the functionality of your camera </li>'+
        '<li>Prepare your workspace: your face should be well lit, and there should be no other people in the cameras field of view. </li>'+
        '<li>Take a photo of an identity document (passport or student ID) and make sure that the data is readable </li>',
        "ch": '<li> </li>'+
        '<li> </li>'+
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
        '<li> </li>'+
        '<li> </li>',
    },
    "h2_1__ul_1":{ 
        "ru": '<li> Если при сдаче разрешён черновик, то в начале необходимо показать его с двух сторон (это должен быть чистый лист)</li>'+
        '<li> Сразу после выполнения экзамена будет известно количество полученных баллов</li>'+
        '<li> Проверка может занять от одного дня до несколько недель</li>'+
        '<li>В случае успешного выполнения в графе «Экзамен/Зачёт» в списке предметов БРС отобразится полученный результат </li>'+
        '<li>Если по каким-либо причинам экзамен не будет зачтён, то в графе отобразится «1.0 из 100» и на почту придёт письмо с причиной твоей не сдачи. </li>',
        "en": '<li>If a draft is allowed when submitting the document, you need to show it from both sides at the beginning (it should be a clean sheet of paper) </li>'+
        '<li>The number of points received will be known immediately after the exam is completed </li>'+
        '<li>Verification can take from one day to several weeks </li>'+
        '<li>In case of successful completion in the "Exam/Credit" column in the list of subjects, the received result will be displayed </li>'+
        '<li>If for any reason the exam is not passed, the column will show "1.0 out of 100" and an email will be sent with the reason for your failure. </li>',
        "ch": '<li> </li>'+
        '<li> </li>'+
        '<li> </li>'+
        '<li> </li>'+
        '<li> </li>',
        "ar": '<li> </li>'+
        '<li> </li>'+
        '<li> </li>'+
        '<li> </li>'+
        '<li> </li>',
    },
    "h2_2":{ 
        "ru": 'Прокторинг ITMOproctor',
        "en": 'Proctoring ITMOproctor',
        "ch": '',
        "ar": '',
    },
    "h2_2__p_0":{ 
        "ru": 'Основные моменты сдачи прокторинга с использованием приложения ITMOproctor:',
        "en": 'Key points for taking proctoring using the ITMOproctor application:',
        "ch": '',
        "ar": '',
    },
    "h2_2__ul_0":{ 
        "ru": '<li>Приложение <a href="https://itmoproctor.openedu.ru/dist/"> ITMOproctor</a> необходимо заранее установить на свой ПК </li>'+
        '<li>Войди через аккаунт «Открытого образования» </li>',
        "en": '<li>Install the <a href="https://itmoproctor.openedu.ru/dist/"> ITMOproctor</a> application on your PC in advance </li>'+
        '<li>Log in through the "Открытое образование (Open Education)" account </li>',
        "ch": '<li> </li>'+
        '<li> </li>',
        "ar": '<li> </li>'+
        '<li> </li>',
    },
    "h2_2__ul_1":{ 
        "ru": '<li>Настрой систему (веб-камера, микрофон, демонстрация экрана) и проверь связь. Сделать это можно через соответствующие пункты во вкладке «Меню»</li>',
        "en": '<li>Set up the system (webcam, microphone, screen sharing) and check the connection. You can do this through the corresponding items in the "Menu" tab </li>',
        "ch": '<li> </li>',
        "ar": '<li> </li>',
    },
    "h2_2__ul_2":{ 
        "ru": '<li>Запишись на экзамен. В центральной части окна отображаются экзамены, а справа – их статус. *будет фото* Нажми ниже кнопку «Запланировать» и выбери удобное время. После этого статус изменится на «Запланирован»</li>',
        "en": '<li>Sign up for the exam. Exams are displayed in the central part of the window, and their status is displayed on the right. there will be a photo Click the "Schedule" button below and select a convenient time. After that, the status will change to "Scheduled" </li>',
        "ch": '<li> </li>',
        "ar": '<li> </li>',
    },
    "h2_2__ul_3":{ 
        "ru": '<li> Обрати внимание, что при попытке записаться на тестирование в последние дни сдачи и нехватки слота под сдачу, промежуточная аттестация считается не сданной по вине студента и будет рассматриваться как неявка</li>'+
        '<li>Пропуск назначенного тестирования считается неявкой вне зависимости от причины </li>'+
        '<li> Советуем так же читать руководство самого курса</li>'+
        '<li> В выбранное время подключись и дай доступ к камере, микрофону и демонстрации экрана – всё это будет фиксироваться</li>',
        "en": '<li> </li>'+
        '<li> </li>'+
        '<li> </li>'+
        '<li> At the selected time, connect and grant access to the camera, microphone, and screen sharing – all of this will be recorded.</li>',
        "ch": '<li> </li>'+
        '<li> </li>'+
        '<li> </li>'+
        '<li> </li>',
        "ar": '<li> </li>'+
        '<li> </li>'+
        '<li> </li>'+
        '<li> </li>',
    },
    "h2_2__ul_4":{ 
        "ru": '<li>Прокторинг может быть двух видов: синхронный (с проктором/наблюдающем) и асинхронный </li>'+
        '<li>Если прокторинг асинхронный, то после установления соединения по нажатию кнопки "Далее" осуществляется переход к шагу получения кода экзамена. Для получения кода необходимо перейди на платформу онлайн-обучения, выбери курс и экзамен, соответствующие экзамену, и подтверди готовность к прохождению экзамена в режиме идентификации личности. После перехода по ссылке на сайте платформы ты увидишь уникальный код экзамена. После этого необходимо переключиться в интерфейс приложения ITMOproctor, код автоматически отобразится в соответствующем поле. Если этого не произошло, необходимо скопировать код со страницы экзамена в платформе и вставить его в соответствующее поле в системе прокторинга. </li>',
        "en": '<li>Proctoring can be of two types: synchronous (with a proctor/observer) and asynchronous. </li>'+
        '<li>If proctoring is asynchronous, then after establishing a connection, clicking "Next" will take you to the step of obtaining the exam code. To obtain the code, you need to go to the online learning platform, select the course and exam corresponding to the exam, and confirm readiness to take the exam in identity verification mode. After clicking on the link on the Platforms website, you will see a unique exam code. After that, you need to switch to the ITMOproctor application interface, and the code will automatically appear in the corresponding field. If this does not happen, you need to copy the code from the exam page on the platform and paste it into the corresponding field in the proctoring system. </li>',
        "ch": '<li> </li>'+
        '<li> </li>',
        "ar": '<li> </li>'+
        '<li> </li>',
    },
    "h2_2__ul_5":{ 
        "ru": '<li>Покажи комнату и стол. Будь внимательны – вокруг не должны находиться люди, источники информации, средства связи</li>',
        "en": '<li>Show the camera an identity document (passport or student ID) </li>',
        "ch": '<li> </li>',
        "ar": '<li> </li>',
    },
    "h2_2__ul_6":{ 
        "ru": '<li>Покажи в камеру документ, удостоверяющий личность (паспорт либо студенческий билет)</li>',
        "en": '<li>Show the room and the table. Be careful – there should be no people, sources of information, or communication devices around </li>',
        "ch": '<li> </li>',
        "ar": '<li> </li>',
    },
    "h2_2__ul_7":{ 
        "ru": '<li>Тебе сообщат информацию о том, какие источники можно использовать </li>'+
        '<li>Результат будет известен сразу после выполнения </li>'+
        '<li>Если прокторинг был синхронным, то наблюдающий сразу сообщит об успешности выполнения экзамена </li>'+
        '<li>Если асинхронным – информация появится позже, следи за статусом экзамена на главной панели </li>',
        "en": '<li> You will be informed about which sources you can use</li>'+
        '<li>The result will be known immediately after completion </li>'+
        '<li>If the proctoring was synchronous, the observer will immediately report on the successful completion of the exam </li>'+
        '<li>If it was asynchronous, the information will appear later, keep an eye on the exam status on the main panel </li>',
        "ch": '<li> </li>'+
        '<li> </li>'+
        '<li> </li>'+
        '<li> </li>',
        "ar": '<li> </li>'+
        '<li> </li>'+
        '<li> </li>'+
        '<li> </li>',
    },
    "h2_3":{ 
        "ru": 'Прокторинг examus.net',
        "en": 'Proctoring examus.net',
        "ch": '',
        "ar": '',
    },
    "h2_3__p_0":{ 
        "ru": 'Основные моменты сдачи прокторинга с использованием расширения examus.net:',
        "en": 'Key points of proctoring using the examus.net extension:',
        "ch": '',
        "ar": '',
    },
    "h2_3__ul_0":{ 
        "ru": '<li>Скачай <a href="https://chrome.google.com/webstore/detail/examus/nimiflpndioioljbankkeinmoohhcafa"> расширение</a> для браузера examus, используй Google Chrome </li>'+
        '<li> Войди через аккаунт платформы «Открытое образование»</li>',
        "en": '<li>Download the examus browser <a href="https://chrome.google.com/webstore/detail/examus/nimiflpndioioljbankkeinmoohhcafa">extension </a> , use Google Chrome </li>'+
        '<li> Log in through the "Открытое образование (Open Education)" platform account</li>',
        "ch": '<li> </li>'+
        '<li> </li>',
        "ar": '<li> </li>'+
        '<li> </li>',
    },
    "h2_3__ul_1":{ 
        "ru": '<li>Заранее проведи проверку связи и оборудования</li>',
        "en": '<li>Conduct a pre-check of your connection and equipment </li>',
        "ch": '<li> </li>',
        "ar": '<li> </li>',
    },
    "h2_3__ul_2":{ 
        "ru": '<li>Запишись на экзамен: нажми на кнопку «Календарь», выбери экзамен и выбери свободный слот</li>',
        "en": '<li> Sign up for the exam: click on the "Calendar" button, choose the exam, and select an available time slot</li>',
        "ch": '<li> </li>',
        "ar": '<li> </li>',
    },
    "h2_3__ul_3":{ 
        "ru": '<li>Запись на экзамены проводится не менее, чем за 48 часов до начала </li>'+
        '<li>Время экзамена указано в часовом поясе г. Москва (UTC+3) </li>'+
        '<li>Когда подойдёт время экзамена, нажми на кнопку «Начать» </li>'+
        '<li>Прочти порядок прохождения тестирования, требования к пользователю, технические требования к оборудованию, подтвердите свое согласие с правилами проведения онлайн тестирования и нажми кнопку «Продолжить» </li>'+
        '<li>Пройди процесс проверки настроек устройства </li>'+
        '<li>В новом окне внимательно ознакомься с предложенными рекомендациями и выполни их. Затем в выпадающем списке выбери прокторинговую систему Examus и нажми «Продолжить» </li>'+
        '<li>Поднеси к камере документ, нажми кнопку «Сфотографировать», и затем «Отправить» </li>'+
        '<li>После отправки документа жди указаний проктора, которые появляются в чате с правой стороны экрана </li>'+
        '<li>Когда проктор разрешит начать тестирование, произойдет обновление страницы и станет доступен сайт «Открытого образования» и кнопка «Начать тестирование» </li>'+
        '<li>После выполнения нажми на «Завершить сдачу экзамена» </li>',
        "en": '<li>Registration for exams is carried out no later than 48 hours before the start </li>'+
        '<li>The exam time is indicated in the Moscow time zone (UTC+3) </li>'+
        '<li>When its time for the exam, click on the "Start" button </li>'+
        '<li>Read the test procedure, user requirements, technical equipment requirements, confirm your agreement with the rules of online testing, and click "Continue" </li>'+
        '<li>Go through the device settings check process. </li>'+
        '<li>In a new window, carefully read the suggested recommendations and follow them. Then, select the proctoring system "Examus" from the drop-down list and click "Continue." </li>'+
        '<li>Hold the document up to the camera, click the "Take a Photo" button, and then "Send." </li>'+
        '<li>After sending the document, wait for the proctors instructions, which will appear in the chat on the right side of the screen. </li>'+
        '<li>When the proctor allows the testing to begin, the page will refresh, and the "Open Education" website and the "Start Testing" button will become available. </li>'+
        '<li>After completing the test, click on "Finish Exam Submission." </li>',
        "ch": '<li> </li>'+
        '<li> </li>'+
        '<li> </li>'+
        '<li> </li>'+
        '<li> </li>'+
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
        '<li> </li>'+
        '<li> </li>'+
        '<li> </li>'+
        '<li> </li>'+
        '<li> </li>',
    },
    "h2_4":{ 
        "ru": 'Досрочная сдача',
        "en": 'Early submission',
        "ch": '',
        "ar": '',
    },
    "h2_4__p_0":{ 
        "ru": 'Некоторые курсы можно сдать досрочно. О наличии такой возможности всегда сообщают в группе ВКонтакте вашего курса. Для этого:',
        "en": 'Some courses can be submitted early. The availability of this option is always announced in the VKontakte group of your course. To do this:',
        "ch": '',
        "ar": '',
    },
    "h2_4__ul_0":{ 
        "ru": '<li>Нужно иметь выполненный курс на 100% </li>'+
        '<li>Заполнить заявку и ждать одобрения своей заявки </li>',
        "en": '<li>You need to have completed the course at 100% </li>'+
        '<li>Fill out an application and wait for your application to be approved </li>',
        "ch": '<li> </li>'+
        '<li> </li>',
        "ar": '<li> </li>'+
        '<li> </li>',
    },
    "h2_4__p_1":{ 
        "ru": 'Есть плюсы: меньше нагрузки и стресса во время сессии, а также дополнительная попытка в случае неудачи на предварительном экзамене. Из минусов – не будет информации о том, какие задания будут в тесте.',
        "en": 'There are advantages: less workload and stress during the session, as well as an additional attempt in case of failure on the preliminary exam. The downside is that there will be no information about what tasks will be in the test.',
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
        "ru": 'Отлично! Теперь пора приступать к следующему уроку!',
        "en": 'Great! Now its time to move on to the next lesson!',
        "ch": '',
        "ar": '',
    },
};