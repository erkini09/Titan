let currentLang = 'en';
const langData = {};

async function loadLanguage(lang) {
  const res = await fetch(`lang/${lang}.json`);
  langData[lang] = await res.json();
  currentLang = lang;
  updateText();
}

function updateText() {
  document.querySelector('h1').textContent = langData[currentLang].title;
}

function changeLanguage(lang) {
  loadLanguage(lang);
}

function openSettings() {
  document.getElementById('settings-modal').classList.remove('hidden');
}

function closeSettings() {
  document.getElementById('settings-modal').classList.add('hidden');
}

async function captureImage() {
  // handle image capture
  alert(langData[currentLang].capturing);
}
