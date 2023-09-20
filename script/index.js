const myForm = document.querySelector('form');
const formSelect = myForm.querySelectorAll('.form-select');
const formInput = myForm.querySelectorAll('input');
const pasportInfo = document.querySelectorAll('.document-info__series-number input');

function setOptionsToYearSelect() {
    const year = new Date().getFullYear();
    const yearSelect = document.querySelector('#selectYear');
    for (let i = year - 3; i <= year; i++) {
        let newOptions = new Option(i, i);
        yearSelect.append(newOptions);
    }
}
setOptionsToYearSelect();

document.querySelector("#selectDoc").addEventListener('change', function (e) {
    if (e.target.value !== 'pasport') {
        pasportInfo.forEach((item) => {
            item.disabled = 'disabled';
        })
    }
    else {
        pasportInfo.forEach((item) => {
            item.disabled = '';
        })
    }
})

document.querySelector("#removeBtn").addEventListener('click', function () {
    resetForm();
})

document.querySelector("#submitBtn").addEventListener('click', function (e) {
    e.preventDefault();
    validation();
})

function validation() {
    let count = 0;
    for (let i = 0; i < formSelect.length; i++) {
        if (formSelect[i].value == '-1') {
            setInvalid(formSelect[i])
            count++;
        }
        else {
            setValid(formSelect[i])
        }
    }
    for (let i = 0; i < formInput.length; i++) {
        if (formInput[i].value == '' && !formInput[i].disabled) {
            setInvalid(formInput[i])
            count++;
        }
        else {
            setValid(formInput[i])
        }
    }
    return !count;
}

function setValid(field) {
    field.classList.remove('is-invalid');
    field.classList.add('is-valid');
}
function setInvalid(field) {
    field.classList.remove('is-valid');
    field.classList.add('is-invalid');
}

formSelect.forEach((item) => {
    item.addEventListener('change', function () {
        if (item.value == '-1') {
            setInvalid(item);
        }
        else {
            setValid(item);
        }
    })
})

formInput.forEach((item) => {
    item.addEventListener('change', function () {
        if (item.value == '') {
            setInvalid(item);
        }
        else {
            setValid(item);
        }
    })
})

function resetForm() {
    myForm.reset();
    formSelect.forEach((item) => {
        item.classList.remove('is-invalid');
        item.classList.remove('is-valid');
    })
    formInput.forEach((item) => {
        item.classList.remove('is-invalid');
        item.classList.remove('is-valid');
    })
}