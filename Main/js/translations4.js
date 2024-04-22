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
      question: '1. Прошла уже половина семестра, а ты так и не приступил к онлайн-курсу. Что будешь делать?',
      answers: ['Начну делать как можно скорее!',
      'Сделаю всё за последние сутки. Скорость – моё второе имя!'],
      correct: 1,
    },
    {
        question: '2. В ходе выполнения курса ты будешь:',
        answers: ['Ответственно читать и слушать лекции, выполнять задания',
        'Только выполнять задания',
        'Беззаботно списывать'],
        correct: 1,
      },
      {
        question: '3. Набрав достаточно баллов для зачёта, ты:',
        answers: ['Оставишь всё как есть. Зачем напрягаться лишний раз?',
        'Пройдёшь курс до конца. Чем больше баллов – тем лучше!',],
        correct: 2,
      }],
      en:[
        {
            question: '1. Half of the semester has already passed, and you still havent started the online course. What will you do?',
            answers: ['I will start as soon as possible!',
            'I will do everything in the last day. Speed is my middle name!'],
            correct: 1,
          },
          {
              question: '2. During the course, you will:',
              answers: ['Responsibly read and listen to lectures, complete assignments',
              'Only complete assignments',
              'Carelessly cheat'],
              correct: 1,
            },
            {
              question: '3. Having gained enough points for a passing grade, you:',
              answers: ['Will leave everything as it is. Why exert extra effort?',
              'Will complete the course to the end. The more points, the better!',],
              correct: 2,
            }],
        ch:[
            {
                question: ' 学期已经过半了，你还没有开始网课。 你会怎么做？',
                answers: ['我会尽快开始做！',
                ' 我会在最后24 小时内完成所有事情。 速度是我的中间名！'],
                correct: 1,
              },
              {
                  question: ' 在课程中你将：',
                  answers: [' 阅读和听讲座并负责任地完成作业',
                  '仅完成任务',
                  ' 便宜无忧'],
                  correct: 1,
                },
                {
                  question: ' 获得足够的测试分数后，您：',
                  answers: [' 你让一切保持原样。 何必再一次让自己紧张呢？',
                  ' 您将完成整个课程。 积分越多越好！',],
                  correct: 2,
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
        "ru": 'Фишки онлайн-курсов',
        "en": 'Tips for Online Courses',
        "ch": '线上课程的技巧',
        "ar": '',
    },
    "h2_0":{ //Начальные теги в уроках
        "ru": 'План урока',
        "en": 'Themes',
        "ch": '課程計劃',
        "ar": '',
    },
    "contents":{ //Начальные теги в уроках
        "ru": '<li> <a class="page_lesson_contents" href="#h2_1" onclick="reloadPageForContents();"> Как всё успеть? </a></li>'+
               '<li><a class="page_lesson_contents" href="#h2_2" onclick="reloadPageForContents();">Как успешно пройти онлайн-курс?</a></li>'+
               '<li><a class="page_lesson_contents" href="#test" onclick="reloadPageForContents();">Проверка знаний 😉</a></li>',
        "en": '<li> <a class="page_lesson_contents" href="#h2_1" onclick="reloadPageForContents();"> How to manage to do everything?</a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_2" onclick="reloadPageForContents();">How to successfully complete an online course?</a></li>'+
        '<li><a class="page_lesson_contents" href="#test" onclick="reloadPageForContents();">Knowledge check 😉</a></li>',
        "ch": '<li> <a class="page_lesson_contents" href="#h2_1" onclick="reloadPageForContents();"> 如何管理一切？ </a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_2" onclick="reloadPageForContents();">如何成功完成在线课程？</a></li>'+
        '<li><a class="page_lesson_contents" href="#test" onclick="reloadPageForContents();">知识测试😉</a></li>',
        "ar": '<li> <a class="page_lesson_contents" href="#h2_1" onclick="reloadPageForContents();"> Как завести личный кабинет УрФУ? </a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_2" onclick="reloadPageForContents();">Как получить доступ к office.com и своей почте?</a></li>'+
        '<li><a class="page_lesson_contents" href="#test" onclick="reloadPageForContents();">Проверка знаний 😉</a></li>',
    },
    "h2_0__p_0":{ 
        "ru": 'Настало время решать онлайн-курсы! Может показаться, что это легко и стараться не нужно. Однако это совсем не так. В этом уроке мы дадим тебе несколько советов, как успешно пройти обучение.',
        "en": 'Its time to tackle online courses! It may seem easy and like you dont have to try hard. However, thats not the case at all. In this lesson, we will give you some tips on how to successfully complete your studies.',
        "ch": '是时候解决在线课程了！ 看起来似乎很容易，没有必要去尝试。 然而，事实并非如此。 在本课程中，我们将为您提供一些有关如何成功完成培训的提示。',
        "ar": '',
    },
    "h2_1":{ 
        "ru": 'Как всё успеть?',
        "en": 'How to manage to do everything?',
        "ch": '如何管理一切？',
        "ar": '',
    },
    "h2_1__p_0":{ 
        "ru": 'Составь себе примерное расписание выполнения курса:',
        "en": 'Create yourself a rough schedule for completing the course:',
        "ch": '为自己制定一个完成课程的粗略时间表：',
        "ar": '',
    },
    "h2_1__ul_0":{ 
        "ru": '<li>Выделяй достаточно времени, например, выполняй задания каждую неделю или две</li>'+
        '<li>Курс разделён на разделы, что поможет тебе урегулировать выполнение</li>'+
        '<li>Не откладывай всё на последний день! Очень сложно выполнять всё за один раз</li>'+
        '<li>Внимательно следи за дедлайнами. Обычно весь курс закрывается одновременно, но может случиться и такое, что у каждого раздела есть свой крайний срок. Не теряй баллы!</li>',
        "en": '<li>Allocate enough time, for example, complete assignments every week or two</li>'+
        '<li>The course is divided into sections, which will help you regulate completion</li>'+
        '<li>Dont leave everything until the last day! Its very difficult to do everything at once</li>'+
        '<li>Pay close attention to deadlines. Usually, the entire course closes at once, but it may also happen that each section has its own deadline. Dont lose points!</li>',
        "ch": '<li>分配足够的时间，例如，每周或每两周完成任务</li>'+
        '<li>本课程分为多个部分，这将帮助您管理实施</li>'+
        '<li>不要把所有事情都推迟到最后一天！ 一次做完所有事情是非常困难的</li>'+
        '<li> 密切注意最后期限。 通常整个课程同时结束，但也可能每个部分都有自己的截止日期。 不要丢分！</li>',
        "ar": '<li></li>'+
        '<li></li>'+
        '<li></li>'+
        '<li></li>',
    },
    "h2_2":{ 
        "ru": 'Как успешно пройти онлайн-курс?',
        "en": 'How to successfully complete an online course?',
        "ch": '如何成功完成在线课程？',
        "ar": '',
    },
    "h2_2__p_0":{ 
        "ru": 'Будь внимателен при выполнении:',
        "en": 'Be attentive when completing:',
        "ch": '做时要小心：',
        "ar": '',
    },
    "h2_2__ul_0":{ 
        "ru": '<li>Онлайн-курс может быть и дополнением к занятиям с преподавателем, и полноценным предметом, поэтому очень советуем относиться к нему максимально ответственно</li>'+
        '<li>Лекционный материал полезен не только для заданий курса, но и для финального тестирования. Советуем фиксировать теорию в каком-либо виде.</li>'+
        '<li>Обрати внимание, что у некоторых заданий есть только несколько попыток. Поэтому ни в коем случае не торопись.</li>'+
        '<li>Если курс проходит на платформе «Открытое образование», в разделе курса есть вкладка «Прогресс», где содержится информация о том, сколько баллов нужно набрать для зачёта и можно получить за те или иные задания</li>',
        "en": '<li>An online course can be both a supplement to classes with a teacher and a full-fledged subject, so we highly recommend treating it with maximum responsibility</li>'+
        '<li>The lecture material is useful not only for course assignments but also for the final test. We recommend fixing the theory in some form.</li>'+
        '<li>Note that some tasks have only a few attempts. Therefore, do not rush under any circumstances.</li>'+
        '<li>If the course is being conducted on the "Открытое образование (Open Education)" platform, there is a "Progress" tab in the course section, which contains information about how many points you need to score for credit and what points you can get for certain assignments.</li>',
        "ch": '<li> 在线课程既可以是教师课程的补充，也可以是成熟的学科，因此我们强烈建议您尽可能负责任地对待它</li>'+
        '<li> 讲座材料不仅可用于课程作业，还可用于最终测试。 我们建议您以某种形式记录该理论。</li>'+
        '<li>请注意，某些任务只能尝试几次。 因此，任何情况下都不要着急。</li>'+
        '<li> 如果课程在“开放教育”平台上进行，则课程部分有一个“进度”选项卡，其中包含有关您需要获得多少学分以及可以完成某些任务的信息</li>',
        "ar": '<li></li>'+
        '<li></li>'+
        '<li></li>'+
        '<li></li>',
    },
    "h2_2__p_1":{ 
        "ru": 'Более подробную информацию о системе оценивания мы расскажем через урок.',
        "en": 'We will provide more detailed information about the assessment system during the lesson.',
        "ch": '我们将通过课程提供有关评估系统的更多详细信息。',
        "ar": '',
    },

    "test":{ //test
        "ru": 'Тест',
        "en": 'Test',
        "ch": '测试4',
        "ar": '',
    },
    "after_test":{ //тест
        "ru": 'Класс! Теперь ты знаешь, как с лёгкостью пройти онлайн-курс. Настало время для самого <span style="text-decoration: line-through;">страшного</span> главного – проверки полученных знаний.',
        "en": 'Great! Now you know how to easily pass the online course. Its time for the most frightening important part - checking the acquired knowledge.',
        "ch": '班级！ 现在您知道如何轻松完成在线课程了。 最重要的事情已经到了——测试所获得的知识。',
        "ar": '',
    },
};
