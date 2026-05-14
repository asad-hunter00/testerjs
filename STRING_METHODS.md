# JavaScript String Metodlari va Search Metodi

## 📚 Kirish
Bu dokumentda JavaScript-da stringlar (satrlar) bilan ishlash uchun ishlatiladigan barcha muhim metodlar va ularning vazifasi tushuntiriladi.

---

## 🔤 String Metodlari

### 1. **indexOf() / lastIndexOf()**
Stringda biror qiymat qayerda joylashganini topadi.

```javascript
let str = "Salom Dunyo";

// indexOf - birinchisini topadi
console.log(str.indexOf("Dunyo"));     // 6
console.log(str.indexOf("o"));         // 4
console.log(str.indexOf("xyz"));       // -1 (topilmadi)

// lastIndexOf - oxirgisini topadi
console.log(str.lastIndexOf("o"));     // 10
console.log(str.lastIndexOf("Salom")); // 0
```

**Qaytaradi:** Indeks raqami (0-dan boshlanib) yoki -1 (topilmasa)

---

### 2. **search()**
Regular expression (regex) yordamida stringda qidiruv qiladi.

```javascript
let str = "Salom 2024 Dunyo";

// Birinchi raqamni topadi
console.log(str.search(/[0-9]/));      // 6

// Regex bilan qidiruv
console.log(str.search(/Dunyo/));      // 11
console.log(str.search(/salom/i));     // 0 (case-insensitive)
console.log(str.search(/xyz/));        // -1 (topilmadi)
```

**Qaytaradi:** Indeks raqami yoki -1

---

### 3. **match()**
Regex bilan mos keladigan barcha qismlarni massiv shaklida qaytaradi.

```javascript
let str = "Email: test@mail.com va admin@site.uz";

// Barcha @ belgilarini topadi
console.log(str.match(/@/g));          // ["@", "@"]

// Barcha emaillarni topadi
console.log(str.match(/[\w.-]+@[\w.-]+\.\w+/g));
// ["test@mail.com", "admin@site.uz"]

// Birinchi mos qismini topadi
console.log(str.match(/\d+/));         // null (raqam yo'q)
```

**Qaytaradi:** Massiv yoki null

---

### 4. **includes()**
Stringda shu qiymat bor yoki yo'qligini tekshiradi (true/false).

```javascript
let str = "Salom Dunyo";

console.log(str.includes("Salom"));     // true
console.log(str.includes("Xayr"));      // false
console.log(str.includes("Dunyo"));     // true
console.log(str.includes("salom"));     // false (case-sensitive)
```

**Qaytaradi:** true yoki false

---

### 5. **startsWith() / endsWith()**
Stringning boshi yoki oxiri shunday qiymatdan boshlanadi yoki tugaydi.

```javascript
let str = "Salom Dunyo";

// Boshi tekshirish
console.log(str.startsWith("Salom"));   // true
console.log(str.startsWith("Dunyo"));   // false
console.log(str.startsWith("Sa"));      // true

// Oxiri tekshirish
console.log(str.endsWith("Dunyo"));     // true
console.log(str.endsWith("Salom"));     // false
console.log(str.endsWith("nyo"));       // true
```

**Qaytaradi:** true yoki false

---

### 6. **split()**
Stringni berilgan belgi bo'yicha parchalarga ajratadi.

```javascript
let str = "Salom,Dunyo,Programmist";

console.log(str.split(","));            // ["Salom", "Dunyo", "Programmist"]
console.log(str.split(""));             // ['S','a','l','o','m',...] (har bir harf)
console.log(str.split(" "));            // ["Salom,Dunyo,Programmist"]
console.log(str.split(",", 2));         // ["Salom", "Dunyo"] (faqat 2 ta)
```

**Qaytaradi:** Massiv

---

### 7. **substring() / slice()**
Stringdan qismini chiqaradi.

```javascript
let str = "Salom Dunyo";

// substring(start, end)
console.log(str.substring(0, 5));       // "Salom"
console.log(str.substring(6));          // "Dunyo"
console.log(str.substring(2, 5));       // "lom"

// slice(start, end) - slice manfiysni qabul qiladi
console.log(str.slice(0, 5));           // "Salom"
console.log(str.slice(6));              // "Dunyo"
console.log(str.slice(-5));             // "Dunyo" (oxiridan 5 ta)
console.log(str.slice(-5, -2));         // "Dun"
```

**Qaytaradi:** String

---

### 8. **replace() / replaceAll()**
Stringdagi qismni boshqasiga almashtirib yuboradi.

```javascript
let str = "Salom Salom";

// replace - faqat birinchitasini almashtirib yuboradi
console.log(str.replace("Salom", "Xayr"));      // "Xayr Salom"

// replaceAll - hammasini almashtirib yuboradi
console.log(str.replaceAll("Salom", "Xayr"));   // "Xayr Xayr"

// Regex bilan
let str2 = "apple123banana456cherry";
console.log(str2.replace(/[0-9]/g, "X"));       // "appleXXXbananaXXXcherry"
```

**Qaytaradi:** Yangi string

---

### 9. **toUpperCase() / toLowerCase()**
Stringni katta yoki kichik harflarga o'giradi.

```javascript
let str = "Salom Dunyo";

console.log(str.toUpperCase());         // "SALOM DUNYO"
console.log(str.toLowerCase());         // "salom dunyo"
```

---

### 10. **trim()**
Stringning boshi va oxiridagi bo'sh joylarni olib tashlaydi.

```javascript
let str = "   Salom Dunyo   ";

console.log(str.trim());                // "Salom Dunyo"
console.log(str.trimStart());           // "Salom Dunyo   "
console.log(str.trimEnd());             // "   Salom Dunyo"
```

---

### 11. **repeat()**
Stringni belgilangan marta takrorlab yuboradi.

```javascript
let str = "Ha";

console.log(str.repeat(3));             // "HaHaHa"
console.log("*".repeat(10));            // "**********"
```

---

### 12. **concat()**
Bir nechta stringlarni birlashtirib yuboradi.

```javascript
let str1 = "Salom";
let str2 = "Dunyo";

console.log(str1.concat(" ", str2));    // "Salom Dunyo"
console.log("Hello".concat(" ", "World")); // "Hello World"
```

---

## 🔍 Search() va indexOf() Taqqoslash

| Metod | indexOf() | search() |
|-------|-----------|----------|
| **Qidiruv turi** | Sodda string | Regex yoki string |
| **Regex qo'llash** | ❌ yo'q | ✅ ha |
| **Regex xossalari** | - | `/g`, `/i`, `/m` ishlatib bo'ladi |
| **Tezligi** | Tezroq | Sekinroq |

### Taqqoslash Misollar

```javascript
let str = "Salom Dunyo Salom";

// indexOf - sodda qidiruv
console.log(str.indexOf("Salom"));      // 0 (birinchisi)
console.log(str.indexOf("Salom", 1));   // 12 (1-indeksdan boshlab)

// search - regex bilan qidiruv
console.log(str.search(/salom/i));      // 0 (case-insensitive)
console.log(str.search(/[a-z]+/));      // 0 (birinchi harf)
console.log(str.search(/Dunyo/));       // 6

// match - barcha mos qismlarni topadi
console.log(str.match(/Salom/g));       // ["Salom", "Salom"]
```

---

## 💡 Amaliy Misollar

### Email Tekshirish
```javascript
function emailCheck(email) {
    return email.includes("@") && email.includes(".");
}

console.log(emailCheck("test@mail.com"));    // true
console.log(emailCheck("testmail.com"));     // false
```

### Telefon Raqamini Formatlash
```javascript
let phone = "9876543210";
console.log(phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3"));
// (987) 654-3210
```

### Palindrom Tekshirish
```javascript
function isPalindrome(str) {
    let cleaned = str.toLowerCase().replace(/\s/g, "");
    return cleaned === cleaned.split("").reverse().join("");
}

console.log(isPalindrome("Racecar"));    // true
console.log(isPalindrome("Hello"));      // false
```

### URL-dan Query Parameter Olish
```javascript
let url = "https://example.com?name=John&age=25";
let params = url.split("?")[1].split("&");
console.log(params);  // ["name=John", "age=25"]
```

---

## 📝 Xulosa

✅ **String Metodlarining Umumiy Maqsadi:**
- Stringlarni qidiruv va tahlil qilish
- Stringlarni o'zgartirish va formatlash
- Stringlarni validatsiya qilish

✅ **Search() Metodining Xususiyati:**
- Regex bilan qidiruv imkoniyati
- Pattern matching uchun mo'ljallangan
- indexOf() dan ko'ra kuchliroq lekin sekinroq

---

**Muallif:** Asad Hunter  
**Sana:** 2026-05-05
