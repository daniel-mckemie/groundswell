function makeDuration(max) {
  return Math.floor(Math.random() * Math.floor(max) + 1);
}

function snaresOn(panValue, cycleTime) {
  let AudioContext = window.AudioContext || window.webkitAudioContext;
  let audioCtx = new AudioContext();
  let gainNode = audioCtx.createGain();
  let panNode = audioCtx.createStereoPanner();
  panNode.pan.value = panValue

  // White noise properties
  let myArrayBuffer = audioCtx.createBuffer(2, audioCtx.sampleRate * cycleTime, audioCtx.sampleRate);
  for (let channel = 0; channel < myArrayBuffer.numberOfChannels; channel++) {
    let nowBuffering = myArrayBuffer.getChannelData(channel);
    for (let i = 0; i < myArrayBuffer.length; i++) {
      nowBuffering[i] = Math.random() * 2 - 1;
    }
  }
  // Connections
  let source = audioCtx.createBufferSource();
  source.buffer = myArrayBuffer;
  source.connect(panNode);
  panNode.connect(gainNode);
  gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
  gainNode.gain.linearRampToValueAtTime(0.09, (audioCtx.currentTime) + cycleTime / 2);
  gainNode.gain.linearRampToValueAtTime(0, (audioCtx.currentTime) + cycleTime)
  gainNode.connect(audioCtx.destination);
  source.start(0);
  source.stop(cycleTime)
  setTimeout(AudioContext.close, cycleTime)
}

function snaresOff(panValue, cycleTime, carFreq, modFreq) {
  let AudioContext = window.AudioContext || window.webkitAudioContext;
  let audioCtx = new AudioContext();
  let panNode = audioCtx.createStereoPanner();
  panNode.pan.value = panValue;
  let carrier = audioCtx.createOscillator();
  let modulator = audioCtx.createOscillator();
  let carrierGain = audioCtx.createGain();
  let modulatorGain = audioCtx.createGain();
  let master = audioCtx.createGain();

  carrier.frequency.value = carFreq
  modulator.frequency.value = modFreq

  carrierGain.gain.value = 0.5;
  modulatorGain.gain.value = 0.5;

  carrier.connect(carrierGain);
  modulator.connect(modulatorGain);
  modulatorGain.connect(carrierGain.gain);
  carrierGain.connect(panNode);
  panNode.connect(master)
  master.gain.setValueAtTime(0, audioCtx.currentTime);
  master.gain.linearRampToValueAtTime(0.7, (audioCtx.currentTime) + (cycleTime / 2));
  master.gain.linearRampToValueAtTime(0, (audioCtx.currentTime) + (cycleTime));
  master.connect(audioCtx.destination)

  // start oscillators
  carrier.start(0);
  modulator.start(0);

  carrier.stop(cycleTime)
  modulator.stop(cycleTime)
  setTimeout(AudioContext.close, cycleTime)
}


// Color/sonic possibilities
const backgrounds = ['black', 'red']

function player1Part() {
  // Synchronicity of animation to noise swells
  let swellDuration = makeDuration(20)
  const player1Animation = document.querySelector('.player1');
  player1Animation.style.backgroundColor = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  player1Animation.style.animationDuration = `${swellDuration}s`;

  // Replace part upon retrigger
  newPlayer1Animation = player1Animation.cloneNode(true);
  player1Animation.parentNode.replaceChild(newPlayer1Animation, player1Animation);

  // Play apprpriate sound component
  if (player1Animation.style.backgroundColor == 'black') {
    snaresOn(-1, swellDuration)
  } else {
    snaresOff(-1, swellDuration, 155.56, 14)
  }
}

function player2Part() {
  // Synchronicity of animation to noise swells
  let swellDuration = makeDuration(20)
  const player2Animation = document.querySelector('.player2');
  player2Animation.style.backgroundColor = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  player2Animation.style.animationDuration = `${swellDuration}s`;
  newPlayer2Animation = player2Animation.cloneNode(true);
  player2Animation.parentNode.replaceChild(newPlayer2Animation, player2Animation);
  if (player2Animation.style.backgroundColor == 'black') {
    snaresOn(-0.25, swellDuration)
  } else {
    snaresOff(-0.25, swellDuration, 185, 16)
  }
}

function player3Part() {
  // Synchronicity of animation to noise swells
  let swellDuration = makeDuration(20)
  const player3Animation = document.querySelector('.player3');
  player3Animation.style.backgroundColor = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  player3Animation.style.animationDuration = `${swellDuration}s`;
  newPlayer3Animation = player3Animation.cloneNode(true);
  player3Animation.parentNode.replaceChild(newPlayer3Animation, player3Animation);
  if (player3Animation.style.backgroundColor == 'black') {
    snaresOn(0.25, swellDuration)
  } else {
    snaresOff(0.25, swellDuration, 196, 18)
  }
}

function player4Part() {
  // Synchronicity of animation to noise swells
  let swellDuration = makeDuration(20)
  const player4Animation = document.querySelector('.player4');
  player4Animation.style.backgroundColor = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  player4Animation.style.animationDuration = `${swellDuration}s`;
  newPlayer4Animation = player4Animation.cloneNode(true);
  player4Animation.parentNode.replaceChild(newPlayer4Animation, player4Animation);
  if (player4Animation.style.backgroundColor == 'black') {
    snaresOn(1, swellDuration)
  } else {
    snaresOff(1, swellDuration, 233.08, 20)
  }
}

setInterval(player1Part, 20000);
setInterval(player2Part, 20000);
setInterval(player3Part, 20000);
setInterval(player4Part, 20000);