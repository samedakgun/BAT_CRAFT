# Araştırma Bulguları

Tarih: 10 Ağustos 2026 · Kaynaklar her bölümün altında.

---

## 1. Shopify Horizon teması — İSİM ALANI İÇİN UYGULAMA GEREKMİYOR

Elimizdeki tema: `theme/`
→ **Horizon v4.1.3**, temiz/default kurulum.

**Kritik bulgu:** Horizon'da `blocks/product-custom-property.liquid` adında
**native bir blok** var. Yani "İsim gir" alanı için Zepto / Easify / Infinite Options
gibi aylık ücretli bir uygulama **almana gerek yok.** Blok şunları hazır sunuyor:

- `properties[İsim]` şeklinde line item property üretiyor (sipariş ekranına,
  e-postaya, kargo fişine otomatik düşer)
- Karakter limiti (25–250 arası, biz **14** yapamayız — min 25; JS ile kısacağız)
- Zorunlu alan (`required`) desteği
- Canlı karakter sayacı
- Checkbox tipi (örn. "Hediye paketi istiyorum")
- Tema editöründen sürükle-bırak, kod bilgisi gerekmiyor

**Neyi kendimiz ekleyeceğiz (asıl fark yaratan kısım):**
Uygulamaların 20$/ay istediği şey **canlı önizleme** — müşteri yazdıkça sopanın
üstünde ismin göründüğü mockup. Bunu Horizon'un web component yapısıyla
~150 satır vanilla JS + bir CSS-transform katmanıyla kendimiz yazacağız.
Araştırmalar canlı önizlemeyi kişiselleştirilmiş üründe **en yüksek dönüşüm
kaldıracı** olarak işaret ediyor (mobilde trafiğin %70+'ı).

**Horizon mimarisi notları (kod yazarken uyulacak):**
- 8 seviyeye kadar iç içe "theme blocks" — Dawn'daki 2 seviyeli yapı değil
- Harici kütüphane (Swiper, Slick, jQuery) **yüklenmeyecek** — vanilla Web Component
- CSS `{% stylesheet %}` içinde, blok tag'i (`component-name`) ile kapsüllenir
- `ref="..."` ve `on:input="/handleMethod"` Horizon'un kendi binding sistemi

Kaynaklar:
- [Shopify Line Item Properties: Complete Reference 2026](https://www.printitmyway.com/blog/shopify-line-item-properties-reference)
- [Adding Line Item Properties for Personalization — Carson Bain](https://www.carsonbain.com/writing/shopify-custom-line-items)
- [Shopify Horizon Theme Customization Guide 2026](https://craftshift.com/shopify-horizon-theme-customization-guide-2026/)
- [Horizon Migration Guide 2026](https://www.letstalkshop.com/blog/shopify-horizon-theme-migration-guide)
- [Kişiselleştirme uygulamaları karşılaştırma 2026](https://reverbico.com/blog/top-10-product-customization-apps-for-shopify-in-2026/)

---

## 2. Kişiselleştirilmiş ürün ekonomisi

- McKinsey: kişiselleştirme geliri **%5–15** artırıyor.
- HBR: görsel kişiselleştirme iadeleri **%40'a kadar** düşürüyor.
- Kişiye özel üründe müşteri **daha yüksek fiyata razı** ve **daha az iade ediyor**
  ("benim için yapıldı" etkisi).
- Bizim için ekstra avantaj: cayma hakkı istisnası (bkz. `yasal/YASAL-RISKLER.md` §3.5)
  → iade oranı yapısal olarak düşük → nakit akışı öngörülebilir.

Kaynak: [Shopify engraving/personalization app analizi](https://easifyapps.com/blog/shopify-engraving-app/)

---

## 3. Meta reklam — yeni mağaza için başlangıç stratejisi

**Bütçe gerçeği (acı ama gerçek):**
- Advantage+ Sales (ASC) kampanyaları günlük **$100+** ile tasarlanmış.
- Günlük **$50 altında** algoritma keşif yapamıyor, learning phase'den çıkamıyor.
- Düşük bütçe için önerilen tek yapı: **1 kampanya → 1 ad set → 3 kreatif.**
  (Bu tam olarak senin senaryon.)

**Kreatif sayısı:**
- 3–5 kreatif = "test edilebilir minimum". Senin 3 kreatif planın **doğru başlangıç**.
- Ama Advantage+'ın gerçekten çalışması için 10+ (ideal 20+) asset isteniyor.
- Yol: **3 ile başla, haftada 3–5 yeni kreatif ekle.** İyi çalışanı silme,
  algoritma zaten dağıtımını kendi azaltıyor.

**Learning phase:**
- İlk **7 gün hiçbir şeye dokunma.** Her düzenleme 50-dönüşüm eşiğini sıfırlar.
- Bütçe değişimi %20'yi geçmesin.

**Zorunlu teknik kurulum:**
- Shopify'ın "Facebook & Instagram" sales channel'ı → katalog otomatik bağlanır
- Meta Pixel + **Conversions API** (Shopify entegrasyonunda hazır geliyor)
- Domain doğrulama (Business Manager → Brand Safety → Domains)
- Aggregated Event Measurement'ta 8 event önceliklendirme

**Bizim senaryo için düşük bütçeli gerçekçi plan:**
Günlük 300–500 TL ile ASC yerine **manuel Sales kampanyası, geniş hedefleme,
tek ad set, 3 kreatif** ile başla; ilk 20–30 satıştan sonra ASC'ye geç.

Kaynaklar:
- [Meta Advantage+ Sales Campaigns: Complete 2026 Guide](https://blog.adnabu.com/facebook/meta-advantage-plus-sales-campaigns/)
- [How to Test Creatives on Meta in 2026 — Foxwell Digital](https://www.foxwelldigital.com/blog/how-to-test-creatives-on-meta-in-2026-the-ultimate-guide-for-brands-and-media-buyers)
- [How Many Ad Creatives to Test in 2026](https://admanage.ai/blog/how-many-ad-creatives-to-test)
- [Low-Budget Meta Ads Creative Testing: 2026 AI Framework](https://alexneiman.com/ai-creative-testing-low-budget-meta-ads/)
- [How to Set Up Meta Ads for a Shopify Store (2026)](https://27five.com/blog/meta-ads-shopify-store-setup-guide/)

---

## 4. Türkiye'de Shopify ödeme altyapısı

- **Shopify Payments Türkiye'de YOK.** Alternatif: iyzico, PayTR, Craftgate, PayU.
- Komisyon: PayTR **%1.99'dan** başlıyor, iyzico **%2.99 + 0.25 TL** standart.
  (Hacim arttıkça pazarlık payı var.)
- **Taksit kritik:** Türk tüketicisinin **%68'i** taksit yoksa sepeti terk ediyor.
  Bizim fiyat bandında (600–1.500 TL) 3 taksit dönüşümü ciddi etkiler.
- Shopify ayrıca **%2 third-party payment gateway ücreti** alır (Basic planda);
  yıllık plana geçmek ve/veya plan yükseltmek bunu düşürür — hesabını yap.
- iyzico + PayTR **aynı anda** aktif edilebilir.

Kaynaklar:
- [Shopify Türkiye Ödeme Çözümleri Rehberi (iyzico/PayTR/PayU)](https://workon.com.tr/blog/shopify-turkiye-odeme-cozumleri/)
- [Shopify Türkiye: Kurulum, Ödeme ve Yasal Rehber 2026](https://nodusworks.com/en/blog/shopify-turkey-guide-payment-shipping-legal-requirements-and-setup-2026)
- [Shopify iyzico Entegrasyonu adım adım](https://nodusworks.com/en/blog/shopify-iyzico-integration-step-by-step-setup-guide)

---

## 5. Konumlandırma araştırması — özet karar

Meta politikası + 6136 birleşince ortaya tek bir uygulanabilir strateji çıkıyor:

> **Ürünü hediyelik/koleksiyonluk/nostaljik bir obje olarak sat.
> "Güvenlik" kitlesini hedeflemeye devam et — ama hedeflemeyle, metinle değil.**

Bu nasıl işliyor:
- **Metin/görsel:** "İsme özel, elde oyulmuş dişbudak sopa. Hediye edilir, saklanır."
- **Hedefleme:** İlgi alanları — otomotiv/modifiye, av-doğa, dövme, arabesk/rap
  müzik, motosiklet, forma/taraftar ürünleri, 25–45 erkek. Bu kitle zaten o kitle.
- **Yorumlar bölümü:** Müşteriler kendileri "arabaya koyacağım" yazacak. Sen
  onaylama, silme, karşılık verme. Algoritma organik sinyali okur, sen temiz kalırsın.
- **Hediye açısı ölçek getirir:** doğum günü, damat hediyesi, dükkân açılışı,
  askerlik dönüşü, baba günü. Bu açı Meta'da tamamen güvenli ve arama hacmi yüksek.

---

## 6. Rakip/pazar hızlı taraması (yapılacak — Faz 0)

- [ ] Etsy'de "personalized baseball bat" — fiyat bandı, en çok satan görsel dili
- [ ] Trendyol/Hepsiburada "beyzbol sopası" — Türkiye fiyat tabanı ve rakip sayısı
- [ ] Instagram'da "isme özel ahşap" hesapları — kreatif dili
- [ ] Meta Ad Library: aktif reklam veren benzer marka var mı, ne kadar süredir
- [ ] Google Trends TR: "beyzbol sopası" mevsimsellik
