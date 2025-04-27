// script.js

document.addEventListener("DOMContentLoaded", () => {
    loadLanguages();
  });
  
  function uploadImage() {
    const fileInput = document.getElementById('imageUpload');
    const productName = document.getElementById('productName');
    const productList = document.getElementById('productList');
  
    if (fileInput.files.length === 0) {
      alert('Please upload an image!');
      return;
    }
  
    const file = fileInput.files[0];
    productName.textContent = "Detected Product: Milk";
  
    // Simulate some products
    productList.innerHTML = `
      <li>Store A - 2.30 ₼ <span>📍</span></li>
      <li>Store B - 2.50 ₼ <span>📍</span></li>
      <li>Store C - 2.40 ₼ <span>📍</span></li>
    `;
  }
  
  function submitReview() {
    const review = document.getElementById('newReview').value.trim();
    const reviewList = document.getElementById('reviewList');
  
    if (review !== "") {
      const li = document.createElement('li');
      li.textContent = review;
      reviewList.appendChild(li);
      document.getElementById('newReview').value = "";
    }
  }
  
  function voiceSearch() {
    const voiceResult = document.getElementById('voiceResult');
    voiceResult.textContent = "Voice recognition not available in this browser.";
  }
  
  function qrSearch() {
    const qrInput = document.getElementById('qrInput').value.trim();
    const qrResult = document.getElementById('qrResult');
  
    if (qrInput) {
      qrResult.textContent = `Product found: ${qrInput}`;
    }
  }
  
  function loadLanguages() {
    const langs = [
      { code: "en", label: "English" },
      { code: "tr", label: "Türkçe" },
      { code: "ru", label: "Русский" },
      { code: "de", label: "Deutsch" },
      { code: "fr", label: "Français" },
      { code: "es", label: "Español" },
      { code: "zh", label: "中文" },
      { code: "ja", label: "日本語" }
    ];
  
    const select = document.getElementById("languageSelect");
    langs.forEach(lang => {
      const option = document.createElement("option");
      option.value = lang.code;
      option.textContent = lang.label;
      select.appendChild(option);
    });
  
    select.value = "en";
  }
  
  function changeLanguage() {
    const selectedLang = document.getElementById("languageSelect").value;
    alert("Language switched to: " + selectedLang);
  }
  