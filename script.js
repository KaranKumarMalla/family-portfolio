function openTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.add('d-none');
    tab.classList.remove('active');
  });
  document.getElementById(tabId).classList.remove('d-none');
  document.getElementById(tabId).classList.add('active');
}
