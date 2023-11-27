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
const data_title = document.getElementById('data_title');
const company = document.getElementById('company');
const contact_data = document.getElementById('contact_data');
const contact_name = document.getElementById('contact_name');
const contact_mail = document.getElementById('contact_mail');
const plz = document.getElementById('plz');
const locality = document.getElementById('locality');
const abo = document.getElementById('abo');
const tooltip = document.getElementById('tooltip-right');
const add_locality = document.getElementById('add_locality');
const basic_price = document.getElementById('basic_price');
const copyrights = document.getElementById('copyrights');
const totalMwSt = document.getElementById('totalMwSt');
const mwstCheck = document.getElementById('mwstCheck');
const total = document.getElementById('total');
const submit = document.getElementById('submit');

languageSelect.addEventListener('change', function() {
  if (languageSelect.value === 'de') {
    title.textContent = 'Abonnenten per 01.01.2024';
    description.textContent = 'Es ist wieder Zeit, Sie um die aktuelle Angabe der in Ihrem Netz angeschlossenen Abonnenten zu bitten. Diese Daten bilden die Grundlage für die korrekte Verrechnung Ihres mit uns abgeschlossenen Signalfeed- und/oder Maintenance-Vertrages.';
    data_title.textContent = 'Geben Sie Ihre Daten ein:';
    company.textContent = 'Firmenname';
    contact_data.textContent = 'Kontaktperson bei Rückfragen:';
    contact_name.textContent = 'Name und Nachname';
    contact_mail.textContent = 'Mail';
    plz.textContent = 'PLZ';
    locality.textContent = 'Ortschaft';
    abo.textContent = 'Abo Kabelanschluss';
    tooltip.textContent = 'Tragen Sie alle durch Sie verrechneten Kabelanschlüssen ein. Alle KAi Produkte von Sunrise müssen Sie nicht mehr deklarieren. Diese werden wir unserseits dazu addieren und Ihnen im Nachgang rückbestätigen.';
    add_locality.textContent = 'Weitere Ortschaft hinzufügen';
    basic_price.textContent = 'Grundpreis für den Kabelanschluss pro Monat';
    copyrights.textContent = 'Obligatorische Urheberrechte (GT1)';
    totalMwSt.textContent = 'Total MwSt, 8.1%';
    mwstCheck.textContent = '0 MwSt befreit';
    total.textContent = 'Total, inkl. MwSt.';
    submit.textContent = 'Absenden';

  } else if (languageSelect.value === 'fr') {
    title.textContent = 'Abonnés au 01.01.2024';
    description.textContent = 'Comme chaque année, nous vous demandons de nous fournir les informations actualisées relatives au nombre d`abonnés raccordés à votre réseau. Ces données servent de base pour la facturation pour l`année 2024 du contrat Signalfeed et/ou Maintenance que vous avez conclu avec nous.';
    data_title.textContent = 'Indiquez vos données:';
    company.textContent = 'Société';
    contact_data.textContent = 'Personne à contracter en cas de questions';
    contact_name.textContent = 'Nom et prénom';
    contact_mail.textContent = 'E-Mail';
    plz.textContent = 'NPA';
    locality.textContent = 'Localité';
    abo.textContent = 'Abonnement raccordement câblé';
    tooltip.textContent = 'Inscrivez tous les raccordements câble que vous facturez. Tous les produits KAi de Sunrise ne doivend plus être déclarés. Nous les ajouterons de notre côté et vous les confirmerons en retour.';
    add_locality.textContent = 'Ajouter d`autres localités';
    basic_price.textContent = 'Prix de base pour le raccordement câblé, par mois';
    copyrights.textContent = 'Taxe obligatoire: droits d`auteur (TC1)';
    totalMwSt.textContent = 'Total TVA 8.1%';
    mwstCheck.textContent = 'Exempté de TVA';
    total.textContent = 'Total incl. TVA';
    submit.textContent = 'Envoyez';
  }
});

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission
  document.getElementById("message").textContent = "Submitting..";
  document.getElementById("message").style.display = "block";
  document.getElementById("submit-button").disabled = true;

  // Collect the form data
  var formData = new FormData(this);
  var keyValuePairs = [];
  for (var pair of formData.entries()) {
    keyValuePairs.push(pair[0] + "=" + pair[1]);
  }

  var formDataString = keyValuePairs.join("&");

  // Send a POST request to your Google Apps Script
  fetch(
    "https://script.google.com/macros/s/AKfycbwJ8zNdZA7ubFKlLm20d522znPFPXWeeQEeBcEPLsYOckRgfZegqUyrebvL3I7WmSEm/exec",
    {
      redirect: "follow",
      method: "POST",
      body: formDataString,
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
    }
  )
    .then(function (response) {
      // Check if the request was successful
      if (response) {
        return response; // Assuming your script returns JSON response
      } else {
        throw new Error("Failed to submit the form.");
      }
    })
    .then(function (data) {
      // Display a success message
      document.getElementById("message").textContent =
        "Data submitted successfully!";
      document.getElementById("message").style.display = "block";
      document.getElementById("message").style.backgroundColor = "green";
      document.getElementById("message").style.color = "beige";
      document.getElementById("submit-button").disabled = false;
      document.getElementById("form").reset();

      setTimeout(function () {
        document.getElementById("message").textContent = "";
        document.getElementById("message").style.display = "none";
      }, 2600);
    })
    .catch(function (error) {
      // Handle errors, you can display an error message here
      console.error(error);
      document.getElementById("message").textContent =
        "An error occurred while submitting the form.";
      document.getElementById("message").style.display = "block";
    });
});
