# HANDOFF — Şu An Neredeyiz

**Son güncelleme:** 12 Ağustos 2026
**Durum:** ⏸️ Ara verildi. Tema hazır, Shopify'a yüklenmeyi bekliyor.

---

## 👋 Yeni sohbete başlıyorsan

**BAT CRAFT** — isme özel gravürlü ahşap beyzbol sopası satan Shopify markası.
Samed girişimci, ben teknik + yaratıcı + araştırma ortağıyım.

**Okuma sırası:** bu dosya → `CLAUDE.md` (değişmez kurallar) →
`GELISTIRME-PLANI.md` (numaralı yol haritası)

**🔴 Her şeyden önce bilmen gereken kural:** Ürün **hediyelik / isme özel /
koleksiyonluk** olarak konumlanıyor. Site, reklam ve sosyal medya metinlerinde
şu kelimeler **geçmez**: koruma · savunma · güvenlik · caydırıcı · hırsız · silah.
Meta bu çerçeveyi "self-defense weapon" sayıp reklam hesabını kapatıyor; ayrıca
Türkiye'de 6136 sayılı kanun gereği savunma amaçlı taşıma suç.
Gerekçe ve kaynaklar: `yasal/YASAL-RISKLER.md`

**Kapsam:** Ürün üretimi ve tedarik **tamamlandı** — o tarafta iş yok.
Maliyet/fiyat hesabı ve pazar taraması **yayın sonrasına** bırakıldı.
Şu an sadece dijital kurulum yapılıyor.

---

## Marka künyesi

| | |
|---|---|
| **Görünen ad** | **BAT CRAFT** (logoda o yazıyor) |
| Alt başlık | PERSONALIZED BATS |
| Domain | **`batcraftofficial.com`** ✅ (12 Ağu — yanlış alınan `badcraft` iade edildi) |
| E-posta | `badcraft.official34@gmail.com` — kurumsal mail **henüz kurulmadı** |
| Instagram | `@badcraft.official34` ⚠️ **`@batcraft.official`'a çevrilecek** |
| TikTok | Açılmayacak |
| Shopify | `bezbol.myshopify.com` · admin: `admin.shopify.com/store/bezbol` |
| GitHub | `github.com/samedakgun/BAT_CRAFT` |
| Renk | Kırık beyaz `#F7F5F2` · Kömür `#111111` · Ahşap `#A9714B` · CTA `#8B5A2B` |
| Font | Başlık **Montserrat** · Gövde **Inter** |

---

## ✅ Şimdiye kadar yapılanlar

### Tema — tek ürün odaklı yeniden kuruldu
Horizon v4.1.3, klasör artık `theme/` (uzun export adı sadeleştirildi).

- **Ana sayfa (`templates/index.json`) sıfırdan yazıldı.** Horizon'un demo içeriği
  (dağ manzarası hero, "Browse our latest products", ürün listesi) **silindi.**
  Yerine 5 bölümlük tek ürün akışı:
  1. **Ürün** — galeri + başlık + fiyat + varyant + **isim gravürü + canlı önizleme**
     + sepete ekle. Müşteri ana sayfadan çıkmadan ismini yazıp sipariş verebiliyor.
  2. **Şerit** — akan yazı: *ADI YAZILIR. KAPINA GELİR.*
  3. **Nasıl yapılıyor** — görsel + *"Sticker değil. Oyma."*
  4. **Üç madde** — Tek/kopyası yok · Gerçek gravür · Hediyeye hazır
  5. **SSS** — 6 soruluk akordiyon (karakter limiti, Türkçe harf, yanlış isim,
     iade, teslimat, ölçüler)
- **Header sadeleştirildi:** duyuru çubuğu Türkçe ("Kişiye özel üretim · Hediyeye
  hazır ambalaj"), **arama + ülke seçici + dil seçici kapatıldı** (tek ürün, tek
  pazar, tek dil — hepsi gereksiz gürültüydü).
- **Footer temizlendi:** "Join our email list" → Türkçe, Horizon'un varsayılan
  Facebook/TikTok/Twitter/YouTube linkleri **silindi**, sadece Instagram bırakıldı,
  "Powered by Shopify" kapatıldı.
- **Marka renk paleti + tipografi** `config/settings_data.json`'a işlendi,
  buton köşeleri 14px → 4px (logonun keskin diline uygun).
- **Ürün şablonu** (`templates/product.json`) — gravür bloğu varyant seçici ile
  sepete ekle arasına yerleştirildi.

Tüm şablon JSON'ları doğrulandı ✅

### İsim gravürü bloğu
`theme/blocks/name-engraving.liquid` + `theme/assets/name-engraving.js`
- `properties[İsim]` line item property → sipariş, e-posta, kargo fişi
- Yazdıkça görselin üzerinde canlı gravür önizlemesi
- Uzun isimleri alana otomatik sığdırma
- Türkçe harf düzeni (`ismail → İsmail`), kazınamayan karakter filtresi, sayaç
- **El yazısı gravür fontu temaya gömülü** (Dancing Script, 38 KB, Türkçe tam)
- "İsim yazılmasın" seçeneği
- Ek uygulama gerekmiyor (aylık ~20 $ tasarruf)

### GitHub ✅ bağlandı ve push edildi
`github.com/samedakgun/BAT_CRAFT` · branch `main`
- Proje git deposuna alındı, remote bağlandı, **push edildi**
- `.gitignore`: `.DS_Store`, `*.zip`, `node_modules/` — repo temiz (junk yok, 4.1 MB)
- `README.md` eklendi — repoyu açan ilk bakışta ne olduğunu anlıyor
- Tema klasörü `theme/` olarak sadeleştirildi (uzun export adı gitti)

Bundan sonra değişiklik yapmak için:
```bash
cd ~/Desktop/bezbol_sopası
git add -A && git commit -m "mesaj" && git push
```

### Shopify — mevcut durum (kontrol edildi)
| | |
|---|---|
| Mağaza adı | BAT CRAFT ✅ |
| Para birimi | Türk Lirası (TRY ₺) ✅ |
| Bölge / adres | Türkiye · İstanbul ✅ |
| Admin dili | Türkçe ✅ |
| Mağaza görünürlüğü | **Gizli** (şifre korumalı) ✅ doğru |
| Ürünler | **Boş** — henüz ürün yok |
| Canlı tema | Hâlâ Horizon'un **demo hâli** — yeni tema yüklenmedi |
| İletişim e-postası | `samedakgun88@gmail.com` — kurumsal maile çevrilecek |

---

## 🔜 Devam edince ilk yapılacaklar

### 🧑 SEN

**1. Temayı yükle** *(2 dakika)*
`batcraft-tema.zip` → Online Mağaza → Temalar → aşağıda **Taslak temalar** →
**İçe aktar** → zip'i seç → yüklendikten sonra **Yayınla**.
> Ben yükleyemedim: Shopify admin arayüzü shadow DOM kullanıyor, tarayıcı
> otomasyonu "İçe aktar" butonuna erişemiyor.

**2. Ürünü oluştur**
Metinler hazır: `icerik/SITE-METINLERI.md` §2. Fotoğraf yoksa geçici görselle de
olur. Oluşturduktan sonra tema editöründe **Ürün bölümüne o ürünü seç**
(şu an boş — bu yapılmazsa ana sayfada ürün görünmez).

**3. Sayfaları gir:** Hakkımızda · SSS · İletişim (`SITE-METINLERI.md` §4-6)

**4. Menüyü düzelt:** İçerik → Menüler → "Katalog" linkini sil
(tek ürünlü mağazada katalog anlamsız). Yerine SSS ve İletişim.

**5. Domaini Shopify'a bağla:** Ayarlar → Alan Adları → `batcraftofficial.com`

**6. Kurumsal e-posta kur** — şu an `badcraft.official34@gmail.com` kullanılıyor,
Shopify'da ise `samedakgun88@gmail.com` yazılı. Domain artık elde olduğuna göre
`merhaba@batcraftofficial.com` kurulabilir (Google Workspace ~6 $/ay veya Zoho'nun
ücretsiz planı).
> Neden önemli: Gmail adresi ödeme altyapısı (PayTR/iyzico) ve Meta doğrulamalarında
> sorun çıkarıyor, müşteride de güven kırıyor. Acil değil ama ödeme başvurusundan
> önce halledilmeli.
> Kurunca **SPF/DKIM/DMARC** kayıtlarını bana sor — onlarsız sipariş e-postaları
> spam'e düşer.

**7. Instagram handle'ı `@batcraft.official` yap** — tek kalan BAT/BAD
tutarsızlığı. Reklam başlamadan yap; sonra link ve etiketleri kırar.

### 🤖 BEN — hazır bekleyen işler
- **4.4** Yasal sayfa metinleri (mesafeli satış, ön bilgilendirme, KVKK, iade)
- **6.4** Reklam metinleri (9 primary text + 6 headline)
- **5.1.5** Instagram bio + ilk 9 gönderi planı
- Gravür bloğunun canlı testi — **Theme Access token** verirsen doğrudan
  mağazada test edip düzeltirim

---

## ✅ Ürün bilgileri işlendi

Atölyeden gelen bilgiler siteye, temaya ve metinlere girildi:

| Bilgi | Değer | Nereye işlendi |
|---|---|---|
| Azami karakter | **20** | Gravür bloğu, SSS, ürün açıklaması |
| Uzunluk | **66 cm** | Ürün açıklaması, SSS, ana sayfa |
| Çap | **5,5–6 cm** | Ürün açıklaması, SSS |
| Hazırlık | **2 iş günü** | Her yerde (7 ayrı metin) |
| Kargo | **2 desi** | Kargo ayarı notu, SSS |
| Gravür fontu | **El yazısı** | Aşağıya bak |

### Font kararı — Dancing Script (Bold)
"El yazısı, ismini sen seç" dendiği için seçtim. Gerekçe:
- Shopify'ın font kütüphanesinde **el yazısı kategorisi yok** → fontu
  `theme/assets/` içine **gömdüm** (38 KB, harici istek yok, sayfa hızını etkilemez)
- **Türkçe tam destek** — `ı` ve `ğ ş İ` farklı alt kümelerde olduğu için
  iki ayrı woff2 dosyası gerekti, ikisi de eklendi
- OFL lisanslı, ticari kullanım ve gömme serbest → `marka/FONT-LISANS.md`

**Bunun yan etkisi:** El yazısı fontta TÜMÜ BÜYÜK yazı kötü görünüyor. Harf
düzenini **"Baş harf büyük"** yaptım (`ismail → İsmail`, `IŞIL → Işıl`,
`şükrü çağlar → Şükrü Çağlar`). Türkçe kurallarına göre çalışıyor. Tema
editöründen "tümü büyük"e çevirebilirsin.

⚠️ **Atölye başka bir el yazısı fontu kullanıyorsa haber ver** — onu gömerim.
Sitedeki önizleme ile gelen ürün farklı görünürse şikâyet gelir.

---

## 🟡 Hâlâ bekleyen bilgiler

| Bilgi | Nerede kullanılacak |
|---|---|
| **Ürün fotoğrafları** | Galeri + canlı önizlemenin baz görseli (düz, isimsiz sopa, tam karşıdan) |
| **Fiyat** | Ürün sayfası |
| Ahşap cinsi (dişbudak/kayın/meşe) | Ürün açıklaması, SSS |
| Varyant var mı (boy/ton seçeneği) | Ürün varyantları |
| WhatsApp numarası | İletişim, footer |
| Firma unvanı, adres, vergi no | Footer (yasal zorunluluk) |

`icerik/SITE-METINLERI.md` içindeki `{{ }}` alanları bunları bekliyor.

---

## ⏸️ Yayın sonrasına ertelenenler
- Birim maliyet / marj hesabı (satış fiyatı ÷ COGS ≥ 3.5 kuralı)
- Pazar taraması (Etsy, Trendyol, Meta Ad Library)
- Şirket kurulumu, ETBİS
- ⚠️ **Ödeme altyapısı (PayTR/iyzico) vergi levhası istiyor** — para tahsil
  edebilmek için şirket şart. Site tasarımı bundan bağımsız ilerliyor.

---

## Bilinen riskler ⚠️

1. **Konumlandırma (en yüksek).** "Güvenlik/savunma" dili Meta reklam hesabını
   kapattırır, müşteriyi 6136'dan riske atar. Tüm metinler hediyelik çerçevesinde
   yazıldı ve taramadan geçti. → `yasal/YASAL-RISKLER.md`
2. **BAT/BAD yazımı.** Logo BAT, domain BAD. Destek talebi onaylanırsa çözülecek;
   o zamana kadar görünen ad BAT CRAFT.
3. **Marj.** Satış fiyatı ÷ COGS < 3.5 ise reklamla kâr edilmez. Henüz hesaplanmadı.
4. **Font uyumsuzluğu.** Sitedeki önizleme fontu ≠ kazınan font olursa şikâyet gelir.
5. **Logo Meta riski.** Reklam kreatiflerinde sopalı logo yerine wordmark kullanılacak.
6. **Bütçe eşiği.** Meta'da günlük 300 TL altında learning phase'den çıkılamıyor.
