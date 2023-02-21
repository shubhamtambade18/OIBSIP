const btn = document.getElementById('btn');
const degree = document.getElementById('degree');
const type = document.getElementById('type');
const msg = document.getElementById('msg');
let result = document.getElementById('res');


btn.addEventListener('click', (e) => {
    e.preventDefault();

    if(degree.value == ''){
        msg.innerHTML = '⚠️Plz Enter Degree!';
    }
    else if(type.value == 'temp'){
        msg.innerHTML = '⚠️Plz Select the Type!';
    }
    else if(type.value == 'f' && degree.value != ""){
        result.innerHTML = `${ ((parseFloat(degree.value) * 9) / 5 + 32).toFixed(2)} °F`;
        msg.innerHTML = '';
        btn.innerHTML = 'Converted.';
    }
    else if(type.value == 'c' && degree.value != ""){
        result.innerHTML = `${(((parseFloat(degree.value) - 32) * 5) / 9).toFixed(2)} °C`;
        msg.innerHTML = '';
        btn.innerHTML = 'Converted.';
    }
});