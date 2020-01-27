function primeOrNot(number, divisibleByList) {

    let result = true

    if (number == 2) {

        result = true

    } else {

        for (let i = 2; i < number; i++) {

            if (number % i === 0) {
                if (divisibleByList[number]) {
                    divisibleByList[number].push(i)
                } else {
                    divisibleByList[number] = [i]
                }
                result = false
                break;

            }
        }

    }

    return result
}

function primeNumber(input) {

    input = parseInt(input)
    divisibleByList = {}
    output = ''

    for (let i = 2; i <= input; i++) {

        if (primeOrNot(i, divisibleByList)) {
            output += `${i} `
        }

    }

    console.log(output + '\n')    // Writing output to STDOUT
    console.log(divisibleByList)
}

primeNumber(process.argv[2])