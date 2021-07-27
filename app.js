
document.addEventListener('DOMContentLoaded', function() {
    const input1 = document.querySelector('.input1');
    const input2 = document.querySelector('.input2');
    const button = document.querySelector('button');

    button.onclick = function() {
        alert(
            parseInt(input1.value, 10)
            +
            parseInt(input2.value, 10)
        );
    };

});
