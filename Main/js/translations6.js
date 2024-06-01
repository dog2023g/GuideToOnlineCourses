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
                question: '1. 你不明白你是怎么得到这些课程成绩的，因为这不是你所期望的。你打算怎么办？',
                answers: ['	我将修改 记分制 中的系数，研究在线课程的评分系统',
                '我会对打出这些分数的人生气的。',
            '我会报告错误'],
                correct: 1,
              },],
            ar:[
                {
                    question: 'أنت لا تدرك كيف حصلت على هذه الدرجة في الدورة، لأن هذا ليس ما كنت تتوقعه. ما الذي ستفعله؟',
                    answers: ['إعادة النظر في المعاملات في نظام التقييم، والنظر في نظام تقدير الدرجات للمقررات عبر الإنترنت',
                    'الاعتراض على من أعطى مثل هذه الدرجات',
                'الإبلاغ عن خطأ'],
                    correct: 1,
                  },]
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
        "ch": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_6+'?lang=ch&"> 繼續第六課！</a></button>',
        "ar": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_6+'?lang=ar&">إلى الدرس السادس!</a></button>',
    },
    "to_lesson_7":{ 
        "ru": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_7+'?lang=ru&">К седьмому уроку!</a></button>',
        "en": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_7+'?lang=en&">To the seventh lesson!</a></button>',
        "ch": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_7+'?lang=ch&">"繼續第七課！</a></button>',
        "ar": '<button type="button" class="btn btn-success"> <a class="white_link" href="'+lesson_7+'?lang=ar&">إلى الدرس السابع!</a></button>',
    },
    "h1_0":{ 
        "ru": 'Перевод баллов',
        "en": 'Score Conversion',
        "ch": '积分转入',
        "ar": 'تحويل النقاط',
    },
    "h2_0":{ 
        "ru": 'План урока',
        "en": 'Themes',
        "ch": '課程計劃',
        "ar": 'خطة الدرس',
    },
    "contents":{ 
        "ru": '<li> <a class="page_lesson_contents" href="#h2_1" onclick="reloadPageForContents();">Смешанные курсы </a></li>'+
               '<li><a class="page_lesson_contents" href="#h2_2" onclick="reloadPageForContents();">Курсы на платформе «Открытое образование»</a></li>'+
               '<li><a class="page_lesson_contents" href="#test" onclick="reloadPageForContents();">Проверка знаний 😉</a></li>',
        "en": '<li> <a class="page_lesson_contents" href="#h2_1" onclick="reloadPageForContents();"> Mixed courses</a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_2" onclick="reloadPageForContents();">Courses on the "Открытое образование (Open Education)" platform</a></li>'+
        '<li><a class="page_lesson_contents" href="#test" onclick="reloadPageForContents();">Knowledge check 😉</a></li>',
        "ch": '<li> <a class="page_lesson_contents" href="#h2_1" onclick="reloadPageForContents();"> 混合课程</a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_2" onclick="reloadPageForContents();">openedu 平台上的课程</a></li>'+
        '<li><a class="page_lesson_contents" href="#test" onclick="reloadPageForContents();">知识测试 😉</a></li>',
        "ar": '<li> <a class="page_lesson_contents" href="#h2_1" onclick="reloadPageForContents();"> 	المقررات الدراسية المدمجة </a></li>'+
        '<li><a class="page_lesson_contents" href="#h2_2" onclick="reloadPageForContents();">	المقررات الدراسية على منصة التعليم المفتوح</a></li>'+
        '<li><a class="page_lesson_contents" href="#test" onclick="reloadPageForContents();">	التحقق من المعرفةالمقررات الدراسية المدمجة 😉</a></li>',
    },
    "h2_0__p_0":{ 
        "ru": 'Надеемся, ты справился с тестированием. Теперь ты узнаешь, как полученные тобой баллы за курс будут перенесены в БРС.',
        "en": 'We hope you did well on the test. Now you will learn how the scores you received for the course will be transferred to the students academic record.',
        "ch": '希望你在考试中表现出色。现在，您将知道您的课程成绩将如何转入 记分制。',
        "ar": 'نأمل أن تكون قد أبليت بلاءً حسناً في الاختبار. والآن ستتعرف على كيفية تحويل درجاتك في المقرر الدراسي إلى المعدل التراكمي.',
    },
    "h2_1":{ 
        "ru": 'Смешанные курсы',
        "en": 'Mixed courses',
        "ch": '混合课程',
        "ar": 'المقررات الدراسية المدمجة',
    },
    "h2_1__p_0":{ 
        "ru": 'Курсы предметов смешанного формата переводятся согласно коэффициентам в <a href="https://istudent.urfu.ru/s/servis-informirovaniya-studenta-o-ballah-brs"> БРС</a>. Причём прогресс и экзамен идут отдельно друг от друга.',
        "en": 'Courses in a mixed format are converted according to coefficients in the <a href="https://istudent.urfu.ru/s/servis-informirovaniya-studenta-o-ballah-brs">  BRS </a> (Point-Rating system). Progress and exams are separate from each other.',
        "ch": '混合形式科目的课程根据系数转换为 <a href="https://istudent.urfu.ru/s/servis-informirovaniya-studenta-o-ballah-brs"> 点数评级系统 </a>。进度和考试是分开的。',
        "ar": ' <a href="https://istudent.urfu.ru/s/servis-informirovaniya-studenta-o-ballah-brs"> БРС</a>  يتم نقل المقررات الدراسية للمواد ذات التنسيق المختلط وفقًا للمعاملات في  نظام تصنيف النقاط.  والتقدم والامتحان منفصلان عن بعضهما البعض.',
    },
    "h2_2":{ 
        "ru": 'Курсы на платформе «Открытое образование»',
        "en": 'Courses on the "Открытое образование (Open Education)" platform',
        "ch": 'openedu 平台上的课程',
        "ar": 'الدورات التدريبية على المنصة "openedu"',
    },
    "h2_2__p_0":{ 
        "ru": 'Онлайн-курсы как отдельный самостоятельный предмет, переводятся следующим образом:',
        "en": 'Online courses as a separate independent subject are transferred as follows:',
        "ch": '在线课程作为一门独立的课程，翻译如下：',
        "ar": 'تُترجم الدورات التدريبية عبر الإنترنت، كدورة منفصلة قائمة بذاتها، على النحو التالي:',
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
        "ch": '<li>在 记分制 中，考试和升学没有分开 </li>'+
        '<li> 从 UrFU 转来的课程与显示的成绩完全一致</li>'+
        '<li> 与评分系统相匹配的课程也会准确翻译成所显示的成绩</li>'+
        '<li> 分级制度不匹配的合作大学的课程根据公式进行转学：</li>',
        "ar": '<li>لا يوجد فصل بين الامتحان والتقدم في نظام تصنيف النقاط </li>'+
        '<li>يتم نقل المقررات الدراسية من UrFU مع عرض التقديرات بالضبط مع عرض الدرجات </li>'+
        '<li>يتم أيضًا نقل المقررات ذات نظام الدرجات المطابق تمامًا مع الدرجات المعروضة. </li>'+
        '<li>يتم نقل المقررات الدراسية من الجامعات الشريكة ذات أنظمة التقدير غير المتطابقة وفقًا للمعادلة:</li>',
    },
    "h2_2__p_1":{ 
        "ru": 'Где Бу – балл по 100-бальной шкале УрФУ',
        "en": 'Где Бу – score on the 100-point scale of Ural Federal University',
        "ch": '其中 Бу - UrFU 100 分制的得分',
        "ar": 'حيث Бу هي الدرجة على مقياس 100 نقطة لوحدة قياس مؤشر أورفو',
    },
    "h2_2__p_2":{ 
        "ru": '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Бп – балл по 100-бальной шкале вуза-партнера',
        "en": '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Бп – score on the 100-point scale of partner university',
        "ch": '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Бп  - 合作大学的 100 分评分标准',
        "ar": '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Бп - الدرجة على مقياس من 100 نقطة للجامعة الشريكة',
    },
    "h2_2__p_3":{ 
        "ru": '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Нп – значение нижней границы диапазона, соответствующего определённой оценке по   5-балльной шкале вуза-партнера',
        "en": '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Нп – value of the lower boundary of the range corresponding to a particular grade on the 5-point scale of the partner university',
        "ch": '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hп - 在合作大学的 5 分制中，某一等级所对应的范围下限值',
        "ar": '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Нп - قيمة الحد الأدنى للنطاق المقابل لدرجات معينة على مقياس من 5 نقاط للجامعة الشريكة',
    },
    "h2_2__p_4":{ 
        "ru": '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ну – значение нижней границы диапазона, соответствующего определённой оценке по   5-балльной шкале УрФУ',
        "en": '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ну – value of the lower boundary of the range corresponding to a particular grade on the 5-point scale of Ural Federal University',
        "ch": '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hу - UrFU 5 分制中某一等级对应的范围下限值',
        "ar": '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ну - قيمة الحد الأدنى للنطاق المقابل لدرجات معينة على مقياس من 5 نقاط للجامعة الشريكة.',
    },
    "h2_2__p_5":{ 
        "ru": '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; КЗп – количество значений в диапазоне, соответствующего той же оценке по  5-балльной шкале вуза-партнера',
        "en": '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;КЗп – number of values in the range corresponding to the same grade on the 5-point scale of the partner university',
        "ch": '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;КЗп - 在合作大学的 5 分制中，与相同分数相对应的范围内的数值数量',
        "ar": '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; КЗп - عدد القيم في النطاق المقابل لنفس الدرجة على مقياس من 5 نقاط للجامعة الشريكة.',
    },
    "h2_2__p_6":{ 
        "ru": '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; КЗу – количество значений в диапазоне, соответствующего той же оценке по  5-балльной шкале УрФУ',
        "en": '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; КЗу – number of values in the range corresponding to the same grade on the 5-point scale of Ural Federal University',
        "ch": '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; КЗу - 在 UrFU 5 分制中，与相同分数相对应的范围内数值的数量',
        "ar": '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; КЗу - عدد القيم في النطاق المقابل لنفس التقييم على مقياس UrFU المكون من 5 نقاط',
    },
    "h2_2__ul_1":{ 
        "ru": '<li>Формула выглядит сложно и непонятно, но это нормально. Главное – старайся набрать как можно больше баллов, чтобы не гадать, набрал ли на зачёт или нет.</li>',
        "en": '<li>The formula looks complicated and unclear, but its okay. The main thing is to try to score as many points as possible so that you dont have to guess if you passed the exam or not. </li>',
        "ch": '<li> 计算公式看起来既复杂又不清楚，不过没关系。最重要的是尽量多得分，这样就不用猜测自己是否得分了。</li>',
        "ar": '<li> </li>',
    },



    "test":{ 
        "ru": 'Тест',
        "en": 'Test',
        "ch": '测试6',
        "ar": 'الاختبار 6',
    },
    "after_test":{ 
        "ru": 'Отлично! Теперь пора приступать к следующему уроку!',
        "en": 'Great! Now its time to move on to the next lesson!',
        "ch": '偉大的！ 現在是時候開始下一課了！',
        "ar": 'عظيم! الآن حان الوقت لبدء الدرس التالي!',
    },
};
