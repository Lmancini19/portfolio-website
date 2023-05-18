(function() {
    let form = document.querySelector('#contact-form');
    let firstName = document.querySelector('#first-name');
    let lastName = document.querySelector('#last-name');
    let emailInput = document.querySelector('#email');
    let messageInput = document.querySelector('#message');

    function showErrorMessage(input, message) {
        let container = input.parentElement;

        let error = container.querySelector('.error-message');
        if (error) {
          container.removeChild(error);
        }

        if (message) {
            let error = document.createElement('div');
            error.classList.add('error-message');
            error.innerText = message;
            container.appendChild(error);
        }
    }

    function validatefirstName() {
        let value = firstName.value;

        if (!value) {
            showErrorMessage(firstName, 'First name is a required field.');
            return false;
        }
    }

    function validatelastName() {
        let value = lastName.value;

        if (!value) {
            showErrorMessage(lastName, 'Last name is a required field.');
            return false;
        }
    }

    function validateEmail () {
        let value = emailInput.value;

        if (!value) {
            showErrorMessage(emailInput, 'E-mail is a required field.');
            return false;
        }
          
        if (value.indexOf('@') === -1) {
            showErrorMessage(emailInput, 'You must enter a valid e-mail address, missing @.');
            return false;
        }
      
        if (value.indexOf('.') === -1) {
            showErrorMessage(emailInput, 'You must enter a valid e-mail address, no dot.');
            return false;
        }
          
        showErrorMessage(emailInput, null);
        return true;    
    }

    function validateMessage () {
        let value = messageInput.value;

        if (!value) {
            showErrorMessage(messageInput, 'Message is a required field.');
            return false;
        }

        if (value.length > 240) {
            showErrorMessage(messageInput, 'Max 240 characters.');
            return false;
        }
        
        showErrorMessage(messageInput, null);
        return true;
    }

      
  function validateForm() {
    let isValidFirstName = validatefirstName();
    let isValidLastName = validatelastName();
    let isValidEmail = validateEmail();
    let isValidMessage = validateMessage();
    return isValidFirstName && isValidLastName && isValidEmail && isValidMessage;
  }
  
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Do not submit to the server
    if (validateForm()) {
      alert('Success!');
    }
  });

    firstName.addEventListener('focusout', validatefirstName);
    lastName.addEventListener('focusout', validatelastName);
    emailInput.addEventListener('focusout', validateEmail);
    messageInput.addEventListener('focusout', validateMessage);
  
})();