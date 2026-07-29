// --- Константы ---
const ACCESS_KEY = '3b591875-b051-4039-bce3-8f2fada1978d';   // Замените на реальный ключ Web3Forms
const PHONE_NUMBER = '995557540040';

// --- Переменные состояния ---
let deliveryType = 'pickup'; // 'pickup' или 'delivery'

// --- Переводы (добавлен additionalPhonePlaceholder для ge и noResults) ---
const translations = {
  ge: {
    addressText: "ქ. თბილისი, ჯავახეთის ქუჩა, №144",
    callText: "დაგვირეკეთ",
    searchPlaceholder: "საქონლის ძებნა...",
    home: "მთავარი",
    menuTitle: "კატეგორიები",
    categoriesTitle: "კატეგორიები",
    cat1: "ავეჯი",
    cat2: "ჭურჭელი",
    cat3: "ტექსტილი",
    cat4: "განათება",
    cat5: "დეკორი",
    cat6: "ორგანიზება",
    addToCart: "კალათაში",
    inCart: "✓ კალათაშია",
    cartTitle: "თქვენი კალათა",
    total: "სულ:",
    checkoutTitle: "შეკვეთის გაფორმება",
    namePlaceholder: "თქვენი სახელი",
    phonePlaceholder: "ტელეფონი",
    additionalPhonePlaceholder: "დამატებითი ტელეფონი",
    datePlaceholder: "მიტანის თარიღი",
    timePlaceholder: "მიტანის დრო",
    commentPlaceholder: "მიტანის მისამართი ან კომენტარი",
    submitOrder: "შეკვეთის გაფორმება",
    emptyCart: "თქვენი კალათა ცარიელია",
    sending: "იგზავნება... ⏳",
    successAlert: "✅ შეკვეთა წარმატებით გაფორმდა!",
    errorAlert: "❌ შეკვეთის გაგზავნის შეცდომა.",
    footerSocialsTitle: "ჩვენ სოციალურ ქსელებში",
    deliveryLabel: "მიღების მეთოდი:",
    pickup: "თვითგატანა",
    delivery: "მიტანა (+10 ₾)",
    noResults: "საქონელი ვერ მოიძებნა"
  },
  en: {
    addressText: "Tbilisi, Javakheti Street, No. 144",
    callText: "Call",
    searchPlaceholder: "Search products...",
    home: "Home",
    menuTitle: "Categories",
    categoriesTitle: "Categories",
    cat1: "Furniture",
    cat2: "Kitchenware",
    cat3: "Textiles",
    cat4: "Lighting",
    cat5: "Home Decor",
    cat6: "Storage",
    addToCart: "Add to Cart",
    inCart: "✓ In Cart",
    cartTitle: "Your Cart",
    total: "Total:",
    checkoutTitle: "Checkout",
    namePlaceholder: "Your Name",
    phonePlaceholder: "Phone",
    additionalPhonePlaceholder: "Additional phone",
    datePlaceholder: "Delivery date",
    timePlaceholder: "Delivery time",
    commentPlaceholder: "Delivery address or comment",
    submitOrder: "Place Order",
    emptyCart: "Your cart is empty",
    sending: "Sending... ⏳",
    successAlert: "✅ Order successfully placed!",
    errorAlert: "❌ Error placing order.",
    footerSocialsTitle: "We are in social networks",
    deliveryLabel: "Pickup method:",
    pickup: "Pickup",
    delivery: "Delivery (+10 ₾)",
    noResults: "No products found"
  },
  ru: {
    addressText: "г. Тбилиси, ул. Джавахетская, №144",
    callText: "Звонок",
    searchPlaceholder: "Поиск товаров...",
    home: "Главная",
    menuTitle: "Категории",
    categoriesTitle: "Категории товаров",
    cat1: "Мебель",
    cat2: "Домашняя утварь",
    cat3: "Текстиль и ковры",
    cat4: "Освещение",
    cat5: "Декор и уют",
    cat6: "Хранение и порядок",
    addToCart: "В корзину",
    inCart: "✓ В корзине",
    cartTitle: "Ваша корзина",
    total: "Итого:",
    checkoutTitle: "Оформление заказа",
    namePlaceholder: "Ваше имя",
    phonePlaceholder: "Телефон",
    additionalPhonePlaceholder: "Дополнительный телефон",
    datePlaceholder: "Дата доставки",
    timePlaceholder: "Время доставки",
    commentPlaceholder: "Адрес доставки или комментарий",
    submitOrder: "Оформить заказ",
    emptyCart: "Ваша корзина пуста",
    sending: "Отправка... ⏳",
    successAlert: "✅ Заказ успешно оформлен!",
    errorAlert: "❌ Произошла ошибка при отправке заказа.",
    footerSocialsTitle: "Мы в соцсетях",
    deliveryLabel: "Способ получения:",
    pickup: "Самовывоз",
    delivery: "Доставка (+10 ₾)",
    noResults: "Товары не найдены"
  },
  tr: {
    addressText: "Tiflis, Javakheti Caddesi, No. 144",
    callText: "Arama",
    searchPlaceholder: "Ürün ara...",
    home: "Ana Sayfa",
    menuTitle: "Kategoriler",
    categoriesTitle: "Ürün Kategorileri",
    cat1: "Mobilya",
    cat2: "Mutfak Eşyaları",
    cat3: "Tekstil ve Halı",
    cat4: "Aydınlatma",
    cat5: "Ev Dekorasyonu",
    cat6: "Depolama ve Düzen",
    addToCart: "Sepete Ekle",
    inCart: "✓ Sepette",
    cartTitle: "Sepetiniz",
    total: "Toplam:",
    checkoutTitle: "Sipariş Ver",
    namePlaceholder: "Adınız",
    phonePlaceholder: "Telefon",
    additionalPhonePlaceholder: "Ek telefon",
    datePlaceholder: "Teslimat tarihi",
    timePlaceholder: "Teslimat saati",
    commentPlaceholder: "Teslimat adresi veya yorum",
    submitOrder: "Siparişi Tamamla",
    emptyCart: "Sepetiniz boş",
    sending: "Gönderiliyor... ⏳",
    successAlert: "✅ Sipariş başarıyla alındı!",
    errorAlert: "❌ Sipariş gönderilirken bir hata oluştu.",
    footerSocialsTitle: "Sosyal Medya",
    deliveryLabel: "Teslim alma yöntemi:",
    pickup: "Mağazadan al",
    delivery: "Teslimat (+10 ₾)",
    noResults: "Ürün bulunamadı"
  }
};

// --- Данные категорий ---
const categoriesData = {
  cat1: {
    image: "images/photo-1555041469-a586c61ea9bc.jpg",
    name: { ge: "ავეჯი", en: "Furniture", ru: "Мебель", tr: "Mobilya" },
    products: [
      { id: "1_1", price: 1250, oldPrice: 1500, image: "images/photo-1555041469-a586c61ea9bc.jpg", title: { ge: "სკანდინავიური ორადგილიანი დივანი Nordic", en: "Nordic Modern 2-Seater Sofa", ru: "Скандинавский двухместный диван Nordic", tr: "Nordic 2 Kişilik İskandinav Koltuk" } },
      { id: "1_2", price: 890, oldPrice: null, image: "images/photo-1618221195710-dd6b41faaea6.jpg", title: { ge: "ერგონომიული სავარძელი Velvet Lounge", en: "Velvet Lounge Armchair", ru: "Эргономичное кресло Velvet Lounge", tr: "Velvet Lounge Berjer Koltuk" } },
      { id: "1_3", price: 650, oldPrice: 780, image: "images/photo-1615066390971-03e4e1c36ddf.jpg", title: { ge: "ხის სასადილო მაგიდა Oak Craft", en: "Oak Craft Dining Table", ru: "Обеденный стол из дуба Oak Craft", tr: "Oak Craft Ahşap Yemek Masası" } },
      { id: "1_4", price: 280, oldPrice: 340, image: "images/photo-1532323544230-7191fd51bc1b.jpg", title: { ge: "ჟურნალების მაგიდა Minimalist Glass", en: "Minimalist Glass Coffee Table", ru: "Журнальный столик Minimalist Glass", tr: "Minimalist Cam Sehpa" } },
      { id: "1_5", price: 420, oldPrice: null, image: "images/photo-1594620302200-9a762244a156.jpg", title: { ge: "წიგნების თარო Loft Industrial", en: "Loft Industrial Bookshelf", ru: "Книжная стеллажная система Loft", tr: "Loft Endüstriyel Kitaplık" } },
      { id: "1_6", price: 190, oldPrice: 230, image: "images/photo-1503602642458-232111445657.jpg", title: { ge: "რბილი პუფი Velvet Cube", en: "Velvet Cube Pouf", ru: "Мягкий пуф Velvet Cube", tr: "Velvet Cube Yumuşak Puf" } }
    ]
  },
  cat2: {
    image: "images/photo-1610701596007-11502861dcfa.jpg",
    name: { ge: "ჭურჭელი", en: "Kitchenware", ru: "Домашняя утварь", tr: "Mutfak Eşyaları" },
    products: [
      { id: "2_1", price: 180, oldPrice: 220, image: "images/photo-1610701596007-11502861dcfa.jpg", title: { ge: "კერამიკული თეფშების ნაკრები Artisan (12 ნაწილი)", en: "Artisan Ceramic Dinnerware Set (12 pcs)", ru: "Набор керамической посуды Artisan (12 предм.)", tr: "Artisan Seramik Yemek Takımı (12 Parça)" } },
      { id: "2_2", price: 340, oldPrice: null, image: "images/photo-1584269600464-37b1b58a9fe7.jpg", title: { ge: "ქვაბების ნაკრები Granite Pro", en: "Granite Pro Non-Stick Cookware Set", ru: "Набор кастрюль Granite Pro с антипригарным покрытием", tr: "Granite Pro Tencere Seti" } },
      { id: "2_3", price: 95, oldPrice: 120, image: "images/photo-1576092768241-dec231879fc3.jpg", title: { ge: "მინის ჩაიდანი Bamboo Lid (1.5L)", en: "Glass Teapot with Bamboo Lid (1.5L)", ru: "Стеклянный заварочный чайник Bamboo (1.5л)", tr: "Bambu Kapaklı Cam Demlik (1.5L)" } },
      { id: "2_4", price: 150, oldPrice: null, image: "images/photo-1593618998160-e34014e67546.jpg", title: { ge: "პროფესიონალური დანების ნაკრები Chef Steel", en: "Chef Steel Professional Knife Set", ru: "Набор кухонных ножей Chef Steel", tr: "Chef Steel Profesyonel Bıçak Seti" } },
      { id: "2_5", price: 65, oldPrice: 80, image: "images/photo-1544787219-7f47ccb76574.jpg", title: { ge: "ჭიქების ნაკრები Double Wall Glass (4ც)", en: "Double Wall Thermo Glass Cups (Set of 4)", ru: "Набор термостаканов с двойным стеклом (4 шт)", tr: "Çift Çeperli Cam Kupa Seti (4'lü)" } },
      { id: "2_6", price: 110, oldPrice: null, image: "images/photo-1590794056226-79ef3a8147e1.jpg", title: { ge: "ბამბუკის დასერჭი და დასადგამი დაფების ნაკრები", en: "Bamboo Cutting Board Set", ru: "Набор разделочных досок из бамбука", tr: "Bambu Kesme Tahtası Seti" } }
    ]
  },
  cat3: {
    image: "images/photo-1522771739844-6a9f6d5f14af.jpg",
    name: { ge: "ტექსტილი", en: "Textiles", ru: "Текстиль и ковры", tr: "Tekstil ve Halı" },
    products: [
      { id: "3_1", price: 210, oldPrice: 260, image: "images/photo-1522771739844-6a9f6d5f14af.jpg", title: { ge: "სეთონის ლოგინის თეთრეული Satin Luxury Euro", en: "Satin Luxury Euro Bedding Set", ru: "Постельное белье Евро Satin Luxury", tr: "Satin Luxury Nevresim Takımı" } },
      { id: "3_2", price: 140, oldPrice: null, image: "images/photo-1600121848594-d8644e57abab.jpg", title: { ge: "მატყლის პლედი Wool Soft Warm", en: "Soft Wool Blanket Throw", ru: "Шерстяной плед Wool Soft Warm", tr: "Yün Soft Sıcak Battaniye" } },
      { id: "3_3", price: 380, oldPrice: 450, image: "images/photo-1600121848594-d8644e57abab.jpg", title: { ge: "რბილი ხალიჩა Cozy Living (160x230 სმ)", en: "Cozy Living Area Rug (160x230 cm)", ru: "Мягкий ковер Cozy Living (160x230 см)", tr: "Cozy Living Yumuşak Halı (160x230 cm)" } },
      { id: "3_4", price: 85, oldPrice: 105, image: "images/photo-1584100936595-c0654b55a2e2.jpg", title: { ge: "აბაზანის პირსახოცების ნაკრები Cotton Spa (4ც)", en: "Cotton Spa Towel Set (4 pcs)", ru: "Набор махровых полотенец Cotton Spa (4 шт)", tr: "Cotton Spa Havlu Seti (4'lü)" } },
      { id: "3_5", price: 120, oldPrice: null, image: "images/photo-1513694203232-719a280e022f.jpg", title: { ge: "ბლეNodeType ფარდები Velvet Shield", en: "Velvet Shield Blackout Curtains", ru: "Плотные шторы блэкаут Velvet Shield", tr: "Velvet Shield Fon Perde" } },
      { id: "3_6", price: 60, oldPrice: 75, image: "images/photo-1584100936595-c0654b55a2e2.jpg", title: { ge: "დეკორატიული ბალიშები Boho Chic (2ც)", en: "Boho Chic Cushion Set (2 pcs)", ru: "Декоративные подушки Boho Chic (2 шт)", tr: "Boho Chic Kırlent Seti (2'li)" } }
    ]
  },
  cat4: {
    image: "images/photo-1507473885765-e6ed057f782c.jpg",
    name: { ge: "განათება", en: "Lighting", ru: "Освещение", tr: "Aydınlatma" },
    products: [
      { id: "4_1", price: 320, oldPrice: 390, image: "images/photo-1507473885765-e6ed057f782c.jpg", title: { ge: "დიზაინერული ჭაღი Modern Brass Arc", en: "Modern Brass Arc Chandelier", ru: "Дизайнерская люстра Modern Brass Arc", tr: "Modern Pirinç Avize" } },
      { id: "4_2", price: 160, oldPrice: null, image: "images/photo-1513506003901-1e6a229e2d15.jpg", title: { ge: "იატაკის ტორშერი Nordic Minimalist", en: "Nordic Minimalist Floor Lamp", ru: "Напольный торшер Nordic Minimalist", tr: "Nordic Minimalist Lambader" } },
      { id: "4_3", price: 90, oldPrice: 110, image: "images/photo-1534349735944-2b3a6f7a268f.jpg", title: { ge: "მაგიდის სანათი Touch Dimmer LED", en: "Touch Dimmer LED Desk Lamp", ru: "Настольная лампа Touch Dimmer LED", tr: "Dokunmatik LED Masa Lambası" } },
      { id: "4_4", price: 130, oldPrice: null, image: "images/photo-1540932239986-30128078f3c5.jpg", title: { ge: "კედლის სანათი Warm Glow Sconce", en: "Warm Glow Wall Sconce", ru: "Настенный светильник (бра) Warm Glow", tr: "Warm Glow Duvar Apliği" } },
      { id: "4_5", price: 75, oldPrice: 95, image: "images/photo-1517991104123-1d56a6e81ed9.jpg", title: { ge: "აკუმულატორიანი ღამის სანათი Wooden Tube", en: "Rechargeable Wooden Night Light", ru: "Деревянный портативный ночник Wooden Tube", tr: "Ahşap Şarjlı Gece Lambası" } },
      { id: "4_6", price: 210, oldPrice: 250, image: "images/photo-1524484485831-a92ffc0de03f.jpg", title: { ge: "საკიდი სანათი Industrial Glass Pendant", en: "Industrial Glass Pendant Light", ru: "Подвесной светильник Industrial Glass", tr: "Endüstriyel Cam Sarkıt Lamba" } }
    ]
  },
  cat5: {
    image: "images/photo-1513519245088-0e12902e5a38.jpg",
    name: { ge: "დეკორი", en: "Home Decor", ru: "Декор и уют", tr: "Ev Dekorasyonu" },
    products: [
      { id: "5_1", price: 85, oldPrice: null, image: "images/photo-1513519245088-0e12902e5a38.jpg", title: { ge: "კერამიკული ლარნაკი Shell Cream", en: "Shell Cream Ceramic Vase", ru: "Керамическая ваза Shell Cream", tr: "Shell Cream Seramik Vazo" } },
      { id: "5_2", price: 190, oldPrice: 230, image: "images/photo-1618221195710-dd6b41faaea6.jpg", title: { ge: "კედლის სარკე Sunburst Brass (60სმ)", en: "Sunburst Brass Wall Mirror (60cm)", ru: "Настенное зеркало Sunburst Brass (60 см)", tr: "Sunburst Pirinç Duvar Aynası (60cm)" } },
      { id: "5_3", price: 65, oldPrice: 80, image: "images/photo-1603006905003-be475563bc59.jpg", title: { ge: "არომატული სანთლების ნაკრები Amber & Vanilla", en: "Amber & Vanilla Scented Candle Set", ru: "Набор аромасвечей Amber & Vanilla", tr: "Amber & Vanilya Kokulu Mum Seti" } },
      { id: "5_4", price: 110, oldPrice: null, image: "images/photo-1563861826100-9cb868fdbe1c.jpg", title: { ge: "კედლის საათი Minimal Wooden Hands", en: "Minimal Wooden Hands Wall Clock", ru: "Настенные часы Minimal Wooden Hands", tr: "Minimal Ahşap Duvar Saati" } },
      { id: "5_5", price: 140, oldPrice: 170, image: "images/photo-1579783900882-c0d3dad7b119.jpg", title: { ge: "ინტერიერის ნახატი Abstract Canvas", en: "Abstract Canvas Wall Art", ru: "Интерьерная картина Abstract Canvas", tr: "Soyut Kanvas Tablo" } },
      { id: "5_6", price: 55, oldPrice: null, image: "images/photo-1485955900006-10f4d324d411.jpg", title: { ge: "მცენარის ქოთანი Gold Stand Planter", en: "Gold Stand Planter Pot", ru: "Кашпо для цветов Gold Stand", tr: "Altın Ayaklı Saksı" } }
    ]
  },
  cat6: {
    image: "images/photo-1584622650111-993a426fbf0a.jpg",
    name: { ge: "ორგანიზება", en: "Storage", ru: "Хранение и порядок", tr: "Depolama ve Düzen" },
    products: [
      { id: "6_1", price: 75, oldPrice: 90, image: "images/photo-1584622650111-993a426fbf0a.jpg", title: { ge: "წნული კალათების ნაკრები Natural Jute (3ც)", en: "Natural Jute Storage Basket Set (3 pcs)", ru: "Плетеные корзины Natural Jute (3 шт)", tr: "Doğal Jüt Hasır Sepet Seti (3'lü)" } },
      { id: "6_2", price: 130, oldPrice: null, image: "images/photo-1595428774223-ef52624120d2.jpg", title: { ge: "ფეხსაცმლის თარო-ორგანიზატორი Bamboo Tier", en: "Bamboo Tier Shoe Rack", ru: "Бамбуковая полка для обуви Bamboo Tier", tr: "Bambu Ayakkabılık Düzenleyici" } },
      { id: "6_3", price: 95, oldPrice: 115, image: "images/photo-1616046229478-9901c5536a45.jpg", title: { ge: "სარეცხის კალათა Linen Foldable", en: "Linen Foldable Laundry Hamper", ru: "Складная корзина для белья Linen", tr: "Kumaş Katlanabilir Çamaşır Sepeti" } },
      { id: "6_4", price: 45, oldPrice: null, image: "images/photo-1544816155-12df9643f363.jpg", title: { ge: "ორგანიზატორი უჯრისთვის Organizer Set", en: "Drawer Organizer Divider Set", ru: "Органайзеры для выдвижных ящиков", tr: "Çekmece İçi Düzenleyici Set" } },
      { id: "6_5", price: 85, oldPrice: 100, image: "images/photo-1586023492125-27b2c045efd7.jpg", title: { ge: "სამზარეულოს სანელებლების თარო Spice Rack", en: "Revolving Spice Rack Organizer", ru: "Вращающаяся подставка для специй Spice Rack", tr: "Döner Baharatlık Düzenleyici" } },
      { id: "6_6", price: 65, oldPrice: null, image: "images/photo-1603006905003-be475563bc59.jpg", title: { ge: "ტანსაცმლის ჩანთების ნაკრები Garment Bags (5ც)", en: "Garment Clothes Covers Set (5 pcs)", ru: "Чехлы для хранения одежды (5 шт)", tr: "Elbise Kılıfı Seti (5'li)" } }
    ]
  }
};

// --- Глобальные переменные ---
let currentCategoryKey = 'cat1';
let fpInstance = null;

// --- Вспомогательные функции ---
function getCurrentLang() {
  return localStorage.getItem('siteLang') || 'ge';
}

function getDeliveryCost() {
  return deliveryType === 'delivery' ? 10 : 0;
}

// --- Flatpickr ---
function initDatePicker(lang) {
  const dateInput = document.querySelector('.datepicker');
  if (!dateInput) return;
  if (fpInstance) fpInstance.destroy();

  const localeMap = { ge: 'ka', tr: 'tr', ru: 'ru' };
  const fpLocale = localeMap[lang] || 'default';

  fpInstance = flatpickr(dateInput, {
    dateFormat: "d M Y",
    minDate: "today",
    locale: fpLocale,
    disableMobile: true,
  });
}

// --- Отрисовка карусели категорий ---
function renderCategoryCarousel(lang) {
  const carousel = document.getElementById('categoriesCarousel');
  if (!carousel) return;

  if (carousel.children.length === 0) {
    Object.keys(categoriesData).forEach(catKey => {
      const cat = categoriesData[catKey];
      const catName = cat.name[lang] || cat.name['ge'];
      const isActive = catKey === currentCategoryKey ? 'active' : '';
      const cardHTML = `
        <a href="#" class="category-card ${isActive}" data-cat="${catKey}">
          <div class="category-card__image-wrapper">
            <img src="${cat.image}" alt="${catName}" class="category-card__image" loading="lazy">
          </div>
          <span class="category-card__title">${catName}</span>
        </a>
      `;
      carousel.insertAdjacentHTML('beforeend', cardHTML);
    });

    carousel.querySelectorAll('.category-card').forEach(card => {
      card.addEventListener('click', (e) => {
        e.preventDefault();
        const catKey = card.dataset.cat;
        if (catKey) switchCategory(catKey);
      });
    });
  } else {
    const cards = carousel.querySelectorAll('.category-card');
    cards.forEach(card => {
      const catKey = card.dataset.cat;
      const cat = categoriesData[catKey];
      const catName = cat.name[lang] || cat.name['ge'];
      card.querySelector('.category-card__title').textContent = catName;
      card.classList.toggle('active', catKey === currentCategoryKey);
    });
  }
}

// --- Отрисовка товаров ---
function renderProducts(catKey, lang) {
  const grid = document.getElementById('productGrid');
  if (!grid) return;
  grid.innerHTML = '';

  const category = categoriesData[catKey];
  if (!category) return;

  const t = translations[lang];

  category.products.forEach(product => {
    const titleText = product.title[lang] || product.title['ge'];
    const formattedPrice = product.price.toLocaleString('ru-RU');
    const formattedOldPrice = product.oldPrice ? product.oldPrice.toLocaleString('ru-RU') + ' ₾' : '';

    const productHTML = `
      <article class="product-card" data-id="${product.id}">
        <div class="product-card__image-wrapper">
          <img src="${product.image}" alt="${titleText}" class="product-card__image" loading="lazy">
        </div>
        <div class="product-card__content">
          <h3 class="product-card__title">${titleText}</h3>
          <div class="product-card__price-row">
            <span class="product-card__price">${formattedPrice} ₾</span>
            ${formattedOldPrice ? `<span class="product-card__old-price">${formattedOldPrice}</span>` : ''}
          </div>
          <button class="btn btn--primary" data-i18n="addToCart">${t.addToCart}</button>
        </div>
      </article>`;
    grid.insertAdjacentHTML('beforeend', productHTML);
  });

  initAddToCartButtons();
}

// --- Обновление заголовка и хлебных крошек ---
function updateCategoryHeader(catKey, lang) {
  const catObj = categoriesData[catKey];
  if (!catObj) return;
  const catName = catObj.name[lang] || catObj.name['ge'];
  document.getElementById('categoryTitleRight').textContent = catName;
  document.getElementById('currentCategoryBreadcrumb').textContent = catName;
}

// --- Переключение языка ---
function setLanguage(lang) {
  localStorage.setItem('siteLang', lang);
  const t = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) el.placeholder = t[key];
  });

  const langSelect = document.querySelector('.lang-select');
  if (langSelect) langSelect.value = lang;

  updateCategoryHeader(currentCategoryKey, lang);
  renderCategoryCarousel(lang);
  renderProducts(currentCategoryKey, lang);
  initDatePicker(lang);
  renderCart();
}

// --- Переключение категории ---
function switchCategory(catKey) {
  if (catKey === currentCategoryKey) return;
  currentCategoryKey = catKey;
  const lang = getCurrentLang();

  updateCategoryHeader(catKey, lang);
  renderCategoryCarousel(lang);
  renderProducts(catKey, lang);

  document.querySelectorAll('.menu-drawer__link').forEach(link => {
    link.classList.toggle('active', link.dataset.cat === catKey);
  });
}

// --- Корзина ---
function getCart() {
  const cartString = localStorage.getItem('shoppingCart');
  return cartString ? JSON.parse(cartString) : [];
}

function saveCart(cartArray) {
  localStorage.setItem('shoppingCart', JSON.stringify(cartArray));
}

function addToCart(product) {
  const cart = getCart();
  const existingItem = cart.find(item => item.id === product.id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  saveCart(cart);
  updateCartBadge();
}

function updateCartBadge() {
  const cart = getCart();
  const badge = document.querySelector('.cart-badge');
  if (!badge) return;
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  badge.textContent = totalItems;
  badge.style.display = totalItems === 0 ? 'none' : 'flex';
}

function updateCartTotal() {
  const cart = getCart();
  const totalPriceEl = document.getElementById('cartTotalPrice');
  if (!totalPriceEl) return;

  let totalSum = 0;
  cart.forEach(item => {
    totalSum += item.price * item.quantity;
  });
  totalSum += getDeliveryCost();

  totalPriceEl.textContent = `${totalSum.toLocaleString('ru-RU')} ₾`;
}

function renderCart() {
  const cart = getCart();
  const lang = getCurrentLang();
  const t = translations[lang];
  const container = document.getElementById('cartItemsContainer');
  const totalPriceEl = document.getElementById('cartTotalPrice');
  container.innerHTML = '';

  if (cart.length === 0) {
    container.innerHTML = `<p style="text-align: center; color: #888; padding: 20px 0;">${t.emptyCart}</p>`;
    totalPriceEl.textContent = '0 ₾';
    return;
  }

  let totalSum = 0;
  cart.forEach(item => {
    totalSum += item.price * item.quantity;
    const formattedPrice = item.price.toLocaleString('ru-RU');
    const cartItemHTML = `
      <div class="cart-item" data-id="${item.id}">
        <img src="${item.image}" alt="${item.title}" class="cart-item__img">
        <div class="cart-item__info">
          <h4 class="cart-item__title">${item.title}</h4>
          <div class="cart-item__price">${formattedPrice} ₾</div>
          <div class="cart-item__controls">
            <div class="quantity">
              <button class="quantity__btn btn-minus" data-id="${item.id}" type="button">-</button>
              <input class="quantity__input" type="number" value="${item.quantity}" readonly>
              <button class="quantity__btn btn-plus" data-id="${item.id}" type="button">+</button>
            </div>
            <button class="cart-item__remove btn-remove" data-id="${item.id}" aria-label="Удалить">🗑️</button>
          </div>
        </div>
      </div>`;
    container.insertAdjacentHTML('beforeend', cartItemHTML);
  });

  totalSum += getDeliveryCost();
  totalPriceEl.textContent = `${totalSum.toLocaleString('ru-RU')} ₾`;
}

function initAddToCartButtons() {
  const buyButtons = document.querySelectorAll('.product-card .btn--primary');
  buyButtons.forEach(button => {
    button.addEventListener('click', function(event) {
      const card = event.target.closest('.product-card');
      const productId = card.dataset.id;
      const productImage = card.querySelector('.product-card__image').src;
      const productTitle = card.querySelector('.product-card__title').textContent;
      const priceText = card.querySelector('.product-card__price').textContent;
      const productPrice = parseInt(priceText.replace(/[^\d]/g, ''), 10);

      const product = { id: productId, title: productTitle, price: productPrice, image: productImage };
      addToCart(product);

      const lang = getCurrentLang();
      const originalText = translations[lang]['addToCart'];
      const successText = translations[lang]['inCart'];
      
      button.textContent = successText;
      button.style.backgroundColor = '#28a745';
      setTimeout(() => {
        button.textContent = originalText;
        button.style.backgroundColor = '';
      }, 1500);
    });
  });
}

// --- Инициализация ---
document.addEventListener('DOMContentLoaded', () => {
  const initialLang = getCurrentLang();
  setLanguage(initialLang);

  document.querySelector('.lang-select').addEventListener('change', (event) => {
    setLanguage(event.target.value);
  });

  // Выдвижное меню
  const menuDrawer = document.getElementById('menuDrawer');
  const menuOverlay = document.getElementById('menuOverlay');
  const btnOpenMenu = document.getElementById('hamburgerBtn');
  const btnCloseMenu = document.getElementById('menuCloseBtn');

  function toggleMenu() {
    menuDrawer.classList.toggle('is-open');
    menuOverlay.classList.toggle('is-open');
    document.body.style.overflow = menuDrawer.classList.contains('is-open') ? 'hidden' : '';
  }

  btnOpenMenu.addEventListener('click', toggleMenu);
  btnCloseMenu.addEventListener('click', toggleMenu);
  menuOverlay.addEventListener('click', toggleMenu);

  document.querySelectorAll('.menu-drawer__link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const catKey = link.dataset.cat;
      if (catKey) {
        switchCategory(catKey);
      }
      toggleMenu();
    });
  });

  document.getElementById('homeBreadcrumb').addEventListener('click', (e) => {
    e.preventDefault();
    switchCategory('cat1');
  });
  document.getElementById('logoLink').addEventListener('click', (e) => {
    e.preventDefault();
    switchCategory('cat1');
  });

  // Корзина
  const cartModal = document.getElementById('cartModal');
  const cartOverlay = document.getElementById('cartOverlay');
  const btnOpenCart = document.querySelector('.cart-btn');
  const btnCloseCart = document.getElementById('cartCloseBtn');

  function toggleCart() {
    cartModal.classList.toggle('is-open');
    cartOverlay.classList.toggle('is-open');
    if (cartModal.classList.contains('is-open')) {
      renderCart();
    }
    document.body.style.overflow = cartModal.classList.contains('is-open') ? 'hidden' : '';
  }

  btnOpenCart.addEventListener('click', toggleCart);
  btnCloseCart.addEventListener('click', toggleCart);
  cartOverlay.addEventListener('click', toggleCart);

  // Выбор способа получения
  document.querySelector('.cart-delivery__options').addEventListener('click', function(e) {
    const btn = e.target.closest('.cart-delivery__btn');
    if (!btn) return;

    this.querySelectorAll('.cart-delivery__btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    deliveryType = btn.dataset.delivery;
    updateCartTotal();
  });

  // Изменение количества
  document.getElementById('cartItemsContainer').addEventListener('click', function(event) {
    const target = event.target;
    const id = target.dataset.id;
    if (!id) return;

    let cart = getCart();
    const itemIndex = cart.findIndex(item => item.id === id);
    if (itemIndex === -1) return;

    if (target.classList.contains('btn-plus')) {
      cart[itemIndex].quantity += 1;
    } else if (target.classList.contains('btn-minus')) {
      if (cart[itemIndex].quantity > 1) {
        cart[itemIndex].quantity -= 1;
      } else {
        cart.splice(itemIndex, 1);
      }
    } else if (target.classList.contains('btn-remove')) {
      cart.splice(itemIndex, 1);
    }

    saveCart(cart);
    renderCart();
    updateCartBadge();
  });

  // Отправка формы
  document.getElementById('checkoutForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const cart = getCart();
    const lang = getCurrentLang();
    const t = translations[lang];
    
    if (cart.length === 0) {
      alert(t.emptyCart);
      return;
    }

    const formData = new FormData(this);
    let orderDetails = 'СОСТАВ ЗАКАЗА:\n-------------------------\n';
    let totalSum = 0;
    
    cart.forEach((item, index) => {
      const itemSum = item.price * item.quantity;
      totalSum += itemSum;
      orderDetails += `${index + 1}. ${item.title}\n   Кол-во: ${item.quantity} шт. | Цена: ${item.price} ₾ | Сумма: ${itemSum} ₾\n\n`;
    });
    
    const deliveryCost = getDeliveryCost();
    totalSum += deliveryCost;
    const deliveryText = deliveryType === 'delivery' ? 'Доставка (+10 ₾)' : 'Самовывоз';
    orderDetails += `-------------------------\n`;
    orderDetails += `Способ получения: ${deliveryText}\n`;
    orderDetails += `Дата доставки: ${formData.get('delivery_date')}\n`;
    orderDetails += `Время доставки: ${formData.get('delivery_time')}\n`;
    orderDetails += `ИТОГО К ОПЛАТЕ: ${totalSum} ₾`;

    const submitBtn = this.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = t.sending;
    submitBtn.disabled = true;

    const payload = {
      access_key: ACCESS_KEY,
      subject: `🛒 Новый заказ от ${formData.get('name')}`,
      from_name: "Магазин Context Tbilisi",
      Имя: formData.get('name'),
      Телефон: formData.get('phone'),
      Дополнительный_телефон: formData.get('additional_phone') || "Не указан",
      Способ_получения: deliveryText,
      Дата_доставки: formData.get('delivery_date'),
      Время_доставки: formData.get('delivery_time'),
      Комментарий: formData.get('comment') || "Нет",
      Заказ: orderDetails
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        alert(t.successAlert);
        localStorage.removeItem('shoppingCart');
        this.reset();
        if (fpInstance) fpInstance.clear();
        renderCart();
        updateCartBadge();
        toggleCart();
      } else {
        const errorText = await response.text();
        console.error('Ошибка сервера:', errorText);
        throw new Error(`Server responded with ${response.status}`);
      }
    } catch (error) {
      console.error('Ошибка отправки заказа:', error);
      alert(t.errorAlert);
    } finally {
      submitBtn.textContent = originalBtnText;
      submitBtn.disabled = false;
    }
  });

  // ---- ИСПРАВЛЕНИЕ: анимация корзины перенесена сюда ----
  const cartBtn = document.querySelector('.cart-btn');
  if (cartBtn) {
    cartBtn.classList.add('shake');
    setTimeout(() => cartBtn.classList.remove('shake'), 300);
  }

  // ---- ИНИЦИАЛИЗАЦИЯ УМНОГО ПОИСКА ----
  initSearch();

  updateCartBadge();
});

// ============================================================
// УМНЫЙ ПОИСК (АВТОДОПОЛНЕНИЕ)
// ============================================================

let searchTimeout = null;

function searchProducts(query, lang) {
  if (!query.trim()) return [];
  const lowerQuery = query.toLowerCase().trim();
  const results = [];
  Object.keys(categoriesData).forEach(catKey => {
    const category = categoriesData[catKey];
    category.products.forEach(product => {
      const title = product.title[lang] || product.title['ge'];
      if (title.toLowerCase().includes(lowerQuery)) {
        results.push({
          ...product,
          categoryKey: catKey,
          categoryName: category.name[lang] || category.name['ge'],
          title: title
        });
      }
    });
  });
  return results.slice(0, 8);
}

function renderSearchResults(results, lang) {
  const container = document.getElementById('searchResults');
  if (!container) return;
  if (results.length === 0) {
    container.innerHTML = `<div class="search-result-empty">${translations[lang]?.noResults || 'Товары не найдены'}</div>`;
    container.classList.add('active');
    return;
  }
  let html = '';
  results.forEach(item => {
    const price = item.price.toLocaleString('ru-RU');
    html += `
      <a href="#" class="search-result-item" data-id="${item.id}" data-cat="${item.categoryKey}">
        <img src="${item.image}" alt="${item.title}" class="search-result-item__image" loading="lazy">
        <div class="search-result-item__info">
          <span class="search-result-item__title">${item.title}</span>
          <span class="search-result-item__category">${item.categoryName}</span>
        </div>
        <span class="search-result-item__price">${price} ₾</span>
      </a>
    `;
  });
  container.innerHTML = html;
  container.classList.add('active');
  container.querySelectorAll('.search-result-item').forEach(el => {
    el.addEventListener('click', function(e) {
      e.preventDefault();
      const catKey = this.dataset.cat;
      if (catKey) {
        switchCategory(catKey);
        document.getElementById('searchResults').classList.remove('active');
        document.getElementById('searchInput').value = '';
        document.getElementById('searchInput').blur();
      }
    });
  });
}

document.addEventListener('click', function(e) {
  const searchContainer = document.querySelector('.header__search');
  const resultsContainer = document.getElementById('searchResults');
  if (searchContainer && resultsContainer) {
    if (!searchContainer.contains(e.target)) {
      resultsContainer.classList.remove('active');
    }
  }
});

function initSearch() {
  const searchInput = document.getElementById('searchInput');
  const resultsContainer = document.getElementById('searchResults');
  if (!searchInput) return;
  searchInput.addEventListener('input', function() {
    clearTimeout(searchTimeout);
    const query = this.value;
    const lang = getCurrentLang();
    if (query.trim().length < 2) {
      resultsContainer.classList.remove('active');
      return;
    }
    searchTimeout = setTimeout(() => {
      const results = searchProducts(query, lang);
      renderSearchResults(results, lang);
    }, 300);
  });
  searchInput.addEventListener('blur', function() {
    setTimeout(() => {
      resultsContainer.classList.remove('active');
    }, 200);
  });
  searchInput.addEventListener('focus', function() {
    const query = this.value;
    if (query.trim().length >= 2) {
      const lang = getCurrentLang();
      const results = searchProducts(query, lang);
      renderSearchResults(results, lang);
    }
  });
}