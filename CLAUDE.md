# CLAUDE.md

Bu dosya, bu projede çalışan her Claude oturumu için kalıcı talimatlardır.
**Oturuma başlarken önce bunu, sonra `HANDOFF.md`'yi oku.**

---

## Proje nedir

**BAT CRAFT** — isme özel gravürlü ahşap beyzbol sopası satan bir Shopify markası.
Kullanıcı (Samed) girişimci; ben teknik + yaratıcı + araştırma ortağıyım.
Marka künyesi ve açık konular: `HANDOFF.md`

**Kapsam:** ⚠️ **Ürün üretimi ve tedarik tamamlandı** — bu tarafta iş yok, plan
önerisi de yapma. Kapsam sadece dijital: isim, logo, marka kimliği, Shopify sitesi,
sosyal medya, Meta reklamı, sipariş akışı.

**Ana yol haritası:** `GELISTIRME-PLANI.md` — her oturumda bunun neresinde
olduğumuzu `HANDOFF.md`'den öğren.

---

## 🔴 Değişmez kurallar

### 1. "Güvenlik / savunma" dili YASAK
Ürün **hediyelik / isme özel / koleksiyonluk** olarak konumlanır. Hiçbir metinde
(site, reklam, caption, ürün açıklaması, e-posta, alt text) şu kelimeler geçmez:

> koruma · savunma · güvenlik · caydırıcı · hırsız · silah · self-defense ·
> "arabana koy" · "evini koru" · "gece işine yarar"

**Neden:** (a) Meta bu çerçeveyi "self-defense weapon" sayıp reklam hesabını
kapatıyor, (b) Türkiye'de 6136 sayılı kanun gereği savunma amaçlı taşıma suç.
Detay: `yasal/YASAL-RISKLER.md`. **Bu kural tartışmaya kapalı — kullanıcı aksini
isterse riski hatırlat, sonra kararını uygula ama metinde uyarıyı bırak.**

Görsellerde de aynı: insana sallanan sopa, vuruş anı, karanlık/tehditkâr sahne yok.

### 2. Yazdığım her müşteriye dönük metni yasaklı kelime taramasından geçir
Metni teslim etmeden önce yukarıdaki listeyi kontrol et. Sessizce geçme.

### 3. Marj kuralı
Satış fiyatı / COGS **< 3.5** ise Meta reklamıyla kâr edilmez. Bu oran tutmuyorsa
"reklamı optimize ederiz" deme — fiyat veya ürün değişmeli. Doğrudan söyle.

---

## Teknik bağlam

- **Tema:** Shopify **Horizon v4.1.3**, export klasörü:
  `theme/`
- Horizon = Shopify'ın 2025+ amiral gemisi teması. Dawn değil, mimarisi farklı:
  - 8 seviyeye kadar iç içe **theme blocks**
  - **Vanilla Web Components** — harici kütüphane (jQuery/Swiper/Slick) **ekleme**
  - CSS `{% stylesheet %}` içinde, blok tag'i ile kapsüllenir
  - Horizon'un kendi binding'i: `ref="..."`, `on:input="/handleMethod"`
- **İsim alanı için uygulama satın ALMA.** `blocks/product-custom-property.liquid`
  native olarak line item property üretiyor. Canlı önizlemeyi kendimiz yazıyoruz.
- Ödeme: Shopify Payments Türkiye'de yok → **PayTR / iyzico**. Taksit zorunlu.
- Para birimi TRY, dil Türkçe, Türkçe karakter (ğ ş ı İ ç ö ü) her yerde test edilir.

---

## Klasör yapısı

```
GELISTIRME-PLANI.md          ← ana yol haritası, faz faz
HANDOFF.md                   ← şu an neredeyiz, sıradaki iş
CLAUDE.md                    ← bu dosya
marka/
  MARKA-KIMLIGI.md           ← misyon, vizyon, persona, renk, font, ses tonu
  ISIM-ADAYLARI.md           ← isim adayları + müsaitlik kontrolü
  logo/                      ← logo dosyaları (Faz 1'de dolar)
arastirma/
  ARASTIRMA-BULGULARI.md     ← kaynaklı araştırma notları
yasal/
  YASAL-RISKLER.md           ← 6136, Meta politikası, ETBİS, MSS — EN ÖNEMLİ DOSYA
kreatif/                     ← reklam görselleri, videolar, metin varyantları
theme/                       ← Shopify Horizon teması (tek ürün için düzenlendi)
```

---

## Çalışma tarzı

- **Türkçe yaz.** Kullanıcı Türkçe konuşuyor.
- Kim ne yapacak her zaman belli olsun: 🧑 [SEN] / 🤖 [BEN] / 🤝 [BİRLİKTE]
- Kullanıcı girişimci, geliştirici değil — hesap açma, ödeme, fiziksel iş ona ait;
  kod, metin, araştırma, analiz bana.
- Araştırma yaparken **kaynak linki ver**, `arastirma/` altına işle.
- Bir şey riskliyse (para, yasal, hesap kapanması) **önce söyle, sonra yap.**
- Tahmin etme: tedarikçi fiyatı, komisyon oranı gibi sayıları uydurma — "?" bırak,
  kullanıcıdan iste.
- Bir faz tamamlandığında `HANDOFF.md`'yi **güncelle** (bu senin sorumluluğun).
