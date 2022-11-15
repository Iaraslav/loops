function menu() {
    choice = prompt("1) Find factorial\n2) Find sum of first N digits\n3) Find sum of odd and even numbers of N");
    return choice;
}

while (true) {
    let choice = menu()
    switch (Number(choice)) {
        case 1:
            let factorial = prompt("Type number to find the factorial");
            var counter = 1;
            if ((factorial > 0)) {
                for (let i = 1; i <= factorial; i++) {
                    counter = counter * i;
                }
                alert("The factorial of " + factorial + " is " + counter);
            }
            else {
                alert("The number is less than 1 or not integer.");
            } 
            break;
        case 2:
            let number = prompt("Type number to find the sum of first N digits");
            var counter = 0;
            if ((number > 0)) {
                for (let i = 1; i <= number; i++) {
                    counter = counter + i;
                }
                alert("The sum of first " + number + " digits is " + counter);
            }
            else {
                alert("The number is less than 1 or not integer.");
            } 
            break;
        case 3:
            let num = prompt("Type number to find the sum of odd and even digits of the number");
            var counterOdd = 0;
            var counterEven = 0;
            if ((num > 0)) {
                for (let i = 1; i <= num; i++) {
                    if ((i % 2) == 0) {
                        counterEven = counterEven + i;
                    } else {
                        if ((i % 2) == 1) {
                            counterOdd = counterOdd + i;
                        } else {
                            alert("The number is less than 1 or not integer.");
                        }
                    }
                }
                alert("The sum of odd = " + counterOdd + ", The sum of even = " + counterEven);
            }
            else {
                alert("The number is less than 1 or not integer.");
            } 
            break;
        default:
            break;
    }
}