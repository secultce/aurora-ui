const BTN_OPEN_FILTER = document.getElementById('open-filter');
const BTN_CLOSE_FILER = document.getElementById('close-filter');
const BTN_CLEAR_FILTER = document.getElementById('clear-filters');
const SIDEBAR = document.getElementById('filter-sidebar');
const MAIN_CONTENT = document.getElementById('main-content');
const FILTER_BTN = document.getElementById('open-filter'); 

BTN_OPEN_FILTER.addEventListener('click', toggleSidebar);
BTN_CLOSE_FILER.addEventListener('click', toggleSidebar);
BTN_CLEAR_FILTER.addEventListener('click', clearFilters);

function toggleSidebar() {
  SIDEBAR.classList.toggle('open');
  MAIN_CONTENT.classList.toggle('shifted');

  if (SIDEBAR.classList.contains('open')) {
    FILTER_BTN.style.visibility = 'hidden';
    FILTER_BTN.style.opacity = 0;
    return;
  }

  setTimeout(() => {
    FILTER_BTN.style.visibility = 'visible';
    FILTER_BTN.style.opacity = 1;
  }, 300);
}

function clearFilters() {
  document.getElementById('agent-name').value = '';
  
  ['agent-name', 'agent-type', 'areas-of-activity', 'seals', 'state', 'city'].map(item => {
    document.getElementById(item).selectedIndex = 0;
  });
}
