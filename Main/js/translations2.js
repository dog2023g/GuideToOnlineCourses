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
      question: '1. Если у тебя уже есть аккаунт на сайте Открытого Образования, ты:',
      answers: ['Оставляешь его и планируешь использовать для прохождения онлайн-курсов в процессе обучения',
      'Просто меняешь почту у действующего аккаунта ', 'Заново регистрируешься, используя корпоративную почту'],
      correct: 3,
    },
    {
        question: '2. При регистрации ты:',
        answers: ['Укажешь всю действительную и нужную информацию о себе',
        'Впишешь ненастоящие данные о себе, ведь не хочешь делиться конфиденциальной информацией',],
        correct: 1,
      },
      {
        question: '3. При входе на платформы УрФУ ты:',
        answers: ['Спокойно войдёшь через свой «Личный кабинет студента»',
        'Начнёшь нервничать из-за того, что нет опции «Зарегистрироваться»',],
        correct: 1,
      }],
      en:[
        {
            question: '1. If you already have an account on the Open Education website, you:',
            answers: ['Leave it and plan to use it to take online courses during your studies',
            'Simply change the email on your existing account', 'Register again using your corporate email'],
            correct: 3,
          },
          {
              question: '2. During registration, you will:',
              answers: ['Provide all valid and necessary information about yourself',
              'Enter false information about yourself because you dont want to share confidential information',],
              correct: 1,
            },
            {
              question: '3. When logging into the UrFU platform, you will:',
              answers: ['calmly log in through your "Student Personal Account"',
              'start to get nervous because there is no "Register" option',],
              correct: 1,
            }],
        ch:[
            {
                question: '1. 如果您已经在开放教育网站上拥有帐户，您：',
                answers: [' 您保留它并计划在学习期间用它来参加在线课程。',
                '只需更改您现有帐户的电子邮件即可','使用您的公司电子邮件再次注册'],
                correct: 3,
              },
              {
                  question: '注册时：',
                  answers: ['提供有关您自己的所有有效且必要的信息',
                  '输入有关您自己的虚假信息，因为您不想共享机密信息',],
                  correct: 1,
                },
                {
                  question: '进入 UrFU 平台时，您：',
                  answers: ['您可以通过“学生个人帐户”轻松登录',
                  '您会开始感到紧张，因为没有“注册”选项',],
                  correct: 1,
                }],
            ar:[
                {
                    question: '1. إذا كان لديك حساب بالفعل على موقع التعليم المفتوح، فأنت:',
                    answers: [' تبقى على حاله وتخطط لاستخدامه لاجتياز الدورات عبر الإنترنت أثناء التعلم',
                    'ببساطة تغيير البريد الإلكتروني للحساب الحالي', 'إعادة التسجيل، باستخدام البريد الإلكتروني الخاص بالشركة'],
                    correct: 3,
                  },
                  {
                      question: 'عند التسجيل، أنت:',
                      answers: ['ستقوم بتقديم جميع المعلومات الصحيحة والضرورية عن نفسك',
                      ' ستقوم بتقديم معلومات غير صحيحة عن نفسك، لأنك لا ترغب في مشاركة المعلومات السرية',],
                      correct: 1,
                    },
                    {
                      question: 'عند الدخول إلى منصات جامعة أورال الفيدرالية، أنت:',
                      answers: ['ستقوم بالدخول بسلاسة من خلال "حسابك الشخصي للطالب"',
                      'ستبدأ في القلق لأنه لا توجد خيار "التسجيل" رائع!',],
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
        "ch": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_6+'?lang=ch&">繼續第六課！</a></button>',
        "ar": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_6+'?lang=ar&">إلى الدرس السادس!</a></button>',
    },
    "to_lesson_7":{ //ссылка на урок
        "ru": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_7+'?lang=ru&">К седьмому уроку!</a></button>',
        "en": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_7+'?lang=en&">To the seventh lesson!</a></button>',
        "ch": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_7+'?lang=ch&"繼續第七課！</a></button>',
        "ar": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_7+'?lang=ar&">إلى الدرس السابع!</a></button>',
    },
    "h1_0":{ 
        "ru": 'Регистрация на платформах',
        "en": 'Platform Registration',
        "ch": '平台注册',
        "ar": 'كيفية التسجيل على منصات تقديم الدورات التدريبية عبر الإنترنت',
    },
    "h2_0":{ 
        "ru": 'План урока',
        "en": 'Themes',
        "ch": '課程計劃',
        "ar": 'خطة الدرس',
    },
    "contents":{ 
        "ru": '<li> <a class="page_lesson_contents" href="#h2_1" onclick="reloadPageForContents();"> Регистрация на платформе <a href="https://openedu.ru/"> «Открытое образование» </a> (он же ОпенЕду) </a></li>'+
               '<li><a class="page_lesson_contents" href="#h2_2" onclick="reloadPageForContents();">Регистрация на платформе <a href="https://exam1.urfu.ru/"> «Центр независимой оценки результатов обучения» </a> (он же exam1)</a></li>'+
               '<li><a class="page_lesson_contents" href="#h2_2" onclick="reloadPageForContents();">Регистрация на платформе <a href="https://elearn.urfu.ru">  «Портал электронного обучения» </a> (он же elearn)</a></li>'+
               '<li><a class="page_lesson_contents" href="#test" onclick="reloadPageForContents();">Проверка знаний 😉</a></li>',
        "en": '<li> <a class="page_lesson_contents" href="#h2_1" onclick="reloadPageForContents();">  Registration on the <a href="https://openedu.ru/">  "Открытое образование (Open Education)" </a> platform (also known as OpenEdu) </a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_2" onclick="reloadPageForContents();">Registration on the <a href="https://exam1.urfu.ru/"> "Центр независимой оценки результатов обучения (Center for Independent Assessment of Learning Outcomes)" </a> ( platform (also known as exam1) </a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_2" onclick="reloadPageForContents();"> Registration on the <a href="https://elearn.urfu.ru">  "Портал электронного обучения (Electronic Learning Portal)" </a>platform (also known as elearn) </a></li>'+
        '<li><a class="page_lesson_contents" href="#test" onclick="reloadPageForContents();"> Knowledge check 😉</a></li>',
        "ch": '<li> <a class="page_lesson_contents" href="#h2_1" onclick="reloadPageForContents();">  平台注册 <a href="https://openedu.ru/"> «Открытое образование» </a> （又名 OpenEdu) </a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_2" onclick="reloadPageForContents();">平台注册 <a href="https://exam1.urfu.ru/"> «Центр независимой оценки результатов обучения» </a> （又名 OpenEdu)</a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_2" onclick="reloadPageForContents();">平台注册 <a href="https://elearn.urfu.ru">  «Портал электронного обучения» </a> （又名 OpenEdu)</a></li>'+
        '<li><a class="page_lesson_contents" href="#test" onclick="reloadPageForContents();">知识测试 😉</a></li>',
        "ar": '<li> <a class="page_lesson_contents" href="#h2_1" onclick="reloadPageForContents();">  التسجيل على منصة (المعروف أيضًا باسم OpenEdu) <a href="https://openedu.ru/"> «Открытое образование» </a></a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_2" onclick="reloadPageForContents();">التسجيل على منصة (المعروف أيضًا باسم exam1)<a href="https://exam1.urfu.ru/"> «Центр независимой оценки результатов обучения» </a> </a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_2" onclick="reloadPageForContents();">  التسجيل على منصة (المعروفة أيضًا باسم elearn)(он же elearn)<a href="https://elearn.urfu.ru">  «Портал электронного обучения» </a></a></li>'+
        '<li><a class="page_lesson_contents" href="#test" onclick="reloadPageForContents();"> اختبار المعرفة 😉</a></li>',
    },
    "p_0":{ 
        "ru": 'Теперь тебе нужно зарегистрироваться на платформе проведения онлайн-курса!',
        "en": 'Now you need to register on the online course platforms!',
        "ch": '现在您需要在在线课程平台上注册！',
        "ar": 'الآن عليك التسجيل على منصات تقديم الدورة التدريبية عبر الإنترنت!',
    },
    "h2_1":{ 
        "ru": 'Регистрация на платформе <a href="https://openedu.ru/"> «Открытое образование» </a> (он же ОпенЕду)',
        "en": 'Registration on the <a href="https://openedu.ru/"> "Открытое образование (Open Education)" </a> platform (also known as OpenEdu)',
        "ch": '平台注册 <a href="https://openedu.ru/"> «Открытое образование» </a> （又名 OpenEdu)',
        "ar": '<a href="https://openedu.ru/"> «Открытое образование» </a> التسجيل على منصة (المعروف أيضًا باسم OpenEdu)',
    },
    "h2_1__p_0":{ 
        "ru": 'Если твой курс проходит на платформе «Открытое образование»:',
        "en": 'If your course is hosted on the "Открытое образование (Open Education)"platform:',
        "ch": '如果您的课程在 «Открытое образование» 平台上进行：',
        "ar": ':"Открытое образование" إذا كانت دورتك تعقد على منصة',
    },
    "h2_1__ul_0":{ 
        "ru": '<li>Зайди на сайт платформы, нажми поле «Вход», а затем – «Регистрация»</li>'+
        '<li>Зарегистрируйся: введи свои ФИО, придумай оригинальный логин и пароль</li>'+
        '<li>В графе «E-mail» укажи свою корпоративную почту с доменом @urfu.me</li>',
        "en": '<li>Go to the platforms website, select English language and click on "Login", and then "Register"</li>'+
        '<li>Register: enter your full name, come up with an original username and password</li>'+
        '<li>In the "E-mail" field, enter your corporate email with the @urfu.me domain</li>',
        "ch": '<li> 进入<a href="https://openedu.ru/">平台</a>网站，点击“Вход”字段，然后点击“Регистрация”</li>'+
        '<li> 注册：输入您的全名，创建原始登录名和密码</li>'+
        '<li>在“电子邮件”栏中，注明您的公司电子邮件，域名为@urfu.me</li>',
        "ar": '<li> "Зарегистрироваться" ، ثم انقر على "Войти" ، انقر على حقل  <a href="https://openedu.ru/">المنصة</a>        اذهب إلى موقع </li>'+
        '<li>قم بالتسجيل: أدخل اسمك الكامل، واختر اسم مستخدم وكلمة مرور مبتكرة</li>'+
        '<li>في حقل "البريد الإلكتروني"، ادخل بريدك الإلكتروني الخاص بالمؤسسة بمجال @urfu.me</li>',
    },
    "h2_1__p_1":{ 
        "ru": 'Обрати внимание: если у тебя уже был аккаунт на платформе, то всё равно нужно создать новый!',
        "en": 'Please note: if you already had an account on the platform, you still need to create a new one!',
        "ch": '请注意：如果您已经在平台上拥有一个帐户，您仍然需要创建一个新帐户！',
        "ar": 'تنبيه: إذا كان لديك بالفعل حساب على المنصة، فلا يزال من اللازم إنشاء حساب جديد!',
    },
    "h2_1__ul_1":{ 
        "ru": '<li>Отметь «Я - студент российского вуза», укажи вуз (если что, «Уральский федеральный университет имени первого президента России Б. Н. Ельцина») и год обучения</li>'+
        '<li>При необходимости подтверди регистрацию через почту. Сделать это можно через на платформе <a href="https://outlook.office.com">outlook.com</a></li>',
        "en": '<li>Check "I am a Russian university student", specify the university (if necessary, «Уральский федеральный университет имени первого президента России Б. Н. Ельцина») and the year of study</li>'+
        '<li>If necessary, confirm the registration via email. You can do this through the outlook.com platform.</li>',
        "ch": '<li> 勾选“我是俄罗斯大学的学生”，注明大学（如果有的话，“乌拉尔联邦大学以俄罗斯第一任总统叶利钦命名”）和学习年份</li>'+
        '<li> 如有必要，请通过电子邮件确认您的注册。 这可以通过<a href=" https://outlook.office.com/ "> outlook.com </a>平台完成</li>',
        "ar": '<li> اختر "أنا طالب في جامعة روسية"، وحدد الجامعة (إذا لم يكن لديك حساب، فجامعة "جامعة أورال الفيدرالية باسم أول رئيس لروسيا ب.ن. يلتسين") وسنة الدراسة</li>'+
        '<li>إذا لزم الأمر، قم بتأكيد التسجيل عبر البريد الإلكتروني. يمكنك القيام بذلك عبر منصة <a href="https://outlook.office.com/ "> outlook.com </a></li>',
    },
    "h2_2":{ 
        "ru": 'Регистрация на платформе <a class="inline-block" href="https://exam1.urfu.ru/"> «Центр независимой оценки результатов обучения» </a> (он же exam1) <br> Регистрация на платформе <a href="https://elearn.urfu.ru"> «Портал электронного обучения»</a> (он же elearn)',
        "en": 'Registration on the  <a href="https://exam1.urfu.ru/"> "Центр независимой оценки результатов обучения (Center for Independent Assessment of Learning Outcomes)" </a> platform (also known as exam1) <br> Registration on the  <a href="https://elearn.urfu.ru">  "Портал электронного обучения (Electronic Learning Portal)"</a> platform (also known as elearn)',
        "ch": '平台注册 <a class="inline-block" href="https://exam1.urfu.ru/"> «Центр независимой оценки результатов обучения» </a> （又名 OpenEdu) / • 平台注册 <a href="https://elearn.urfu.ru"> «Портал электронного обучения»</a> （又名 OpenEdu)',
        "ar": '<a class="inline-block" href="https://exam1.urfu.ru/"> «Центр независимой оценки результатов обучения» </a>التسجيل على منصة (المعروف أيضًا باسم exam1) / <a href="https://elearn.urfu.ru"> «Портал электронного обучения»</a> التسجيل على منصة (المعروفة أيضًا باسم elearn)',
    },
    "h2_2__p_0":{ 
        "ru": 'Если твой курс проходит на платформах «Центр независимой оценки результатов обучения» или «Портал электронного обучения»:',
        "en": 'If your course is conducted on the "Центр независимой оценки результатов обучения (Center for Independent Assessment of Learning Outcomes)"or the "Портал электронного обучения (Electronic Learning Portal)" platforms:',
        "ch": '如果您的课程在 «Центр независимой оценки результатов обучения» 或 «Портал электронного обучения» 平台上举办：',
        "ar": ': “Портал электронного обучения” أو  "Центр независимой оценки результатов обучения" إذا كانت دورتك تعقد على منصة',
    },
    "h2_2__ul_0":{ 
        "ru": '<li>Зайди на сайт <a href="https://exam1.urfu.ru/"> одной </a> из <a href="https://elearn.urfu.ru"> платформ</a>, нажми поле «Вход» и зайди через «Личный кабинет студента»</li>',
        "en": '<li> Go to the website of one of the platforms, select English language, click on the "Log in" field, and enter through the "Student Personal Account"</li>',
        "ch": '<li>进入<a href=" https://exam1.urfu.ru/ ">其中一个</a>  <a href=" https://elearn.urfu.ru/"> 平台</a>的网站，点击“登录”字段，通过“学生个人账户”登录</li>',
        "ar": '<li>، انقر على حقل "تسجيل الدخول" وادخل عبر "المنطقة الخاصة للطلاب" <a href="https://elearn.urfu.ru// "> المنصات</a>   <a href="https://exam1.urfu.ru/"> إحدى </a>  اذهب إلى موقع</li>',
    },
    "h2_2__p_1":{ 
        "ru": 'Так как обе платформы напрямую связаны с УрФУ, дополнительная регистрация не нужна',
        "en": 'Since both platforms are directly linked to Ural Federal University, additional registration is not required.',
        "ch": '由于两个平台都直接连接到 UrFU，因此无需额外注册',
        "ar": 'نظرًا لأن كلا المنصتين مرتبطتين مباشرة بجامعة أورال الفيدرالية، فلا حاجة للتسجيل الإضافي',
    },
    "test":{ //test
        "ru": 'Тест',
        "en": 'Test',
        "ch": '测试2',
        "ar": 'اختبار',
    },
    "after_test":{ //тест
        "ru": 'Супер! Теперь ты можешь приступить к записи на онлайн-курсы!',
        "en": 'Great! Now you can start signing up for online courses!',
        "ch": '极好的！ 现在您可以开始报名在线课程了！',
        "ar": 'الآن يمكنك البدء في التسجيل في الدورات عبر الإنترنت',
    },
};
