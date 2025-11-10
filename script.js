const loadingScreen = document.getElementById('loading-screen');
const mainApp = document.getElementById('main-app');
const nameInput = document.getElementById('name-input');
const nextBtn = document.getElementById('next-btn');
const backBtn = document.getElementById('back-btn');
const nameDisplay = document.getElementById('name-display');

let isNameDisplayed = false;

// Show loading intro for 3 seconds then show app
window.addEventListener('load', () => {
  setTimeout(() => {
    loadingScreen.classList.add('hidden');
    mainApp.classList.remove('hidden');
    nameInput.focus();
  }, 3000);
});

function designName(text) {
  // Clean input, remove old symbols, use modern font styles
  // For demo, just uppercase with spacing and custom letter spacing
  return text.toUpperCase().split('').join(' ');
}

nextBtn.addEventListener('click', () => {
  if (isNameDisplayed) return;
  const val = nameInput.value.trim();
  if (!val) {
    alert('Please enter your name');
    return;
  }
  const designed = designName(val);
  nameDisplay.textContent = designed;
  nameDisplay.classList.add('animated-text');
  nameDisplay.classList.remove('hidden');
  nameInput.classList.add('hidden');
  nextBtn.disabled = true;
  backBtn.disabled = false;
  isNameDisplayed = true;
});

backBtn.addEventListener('click', () => {
  if (!isNameDisplayed) return;
  nameDisplay.classList.add('hidden');
  nameInput.classList.remove('hidden');
  nextBtn.disabled = false;
  backBtn.disabled = true;
  nameInput.focus();
  isNameDisplayed = false;
});
