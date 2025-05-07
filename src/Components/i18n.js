// i18Next
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).use(initReactI18next).init(
    {
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    // Header
                    welcome:"Welcome",
                    home:"Home",
                    products:"Products",
                    aboutUs:"About Us",
                    contactUs:"Contact Us",
                    cart:"Cart",
                    checkout:"Checkout",
                    english:"English",
                    arabic:"Arabic",
                    egp:"EGP",
                    usd:"USD",
                    selectCurrency:"Select Currency",
                    selectLanguage:"Select Language",
                    logout:"Logout",
                    login:"Login",
                    search:"Search",
                    searchAlert:"Search Field is Empty! enter your desire or exit",

                    // Footer
                    faq:"FAQ",
                    subscribeournewsletter:"Subscribe our newsletter",
                    subscribe:"Subscribe",
                    usefullinks:"Useful Links",
                    productcategories:"Product Categories",
                    rights:"2023 All Rights Reserved by Yasmine El-Ashry",

                    // Login
                    logintoyouraccount:"Login To Your Account",
                    username:"UserName",
                    password:"Password",
                    incorrectusernameorpassword:"Incorrect Username Or Password",

                    // Home
                    checkoutallyourneeds:"Checkout all your needs !",
                    mensfashionsale:"Men's Fashion Sale !",
                    womensfashionsale:"Women's Fashion Sale !",
                    electronicssale:"Electronics Sale !",
                    shopnow:"Shop Now",
                    exclusiveproducts:"Exclusive Products",
                    ourclientsay:"Our Client Say",
                    lissacastro:"Lissa Castro",
                    designer:"Designer",
                    johnbecker:"John Becker",
                    cheifofficer:"Cheif Officer",
                    aldensmith:"Alden Smith",
                    artist:"Artist",
                    lorem:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.",
                    freedelivery:"Free Delivery",
                    ifyouaregoingtouseofLoremyouneedtobesurethereanything:"If you are going to use of Lorem, you need to be sure there anything",
                    dayreturn:"30 Days Return",
                    support:"24/7 Support",

                    // Products
                    ourproducts:"Our Products",
                    categories:"Categories",

                    // Product Card
                    viewproduct:"View Product",
                    removefromcart:"Remove From Cart",
                    addtocart:"Add To Cart",

                    // Single Product
                    productdetails:"Product Details",

                    // About Us
                    whoweare:"Who We Are",
                    shortlorem:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                    whychooseus:"Why Choose Us ?",
                    creativedesign:"Creative Design",
                    flexiblelayouts:"Flexible Layouts",
                    emailmarketing:"Email Marketing",
                    chooseUsDescription:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
                
                    // Contact Us
                    entername:"Enter Name",
                    enteremail:"Enter Email",
                    enterphoneno:"Enter Phone No.",
                    entersubject:"Enter Subject",
                    message:"Message",
                    getintouch:"Get In Touch",
                    messagesent:"Message Sent",
                    pleasefillallinputfieldstocontinue:"Please fill all input fields to continue",
                    sendmessage:"Send Message",
                    here:"Here",

                    // Cart
                    yourcart:"Your Cart",
                    noitemsaddedyet:"No Items Added Yet !",
                    cart_addtocart:"Add To Cart ?",
                    product:"Product",
                    price:"Price",
                    remove:"Remove",
                    totalprice:"Total Price",
                    checkout:"Checkout",

                    // Checkout
                    checkout:"Check Out !",
                    arizona:"Arizona",
                    egypt:"Egypt",
                    ireland:"Ireland",
                    indiana:"Indiana",
                    unitedstates:"United States",
                    texas:"Texas",
                    firstname:"First Name",
                    lastname:"Last Name",
                    citytown:"City / Town",
                    postcodezip:"Postcode / ZIP",
                    address:"Address",
                    phone:"Phone",
                    emailaddress:"Email Address",
                    yourorderwassuccesfullymade:"Your Order Was Successfully Made",
                    continueshopping:"Continue Shopping",
                    billingdetails:"Billing Details",
                    yourorders:"Your Orders",
                    totalproductsprice:"Total Products Price",
                    pleaseadditemstoberepresentedhere:"Please Add Items To Be Represented Here",
                    paymentmethod:"Payment Method",
                    bankaccount:"Bank Account",
                    mobilecash:"Mobile Cash",
                    cashondelivery:"Cash On Delivery",
                    youwillpaythefullamountwhenthepackagearrives:"You will pay the full amount when the package arrives.",
                    pleasemakesurethatallinputfieldsarefilledalloptionsaresetandthereareitemsavailabletocheckout:"Please make sure that all input fields are filled, all options are set, and there are items available to checkout.",
                    placeorder:"Place Order",
                    selectcountry:"Select Country",

                    // Page Not Found
                    pagenotfoundstatement:"Sorry Page Not Found or Not Developed Yet ! :(",
                    GoToHomePage:"Go To Home Page",

                }
            },
            ar: {
                translation: {
                    // Header
                    welcome:"أهلاً",
                    home:"الرئيسية",
                    products:"المنتجات",
                    aboutUs:"من نحن",
                    contactUs:"تواصل معنا",
                    cart:"العربة",
                    checkout:"الحساب",
                    english:"الإجليزية",
                    arabic:"عربي",
                    egp:"ج،م",
                    usd:"دولار",
                    selectCurrency:"إختار عملة",
                    selectLanguage:"إختار اللغة",
                    logout:"الخروج",
                    login:"تسجيل الدخول",
                    search:"البحث",
                    searchAlert:"خانة البحث فارغة، يرجى البحث عن المنتج أو الخروج",

                    // Footer
                    faq:"أسالة",
                    subscribeournewsletter:"اشترك في النشرة الإخبارية لدينا",
                    subscribe:"إشترك",
                    usefullinks:"روابط مفيدة",
                    productcategories:"فئات المنتجات",
                    rights:"2023 جميع الحقوق محفوظة لياسمين العشري",

                    // Login
                    logintoyouraccount:"تسجيل الدخول إلى حسابك",
                    username:"إسم المستخدم",
                    password:"الرمز السري",
                    incorrectusernameorpassword:"اسم المستخدم أو كلمة المرور غير صحيحة",

                    // Home
                    checkoutallyourneeds:"تصفح كل ما تحتاجه !",
                    mensfashionsale:"أحدث مابيعات الرجال !",
                    womensfashionsale:"أحدث مابيعات السيدات !",
                    electronicssale:"أحدث مابيعات الأجهزة الكهربائية !",
                    shopnow:"تسوق الآن",
                    exclusiveproducts:"المنتجات الحصرية",
                    ourclientsay:"آراء العملاء",
                    lissacastro:"ليزا كاسترو",
                    designer:"مصممة",
                    johnbecker:"جون بيكر",
                    cheifofficer:"الرئيس التنفيذي",
                    aldensmith:"ألدن سميث",
                    artist:"فنان",
                    lorem:"لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية ومنطقية.",
                    freedelivery:"توصيل مجاني",
                    ifyouaregoingtouseofLoremyouneedtobesurethereanything:"إذا كنت ستستخدم لوريم، عليك أن تتأكد من وجود أي شيء",
                    dayreturn:"30 يوم إسترجاع",
                    support:"24/7 خدمة",

                    // Products
                    ourproducts:"منتجاتنا",
                    categories:"التصنيفات",                

                    // Product Card
                    viewproduct:"إظهار المنتج",
                    removefromcart:"إزالة من السلة",
                    addtocart:"إضافة إلى السلة",

                    // Single Product
                    productdetails:"معلومات عن المنتج",

                    // About Us
                    whoweare:"معلومات عنا",
                    shortlorem:"العميل مهم جدًا، العميل سيتبعه العميل. فالقارب يغري الجماهير. لا يوجد كازينو الآن هذا الكازينو الآن.",
                    whychooseus:"لماذا نحن ؟",
                    creativedesign:"التصميم الإبداعي",
                    flexiblelayouts:"تخطيطات مرنة",
                    emailmarketing:"التسويق عبر البريد الإلكتروني",
                    chooseUsDescription:"هناك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، لكن الأغلبية تم تعديلها بشكل ما",

                    // Contact Us
                    entername:"أدخل الإسم",
                    enteremail:"أدخل البريد الإلكتروني",
                    enterphoneno:"أدخل رقم الهاتف",
                    entersubject:"أدخل عنوان",
                    message:"الرسالة",
                    getintouch:"إبقى على تواصل",
                    messagesent:"تم إرسال الرسالة",
                    pleasefillallinputfieldstocontinue:"يرجى ملئ جميع حقول الإدخال للمتابعة",
                    sendmessage:"إرسال الرسالة",
                    here:"هنا",

                    // Cart
                    yourcart:"عربة التسوق",
                    noitemsaddedyet:"لم يتم إضافة منتجات بعد !",
                    addtocart:"إضافة إلى العربة ؟",
                    cart_addtocart:"إضافة إلى العربة ؟",
                    product:"المنتج",
                    price:"السعر",
                    remove:"حذف",
                    totalprice:"السعر الإجمالي",
                    checkout:"إنهاء الشراء",

                    // Checkout
                    arizona:"أريزونا",
                    egypt:"مصر",
                    ireland:"أيرلاند",
                    indiana:"إنديانا",
                    unitedstates:"الولايات المتحدة",
                    texas:"تيكساس",
                    firstname:"الإسم الأول",
                    lastname:"إسم العائلة",
                    citytown:"المدينة \ البلدة",
                    postcodezip:"الرمز البريدي",
                    address:"العنوان",
                    phone:"الهاتف",
                    emailaddress:"البريد الإلكتروني",
                    checkout:"تأكيد الشراء !",
                    yourorderwassuccesfullymade:"تم طلبك بنجاح",
                    continueshopping:"مواصلة التسوق",
                    billingdetails:"تفاصيل الفاتورة",
                    yourorders:"طلباتك",
                    totalproductsprice:"السعر الإجمالي للمنتجات",
                    pleaseadditemstoberepresentedhere:"يرجى إضافة العناصر التي سيتم عرضها هنا",
                    paymentmethod:"طريقة الدفع",
                    bankaccount:"حساب البنك",
                    mobilecash:"حافظة الموبايل",
                    cashondelivery:"الدفع عند الاستلام",
                    youwillpaythefullamountwhenthepackagearrives:"سوف تدفع المبلغ كاملاً عند وصول الطرد.",
                    pleasemakesurethatallinputfieldsarefilledalloptionsaresetandthereareitemsavailabletocheckout:"يرجى التأكد من أن جميع حقول الإدخال مملوءة وتم تعيين جميع الخيارات وأن هناك عناصر متاحة للخروج.",
                    placeorder:"تقديم الطلب",
                    selectcountry:"إختار بلد",


                    // Page Not Found
                    pagenotfoundstatement:"المعذرة، هذه الصفحة لا توجد أو لم يتم إنشائها بعد ! :(",
                    GoToHomePage:"الذهاب إلى الصفحة الرئيسية",
                }
            }
        }
    }
);

export default i18n;
