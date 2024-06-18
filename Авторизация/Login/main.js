function divisors(integer) {
    integer = Number(prompt())
    let newArray = []
    let i = 2;
    if (integer === 2 || integer === 3 || integer === 5 || integer === 7 || integer === 11 || integer === 13 || integer === 17 || integer === 19 || integer === 23 || integer === 29 || integer === 31 || integer === 37 || integer === 41 || integer === 43 || integer === 47 || integer === 53 || integer === 59 || integer === 61 || integer === 67 || integer === 71 || integer === 73 || integer === 79 || integer === 83 || integer === 89 || integer === 97 || integer === 101 || integer === 103 || integer === 107) {
        newArray.push(integer + ' is prime')
        console.log(newArray)
        return newArray
    } else {
        while (integer > i) {
            if (integer % i === 0) {
                newArray.push(i)
                i++
            } else if (integer % i !== 0) {
                i++
            }
        }
        console.log(newArray)
        return newArray
    }

}

divisors()