window.onload = function () {

  new FizzyText(document.getElementById('namesCanvas'), 'Design For Touch');

};

function FizzyText(wrapper, message) {

  var wrapperRect = wrapper.getBoundingClientRect();
  var width = wrapperRect.width;
  var height = wrapperRect.height;
  var textAscent = 101;
  var textOffsetLeft = 80;
  var noiseScale = 300;

  var colors = ["#00aeff", "#0fa954", "#54396e", "#e61d5f"];

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

}
