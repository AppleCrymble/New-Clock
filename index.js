const DISPLAY = document.querySelector('.display');

function getTimeInMilliseconds(){
    time = new Date()
    return ms = time.getMilliseconds() + 1000 * (
        time.getSeconds() + 60 * (
            time.getMinutes() + 60 * (
                time.getHours()
            )
        )
    )
}

function updateClock(){
    time = getTimeInMilliseconds()
    var twelfth = Math.floor(time / 7200000).toString().padStart(2, '0')
    time %= 4800000
    var degrees = Math.floor(time / 240000).toString().padStart(2, '0')
    time %= 240000
    var arcminutes = Math.floor(time / 4000).toString().padStart(2, '0')
    time %= 4000
    var arcsecond = Math.floor(time * 3 / 200).toString().padStart(2, '0')
    DISPLAY.textContent = `${twelfth}\t:\t${degrees}\t:\t${arcminutes}\t:\t${arcsecond}`
}

updateClock()
setInterval(updateClock, 60)