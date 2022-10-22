const pwd1 = document.querySelector('#pwd1');
const pwd2 = document.querySelector('#pwd2');
const pwdWarn = document.querySelector('.pwdWarn');

pwd1.addEventListener('input', (e) => {
    if (e.target.value === pwd2.value) {
        pwd1.classList.remove('noMatched');
        pwd2.classList.remove('noMatched');
        pwdWarn.innerText = '';
    } else if  (e.target.value !== pwd2.value && !pwd1.classList.contains('noMatched')) {
        pwd1.classList.add('noMatched');
        pwd2.classList.add('noMatched');
        pwdWarn.innerText = '* Required matched password';
    }
})

pwd2.addEventListener('input', (e) => {
    if (e.target.value === pwd1.value) {
        pwd1.classList.remove('noMatched');
        pwd2.classList.remove('noMatched');
        pwdWarn.innerText = '';
    } else if  (e.target.value !== pwd1.value && !pwd1.classList.contains('noMatched')) {
        pwd1.classList.add('noMatched');
        pwd2.classList.add('noMatched');
        pwdWarn.innerText = '* Required matched password';
    }
})

