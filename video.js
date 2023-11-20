/* using the YouTube API for the video */

const tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';   // youtube iframe api 
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubeIframeAPIReady() {   
  player = new YT.Player('player', {
    height: '100%',
    width: '100%',
    videoId: 'Bl61tzR32sE', // video ID
    playerVars: {
      autoplay: 1,
      loop: 1,
      playlist: 'Bl61tzR32sE' //  video ID
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

function onPlayerStateChange(event) {    
  if (event.data === YT.PlayerState.ENDED) {
    player.playVideo(); // Loop when the video ends
  }
}