(function() {
  var chorus1, chorus1_sound, chorus2, chorus2_sound, clap, clap_sound, clav, clav_sound, close, close_sound, crash, crash_sound, hit, kick, kick_sound, open, open_sound, snare, snare_sound, tl, tom, tom_sound, trumpet1, trumpet1_sound, trumpet2, trumpet2_sound;

  kick_sound = new Howl({
    urls: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/kick.WAV']
  });

  snare_sound = new Howl({
    urls: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/snare.WAV']
  });

  close_sound = new Howl({
    urls: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/closed.WAV']
  });

  open_sound = new Howl({
    urls: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/open.WAV']
  });

  clap_sound = new Howl({
    urls: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/clap.WAV']
  });

  crash_sound = new Howl({
    urls: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/crash.WAV']
  });

  tom_sound = new Howl({
    urls: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/tom.WAV']
  });

  clav_sound = new Howl({
    urls: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/clav.WAV']
  });

  trumpet1_sound = new Howl({
    urls: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/trumpet1.wav']
  });

  trumpet2_sound = new Howl({
    urls: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/trumpet2.wav']
  });

  chorus1_sound = new Howl({
    urls: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/CHORUS1.wav']
  });

  chorus2_sound = new Howl({
    urls: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/CHORUS2.wav']
  });

  tl = new TimelineLite();

  open = new TimelineLite();

  open.to("h1", 2, {
    color: "#F3954F"
  });

  hit = function(noise) {
    tl.to("button#" + noise, 0.08, {
      background: "-webkit-radial-gradient(circle, #F35538, #F35538) ",
      ease: Bounce.easeOut
    });
    return tl.to("button#" + noise, 0.02, {
      background: "-webkit-radial-gradient(circle,#F3954F 30%, #CC6B20)"
    });
  };

  kick = function() {
    hit("kick");
    kick_sound.play();
    return $("#sound").html("KICK");
  };

  snare = function() {
    hit("snare");
    snare_sound.play();
    return $("#sound").html("SNARE");
  };

  close = function() {
    hit("close");
    close_sound.play();
    return $("#sound").html("CLOSE HH");
  };

  open = function() {
    hit("open");
    open_sound.play();
    return $("#sound").html("OPEN HH");
  };

  clap = function() {
    hit("clap");
    clap_sound.play();
    return $("#sound").html("CLAP");
  };

  crash = function() {
    hit("crash");
    crash_sound.play();
    return $("#sound").html("CRASH");
  };

  tom = function() {
    hit("tom");
    tom_sound.play();
    return $("#sound").html("TOM");
  };

  clav = function() {
    hit("clav");
    clav_sound.play();
    return $("#sound").html("CLAV");
  };

  trumpet1 = function() {
    hit("trumpet1");
    trumpet1_sound.play();
    return $("#sound").html("TRUMPET 1");
  };

  trumpet2 = function() {
    hit("trumpet2");
    trumpet2_sound.play();
    return $("#sound").html("TRUMPET 2");
  };

  chorus1 = function() {
    hit("chorus1");
    chorus1_sound.play();
    return $("#sound").html("CHORUS 1");
  };

  chorus2 = function() {
    hit("chorus2");
    chorus2_sound.play();
    return $("#sound").html("CHORUS 2");
  };

  $(function() {
    $(".drum").draggable();
    $(".drum").click(function() {
      return $('#sound').html("Matt's Kit");
    });
    return $(document).keydown(function(e) {
      switch (e.which) {
        case 65:
          return kick();
        case 87:
          return snare();
        case 83:
          return close();
        case 68:
          return open();
        case 69:
          return clap();
        case 70:
          return crash();
        case 82:
          return tom();
        case 71:
          return clav();
        case 84:
          return trumpet1();
        case 89:
          return trumpet2();
        case 72:
          return chorus1();
        case 74:
          return chorus2();
      }
    });
  });

}).call(this);