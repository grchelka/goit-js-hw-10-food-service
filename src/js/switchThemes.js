const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const bodyRef = document.querySelector('body');
const switchToggleRef = document.querySelector('#theme-switch-toggle');
switchToggleRef.addEventListener('change', themeChange);

export function themeChange (evt) { 
  if (evt.target.checked) {
    bodyRef.classList.add(Theme.DARK);
    bodyRef.classList.remove(Theme.LIGHT);
    localStorage.setItem('Theme', 'dark-theme');
  } else {
    bodyRef.classList.add(Theme.LIGHT);
    bodyRef.classList.remove(Theme.DARK);
    localStorage.setItem('Theme', 'light-theme');
    }
}

document.addEventListener('DOMContentLoaded', themeCheck);

export function themeCheck() {
  if (localStorage.getItem('Theme') === 'dark-theme') {
    bodyRef.classList.add(Theme.DARK);
    switchToggleRef.checked = true;
  } else {
    bodyRef.classList.add(Theme.LIGHT);
    switchToggleRef.checked = false;
  }
}