// Показываем и скрываем добавляя/удаляя класс visible
// Скрываем через определенное время
// Скрываем при клике
// Не забываем чистить таймер

const NOTIFICATION_DELAY = 3000;
let timeoutId = null;

const refs = {
  notifications: document.querySelector('.js-alert'),
};

refs.notifications.addEventListener('click', onNotificationClick);

showNotification();

function onNotificationClick() {
  hideNotification();
  clearTimeout(timeoutId);
}

function showNotification() {
  refs.notifications.classList.add('is-visible');

  timeoutId = setTimeout(() => {
    hideNotification();
  }, NOTIFICATION_DELAY);
}

function hideNotification() {
  refs.notifications.classList.remove('is-visible');
}
