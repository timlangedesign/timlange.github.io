var tracks = [
    {"name":'Eater',"bg":'#4a86e8ff',"link":'https://docs.google.com/presentation/d/160yNu5SLydSYimTiktLlPXD2dupjki8GwqsTMjkS_ko/edit#slide=id.g3e7b8d27c2_0_43'},
    {"name":'Discovery',"bg":'#cc4125ff',"link":'https://docs.google.com/presentation/d/160yNu5SLydSYimTiktLlPXD2dupjki8GwqsTMjkS_ko/edit#slide=id.g424c2b1a88_3_10'},
    {"name":'Growth',"bg":'#1c4587ff',"link":'https://docs.google.com/presentation/d/160yNu5SLydSYimTiktLlPXD2dupjki8GwqsTMjkS_ko/edit#slide=id.g4d526a7db3_3_0'},
    {"name":'Driver',"bg":'#6aa84fff',"link":'https://docs.google.com/presentation/d/160yNu5SLydSYimTiktLlPXD2dupjki8GwqsTMjkS_ko/edit#slide=id.p'},
    {"name":'Merchant',"bg":'#8e7cc3ff',"link":'https://docs.google.com/presentation/d/160yNu5SLydSYimTiktLlPXD2dupjki8GwqsTMjkS_ko/edit#slide=id.g424c2b1a88_3_19'},
    {"name":'Tools',"bg":'#c27ba0ff',"link":'https://docs.google.com/presentation/d/160yNu5SLydSYimTiktLlPXD2dupjki8GwqsTMjkS_ko/edit#slide=id.g424c2b1a88_3_24'},
    {"name":'CE',"bg":'#76a5afff',"link":'https://docs.google.com/presentation/d/160yNu5SLydSYimTiktLlPXD2dupjki8GwqsTMjkS_ko/edit#slide=id.g424c2b1a88_3_29'},
    {"name":'Partner Integration',"bg":'#ff7b6fff',"link":'https://docs.google.com/presentation/d/160yNu5SLydSYimTiktLlPXD2dupjki8GwqsTMjkS_ko/edit#slide=id.g4d9a26fc79_1_0'},
    {"name":'Research',"bg":'#f1c232ff',"link":'https://docs.google.com/presentation/d/160yNu5SLydSYimTiktLlPXD2dupjki8GwqsTMjkS_ko/edit#slide=id.g424c2b1a88_3_34'},
]

function startShuffle() {
    var randomNumber= Math.floor(Math.random() * (tracks.length));
    console.log(tracks[randomNumber].name)
    document.getElementById("link").href = tracks[randomNumber].link;
    document.getElementById("link").target = "_blank";
    document.getElementById('trackName').innerHTML = tracks[randomNumber].name;
    document.getElementById("control").style.color = tracks[randomNumber].bg;
    document.body.style.backgroundColor = tracks[randomNumber].bg;
    document.getElementById("link").style.display = "block";
    document.getElementById("link").style.cursor = "pointer";
    if (tracks.length === 1) {
        document.getElementById("control").style.display = "none";
        document.getElementById("end").style.display = "block";
    } else {
        document.getElementById("control").innerText= "Next";
    }
    tracks.splice( randomNumber, 1 );
}

var timelineOptions = { repeat: -1, paused: true };
var tl = new TimelineMax(timelineOptions);
tl.fromTo("#container", 0.3, {
    x: -1, y: 1
  }, {
    x: 1, y: -1,
    ease: RoughEase.ease.config({
      strength: 8,
      points: 20,
      template: Linear.easeNone,
      randomize: true
    })
  });
tl.fromTo("#container", 0.3, {
    x: 1, y: -1
  }, {
    x: 1, y: 1,
    ease: RoughEase.ease.config({
      strength: 8,
      points: 20,
      template: Linear.easeNone,
      randomize: true
    })
  });
tl.fromTo("#container", 0.3, {
    x: 1, y: 1
  }, {
    x: -1, y: -1,
    ease: RoughEase.ease.config({
      strength: 8,
      points: 20,
      template: Linear.easeNone,
      randomize: true
    })
  });
tl.fromTo("#container", 0.3, {
    x: -1, y: -1
  }, {
    x: -1, y: 1,
    ease: RoughEase.ease.config({
      strength: 8,
      points: 20,
      template: Linear.easeNone,
      randomize: true
    })
  });

$('#control').hover(function () {
  tl.resume();
}, function () {
  tl.pause();
});

$('#control').click(function () {
  tl.pause();
});