function duplicateDiv(event) {
    event.preventDefault();

    var originalDiv = document.querySelector('.originalDiv');
    var clone = originalDiv.cloneNode(true);
    clone.classList.add('cloned-div');

    var clonedInputs = clone.querySelectorAll('input');
    clonedInputs.forEach(function(input) {
        input.value = '';
    });

    var addButton = document.getElementById('addButton');
    addButton.parentNode.insertBefore(clone, addButton);
}

function deleteDiv(button) {
    var clonedDiv = button.closest('.cloned-div');
    clonedDiv.parentNode.removeChild(clonedDiv);
}

/*Translate*/

const languageSelect = document.getElementById('language-select');
const title = document.getElementById('title');
const description = document.getElementById('description');
const locality = document.getElementById('locality');
const data_title = document.getElementById('data_title');
const company = document.getElementById('company');

languageSelect.addEventListener('change', function() {
  if (languageSelect.value === 'de') {
    locality.textContent = 'Ortschaft';
    title.textContent = 'Abonnenten per 01.01.2024';
    description.textContent = 'Es ist wieder Zeit, Sie um die aktuelle Angabe der in Ihrem Netz angeschlossenen Abonnenten zu bitten. Diese Daten bilden die Grundlage für die korrekte Verrechnung Ihres mit uns abgeschlossenen Signalfeed- und/oder Maintenance-Vertrages und/oder SOC Penetrations-Berechnung für das Jahr 2024.';
    data_title.textContent = 'Geben Sie Ihre Daten ein:';
    company.textContent = 'Firmenname';
  } else if (languageSelect.value === 'fr') {
    locality.textContent = 'FR_Ortschaft';
    title.textContent = 'FR_Abonnenten per 01.01.2024';
    description.textContent = 'FR_Es ist wieder Zeit, Sie um die aktuelle Angabe der in Ihrem Netz angeschlossenen Abonnenten zu bitten. Diese Daten bilden die Grundlage für die korrekte Verrechnung Ihres mit uns abgeschlossenen Signalfeed- und/oder Maintenance-Vertrages und/oder SOC Penetrations-Berechnung für das Jahr 2024.';
    data_title.textContent = 'FR_Geben Sie Ihre Daten ein:';
    company.textContent = 'FR_Firmenname';
  }
});
