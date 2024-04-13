const form = document.getElementById('paymentForm');
const errorContainer = document.getElementById('errorContainer');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (validateForm()) {
        
        this.submit();
    } else {
        errorContainer.style.display = 'block';
    }
});

function validateForm() {
    const cardNumber = document.getElementById('cardNumber').value;
    const cvc = document.getElementById('cvc').value;
    const amount = document.getElementById('amount').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const postalCode = document.getElementById('postalCode').value;
    const message = document.getElementById('message').value;

    
    const numericRegex = /^[0-9]+$/;
    const alphaNumericRegex = /^[a-zA-Z0-9\s]+$/;
    const alphaRegex = /^[a-zA-Z\s]+$/;

    
    const validations = {
        cardNumber: cardNumber.length === 16 && numericRegex.test(cardNumber),
        cvc: cvc.length === 3 && numericRegex.test(cvc),
        amount: !isNaN(amount) && amount.length <= 12,
        firstName: alphaRegex.test(firstName) && firstName.length <= 20,
        lastName: alphaRegex.test(lastName) && lastName.length <= 20,
        city: alphaRegex.test(city) && city.length <= 20,
        state: alphaRegex.test(state) && state.length <= 20,
        postalCode: alphaNumericRegex.test(postalCode),
        message: alphaNumericRegex.test(message) && message.length <= 100
    };

    
    return Object.values(validations).every(validation => validation);
}

function resetForm() {
    form.reset();
    errorContainer.style.display = 'none';
}
