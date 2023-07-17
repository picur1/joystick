let x = 0
let y = 0
basic.forever(function () {
    x = pins.analogReadPin(AnalogPin.P0)
    y = pins.analogReadPin(AnalogPin.P1)
    serial.writeValue("x", x)
    serial.writeValue("y", y)
    if (x < 10) {
        basic.showArrow(ArrowNames.West)
    }
    if (x > 1000) {
        basic.showArrow(ArrowNames.East)
    }
    if (y > 1000) {
        basic.showArrow(ArrowNames.North)
    }
    if (y < 10) {
        basic.showArrow(ArrowNames.South)
    }
    if (x > 400 && x < 600 && (y > 400 && y < 600)) {
        basic.clearScreen()
    }
    basic.pause(200)
})
