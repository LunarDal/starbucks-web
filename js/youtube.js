// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() {
new YT.Player('player', {
    videoId: 'o-Ikkh5oxuo', // 최근 재생할 유튜브 영상 id
    playerVars: {
        autoplay: true, // 자동 재생 유무
        loop: true, // 반복 재생 유무
        playlist: 'o-Ikkh5oxuo' // 반복 재생할 유튜브 영상 id 목록
    },
    events: {
        onReady: function(event){
            event: EventTarget.mute() // 음소거
        }
    }
    });
}
