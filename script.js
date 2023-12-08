let cloneCounter = 1;

function duplicateDiv(event) {
    event.preventDefault();

    let originalDiv = document.querySelector('.originalDiv');
    let clone = originalDiv.cloneNode(true);
    clone.classList.add('cloned-div');

    clone.querySelector('.delete').classList.remove('hidden');
    clone.querySelector('#infoButton').classList.add('hidden');

    let clonedInputs = clone.querySelectorAll('input');
    clonedInputs.forEach(function (input) {
        if (cloneCounter > 1) {
            input.id = `${input.id}_${cloneCounter}`;
            input.name = `${input.name}_${cloneCounter}`;
        } else {
            input.id = `${input.id}_1`;
            input.name = `${input.name}_1`
        }
        input.required = false;
        input.value = '';
    });

    let addButton = document.getElementById('addButton');
    addButton.parentNode.insertBefore(clone, addButton);

    cloneCounter++;
}

function deleteDiv(button) {
    let clonedDiv = button.closest('.cloned-div');
    clonedDiv.parentNode.removeChild(clonedDiv);
}

function toggleTotalMwSt() {
    var totalMwStInput = document.getElementById("Total_MwSt");
    var mwStBefreitCheckbox = document.getElementById("MwSt_Befreit");

    if (mwStBefreitCheckbox.checked) {
        totalMwStInput.disabled = true;
        totalMwStInput.style.opacity = 0.5;
        totalMwStInput.input.delete;
    } else {
        totalMwStInput.disabled = false;
        totalMwStInput.style.opacity = 1;
    }
}

const formContainer = document.getElementById('form');
const message = document.getElementById('message');

formContainer.addEventListener("submit", function (e) {
    e.preventDefault();
    message.textContent = "Wird eingereicht..";
    message.style.display = "block";
    message.style.color = "green";
    message.style.paddingTop = "1rem";
    message.style.backgroundColor = "white";
    message.style.paddingBottom = "1rem";


    let formData = new FormData(this);
    let keyValuePairs = [];
    for (let pair of formData.entries()) {
        keyValuePairs.push(pair[0] + "=" + pair[1]);
    }
  
    let formDataString = keyValuePairs.join("&");

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
            if (response) {
                return response;
            } else {
                throw new Error("Das Formular konnte nicht gesendet werden.");
            }
        })
        .then(function (data) {
            message.textContent = "Formular wurde erfolgreich abgeschickt!";
            message.style.display = "block";
            message.style.backgroundColor = "green";
            message.style.color = "white";
            message.style.paddingTop = "1rem";
            message.style.paddingBottom = "1rem";
        })
        .catch(function (error) {
            console.error(error);
            message.textContent = "Ein Fehler ist aufgetreten";
            message.style.display = "block";
        });

    additional_plz = document.querySelectorAll("[id^='PLZ_']")
    additional_ortschaft = document.querySelectorAll("[id^='Ortschaft_']")
    additional_abo = document.querySelectorAll("[id^='Abo_Kabelanschluss_']")

    for (let i = 0; i < additional_plz.length; i++) {
        form = new FormData(this)

        form.delete(`PLZ_${i}`)
        form.delete(`Ortschaft_${i}`)
        form.delete(`Abo_Kabelanschluss_${i}`)

        form.set("PLZ", additional_plz[i].value)
        form.set("Ortschaft", additional_ortschaft[i].value)
        form.set("Abo_Kabelanschluss", additional_plz[i].value)

        let additionalKeyValuePairs = [];
        for (let pair of form.entries()) {
            additionalKeyValuePairs.push(pair[0] + "=" + pair[1]);
        }

        let additonalFormDataString = additionalKeyValuePairs.join("&");

        fetch(
            "https://script.google.com/macros/s/AKfycbwJ8zNdZA7ubFKlLm20d522znPFPXWeeQEeBcEPLsYOckRgfZegqUyrebvL3I7WmSEm/exec",
            {
                redirect: "follow",
                method: "POST",
                body: additonalFormDataString,
                headers: {
                    "Content-Type": "text/plain;charset=utf-8",
                },
            }
        )
            .then(function (response) {
                if (response) {
                    return response;
                } else {
                    throw new Error("Das Formular konnte nicht gesendet werden.");
                }
            })
            .then(function (data) {
                message.textContent = "Formular wurde erfolgreich abgeschickt!";
                message.style.display = "block";
                message.style.backgroundColor = "green";
                message.style.color = "white";
                message.style.paddingTop = "1rem";
                message.style.paddingBottom = "1rem";
            })
            .catch(function (error) {
                console.error(error);
                message.textContent = "Ein Fehler ist aufgetreten";
                message.style.display = "block";
            });
    } 
});

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

languageSelect.addEventListener('change', function () {
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
        mwstCheck.textContent = 'MwSt befreit';
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
