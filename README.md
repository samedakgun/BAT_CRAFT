# BAT CRAFT

İsme özel gravürlü ahşap beyzbol sopası satan Shopify markası.
Bu depo markanın **tüm dijital varlıklarını** tutar: tema kodu, marka kimliği,
site metinleri, yasal analiz ve yol haritası.

🔗 `bezbol.myshopify.com` · `badcraftofficial.com` · [@badcraft.official34](https://www.instagram.com/badcraft.official34/)

---

## Nereden başlanır

| Dosya | Ne işe yarar |
|---|---|
| **[HANDOFF.md](HANDOFF.md)** | ⭐ **Önce bunu oku.** Şu an neredeyiz, sıradaki iş ne |
| [GELISTIRME-PLANI.md](GELISTIRME-PLANI.md) | 10 fazlık yol haritası, numaralı takip listesi |
| [CLAUDE.md](CLAUDE.md) | AI oturumları için kalıcı kurallar |

## Klasörler

```
theme/          Shopify Horizon v4.1.3 — tek ürün için yeniden kuruldu
icerik/         Site metinleri (kopyala-yapıştır hazır)
marka/          Marka kimliği, renk, font, lisanslar
yasal/          6136 sayılı kanun, Meta reklam politikası, ETBİS — EN ÖNEMLİ
arastirma/      Kaynaklı araştırma notları
kreatif/        Reklam görselleri ve videoları
```

---

## 🔴 Değişmez kural

Ürün **hediyelik / isme özel / koleksiyonluk** olarak konumlanır.
Site, reklam ve sosyal medya metinlerinde şu kelimeler **geçmez**:

> koruma · savunma · güvenlik · caydırıcı · hırsız · silah · self-defense

**Neden:** Meta bu çerçeveyi "self-defense weapon" sayıp reklam hesabını kapatıyor;
ayrıca Türkiye'de 6136 sayılı kanun gereği savunma amaçlı taşıma suç.
Gerekçe ve kaynaklar: [yasal/YASAL-RISKLER.md](yasal/YASAL-RISKLER.md)

---

## Temanın öne çıkan parçası: isim gravürü bloğu

`theme/blocks/name-engraving.liquid` + `theme/assets/name-engraving.js`

Müşteri ismini yazdıkça sopa görselinin üzerinde **el yazısı gravür fontuyla**
canlı beliriyor. Piyasadaki kişiselleştirme uygulamaları bunun için aylık ~20 $
istiyor; blok sıfırdan yazıldı, bağımlılık yok.

- `properties[İsim]` line item property → sipariş, e-posta, kargo fişi
- Uzun isimleri gravür alanına otomatik sığdırma
- Türkçe harf düzeni (`ismail → İsmail`, `IŞIL → Işıl`)
- Kazınamayan karakter (emoji, sembol) filtresi
- Karakter sayacı · zorunlu alan · "isim yazılmasın" seçeneği

## Temayı yayına alma

```bash
cd theme && zip -r ../batcraft-tema.zip . -x "*.DS_Store"
```
Shopify Admin → Online Mağaza → Temalar → Taslak temalar → **İçe aktar** → Yayınla
