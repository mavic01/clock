
function updateClock() {
    const now = new Date
    let hours = now.getHours() //for the first 2 characters, pad them with a 0
    const meridien = hours >= 12 ? "PM" : "AM"
    hours = hours % 12 || 12
    hours = hours.toString().padStart(2, 0)
    const minutes = now.getMinutes().toString().padStart(2, 0)
    const seconds = now.getSeconds().toString().padStart(2, 0)
    const timeString = `${hours}:${minutes}:${seconds} ${meridien}`

    const clock = document.getElementById('clock')
    clock.textContent = timeString
}

updateClock()
// setInterval() //works like setTimeOut. Except it will call a function repeatedly, Not just once
setInterval(updateClock, 1000)//call this fn after 1000ms