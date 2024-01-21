const hourHand = document.querySelector('.hour-hand')
const minuteHand = document.querySelector('.minute-hand')
const secondHand = document.querySelector('.second-hand')

const getTime = () => {
    const date = new Date()

    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    }
}

getTime()

setInterval(() => {
    const {seconds, minutes, hours} = getTime() // DESTRUCTURING
    secondHand.style.transform = `translate(0, -50%) rotate(${seconds * 6}deg)`
    minuteHand.style.transform = `translate(0, -50%) rotate(${minutes * 6}deg)`
    hourHand.style.transform = `translate(0, -50%) rotate(${(hours * 30) + (minutes / 2)}deg)`
}, 1000)

/*
    3600 segundos
    30 Graus
    PERCORRER 1 GRAU A CADA 120 SEGUNDOS
*/

/*
const {minutes, hours} = getTime()
let horaAtual = hours * 30

setInterval(() => {
    const {seconds, minutes, hours} = getTime()

    if (minutes % 2 == 0) {
        horaAtual += 2
        hourHand.style.transform = `translate(0, -50%) rotate(${horaAtual}deg)`
    }
}, 1000)
*/