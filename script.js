console.log("WElcome to spotify")
//initialize the variable
let songIndex = 1;
let audioElement = new Audio("song/1.mp3");
let audioSong = new Audio("song/1.mp3");
let masterPlay = document.getElementById('masterPlayIcon');
let myProgressBar = document.getElementById("myprogress-bar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("song-item"))
let dot = document.getElementsByClassName('dot')[0];
let timestamp = Array.from(document.getElementsByClassName("timestamp"))
let previouse = 0;
let t = 1;

// SONG DETAILS
let songs = [
    { "songName": "Surili Ankhiyon Wale - Veer", "filePath": "song/song/1.mp3", "coverPath": "https://improxy.starmakerstudios.com/tools/im/800x/production/cover_img/143f8118a5ae869d23cc6d310319565f.jpg?support=webp" },
    { "songName": "Ankho ki gustakhiya -HDDCS", "filePath": "song/song/2.mp3 ", "coverPath": "https://c-fa.cdn.smule.com/rs-s-sf-2/arr/0b/9e/59693323-1ca3-479a-8dd5-becacaf6b988_1024.jpg" },
    { "songName": "Aye mere humsafar", "filePath": "song/song/3.mp3  ", "coverPath": "https://i.scdn.co/image/ab67616d0000b273f5fc91a05e4380122d8359b3" },
    { "songName": "Kehna Hi Kya - Bombay", "filePath": "song/song/4.mp3 song/song/5.mp3", "coverPath": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3t9CrfJbdpYb5HPfaIviym2EboQJuF8ah6SNlmdd8dkJI4QPYaMmwC1lWXA17hG2fk34&usqp=CAU" },
    { "songName": " Meri Mehbooba - Pardes", "filePath": "song/song/5.mp3 ", "coverPath": "https://i1.sndcdn.com/artworks-xoHMZyqAHE0biWxt-btwbJA-t500x500.jpg" },
    { "songName": " Neele Neele Ambar Par - Kalaakaar", "filePath": "song/song/6.mp3 ", "coverPath": "https://m.media-amazon.com/images/I/51rfiz-EjzL._SY355_.jpg" },
    { "songName": "Teri Ore - Singh is King  - Gangster", "filePath": "song/song/7.mp3 ", "coverPath": "https://i.scdn.co/image/ab67616d00001e029f51990995c20b60902f5910" },
    { "songName": "Tu Hi Meri Shab Hai", "filePath": "song/song/8.mp3 ", "coverPath": "https://i0.wp.com/99lyricstore.com/wp-content/uploads/2021/04/Tu2Bhi2Bmeri2Bshab2Bhai2BHindi2BLove2BSong2BLyrics252C2BSung2BBy2BK.K.jpg" },
    { "songName": "Tujhe Dekha To - DDLJ", "filePath": "song/song/9.mp3", "coverPath": "https://static.toiimg.com/photo/msid-71106480/71106480.jpg?167245" },
    { "songName": "Woh Pehli Baar - Pyaar Mein Kabhi Kabhi", "filePath": "song/song/10.mp3", "coverPath": "https://c.saavncdn.com/000/Pyaar-Mein-Kabhi-Kabhi-Hindi-2003-20190516131752-500x500.jpg" },
]
//INTIAL SONG
document.getElementById("masterPlaySongName").innerText = songs[songIndex - 1].songName;
document.getElementById("coverImage").src = songs[songIndex - 1].coverPath;

//WHEN MASTER PLAY BUTTON CLICKED
masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.replace("bx-play-circle", "bx-pause-circle");
        gif.style.opacity = 1;
        document.getElementById(`gif${songIndex}`).style.opacity = 1;
        makeSongPlay();
    }
    else {
        audioElement.pause();
        masterPlay.classList.replace("bx-pause-circle", "bx-play-circle");
        document.getElementById(`gif${songIndex}`).style.opacity = 0;
        gif.style.opacity = 0;
        makeAllPlays();
    }
})


// listen to EVENTS SONG TIME
audioElement.addEventListener("timeupdate", () => {
    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    myProgressBar.value = progress;
    let curr_time = audioElement.currentTime;
    let music_dur = audioElement.duration;

    let minute = Math.floor(music_dur / 60);
    let sec = Math.floor(music_dur % 60);
    if (sec < 10) {
        sec = `0${sec}`
    }
    document.getElementById("songTime").innerHTML = `${minute}:${sec}`
    let minute1 = Math.floor(curr_time / 60);
    let sec1 = Math.floor(curr_time % 60);
    if (sec1 < 10) {
        sec1 = `0${sec1}`
    }
    if (minute == minute1 && sec == sec1) {
        masterPlay.classList.replace("bx-pause-circle", "bx-play-circle");
        gif.style.opacity = 0;
        document.getElementById(`gif${songIndex}`).style.opacity = 0;
        makeAllPlays();
    }
    document.getElementById("startTime").innerHTML = `${minute1}:${sec1}`


})

//update progress bar
myProgressBar.addEventListener("change", () => {
    audioElement.currentTime = parseInt((myProgressBar.value * audioElement.duration) / 100)
    myProgressBar.value = progress;
})

////
// timestamp.addEventListener("load", () => {
//     audioSong.src = `song/${t}.mp3`;
//     let music_dur = audioSong.duration
//     let minute = Math.floor(music_dur / 60);
//     let sec = Math.floor(music_dur % 60);
//     console.log("sdasdhak", i, audioSong.duration);
//     element.getElementsByClassName("timestamp")[0].innerHTML = `${minute}:${sec}`
//     t = t + 1;
// })



// display cover image of each song in the song list
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})

//stopp other songs when other song cliked to play
const makeAllPlays = () => {
    let index = 1
    Array.from(document.getElementsByClassName("songItem-play")).forEach((element) => {
        element.classList.replace("bx-pause", "bx-play");
        document.getElementById(`gif${index}`).style.opacity = 0;
        index = index + 1
    })
}

//song from songlist play
Array.from(document.getElementsByClassName("songItem-play")).forEach((element) => {
    element.addEventListener("click", (e) => {
        songIndex = parseInt(e.target.id)
        if (previouse == songIndex) {
            console.log("previous");
            audioElement.pause();
            e.target.classList.replace("bx-pause", "bx-play");
            masterPlay.classList.replace("bx-pause-circle", "bx-play-circle");
            document.getElementById(`gif${songIndex}`).style.opacity = 0;
            gif.style.opacity = 0;
            previouse = 0;
            return;
        }
        makeAllPlays();
        e.target.classList.replace("bx-play", "bx-pause");
        audioElement.src = `song/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.replace("bx-play-circle", "bx-pause-circle");
        document.getElementById("masterPlaySongName").innerText = songs[songIndex - 1].songName;
        document.getElementById(`gif${songIndex}`).style.opacity = 1;
        gif.style.opacity = 1;
        document.getElementById("coverImage").src = songs[songIndex - 1].coverPath;
        previouse = songIndex;

    })

})

//next song play
document.getElementById("next").addEventListener("click", () => {
    console.log("sssssssssss", songIndex);
    if (songIndex > 9) {
        songIndex = 1
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `song/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.replace("bx-play-circle", "bx-pause-circle");
    document.getElementById("masterPlaySongName").innerText = songs[songIndex - 1].songName;
    gif.style.opacity = 1;
    document.getElementById("coverImage").src = songs[songIndex - 1].coverPath;
    makeAllPlays();
    makeSongPlay();
    document.getElementById(`gif${songIndex}`).style.opacity = 1;
})

//previous song play
document.getElementById("previous").addEventListener("click", () => {
    if (songIndex < 2) {
        songIndex = 10
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `song/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.replace("bx-play-circle", "bx-pause-circle");
    document.getElementById("masterPlaySongName").innerText = songs[songIndex - 1].songName;
    gif.style.opacity = 1;
    document.getElementById(`gif${songIndex}`).style.opacity = 1;
    document.getElementById("coverImage").src = songs[songIndex - 1].coverPath;
    makeAllPlays();
    makeSongPlay();
})

//make song from songlist play after clicking on next and previous:
const makeSongPlay = () => {
    let i = 1
    console.log(songIndex);
    Array.from(document.getElementsByClassName("songItem-play")).forEach((element) => {
        if (songIndex == i) {
            element.classList.replace("bx-play", "bx-pause");
        }
        i = i + 1;
    })
}

///volume change
let vol_icon = document.getElementById("vol_icon")
let vol = document.getElementById("vol")
let vol_bar = document.getElementsByClassName("vol_bar")[0]
let vol_dot = document.getElementById("vol_dot")

vol.addEventListener("change", () => {
    if (vol.value == 0) {
        vol_icon.classList.remove("bx-volume-low");
        vol_icon.classList.add("bx-volume-mute");
        vol_icon.classList.remove("bx-volume-full");
    }
    if (vol.volume > 0) {
        vol_icon.classList.remove("bx-volume-mute");
        vol_icon.classList.remove("bx-volume-full");
        vol_icon.classList.add("bx-volume-low");
    }
    if (vol.value > 50) {
        vol_icon.classList.remove("bx-volume-low");
        vol_icon.classList.remove("bx-volume-mute");
        vol_icon.classList.add("bx-volume-full");
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    audioElement.volume = vol_a / 100;
})