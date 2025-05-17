i18next
  .use(i18nextHttpBackend)
  .use(i18nextBrowserLanguageDetector)
  .init({
    fallbackLng: 'en',
    debug: true,
    backend: {
      loadPath: './locales/{{lng}}.json'
    }
  }, function(err, t) {
    updateContent();
  });

function updateContent() {
  document.getElementById('title').innerHTML = i18next.t('title');
  document.getElementById('description').innerHTML = i18next.t('description');
}

function changeLanguage(lng) {
  i18next.changeLanguage(lng, updateContent);
}