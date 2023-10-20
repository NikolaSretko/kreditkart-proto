//==============constanten defniert an HTML Elementen===================
const cardNumberInput = document.getElementById('cardNumber');
const cardHolderInput = document.getElementById('cardHolder');
const expirationDateInput = document.getElementById('expirationDate');
const cvvInput = document.getElementById('cvv');
//######################################################################
const cardNumber = document.getElementById('card-number');
const cardHolder = document.getElementById('card-holder');
const cardExpiration = document.getElementById('card-expiration');
const cardCVV = document.getElementById('card-cvv');
//=======================================================================
//====nach jeder 4. stelle wird ein leerzeichengemacht (code snippedt)===
cardNumberInput.addEventListener('input', (event) => {
    const input = event.target;
    const value = input.value.replace(/\s/g, ''); // Entferne vorhandene Leerzeichen
    const formattedValue = value.replace(/(\d{4})/g, '$1 ').trim();
    input.value = formattedValue;
});
//=======================================================================
//==============fuctionen gekopepelt an user angaben=====================
cardNumberInput.addEventListener('input', () => {
    cardNumber.textContent = cardNumberInput.value;
});

cardHolderInput.addEventListener('input', () => {
    cardHolder.textContent = cardHolderInput.value;
});

expirationDateInput.addEventListener('input', () => {
    cardExpiration.textContent = expirationDateInput.value;
});

cvvInput.addEventListener('input', () => {
    cardCVV.textContent = cvvInput.value;
});
//=======================================================================
//=======================================================================
const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault(); 
    // ===Verhindern Sie das Standardverhalten des Formulars, um die Seite nicht neu zu laden.

    const card = document.querySelector('.card');
    card.classList.add('flipping');

    // Nachdem die Animation abgeschlossen ist, entfernen Sie die "flipping" Klasse, um die Karte zurückzusetzen.
    card.addEventListener('animationend', function () {
        card.classList.remove('flipping');
    });
});
