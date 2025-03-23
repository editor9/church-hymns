// Get elements from the DOM
const bookSelect = document.getElementById('book-select');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const imageInput = document.getElementById('image-input');
const imgElement = document.getElementById('selected-image');
const errorMessage = document.getElementById('error-message');
const categorySelect = document.getElementById('category-select');

let currentBook = 'img1'; // Default book folder

// List of hymns for each book
const hymns = {
    '1': [
        { number: 1, title: "سبحي رب الأعالي" },
        { number: 2, title: "خالق الأكوان" },
        { number: 3, title: "باهر السناء" },
        { number: 4, title: "لاسم فادي أغني هللي نفسي وغني" },
        { number: 5, title: "سبحان تلك العزة هللي نفسي وغني" },
        { number: 6, title: "للرب بارينا اسجدوا سبحوا الرحمان" },
        { number: 7, title: "سبحي يا نفس للرب الذي يا عباد الله لا تبغوا" },
        { number: 8, title: "لا اسم يحلو ذكره" },
        { number: 9, title: "إذ لا أرى وجه الحبيب" },
        { number: 10, title: "محبة الله سمت أشكر ذا الحب السني" },
        { number: 11, title: "إسم يسوع لي يطيب لي اسم يسوع حلا" },
    { number: 12, title: "أنت خلي ونصيبي قربك بغيتي" },
    { number: 13, title: "يا ليت لي ألف لسان" },
    { number: 14, title: "أفادي أنت لنفسي النصيب" },
    { number: 15, title: "إحمدوا الرب جهارا" },
    { number: 16, title: "هنا مكان راحتي قد جئت يا يسوع" },
    { number: 17, title: "أروم قربا" },
    { number: 18, title: "يسوع كل المشتهى" },
    { number: 19, title: "يا سيدي حين أرى نجومك نفسي تغني يا مخلصي" },
    { number: 20, title: "إني معظم لك اللهم إذ" },
    { number: 21, title: "من يعزيني كربي ليس من يدهش نفسي" },
    { number: 22, title: "إحمدوا الفادي جميعا" },
    { number: 23, title: "عند أقدام المسيح حيثما النهر جرى" },
    { number: 24, title: "باسم فادي أنادي لي خلاص لي خلاص بركات الرب عدد شاكرا" },
    { number: 25, title: "إن جود الله يدعو للسرور" },
    { number: 26, title: "هل لنا في الكون خل في يسوع لا سواه" },
    { number: 27, title: "مجرد الفكر بكا" },
    { number: 28, title: "لاسمك القدوس نهدي" },
    { number: 29, title: "ما أعظم الحب الذي محبة عظيمة علت" },
    { number: 30, title: "رجاء قلبي راسخ عليك يا صخر الأزل" },
    { number: 31, title: "حبيك يا ربي يزيد حبيك لا أنساه يا" },
    { number: 32, title: "إليك أبكر يا سيدي" },
    { number: 33, title: "يسوع وحده حوى" },
    { number: 34, title: "يا نفس قومي هللي" },
    { number: 35, title: "رنم لنا يا شادي" },
    { number: 36, title: "كنت أسيرا في الأثام في جلجثا ربي قضى" },
    { number: 37, title: "يا يسوع أنت نوري يا يسوع أنت نوري" },
    { number: 38, title: "يا نفس دوما سبحي اسم ربك" },
    { number: 39, title: "هذا هو اليوم الذي" },
    { number: 40, title: "كل مالي وحياتي كل ما عندي" },
    { number: 41, title: "لا تبعدي يا نفس عن في جنبه في جنبه الجريح" },
    { number: 42, title: "يا سيدي المصلوب سوف ترى العيون" },
    { number: 43, title: "كان للموت يسير" },
    { number: 44, title: "حب ربي وشفيعي" },
    { number: 45, title: "كم ذقت من عذاب" },
    { number: 46, title: "قد مضى الرب الى" },
    { number: 47, title: "علمي يقين يسوع لي" },
    { number: 48, title: "كنت في وادي الدموع يا يسوع أنت لي" },
    { number: 49, title: "كم أود أن أشيد بيسوعي ليس من يهتم بي كربي" },
    { number: 50, title: "ما أحسن الجموع" },
    { number: 51, title: "يا رب أقرب" },
    { number: 52, title: "لا إسم قد حلا" },
    { number: 53, title: "مثلما الإيل يشتاق إلى" },
    { number: 54, title: "كلما أذكر ربي" },
    { number: 55, title: "أقرب ما دمت إلى" },
    { number: 56, title: "يا له نبعا طهورا كل شكري للمسيح" },
    { number: 57, title: "يا لحب قد تجلى حب إلهي عجيب" },
    { number: 58, title: "حب يسوع الفادي حبه حلو ثمين" },
    { number: 59, title: "حفظا لما أوصى الحبيب" },
    { number: 60, title: "هل كان ذا لأجلي" },
    { number: 61, title: "يا رب كم عانيت من" },
    { number: 62, title: "أعد علي حديثا" },
    { number: 63, title: "حدثني الروايه حدثني الروايه" },
    { number: 64, title: "شخص أوجاع حقير" },
    { number: 65, title: "هل دمك الزكي" },
    { number: 66, title: "جند العلى الأطهار أوصن في الأعالي" },
    { number: 67, title: "بدم الفادي عبرت" },
    { number: 68, title: "يسوع نادى حينما" },
    { number: 69, title: "يسوع فادي العجيب" },
    { number: 70, title: "عيني ترى فوق الصليب" },
    { number: 71, title: "يا صاحب العرش الرهيب" },
    { number: 72, title: "مخلصي بالنعمة" },
    { number: 73, title: "هل كل ذا عني أنا عني أنا عني نعم" },
    { number: 74, title: "عني قضى ربي الحنون نعم قضى عن الجميع" },
    { number: 75, title: "علق الفادي على" },
    { number: 76, title: "يا حملا حقا حمل" },
    { number: 77, title: "لك يا ابن الله سلطان يا مسيح الله يا ابن مريم" },
    { number: 78, title: "هوذا قد صار ليل" },
    { number: 79, title: "إكليله مضفور" },
    { number: 80, title: "حين أرى صليب من" },
    { number: 81, title: "تحت الصليب الأكرم" },
    { number: 82, title: "خلني قرب الصليب في الصليب في الصليب" },
    { number: 83, title: "يا أيها الحب السني" },
    { number: 84, title: "قوموا نسبح كلنا لنا وسيط واحد" },
    { number: 85, title: "لاسم يسوع هللوا" },
    { number: 86, title: "على جبين المفتدي" },
    { number: 87, title: "في عرش فادينا البها" },
    { number: 88, title: "إن فادي المؤمنينا" },
    { number: 89, title: "رنم بلا ملل" },
    { number: 90, title: "لا يوجد اسم في السما فلاسم فادينا اسجدوا" },
    { number: 91, title: "ربنا يسوع نهدي" },
    { number: 92, title: "إنما الرب نصيبي" },
    { number: 93, title: "حمدا لرب مبدع الأكوان" },
    { number: 94, title: "يسوع أنت مشتهى" },
    { number: 95, title: "إن قلبي ليس يهوى هللويا هللويا" },
    { number: 96, title: "دمي الثمين قد" },
    { number: 97, title: "في الليلة التي بها" },
    { number: 98, title: "بحسب كلمة العلي" },
    { number: 99, title: "أعلن جهرا للملا" },
    { number: 100, title: "لو لم يحبني المسيح" },
    { number: 101, title: "سأغني بابتهاج سوف أشدو وأُغني" },
    { number: 102, title: "أذكروا لي اسم يسوع" },
    { number: 103, title: "سالكا سبل الضلال سبحوا هادي الأنام" },
    { number: 104, title: "يا نفس قد وافى يسوع أحلى نشيد في العلى" },
    { number: 105, title: "رب الحياة هل ترى حررني الفادي المسيح" },
    { number: 106, title: "المسيح اليوم قام هللويا" },
    { number: 107, title: "ظهرت جند الأعالي أبشروا قام المسيح" },
    { number: 108, title: "يا له يوما سعيدا" },
    { number: 109, title: "ها سرور وحبور" },
    { number: 110, title: "عند شق الفجر باكر أنت دست الموت وحدك" },
    { number: 111, title: "في اللحد قد قبر من لحدِه الرب قام" },
    { number: 112, title: "لست يا قبر بشي" },
    { number: 113, title: "يوما تعالى في الفضا هتاف عاش لحبي مات لذنبي" },
    { number: 114, title: "هلموا جميعا أيا جند المسيح" },
    { number: 115, title: "سوف يأتي في سحاب" },
    { number: 116, title: "هوذا ابن الله يأتي هوذا ابن الله يأتي" },
    { number: 117, title: "الليل منته دنا النهار ألليل منته دنا النهار" },
    { number: 118, title: "سوف يزول العمر إذ وجها لوجه سأراه" },
    { number: 119, title: "أمكث معي يا سيدي فامكث معي يا سيدي" },
    { number: 120, title: "لي مقام بهيج سنا نلتقي عن قريب" },
    { number: 121, title: "أنا لست إلا غريبا هنا" },
    { number: 122, title: "أحن اشتياقا لذاك الوطن هناك الرحوم" },
    { number: 123, title: "لك أهل باشتياق نرقب الملقى المجيدا" },
    { number: 124, title: "فوق في دار السلام يمسح الله الدموع" },
    { number: 125, title: "رتلوا حب يسوع حين ندخل السما" },
    { number: 126, title: "يسوع قد طال الغياب" },
    { number: 127, title: "سوف يمسح ربي الدموع مجدا له سوف نراه" },
    { number: 128, title: "أيها العاني الكئيب" },
    { number: 129, title: "قد مضى سيدي للسما يا لشوقي للسما" },
    { number: 130, title: "مشرق الشمس يمحو الآلام صبح مجيد يوم يجي" },
    { number: 131, title: "عند عبر النهر نهر نلتقي نلتقي" },
    { number: 132, title: "فارحا فارحا أمضي إلى" },
    { number: 133, title: "بعد الغروب صبح مجيد" },
    { number: 134, title: "إذا انقضت أيام تجريبي" },
    { number: 135, title: "سوف ينتهي العناء سوف نشدو بابتهاج" },
    { number: 136, title: "يكون الغداة أوان القيام يا لوقت سعيد" },
    { number: 137, title: "بدم الفادي مغسول أدخل الأبواب" },
    { number: 138, title: "فوق أطباق الغمام في السماء لا غيوم" },
    { number: 139, title: "سأرى وجه يسوع سأرى وجها لوجه" },
    { number: 140, title: "بعد أن نعاني سوف نشدو هاتفين" },
    { number: 141, title: "يا سيدي قد زايلت شمسي" },
    { number: 142, title: "قومي عروس الرب" },
    { number: 143, title: "برك يا رب ردا" },
    { number: 144, title: "أراك بالإيمان" },
    { number: 145, title: "مع ربنا الفادي" },
    { number: 146, title: "كيف هذا الليل هل" },
    { number: 147, title: "إن خصم النفس يشهر ها المسيح الرب قادم" },
    { number: 148, title: "قبل شق الفجر يوما" },
    { number: 149, title: "حين ينتهي عمري من ذا العالم المريع سوف أعرف حبيبي" },
    { number: 150, title: "من قدس أقداس البهاء الرب آت بالجلال" },
    { number: 151, title: "أنت صخري يا يسوع" },
    { number: 152, title: "قد صعد الرب إلى قوموا بألحان النشيد" },
    { number: 153, title: "أنجز إلهي قصدك بي" },
    { number: 154, title: "أفاض السلام كنهر جرى في أمان نفسي في أمان" },
    { number: 155, title: "أحبك يا رب يا قوتي" },
    { number: 156, title: "تحت جناحي القدير" },
    { number: 157, title: "لا تبتئس لا ترتعب يسوع أنت لي" },
    { number: 158, title: "يسوع أنت ربي" },
    { number: 159, title: "برأفة دعاني حبه دعاني" },
    { number: 160, title: "إن عدا جند الجحيم عاضدي المسيح" },
    { number: 161, title: "رب أحسن لي فأحيا أنت ربي نور قلبي" },
    { number: 162, title: "يا ترى أي صديق" },
    { number: 163, title: "إلى كلماتي اصغ يا سيدي" },
    { number: 164, title: "إليك حاجتي كل حاجتي إليكا" },
    { number: 165, title: "لمن ترى نذهب يا رب الورى" },
    { number: 166, title: "ما أبهج اليوم الذي حبي لفادي المجيد" },
    { number: 167, title: "إن تركي كل مالي" },
    { number: 168, title: "إني لك الدهرا" },
    { number: 169, title: "علمت أن الرب حي" },
    { number: 170, title: "كنت في سجن الخطايا" },
    { number: 171, title: "حب المخلص الورى الفادي" },
    { number: 172, title: "إذا بحر هذي الحياة اضطرب" },
    { number: 173, title: "إذا جن ليلي وغيم الهموم" },
    { number: 174, title: "لم أخاف حزنا أُرنم ابتهاجا" },
    { number: 175, title: "إذهب بي في بحور الحب سر بي إلى الآفاق" },
    { number: 176, title: "يسوع حبيبي نصيبي الرحيم أعن يا قدير أعن يا شفيع" },
    { number: 177, title: "أحيا لربي أعلي لواه يسوع ها حياتي" },
    { number: 178, title: "تحت جناحيه وجدت الأمنا يا ظلام الهول خيم" },
    { number: 179, title: "مع يسوع بأمان أذهب مع يسوع مع يسوع" },
    { number: 180, title: "كنت في حمأة الإثم والأقذار نلت غسل الدماء" },
    { number: 181, title: "في وسط أشواك البلاء أنا لا أنساكا" },
    { number: 182, title: "يا ليت لي أجنحة ملقين همكم عليه" },
    { number: 183, title: "أحببت أن سيدي" },
    { number: 184, title: "راع أمين ربي في خضرة العيش أزهو ناميا" },
    { number: 185, title: "كامل ناموس ربي أنت يا مولاي صخري" },
    { number: 186, title: "أمجد الآيات غنوا أمس واليوم ودوما" },
    { number: 187, title: "قابلا حمل صليبي" },
    { number: 188, title: "إذا مشيت في القفار" },
    { number: 189, title: "أنت ابتهاجي منيتي قصدي آمنتُ يا ربي فقو إيماني" },
    { number: 190, title: "حبيك زده يا" },
    { number: 191, title: "ما كان لي ربحا لقد حسبته" },
    { number: 192, title: "من ذا الذي يفصلنا" },
    { number: 193, title: "إن همت بالفادي المجيد" },
    { number: 194, title: "إسم يسوع قد حلا" },
    { number: 195, title: "باسم المسيح نجتمع سيروا بإنجيل الهدى" },
    { number: 196, title: "إلهي انتظرت انتظارا له" },
    { number: 197, title: "إنهضوا يا مؤمنونا أَنشدوا غنوا افتخارا" },
    { number: 198, title: "يا عسكر الرحمان من تجندوا مجدا مجدا هللويا" },
    { number: 199, title: "نفسي اسهري قامت" },
    { number: 200, title: "تحت راية القدير" },
    { number: 201, title: "عالمنا للرب عالمنا لربنا" },
    { number: 202, title: "ضللت في ليل الخطا نور، نور مالئ حشاي" },
    { number: 203, title: "أيا من به أستطيب الهناء" },
    { number: 204, title: "لقد كنت قبلا رهين القصاص منقذي من حمأتي انتشل" },
    { number: 205, title: "هل يستطيع الرب بي نعم نعم نعم يقول ربنا" },
    { number: 206, title: "في الضعف والآلام كفايتي نعماه" },
    { number: 207, title: "إن حاق بي اضطراب أرسيت في المسيح" },
    { number: 208, title: "الإعتراف صالح" },
    { number: 209, title: "ثابت على مواعيد يسوع ثابت ثابت" },
    { number: 210, title: "سوف تهمي البركات نحتاج غيثا" },
    { number: 211, title: "تعزيتي علم أبي كل الصعاب في علم الآب" },
    { number: 212, title: "إسم ربي برجي الحصين" },
    { number: 213, title: "أه ما أحلى اعتمادي يا يسوع يا رجائي" },
    { number: 214, title: "يا أيها الآب القدير" },
    { number: 215, title: "فديت بالدم الكريم فديت فديت" },
    { number: 216, title: "يا رب عرفني المزيد زدْ رب إرشادي" },
    { number: 217, title: "أنا محتاج لربي طالما الفادي قريب" },
    { number: 218, title: "صوت حبيبي أسمع أنت تهديني يا معين" },
    { number: 219, title: "إن عشت في الدنيا فقير يسوع مفتاح الغنى" },
    { number: 220, title: "مستسلم قلبي إلى الله مستسلم فكيف ينساني" },
    { number: 221, title: "يا أربع الرياح يا لي ملجأ حصين" },
    { number: 222, title: "كل القطيع راقد" },
    { number: 223, title: "مولاي زدني نعمة أَمسك يميني أيها القدير" },
    { number: 224, title: "خبر بفضل ربك إشهد له" },
    { number: 225, title: "هيأ الفادي الغداء قد دعاك للوليمه" },
    { number: 226, title: "عشت غافلا مدى السنين بررتني رحمة الرحيم" },
    { number: 227, title: "لست وحدي سائرا مع يسوع لا أهاب" },
    { number: 228, title: "إذ كنت في أسر الردى ما خاب لي أمل" },
    { number: 229, title: "كنت في بعدي عن سيدي أسرع الفادي لنجدتي" },
    { number: 230, title: "بإثمي أتيت لربي يسوع أخرجني من الحمأة" },
    { number: 231, title: "ها سلام الله لذ لي وطاب تم لي لي أكمل السلام" },
    { number: 232, title: "كلمن ربي قلبي ربي اهمس في أذني" },
    { number: 233, title: "أحيا لربي في سلام أعن فأقضي غربتي" },
    { number: 234, title: "أيا رب إن شئت ترسلني ها صوته يدوي هنا" },
    { number: 235, title: "عندما يكتنف النفس الظلام لست أخشى أبدا هول الردى" },
    { number: 236, title: "من للأسير العاني" },
    { number: 237, title: "إن أصابتني الرزايا" },
    { number: 238, title: "على يسوع الفادي" },
    { number: 239, title: "يا رب كن لي مرشدا" },
    { number: 240, title: "خذ بيدي وقدني" },
    { number: 241, title: "في حب ربي راسخ" },
    { number: 242, title: "يا مليك العالمين" },
    { number: 243, title: "ضل الورى في ظلمات الخطا سر إليه سناه يسفر" },
    { number: 244, title: "كنت مديون العلي قد قضى ديني" },
    { number: 245, title: "إسمعوا صوت السرور" },
    { number: 246, title: "بر سلام مع سرور هذا سلام المؤمنين" },
    { number: 247, title: "نرى في كلام الإله الصمد" },
    { number: 248, title: "يا رب ملجأ لنا" },
    { number: 249, title: "الرب راعي الغني" },
    { number: 250, title: "الرب نوري ومخلصي فمن" },
    { number: 251, title: "الله ملجأ لنا" },
    { number: 252, title: "الله ملجأ لنا وقوة" },
    { number: 253, title: "قبلا سألت الفادي" },
    { number: 254, title: "تراح نفسي أمنا تراح نفسي أمنا" },
    { number: 255, title: "يا إلهي اسمع صراخي يا إلهي اسمع صراخي" },
    { number: 256, title: "لا أبتغي مشيئتي" },
    { number: 257, title: "ربنا ينادي هيا للمسيح" },
    { number: 258, title: "يا لصوت رقيق شجي صداه ألمسيح يقول تعالوا إلي" },
    { number: 259, title: "أيها الخاطي الأثيم" },
    { number: 260, title: "إن تقت للخلاص من خطاك أنظر إلى الحمل" },
    { number: 261, title: "فادي الورى يدعوك" },
    { number: 262, title: "ضللت ببحر الحياة وكان تعال إلى الرب حصن الأمل" },
    { number: 263, title: "إسمع لداع يهيب بكا أقبِلِ الآن أقبل الآن" },
    { number: 264, title: "يا متعبا بالخطايا استمع يا لها من قوة سمت" },
    { number: 265, title: "ربي أغثني يا يسوع آتيا إلـيك" },
    { number: 266, title: "معرفة المسيح أقبل إلى يسوع" },
    { number: 267, title: "ضيعت يا ربي الهنا عائد عائد" },
    { number: 268, title: "سلمت نفسي في يديك قد قلت قبل الآن" },
    { number: 269, title: "بشرى الخلاص للبشر" },
    { number: 270, title: "يا نفس ما نفع البيوت يا شاردا عن دربه" },
    { number: 271, title: "هلا أتيت إلى المسيح" },
    { number: 272, title: "إسمعوا بشرى الظفر" },
    { number: 273, title: "يا خاطيء اسمعن ندا فلب الندا" },
    { number: 274, title: "يسوع ربي أحب الخطاه" },
    { number: 275, title: "صوت يسوع قائل" },
    { number: 276, title: "حالا تعالوا إلى المسيح كل من يتخذ المسيح" },
    { number: 277, title: "يا ثقيل الحمل أقبل" },
    { number: 278, title: "يا ميت الآثام" },
    { number: 279, title: "يا متعبا تعال" },
    { number: 280, title: "هلم هلم ادن يا مذنب" },
    { number: 281, title: "يا محبا مات عن جنس البشر" },
    { number: 282, title: "تراح نفسي الدهر إن" },
    { number: 283, title: "تهت عن القطيع" },
    { number: 284, title: "منك يا فادي الخطاة" },
    { number: 285, title: "كما أنا آتي إلى" },
    { number: 286, title: "أقبل إلى الفادي مفتدي الأنام" },
    { number: 287, title: "هو الرؤوف الراحم" },
    { number: 288, title: "ها يسوع اليوم يدعو" },
    { number: 289, title: "إذ كان جسمي فاني" },
    { number: 290, title: "يا أيها الخاطيء هل" },
    { number: 291, title: "رن صوت في الأعالي" },
    { number: 292, title: "فوق جلجثا أريقت فوق جلجثا أريقت" },
    { number: 293, title: "يا شعوب الأرض هبوا" },
    { number: 294, title: "أحضر هنا وأبهج الأرواحا" },
    { number: 295, title: "أحضر هنا يا ربنا" },
    { number: 296, title: "كما يسوع قد أتى" },
    { number: 297, title: "أحضر هنا يا ربنا" },
    { number: 298, title: "ما أسعد البيت الذي" },
    { number: 299, title: "يا ربنا إلهنا" },
    { number: 300, title: "يا ربنا اظهر بيننا بروحك الطهور" }
    ],
    '2': [
        { number: 1, title: "هللويا  هللويا  هللويا  سبحوا الله في قدسه" },
        { number: 2, title: "باركي يا نفسي الرب الذي يغفر كل اثامك" },
        { number: 3, title: "باركي يا نفسي الرب الذي يغفر ذنوبك" },
        { number: 4, title: "ابارك اسم الاب" },
        { number: 5, title: "علوت جدا ايها الرب الاله مجدا لك عزا لك" },
        { number: 6, title: "للرب قوموا وانشدوا" },
        { number: 7, title: "للرب بالروح اسجدوا" },
        { number: 8, title: "الله حب فالسما الله حب فالسما" },
        { number: 9, title: "ثناء لاب سما صنعه هللوا هللوا رددوا حمده" },
        { number: 10, title: "ايها القدوس يا رب الحياة" },
        { number: 11, title: "نصيبي هو الرب من لي سواه في السماء" },
        { number: 12, title: "نشكر كل حين ها هللويا مجدا" },
        { number: 13, title: "لؤلؤة نفيسة" },
        { number: 14, title: "يسوع ملك الملوك رئيس السلام مجدا هللويا" },
        { number: 15, title: "فرحت بالقائلين لي هناك نسجد نصلي نعبد" },
        { number: 16, title: "بمراحم ربي اغني من في السماء يعادله" },
        { number: 17, title: "والكلمة صار جسدا حقا راينا مجده راينا مجده" },
        { number: 18, title: "اخبرت عن حب قديم اعد علي اسمه" },
        { number: 19, title: "قصه الحب العجيب كان بالامس يجول" },
        { number: 20, title: "اسمعت قصة الصليب من اجلك ذاك الحبيب" },
        { number: 21, title: "فوق تل بعيد انني احيي ذكر الصليب" },
        { number: 22, title: "مستر عنه الوجوه يسوع يسوع فدائنا" },
        { number: 23, title: "يا ما اعجب حب الفادي عني سمر بالصليب" },
        { number: 24, title: "بحر محبة الفادي لا يحد قد فاق حبه قد زاد فضله" },
        { number: 25, title: "يا عجيبا في محبته العظيمة يا عجيبا مشيرا الها قديرا" },
        { number: 26, title: "حبيبي ايا من لاجل جرحت" },
        { number: 27, title: "يا سيدي كم كان قاسيا سالت ماء ذقت خلا" },
        { number: 28, title: "حدث عظيم يشغل السماء مجدا لك يا حمل الله الوديع" },
        { number: 29, title: "من انا يا رب حتى تحملن عني كم عجيب حبك يا سيدي" },
        { number: 30, title: "من انا يا رب لتذكرني فانا لا استحق لا استحق" },
        { number: 31, title: "من انا لاصير من شعبك مبارك اسم الرب" },
        { number: 32, title: "حب السيد فخر السجد ملك مجد قوة للفادي" },
        { number: 33, title: "بينما كنت غريقا احمدوه احمدوه" },
        { number: 34, title: "رفعت عيني للصليب مجدا لاسمه" },
        { number: 35, title: "بلطفه ناداني شخصه ناداني" },
        { number: 36, title: "ماذا ارد للرب الذي فدى لا شيء في لا شيء مني" },
        { number: 37, title: "اسمك ربي ما اعظم اسمك" },
        { number: 38, title: "انت ربي السامري ذو الصلاح كي ما اسعد معك" },
        { number: 39, title: "حين ارى حب يسوع اني اسير حبه" },
        { number: 40, title: "بحبه يسوع قد انقذني بحبه فداني ربي" },
        { number: 41, title: "هل ترى المفتدي معطي الحياه لكنه قام منتصرا" },
        { number: 42, title: "بقربك يا حبيبي يسوع" },
        { number: 43, title: "انا لست اشبع من حبيبي هللويا ما احلى يسوع" },
        { number: 44, title: "يسوع ما اجوده انظر اليه حاملا" },
        { number: 45, title: "في مجد في اول الفجر ما من نبي جاء ومات" },
        { number: 46, title: "بحنوط وباطياب قام ربي قام منتصرا" },
        { number: 47, title: "يا شعوب الارض هيا" },
        { number: 48, title: "يا له من منظر سام عظيم يجذب الابصار حبا واشتياق" },
        { number: 49, title: "يا رب انني غريب امين تعالى يا الهي" },
        { number: 50, title: "ايها السياح قولوا" },
        { number: 51, title: "قد تناهى الليل واختالت شموس صادق العهد امين في الوعود" },
        { number: 52, title: "دوى في الافق صوت بوق يا له مشهدا بديعا" },
        { number: 53, title: "صوت دوى يهلل ولنبقى دوما ساهرين" },
        { number: 54, title: "هل لقاء نجتنيه كيف لا والرب صرح" },
        { number: 55, title: "التقيكم في الصباح" },
        { number: 56, title: "فوق باب القبر نجم ايها الاموات قوموا" },
        { number: 57, title: "ملابسا بيضاء البس في السماء في ذي التخوم حيث الرحوم" },
        { number: 58, title: "يا من احتويتني في انتظارك اغني" },
        { number: 59, title: "يا سيدي احببتني" },
        { number: 60, title: "يا سيدي املا قلبي" },
        { number: 61, title: "يا رب ما احلى الحياة قربك كم انت حلو لحياتي يا يسوع" },
        { number: 62, title: "تحت ظلك حبيبي" },
        { number: 63, title: "يسوع انت كنزي العظيم" },
        { number: 64, title: "نفسي تتوق في كل يوم" },
        { number: 65, title: "ربي منقذي حبيبي ايها الرب حبيبي" },
        { number: 66, title: "يا الهي يا الهي ملء روحك حياتي" },
        { number: 67, title: "دعني يا الهي انمو بارتقاء" },
        { number: 68, title: "ربي اجعلني اشبه ابنك يسوع" },
        { number: 69, title: "علمني يا رب كيف اعيش" },
        { number: 70, title: "سيدي نفسي لديك سيدي ماذا تريد" },
        { number: 71, title: "لتكن لا ارادتي بل ارادتك فانت سيدي وانت قائدي" },
        { number: 72, title: "لا انا لا انا بل سيدي الوحيد لا انا لا انا بل انت يا يسوع" },
        { number: 73, title: "لا انسى يوما سيدي عند الصليب" },
        { number: 74, title: "لم ترى عين الها غيرك" },
        { number: 75, title: "ربي انت تستطيع كل شيء" },
        { number: 76, title: "ما دمت ربي في الطريق في الطريق انت لي" },
        { number: 77, title: "يا مسيحي بهجة الارض سراب سراب" },
        { number: 78, title: "ها حملي الثقيل ربي اعيا كاهلي" },
        { number: 79, title: "نفسي اقربي بالشوق من كرسي رحمته" },
        { number: 80, title: "اذ دخلت قدسك منيتي يا سيدي" },
        { number: 81, title: "اختبرتني الهي وعرفت داخلي" },
        { number: 82, title: "كللت السنه بجودك لك ينبغي التسبيح" },
        { number: 83, title: "قد علمتني النعمة احيا اعيش عقلا برا وتقوى" },
        { number: 84, title: "في ذي الحياة احيا لمن احبني" },
        { number: 85, title: "نني اسبى بحب جارف لا استطيع لا استطيع" },
        { number: 86, title: "مذ ربي قد اكرمني مجدا لمن محا الاثام" },
        { number: 87, title: "في هذه الحياة لا ابالي بالهموم" },
        { number: 88, title: "كفايتي في من فدى في عهد ربي راسخ" },
        { number: 89, title: "لست اعلم ما قد يكون في غدي" },
        { number: 90, title: "اجهل ما سوف ياتي لست ادري ما يكون" },
        { number: 91, title: "لا ادري من اين اتاني قلبي دوما يفيض سلام" },
        { number: 92, title: "متكئ راسي على صدره" },
        { number: 93, title: "سلام يسود حياتي انا فيه شخص جديد" },
        { number: 94, title: "امشي في النور كل الحياة نور سماوي نور سماوي" },
        { number: 95, title: "يقول ربي افرحوا كيف لا يفرح قلبي" },
        { number: 96, title: "لا انا بل المسيح قد تجسد لاجلي" },
        { number: 97, title: "من سيفصلنا عن محبة المسيح ليس شيء يفصلني" },
        { number: 98, title: "ان هاجت الانواء وهبت الرياح" },
        { number: 99, title: "استطيع كل شيء في المسيح" },
        { number: 100, title: "في هذه جميعها يا عظم انتصاري بيسوع ان تصادفني التجارب" },
        { number: 101, title: "في المسيح يعظم انتصاري" },
        { number: 102, title: "في موكب جيش الغالبين" },
        { number: 103, title: "نشيدي يعلو بالهتاف يسوع حي في" },
        { number: 104, title: "نرى في كلام الاله الصمد" },
        { number: 105, title: "الله الذي لنا ربنا لا ينسانا" },
        { number: 106, title: "ان كان الله معنا فهو لنا الخل الامين" },
        { number: 107, title: "يا جنود الرب هيا للقتال" },
        { number: 108, title: "احملوا الانجيل بشروا الانام فانيروا الكون بالانجيل" },
        { number: 109, title: "فكما قبلتم المسيح يسوع الرب في جدة الحياه" },
        { number: 110, title: "هلموا نودع عاما مضى السنا قطيعا صغيرا له" },
        { number: 111, title: "هيا ننسى ما وراء افرحوا في الرب" },
        { number: 112, title: "من يصلي مؤمنا بيسوع لا يخيب" },
        { number: 113, title: "ما اعظم الحب السني يا من سمعتم الندا" },
        { number: 114, title: "ناموس الرب كامل يرد النفس احكامك يا رب جميعها تجل" },
        { number: 115, title: "يا ابني لا تنسى شريعتي بل ليحفظ قلبك وصاياي" },
        { number: 116, title: "ان اتاك الشر فاهرب يا انسان الله اهرب" },
        { number: 117, title: "في سيرك في ذي الحياة هل فيك يرون يسوع" },
        { number: 118, title: "نريد ان نرى يسوع" },
        { number: 119, title: "اخي لماذا الحزن فهو يسوع رب الانام" },
        { number: 120, title: "القي على الرب همك فهو يعولك عندما يغشاك ليل" },
        { number: 121, title: "في مشهد ادمى العيون احببتكم للمنتهى" },
        { number: 122, title: "امجد الايات غنوا امسا واليوم دواما" },
        { number: 123, title: "قد مات بالصليب اني احبه اذ مات من اجلي" },
        { number: 124, title: "على صليب الجلجثه قد فاضت الدماء" },
        { number: 125, title: "كنت اعمى لا ارى اين طريقي يا الهي يا الهي صرخة" },
        { number: 126, title: "قد كنت في لوج الاثام" },
        { number: 127, title: "كنا قبلا في الخطايا سالكين لانه هو سلامنا" },
        { number: 128, title: "ماذا انا افعل كي اخلص امن بالرب يسوع المسيح" },
        { number: 129, title: "ان زرعت اليوم يا نفسي فسادا تبت والتوبه زينة" },
        { number: 130, title: "يا شاردا بالامس يا شاردا تعال" },
        { number: 131, title: "يا تائها في ذي الحياه هناك عبر النهر" },
        { number: 132, title: "ايها الاخ تامل في سبيل ذي الحياه كل ما في الارض فان" },
        { number: 133, title: "هل ثيابك بيضاء بالدم اخلص بالدم" },
        { number: 134, title: "ايها المدعو للعرس العظيم" },
        { number: 135, title: "يا سيدي ربي العظيم ما اعظم حبك لي" },
        { number: 136, title: "انني ربي عارف ذنبي اغسلني ربي بدما الصليب" },
        { number: 137, title: "ربي انت للتعابى هيا نحوي اقبلن" },
        { number: 138, title: "حب عظيم قد سمى" },
        { number: 139, title: "لم يات كي يديننا ان اسمه يسوع" }
    ]
};

// Categories for each book
const categories = {
    '1': [
        { value: 1, text: 'التسبيح والعبادة (56 - 1)' },
        { value: 2, text: 'الفداء (105 - 57)' },
        { value: 3, text: 'القيامة (114 - 106)' },
        { value: 4, text: 'السماء والمجيء الثاني (150 - 115)' },
        { value: 5, text: 'البنيان (256 - 151)' },
        { value: 6, text: 'الخلاص (293 - 257)' },
        { value: 7, text: 'الزواج (300 - 294)' },
        { value: 8, text: 'دليل الترانيم (315 - 301)' }
    ],
    '2': [
        { value: 1, text: 'التسبيح والعبادة (16 - 1)' },
        { value: 2, text: 'الفداء (44 - 17)' },
        { value: 3, text: 'القيامة (47 - 45)' },
        { value: 4, text: 'السماء والمجيء الثاني (57 - 48)' },
        { value: 5, text: 'البنيان (122 - 58)' },
        { value: 6, text: 'الخلاص (139 - 123)' },
        { value: 8, text: 'دليل الترانيم (143 - 140)' }
    ]
};

// Maximum hymn numbers for each book
const maxValues = {
    '1': 315,
    '2': 143
};

// Update the image based on input
function updateImage() {
    const value = parseInt(imageInput.value);
    const selectedBook = bookSelect.value;
    const maxValue = maxValues[selectedBook];

    if (value >= 1 && value <= maxValue) {
        imgElement.src = `img${selectedBook}/${value}.jpg`;
        imgElement.style.display = 'block';
        errorMessage.style.display = 'none'; // Hide error
    } else {
        imgElement.style.display = 'none';
        errorMessage.style.display = 'block'; // Show error
    }
}

// Handle number input
imageInput.addEventListener('input', function () {
    const value = parseInt(imageInput.value);
    const selectedBook = bookSelect.value;
    const maxValue = maxValues[selectedBook];

    if (isNaN(value) || value < 1 || value > maxValue) {
        errorMessage.style.display = 'block';
        imgElement.style.display = 'none';
    } else {
        errorMessage.style.display = 'none';
        updateImage();
    }
});

// Handle search input
searchInput.addEventListener('input', function () {
    const selectedBook = bookSelect.value;
    const query = searchInput.value.trim();
    searchResults.innerHTML = '<option value="">اختر ترنيمة...</option>';

    if (query.length > 0) {
        const filtered = hymns[selectedBook].filter(hymn => hymn.title.includes(query));

        filtered.forEach(hymn => {
            const option = document.createElement('option');
            option.value = hymn.number;
            option.textContent = `${hymn.title} (${hymn.number})`;
            searchResults.appendChild(option);
        });
    }
});

// When a hymn is selected from search results, update the input and image
searchResults.addEventListener('change', function () {
    if (searchResults.value) {
        imageInput.value = searchResults.value;
        updateImage();
    }
});

// Handle book selection change
bookSelect.addEventListener('change', function () {
    const selectedBook = bookSelect.value;
    currentBook = `img${selectedBook}`; // Update image folder

    // Reset input and image
    imageInput.value = '';
    searchInput.value = '';
    searchResults.innerHTML = '<option value="">اختر ترنيمة...</option>';
    imgElement.style.display = 'none';
    errorMessage.style.display = 'none';

    // Update max values and placeholder
    imageInput.placeholder = `1-${maxValues[selectedBook]}`;
    imageInput.max = maxValues[selectedBook];

    // Update categories dropdown
    updateCategories(selectedBook);
});

// Update categories dropdown based on book selection
function updateCategories(book) {
    categorySelect.innerHTML = ''; // Clear existing categories
    categories[book].forEach(category => {
        const option = document.createElement('option');
        option.value = category.value;
        option.textContent = category.text;
        categorySelect.appendChild(option);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
    bookSelect.value = '1';
    updateCategories('1');
    imageInput.placeholder = `1-${maxValues['1']}`;
    imageInput.max = maxValues['1'];
    errorMessage.style.display = 'none';
    imgElement.style.display = 'none';
});
