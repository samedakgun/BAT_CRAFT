// assets/name-engraving.js
import { Component } from '@theme/component';

/**
 * Lazerle kazınabilen karakterler. Emoji, noktalama ve sembollerin çoğu
 * atölyede sorun çıkardığı için giriş anında ayıklanır.
 */
const ALLOWED_CHARACTERS = /[^A-Za-zÇĞİıÖŞÜçğöşü0-9 .'&-]/g;

/**
 * @typedef {object} NameEngravingRefs
 * @property {HTMLInputElement} textInput - İsim girişi.
 * @property {HTMLElement} [characterCount] - Karakter sayacı.
 * @property {HTMLElement} [preview] - Görselin üstündeki yazı katmanı.
 * @property {HTMLElement} [stage] - Görsel + yazı katmanını saran kutu.
 * @property {HTMLElement} [error] - Hata mesajı alanı.
 * @property {HTMLInputElement} [skipInput] - "İsim yazılmasın" onay kutusu.
 */

/**
 * Ürün sayfasındaki isim alanını yönetir ve yazılanı görselin üzerinde
 * canlı olarak gösterir.
 * @extends Component<NameEngravingRefs>
 */
class NameEngraving extends Component {
  #errorTimeout = 0;
  #resizeObserver = null;

  connectedCallback() {
    super.connectedCallback();

    this.#render();

    const { stage } = this.refs;
    if (stage && 'ResizeObserver' in window) {
      this.#resizeObserver = new ResizeObserver(() => this.#fitToStage());
      this.#resizeObserver.observe(stage);
    }

    // Web font geç yüklenirse ölçüm değişir, yeniden sığdır.
    document.fonts?.ready.then(() => this.#fitToStage());
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.#resizeObserver?.disconnect();
    clearTimeout(this.#errorTimeout);
  }

  handleInput() {
    const { textInput } = this.refs;
    const raw = textInput.value;

    const permitted = raw.replace(ALLOWED_CHARACTERS, '');
    let cleaned = this.#applyCase(permitted.replace(/\s{2,}/g, ' '));

    if (cleaned !== raw) {
      const caret = textInput.selectionStart ?? cleaned.length;
      const removed = raw.length - cleaned.length;
      textInput.value = cleaned;
      // Karakter ayıklandıysa imleç sona kaymasın.
      const nextCaret = Math.max(0, caret - removed);
      textInput.setSelectionRange(nextCaret, nextCaret);
    }

    if (permitted.length !== raw.length) {
      this.#showError('Bu karakter kazınamıyor. Harf, rakam ve boşluk kullanabilirsin.');
    }

    this.#render();
  }

  handleSkipToggle() {
    const { textInput, skipInput } = this.refs;
    const skipping = Boolean(skipInput?.checked);

    textInput.disabled = skipping;
    // Devre dışı input zaten gönderilmez; required'ı da kaldırıyoruz ki
    // tarayıcı doğrulaması sepete eklemeyi engellemesin.
    if (skipping) {
      if (textInput.required) {
        textInput.dataset.wasRequired = 'true';
        textInput.required = false;
      }
      textInput.value = '';
    } else if (textInput.dataset.wasRequired === 'true') {
      textInput.required = true;
      delete textInput.dataset.wasRequired;
    }

    this.#render();
  }

  /**
   * Harf düzenini uygular. Türkçe'ye özel: i → İ ve I → ı dönüşümleri
   * varsayılan toUpperCase/toLowerCase ile yanlış çıkar, bu yüzden
   * her yerde 'tr-TR' yereli kullanılıyor.
   * @param {string} value
   * @returns {string}
   */
  #applyCase(value) {
    switch (this.refs.textInput.dataset.case) {
      case 'upper':
        return value.toLocaleUpperCase('tr-TR');
      case 'title':
        return value.replace(
          /\S+/g,
          (word) => word.charAt(0).toLocaleUpperCase('tr-TR') + word.slice(1).toLocaleLowerCase('tr-TR')
        );
      default:
        return value;
    }
  }

  #render() {
    this.#updateCharacterCount();
    this.#updatePreview();
  }

  #updateCharacterCount() {
    const { characterCount, textInput } = this.refs;
    if (!characterCount) return;

    const template = characterCount.getAttribute('data-template') ?? '[current]/[max]';

    characterCount.textContent = template
      .replace('[current]', String(textInput.value.length))
      .replace('[max]', String(textInput.maxLength));
  }

  #updatePreview() {
    const { preview, textInput, skipInput } = this.refs;
    if (!preview) return;

    const value = textInput.value.trim();

    if (skipInput?.checked) {
      preview.dataset.state = 'empty';
      preview.textContent = '';
    } else if (value === '') {
      preview.dataset.state = 'sample';
      preview.textContent = preview.dataset.sample ?? '';
    } else {
      preview.dataset.state = 'filled';
      preview.textContent = value;
    }

    this.#fitToStage();
  }

  /**
   * Uzun isimler gravür alanına sığmaz. Yazının ölçülen genişliğini,
   * blokta ayarlanan azami genişlikle karşılaştırıp ölçek uygular.
   */
  #fitToStage() {
    const { preview, stage } = this.refs;
    if (!preview || !stage) return;

    const stageWidth = stage.clientWidth;
    if (!stageWidth) return;

    const maxWidthPercent = parseFloat(getComputedStyle(stage).getPropertyValue('--engrave-max-width')) || 100;
    const allowedWidth = (stageWidth * maxWidthPercent) / 100;

    // offsetWidth transform uygulanmadan önceki genişliği verir.
    preview.style.setProperty('--engrave-scale', '1');
    const naturalWidth = preview.offsetWidth;

    if (naturalWidth > allowedWidth && naturalWidth > 0) {
      preview.style.setProperty('--engrave-scale', String(allowedWidth / naturalWidth));
    }
  }

  #showError(message) {
    const { error } = this.refs;
    if (!error) return;

    error.textContent = message;
    error.hidden = false;

    clearTimeout(this.#errorTimeout);
    this.#errorTimeout = setTimeout(() => {
      error.hidden = true;
    }, 4000);
  }
}

customElements.define('name-engraving-component', NameEngraving);
