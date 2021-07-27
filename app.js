
document.addEventListener('DOMContentLoaded', function() {
    const input1 = document.querySelector('.input1');
    const input2 = document.querySelector('.input2');
    const btn = document.querySelector('button');

    btn.onclick = function() {
        console.log(
            parseInt(input2.value, 10) / parseInt(input1.value, 10)
        );
    };

});
