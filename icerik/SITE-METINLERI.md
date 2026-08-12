# Site Metinleri — BAT CRAFT

Buradaki her metin **kopyala-yapıştır** hazır. Shopify admin'de nereye gideceği
her bölümün başında yazıyor.

`{{ }}` içindeki yerler senden gelecek bilgiyi bekliyor — doldurunca haber ver,
ben güncellerim.

> ⚠️ Tüm metinler yasaklı kelime taramasından geçti: koruma, savunma, güvenlik,
> caydırıcı, hırsız, silah — hiçbiri yok. Bu kural bozulursa Meta reklam hesabı
> risk altına girer. → `yasal/YASAL-RISKLER.md`

---

## 1. Mağaza ayarları

**Settings → General**

| Alan | Değer |
|---|---|
| Store name | `BAT CRAFT` |
| Store contact email | `badcraft.official34@gmail.com` (kurumsal mail kurulunca değişecek) |
| Sender email | `badcraft.official34@gmail.com` (kurumsal mail kurulunca değişecek) |
| Currency | `TRY — Türk Lirası` |
| Time zone | `(GMT+03:00) Istanbul` |
| Unit system | Metric, kg |

**Online Store → Preferences → Homepage title & meta**

- **Title:** `BAT CRAFT — İsme Özel Ahşap Beyzbol Sopası`
- **Meta description:**
  `Adı sana ait bir parça. İstediğin ismi lazerle ahşaba oyuyoruz — sticker değil, oyma. Hediyeye hazır ambalajıyla 2 iş gününde kapında.`

---

## 2. Ürün sayfası

**Products → Add product**

### Ürün adı
```
İsme Özel Ahşap Beyzbol Sopası
```

### Ürün açıklaması (HTML — "<>" butonuna basıp yapıştır)

```html
<p><strong>Üzerinde senin ismin var. Kopyası yok.</strong></p>

<p>Her sopa tek tek bitiriliyor, ismin lazerle ahşaba oyuluyor. Sticker değil,
baskı değil — oyma. Elini gezdirince hissedersin, zamanla da silinmez.</p>

<h3>Ne alıyorsun</h3>
<ul>
  <li>Ahşap gövde · 66 cm uzunluk · 5,5-6 cm çap</li>
  <li>Lazer gravür — istediğin isim, en fazla 20 karakter</li>
  <li>Türkçe karakter desteği: Ğ, Ş, İ, Ç, Ö, Ü</li>
  <li>Hediyeye hazır ambalaj</li>
</ul>

<h3>Nasıl ısmarlanır</h3>
<ol>
  <li>Yukarıdaki kutuya ismi yaz — sopanın üstünde anında görürsün.</li>
  <li>Siparişi ver.</li>
  <li>Kazımadan önce WhatsApp'tan son bir onay alırız. Yazımdan emin oluruz.</li>
  <li>2 iş günü içinde kargoya verilir.</li>
</ol>

<h3>Bilmen gerekenler</h3>
<p>Sana özel üretildiği için <strong>iade ve değişim alınmıyor</strong>
(Mesafeli Sözleşmeler Yönetmeliği m.15/ç). Bu yüzden kazımadan önce yazımı
seninle birlikte teyit ediyoruz.</p>

<p>Emoji ve özel semboller ahşaba kazınamıyor — harf, rakam ve boşluk kullanabilirsin.</p>

<p>18 yaş üstü müşterilere satılır. Hediyelik ve koleksiyon amaçlıdır.</p>
```

### SEO (ürün sayfası altındaki "Search engine listing → Edit")
- **Page title:** `İsme Özel Ahşap Beyzbol Sopası | BAT CRAFT`
- **Meta description:**
  `İstediğin ismi lazerle ahşaba oyuyoruz. Sticker değil, oyma. Hediyeye hazır ambalaj, 2 iş gününde kargoda.`
- **URL handle:** `isme-ozel-ahsap-beyzbol-sopasi`

### Kategori (⚠️ önemli)
**Product category:** `Sporting Goods > Athletics > Baseball & Softball > Baseball & Softball Bats`

> Bu alan Meta kataloğuna ürün kategorisi olarak gidiyor. Yanlış kategori
> politika ihlali riski yaratır. → `yasal/YASAL-RISKLER.md`

### Varyantlar
{{ Kaç boy / kaç ahşap tonu satılacak? Bilgi gelince buraya yazacağım. }}

### Ağırlık ve kargo
- Kargo: **2 desi**
- ⚠️ 2 desi üzerinden sabit kargo ücreti gir (uzun ürün desi hesabı ağırlıktan değil hacimden gelir).

---

## 3. Ana sayfa

**Online Store → Themes → Customize**

### Hero (en üst)
- **Başlık:** `Adı yazılır. Kapına gelir.`
- **Alt metin:** `İstediğin ismi ahşaba oyuyoruz. Sticker değil — oyma.`
- **Buton:** `İsmini yaz` → ürün sayfasına

### Bölüm 2 — Ürün
Ürün kartı + `Sepete eklemeden önce ismini yazıp sopanın üstünde gör.`

### Bölüm 3 — "Nasıl yapılıyor" (video bölümü)
- **Başlık:** `Sticker değil. Oyma.`
- **Metin:**
  `Lazer ahşabın içine giriyor. Yüzeye yapıştırılmış bir şey değil — ahşabın
  kendisi. Elini gezdirince hissedersin.`
- Video: lazerin kazıma anı

### Bölüm 4 — Üç madde (ikonlu)
| Başlık | Metin |
|---|---|
| `Tek. Kopyası yok.` | `Üzerinde senin yazdığın isim var. Aynısından ikinci bir tane yok.` |
| `Gerçek ahşap, gerçek gravür.` | `Baskı değil, sticker değil. Ahşaba oyulmuş.` |
| `2 iş gününde kargoda.` | `Onayını alırız, kazırız, yola çıkarırız.` |

### Bölüm 5 — Yorumlar
{{ İlk 5 yorum gelince buraya yerleşecek — Faz 8.1.3 }}

### Bölüm 6 — Hediye
- **Başlık:** `Hediye alacaksan`
- **Metin:**
  `Doğum günü, dükkân açılışı, damat hediyesi, askerlik dönüşü. Üzerinde adı
  yazan bir şey, herkesin aldığı şeye benzemiyor.`
- **Buton:** `Hediye olarak ısmarla`

### Bölüm 7 — SSS akordiyonu
Aşağıdaki SSS bölümünden ilk 5 soru.

---

## 4. SSS sayfası

**Pages → Add page → başlık: `Sık Sorulan Sorular`**

**Kaç karakter yazabilirim?**
En fazla 20 karakter. Boşluk da bir karakter sayılıyor. Ürün sayfasındaki kutuya
yazarken sayaç sana kalan hakkını gösteriyor.

**Türkçe karakter yazabilir miyim?**
Evet. Ğ, Ş, İ, Ç, Ö, Ü hepsi kazınıyor.

**Emoji veya sembol yazabilir miyim?**
Hayır. Lazer bunları ahşaba oyamıyor. Harf, rakam ve boşluk kullanabilirsin.

**Kaç günde gelir?**
Sipariş onayından sonra 2 iş günü içinde kargoya veriliyor.
Kargo süresi bulunduğun şehre göre 1-3 gün.

**Yanlış isim yazarsam ne olur?**
Kazımadan önce WhatsApp'tan sana yazıp "şunu yazacağız, onaylıyor musun?" diye
soruyoruz. O yüzden yanlış gitme ihtimali yok denecek kadar az. Sipariş verdikten
sonra fark edersen hemen yaz, kazımadan önceyse değiştiririz.

**İade edebilir miyim?**
Sana özel üretilen ürünlerde iade hakkı bulunmuyor (Mesafeli Sözleşmeler
Yönetmeliği m.15/ç). Üzerinde senin ismin olan bir ürünü başkasına satamadığımız
için. Bu yüzden kazımadan önce mutlaka teyit alıyoruz.
Ürün hatalı veya hasarlı gelirse tabii ki değiştiriyoruz.

**Ölçüleri nedir?**
66 cm uzunluğunda, en geniş yerinde 5,5-6 cm. Kargoda 2 desi.

**Hangi ahşaptan yapılıyor?**
{{ ahşap cinsi — dişbudak / kayın / meşe? }}

**Toplu sipariş yapabilir miyim?**
Evet. Dükkân açılışı, takım, iş yeri hediyesi gibi toplu siparişler için
`badcraft.official34@gmail.com` adresine yaz veya WhatsApp'tan ulaş.

**Ambalajı nasıl?**
Hediyeye hazır kutusunda geliyor. Ayrıca hediye paketi istersen sipariş
sırasında işaretleyebilirsin.

---

## 5. Hakkımızda sayfası

**Pages → Add page → başlık: `Hakkımızda`**

```
Seri üretim bir şeyin üzerinde kimsenin adı yazmaz.

Rafta duran her ürün binlerce kopyadan biridir. Kırılırsa yenisi alınır,
kaybolursa aranmaz. Çünkü kimsenin değildir.

Bir şeyin üzerine bir isim yazdığın anda o şey eşya olmaktan çıkar.
Sahiplenilmiş bir şey olur. Saklanır, verilmez, hatırlanır.

BAT CRAFT tam olarak bunu yapıyor. Ahşabı alıyoruz, üzerine senin verdiğin ismi
oyuyoruz. Baskı değil, sticker değil — lazer ahşabın içine giriyor. Elini
gezdirince hissedersin.

Her sopa tek tek hazırlanıyor. Kazımadan önce yazımı seninle teyit ediyoruz,
çünkü ikinci şansı yok.

Adı olan bir şey yapıyoruz. O kadar.
```

---

## 6. İletişim sayfası

**Pages → Add page → başlık: `İletişim`** (template: `page.contact`)

```
Sorusu olan yazsın.

E-posta: badcraft.official34@gmail.com
WhatsApp: {{numara}}

Mesajlara hafta içi aynı gün, hafta sonu ertesi iş günü dönüyoruz.
```

---

## 7. Koleksiyonlar — ⏸️ şimdilik gerek yok

Tek ürünle başlıyoruz; koleksiyon sayfası boş bir katman ekler, müşteriyi ürünle
arasına bir tık koyar. Ana sayfa zaten ürünün kendisi.

İkinci ürün (ikili set, farklı boy, kesme tahtası) eklenince şunlar açılacak:

| Koleksiyon | Açıklama |
|---|---|
| `Hediyelik` | `Herkesin aldığı şeye benzemeyen bir hediye. Üzerinde adı yazıyor.` |
| `İkili Set` | `İki isim, iki sopa. Baba-oğul, iki kardeş, iki ortak.` |

---

## 8. Footer

**Alt menü linkleri:**
Hakkımızda · Sık Sorulan Sorular · İletişim · Mesafeli Satış Sözleşmesi ·
Ön Bilgilendirme Formu · İptal ve İade Koşulları · Gizlilik Politikası ·
KVKK Aydınlatma Metni · Teslimat ve Kargo

**Footer alt metni (yasal zorunluluk — eksiksiz olmalı):**
```
BAT CRAFT
{{firma unvanı}} · {{adres}}
Vergi Dairesi: {{vergi dairesi}} · Vergi No: {{vergi no}}
badcraft.official34@gmail.com · {{telefon}}
```

**E-posta bülteni başlığı:**
`Yeni ürünlerden ilk sen haberdar ol.`

---

## 9. Instagram bio (hazır dursun)

```
BAT CRAFT
Adı yazılır. Kapına gelir.
İsme özel ahşap sopa · 2 iş gününde kargoda
↓ İsmini yaz
```
Link: **ürün sayfası** (ana sayfa değil)

Öne çıkan hikâye kapakları: `Nasıl yapılıyor` · `Yorumlar` · `Sipariş` · `SSS`

---

## 🔴 Senden bekleyenler

Bu `{{ }}` alanları dolunca metinlerin tamamı hazır olur:

| Bilgi | Nerede kullanılıyor |
|---|---|
| Ahşap cinsi (dişbudak/kayın/meşe?) | Ürün açıklaması, SSS |
| Varyantlar (tek ürün mü, boy/ton seçeneği var mı) | Ürün varyantları |
| Fiyat | Ürün sayfası |
| WhatsApp numarası | İletişim, footer |
| Firma unvanı, adres, vergi bilgisi | Footer (yasal zorunluluk) |
| Ürün fotoğrafları | Galeri + canlı önizleme baz görseli |

**Girilen bilgiler ✅** — 20 karakter · 66 cm · 5,5-6 cm çap · 2 iş günü · 2 desi ·
gravür fontu: el yazısı (Dancing Script, temaya gömüldü)
