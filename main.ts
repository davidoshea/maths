basic.forever(function () {
	
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    let originalsum = 100000000000
    let sum = originalsum
    let denom:number  = 1
    for (let index = 1; index <= 99999999; index++) {
        denom = denom * index
        sum = sum +  (originalsum / denom) 
    }
    basic.showString("< ")
    basic.showNumber(sum)
    basic.showString(" >")
    basic.clearScreen()
})
