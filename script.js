function makeDuration(max) {
  return Math.floor(Math.random() * Math.floor(max) + 1);
}

function whiteNoise(panValue, cycleTime) {
  let AudioContext = window.AudioContext || window.webkitAudioContext;
  let audioCtx = new AudioContext();
  let gainNode = audioCtx.createGain();
  let panNode = audioCtx.createStereoPanner();
  panNode.pan.value = panValue
  
  let myArrayBuffer = audioCtx.createBuffer(2, audioCtx.sampleRate * cycleTime, audioCtx.sampleRate);

  for (let channel = 0; channel < myArrayBuffer.numberOfChannels; channel++) {
    let nowBuffering = myArrayBuffer.getChannelData(channel);
    for (let i = 0; i < myArrayBuffer.length; i++) {
      nowBuffering[i] = Math.random() * 2 - 1;
    }
  }
  let source = audioCtx.createBufferSource();
  source.buffer = myArrayBuffer;
  source.connect(panNode);
  panNode.connect(gainNode);
  gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
  gainNode.gain.linearRampToValueAtTime(1, audioCtx.currentTime + cycleTime);
  gainNode.connect(audioCtx.destination);
  source.start();

}

function player1Part() {
  let swellDuration = makeDuration(10)
	const player1Animation = document.querySelector('.player1');
	player1Animation.style.animationDuration = `${swellDuration}s`;
	newPlayer1Animation = player1Animation.cloneNode(true);
	player1Animation.parentNode.replaceChild(newPlayer1Animation, player1Animation);
  whiteNoise(-1, swellDuration)

}

function player2Part() {
  let swellDuration = makeDuration(10)
  const player2Animation = document.querySelector('.player2');
  player2Animation.style.animationDuration = `${swellDuration}s`;
  newPlayer2Animation = player2Animation.cloneNode(true);
  player2Animation.parentNode.replaceChild(newPlayer2Animation, player2Animation);
  whiteNoise(-0.5, swellDuration)

}

function player3Part() {
  let swellDuration = makeDuration(10)
  const player3Animation = document.querySelector('.player3');
  player3Animation.style.animationDuration = `${swellDuration}s`;
  newPlayer3Animation = player3Animation.cloneNode(true);
  player3Animation.parentNode.replaceChild(newPlayer3Animation, player3Animation);
  whiteNoise(0.5, swellDuration)

}

function player4Part() {
  let swellDuration = makeDuration(10)
  const player4Animation = document.querySelector('.player4');
  player4Animation.style.animationDuration = `${swellDuration}s`;
  newPlayer4Animation = player4Animation.cloneNode(true);
  player4Animation.parentNode.replaceChild(newPlayer4Animation, player4Animation);
  whiteNoise(1, swellDuration)

}


setInterval(player1Part, 10000);
setInterval(player2Part, 10000);
setInterval(player3Part, 10000);
setInterval(player4Part, 10000);


