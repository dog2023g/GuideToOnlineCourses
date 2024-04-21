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
      question: '1. Ты уже знаешь, какие именно курсы нужно пройти, и хочешь поскорее начать. Что будешь делать?',
      answers: ['Быстро запишусь на все курсы!',
      'Буду ждать, пока меня запишут на все курсы', 'Проверю список онлайн-курсов и в зависимости от авторов курса запишусь самостоятельно либо подожду подключения'],
      correct: 3,
    },
    {
        question: '2. На платформе «Открытое образование» твоя группа указана как «Группа по умолчанию». Твои действия?',
        answers: ['Подожду некоторое время, пока меня подключат. Иначе – напишу в техподдержку <a href="mailto:openedu@urfu.ru"> openedu@urfu.ru</a>',
        'Ничего не буду делать. Всё так и должно быть. Наверное'],
        correct: 1,
      },
      {
        question: '3. Тебе сообщили, что курс будет осуществляться на платформе «Портал электронного обучения», но вот кодовое слово никто так и не сказал. Как поступишь?',
        answers: ['Буду вбивать случайные слова. А вдруг смогу подобрать?',  'Уточню у преподавателя',
        'Забуду про курс и буду заниматься чем-то другим. Раз не сообщили, значит не так уж это и важно!',],
        correct: 2,
      }],
      en:[
        {
            question: '1. You already know which courses you need to take and want to start as soon as possible. What will you do?',
            answers: ['Quickly sign up for all the courses!',
            'I will wait until I am enrolled in all the courses', 'I will check the list of online courses and depending on the authors of the course, I will enroll myself or wait to be connected'],
            correct: 3,
          },
          {
              question: '2. On the "Открытое образование (Open Education)" platform, your group is indicated as the "Default Group." What will you do?',
              answers: ['I will wait for some time until I am connected. Otherwise, I will write to the support team at <a href="mailto:openedu@urfu.ru"> openedu@urfu.ru</a>',
              'I wont do anything. Everything should be as it is. Probably'],
              correct: 1,
            },
            {
              question: '3. You were told that the course will be conducted on the "Портал электронного обучения (Electronic Learning Portal)" but no one mentioned the access code. What will you do?',
              answers: ['I will try random words. What if I can guess it?',  ' I will clarify with the teacher',
              'I will forget about the course and do something else. If they didnt inform me, then its not that important after all!',],
              correct: 2,
            }],
        ch:[
            {
                question: '1.您已经知道自己需要学习哪些课程并希望尽快开始。 你会怎么做？',
                answers: ['我会尽快报名所有课程！',
                '我会等到我注册完所有课程后', '我将检查在线课程列表，并根据课程的作者自行注册或等待连接'],
                correct: 3,
              },
              {
                  question: '在开放教育平台上，您的群组被列为“默认群组”。 你的行动？',
                  answers: ['我会等一会儿，直到他们给我接通。 否则，我会写信给技术支持 <a href="mailto:openedu@urfu.ru"> openedu@urfu.ru</a>',
                  '我不会做任何事。 一切都是它应该的样子。 或许'],
                  correct: 1,
                },
                {
                  question: '.您被告知课程将在“E-Learning Portal”平台上进行，但没有人说出暗号。 你会怎么做？',
                  answers: ['我将随机输入单词。 如果我能捡起来怎么办？',  '我会和老师确认一下',
                  '我会忘记课程并去做其他事情。 既然他们没有报告，那就说明这件事没那么重要！',],
                  correct: 2,
                }],
            ar:[
                {
                  question: 'أنت تعرف بالفعل أي دورات يجب عليك أن تقوم بها وترغب في البدء بأسرع وقت ممكن. ماذا ستفعل؟ ',
                  answers: ['سأسجل بسرعة في جميع الدورات! ','سأنتظر حتى يقوموا بتسجيلي في جميع الدورات',
                  'سأتحقق من قائمة الدورات عبر الإنترنت وسأسجل بناءً على الكتاب أو أنتظر الاتصال'],
                  correct: 3,
                },
                {
                    question: 'على منصة "التعليم المفتوح"، تم تحديد مجموعتك كـ "المجموعة الافتراضية". ماذا ستفعل؟',
                    answers: ['سأنتظر لفترة معينة حتى يتم توصيلي. إذا لم يحدث ذلك - سأراسل دعم التقنية openedu@urfu.ru ',
                    'لن أفعل شيئًا. يبدو أن كل شيء على ما يرام. على الأرجح',
                    ],
                    correct: 1,
                  },
                  {
                    question: 'أخبروك أن الدورة ستكون على منصة "بوابة التعليم الإلكتروني"، لكن لم يقم أحد بإخبارك بالكلمة الرمزية. ماذا ستفعل؟',
                    answers: ['سأبدأ في كتابة كلمات عشوائية. شخص قد أتمكن من تخمينها؟','سأتأكد من المدرس',
                    'سأنسى المسألة وسأقوم بأمور أخرى. إذا لم يقموا بإعلامي، فهذا يعني أنه ليس مهمًا على الإطلاق!',],
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
        "ch": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_6+'?lang=ch&">繼續第六課！</a></button>',
        "ar": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_6+'?lang=ar&">إلى الدرس السادس!</a></button>',
    },
    "to_lesson_7":{ //ссылка на урок
        "ru": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_7+'?lang=ru&">К седьмому уроку!</a></button>',
        "en": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_7+'?lang=en&">To the seventh lesson!</a></button>',
        "ch": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_7+'?lang=ch&"繼續第七課！</a></button>',
        "ar": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_7+'?lang=ar&">إلى الدرس السابع!</a></button>',
    },
    "h1_0":{ //Начальные теги в уроках
        "ru": 'Регистрация на курс',
        "en": 'Registration of URFU Mail',
        "ch": '注册课程',
        "ar": 'التسجيل في الدورة" (كيفية التسجيل في الدورات عبر الإنترنت)',
    },
    "h2_0":{ //Начальные теги в уроках
        "ru": 'План урока',
        "en": 'Themes',
        "ch": '課程計劃',
        "ar": 'خطة الدرس',
    },
    "contents":{ //Начальные теги в уроках
        "ru": '<li> <a class="page_lesson_contents" href="#h2_1" onclick="reloadPageForContents();">Курсы на платформе <a href="https://openedu.ru/">«Открытое образование»</a> </a></li>'+
               '<li><a class="page_lesson_contents" href="#h2_2" onclick="reloadPageForContents();">Курсы на платформе <a href="https://exam1.urfu.ru/">«Центр независимой оценки результатов обучения»</a></a></li>'+
               '<li><a class="page_lesson_contents" href="#h2_3" onclick="reloadPageForContents();">Курсы на платформе <a href="https://elearn.urfu.ru">«Портал электронного обучения»</a></a></li>'+
               '<li><a class="page_lesson_contents" href="#test" onclick="reloadPageForContents();">Проверка знаний 😉</a></li>',
        "en": '<li> <a class="page_lesson_contents" href="#h2_1" onclick="reloadPageForContents();">The courses on the <a href="https://openedu.ru/">«Открытое образование» (Open Education)</a>  platform</a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_2" onclick="reloadPageForContents();">The courses on the <a href="https://exam1.urfu.ru/">"Центр независимой оценки результатов обучения (Center for Independent Assessment of Learning Outcomes)"</a>platform</a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_3" onclick="reloadPageForContents();">The courses on the <a href="https://elearn.urfu.ru">"Портал электронного обучения (Electronic Learning Portal)"</a>platform</a></li>'+
        '<li><a class="page_lesson_contents" href="#test" onclick="reloadPageForContents();">Knowledge check 😉</a></li>',
        "ch": '<li> <a class="page_lesson_contents" href="#h2_1" onclick="reloadPageForContents();"> 平台上的课程 <a href="https://openedu.ru/">«Открытое образование»</a> </a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_2" onclick="reloadPageForContents();">平台上的课程 <a href="https://exam1.urfu.ru/">«Центр независимой оценки результатов обучения»</a></a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_3" onclick="reloadPageForContents();">平台上的课程 <a href="https://elearn.urfu.ru">«Портал электронного обучения»</a></a></li>'+
        '<li><a class="page_lesson_contents" href="#test" onclick="reloadPageForContents();"> 知识测试 😉</a></li>',
        "ar": '<li> <a class="page_lesson_contents" href="#h2_1" onclick="reloadPageForContents();">الدورات على منصة <a href="https://openedu.ru/">«Открытое образование»</a></a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_2" onclick="reloadPageForContents();">   الدورات على منصة <a href="https://exam1.urfu.ru/">«Центр независимой оценки результатов обучения»</a></a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_3" onclick="reloadPageForContents();">الدورات على منصة <a href="https://elearn.urfu.ru">«Портал электронного обучения»</a></a></li>'+
        '<li><a class="page_lesson_contents" href="#test" onclick="reloadPageForContents();"> اختبار المعرفة 😉</a></li>'
    },
    "h2_0__p_0":{
        "ru": 'Итак, начался и учебный процесс и подошло время записи на курсы. Надеемся, ты выбирал их внимательно и осознанно. Сейчас мы расскажем тебе о том, что делать дальше.',
        "en": 'So, the academic process has begun and its time to register for courses. I hope you chose them carefully and consciously. Now we will tell you what to do next.',
        "ch": '因此，教育过程已经开始，注册课程的时间也到了。 我们希望您仔细、有意识地选择它们。 现在我们将告诉您下一步该做什么。',
        "ar": 'لذا، بدأ العملية التعليمية وحان الوقت للتسجيل في الدورات. نأمل أنك اخترتها بعناية وبوعي. الآن سنخبرك بما يجب فعله بعد ذلك',
    },
    "h2_1":{
        "ru": 'Курсы на платформе <a href="https://openedu.ru/"> «Открытое образование» </a>',
        "en": 'The courses on the  <a href="https://openedu.ru/"> "Открытое образование (Open Education)"</a> platform',
        "ch": '平台上的课程 <a href="https://openedu.ru/"> «Открытое образование» </a>',
        "ar": '<a href="https://openedu.ru/"> «Открытое образование» </a> الدورات على منصة',
    },
    "h2_1__p_0":{
        "ru": 'Если платформа для выполнения курса – «Открытое Образование», обрати внимание на то, какой университет является автором курса:',
        "en": 'If the platform for the course is Open Education: pay attention to which university is the author of the course:',
        "ch": '如果完成课程的平台是“Открытое образование”：注意课程的作者是哪所大学',
        "ar": ':"Открытое образование" إذا كانت المنصة التي تنفذ من خلالها الدورة هي انتبه إلى الجامعة التي تكون مؤلفة للدورة:',
    },
    "h2_1__ul_0":{
        "ru": '<li>Если это один из этих ребят: УрФУ, МГУ, МИСиС, то записаться на курс тебе нужно самостоятельно</li>'+
        '<li>В случае курса от НИУ ВШЭ тебе придёт письмо на твою почту с доменом @urfu.me</li>'+
        '<li>На все остальные курсы тебя запишут самостоятельно. Ни в коем случае не торопись делать это сам!</li>',
        "en": '<li>If its one of these guys: UrFU, MSU, MISiS, then you need to register for the course yourself</li>'+
        '<li>In the case of a course from HSE, you will receive an email to your mailbox with the domain @urfu.me</li>'+
        '<li>For all other courses, you will be enrolled automatically. Under no circumstances rush to do it yourself!</li>',
        "ch": '<li> 如果是以下机构之一：UrFU、MSU、MISiS，那么您需要自己报名参加该课程</li>'+
        '<li> 如果是国立研究大学 HSE 的课程，您将收到一封信，其电子邮件地址为@urfu.me</li>'+
        '<li>  您将自行报名参加所有其他课程。 在任何情况下都不要急于自己动手！</li>',
        "ar": '<li>إذا كانت واحدة من هؤلاء: الجامعة الفيدرالية الأورالية، جامعة موسكو، جامعة العلوم والتقنية الوطنية، فعليك التسجيل في الدورة بنفسك</li>'+
        '<li>في حالة الدورة من الجامعة الحكومية للاقتصاد فسوف تتلقى رسالة على بريدك الإلكتروني من نطاق @urfu.me</li>'+
        'سيُسجلك في كل الدورات الأخرى بنفسهم. لا تسارع بالتسجيل بنفسك بأي حال من الأحوال!',
    },
    "h2_1__p_1":{
        "ru": 'Проверить можно по <a href="https://inf-online.urfu.ru/ru/onlain-kursy/"> ссылке </a>. Если напротив названия твоего курса есть ссылка на него – регистрируйся самостоятельно. Иначе – терпеливо жди.',
        "en": 'You can check it on the <a href="https://inf-online.urfu.ru/ru/onlain-kursy/"> link</a>. If there is a link to your course next to its name, register yourself. Otherwise, patiently wait.',
        "ch": '您可以使用<a href="https://inf-online.urfu.ru/ru/onlain-kursy/"> 链接</a>进行检查。 如果您的课程名称旁边有一个链接，请自行注册。 否则请耐心等待。',
        "ar": 'بجانب اسم الدورة الخاصة بك - يمكنك التسجيل بنفسك. خلاف ذلك - انتظر بصبر <a href="https://inf-online.urfu.ru/ru/onlain-kursy/">رابطًا</a> يمكنك التحقق من الرابط. إذا وجدت',
    },
    "h2_1__ul_1":{
        "ru": '<li>И напоследок проверь, чтобы в графе «Моя группа:…» были указана либо «УрФУ_Весна/Осень*год*», либо твоя академическая группа</li>',
        "en": '<li>Finally, make sure that in the "My group: ..." section, either "UrFU_Spring/Fall*year*", or your academic group is indicated.</li>',
        "ch": '<li> 最后，确保在“我的小组：...”栏中注明“UrFU_Spring/Au​​tumn*year*”或您的学术小组</li>',
        "ar": '<li> وفي النهاية تحقق من وجود "مجموعتي: ..." في خانة الدورات. يجب أن يكون مكتوباً "الجامعة الفيدرالية الأورالية_ربيع/خريفالعام", أو مجموعتك الأكاديمية</li>',
    },
    "h2_1__p_2":{
        "ru": 'В случае каких-либо затруднений смело обращайся в техподдержку <a href="mailto:openedu@urfu.ru"> openedu@urfu.ru</a>.',
        "en": 'If you encounter any difficulties, feel free to contact the support team at <a href="mailto:openedu@urfu.ru"> openedu@urfu.ru</a>.',
        "ch": '如有任何困难，请随时联系技术支持 <a href="mailto:openedu@urfu.ru"> openedu@urfu.ru</a>.',
        "ar": ' وفي حالة وجود أي مشاكل لا تتردد في الاتصال بالدعم التقني <a href="mailto:openedu@urfu.ru"> openedu@urfu.ru</a> ',
    },
    "h2_2":{
        "ru": 'Курсы на платформе <a class="inline-block" href="https://exam1.urfu.ru/"> «Центр независимой оценки результатов обучения» </a>',
        "en": 'The courses on the  <a class="inline-block" href="https://exam1.urfu.ru/">"Центр независимой оценки результатов обучения (Center for Independent Assessment of Learning Outcomes)"</a> platform',
        "ch": '平台上的课程 <a class="inline-block" href="https://exam1.urfu.ru/"> «Центр независимой оценки результатов обучения» </a>',
        "ar": '<a class="inline-block" href="https://exam1.urfu.ru/"> «Центр независимой оценки результатов обучения» </a> الدورات على منصة',
    },
    "h2_2__p_0":{
        "ru": 'Если платформа для выполнения курса – «Центр независимой оценки результатов обучения»:',
        "en": 'If the platform for completing the course is the “Center for Independent Assessment of Learning Outcomes”:',
        "ch": '如果完成课程的平台是“Центр независимой оценки результатов обучения”：',
        "ar": ':"Центр независимой оценки результатов обучения" إذا كانت المنصة التي تنفذ من خلالها الدورة هي',
    },
    "h2_2__ul_0":{
        "ru": '<li>Ничего самостоятельно делать не нужно. На все курсы тебя запишут</li>'+
        '<li>Отображаться они будут слева в окошке «Навигация» в списке «Мои курсы»</li>',
        "en": '<li> You dont need to do anything yourself. You will be enrolled in all courses.</li>'+
        '<li>They will be displayed on the left in the "Navigation" window under "My Courses" list.</li>',
        "ch": '<li> 您不需要自己做任何事情。 您将报名参加所有课程 </li>'+
        '<li>它们将显示在“导航”窗口左侧的“我的课程”列表中 </li>',
        "ar": '<li> لا يلزم عمل أي شيء بنفسك. سيُسجلك في كل الدورات</li>'+
        '<li> ستظهر لك في العمود الأيسر في قسم "التصفح" في قائمة "دوراتي"</li>',
    },
    "h2_3":{
        "ru": 'Курсы на платформе  <a class="inline-block" href="https://elearn.urfu.ru"> «Портал электронного обучения»</a>',
        "en": 'The courses on the <a class="inline-block" href="https://elearn.urfu.ru"> "Портал электронного обучения (Electronic Learning Portal)" </a> platform',
        "ch": '平台上的课程 <a class="inline-block" href="https://elearn.urfu.ru"> «Портал электронного обучения»</a>',
        "ar": '<a class="inline-block" href="https://elearn.urfu.ru"> «Портал электронного обучения»</a> الدورات على منصة ',
    },
    "h2_3__p_0":{
        "ru": 'Если платформа для выполнения курса – «Портал электронного обучения»:',
        "en": 'If the platform for completing the course – «Портал электронного обучения»:',
        "ch": '如果完成课程的平台是“Портал электронного обучения”：',
        "ar": ':"Портал электронного обучения" إذا كانت المنصة التي تنفذ من خلالها الدورة هي',
    },
    "h2_3__ul_0":{
        "ru": '<li>На главной странице найди в списке «Категории курсов» свой институт, уровень подготовки, программу обучения</li>'+
        '<li>Найди необходимый курс</li>'+
        '<li>Введи кодовое слово, сказанное преподавателем</li>',
        "en": '<li>On the main page, find your institute, level of education, and training program in the "Course Categories" list.</li>'+
        '<li> Find the necessary course</li>'+
        '<li> Enter the password given by the instructor.</li>',
        "ch": '<li>在主页上的“课程类别”列表中找到您的机构、培训级别和培训计划</li>'+
        '<li>找到您需要的课程</li>'+
        '<li>输入老师所说的密码</li>',
        "ar": '<li>ابحث في قائمة "فئات الدورات" على الصفحة الرئيسية عن معهدك ومستوى تأهيلك وبرنامجك التعليمي</li>'+
        '<li>ابحث عن الدورة المطلوبة</li>'+
        '<li>أدخل الكلمة الرمزية التي قالها المدرس</li>',
    },

    "test":{ //test
        "ru": 'Тест',
        "en": 'Test',
        "ch": '测试3',
        "ar": 'امتحان',
    },
    "after_test":{ //тест
        "ru": 'Отлично! Теперь самое интересное – прохождение онлайн-курсов!',
        "en": 'Great! Now the most interesting part is to start taking online courses!',
        "ch": '伟大的！ 现在到了有趣的部分——参加在线课程！',
        "ar": '!عظيم! الآن يأتي الجزء الممتع – أخذ دورات عبر الإنترنت',
    },
};
