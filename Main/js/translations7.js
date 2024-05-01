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
      question: '1. Что ж, ты попал на пересдачу. Твои действия?',
      answers: ['Спокойно выявляю причину, уверенно решаю проблему',
      'Не понимаю, что делать. Паника!', 'Вообще пофиг'],
      correct: 1,
    },
    {
        question: '2. НТК не пройден, а электронного письма с разъяснением нет. Что делать?',
        answers: ['Писать в техподдержку <a href="mailto:exam1@urfu.ru"> exam1@urfu.ru</a> ',
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
            question: '1. Well, you have ended up in a retake. What will you do?',
            answers: ['Calmly identify the reason, confidently solve the problem',
            'I dont know what to do. Panic!', ' I dont care at all'],
            correct: 1,
          },
          {
              question: '2. The final assessment was not passed, and there is no email with an explanation. What to do?',
              answers: ['Write to the tech support at <a href="mailto:exam1@urfu.ru"> exam1@urfu.ru</a>',
              'Hope for the best',],
              correct: 1,
            },
            {
              question: '3. Failed the proctoring on the first attempt. What will you do? ',
              answers: ['Hope that everything will be counted anyway',
              'I will keep an eye on the news about retake dates and sign up for the repeat final assessment',],
              correct: 2,
            }],
        ch:[
            {
                question: '1.好吧，你被重新测试了。你该怎么办？',
                answers: ['冷静地找出原因，自信地解决问题',
                '我不知道该怎么办。恐慌！', '我根本不在乎。'],
                correct: 1,
              },
              {
                  question: 'НТК 没有通过，也没有电子邮件说明。怎么办？',
                  answers: ['致函技术支持 <a href="mailto:exam1@urfu.ru"> exam1@urfu.ru</a>',
                  '希望一切顺利',],
                  correct: 1,
                },
                {
                  question: '3. 第一次没有通过监考。您将怎么办？',
                  answers: ['我希望无论如何都能算数',
                  '我会留意重考日期的消息，并报名参加第二次最终检查',],
                  correct: 2,
                }],
            ar:[
                {
                    question: '1 لقد تم إعادة اختبارك ماذا تفعل؟',
                    answers: ['	تحديد السبب بهدوء، وحل المشكلة بكل ثقة',
                    '	لا أعرف ماذا أفعل إضطرب', '	لا تهتم على الإطلاق'],
                    correct: 1,
                  },
                  {
                      question: '2  لم يتم اجتياز الاختبار ولم يتم إرسال بريد إلكتروني مع توضيح. ما العمل؟',
                      answers: ['	اكتب إلى الدعم الفني <a href="mailto:exam1@urfu.ru"> exam1@urfu.ru</a>',
                      '	نأمل في الأفضل',],
                      correct: 1,
                    },
                    {
                      question: '3 لم تجتاز الاختبار في المرة الأولى. ماذا ستفعل؟',
                      answers: ['	آمل أن يتم احتساب كل شيء كما هو',
                      '	سأترقب أخبارًا عن مواعيد إعادة الامتحان والتسجيل للاختبار النهائي الثاني',],
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
    "searchForm":{ //навигационная панель
        "ru": '<label for="searchInput"></label>'+
        '<input class="form-control me-2" type="search" placeholder="Например: Exam2" id="searchInput" name="searchInput">'+
        '<button class ="btn btn-outline-success" type="submit">Найти</button>'+
        '<ul id="searchResultsDropdown" class="search-results-dropdown"></ul>',
        "en": '<label for="searchInput"></label>'+
        '<input class="form-control me-2" type="search" placeholder="For example: Exam2" id="searchInput" name="searchInput">'+
        '<button class ="btn btn-outline-success" type="submit">Find</button>'+
        '<ul id="searchResultsDropdown" class="search-results-dropdown"></ul>',
        "ch": '<label for="searchInput"></label>'+
        '<input class="form-control me-2" type="search" placeholder="例如：考試2" id="searchInput" name="searchInput">'+
        '<button class ="btn btn-outline-success" type="submit">尋找</button>'+
        '<ul id="searchResultsDropdown" class="search-results-dropdown"></ul>',
        "ar": '<label for="searchInput"></label>'+
        '<input class="form-control me-2" type="search" placeholder="على سبيل المثال: الامتحان 2" id="searchInput" name="searchInput">'+
        '<button class ="btn btn-outline-success" type="submit">يجد</button>'+
        '<ul id="searchResultsDropdown" class="search-results-dropdown"></ul>',
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
        "en": 'Lets tell you a little about ourselves. Our team "RadioSeals" was created in 2023 to create cool software products',
        "ch": '讓我們向您介紹一下我們自己。 我們的團隊「RadioSeals」成立於 2023 年，致力於創造酷炫的軟體產品',
        "ar": 'دعنا نخبرك قليلاً عن أنفسنا. تم إنشاء فريقنا "RadioSeals" في عام 2023 لإنشاء منتجات برمجية رائعة',
    },
    "to_lesson_1":{ //ссылка на урок
        "ru": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_1+'?lang=ru&">К первому уроку!</a></button>',
        "en": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_1+'?lang=en&">To the first lesson!</a></button>',
        "ch": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_1+'?lang=ch&">進入第一課！</a></button>',
        "ar": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_1+'?lang=ar&">إلى الدرس الأول!</a></button>',
    },
    "to_lesson_2":{ //ссылка на урок
        "ru": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_2+'?lang=ru&">Ко второму уроку!</a></button>',
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
        "ch": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_7+'?lang=ch&">"繼續第七課！</a></button>',
        "ar": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_7+'?lang=ar&">إلى الدرس السابع!</a></button>',
    },
    "h1_0":{ //Начальные теги в уроках
        "ru": 'Про пересдачи',
        "en": 'Regarding Retakes',
        "ch": '关于重修',
        "ar": 'حول عمليات إعادة التسجيل',
    },
    "h2_0":{ //Начальные теги в уроках
        "ru": 'План урока',
        "en": 'Themes',
        "ch": '課程計劃',
        "ar": 'خطة الدرس',
    },
    "contents":{ //Начальные теги в уроках
        "ru": '<li> <a class="page_lesson_contents" href="#h2_1" onclick="reloadPageForContents();">Пересдача курсов на платформе <a href="https://exam1.urfu.ru/"> «Центр независимой оценки результатов обучения»</a></a></li>'+
               '<li><a class="page_lesson_contents" href="#h2_2" onclick="reloadPageForContents();">Задолженность по онлайн-курсам на платформе <a href="https://openedu.ru/"> «Открытое образование» </a></a></li>'+
               '<li><a class="page_lesson_contents" href="#h2_3" onclick="reloadPageForContents();">Пересдача итогового контроля на платформе <a href="https://openedu.ru/">«Открытое образование»</a></li>'+
               '<li><a class="page_lesson_contents" href="#test" onclick="reloadPageForContents();">Проверка знаний 😉</a></li>',
        "en": '<li> <a class="page_lesson_contents" href="#h2_1" onclick="reloadPageForContents();"> Retaking courses on the <a href="https://exam1.urfu.ru/">" Центр независимой оценки результатов обучения (Center for Independent Assessment of Learning Outcomes)"</a> platform</a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_2" onclick="reloadPageForContents();">Outstanding debts for online courses on the <a href="https://openedu.ru/">"Открытое образование (Open Education)"</a> platform</a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_3" onclick="reloadPageForContents();">Retaking final exams on the <a href="https://openedu.ru/">"Открытое образование (Open Education)"</a> platform</a></li>'+
        '<li><a class="page_lesson_contents" href="#test" onclick="reloadPageForContents();">Knowledge check 😉</a></li>',
        "ch": '<li> <a class="page_lesson_contents" href="#h2_1" onclick="reloadPageForContents();"> 修订 "学习成果独立评估中心 "平台上的课程 <a href="https://exam1.urfu.ru/">" Центр независимой оценки результатов обучения (Center for Independent Assessment of Learning Outcomes)"</a></a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_2" onclick="reloadPageForContents();">开放教育平台在线课程拖欠款 <a href="https://openedu.ru/">"Открытое образование (Open Education)"</a></a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_3" onclick="reloadPageForContents();">在开放教育平台上重新提交最终控制成果 <a href="https://openedu.ru/">"Открытое образование (Open Education)"</a></a></li>'+
        '<li><a class="page_lesson_contents" href="#test" onclick="reloadPageForContents();">知识测试 😉</a></li>',
        "ar": '<li> <a class="page_lesson_contents" href="#h2_1" onclick="reloadPageForContents();"> 	إعادة تقديم المقررات الدراسية على منصة <a href="https://exam1.urfu.ru/">"exam1"</a> </a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_2" onclick="reloadPageForContents();">متأخرات المقررات الدراسية عبر الإنترنت على منصة <a href="https://openedu.ru/"> "openedu"</a></a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_3" onclick="reloadPageForContents();">	إعادة تقديم الرقابة النهائية على منصة  <a href="https://openedu.ru/">"openedu"</a></a></li>'+
        '<li><a class="page_lesson_contents" href="#test" onclick="reloadPageForContents();">	التحقق من المعرفة 😉</a></li>',
    },
    "h2_0__p_0":{ 
        "ru": 'Очень надеемся на то, что тебе этот урок не понадобится, но тем не менее он очень важен. Итак, ты попал на пересдачу. Не переживай, это вполне нормальное явление.',
        "en": 'We really hope that you wont need this lesson, but nevertheless it is very important. So, you have failed the exam and need to retake it. Dont worry, this is a normal occurrence.',
        "ch": '我们真的希望你不需要上这一课，但它仍然很重要。你被重新录取了别担心，这很正常。',
        "ar": 'نأمل حقًا ألا تكون بحاجة إلى هذا الدرس، لكنه مهم رغم ذلك. لذا، أنت بحاجة إلى إعادة الاختبار. لا تقلق، إنه أمر طبيعي جداً.',
    },
    "h2_1":{ 
        "ru": 'Пересдача курсов на платформе «Центр независимой оценки результатов обучения»',
        "en": 'Retaking courses on the " Центр независимой оценки результатов обучения (Center for Independent Assessment of Learning Outcomes)" platform',
        "ch": '在 "exam2.urfu.ru "平台上重修课程',
        "ar": 'مراجعة المقررات الدراسية على منصة "exam1"',
    },
    "h2_1__p_0":{ 
        "ru": 'О неуспешной сдаче итогового контроля и причине тебе сообщат по почте. А ещё скажут дату пересдачи этого экзамена, она автоматически появится в графе «Меню» в списке экзаменов.',
        "en": 'If you have not passed the final exam and the reason will be communicated to you by email, along with the date for retaking the exam, which will appear automatically in the "Menu" section under the exams list. The first and second retakes are conducted online, while the next one is in-person.',
        "ch": '您将收到期末考试不及格及其原因的邮件通知。您还将被告知重考日期，重考日期将自动出现在考试列表的 "菜单 "栏中。',
        "ar": 'سيتم إخطارك عبر البريد الإلكتروني إذا كنت قد رسبت في الامتحان النهائي وسبب ذلك. كما ستحصل على موعد لإعادة الامتحان، والذي سيظهر تلقائياً في عمود "القائمة" في قائمة الامتحانات',
    },
    "h2_1__p_1":{ 
        "ru": 'Первая и вторая пересдачи проводятся онлайн, следующая – очно.',
        "en": 'The first and second retakes are conducted online, the next one – in person.',
        "ch": '第一次和第二次复试在网上进行，下一次复试由本人亲自参加。',
        "ar": 'تُجرى الإعادة الأولى والثانية عبر الإنترنت، وتُجرى الإعادة التالية بشكل شخصي.',
    },
    "h2_2":{ 
        "ru": 'Задолженность по онлайн-курсам на платформе «Открытое образование»',
        "en": 'Outstanding debts for online courses on the "Открытое образование (Open Education)" platform',
        "ch": '"openedu" 平台上积压的在线课程 ',
        "ar": 'متأخرات الدورات التدريبية عبر الإنترنت على المنصة "openedu"',
    },
    "h2_2__p_0":{ 
        "ru": 'Для погашения задолженности в текущих условиях тебе необходимо сделать следующее:',
        "en": 'To clear your debt under current conditions, you need to:',
        "ch": '在当前情况下，您需要采取以下措施来偿还债务：',
        "ar": 'تحتاج إلى القيام بما يلي لسداد ديونك في الظروف الحالية:',
    },
    "h2_2__ul_0":{ 
        "ru": '<li>Записаться на актуальный запуск курса в новом семестре </li>'+
        '<li>Написать по адресу <a href="mailto:openedu@urfu.ru"> openedu@urfu.ru</a> письмо с просьбой добавить тебя в группу должников для предоставления полного доступа к курсу </li>'+
        '<li>Набрать проходные баллы по каждому из разделов, кроме итогового контроля </li>'+
        '<li> Подать заявку на открытие доступа для прохождения итогового контроля. После обработки заявки на электронную почту придет уведомление, когда можно приступить к прохождению итогового контроля.</li>'+
        '<li>Записаться на прохождение итогового контроля с прокторингом и пройти его без нарушений. </li>'+
        '<li> Написать письмо на <a href="mailto:openedu@urfu.ru"> openedu@urfu.ru</a> и попросить зафиксировать результат и загрузить его в БРС.</li>',
        "en": '<li>Enroll in the current course launch in the new semester </li>'+
        '<li> Write an email to <a href="mailto:openedu@urfu.ru"> openedu@urfu.ru</a> requesting to be added to the debtors group to provide full access to the course</li>'+
        '<li>Achieve a passing score in each section, except for the final exam </li>'+
        '<li>Submit a request for access to take the final exam. After processing the request, you will receive a notification via email when you can start taking the final exam. </li>'+
        '<li>Sign up to take the final exam with proctoring and pass it without any violations. </li>'+
        '<li>Write an email to <a href="mailto:openedu@urfu.ru"> openedu@urfu.ru</a> and request to record the result and upload it to the BRS. </li>',
        "ch": '<li>报名参加新学期推出的实际课程 </li>'+
        '<li>发送电子邮件至 <a href="mailto:openedu@urfu.ru"> openedu@urfu.ru</a>，要求加入债务人群组，以便完全访问课程 </li>'+
        '<li>除期末考试外，各科成绩合格 </li>'+
        '<li>提交开放最终控制权的申请。申请处理完毕后，我们将通过电子邮件通知您何时可以开始接受最终控制。 </li>'+
        '<li> 报名参加有监考的期末测验，并顺利通过。</li>'+
        '<li> 给 <a href="mailto:openedu@urfu.ru"> openedu@urfu.ru</a> 写一封电子邮件，要求记录结果并上传到 BRS。</li>',
        "ar": '<li> 	اشترك في إطلاق الدورة التدريبية الفعلية في الفصل الدراسي الجديد</li>'+
        '<li>	إرسال بريد إلكتروني إلى <a href="mailto:openedu@urfu.ru"> openedu@urfu.ru</a> لطلب إضافتك إلى مجموعة المدينين للوصول الكامل إلى الدورة التدريبية </li>'+
        '<li> 	تحقيق درجات النجاح في كل قسم باستثناء التحكم النهائي</li>'+
        '<li> 	تقديم طلب لفتح باب الدخول لأخذ التحكم النهائي. بمجرد أن تتم معالجة الطلب، ستتلقى إشعارًا عبر البريد الإلكتروني عندما يمكنك البدء في أخذ التحكم النهائي.</li>'+
        '<li>	قم بالتسجيل لإجراء المراقبة النهائية مع المراقبة واجتيازها دون رسوب. </li>'+
        '<li> 	اكتب بريدًا إلكترونيًا إلى <a href="mailto:openedu@urfu.ru"> openedu@urfu.ru</a> واطلب تسجيل النتيجة وتحميلها على نظام تسجيل الدرجات.</li>',
    },
    "h2_2__p_1":{ 
        "ru": 'После этого задолженность будет закрыта.',
        "en": 'After completing these steps, your debt will be cleared.',
        "ch": '之后，债务将被结清。',
        "ar": 'بعد ذلك، سيتم إغلاق الدين.',
    },
    "h2_3":{ 
        "ru": 'Пересдача итогового контроля на платформе «Открытое образование»',
        "en": 'Retaking final exams on the "Открытое образование (Open Education)" platform',
        "ch": '在 "openedu" 平台上重新提交最终控制程序',
        "ar": 'إعادة تقديم التحكم النهائي على المنصة "openedu"',
    },
    "h2_3__p_0":{ 
        "ru": 'Если итоговый контроль не сдан, пропущен, отклонён проктором или стоит низкий балл, то его нужно пересдать. Для этого:',
        "en": 'If the final assessment is not passed, missed, rejected by the proctor, or has a low score, it will be necessary to retake it. To do this:',
        "ch": '如果期末考试未通过、错过、被监考人拒绝或成绩较低，则必须重考。为此',
        "ar": 'في حالة عدم النجاح في الامتحان النهائي، أو التغيب عنه، أو رفضه من قبل المراقب أو منحه درجة منخفضة، يجب إعادة الامتحان. للقيام بذلك:',
    },
    "h2_3__ul_0":{ 
        "ru": '<li>Иметь проходной балл за решение курса </li>'+
        '<li> Группа должна быть «УрФУ_Весна/Осень*год*» либо «УрФУ_Задолженность»</li>'+
        '<li>Записаться на новый экзамен в соответствующей системе прокторинга </li>',
        "en": '<li> Have a passing grade for completing the course</li>'+
        '<li> The group should be "Urfu_Spring/Autumn*year*" or "Urfu_Debt"</li>'+
        '<li> Sign up for a new exam in the corresponding proctoring system</li>',
        "ch": '<li>课程解决方案成绩合格 </li>'+
        '<li> 分组应为 "UrFU_Spring/Autumn*Year*"或 "UrFU_Debt"。</li>'+
        '<li>在相应的监考系统中注册新考试 </li>',
        "ar": '<li>	الحصول على درجة النجاح في حل المقرر الدراسي </li>'+
        '<li>	يجب أن تكون المجموعة "UrFU_Spring_Spring/Autumn*Year*" أو "UrFU_Debt" </li>'+
        '<li>	التسجيل لامتحان جديد في نظام المراقبة المناسب </li>',
    },
    "h2_3__p_1":{ 
        "ru": 'Советуем смотреть разделы «Экзамен» и «Итоговое тестирование», так как там зачастую появляется информация про пересдачи, а ещё там можно обратиться в поддержку курса.',
        "en": 'We advise you to look at the “Exam” and “Final Testing” sections, as information about retakes often appears there, and you can also contact course support there.',
        "ch": '建议您查看 "考试 "和 "期末考试 "部分，因为其中通常会有关于重考的信息，您也可以联系课程支持。',
        "ar": 'ننصحك بالاطلاع على قسمي الامتحان والاختبار النهائي، حيث غالبًا ما يحتويان على معلومات حول إعادة الاختبار، ويمكنك أيضًا الاتصال بدعم المقرر الدراسي.',
    },


    "test":{ //test
        "ru": 'Тест',
        "en": 'Test',
        "ch": '测试 7',
        "ar": 'امتحان',
    },
    "after_test":{ //тест
        "ru": 'Поздравляем, ты прошел курс!',
        "en": 'Congratulations, you have completed the course! ',
        "ch": '恭喜您，您已完成本課程！',
        "ar": 'تهانينا، لقد أكملت الدورة!',
    },
};
