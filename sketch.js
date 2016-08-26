function setup() {
   var canvas = createCanvas(400, 400);
   background(200, 200, 200);
   fft = new p5.FFT();

   mic = new p5.AudioIn();
   mic.connect(fft);
   mic.start();

   osc = new p5.SinOsc();
   osc.start();
   env = new p5.Env();
   env.setADSR(0.001, 0.5, 0.1, 0.5);
   env.setRange(1, 0);
}

var calib = 12700;
var arr= [1,2,3];
function draw() {
   background(0);

   var spectrum = fft.analyze();

   // find max
   step = calib/500;
   note = 0;
   for (var i = 10; i < spectrum.length; i++){
      if (spectrum[i] > spectrum[note]) note = i;
   }
   text(spectrum[note], 10, 30);
   text(note, 10, 40);
   text(calib, 10, 50);

   if (spectrum[note] > 200){
      osc.freq(note * step);
      env.play(osc, 0, 0.1);
   }


   noStroke();
   fill(0,255,0); // spectrum is green
   range = 200;
   for (var i = 0; i< range; i++){
      var x = map(i, 0, range, 0, width);
      var h = map(spectrum[i], 0, 255, 0, height);
      rect(x, height - h, width / range, h );
   }
   beginShape();
   var waveform = fft.waveform();
   noFill();
   stroke(255,0,0); // waveform is red
   strokeWeight(1);
   for (var i = 0; i< waveform.length; i++){
      var x = map(i, 0, waveform.length, 0, width);
      var y = map( waveform[i], -1, 1, 0, height);
      vertex(x,y);
   }

   endShape();
}

function play() {
   for (var i = 0 ; i < )
   arr.clear();
}