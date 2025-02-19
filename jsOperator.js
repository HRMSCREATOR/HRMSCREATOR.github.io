//Button to submit the result

document.getElementById('calculator').addEventListener('submit', function (event) {
    event.preventDefault();

    const operator = document.getElementById('op').value.trim();
    const firstnumber = parseFloat(document.getElementById('first').value);
    const secondnumber = parseFloat(document.getElementById('second').value);
    let result;

    function addnumber(x, y) {
        return x + y;

    }
    function diffnumber(x, y) {
        return x - y;

    }
    function prodnumber(x, y) {
        return x * y;

    }
    function divnumber(x, y) {
        if (y === 0) {
            alert('Cannot divide by zero');
            return 'Null';
        } else
            return x / y;

    }


    switch (operator) {
        case '+':
            result = addnumber(firstnumber, secondnumber);
            break;
        case '-':
            result = diffnumber(firstnumber, secondnumber);
            break;
        case '*':
            result = prodnumber(firstnumber, secondnumber);
            break;
        case '/':
            result = divnumber(firstnumber, secondnumber);
            break;
        default:
            alert('This is not a valid operator.');
            return;

    }



    alert("Calculation Result: " + result);
    console.log("Calculation Result: " + result);
});
