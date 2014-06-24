window.onload = function () {

  window.text = new FizzyText(document.getElementById('titleCanvas'), 'DESIGN FOR TOUCH');

  var names = ['Alex', 'Black', 'Camy', 'Daisy', 'Emma', 'Frank', 'Gary', 'Hubert', 'Ivy', 'Jony', 'Kevin',
    'Lemon', 'Mary', 'Nick', 'Owen', 'Prince', 'Quency', 'Ray', 'Sunny', 'Tony', 'Uni', 'Viken', 'William'];

  window.dice = new NameRoller(document.getElementById('roller'), names);

  var prizes = {
    '1': [
      {
        cls: 'ctrip',
        title: '携程奖品'
      },
      {
        cls: 'sony',
        title: '索尼播放器'
      }
    ]
  };

  window.prizeShow = new Prizes(prizes);

};

/**
 * The Prizes
 */

function Prizes(prizes) {

  this.setPrize = function () {}

}

/**
 * The Dice
 */

function NameRoller(wrapper, names) {

  this.names = names;

  var that = this;
  var htmlWrapper = document.createElement('div');

  this.addName = function (name) {

    if (wrapper.children.length) {
      for (var i = wrapper.children.length; i--;) {
        this.removeName(wrapper.children[i]);
      }
    }

    htmlWrapper.innerHTML = '<li class="name prev">N</li>'.replace('N', name);
    var nameEl = htmlWrapper.firstChild;
    wrapper.appendChild(nameEl);

    nameEl.getBoundingClientRect();
    nameEl.classList.remove('prev');
    nameEl.classList.add('pres');

    if (wrapper.children.length > 1) {
      this.removeName(wrapper.children[0]);
    }
  };

  this.removeName = function (el) {
    el.classList.remove('pres');
    el.classList.add('past');
    el.addEventListener('transitionend', function (e) {
      try {
        wrapper.removeChild(e.target);
      } catch (e) {}
    });
  };

  this.roll = function () {
    var idx = Math.floor(this.names.length * Math.random());
    this.addName(this.names[idx]);
  };

  window.addEventListener('keypress', function (e) {

    switch (e.keyCode) {
    case 32:
      // Space
      that.roll();
    }

  });

}

/**
 * Fizzy DFT
 */

function FizzyText(wrapper, message) {

  var that = this;
  var _this = this;

  // These are the variables that we manipulate with gui-dat.
  // Notice they're all defined with "this". That makes them public.
  // Otherwise, gui-dat can't see them.

  this.growthSpeed = 0.2;       // how fast do particles change size?
  this.maxSize = 5;             // how big can they get?
  this.noiseStrength = 10;      // how turbulent is the flow?
  this.speed = 0.2;             // how fast do particles move?
  this.displayOutline = false;  // should we draw the message as a stroke?
  this.framesRendered = 0;

  var wrapperRect = wrapper.getBoundingClientRect();
  var width = parseInt(wrapperRect.width);
  var height = parseInt(wrapperRect.height);
  var textX = parseInt(width / 2);
  var textY = parseInt(height / 2);
  var noiseScale = 800;

  var praticlesNum = 600;

  var colors = ["#9ED841", "#E057EF", "#2A99DD", "#F4A432"];

  // This is the context we use to get a bitmap of text using
  // the getImageData function.
  var r = document.createElement('canvas');
  var s = r.getContext('2d');

  // This is the context we actually use to draw.
  var c = document.createElement('canvas');
  var g = c.getContext('2d');

  r.setAttribute('width', width);
  c.setAttribute('width', width);
  r.setAttribute('height', height);
  c.setAttribute('height', height);

  // Add our demo to the HTML
  wrapper.appendChild(c);

  // Stores bitmap image
  var pixels = [];

  // Stores a list of particles
  var particles = [];

  // Set g.font to the same font as the bitmap canvas, incase we
  // want to draw some outlines.
  s.font = g.font = "800 100px 'Helvetica', arial, sans-serif";

  // Instantiate some particles
  for (var i = 0; i < praticlesNum; i++) {
    particles.push(new Particle(Math.random() * width, Math.random() * height));
  }

  // __defineGetter__ and __defineSetter__ makes JavaScript believe that
  // we've defined a variable 'this.message'. This way, whenever we
  // change the message variable, we can call some more functions.

  this.__defineGetter__("message", function () {
    return message;
  });

  this.__defineSetter__("message", function (m) {
    message = m;
    createBitmap(message);
  });

  this.explode = function () {
    var mag = Math.random() * 30 + 30;
    for (var i = particles.length; i--;) {
      var angle = Math.random() * Math.PI * 2;
      particles[i].vx = Math.cos(angle) * mag;
      particles[i].vy = Math.sin(angle) * mag;
    }
  };

  // This function creates a bitmap of pixels based on your message
  // It's called every time we change the message property.
  var createBitmap = function (msg) {

    s.fillStyle = "#fff";
    s.fillRect(0, 0, width, height);

    s.fillStyle = "#222";
    s.textAlign = 'center';
    s.fillText(msg, textX, textY);

    // Pull reference
    var imageData = s.getImageData(0, 0, width, height);
    pixels = imageData.data;

  };

  // Called once per frame, updates the animation.
  var render = function () {

    that.framesRendered++;

    g.clearRect(0, 0, width, height);

    if (_this.displayOutline) {
      g.globalCompositeOperation = "source-over";
      g.strokeStyle = "#000";
      g.lineWidth = .5;
      g.strokeText(message, textX, textY);
    }

    g.globalCompositeOperation = "lighter";

    for (var i = particles.length; i--;) {
      g.fillStyle = colors[i % colors.length];
      particles[i].render();
    }

  };

  // This calls the setter we've defined above, so it also calls
  // the createBitmap function.
  this.message = message;

  // Main Loop
  (function loop() {
    requestAnimationFrame(loop);
    render();
  })();

  // This class is responsible for drawing and moving those little
  // colored dots.
  function Particle(x, y) {

    // Position
    this.x = x;
    this.y = y;

    // Size of particle
    this.r = 0;

    // This velocity is used by the explode function.
    this.vx = 0;
    this.vy = 0;

    // Called every frame
    this.render = function () {

      // What color is the pixel we're sitting on top of?
      var c = getColor(this.x, this.y);

      // Where should we move?
      var angle = noise(this.x / noiseScale, this.y / noiseScale) * _this.noiseStrength;

      // Are we within the boundaries of the image?
      var onScreen = this.x > 0 && this.x < width &&
        this.y > 0 && this.y < height;

      var isBlack = c != "rgb(255,255,255)" && onScreen;

      // If we're on top of a black pixel, grow.
      // If not, shrink.
      if (isBlack) {
        this.r += _this.growthSpeed;
      } else {
        this.r -= _this.growthSpeed;
      }

      // This velocity is used by the explode function.
      this.vx *= 0.01;
      this.vy *= 0.01;

      // Change our position based on the flow field and our
      // explode velocity.
      this.x += Math.cos(angle) * _this.speed + this.vx;
      this.y += -Math.sin(angle) * _this.speed + this.vy;

      this.r = constrain(this.r, 0, _this.maxSize);

      // If we're tiny, keep moving around until we find a black
      // pixel.
      if (this.r <= 0) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        return; // Don't draw!
      }

      // Draw the circle.
      g.beginPath();
      g.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
      g.fill();

    }
  }

  // Returns a color for a given pixel in the pixel array.
  function getColor(x, y) {
    var base = (Math.floor(y) * width + Math.floor(x)) * 4;
    var c = {
      r: pixels[base + 0],
      g: pixels[base + 1],
      b: pixels[base + 2],
      a: pixels[base + 3]
    };

    return "rgb(" + c.r + "," + c.g + "," + c.b + ")";
  }

  function constrain(x, min, max) {
    if (max < min) {
      max = [min, min = max][0];
    }
    return x > max ? max : x < min ? min : x;
  }

}
