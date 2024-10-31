const form = document.querySelector('.form');
const fullname = document.getElementById('fullname');
const group = document.getElementById('group');
const phone = document.getElementById('phone');
const address = document.getElementById('address');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
});

const isValidFullname = (fullname) => {
    const re = /^[А-ЯІЇЄҐ][а-яіїєґ]+\s[А-ЯІЇЄҐ]\.\s[А-ЯІЇЄҐ]\.$/;
    return re.test(fullname);
};

const isValidGroup = (group) => {
    const re = /^[А-ЯІЇЄҐ]{2}-\d{2}$/i;
    return re.test(group);
};

const isValidPhone = (phone) => {
    const re = /^\d{10}$/;
    return re.test(phone);
};

const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;

    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';

    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateInputs = () => {
    const fullnameValue = fullname.value.trim();
    const groupValue = group.value.trim();
    const phoneValue = phone.value.trim();
    const addressValue = address.value.trim();
    const emailValue = email.value.trim();

    let isFormValid = true;

    if (fullnameValue === '') {
        setError(fullname, 'ПІБ обов’язкове');
        isFormValid = false;
    } else if (!isValidFullname(fullnameValue)) {
        setError(fullname, 'Введіть ПІБ у форматі: Прізвище І. О.');
        isFormValid = false;
    } else {
        setSuccess(fullname);
    }

    if (groupValue === '') {
        setError(group, 'Група обов’язкова');
        isFormValid = false;
    } else if (!isValidGroup(groupValue)) {
        setError(group, 'Введіть групу у форматі: ІМ-23');
        isFormValid = false;
    } else {
        setSuccess(group);
    }

    if (phoneValue === '') {
        setError(phone, 'Телефон обов’язковий');
        isFormValid = false;
    } else if (!isValidPhone(phoneValue)) {
        setError(phone, 'Телефон має містити 10 цифр');
        isFormValid = false;
    } else {
        setSuccess(phone);
    }

    if (addressValue === '') {
        setError(address, 'Адреса обов’язкова');
        isFormValid = false;
    } else {
        setSuccess(address);
    }

    if (emailValue === '') {
        setError(email, 'Пошта обов’язкова');
        isFormValid = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Введіть правильну адресу електронної пошти');
        isFormValid = false;
    } else {
        setSuccess(email);
    }

    if (isFormValid) {
        const formData = `
            <p><strong>ПІБ:</strong> ${fullnameValue}</p>
            <p><strong>Група:</strong> ${groupValue}</p>
            <p><strong>Телефон:</strong> ${phoneValue}</p>
            <p><strong>Адреса:</strong> ${addressValue}</p>
            <p><strong>Пошта:</strong> ${emailValue}</p>
        `;

        const newWin = window.open('', '_blank', 'width=300,height=300');

        if (newWin) {
            newWin.document.write(`
                <html lang="uk">
                    <head>
                        <title>Введена інформація</title>
                    </head>
                    <body>
                        ${formData}
                    </body>
                </html>
            `);
            newWin.document.close();
        } else {
            alert('Нове вікно було заблоковано вашим браузером. Дозвольте спливаючі вікна для цього сайту.');
        }
    }
};
