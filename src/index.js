const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

/* Kodlar Buradan aşağıya */
console.log('Proje açıldı!')
const headerList = document.querySelectorAll("nav a");
console.log("headerList: " , headerList);
/* headerList[0].textContent = siteContent.nav["nav-item-1"]; */
/* const navArr = headerList.forEach((element,index) => {
  element.textContent = siteContent.nav[`nav-item-${index+ 1}`];
}) */
[... headerList].map((element,index) => {
  headerList[index].textContent = siteContent.nav[`nav-item-${index+ 1}`];
  headerList[index].setAttribute("class","italic");
})
const headerImg= document.querySelectorAll('img');
console.log(headerImg);
headerImg[0].setAttribute("src","http://localhost:9000/img/logo.png");
headerImg[1].setAttribute("src","http://localhost:9000/img/cta.png" );
headerImg[2].setAttribute("src", siteContent.images["accent-img"]);


const ctah1 = document.querySelectorAll('h1');
ctah1[0].textContent = "Bu DOM Mükemmel";
const ctaButton = document.querySelector('button');
ctaButton.textContent = 'Başlayın';



const head4 = document.querySelectorAll("h4");
const pMain = document.querySelectorAll('p');
head4[0].textContent = siteContent["ana-içerik"]["özellikler-h4"];
head4[1].textContent = siteContent["ana-içerik"]["hakkımızda-h4"]
head4[2].textContent = siteContent["ana-içerik"]["servisler-h4"];
head4[3].textContent = siteContent["ana-içerik"]["ürünler-h4"];
head4[4].textContent = siteContent["ana-içerik"]["vizyon-h4"];
head4[5].textContent = siteContent.iletisim["iletişim-h4"];
pMain[0].textContent = siteContent["ana-içerik"]["özellikler-içerik"];
pMain[1].textContent = siteContent["ana-içerik"]["hakkımızda-içerik"];
pMain[2].textContent = siteContent["ana-içerik"]["servisler-içeriği"];
pMain[3].textContent = siteContent["ana-içerik"]["ürünler-içeriği"];
pMain[4].textContent = siteContent["ana-içerik"]["vizyon-içeriği"];
pMain[5].textContent = siteContent.iletisim.adres;
pMain[7].textContent = siteContent.iletisim.email;
pMain[6].textContent = siteContent.iletisim.telefon;


const footerList = document.querySelectorAll("footer a");
const footerArr = footerList.forEach((element,index) => {
  element.textContent = siteContent.footer.copyright;
  element.setAttribute("class" , "bold");
})


