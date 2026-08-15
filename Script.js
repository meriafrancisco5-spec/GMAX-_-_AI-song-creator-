const titleInput = document.getElementById("title");
const genreInput = document.getElementById("genre");
const lyricsInput = document.getElementById("lyrics");

const generateLyricsBtn = document.getElementById("generateLyrics");
const generateSongBtn = document.getElementById("generateSong");
const playDemoBtn = document.getElementById("playDemo");

let currentLyrics = "";

function makeLyrics(title, genre) {
  return `[Verse 1]
This is my story, this is my time,
Ndikukwera mmwamba, I'm ready to shine.
No fear in my heart, no turning back,
GMAX on the track, I'm staying on track.

[Chorus]
${title}, we rise tonight,
Tili limodzi, we're ready to fight.
From the bottom mpaka ku top,
We keep moving, we never stop.

[Verse 2]
Life gets hard but I keep my pace,
Ndikupita patsogolo, I'm winning this race.
Dreams in my mind, fire in my soul,
One day soon, I'll reach my goal.

[Chorus]
${title}, we rise tonight,
Tili limodzi, we're ready to fight.
From the bottom mpaka ku top,
We keep moving, we never stop.

[Outro]
GMAX, remember the name,
Music in my heart, I'm chasing the fame.`;
}

generateLyricsBtn?.addEventListener("click", () => {
  const title = titleInput?.value.trim() || "My Song";
  const genre = genreInput?.value.trim() || "Rap";

  currentLyrics = makeLyrics(title, genre);

  if (lyricsInput) {
    lyricsInput.value = currentLyrics;
  }

  alert("Lyrics generated successfully! 🎵");
});

generateSongBtn?.addEventListener("click", () => {
  const title = titleInput?.value.trim() || "My Song";

  if (!currentLyrics) {
    currentLyrics = makeLyrics(title, genreInput?.value || "Rap");

    if (lyricsInput) {
      lyricsInput.value = currentLyrics;
    }
  }

  alert(
    "Song created successfully! 🎵🔥\n\n" +
    "Title: " + title +
    "\n\nAudio demo is ready to play."
  );

  if (playDemoBtn) {
    playDemoBtn.disabled = false;
  }
});

playDemoBtn?.addEventListener("click", () => {
  const text = currentLyrics || lyricsInput?.value;

  if (!text) {
    alert("First generate the lyrics 🎵");
    return;
  }

  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();

    const voice = new SpeechSynthesisUtterance(text);
    voice.rate = 0.9;
    voice.pitch = 0.8;

    window.speechSynthesis.speak(voice);
  } else {
    alert("Your browser does not support audio playback.");
  }
});
