seatingArrangement(process.argv[2])

function seatingArrangement(input) {
    console.log(getSeatingArrangement(input));
}


function getSeatingArrangement(seatNumber) {
    const seatType = getSeatType(parseInt(seatNumber))
    const facingSeat = getFacingSeat(parseInt(seatNumber))
    return facingSeat + ' ' + seatType
}

function getSeatType(seatNumber) {
    const modulo_6 = seatNumber % 6
    switch (modulo_6) {
        case 0:
            return 'WS';
        case 1:
            return 'WS';
        case 2:
            return 'MS';
        case 5:
            return 'MS';
        case 3:
            return 'AS';
        case 4:
            return 'AS';
    }
}

function getFacingSeat(seatNumber) {
    const modulo_12 = seatNumber % 12
    if (modulo_12 <= 6 && modulo_12 != 0) {
        switch (modulo_12) {
            case 1:
                return seatNumber + 11
            case 2:
                return seatNumber + 9
            case 3:
                return seatNumber + 7
            case 4:
                return seatNumber + 5
            case 5:
                return seatNumber + 3
            case 6:
                return seatNumber + 1
        }
    } else {
        switch (modulo_12) {
            case 0:
                return seatNumber - 11
            case 11:
                return seatNumber - 9
            case 10:
                return seatNumber - 7
            case 9:
                return seatNumber - 5
            case 8:
                return seatNumber - 3
            case 7:
                return seatNumber - 1
        }
    }
}