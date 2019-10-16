    var x = 1.5;
    document.addEventListener('keyup', (event) => {
         document.getElementById('token').innerHTML = (document.getElementsByClassName('teste')[0].value * document.getElementsByClassName('base_calc')[0].value) / 0.15 * x;
    });
     document.forms['form'].elements['base_calc'].value = '1300';