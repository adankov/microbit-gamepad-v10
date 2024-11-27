radio.setGroup(2)
pins.setPull(DigitalPin.P13, PinPullMode.PullNone)
pins.setPull(DigitalPin.P15, PinPullMode.PullNone)
pins.setPull(DigitalPin.P14, PinPullMode.PullNone)
pins.setPull(DigitalPin.P16, PinPullMode.PullNone)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P15) == 0) {
        radio.sendString("Open")
    } else if (pins.digitalReadPin(DigitalPin.P13) == 0) {
        radio.sendString("Close")
    } else if (pins.digitalReadPin(DigitalPin.P16) == 0) {
        radio.sendString("LEDL")
    } else if (pins.digitalReadPin(DigitalPin.P14) == 0) {
        radio.sendString("LEDR")
    } else {
        if (pins.analogReadPin(AnalogReadWritePin.P2) > 550 && (pins.analogReadPin(AnalogReadWritePin.P1) > 400 && pins.analogReadPin(AnalogReadWritePin.P1) < 600)) {
            radio.sendValue("F", pins.analogReadPin(AnalogReadWritePin.P2))
        } else if (pins.analogReadPin(AnalogReadWritePin.P2) < 450 && (pins.analogReadPin(AnalogReadWritePin.P1) > 400 && pins.analogReadPin(AnalogReadWritePin.P1) < 600)) {
            radio.sendValue("B", pins.analogReadPin(AnalogReadWritePin.P2))
        } else if (pins.analogReadPin(AnalogReadWritePin.P1) < 450 && (pins.analogReadPin(AnalogReadWritePin.P2) > 400 && pins.analogReadPin(AnalogReadWritePin.P2) < 600)) {
            radio.sendValue("L", pins.analogReadPin(AnalogReadWritePin.P1))
        } else if (pins.analogReadPin(AnalogReadWritePin.P1) > 550 && (pins.analogReadPin(AnalogReadWritePin.P2) > 400 && pins.analogReadPin(AnalogReadWritePin.P2) < 600)) {
            radio.sendValue("R", pins.analogReadPin(AnalogReadWritePin.P1))
        } else {
            radio.sendString("S")
        }
    }
})
