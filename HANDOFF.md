# HANDOFF — Şu An Neredeyiz

**Son güncelleme:** 11 Ağustos 2026
**Marka:** BAT CRAFT — *Personalized Bats*
**Aktif faz:** FAZ 0 sonu / FAZ 2 başı

> **Kapsam notu:** Ürün üretimi ve tedarik **tamamlandı.** Plan sadece dijital
> tarafı kapsıyor: marka kimliği, site, sosyal medya, reklam, sipariş akışı.

---

## Marka künyesi

| | |
|---|---|
| **Adı** | **BAT CRAFT** |
| Alt başlık | PERSONALIZED BATS |
| Domain | `badcraftofficial.com` ⚠️ bkz. açık konu |
| Instagram | `@badcraft.official34` ⚠️ bkz. açık konu |
| TikTok | Açılmayacak (karar) |
| Logo | `logo.png` — sopa + taç + wordmark |
| Renk | Kırık beyaz `#F7F5F2` · Kömür `#111111` · Ahşap `#A9714B` · CTA `#8B5A2B` |
| Font | Başlık **Montserrat** · Gövde **Inter** · Gravür → atölye fontu (bekleniyor) |

---

## Tamamlananlar ✅

- [x] Araştırma: Meta reklam politikası, 6136 sayılı kanun, Shopify Horizon,
      Türkiye ödeme altyapısı, düşük bütçeli Meta stratejisi, e-ticaret yasal
      zorunlulukları → `arastirma/ARASTIRMA-BULGULARI.md`
- [x] Yasal risk analizi ve konumlandırma kararı → `yasal/YASAL-RISKLER.md`
- [x] Marka kimliği → `marka/MARKA-KIMLIGI.md` (renk/font logodan türetildi)
- [x] Dijital odaklı 10 fazlık plan → `GELISTIRME-PLANI.md`
- [x] **Marka adı: BAT CRAFT** · Logo · Domain · Instagram hesabı
- [x] **İsim gravürü bloğu + canlı önizleme kodu yazıldı** (aşağıda)

---

## 🛠️ Yazılan kod: İsim Gravürü bloğu (Faz 4.2)

**Dosyalar:**
- `theme_export__.../blocks/name-engraving.liquid`
- `theme_export__.../assets/name-engraving.js`

**Ne yapıyor:**
- İsim girişi → `properties[İsim]` line item property → sipariş ekranına, sipariş
  e-postasına ve kargo fişine otomatik düşer (ek uygulama gerekmez)
- ⭐ Müşteri yazdıkça sopa görselinin üzerinde ismi gravür fontuyla canlı gösterir
- Uzun isimleri gravür alanına **otomatik sığdırır**
- Türkçe büyük harf (`i → İ`, standart `toUpperCase`'in yaptığı `I` değil)
- Kazınamayan karakterleri (emoji, sembol) girişte ayıklar + uyarı verir
- Karakter sayacı, zorunlu alan, "İsim yazılmasın" seçeneği

**Doğrulananlar:** JS sözdizimi ✅ · Blok şeması JSON ✅ · Horizon konvansiyonu ✅
**Doğrulanamayanlar (canlı mağaza gerekiyor):** görsel hizalama, sepet/checkout
akışı, mobil görünüm → 4.1.3'te Theme Access token verince test edilecek.

**Bloğu kurmak için bekleyen bilgiler:** gravür fontu (0.1.1), azami karakter
sayısı (0.1.2), düz sopanın karşıdan çekimi (3.2.9).

---

## 🎯 Sıradaki işler

### 🧑 SEN — öncelik sırasıyla

**1. BAT/BAD tutarsızlığını kapat** (`0.5`) — 10 dakika, ~15 $
`batcraftofficial.com` müsait, al ve asıl domain yap; `badcraftofficial.com`'u
301 ile ona yönlendir; Instagram handle'ını `@batcraft.official` yap.
⚠️ **Reklam başlamadan yapılmalı** — sonra link/etiket kırar.

**2. Ürün bilgilerini ver** (`0.1`, 9 madde) — hepsi elinde
En kritik ikisi: ⭐ **gravür fontu** ve ⭐ **sopaya sığan azami karakter sayısı**.
Kalanlar: ölçü/ağırlık, ahşap cinsi, varyantlar, birim maliyet, hazırlık süresi,
Türkçe karakter durumu, kargo desisi.

**3. Shopify hesabını aç** (`2.4`) → hemen ardından **ödeme başvurusu** (`2.5`)
Ödeme onayı 1–5 iş günü sürüyor; en uzun kuyruk bu, erken başlat.

**4. Logo eksiklerini tamamla** (`0.6`) — yazım hatası, daire kırpımlı IG versiyonu,
vektör, şeffaf, tek renk, yatay, favicon

### 🤖 BEN — istediğin an başlarım

- **0.3** Pazar taraması (Etsy/Trendyol fiyat, Meta Ad Library, IG rakipler)
- **4.4** Yasal sayfa metinleri (MSS, ön bilgilendirme, KVKK, iade) taslakları
- **6.4** Reklam metinleri (9 primary text + 6 headline)
- **5.1.5** Instagram bio + ilk 9 gönderi planı
- **0.6** Logo dosya seti (yazım düzeltmesi, IG versiyonu, favicon)

---

## Açık konular 🟡

| Konu | Durum |
|---|---|
| **BAT vs BAD** yazımı | Karar bekliyor → `MARKA-KIMLIGI.md` §13 |
| Gravür fontu | Samed'de, iletilecek (0.1.1) |
| Azami karakter sayısı | Samed'de, iletilecek (0.1.2) |
| Birim maliyet / satış fiyatı | 0.1.6 gelince hesaplanacak |
| PayTR mi iyzico mu | Şirket kurulumuna bağlı |
| Reklam bütçesi | Marj hesabına bağlı |

---

## Bilinen riskler ⚠️

1. **Konumlandırma riski (en yüksek).** "Güvenlik/savunma" dili kullanılırsa Meta
   reklam hesabı kapanır, müşteri 6136'dan risk alır. Tüm metinler
   hediyelik/kişiselleştirme çerçevesinde kalacak. → `yasal/YASAL-RISKLER.md`
2. **Marka yazımı tutarsızlığı.** BAT/BAD ikiliği doğrudan trafik ve marka
   aramalarını kaybettirir. Ucuz ve hızlı çözülür, geciktikçe pahalılaşır.
3. **Marj riski.** Satış fiyatı ÷ COGS < 3.5 ise iş modeli reklamla dönmez.
4. **Font uyumsuzluğu.** Sitedeki canlı önizleme fontu ile kazınan font farklıysa
   "beklediğim gibi gelmedi" şikâyetleri başlar.
5. **Kargo desisi.** Uzun ürün kargo maliyetini yükseltir — marja dahil edilmeli.
6. **Logo Meta riski.** Gerçekçi büyük sopa görseli reklam kreatiflerinde riskli;
   reklamlarda wordmark ağırlıklı versiyon kullanılacak.
7. **Bütçe eşiği.** Meta'da günlük 300 TL altında algoritma learning phase'den
   çıkamıyor. İlk hafta 2.100–3.500 TL gözden çıkarılmalı.
