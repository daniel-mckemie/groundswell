function makeDuration(max) {
  return Math.floor(Math.random() * Math.floor(max) + 1);
}

function player1Audio(swellTime) {
	let swellDuration = makeDuration(swellTime)
	document.querySelector('.player1').style.animationDuration = `${swellDuration}s`;

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


function player2Audio(swellTime) {
	let swellDuration = makeDuration(swellTime)
	document.querySelector('.player2').style.animationDuration = `${swellDuration}s`;

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

function player3Audio(swellTime) {
	let swellDuration = makeDuration(swellTime)
	document.querySelector('.player3').style.animationDuration = `${swellDuration}s`;

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

function player4Audio(swellTime) {
	let swellDuration = makeDuration(swellTime)
	document.querySelector('.player4').style.animationDuration = `${swellDuration}s`;

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

player1Audio(3);
player2Audio(3);
player3Audio(3);
player4Audio(3);

