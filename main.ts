huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_OBJECT_RECOGNITION)
pins.setEvents(DigitalPin.P8, PinEventType.None)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear_s(HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            basic.showString("M")
        } else if (huskylens.isAppear(2, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            basic.showString("P")
            pins.digitalWritePin(DigitalPin.P8, 0)
            basic.pause(100)
            pins.digitalWritePin(DigitalPin.P8, 1)
        } else if (huskylens.isAppear(3, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            basic.showString("C")
        }
        basic.pause(1000)
    }
})
