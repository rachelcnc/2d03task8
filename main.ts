input.onButtonPressed(Button.A, function () {
    if (0 == 0) {
        basic.showString("N")
    }
    if (input.compassHeading() == 90) {
        basic.showString("E")
    }
    if (input.compassHeading() == 180) {
        basic.showString("S")
    }
    if (input.compassHeading() == 270) {
        basic.showString("W")
    }
})
input.onButtonPressed(Button.B, function () {
    if (input.compassHeading() >= 315 && input.compassHeading() < 360 || input.compassHeading() > 0 && input.compassHeading() < 45) {
        basic.showString("N")
    }
    if (input.compassHeading() >= 45 && input.compassHeading() < 135) {
        basic.showString("E")
    }
    if (input.compassHeading() >= 135 && input.compassHeading() < 225) {
        basic.showString("S")
    }
    if (input.compassHeading() >= 225 && input.compassHeading() < 315) {
        basic.showString("W")
    }
})
basic.forever(function () {
	
})
