/* ── DoğruLab Ortak Fonksiyonlar ── */

// QR kod oluştur
function qrKodOlustur(elementId) {
  const el = document.getElementById(elementId);
  if (!el || typeof QRCode === 'undefined') return;
  new QRCode(el, {
    text: window.location.href,
    width: 120,
    height: 120,
    colorDark: '#070b16',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.M
  });
}

// Adım tıklama
function adimToggle(el) {
  el.classList.toggle('tamamlandi');
  el.querySelector('.adim-check').textContent =
    el.classList.contains('tamamlandi') ? '✓' : '';
  progressGuncelle();
}

// İlerleme çubuğu güncelle
function progressGuncelle() {
  const tumAdimlar   = document.querySelectorAll('.adim-item');
  const tamamlanan   = document.querySelectorAll('.adim-item.tamamlandi').length;
  const toplam       = tumAdimlar.length;
  const fill         = document.getElementById('progressFill');
  const text         = document.getElementById('progressText');
  if (fill) fill.style.width = (tamamlanan / toplam * 100) + '%';
  if (text) text.textContent = `${tamamlanan}/${toplam}`;
}

// Kaydet (ileride PDF/sunucu entegrasyonu)
function kaydet() {
  alert('📄 Gözlem raporu hazırlanıyor…\n\nGerçek uygulamada PDF olarak indirilecek veya öğretmene gönderilecek.');
}

// Sayfa yüklenince
window.addEventListener('load', () => {
  qrKodOlustur('qrcode');
  progressGuncelle();
});
