input.onButtonPressed(Button.AB, function () {
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        # # . . .
        # . # . .
        # # . . .
        # . # . .
        # # . . .
        `)
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
    basic.pause(100)
})
