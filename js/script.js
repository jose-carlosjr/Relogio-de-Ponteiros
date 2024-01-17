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

// 1000 EQUIVALE A 1 SEGUNDO
setInterval(() => {
    const {seconds} = getTime() // DESTRUCTURING
    secondHand.style.transform = `translate(0, -50%) rotate(${seconds * 6}deg)`
}, 1000)

setInterval(() => {
    const {minutes} = getTime()
    minuteHand.style.transform = `translate(0, -50%) rotate(${minutes * 6}deg)`
}, 1000)