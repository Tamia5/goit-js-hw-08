import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const playerEl = document.getElementById('vimeo-player');
const player = new Player(playerEl);

player.on('timeupdate', throttle(playerTime, 1000));

function playerTime(data) {
    const currentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
}
player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);