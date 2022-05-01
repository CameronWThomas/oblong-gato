var audio;
var source;

  

var sourceArray =
[
    "./music/keepCorners/Frogs Crawl on Concrete Walls.flac",
    "./music/keepCorners/Hungover Monk.flac",
    "./music/keepCorners/Charybdis.flac",
    "./music/keepCorners/This Cat_s Lookin for Fish Tail.flac",
    "./music/clubbing/DrumSand.wav",
    "./music/clubbing/MissingTeeth.wav",
    "./music/clubbing/FarewellGorrister.wav",
    "./music/clubbing/Glamour.wav",
    "./music/clubbing/HighNoon.wav",
    "./music/clubbing/Montgomery.wav"
];

var nameArray = 
[
  "Frogs Crawl On Concrete Walls",
  "Hungover Monk",
  "Charybdis",
  "This Cat's Lookin for Fish Tail",
  "Drum Sand",
  "Missing Teeth",
  "Farewell Gorrister",
  "Glamour",
  "High Noon",
  "Montgomery"
]

var lastTrackIndex = -1;

function rand(min, max){
    return (Math.floor(Math.pow(10,14)*Math.random()*Math.random())%(max-min+1))+min;
}

function getRandomTrackNumber(){
  //var trackNum = Math.floor(Math.random() * sourceArray.length);
  var trackNum = rand(0, sourceArray.length-1);
  if(trackNum == lastTrackIndex){
      return getRandomTrackNumber();
  }else{
      lastTrackIndex = trackNum;
      return trackNum;
  }
}

function createPlayer() {
    audio = document.createElement("audio");
    audio.controls = true;
    audio.classList.add("audio-player");
    console.log(audio.className);
    audio.setAttribute("id", "au");
    audio.addEventListener("ended", playRandomSong);
    // set the src directly to Audio Element
    var idx = getRandomTrackNumber()
    audio.src = sourceArray[idx];
  
    var playerArea = document.getElementById("player-area");
    playerArea.appendChild(audio);
    audio.play();

    
    var displayArea = document.getElementById('music-display');
    displayArea.innerHTML = nameArray[idx];
  }


  
function playRandomSong() {
    // this refers to the Audio Element
    var trackNum = getRandomTrackNumber();
    this.src =  sourceArray[trackNum];
    this.play();
    var displayArea = document.getElementById('music-display');
    displayArea.innerHTML = nameArray[trackNum];
  }


createPlayer();
  /*
if(audio && source){
    
    var trackNumber = getRandomTrackNumber();
    console.log('setting track to, ' + trackNumber);
    console.log( sourceArray[trackNumber]);
    source.src = sourceArray[trackNumber];
    audio.load();
    audio.play();
}
*/