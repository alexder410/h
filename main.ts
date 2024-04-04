input.onButtonPressed(Button.A, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.yawn), music.PlaybackMode.InBackground)
    basic.pause(2000)
    basic.showNumber(input.compassHeading())
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
    input.calibrateCompass()
})
