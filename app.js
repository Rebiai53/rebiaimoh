// قائمة 200 لاعب كرة قدم
const footballPlayers = [
  { id: 1, name: "ليونيل ميسي 🇦🇷", category: "كرة قدم ⚽" , img: "https://imgs.search.brave.com/__bcZsUoRALHCu6ESo0Uvh34KZ9yUuRn-XFcSJl5NTI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9saW9u/ZWwtbWVzc2ktZWcu/Y29tL3N0b3JhZ2Uv/MjAyNC8wOC9MaW9u/ZWwtTWVzc2kuLTEt/MS5wbmc" },
  { id: 2, name: "كريستيانو رونالدو 🇵🇹", category: "كرة قدم ⚽" , img: "https://imgs.search.brave.com/cJUjyN_0i8PbS8M23kUu_vywp7QSUWodWSQc-8K3fR4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wYXJz/cG5nLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMi8xMC9D/cmlzdGlhbm8tUm9u/YWxkb3BuZy5wYXJz/cG5nLmNvbS0xMC0z/MDB4MzAwLnBuZw" },
  { id: 3, name: "بيليه 🇧🇷", category: "كرة قدم ⚽" , img: "https://imgs.search.brave.com/NMiYXEMi8K8ascbht4d0S59PEAjhmOLITTfP-dnz42U/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wZWxl/LWFyLmNvbS9zdG9y/YWdlLzIwMjQvMTEv/JUQ4JUE4JUQ5JThB/JUQ5JTg0JUQ5JThB/JUQ5JTg3LTEucG5n" },
  { id: 4, name: "دييغو مارادونا 🇦🇷", category: "كرة قدم ⚽" , img: "https://imgs.search.brave.com/6OOa6Ls_rQG9lRVUbNmzIsF8cdEcPiXBSJAzQnGe5j8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5lbGJhbGFkLm5l/d3MvMjAyNS8zL2xh/cmdlLzg0NDE4MzMz/OTQxNTkyMDI1MDMx/NDA0MTMzNTEzMzUu/anBn" },
  { id: 5, name: "زين الدين زيدان 🇫🇷", category: "كرة قدم ⚽" , img: "https://imgs.search.brave.com/5uxs99OzZgWqzygbJyZYVrkyP_z95OhXcV1a71TRx2Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YXJhZ2Vlay5jb20v/X25leHQvaW1hZ2U_/dXJsPWh0dHBzOi8v/Y2RuLmFyYWdlZWsu/Y29tL21hZ2F6aW5l/LzIwMTcvMTEvemlu/ZWRpbmUtemlkYW5l/LmpwZyZ3PTM4NDAm/cT03NQ" },
  { id: 6, name: "رونالدو نازاريو 🇧🇷", category: "كرة قدم ⚽" },
  { id: 7, name: "رونالدينيو 🇧🇷", category: "كرة قدم ⚽" },
  { id: 8, name: "يوهان كرويف 🇳🇱", category: "كرة قدم ⚽"  },
  { id: 9, name: "فرانز بكنباور 🇩🇪", category: "كرة قدم ⚽"  },
  { id: 10, name: "ألفريدو دي ستيفانو 🇦🇷", category: "كرة قدم ⚽"  },
  { id: 11, name: "ميشيل بلاتيني 🇫🇷", category: "كرة قدم ⚽" },
  { id: 12, name: "باولو مالديني 🇮🇹", category: "كرة قدم ⚽" },
  { id: 13, name: "روبرتو كارلوس 🇧🇷", category: "كرة قدم ⚽" },
  { id: 14, name: "غارينشا 🇧🇷", category: "كرة قدم ⚽" },
  { id: 15, name: "فيرينتس بوشكاش 🇭🇺", category: "كرة قدم ⚽" },
  { id: 16, name: "أوزيبيو 🇵🇹", category: "كرة قدم ⚽" },
  { id: 17, name: "جورج بست 🏴", category: "كرة قدم ⚽" },
  { id: 18, name: "بوبي تشارلتون 🏴", category: "كرة قدم ⚽" },
  { id: 19, name: "ماركو فان باستن 🇳🇱", category: "كرة قدم ⚽" },
  { id: 20, name: "روود خوليت 🇳🇱", category: "كرة قدم ⚽" },
  { id: 21, name: "فرانك ريكارد 🇳🇱", category: "كرة قدم ⚽" },
  { id: 22, name: "روماريو 🇧🇷", category: "كرة قدم ⚽" },
  { id: 23, name: "كاكا 🇧🇷", category: "كرة قدم ⚽" },
  { id: 24, name: "لويس فيغو 🇵🇹", category: "كرة قدم ⚽" },
  { id: 25, name: "أندريا بيرلو 🇮🇹", category: "كرة قدم ⚽" },
  { id: 26, name: "فرانشيسكو توتي 🇮🇹", category: "كرة قدم ⚽" },
  { id: 27, name: "أليساندرو ديل بييرو 🇮🇹", category: "كرة قدم ⚽" },
  { id: 28, name: "روبرتو باجيو 🇮🇹", category: "كرة قدم ⚽" },
  { id: 29, name: "جانلويجي بوفون 🇮🇹", category: "كرة قدم ⚽" },
  { id: 30, name: "إيكر كاسياس 🇪🇸", category: "كرة قدم ⚽" },
  { id: 31, name: "تشافي هيرنانديز 🇪🇸", category: "كرة قدم ⚽" },
  { id: 32, name: "أندريس إنييستا 🇪🇸", category: "كرة قدم ⚽" },
  { id: 33, name: "سيرخيو راموس 🇪🇸", category: "كرة قدم ⚽" },
  { id: 34, name: "كارليس بويول 🇪🇸", category: "كرة قدم ⚽" },
  { id: 35, name: "ديفيد بيكهام 🏴", category: "كرة قدم ⚽" },
  { id: 36, name: "واين روني 🏴", category: "كرة قدم ⚽" },
  { id: 37, name: "تييري هنري 🇫🇷", category: "كرة قدم ⚽" },
  { id: 38, name: "إريك كانتونا 🇫🇷", category: "كرة قدم ⚽" },
  { id: 39, name: "باتريك فييرا 🇫🇷", category: "كرة قدم ⚽" },
  { id: 40, name: "ديدييه دروغبا 🇨🇮", category: "كرة قدم ⚽" },
  { id: 41, name: "صامويل إيتو 🇨🇲", category: "كرة قدم ⚽" },
  { id: 42, name: "زلاتان إبراهيموفيتش 🇸🇪", category: "كرة قدم ⚽" },
  { id: 43, name: "أريين روبن 🇳🇱", category: "كرة قدم ⚽" },
  { id: 44, name: "فرانك ريبيري 🇫🇷", category: "كرة قدم ⚽" },
  { id: 45, name: "ستيفن جيرارد 🏴", category: "كرة قدم ⚽" },
  { id: 46, name: "فرانك لامبارد 🏴", category: "كرة قدم ⚽" },
  { id: 47, name: "بول سكولز 🏴", category: "كرة قدم ⚽" },
  { id: 48, name: "ريان غيغز 🏴", category: "كرة قدم ⚽" },
  { id: 49, name: "لويس سواريز 🇺🇾", category: "كرة قدم ⚽" },
  { id: 50, name: "نيمار 🇧🇷", category: "كرة قدم ⚽" },
  { id: 51, name: "كريم بنزيما 🇫🇷", category: "كرة قدم ⚽" },
  { id: 52, name: "لوكا مودريتش 🇭🇷", category: "كرة قدم ⚽" },
  { id: 53, name: "توني كروس 🇩🇪", category: "كرة قدم ⚽" },
  { id: 54, name: "سيرخيو بوسكيتس 🇪🇸", category: "كرة قدم ⚽" },
  { id: 55, name: "تشابي ألونسو 🇪🇸", category: "كرة قدم ⚽" },
  { id: 56, name: "ديفيد فيا 🇪🇸", category: "كرة قدم ⚽" },
  { id: 57, name: "فرناندو توريس 🇪🇸", category: "كرة قدم ⚽" },
  { id: 58, name: "كارلوس تيفيز 🇦🇷", category: "كرة قدم ⚽" },
  { id: 59, name: "سيرخيو أغويرو 🇦🇷", category: "كرة قدم ⚽" },
  { id: 60, name: "أنخيل دي ماريا 🇦🇷", category: "كرة قدم ⚽" },
  { id: 61, name: "غونزالو هيغواين 🇦🇷", category: "كرة قدم ⚽" },
  { id: 62, name: "خوان رومان ريكيلمي 🇦🇷", category: "كرة قدم ⚽" },
  { id: 63, name: "خافيير ماسكيرانو 🇦🇷", category: "كرة قدم ⚽" },
  { id: 64, name: "كلارنس سيدورف 🇳🇱", category: "كرة قدم ⚽" },
  { id: 65, name: "دينيس بيركامب 🇳🇱", category: "كرة قدم ⚽" },
  { id: 66, name: "غابرييل باتيستوتا 🇦🇷", category: "كرة قدم ⚽" },
  { id: 67, name: "راؤول غونزاليس 🇪🇸", category: "كرة قدم ⚽" },
  { id: 68, name: "أندريه شيفتشينكو 🇺🇦", category: "كرة قدم ⚽" },
  { id: 69, name: "جورج ويا 🇱🇷", category: "كرة قدم ⚽" },
  { id: 70, name: "مايكل أوين 🏴", category: "كرة قدم ⚽" },
  { id: 71, name: "آلان شيرر 🏴", category: "كرة قدم ⚽" },
  { id: 72, name: "كيني دالغليش 🏴", category: "كرة قدم ⚽" },
  { id: 73, name: "إيان راش 🏴", category: "كرة قدم ⚽" },
  { id: 74, name: "بيتر شمايكل 🇩🇰", category: "كرة قدم ⚽" },
  { id: 75, name: "أوليفر كان 🇩🇪", category: "كرة قدم ⚽" },
  { id: 76, name: "مانويل نوير 🇩🇪", category: "كرة قدم ⚽" },
  { id: 77, name: "فيليب لام 🇩🇪", category: "كرة قدم ⚽" },
  { id: 78, name: "باستيان شفاينشتايغر 🇩🇪", category: "كرة قدم ⚽" },
  { id: 79, name: "ميروسلاف كلوزه 🇩🇪", category: "كرة قدم ⚽" },
  { id: 80, name: "توماس مولر 🇩🇪", category: "كرة قدم ⚽" },
  { id: 81, name: "مسعود أوزيل 🇩🇪", category: "كرة قدم ⚽" },
  { id: 82, name: "جورجيو كيليني 🇮🇹", category: "كرة قدم ⚽" },
  { id: 83, name: "فابيو كانافارو 🇮🇹", category: "كرة قدم ⚽" },
  { id: 84, name: "أليساندرو نيستا 🇮🇹", category: "كرة قدم ⚽" },
  { id: 85, name: "كافو 🇧🇷", category: "كرة قدم ⚽" },
  { id: 86, name: "مارسيلو 🇧🇷", category: "كرة قدم ⚽" },
  { id: 87, name: "داني ألفيس 🇧🇷", category: "كرة قدم ⚽" },
  { id: 88, name: "تياغو سيلفا 🇧🇷", category: "كرة قدم ⚽" },
  { id: 89, name: "ريفالدو 🇧🇷", category: "كرة قدم ⚽" },
  { id: 90, name: "سقراط 🇧🇷", category: "كرة قدم ⚽" },
  { id: 91, name: "زيكو 🇧🇷", category: "كرة قدم ⚽" },
  { id: 92, name: "رونالد كومان 🇳🇱", category: "كرة قدم ⚽" },
  { id: 93, name: "لوثار ماتيوس 🇩🇪", category: "كرة قدم ⚽" },
  { id: 94, name: "روبرتو مانشيني 🇮🇹", category: "كرة قدم ⚽" },
  { id: 95, name: "فابيو كابيلو 🇮🇹", category: "كرة قدم ⚽" },
  { id: 96, name: "كيليان مبابي 🇫🇷", category: "كرة قدم ⚽" },
  { id: 97, name: "إيرلينغ هالاند 🇳🇴", category: "كرة قدم ⚽" },
  { id: 98, name: "محمد صلاح 🇪🇬", category: "كرة قدم ⚽" },
  { id: 99, name: "فينيسيوس جونيور 🇧🇷", category: "كرة قدم ⚽" },
  { id: 100, name: "هاري كين 🏴", category: "كرة قدم ⚽" },
  { id: 101, name: "كيفن دي بروين 🇧🇪", category: "كرة قدم ⚽" },
  { id: 102, name: "روبرت ليفاندوفسكي 🇵🇱", category: "كرة قدم ⚽" },
  { id: 103, name: "أنطوان غريزمان 🇫🇷", category: "كرة قدم ⚽" },
  { id: 104, name: "سون هيونغ مين 🇰🇷", category: "كرة قدم ⚽" },
  { id: 105, name: "ساديو ماني 🇸🇳", category: "كرة قدم ⚽" },
  { id: 106, name: "رياض محرز 🇩🇿", category: "كرة قدم ⚽" },
  { id: 107, name: "برونو فيرنانديز 🇵🇹", category: "كرة قدم ⚽" },
  { id: 108, name: "جود بيلينغهام 🏴", category: "كرة قدم ⚽" },
  { id: 109, name: "رودري 🇪🇸", category: "كرة قدم ⚽" },
  { id: 110, name: "فيل فودين 🏴", category: "كرة قدم ⚽" },
  { id: 111, name: "بوكايو ساكا 🏴", category: "كرة قدم ⚽" },
  { id: 112, name: "لامين يامال 🇪🇸", category: "كرة قدم ⚽" },
  { id: 113, name: "بيدري 🇪🇸", category: "كرة قدم ⚽" },
  { id: 114, name: "رافينيا 🇧🇷", category: "كرة قدم ⚽" },
  { id: 115, name: "رودريغو 🇧🇷", category: "كرة قدم ⚽" },
  { id: 116, name: "فيديريكو فالفيردي 🇺🇾", category: "كرة قدم ⚽" },
  { id: 117, name: "برناردو سيلفا 🇵🇹", category: "كرة قدم ⚽" },
  { id: 118, name: "فيتينيا 🇵🇹", category: "كرة قدم ⚽" },
  { id: 119, name: "جمال موسيالا 🇩🇪", category: "كرة قدم ⚽" },
  { id: 120, name: "فلوريان فيرتز 🇩🇪", category: "كرة قدم ⚽" },
  { id: 121, name: "كول بالمر 🏴", category: "كرة قدم ⚽" },
  { id: 122, name: "خفيتشا كفاراتسخيليا 🇬🇪", category: "كرة قدم ⚽" },
  { id: 123, name: "فيكتور أوسيمين 🇳🇬", category: "كرة قدم ⚽" },
  { id: 124, name: "لاوتارو مارتينيز 🇦🇷", category: "كرة قدم ⚽" },
  { id: 125, name: "جوليان ألفاريز 🇦🇷", category: "كرة قدم ⚽" },
  { id: 126, name: "ألكسندر إيزاك 🇸🇪", category: "كرة قدم ⚽" },
  { id: 127, name: "فيكتور غيوكيريس 🇸🇪", category: "كرة قدم ⚽" },
  { id: 128, name: "نيكو ويليامز 🇪🇸", category: "كرة قدم ⚽" },
  { id: 129, name: "لويس دياز 🇨🇴", category: "كرة قدم ⚽" },
  { id: 130, name: "كودي غاكبو 🇳🇱", category: "كرة قدم ⚽" },
  { id: 131, name: "جيريمي دوكو 🇧🇪", category: "كرة قدم ⚽" },
  { id: 132, name: "رافائيل لياو 🇵🇹", category: "كرة قدم ⚽" },
  { id: 133, name: "أليخاندرو غارناتشو 🇦🇷", category: "كرة قدم ⚽" },
  { id: 134, name: "جواو فيليكس 🇵🇹", category: "كرة قدم ⚽" },
  { id: 135, name: "كريستوفر نكونكو 🇫🇷", category: "كرة قدم ⚽" },
  { id: 136, name: "ماركوس راشفورد 🏴", category: "كرة قدم ⚽" },
  { id: 137, name: "عثمان ديمبيلي 🇫🇷", category: "كرة قدم ⚽" },
  { id: 138, name: "برادلي باركولا 🇫🇷", category: "كرة قدم ⚽" },
  { id: 139, name: "مايكل أوليسي 🇫🇷", category: "كرة قدم ⚽" },
  { id: 140, name: "ديكلان رايس 🏴", category: "كرة قدم ⚽" },
  { id: 141, name: "مارتن أوديغارد 🇳🇴", category: "كرة قدم ⚽" },
  { id: 142, name: "أليكسيس ماك أليستر 🇦🇷", category: "كرة قدم ⚽" },
  { id: 143, name: "جواو نيفيز 🇵🇹", category: "كرة قدم ⚽" },
  { id: 144, name: "أشرف حكيمي 🇲🇦", category: "كرة قدم ⚽" },
  { id: 145, name: "نونو مينديز 🇵🇹", category: "كرة قدم ⚽" },
  { id: 146, name: "ترينت ألكسندر-أرنولد 🏴", category: "كرة قدم ⚽" },
  { id: 147, name: "ألفونسو ديفيز 🇨🇦", category: "كرة قدم ⚽" },
  { id: 148, name: "ثيو هيرنانديز 🇫🇷", category: "كرة قدم ⚽" },
  { id: 149, name: "أنطونيو روديغر 🇩🇪", category: "كرة قدم ⚽" },
  { id: 150, name: "روبن دياز 🇵🇹", category: "كرة قدم ⚽" },
  { id: 151, name: "فيرجيل فان دايك 🇳🇱", category: "كرة قدم ⚽" },
  { id: 152, name: "ويليام ساليبا 🇫🇷", category: "كرة قدم ⚽" },
  { id: 153, name: "جول كوندي 🇫🇷", category: "كرة قدم ⚽" },
  { id: 154, name: "إيدير ميليتاو 🇧🇷", category: "كرة قدم ⚽" },
  { id: 155, name: "أليسون 🇧🇷", category: "كرة قدم ⚽" },
  { id: 156, name: "تيبو كورتوا 🇧🇪", category: "كرة قدم ⚽" },
  { id: 157, name: "إيميليانو مارتينيز 🇦🇷", category: "كرة قدم ⚽" },
  { id: 158, name: "إيدرسون 🇧🇷", category: "كرة قدم ⚽" },
  { id: 159, name: "جيانلويجي دوناروما 🇮🇹", category: "كرة قدم ⚽" },
  { id: 160, name: "كريستيان روميرو 🇦🇷", category: "كرة قدم ⚽" },
  { id: 161, name: "جون ستونز 🏴", category: "كرة قدم ⚽" },
  { id: 162, name: "أندرو روبرتسون 🏴", category: "كرة قدم ⚽" },
  { id: 163, name: "كيران تريبيير 🏴", category: "كرة قدم ⚽" },
  { id: 164, name: "جيمس ماديسون 🏴", category: "كرة قدم ⚽" },
  { id: 165, name: "إلكاي غوندوغان 🇩🇪", category: "كرة قدم ⚽" },
  { id: 166, name: "جوشوا كيميش 🇩🇪", category: "كرة قدم ⚽" },
  { id: 167, name: "ليون غوريتسكا 🇩🇪", category: "كرة قدم ⚽" },
  { id: 168, name: "نيكولو باريلا 🇮🇹", category: "كرة قدم ⚽" },
  { id: 169, name: "ساندرو تونالي 🇮🇹", category: "كرة قدم ⚽" },
  { id: 170, name: "سيرجي ميلينكوفيتش-سافيتش 🇷🇸", category: "كرة قدم ⚽" },
  { id: 171, name: "ماتياس دي ليخت 🇳🇱", category: "كرة قدم ⚽" },
  { id: 172, name: "دومينيك سوبوسلاي 🇭🇺", category: "كرة قدم ⚽" },
  { id: 173, name: "راسموس هويلوند 🇩🇰", category: "كرة قدم ⚽" },
  { id: 174, name: "بنيامين سيسكو 🇸🇮", category: "كرة قدم ⚽" },
  { id: 175, name: "داروين نونيز 🇺🇾", category: "كرة قدم ⚽" },
  { id: 176, name: "ديوغو جوتا 🇵🇹", category: "كرة قدم ⚽" },
  { id: 177, name: "أولي واتكينز 🏴", category: "كرة قدم ⚽" },
  { id: 178, name: "جارود بوين 🏴", category: "كرة قدم ⚽" },
  { id: 179, name: "أنطوني غوردون 🏴", category: "كرة قدم ⚽" },
  { id: 180, name: "كريستيان بوليسيتش 🇺🇸", category: "كرة قدم ⚽" },
  { id: 181, name: "كينغسلي كومان 🇫🇷", category: "كرة قدم ⚽" },
  { id: 182, name: "سيرج غنابري 🇩🇪", category: "كرة قدم ⚽" },
  { id: 183, name: "ليروي ساني 🇩🇪", category: "كرة قدم ⚽" },
  { id: 184, name: "كاي هافيرتز 🇩🇪", category: "كرة قدم ⚽" },
  { id: 185, name: "ريان شرقي 🇫🇷", category: "كرة قدم ⚽" },
  { id: 186, name: "أردا غولر 🇹🇷", category: "كرة قدم ⚽" },
  { id: 187, name: "تشافي سيمونز 🇳🇱", category: "كرة قدم ⚽" },
  { id: 188, name: "كينان يلديز 🇹🇷", category: "كرة قدم ⚽" },
  { id: 189, name: "إندريك 🇧🇷", category: "كرة قدم ⚽" },
  { id: 190, name: "يايا توريه 🇨🇮", category: "كرة قدم ⚽" },
  { id: 191, name: "ديفيد سيلفا 🇪🇸", category: "كرة قدم ⚽" },
  { id: 192, name: "سيسك فابريغاس 🇪🇸", category: "كرة قدم ⚽" },
  { id: 193, name: "إدينسون كافاني 🇺🇾", category: "كرة قدم ⚽" },
  { id: 194, name: "دييغو فورلان 🇺🇾", category: "كرة قدم ⚽" },
  { id: 195, name: "إدين هازارد 🇧🇪", category: "كرة قدم ⚽" },
  { id: 196, name: "فينسينت كومباني 🇧🇪", category: "كرة قدم ⚽" },
  { id: 197, name: "أوسكار 🇧🇷", category: "كرة قدم ⚽" },
  { id: 198, name: "فيرناندو مورينتس 🇪🇸", category: "كرة قدم ⚽" },
  { id: 199, name: "هيرنان كريسبو 🇦🇷", category: "كرة قدم ⚽" },
  { id: 200, name: "مايكل إيسيان 🇬🇭", category: "كرة قدم ⚽" }
];

function generatePlayerAvatar(name) {
  const cleanName = name.replace(/[\u1F600-\u1F6FF\u1F300-\u1F5FF\u1F680-\u1F6FF\u1F1E0-\u1F1FF]/g, '').trim();
  const initials = cleanName.substring(0, 2);
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'><rect width='200' height='200' fill='%231e3a8a'/><circle cx='100' cy='85' r='45' fill='%232563eb'/><text x='100' y='95' font-family='Arial, sans-serif' font-size='28' font-weight='bold' fill='white' text-anchor='middle'>${initials}</text><text x='100' y='165' font-family='Arial, sans-serif' font-size='16' font-weight='bold' fill='%2338bdf8' text-anchor='middle'>FOOTBALL</text></svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

footballPlayers.forEach(player => {
  if(!player.img) {
    player.img = generatePlayerAvatar(player.name);
  }
});

const otherCategories = {
  "أنمي 🦊": [
    { id: 201, name: "ناروتو أوزوماكي", category: "أنمي 🦊", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS97hnkXIOxkVPlJZpjah1eBGRlnLYypY41D5SN3AVYzQ&s=10" },
    { id: 202, name: "مونكي دي لوفي", category: "أنمي 🦊", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRX1q7at6tG-5R90dW-52ynxDlgo5EY74V2Ur7LsjSnQ&s" },
    { id: 203, name: "غوكو", category: "أنمي 🦊", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuaWj5yfrqjXhv0Kzi8Kx5XhnYkVbRofzteRGd5ikqqg&s=10" },
    { id: 204, name: "ايتاشي", category: "أنمي 🦊", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREA0DEa7Fy4IrqcLF08713EkDBZBDC8w_QaUBa9d_U5g&s=10" },
    { id: 205, name: "كيلوا", category: "أنمي 🦊", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2uXH3swvchjpBKHlqh2a5TAXuHgZSQxHDTpHc09utaQ&s=10" },
    { id: 206, name: "نيتروا", category: "أنمي 🦊", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbHqfUo_X2CefRzV04HLOW7CmUIT-okLasUjFpj1311Q&s=10" },
    { id: 207, name: "ايرين", category: "أنمي 🦊", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2DdRZackk0ZE-B1IaS1LSJV1-eX6T7YH5dvLR5nayzA&s=10" },
    { id: 208, name: "ميليوداس", category: "أنمي 🦊", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIcLvKTCVCNjIvdoNsk3dR3LnFJpTADN3vouZLKfTOVQ&s=10" },
    { id: 209, name: "زورو", category: "أنمي 🦊", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-uJTes3KG85WibtanKLE7UJ6suzcbH0P3mV2LoVNAvA&s" },
    { id: 210, name: "مادارا", category: "أنمي 🦊", img: "https://imgs.search.brave.com/Oit7i_Nt0aQhcezympoTIm290Djt-nqXZLohBc_0__s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ibG9n/Z2VyLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS9pbWcvYi9SMjl2/WjJ4bC9BVnZYc0Vo/cmgxWmxsTkxqTGVy/UjAxd2xZeWx3cEJF/R09iMTgzak1GcndH/d3RteXgyYnA1SkIx/ZmNXcXBYbjVQRjI0/dnpFRHFWSi1oNU5G/bnlwNjJvWl8tTFRY/N3NBWU5KcGdkY0l3/YXJvbldkc1VaSzEy/Z0piMlZwamJLSS0w/VGFOVmIwRjM3QzVO/ZVJuenRuMTNvL3Mx/NjAwL01hZGFyYStV/Y2hpaGErJTI4MSUy/OS5qcGc" },
    { id: 211, name: "ليفاي", category: "أنمي 🦊", img: "https://imgs.search.brave.com/DyBh2qXF3L7DFfWzMN-G42boSY0-TOL89eMG1HhWyCw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzI4L2Y2/L2MyLzI4ZjZjMmQ4/ZmJlYTU4ZjA1Mjhk/N2U4NDM3ZmQ3ZjVk/LmpwZw" },
    { id: 212, name: "سايتما", category: "أنمي 🦊", img: "https://imgs.search.brave.com/BsKD8dL_4jS_EZmP8TCi4jsZFNWaFq3vg3D6Xe01Dbs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2IzLzEx/L2FmL2IzMTFhZjM2/ZjA2OTcwOTU3Y2Fj/YjI2Y2I3ZmZkZWMy/LmpwZw" },
    { id: 213, name: "كاكاشي", category: "أنمي 🦊", img: "https://imgs.search.brave.com/UTqDNrDfgTtsrwFD2lU9hZgLKHbPRp5RFxWsogIl5PQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ibG9n/Z2VyLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS9pbWcvYS9BVnZY/c0VoZkJBenY0ZmpM/ZDBtWmo0LTZyUXpx/UXVKWnBKaVpKd1NH/NldLcGZ2VmRIdW1V/X0owdGJXWkhweUlk/TEhycjUydGN4eU16/eG9NS1JPWDh6R1NR/SkVyS0pwQnl5bUFJ/aG8yakd1OExFOVFL/WFNpRHJaN3JNZUh2/dVBBdlBlZFdraVpw/azJYeVR3cFVCaDFC/YllyNmFVUE5YMFpX/QkQtcVVDNGZzc1Jj/aDhSRTU1X1BGQXdJ/bjRNUkZ5OXFBQT13/MzIwLWgyOTEtcnc" },
    { id: 214, name: "فيجيتا", category: "أنمي 🦊", img: "https://imgs.search.brave.com/GmeZvFqdRr1vaqAWMuj4vMOHwu0TKAlrk-1rgbBa5FI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly92c3Rh/dGljLnZpZXRuYW0u/dm4vdmlldG5hbS9y/ZXNvdXJjZS9JTUFH/RS8yMDI2LzA2LzI2/LzE3ODI0NjY4MTI1/OThfc3VwZXItc2Fp/eWFuLWJsdWUtZXZv/bHZlZC12ZWdldGEt/MTc4MjMyMTk1NTMx/MDkxNzE1NjYxMC53/ZWJw" },
    { id: 215, name: "غون", category: "أنمي 🦊", img: "https://imgs.search.brave.com/3jJhOxnoZnHAVlK_7FXgB9AsVvuvwhDWBirjKZgEQVE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ibG9n/Z2VyLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS9pbWcvYi9SMjl2/WjJ4bC9BVnZYc0Vo/LXB3ejlWZDljckE3/azhPQXVaVVNRMVlG/MHNGb1laOVpyRVdu/eUxxNGQtQjltRjJz/UHh2U2VGQ0FidWtP/U29BZjByMC1Az3JO/RnhlQXA1Q2RxQWZu/eC1vNHV0VDFKYmc0/NVo5S1NsZmRxV1hr/ckNlXy1DTWdtZ0xI/Wmlpd0JYZmcwdnFR/NmNMTFBoX2lad1Jr/eFVsbURwRGpveERR/dk1oVlY0cllPTDZh/RThfNGdSVlp1WWh6/eTY5NU5KZy93MzIw/LWgzMjAtcncvMjEy/NzkyNTc1MmM5YWUz/YmRiNDhmNTk1MWY1/MTE1MzIuanBn" },
    { id: 216, name: "اول مايت", category: "أنمي 🦊", img: "https://imgs.search.brave.com/ZjGbvhpV1ezbf0lyrBgepZJELa9PPYaPg8VqYewC9Ck/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ibG9n/Z2VyLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS9pbWcvYi9SMjl2/WjJ4bC9BVnZYc0Vn/d0h2dHhpbjkweUFG/SVpfazF3SmQzemJE/REs1UzVtejRqS2kt/aVdIOVZucFItMXl6/M0J6N0Y1WTYzTHpP/MGlDalZwRmdjWmla/TGNtRERGZ2JxQi01/TTdWM2JjSWtNQXVh/WV_qqFCdEk0elRm/UXYzeDBOMVJ5MnJ2/SlVFMmRqTDdWVUFD/QnNYY0dfdUhLL3M2/NDAvYWxsLW1pZ2h0/LW9yaWdpbnMuanBn" },
    { id: 217, name: "ميدوريا", category: "أنمي 🦊", img: "https://imgs.search.brave.com/1J2BHqrLhHXPgyjhnx6gOrTLnInkKBuI4QCuNmiiQTk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzM3L2E2/LzVlLzM3YTY1ZTk4/YjNmNWQ5NWIwY2Fi/YThjOGM1YTllNThi/LmpwZw" },
    { id: 218, name: "غوجو ساتوروا", category: "أنمي 🦊", img: "https://imgs.search.brave.com/N1BFd35Y1ksbY6QQDoiZ19befJyXcYe87S5S74z--ls/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ibG9n/Z2VyLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS9pbWcvYi9SMjl2/WjJ4bC9BVnZYc0Vp/U2JuN1lDX05yMkhy/OWZRTU9uWGtsWG5p/M3Z4RjNnWWJQdElU/U2F5azZCV1RmU1lR/LWRKSjRnb1hpZ0du/ZUhWMVVsZTBFN2Zq/aTV6OU1jTElMN2dJ/LTZOUDVJRVJGaXdQ/WmNWN1FEdnBNam5I/NGJpMEFxdDdvbDY2/U21sUDd4dkdsemhQ/aGJ1OXJtd2hNL3cz/MjAtaDMyMC1ydy9G/Ql9JTUdfMTYxMDIy/MDg3ODQxNC5qcGc" },
    { id: 219, name: "نامي", category: "أنمي 🦊", img: "https://i.pinimg.com/736x/f4/48/4e/f4484e9946033c7d83e3443e72c99c21.jpg" },
    { id: 220, name: "جارب", category: "أنمي 🦊", img: "https://i.pinimg.com/736x/8e/52/1b/8e521bf3116a3d5cdb4d2120d2941531.jpg" },
    { id: 221, name: "تسونادي", category: "أنمي 🦊", img: "https://i.pinimg.com/736x/36/59/79/36597978eca73f59dc29f9507b8bfee0.jpg" },
    { id: 222, name: "جيرايا", category: "أنمي 🦊", img: "https://i.pinimg.com/736x/46/99/2c/46992ca220a18ea8e3c4d22c00ac19b0.jpg" },
    { id: 223, name: "باين", category: "أنمي 🦊", img: "https://i.pinimg.com/736x/32/1d/95/321d95505a288d1f317d8ec6e7c6710b.jpg" }
  ],
  "يوتيوبرز 📹": [
    { id: 224, name: "MrBeast", category: "يوتيوبرز 📹", img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><rect width='200' height='200' fill='%230891b2'/><circle cx='100' cy='85' r='45' fill='%23f43f5e'/><text x='100' y='160' font-family='Arial' font-size='22' font-weight='bold' fill='white' text-anchor='middle'>MRBEAST</text></svg>" },
    { id: 225, name: "أبو فلة", category: "يوتيوبرز 📹", img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><rect width='200' height='200' fill='%234d7c0f'/><circle cx='100' cy='85' r='45' fill='%23fef08a'/><text x='100' y='160' font-family='Arial' font-size='22' font-weight='bold' fill='white' text-anchor='middle'>ABOFLAH</text></svg>" }
  ],
  "مغنون 🎤": [
    { id: 226, name: "مايكل جاكسون", category: "مغنون 🎤", img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><rect width='200' height='200' fill='%23111827'/><circle cx='100' cy='85' r='45' fill='%23e5e7eb'/><text x='100' y='160' font-family='Arial' font-size='20' font-weight='bold' fill='white' text-anchor='middle'>M. JACKSON</text></svg>" },
    { id: 227, name: "عمرو دياب", category: "مغنون 🎤", img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><rect width='200' height='200' fill='%23854d0e'/><circle cx='100' cy='85' r='45' fill='%23fef08a'/><text x='100' y='160' font-family='Arial' font-size='20' font-weight='bold' fill='white' text-anchor='middle'>AMR DIAB</text></svg>" }
  ]
};

const characterCategories = {
  "كرة قدم ⚽": footballPlayers,
  ...otherCategories
};

// إضافة خوادم STUN متعددة لربط الأجهزة وتجاوز جدران الحماية
const peerConfig = {
  config: {
    iceServers: [
      { urls: 'stun:stun.l.google.com:19302' },
      { urls: 'stun:stun1.l.google.com:19302' },
      { urls: 'stun:stun2.l.google.com:19302' },
      { urls: 'stun:stun3.l.google.com:19302' },
      { urls: 'stun:stun4.l.google.com:19302' }
    ]
  }
};

let peer = null;
let conn = null;
let typingTimeout = null;
let selectedCategoryByHost = "كرة قدم ⚽";

document.addEventListener('DOMContentLoaded', () => {
  const createBtn = document.getElementById('createBtn');
  const copyBtn = document.getElementById('copyBtn');
  const sendBtn = document.getElementById('sendBtn');
  const msgInput = document.getElementById('msgInput');

  if (createBtn) createBtn.addEventListener('click', createRoom);
  if (copyBtn) copyBtn.addEventListener('click', copyLink);
  if (sendBtn) sendBtn.addEventListener('click', sendMsg);

  if (msgInput) {
    msgInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') sendMsg();
    });

    msgInput.addEventListener('input', () => {
      if (conn) {
        conn.send({ type: 'typing', isTyping: true });
        clearTimeout(typingTimeout);
        typingTimeout = setTimeout(() => {
          conn.send({ type: 'typing', isTyping: false });
        }, 2000);
      }
    });
  }

  const urlParams = new URLSearchParams(window.location.search);
  const hostId = urlParams.get('room');
  const catFromUrl = urlParams.get('cat');

  if (catFromUrl && characterCategories[catFromUrl]) {
    selectedCategoryByHost = catFromUrl;
  }

  if (hostId) {
    if (createBtn) {
      createBtn.innerText = "جاري الاتصال بصديقك... ⏳";
      createBtn.disabled = true;
    }
    
    const catSelectArea = document.getElementById('categorySelectArea');
    if (catSelectArea) catSelectArea.classList.add('hidden');

    joinRoom(hostId);
  }
});

function createRoom() {
  const createBtn = document.getElementById('createBtn');
  const categorySelect = document.getElementById('categorySelect');
  
  if (categorySelect) {
    selectedCategoryByHost = categorySelect.value;
    categorySelect.disabled = true;
  }

  if (createBtn) {
    createBtn.innerText = "جاري إنشاء الغرفة... ⏳";
    createBtn.disabled = true;
  }

  if (typeof Peer === 'undefined') {
    alert("لم يتم تحميل مكتبة الاتصال (PeerJS) بنجاح، يرجى التأكد من الاتصال بالإنترنت.");
    if (createBtn) {
      createBtn.innerText = "إنشاء غرفة جديدة 🎮";
      createBtn.disabled = false;
    }
    if (categorySelect) categorySelect.disabled = false;
    return;
  }

  peer = new Peer(peerConfig);

  peer.on('open', (id) => {
    if (createBtn) createBtn.innerText = "في انتظار انضمام صديقك... ⏳";
    
    const fullLink = window.location.origin + window.location.pathname + 
                     '?room=' + id + '&cat=' + encodeURIComponent(selectedCategoryByHost);
    
    const inviteLink = document.getElementById('inviteLink');
    const linkArea = document.getElementById('linkArea');
    
    if (inviteLink) inviteLink.value = fullLink;
    if (linkArea) linkArea.classList.remove('hidden');
  });

  peer.on('connection', (connection) => {
    conn = connection;
    setupConnectionEvents();
    conn.on('open', () => {
      setupGameAsHost();
    });
  });

  peer.on('error', (err) => {
    console.error("PeerJS Error:", err);
    alert('حدث خطأ أثناء الاتصال بالخادم، أعد المحاولة.');
    if (createBtn) {
      createBtn.innerText = "إنشاء غرفة جديدة 🎮";
      createBtn.disabled = false;
    }
    if (categorySelect) categorySelect.disabled = false;
  });
}

function joinRoom(hostId) {
  if (typeof Peer === 'undefined') {
    alert("تعذر تحميل مكتبة الاتصال (PeerJS).");
    return;
  }

  peer = new Peer(peerConfig);

  peer.on('open', () => {
    conn = peer.connect(hostId, { reliable: true });
    setupConnectionEvents();
  });

  peer.on('error', (err) => {
    console.error("PeerJS Connection Error:", err);
    alert('تعذر الاتصال بصديقك، أعد المحاولة أو قم بتحديث الصفحة.');
  });
}

function setupGameAsHost() {
  const pool = characterCategories[selectedCategoryByHost] || footballPlayers;

  const p1Index = Math.floor(Math.random() * pool.length);
  let p2Index = Math.floor(Math.random() * pool.length);

  while (p2Index === p1Index && pool.length > 1) {
    p2Index = Math.floor(Math.random() * pool.length);
  }

  const hostChar = pool[p1Index];
  const guestChar = pool[p2Index];

  conn.send({
    type: 'start',
    guestChar: guestChar,
    hostChar: hostChar
  });

  startGameUI(guestChar);
}

function setupConnectionEvents() {
  conn.on('data', (data) => {
    if (data.type === 'start') {
      startGameUI(data.hostChar);
    } else if (data.type === 'chat') {
      const typingIndicator = document.getElementById('typingIndicator');
      if (typingIndicator) typingIndicator.classList.add('hidden');
      addMessage(data.msg, 'opponent');
    } else if (data.type === 'typing') {
      const typingElem = document.getElementById('typingIndicator');
      if (typingElem) {
        if (data.isTyping) {
          typingElem.classList.remove('hidden');
        } else {
          typingElem.classList.add('hidden');
        }
      }
    }
  });
}

function startGameUI(charForOpponent) {
  const lobby = document.getElementById('lobby');
  const gameArea = document.getElementById('gameArea');
  
  if (lobby) lobby.classList.add('hidden');
  if (gameArea) gameArea.classList.remove('hidden');

  const categoryBadge = document.getElementById('categoryBadge');
  const opponentImg = document.getElementById('opponentImg');
  const opponentName = document.getElementById('opponentName');

  if (categoryBadge) categoryBadge.innerText = charForOpponent.category;
  if (opponentImg) opponentImg.src = charForOpponent.img;
  if (opponentName) opponentName.innerText = charForOpponent.name;

  const chatBox = document.getElementById('chatBox');
  if (chatBox) {
    chatBox.innerHTML = '<div class="msg system">✨ تم الاتصال بنجاح! التصنيف المختار لهذه الجولة: (' + charForOpponent.category + ').</div>';
  }
}

function copyLink() {
  const linkInput = document.getElementById('inviteLink');
  if (linkInput) {
    linkInput.select();
    navigator.clipboard.writeText(linkInput.value);
    alert('تم نسخ الرابط! أرسله لصديقك الآن.');
  }
}

function sendMsg() {
  const input = document.getElementById('msgInput');
  if (!input) return;

  const msg = input.value.trim();

  if (msg && conn) {
    conn.send({ type: 'chat', msg: msg });
    conn.send({ type: 'typing', isTyping: false });
    addMessage(msg, 'me');
    input.value = '';
  }
}

function addMessage(msg, sender) {
  const chatBox = document.getElementById('chatBox');
  if (!chatBox) return;

  const msgElement = document.createElement('div');
  msgElement.classList.add('msg', sender);
  msgElement.innerHTML = '<b>' + (sender === 'me' ? 'أنت' : 'صديقك') + ':</b> ' + msg;

  chatBox.appendChild(msgElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}
