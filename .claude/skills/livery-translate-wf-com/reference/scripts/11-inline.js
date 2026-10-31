/**
* youtube video 1
*/

const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player, player2;
function onYouTubePlayerAPIReady() {
  player = new YT.Player('fs-video-1', {
    height: '390',
    width: '640',
    videoId: '7zQqVjx7Ut8',
    playerVars: {
      enablejsapi: 1,
      modestbranding: 1,
      rel: 0,
      origin: window.location.origin
    }
  });
  player2 = new YT.Player('fs-video-2', {
    height: '390',
    width: '640',
    videoId: 'n8Dntj_6408',
    playerVars: {
      enablejsapi: 1,
      modestbranding: 1,
      rel: 0,
      origin: window.location.origin
    }
  });
}

document.querySelector('.video-btn-1').addEventListener('click', ()=>{
	player.playVideo();
}); 
document.querySelector('.video-btn-2').addEventListener('click', ()=>{
	player2.playVideo();
});

document.querySelectorAll('.fs-video-tab-link').forEach((tab, i)=>{
	tab.addEventListener('click', function(){
  	i === 1 ? player.pauseVideo() : player2.pauseVideo();
  })
});