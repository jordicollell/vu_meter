basic.showLeds(`
    . . . . .
    . . . . .
    . # # # .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P0, 180 - input.soundLevel() / 1.42)
})
basic.forever(function () {
    let escala = 0
    if (input.soundLevel() > 255 * 0.3 && input.soundLevel() < escala * 0.5) {
        pins.digitalWritePin(DigitalPin.P11, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 1)
    }
    if (input.soundLevel() > 255 * 0.5 && input.soundLevel() < escala * 0.7) {
        pins.digitalWritePin(DigitalPin.P11, 0)
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P13, 0)
    }
    if (input.soundLevel() > 255 * 0.7) {
        pins.digitalWritePin(DigitalPin.P11, 1)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
    }
})
