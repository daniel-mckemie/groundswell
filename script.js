function makeDuration(max) {
  return Math.floor(Math.random() * Math.floor(max) + 1);
}

function player1Part() {
	let swellDuration = makeDuration(5)
	const player1Animation = document.querySelector('.player1');
	player1Animation.style.animationDuration = `${swellDuration}s`;
	newPlayer1Animation = player1Animation.cloneNode(true);
	player1Animation.parentNode.replaceChild(newPlayer1Animation, player1Animation);

  let AudioContext = window.AudioContext || window.webkitAudioContext;
  let audioCtx = new AudioContext();
  let gainNode = audioCtx.createGain();
  let panNode = audioCtx.createStereoPanner();
  panNode.pan.value = -1

  
  let myArrayBuffer = audioCtx.createBuffer(2, audioCtx.sampleRate * swellDuration, audioCtx.sampleRate);

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
  gainNode.gain.linearRampToValueAtTime(1, audioCtx.currentTime + swellDuration);
  gainNode.connect(audioCtx.destination);
  source.start();
}


function player2Part() {
	let swellDuration = makeDuration(5)
	const player2Animation = document.querySelector('.player2');
	player2Animation.style.animationDuration = `${swellDuration}s`;
	newPlayer2Animation = player2Animation.cloneNode(true);
	player2Animation.parentNode.replaceChild(newPlayer2Animation, player2Animation);

  let AudioContext = window.AudioContext || window.webkitAudioContext;
  let audioCtx = new AudioContext();
  let gainNode = audioCtx.createGain();
  let panNode = audioCtx.createStereoPanner();
  panNode.pan.value = -0.5

  
  let myArrayBuffer = audioCtx.createBuffer(2, audioCtx.sampleRate * swellDuration, audioCtx.sampleRate);

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
  gainNode.gain.linearRampToValueAtTime(1, audioCtx.currentTime + swellDuration);
  gainNode.connect(audioCtx.destination);
  source.start();
}

function player3Part() {
	let swellDuration = makeDuration(5)
	const player3Animation = document.querySelector('.player3');
	player3Animation.style.animationDuration = `${swellDuration}s`;
	newPlayer3Animation = player3Animation.cloneNode(true);
	player3Animation.parentNode.replaceChild(newPlayer3Animation, player3Animation);

  let AudioContext = window.AudioContext || window.webkitAudioContext;
  let audioCtx = new AudioContext();
  let gainNode = audioCtx.createGain();
  let panNode = audioCtx.createStereoPanner();
  panNode.pan.value = 0.5

  
  let myArrayBuffer = audioCtx.createBuffer(2, audioCtx.sampleRate * swellDuration, audioCtx.sampleRate);

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
  gainNode.gain.linearRampToValueAtTime(1, audioCtx.currentTime + swellDuration);
  gainNode.connect(audioCtx.destination);
  source.start();
}

function player4Part() {
	let swellDuration = makeDuration(5)
	const player4Animation = document.querySelector('.player4');
	player4Animation.style.animationDuration = `${swellDuration}s`;
	newPlayer4Animation = player4Animation.cloneNode(true);
	player4Animation.parentNode.replaceChild(newPlayer4Animation, player4Animation);

  let AudioContext = window.AudioContext || window.webkitAudioContext;
  let audioCtx = new AudioContext();
  let gainNode = audioCtx.createGain();
  let panNode = audioCtx.createStereoPanner();
  panNode.pan.value = 1

  
  let myArrayBuffer = audioCtx.createBuffer(2, audioCtx.sampleRate * swellDuration, audioCtx.sampleRate);

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
  gainNode.gain.linearRampToValueAtTime(1, audioCtx.currentTime + swellDuration);
  gainNode.connect(audioCtx.destination);
  source.start();
}


setInterval(player1Part, 5000);
setInterval(player2Part, 5000);
setInterval(player3Part, 5000);
setInterval(player4Part, 5000);


