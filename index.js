window.onload = function () {

  window.text = new FizzyText(document.getElementById('titleCanvas'), 'DESIGN FOR TOUCH');

  var attendees = {
    'dft': ['谭冠宇', '鲍其翀', '邵焱', 'Ami', 'Elsa Ho', 'Nelson Kuo', 'Zhou zi-jian', '蔡莹童', '曹逸', '曾琴芳', '陈锋杰', '陈建宁', '陈沁丛', '崔振巍', '戴力农', '方一鸣', '顾雷', '郭俊斌', '何瑜', '胡争妍', '李时银', '李鑫', '李阳', '林静', '林声伟', '刘偲', '刘文', '龙天', '吕华', '倪奇骏', '潘俊卿', '钱佳吟', '邵溪', '师轶群', '孙久国', '覃贞妮', '谭尼玥', '唐鹤俊', '万幸', '王畅', '王骏', '王培鋆', '吴少钧', '熊康', '徐承豪', '徐俊军', '徐一梵', '许家尧', '杨宗楷', '叶超', '尹楚然', '余建超', '张蓓蓓', '张锋', '张晗哲', '张挺', '张玉蕾', '张振虎', '章骋晨', '赵正宣', '赵志才', '郑梦涵', '郑梦涵(ctrip)', '郑小冬', '朱莉君', '朱轶亚'],
    '打破研究和设计的界限': ['耿晓旭', '蔡琪伟', '陈娇', '陈雯雯', '陈智', '崔志峰', '邓红星', '丁蕾', '董露锋', '高诺思', '顾金荣', '顾巍', '郭晓晶', '何婷', '赫韩硕', '洪钧', '黎晓晓', '李明', '刘萍', '刘瑜', '潘炎', '庞名章', '全雪花', '史亮', '史文婷', '孙耀翔', '陶冶', '童圆圆', '王碳纯', '韩时佳', '吴子千', '武钰', '杨柳', '杨晓峰', '于亚男', '张丹洁', '朱杰', '花糖', '阿广', '合素'],
    '前端分享': ['陈海舟', '陈捷', '陈名', '陈斯召', '陈威', '陈歆丽', '陈宇', '陈子田', '程斯亮', '邓勇元', '丁美华', '范虎', '范青轩', '范志能', '高林植', '黄龙', '黄茹艺', '纪铜雪', '姜天意', '金加斌', '李鸿超', '李江博', '李敏军', '梁雯琦', '廖伟华', '廖证', '林建锋', '林锐', '林小米', '刘龙龙', '卢成举', '吕明', '麻幸林', '茅晓锋', '缪晓栋', '牛延辉', '秦彬阳', '秦玉国', '邵敏', '沈立俊', '苏芯', '孙向军', '唐松松', '王佳人', '王建', '王鑫亮', '王卓', '吴梦圆', '谢小华', '徐飞', '徐婉芳', '徐钊雄', '许成', '薛梦飞', '杨金龙', '杨胜', '杨炜健', '杨武', '尹正波', '喻浩', '袁坤', '袁源', '袁源', '翟羽', '张驰', '张峰华', '张君君', '张婉娇', '张杨明', '赵芝晴', '郑刚', '朱海源', '祝君', '邹瑞'],
    '视觉分享': ['陈玲玲', '崔志峰', '邓佳佳', '邓良清', '窦晓军', '杜通', '郭浩', '哈蕾', '何瑜', '花浩', '江嘉琪', '江骏昱', '金树瑛', '康婳画', '李红娜', '李天明', '刘心梓', '马瑞', '浦宇平', '普思杰', '邵家盼', '绍维翰', '苏伦', '万明敏', '王良彪', '吴佳敏', '杨琦', '张蓓', '郑媛媛', '童玲', '弗届', '猫儿', '曲胤', '那蓝'],
    '移动应用从idea到卓越应用': ['周临', 'Cindy', '安婴', '曹威', '曹雯雯', '陈威', '陈晓亮', '崔志峰', '董夏', '杜志魏', '段灵华', '方裕', '郭松超', '洪碧祺', '胡潇', '贾艾玲', '姜海光', '姜晶晶', '柯皓', '李炳锋', '李娜', '李汶柏', '刘绘燕', '刘立君', '刘懿德', '刘宇', '陆莹', '毛并楠', '梅旭明', '苗郁', '牛牛', '潘小燕', '邱超', '沈贝贝', '孙蓓', '孙嘉卓', '孙锦龙', '孙明馨', '汤静静', '唐芳霞', '汪磊', '汪秋丽', '王玮', '王文秀', '王怡', '吴佳萍', '吴静姗', '吴磊', '孙登甲', '徐淑文', '许昌华', '杨伟光', '杨洋', '杨奕蓉', '余岚', '张娉迪', '张莹莹', '赵佳佳', '郑天成', '郑志鹏', '朱德升', '朱晶', '朱珂瑶', '秋彦', '王宇', '夏泽'],
    '走进移动设计': ['葛芊芊', 'Wang May', '陈逸飞', '崔云龙', '崔志峰', '代莹', '甘艺凡', '管丽丽', '何瑜', '李常艳', '刘爱娜', '楼珊珊', '罗莉', '祁司', '时修修', '孙丽桃', '孙怡沁', '谭碧莹', '王菁英', '顾立维', '严敏君', '杨雯', '易萌', '尤兆美', '余菡仙', '张睿', '张潇', '张莹莹(ctrip)', '章燕', '赵婷婷', '周茜', '朱琳', '三蒜', '马军', '杨卓', '莛亭']
  };

  var allNames = [];
  for (var list in attendees) {
    if (attendees.hasOwnProperty(list))
      allNames = allNames.concat(attendees[list]);
  }

  window.dice = new NameRoller(document.getElementById('roller'), allNames);
  window.allNames = allNames;
  window.attendees = attendees;

  window.onunload = function () {
    var count = localStorage.getItem('refresh');
    if (count === undefined) {
      count = 1;
    } else {
      count++;
    }
    localStorage.setItem('refresh', count);
    localStorage.setItem('winners' + count, dice.winners);
  }

};

/**
 * The Dice
 */

function NameRoller(wrapper, names) {

  this.names = names;
  this.winners = [];

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
    this.currentName = idx;
    this.addName(this.names[idx]);
  };

  window.addEventListener('keydown', function (e) {
    switch (e.keyCode) {
    case 32: // Space
      that.roll();
      break;
    case 13: // Enter
      that.removeName(document.querySelector('.pres'));
      break;
    case 49: // 1
      that.names = window.allNames;
      break;
    case 50: // 2
      that.names = window.attendees['前端分享'];
      break;
    default:
      console.log(e.keyCode);
    }
  });

  window.addEventListener('keyup', function (e) {
    switch (e.keyCode) {
    case 32:
      var winner = that.names[that.currentName];
      that.winners.push(winner);
      console.log(winner, that.names.length);
      that.names.splice(that.currentName, 1);
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
