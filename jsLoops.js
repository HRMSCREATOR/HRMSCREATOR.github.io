//It handle a clicking function that show in the html view
document.getElementById('loopme').addEventListener('submit', function (event) {
    event.preventDefault();

    const input = parseFloat(document.getElementById('numbers').value);
    let results;

    function checkEvenOrOdd(n) {
        if (n % 2 === 0) {
            results = "Even";
            
        } else {
            results = "Odd";
        }
       document.getElementById("result").innerText = results;
       return alert(`The type of this, number: ${input} is result to ${results}`)
    }

    checkEvenOrOdd(input)

    for (let i = 1; i <= 10; i++) {
        console.log(`Counting: ${i},  I love programming😍.`);
    }


}); 
