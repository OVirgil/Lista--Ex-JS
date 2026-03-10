for (let num = 2; num <= 100; num++) {

    let primo = true

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            primo = false
            break
        }
    }

    if (primo) {
        console.log(num)
    }
}