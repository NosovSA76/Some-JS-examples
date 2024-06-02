
import Vimeo from "@vimeo/player";
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

 if (!localStorage.getItem('videoplayer-current-time')) {
   localStorage.setItem('videoplayer-current-time', 0);
 }
// localStorage.setItem('videoplayer-current-time', 0);

// player.on('timeupdate', throttle(currentTime, 1000));
// localStorage.setItem('videoplayer-current-time', player.getCurrentTime(seconds));
// function currentTime() {
//     localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime.seconds));
// };

const getCurrentTime = function (currentTime) {
//   // if (currentTime.seconds < 60) {
    const seconds = currentTime.seconds;
    localStorage.setItem('videoplayer-current-time', seconds);
//   // } else { player.setCurrentTime(58) }
};



player.on('timeupdate', throttle(getCurrentTime, 1000));


player.setCurrentTime(JSON.parse(localStorage.getItem('videoplayer-current-time')));

