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
              question: '1. 您的数据不在标识符字段中。 你会怎么做？',
              answers: [' 我将检查我的数据的正确性，并确保我可以开始注册',
              '我会因为一事无成而变得歇斯底里 ☹'],
              correct: 1,
            },
            {
                question: '提交申请后未立即激活对office.com的访问。 你的行动？',
                answers: ['我惊​​慌失措、大惊小怪',
                '我正在写信给技术支持以尽快获得访问权限！',
                ' 耐心等待36小时'],
                correct: 3,
              },
              {
                question: '收到公司邮件后，您...',
                answers: ['记住它，把它写在你的笔记中',
                ' 你会立即忘记她。 为什么还需要另一份？',],
                correct: 1,
              }],
            ar:[
                {
                  question: '1. لم يتم العثور على بياناتك في حقل المعرف. ماذا ستفعل؟',
                  answers: ['سأتحقق من صحة بياناتي، وسأتأكد أنه يمكنني البدء في التسجيل بالفعل',
                  'سأبدأ في الاستياء لأنه لا يوجد شيء ينجح ☹'],
                  correct: 1,
                },
                {
                    question: '2. لم يتم تنشيط الوصول إلى office.com على الفور بعد تقديم الطلب. ماذا ستفعل؟',
                    answers: ['أبدأ في الذعر والتشويش',
                    'أكتب إلى الدعم الفني للحصول على الوصول في أسرع وقت ممكن!',
                    ' أنتظر بصبر لمدة 36 ساعة'],
                    correct: 3,
                  },
                  {
                    question: '3. بعد الحصول على البريد الإلكتروني التابع للشركة، أنت',
                    answers: [' سأتذكره، وسأقوم بتثبيته في الملاحظات',
                    ' سأنسى عنه على الفور. لماذا أحتاج إلى واحد آخر؟',],
                    correct: 1,
            }]
    };

const language={
    "link_our_name":{ 
        "ru": '<a class="navbar-brand" href="'+toMain+'"><img src="img/seal_12890965.png" alt="&nbspТюлени Свободы" width="50" height="50"></a>',
        "en": '<a class="navbar-brand" href="'+toMain+'?lang=en&"><img src="img/seal_12890965.png" alt="&nbspRadio Seals" width="50" height="50"></a>',
        "ch": '<a class="navbar-brand" href="'+toMain+'?lang=ch&"><img src="img/seal_12890965.png" alt="&nbsp自由印章" width="50" height="50"></a>',
        "ar": '<a class="navbar-brand" href="'+toMain+'?lang=ar&"><img src="img/seal_12890965.png" alt="&nbspأختام الحرية" width="50" height="50"></a>'
    },
    "link_name":{ 
        "ru": '<a class="nav-link active" aria-current="page" href="'+toMain+'">Главная</a>',
        "en": '<a class="nav-link active" aria-current="page" href="'+toMain+'?lang=en&">Main</a>',
        "ch": '<a class="nav-link active" aria-current="page" href="'+toMain+'?lang=ch&">首頁</a>',
        "ar": '<a class="nav-link active" aria-current="page" href="'+toMain+'?lang=ar&">بيت</a>'
    },
    "link_lessons":{ 
        "ru": '<a class="nav-link" href="'+lessons+'?lang=ru&#to_lessons">Уроки</a>',
        "en": '<a class="nav-link" href="'+lessons+'?lang=en&#to_lessons">Lessons</a>',
        "ch": '<a class="nav-link" href="'+lessons+'?lang=ch&#to_lessons">教訓</a>',
        "ar": '<a class="nav-link" href="'+lessons+'?lang=ar&#to_lessons">دروس</a>'
    },
    "link_about_us":{ 
        "ru": '<a class="nav-link" href="'+aboutUs+'?lang=ru&#footer">О нас</a>',
        "en": '<a class="nav-link" href="'+aboutUs+'?lang=en&#footer">About us</a>',
        "ch": '<a class="nav-link" href="'+aboutUs+'?lang=ch&#footer">關於我們</a>',
        "ar": '<a class="nav-link" href="'+aboutUs+'?lang=ar&#footer">معلومات عنا</a>'
    },
    "searchForm":{ 
        "ru": '<label for="searchInput"></label>'+
        '<input class="form-control me-2" type="search" placeholder="Например: Exam2" id="searchInput" name="searchInput" autocomplete="off">'+
        '<button style="display: none;" class="btn btn-outline-success" type="submit">Найти</button>'+
        '<div id="searchResultsDropdown" class="position-absolute bg-white shadow-sm border" style="display: none; top: calc(90% + 5px); width: 100%;"></div>',
        "en": '<label for="searchInput"></label>'+
        '<input class="form-control me-2" type="search" placeholder="For example: Exam2" id="searchInput" name="searchInput" autocomplete="off">'+
        '<button style="display: none;" class ="btn btn-outline-success" type="submit">Find</button>'+
        '<div id="searchResultsDropdown" class="position-absolute bg-white shadow-sm border" style="display: none; top: calc(90% + 5px); width: 100%;"></div>',
        "ch": '<label for="searchInput"></label>'+
        '<input class="form-control me-2" type="search" placeholder="例如：考試2" id="searchInput" name="searchInput" autocomplete="off">'+
        '<button style="display: none;" class ="btn btn-outline-success" type="submit">尋找</button>'+
        '<div id="searchResultsDropdown" class="position-absolute bg-white shadow-sm border" style="display: none; top: calc(90% + 5px); width: 100%;"></div>',
        "ar": '<label for="searchInput"></label>'+
        '<input class="form-control me-2" type="search" placeholder="على سبيل المثال: الامتحان 2" id="searchInput" name="searchInput" autocomplete="off">'+
        '<button style="display: none;" class ="btn btn-outline-success" type="submit">يجد</button>'+
        '<div id="searchResultsDropdown" class="position-absolute bg-white shadow-sm border" style="display: none; top: calc(90% + 5px); width: 100%;"></div>',
    },
    "linkAdmin":{ 
        "ru": '<button class="btn btn-outline-success" type="submit" >Админ-панель</button>',
        "en": '',
        "ch": '',
        "ar": ''
    },
    "link_openedu":{ 
        "ru": '<a class="nav-link" href="'+openedu+'">OpenEdu (Открытое образование)</a>',
        "en": '<a class="nav-link" href="'+openedu+'">OpenEdu (Открытое образование (Open Education) platform)</a>',
        "ch": '<a class="nav-link" href="'+openedu+'">OpenEdu</a>',
        "ar": '<a class="nav-link" href="'+openedu+'">OpenEdu</a>'
    },
    "link_elearn":{
        "ru": '<a class="nav-link" href="'+elern+'">elearn (Портал электронного обучения)</a>',
        "en": '<a class="nav-link" href="'+elern+'">elearn (Electronic Learning Portal)</a>',
        "ch": '<a class="nav-link" href="'+elern+'">elearn</a>',
        "ar": '<a class="nav-link" href="'+elern+'">elearn</a>',
    },
    "link_exam1":{ 
        "ru": '<a class="nav-link" href="'+exam1+'">Exam1 (Центр независимой оценки результатов обучения)</a>',
        "en": '<a class="nav-link" href="'+exam1+'">Exam1 (Center for Independent Assessment of Learning Outcomes)</a>',
        "ch": '<a class="nav-link" href="'+exam1+'">Exam1</a>',
        "ar": '<a class="nav-link" href="'+exam1+'">Exam1</a>',
    },
    "link_exam2":{
        "ru": '<a class="nav-link" href="'+exam2+'">Exam2</a>',
        "en": '<a class="nav-link" href="'+exam2+'">Exam2</a>',
        "ch": '<a class="nav-link" href="'+exam2+'">Exam2</a>',
        "ar": '<a class="nav-link" href="'+exam2+'">Exam2</a>',
    },
    "h1_footer":{
        "ru": 'Полезные ссылки',
        "en": 'Useful links',
        "ch": '有用的網站鏈接',
        "ar": 'روابط مفيدة للمواقع',
    },
    "h2_footer":{
        "ru": 'Учебные платформы:',
        "en": 'Educational platforms:',
        "ch": '培訓平台：',
        "ar": 'منصات التدريب:',
    },
    "footer_images":{
        "ru": 'Изображения:',
        "en": 'Images:',
        "ch": '圖片：',
        "ar": 'الصور:',
    },
    "footer_about_us":{
        "ru": 'О нас:',
        "en": 'About Us:',
        "ch": '關於我們：',
        "ar": 'معلومات عنا',
    },
    "footer_about_us_p1":{
        "ru": 'Расскажем немного про себя. Наша команда «Тюлени Свободы» была создана в 2023 для создания классных программных продуктов',
        "en": 'Lets tell you a little about ourselves. Our team "RadioSeals" was created in 2023 to create cool software products',
        "ch": '讓我們向您介紹一下我們自己。 我們的團隊「RadioSeals」成立於 2023 年，致力於創造酷炫的軟體產品',
        "ar": 'دعنا نخبرك قليلاً عن أنفسنا. تم إنشاء فريقنا "RadioSeals" في عام 2023 لإنشاء منتجات برمجية رائعة',
    },
    "to_lesson_1":{
        "ru": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_1+'?lang=ru&">К первому уроку!</a></button>',
        "en": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_1+'?lang=en&">To the first lesson!</a></button>',
        "ch": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_1+'?lang=ch&">進入第一課！</a></button>',
        "ar": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_1+'?lang=ar&">إلى الدرس الأول!</a></button>',
    },
    "to_lesson_2":{ 
        "ru": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_2+'?lang=ru&">Ко второму уроку!</a></button>',
        "en": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_2+'?lang=en&">To the second lesson!</a></button>',
        "ch": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_2+'?lang=ch&">繼續第二課！</a></button>',
        "ar": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_2+'?lang=ar&">إلى الدرس الثاني!</a></button>',
    },
    "to_lesson_3":{ 
        "ru": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_3+'?lang=ru&">К третьему уроку!</a></button>',
        "en": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_3+'?lang=en&">To the third lesson!</a></button>',
        "ch": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_3+'?lang=ch&">繼續第三課！</a></button>',
        "ar": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_3+'?lang=ar&">إلى الدرس الثالث!</a></button>',
    },
    "to_lesson_4":{ 
        "ru": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_4+'?lang=ru&">К четвертому уроку!</a></button>',
        "en": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_4+'?lang=en&">To the fourth lesson!</a></button>',
        "ch": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_4+'?lang=ch&">繼續第四課</a></button>',
        "ar": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_4+'?lang=ar&">إلى الدرس الرابع!</a></button>',
    },
    "to_lesson_5":{ 
        "ru": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_5+'?lang=ru&">К пятому уроку!</a></button>',
        "en": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_5+'?lang=en&">To the fifth lesson!</a></button>',
        "ch": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_5+'?lang=ch&">繼續第五課！</a></button>',
        "ar": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_5+'?lang=ar&">إلى الدرس الخامس!</a></button>',
    },
    "to_lesson_6":{ 
        "ru": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_6+'?lang=ru&">К шестому уроку!</a></button>',
        "en": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_6+'?lang=en&">To the sixth lesson!</a></button>',
        "ch": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_6+'?lang=ch&>"繼續第六課！</a></button>',
        "ar": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_6+'?lang=ar&">إلى الدرس السادس!</a></button>',
    },
    "to_lesson_7":{
        "ru": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_7+'?lang=ru&">К седьмому уроку!</a></button>',
        "en": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_7+'?lang=en&">To the seventh lesson!</a></button>',
        "ch": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_7+'?lang=ch&"繼續第七課！</a></button>',
        "ar": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_7+'?lang=ar&">إلى الدرس السابع!</a></button>',
    },
    "h1_0":{ 
        "ru": 'Регистрация почты УрФУ',
        "en": 'Registration of URFU Mail',
        "ch": 'UrFU邮件注册',
        "ar": 'الدرس 1',
    },
    "h2_0":{ 
        "ru": 'План урока',
        "en": 'Themes',
        "ch": '課程計劃',
        "ar": 'خطة الدرس',
    },
    "contents":{ 
        "ru": '<li> <a class="page_lesson_contents" href="#h2_1" onclick="reloadPageForContents();"> Как завести личный кабинет УрФУ? </a></li>'+
               '<li><a class="page_lesson_contents" href="#h2_2" onclick="reloadPageForContents();">Как получить доступ к office.com и своей почте?</a></li>'+
               '<li><a class="page_lesson_contents" href="#test" onclick="reloadPageForContents();">Проверка знаний 😉</a></li>',
        "en": '<li> <a class="page_lesson_contents" href="#h2_1" onclick="reloadPageForContents();"> How to create a personal account at UrFU?</a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_2" onclick="reloadPageForContents();">How to get access to office.com and your email?</a></li>'+
        '<li><a class="page_lesson_contents" href="#test" onclick="reloadPageForContents();">Knowledge check 😉</a></li>',
        "ch": '<li> <a class="page_lesson_contents" href="#h2_1" onclick="reloadPageForContents();"> 如何在UrFU 创建个人帐户？ </a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_2" onclick="reloadPageForContents();">如何访问office.com 和您的邮件？</a></li>'+
        '<li><a class="page_lesson_contents" href="#test" onclick="reloadPageForContents();"> 知识测试😉</a></li>',
        "ar": '<li> <a class="page_lesson_contents" href="#h2_1" onclick="reloadPageForContents();"> كيفية إنشاء حساب طالب في جامعة الفيدرالية الأورالية؟ </a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_2" onclick="reloadPageForContents();">كيفية الوصول إلى office.com وبريدك الإلكتروني؟</a></li>'+
        '<li><a class="page_lesson_contents" href="#test" onclick="reloadPageForContents();"> فحص المعرفة 😉</a></li>',
    },
    "h2_1":{ 
        "ru": 'Как завести личный кабинет УрФУ?',
        "en": 'How to create a personal account at UrFU?',
        "ch": '如何在UrFU 创建个人帐户？',
        "ar": 'كيفية إنشاء حساب طالب في جامعة الفيدرالية الأورالية؟',
    },
    "h2_1__p_0":{ 
        "ru": 'Первым делом тебе необходимо завести личный кабинет УрФУ, учетную запись студента УрФУ. Для этого:',
        "en": 'First of all, you need to create a personal account at UrFU, a student account at UrFU. To do this:',
        "ch": '首先，您需要创建一个UrFU个人帐户，即UrFU学生帐户。 为了这：',
        "ar": 'أولاً، يجب عليك إنشاء حساب طالب في جامعة الفيدرالية الأورالية، حساب طالب في جامعة الفيدرالية الأورالية. للقيام بذلك:',
    },
    "h2_1__ul_0":{ 
        "ru": '<li>Зайди на сайт идентификации <a href="https://id.urfu.ru/AccessManagement/Identify/GetAccount">id.urfu.ru</a>.</li>',
        "en": ' <li>Go to the identification site  <a href="https://id.urfu.ru/AccessManagement/Identify/GetAccount">id.urfu.ru</a>.  </li>',
        "ch": ' <li> 访问身份识别网站 <a href=" https://id.urfu.ru/AccessManagement/Identify/GetAccount "> id.urfu.ru </a>。   </li>',
        "ar": ' <li>  <a href="https://id.urfu.ru/AccessManagement/Identify/GetAccount"> id.urfu.ru </a> انتقل إلى موقع التحقق من الهوية  </li>',
    },
    "h2_1__ul_1":{ 
        "ru": '<li>В поле «Идентификатор» введи свои контактные данные из списка.</li>'+
        '<li>Найди себя, пройди аутентификацию и зарегистрируйся на портале.</li>',
        "en": '<li>In the "Identifier" field, enter your contact information from the list.</li>'+
                '<li> Find yourself, authenticate, and register on the portal.</li>',
        "ch": '<li> 在“标识符”字段中，输入列表中您的联系信息。</li>'+
        '<li>在门户上找到自己、进行身份验证并注册。</li>',
        "ar": '<li>في الحقل "المعرف"، أدخل بيانات الاتصال الخاصة بك من القائمة.</li>'+
        '<li>ابحث عن نفسك، وقم بالمصادقة والتسجيل على البوابة</li>',
    },
    "h2_1__p_1":{ 
        "ru": 'Поздравляем! Теперь у тебя есть свой личный кабинет!',
        "en": 'Congratulations! Now you have your own personal account!',
        "ch": '恭喜！ 现在您拥有自己的个人帐户了！',
        "ar": 'تهانينا! الآن لديك حساب شخصي!',
    },
    "h2_2":{ 
        "ru": 'Как получить доступ к office.com и своей почте?',
        "en": 'How to access office.com and your email?',
        "ch": '如何访问office.com 和您的邮件？',
        "ar": 'كيفية الوصول إلى office.com وبريدك الإلكتروني؟',
    },
    "h2_2__p_0":{ 
        "ru": 'Далее тебе необходимо получить личную корпоративную почту от УрФУ. Для этого:',
        "en": 'Next, you need to get your personal corporate email from Ural Federal University. To do this:',
        "ch": '接下来，您需要接收来自 UrFU 的个人公司邮件。 为了这：',
        "ar": 'بعد ذلك، يجب عليك الحصول على بريد إلكتروني تابع لجامعة الفيدرالية الأورالية. للقيام بذلك:',
    },
    "h2_2__ul_0":{ 
        "ru": '<li>Пройди на соответствующую <a href="https://office365.urfu.ru/">страницу</a> и войди в аккаунт студента УрФУ.</li>'+
        '<li>Далее необходимо получить доступ к сервисам Microsoft Office 365. На странице будет кнопка «Перейти к активации», нажми на неё. На новой странице ознакомься с соглашениями и нажми на «Активировать». В течении 36 часов заявка будет одобрена.</li>',
        "en": '<li>Go to the corresponding <a href="https://office365.urfu.ru/">page</a> and log in to the Ural Federal University student account.</li>'+
        '<li>Next, you need to access Microsoft Office 365 services. On the page, there will be a pink button "Activate", click on it. Within 36 hours, the request will be approved.</li>',
        "ch": '<li>转至相应<a href="https://office365.urfu.ru/">页</a>面并登录您的乌拉尔联邦大学学生帐户。</li>'+
        '<li> 接下来，您需要访问Microsoft Office 365 服务，页面上将出现“继续激活”按钮，单击它。 在新页面上，阅读协议并点击“激活”。 申请将在 36 小时内获得批准。</li>',
        "ar": '<li>المناسبة وقم بتسجيل الدخول إلى حساب طالب في جامعة الفيدرالية الأورالية. <a href="https://office365.urfu.ru/ ">الصفحة </a> انتقل إلى</li>'+
        '<li> بعد ذلك، يجب الحصول على وصول إلى خدمات Microsoft Office 365. ستجد زر "الانتقال إلى التنشيط" على الصفحة. انقر فوقه. على الصفحة الجديدة، اطلع على الاتفاقيات وانقر على "تنشيط". سيتم الموافقة على الطلب في غضون 36 ساعة</li>',
    },
    "h2_2__ul_1":{ 
        "ru": '<li>Когда доступ будет активирован, на этой же странице снова будет розовая кнопка «Перейти к использованию сервиса». Нажав на неё, ты попадёшь на портал <a href="https://www.microsoft365.com/">office.com</a>. Выполнив минимальные настройки, ты наконец получишь доступ к некоторым веб-приложениям и персональную почту с доменом @urfu.me.</li>',
        "en": '<li>When the access is activated, on the same page, there will be a pink button "Перейти к использованию сервиса" again. By clicking on it, you will go to the <a href="https://www.microsoft365.com/">office.com</a> portal. After making minimal settings, you will finally get access to some web applications and personal email with the @urfu.me domain</li>',
        "ch": '<li>激活访问后，同一页面上将再次出现粉红色的 "Перейти к использованию сервиса" 按钮。 单击它将带您进入 <a href=" https://www.microsoft365.com/ "> office.com </a>门户。 完成最少的设置后，您最终将可以访问一些带有 @urfu.me 域的 Web 应用程序和个人邮件。</li>',
        "ar": '<li><a href="https://www.microsoft365.com/ ">office.com </a>عندما يتم تنشيط الوصول، ستجد زرًا ورديًا مع تعليمات "الانتقال إلى استخدام الخدمة" "Перейти к использованию сервиса" على نفس الصفحة. بعد النقر عليه، ستصل إلى بوابة بعد إجراء الإعدادات الأدنى، ستحصل أخيرًا على وصول إلى بعض التطبيقات الويب وبريدك الإلكتروني الشخصي بنطاق @urfu.me.</li>',
    },
    "h2_2__p_1":{ 
        "ru": 'Запомни её! Она пригодится на следующем этапе.',
        "en": 'Remember it! It will come in handy at the next stage.',
        "ch": '记住它！ 这将在下一步中有用。',
        "ar": 'تذكرها! ستكون مفيدة في المرحلة التالية.',
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
        "ch": '测试1',
        "ar": 'اختبار',
    },
    "after_test":{ 
        "ru": 'Отлично! Теперь пора приступать к следующему этапу!',
        "en": 'Great! Now its time to move on to the next stage!',
        "ch": '伟大的！ 现在是时候进入下一阶段了！',
        "ar": 'رائع! الآن حان الوقت للانتقال إلى المرحلة التالية!',
    },
};
