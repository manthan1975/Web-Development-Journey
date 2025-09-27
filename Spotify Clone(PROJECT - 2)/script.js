console.log("Lets write some jS")
let currentsong = new Audio();
let songs;

function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}

async function getSongs() {
    let a = await fetch("http://127.0.0.1:3000/songs/")
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    let songs = []

    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split(/songs/)[1])
        }
    }
    return songs
}

const playMusic = (track, pause = false) => {
    currentsong.src = "/songs/" + track;

    // Clean name for display
    let cleanName = decodeURIComponent(track).replace(/^\\+/, "").replace(/^%5C/, "");

    if (!pause) {
        currentsong.play()
        play.src = "pause.svg"
    }
    document.querySelector(".songinfo").innerHTML = cleanName;
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00"
}

async function main() {
    // Get the list of all the songs 
    songs = await getSongs()
    playMusic(songs[0], true)

    // Show all the song in the play-list
    let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0]
    for (const song of songs) {
        let cleanName = decodeURIComponent(song).replace(/^\\+/, "").replace(/^%5C/, "");
        songUL.innerHTML += `<li>
                        <img class="invert" src="music.svg" alt="">
                        <div class="info">
                            <div>${cleanName}</div>
                            <div>Jevin Gill & Karan Aujla</div>
                        </div>
                        <div class="playnow">
                            <span>Play Now</span>
                            <img class="invert" src="play.svg" alt="">
                        </div>
                   </li>`;
    }

    // Attach an event listener to each song
    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            let trackName = e.querySelector(".info").firstElementChild.innerHTML.trim();
            console.log(trackName)
            // Find actual song file from clean name
            let actualSong = songs.find(s => decodeURIComponent(s).includes(trackName));
            playMusic(actualSong)
        })
    })

    // Attach an event listener to play button
    play.addEventListener("click", () => {
        if (currentsong.paused) {
            currentsong.play()
            play.src = "pause.svg"
        }
        else {
            currentsong.pause()
            play.src = "play.svg"
        }
    })

    // Listen for timeupdate event 
    currentsong.addEventListener("timeupdate", () => {
        document.querySelector(".songtime").innerHTML =
            `${secondsToMinutesSeconds(currentsong.currentTime)}/${secondsToMinutesSeconds(currentsong.duration)}`
        document.querySelector(".circle").style.left =
            (currentsong.currentTime / currentsong.duration) * 100 + "%";
    })

    // Add an event listener to seekbar
    document.querySelector(".seekbar").addEventListener("click", e => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100
        document.querySelector(".circle").style.left = percent + "%"
        currentsong.currentTime = ((currentsong.duration) * percent) / 100
    })

    // Add an event listener to previous
    previous.addEventListener("click", () => {
        currentsong.pause()
        let index = songs.indexOf(currentsong.src.split("/").slice(-1)[0])
        if ((index - 1) >= 0) {
            playMusic(songs[index - 1])
        }
    })

    // Add an event listener to next 
    next.addEventListener("click", () => {
        currentsong.pause()
        let index = songs.indexOf(currentsong.src.split("/").slice(-1)[0])
        if ((index + 1) < songs.length) {
            playMusic(songs[index + 1])
        }
    })
}

main()
