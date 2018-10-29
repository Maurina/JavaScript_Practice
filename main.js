let firstEffect = {};
firstEffect.opacityIn = [0,1];
firstEffect.scaleIn = [0.2, 1];
firstEffect.scaleOut = 3;
firstEffect.durationIn = 500;
firstEffect.durationOut = 300;
firstEffect.delay = 200;

AnimationEffect.timeline({loop: true})
.add({
    targets: '.firstEffect .words-1',
    opacity: firstEffect.opacityIn,
    scale: firstEffect.scaleIn,
    duration: firstEffect.durationIn
}) .add({
    targets: '.firstEffect .words-1',
    opacity: 0,
    scale: firstEffect.scaleOut,
    duration: firstEffect.durationOut,
    easing: "easeInExpo",
    delay: firstEffect.delay
}).add({
    targets: '.firstEffect .words-2',
    opacity: firstEffect.opacityIn,
    scale: firstEffect.scaleIn,
    duration: firstEffect.durationIn
}) .add({
    targets: '.firstEffect .words-2',
    opacity: 0,
    scale: firstEffect.scaleOut,
    duration: firstEffect.durationOut,
    easing: "easeInExpo",
    delay: firstEffect.delay
}).add({
    targets: '.firstEffect .words-3',
    opacity: firstEffect.opacityIn,
    scale: firstEffect.scaleIn,
    duration: firstEffect.durationIn
}) .add({
    targets: '.firstEffect .words-3',
    opacity: 0,
    scale: firstEffect.scaleOut,
    duration: firstEffect.durationOut,
    easing: "easeInExpo",
    delay: firstEffect.delay
}).add({
    targets: '.firstEffect .words-4',
    opacity: firstEffect.opacityIn,
    scale: firstEffect.scaleIn,
    duration: firstEffect.durationIn
}) .add({
    targets: '.firstEffect .words-4',
    opacity: 0,
    scale: firstEffect.scaleOut,
    duration: firstEffect.durationOut,
    easing: "easeInExpo",
    delay: firstEffect.delay
});