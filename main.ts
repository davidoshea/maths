input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    originalsum = 10000
    sum = originalsum
    for (let index = 0; index <= 5; index++) {
        sum += (originalsum / originalsum * (index + 1))
        basic.showString("< ")
        basic.showNumber(sum)
        basic.showString(" >")
        basic.clearScreen()
    }
})
function doSomething (text: string) {
    basic.showString("doSomething")
}
let sum = 0
let originalsum = 0
let denom = 0
basic.forever(function () {
    doSomething
})
