let x = 0
let y = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    x = 0
    y = 0
    for (let index = 0; index < 5; index++) {
        led.toggle(x, y)
        basic.pause(500)
        y += 1
    }
    x = 0
    y = 0
    for (let index = 0; index < 5; index++) {
        led.toggle(x, y)
        basic.pause(500)
        y += 1
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    x = 0
    y = 0
    for (let index = 0; index < 5; index++) {
        led.toggle(y, x)
        basic.pause(500)
        y += 1
    }
})
