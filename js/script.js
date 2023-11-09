document.addEventListener('DOMContentLoaded', function() {
    let userLanguage = localStorage.getItem('userLanguage') || navigator.language || navigator.userLanguage;
    const translationData = {};

    function loadTranslations(language) {
        const languageFile = language.startsWith('fr') ? 'translations/fr.json' : 'translations/en.json';

        if (!translationData[language]) {
            fetch(languageFile)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erreur de chargement du fichier de traduction');
                    }
                    return response.json();
                })
                .then(data => {
                    translationData[language] = data;
                    translateElements(data);
                })
                .catch(error => console.error('Erreur lors du chargement des traductions :', error));
        } else {
            translateElements(translationData[language]);
        }
    }

    function translateElements(data) {
        const elementsToTranslate = document.querySelectorAll('.translate');
        elementsToTranslate.forEach(element => {
            const translationKey = element.textContent;
            if (data[translationKey]) {
                element.textContent = data[translationKey];
            }
        });
    }

    loadTranslations(userLanguage);

    document.getElementById('frButton').addEventListener('click', function() {
        userLanguage = 'fr';
        localStorage.setItem('userLanguage', userLanguage);
        loadTranslations(userLanguage);
    });

    document.getElementById('enButton').addEventListener('click', function() {
        userLanguage = 'en';
        localStorage.setItem('userLanguage', userLanguage);
        loadTranslations(userLanguage);
    });
});
