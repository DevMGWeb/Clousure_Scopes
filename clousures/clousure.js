const moneyBox = () => {
    let saveCoins = 0
    const countCoins = (coins) => {
        saveCoins += coins
        console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins
}

let myMoneyBox = moneyBox()
myMoneyBox(4) // 4
myMoneyBox(6) // 6
myMoneyBox(10) // 10