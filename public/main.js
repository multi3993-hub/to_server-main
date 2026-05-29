const yearEl = document.getElementById("year");
const serverTimeEl = document.getElementById("serverTime");

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

function updateTime() {
  if (!serverTimeEl) return;
  const now = new Date();
  serverTimeEl.textContent = now.toLocaleString("ru-RU");
}

updateTime();
setInterval(updateTime, 1000);
