var toMain='index.html';
var lessons='index.html';
var aboutUs=window.location.href.split(/[#?]+/)[0];
var openedu='https://openedu.ru/?ysclid=luha0dkctv671818426';
var elern='https://elearn.urfu.ru/';
var exam1='https://exam1.urfu.ru/';
var exam2='https://exam2.urfu.ru/';
var lesson_1='lesson1.html';
var lesson_2='lesson2.html';
var lesson_3='lesson3.html';
var lesson_4='lesson4.html';
var lesson_5='lesson5.html';
var lesson_6='lesson6.html';
var lesson_7='lesson7.html';
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
                question: '当您正在做考试时，外面天色变暗，现在您很难在录音中看到。 如何防止这种情况发生？',
                answers: ['决不。 如果检查员未通过考试，请积极质疑他们的决定',
                '提前打开房间的灯',
                '将手机照在脸上'],
                correct: 2,
              },
              {
                  question: '房间里还有另一个人和你在一起，他不会以任何方式帮助你通过考试。 拿他怎么办？',
                  answers: ['礼貌地要求离开场所一段时间',
                  '假装他不存在',
                  '请求帮忙'],
                  correct: 1,
                },
                {
                  question: '照片中的身份证件图像不完全清晰。 你会怎么做？',
                  answers: ['我会拍更多照片，以便信息可读',
        '“这样就可以了”'
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
        "ch": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_6+'?lang=ch&"> 繼續第六課！</a></button>',
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
        "ch": '关于监考',
        "ar": '',
    },
    "h2_0":{ //Начальные теги в уроках
        "ru": 'План урока',
        "en": 'Themes',
        "ch": '課程計劃',
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
        "ch": '<li> <a class="page_lesson_contents" href="#h2_1" onclick="reloadPageForContents();">独立的测试控制 НТК </a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_2" onclick="reloadPageForContents();"> 监考 ITMOproctor</a></li>'+
        '<li> <a class="page_lesson_contents" href="#h2_3" onclick="reloadPageForContents();"> 监考 examus.net </a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_4" onclick="reloadPageForContents();">提前交付</a></li>'+
        '<li><a class="page_lesson_contents" href="#test" onclick="reloadPageForContents();"> 知识检查 😉</a></li>',
        "ar":'<li> <a class="page_lesson_contents" href="#h2_1" onclick="reloadPageForContents();">Независимый тестовый контроль </a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_2" onclick="reloadPageForContents();">Прокторинг ITMOproctor</a></li>'+
        '<li> <a class="page_lesson_contents" href="#h2_3" onclick="reloadPageForContents();"> Прокторинг examus.net </a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_4" onclick="reloadPageForContents();">Досрочная сдача</a></li>'+
        '<li><a class="page_lesson_contents" href="#test" onclick="reloadPageForContents();">Проверка знаний 😉</a></li>',
    },
    "h2_0__p_0":{ 
        "ru": '<span style="text-decoration: line-through;"> Судный час</span> Итоговое тестирование. Время проверить полученные знания. Есть два пути для этого: независимый тестовый контроль (НТК) и прокторинг. Расскажем подробнее про каждый.',
        "en": '<span style="text-decoration: line-through;"> Doomsday </span> Final exam. Its time to test the knowledge gained. There are two ways to do this: independent test control (ITC) and proctoring. Lets describe each in detail.' ,
        "ch": '审判时间 最终测试。 考验你知识的时候到了。 有两种方法可以做到这一点：独立测试控制（ITC）和监考。 让我们详细介绍一下每一项。',
        "ar": '',
    },
    "h2_1":{ 
        "ru": 'Независимый тестовый контроль',
        "en": 'Independent test control',
        "ch": '独立的测试控制 НТК',
        "ar": '',
    },
    "h2_1__p_0":{ 
        "ru": 'Итак, основные моменты сдачи НТК:',
        "en": 'Key points of taking the ITC exam:',
        "ch": '那么，通过STC的要点：',
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
        "ch": '<li> 在 <a href="https://exam2.urfu.ru/">exam2.urfu.ru</a> 平台上进行</li>'+
        '<li>活动时间将提前告知 </li>'+
        '<li> 即将举行的考试将显示在“导航”窗口的“我的课程”列表或“冬季/夏季课程安排”列表中，您必须在搜索中指定您的学术组 </li>'+
        '<li>您所需要的只是使用相机，它每 30 秒拍摄一张您正在执行任务的照片 </li>'+
        '<li>开始之前，请检查相机的功能 </li>'+
        '<li>准备好你的工作场所：你的脸应该光线充足，摄像头视野中不应有陌生人 </li>'+
        '<li> 拍摄您的身份证明文件（护照或学生证）的照片并确保可以读取数据</li>',
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
        "ch": '<li> 如果提交时允许草稿，那么在开始时您必须双面展示（必须是一张空白纸）</li>'+
        '<li>完成考试后，将立即得知获得的分数 </li>'+
        '<li>验证可能需要一天到几周的时间 </li>'+
        '<li>如果成功，结果将显示在 БРС 科目列表的“考试/测试”栏中 </li>'+
        '<li>如果由于某种原因考试未通过，则该栏中将显示“1.0（满分100）”，并且一封信将发送至您的邮箱，说明未通过的原因。 </li>',
        "ar": '<li> </li>'+
        '<li> </li>'+
        '<li> </li>'+
        '<li> </li>'+
        '<li> </li>',
    },
    "h2_2":{ 
        "ru": 'Прокторинг ITMOproctor',
        "en": 'Proctoring ITMOproctor',
        "ch": ' 监考 ITMOproctor',
        "ar": '',
    },
    "h2_2__p_0":{ 
        "ru": 'Основные моменты сдачи прокторинга с использованием приложения ITMOproctor:',
        "en": 'Key points for taking proctoring using the ITMOproctor application:',
        "ch": '使用 ITMOproctor 应用程序进行监考的要点：',
        "ar": '',
    },
    "h2_2__ul_0":{ 
        "ru": '<li>Приложение <a href="https://itmoproctor.openedu.ru/dist/"> ITMOproctor</a> необходимо заранее установить на свой ПК </li>'+
        '<li>Войди через аккаунт «Открытого образования» </li>',
        "en": '<li>Install the <a href="https://itmoproctor.openedu.ru/dist/"> ITMOproctor</a> application on your PC in advance </li>'+
        '<li>Log in through the "Открытое образование (Open Education)" account </li>',
        "ch": '<li><a href="https://itmoproctor.openedu.ru/dist/"> ITMOproctor</a>应用程序必须提前安装在您的 PC 上 </li>'+
        '<li>通过您的开放教育帐户登录 </li>',
        "ar": '<li> </li>'+
        '<li> </li>',
    },
    "h2_2__ul_1":{ 
        "ru": '<li>Настрой систему (веб-камера, микрофон, демонстрация экрана) и проверь связь. Сделать это можно через соответствующие пункты во вкладке «Меню»</li>',
        "en": '<li>Set up the system (webcam, microphone, screen sharing) and check the connection. You can do this through the corresponding items in the "Menu" tab </li>',
        "ch": '<li> 设置系统（网络摄像头、麦克风、屏幕共享）并检查连接。 这可以通过“菜单”选项卡中的相应项目来完成。 </li>',
        "ar": '<li> </li>',
    },
    "h2_2__ul_2":{ 
        "ru": '<li>Запишись на экзамен. В центральной части окна отображаются экзамены, а справа – их статус. *будет фото* Нажми ниже кнопку «Запланировать» и выбери удобное время. После этого статус изменится на «Запланирован»</li>',
        "en": '<li>Sign up for the exam. Exams are displayed in the central part of the window, and their status is displayed on the right. there will be a photo Click the "Schedule" button below and select a convenient time. After that, the status will change to "Scheduled" </li>',
        "ch": '<li>报名参加考试。 检查显示在窗口的中央部分，其状态显示在右侧。 *会有一张照片* 单击下面的“安排”按钮并选择一个方便的时间。 此后，状态将更改为“已计划” </li>',
        "ar": '<li> </li>',
    },
    "h2_2__ul_3":{ 
        "ru": '<li> Обрати внимание, что при попытке записаться на тестирование в последние дни сдачи и нехватки слота под сдачу, промежуточная аттестация считается не сданной по вине студента и будет рассматриваться как неявка</li>'+
        '<li>Пропуск назначенного тестирования считается неявкой вне зависимости от причины </li>'+
        '<li> Советуем так же читать руководство самого курса</li>'+
        '<li> В выбранное время подключись и дай доступ к камере, микрофону и демонстрации экрана – всё это будет фиксироваться</li>',
        "en": '<li>Please note that if you try to sign up for testing on the last days of the test and there is not enough slot for the test, the intermediate certification is considered not passed due to the student’s fault and will be considered as a failure to appear </li>'+
        '<li> Missing a scheduled test is considered a no-show, regardless of the reason.</li>'+
        '<li>We also recommend reading the course manual </li>'+
        '<li> At the selected time, connect and grant access to the camera, microphone, and screen sharing – all of this will be recorded.</li>',
        "ch": '<li> 请注意，如果您尝试在考试最后几天报名参加考试，但没有足够的名额进行考试，则由于学生的过失，中级认证将被视为未通过，并将被视为未能参加考试</li>'+
        '<li>无论出于何种原因，错过预定的测试均被视为缺席。 </li>'+
        '<li>我们还建议您阅读课程手册 </li>'+
        '<li> 在选定的时间，连接并授予对摄像头、麦克风和屏幕共享的访问权限 - 所有这些都将被记录</li>',
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
        "ch": '<li> 监考可以有两种类型：同步（使用监考者/观察者）和异步</li>'+
        '<li> 如果监考是异步的，则在建立连接后，单击“下一步”按钮继续获取考试代码的步骤。 要接收代码，您必须前往在线学习平台，选择与考试对应的课程和考试，并确认您已准备好以 ID 模式参加考试。 点击平台网站上的链接后，您将看到一个唯一的考试代码。 此后，您需要切换到ITMOproctor应用程序界面，代码将自动显示在相应字段中。 如果没有发生这种情况，您需要从平台中的考试页面复制代码并将其粘贴到监考系统中的相应字段中。</li>',
        "ar": '<li> </li>'+
        '<li> </li>',
    },
    "h2_2__ul_5":{ 
        "ru": '<li>Покажи комнату и стол. Будь внимательны – вокруг не должны находиться люди, источники информации, средства связи</li>',
        "en": '<li>Show the camera an identity document (passport or student ID) </li>',
        "ch": '<li>显示房间和桌子。 小心 - 周围不应有任何人、信息来源或通讯方式 </li>',
        "ar": '<li> </li>',
    },
    "h2_2__ul_6":{ 
        "ru": '<li>Покажи в камеру документ, удостоверяющий личность (паспорт либо студенческий билет)</li>',
        "en": '<li>Show the room and the table. Be careful – there should be no people, sources of information, or communication devices around </li>',
        "ch": '<li> 对着摄像头出示您的身份证明文件（护照或学生证）。 </li>',
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
        "ch": '<li>您将获得有关可以使用哪些来源的信息 </li>'+
        '<li> 执行后立即知道结果</li>'+
        '<li> 如果监考是同步的，观察员将立即报告考试成功 </li>'+
        '<li>如果异步，信息将稍后显示，在主面板上监控考试状态 </li>',
        "ar": '<li> </li>'+
        '<li> </li>'+
        '<li> </li>'+
        '<li> </li>',
    },
    "h2_3":{ 
        "ru": 'Прокторинг examus.net',
        "en": 'Proctoring examus.net',
        "ch": '监考 examus.net',
        "ar": '',
    },
    "h2_3__p_0":{ 
        "ru": 'Основные моменты сдачи прокторинга с использованием расширения examus.net:',
        "en": 'Key points of proctoring using the examus.net extension:',
        "ch": '使用 examus.net 扩展进行监考的要点：',
        "ar": '',
    },
    "h2_3__ul_0":{ 
        "ru": '<li>Скачай <a href="https://chrome.google.com/webstore/detail/examus/nimiflpndioioljbankkeinmoohhcafa"> расширение</a> для браузера examus, используй Google Chrome </li>'+
        '<li> Войди через аккаунт платформы «Открытое образование»</li>',
        "en": '<li>Download the examus browser <a href="https://chrome.google.com/webstore/detail/examus/nimiflpndioioljbankkeinmoohhcafa">extension </a> , use Google Chrome </li>'+
        '<li> Log in through the "Открытое образование (Open Education)" platform account</li>',
        "ch": '<li>下载 examus<a href=" https://chrome.google.com/webstore/detail/examus/nimiflpndioioljbankkeinmoohhcafa "> 浏览器扩展程序</a>，使用 Google Chrome </li>'+
        '<li>通过您的开放教育平台帐户登录 </li>',
        "ar": '<li> </li>'+
        '<li> </li>',
    },
    "h2_3__ul_1":{ 
        "ru": '<li>Заранее проведи проверку связи и оборудования</li>',
        "en": '<li>Conduct a pre-check of your connection and equipment </li>',
        "ch": '<li>提前检查通讯和设备 </li>',
        "ar": '<li> </li>',
    },
    "h2_3__ul_2":{ 
        "ru": '<li>Запишись на экзамен: нажми на кнопку «Календарь», выбери экзамен и выбери свободный слот</li>',
        "en": '<li> Sign up for the exam: click on the "Calendar" button, choose the exam, and select an available time slot</li>',
        "ch": '<li>  报名考试：点击“日历”按钮，选择考试并选择空闲时段 </li>',
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
        "ch": '<li> 考试注册至少在开始前 48 小时进行</li>'+
        '<li>考试时间以莫斯科时区 (UTC+3) 表示 </li>'+
        '<li> 考试时间到来时，单击“开始”按钮</li>'+
        '<li> 阅读测试流程、用户要求、设备技术要求，确认同意在线测试规则后点击“继续”按钮 </li>'+
        '<li>完成设备设置验证过程 </li>'+
        '<li>在新窗口中，仔细阅读提出的建议并遵循它们。 然后从下拉列表中选择 Examus 监考系统，然后单击“继续” </li>'+
        '<li>将文档带到相机处，按“拍照”按钮，然后按“发送” </li>'+
        '<li> 发送文档后，等待监考人员的指示，该指示出现在屏幕右侧的聊天中 </li>'+
        '<li>当监考人员允许开始测试时，页面将刷新，开放教育网站和“开始测试”按钮将变为可用。 </li>'+
        '<li>完成后，单击“完成考试” </li>',
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
        "ch": '提前交货',
        "ar": '',
    },
    "h2_4__p_0":{ 
        "ru": 'Некоторые курсы можно сдать досрочно. О наличии такой возможности всегда сообщают в группе ВКонтакте вашего курса. Для этого:',
        "en": 'Some courses can be submitted early. The availability of this option is always announced in the VKontakte group of your course. To do this:',
        "ch": '有些课程可以提早学习。 此类机会的可用性始终会在您课程的 VKontakte 小组中公布。 为了这：',
        "ar": '',
    },
    "h2_4__ul_0":{ 
        "ru": '<li>Нужно иметь выполненный курс на 100% </li>'+
        '<li>Заполнить заявку и ждать одобрения своей заявки </li>',
        "en": '<li>You need to have completed the course at 100% </li>'+
        '<li>Fill out an application and wait for your application to be approved </li>',
        "ch": '<li>您必须 100% 完成课程 </li>'+
        '<li>填写申请表并等待您的申请被批准 </li>',
        "ar": '<li> </li>'+
        '<li> </li>',
    },
    "h2_4__p_1":{ 
        "ru": 'Есть плюсы: меньше нагрузки и стресса во время сессии, а также дополнительная попытка в случае неудачи на предварительном экзамене. Из минусов – не будет информации о том, какие задания будут в тесте.',
        "en": 'There are advantages: less workload and stress during the session, as well as an additional attempt in case of failure on the preliminary exam. The downside is that there will be no information about what tasks will be in the test.',
        "ch": '这样做的好处是：课程期间的工作量和压力较小，并且在初试失败的情况下可以进行额外的尝试。 缺点是不会有关于测试任务的信息。',
        "ar": '',
    },



    "test":{ //test
        "ru": 'Тест',
        "en": 'Test',
        "ch": '测试5',
        "ar": '',
    },
    "after_test":{ //тест
        "ru": 'Отлично! Теперь пора приступать к следующему уроку!',
        "en": 'Great! Now its time to move on to the next lesson!',
        "ch": '偉大的！ 現在是時候開始下一課了！',
        "ar": '',
    },
};
