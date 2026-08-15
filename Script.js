function generateSong() {
  const title = document.getElementById("title").value.trim();
  const genre = document.getElementById("genre").value;
  const language = document.getElementById("language").value;
  const idea = document.getElementById("idea").value.trim();

  const status = document.getElementById("status");
  const lyrics = document.getElementById("lyrics");

  if (!title || !idea) {
    status.textContent = "Please enter a title and song idea.";
    return;
  }

  status.textContent = "Creating your song... 🎵";

  setTimeout(() => {
    let song = "";

    if (language === "English + Chichewa") {
      song = `[INTRO]
Yeah yeah...
V5.5 in the building!
${title}, let's go!

[VERSE 1]
I came from the bottom, now I'm reaching the sky,
Ndikugwira ntchito, I was born to fly.
They never believed me, but I stayed on track,
Tsopano ndabwera, and I'm never looking back.

[CHORUS]
${title}, this is my time,
Ndikukwera mmwamba, everything gonna shine.
${idea},
We keep moving forward, we will never decline.

[VERSE 2]
Pain made me stronger, pressure made me wise,
Ndinagwa kangapo, but I had to rise.
No fear in my heart, determination in my mind,
One day we'll make it, leave the struggle behind.

[OUTRO]
V5.5...
${title}...
We keep moving! 🔥`;
    } 
    else if (language === "Chichewa") {
      song = `[CHORUS]
${title}, iyi ndi nthawi yanga,
Ndikupita patsogolo, sindibwerera.
${idea},
Ndikulimbikira mpaka ndifikire pamwamba.

[VERSE 1]
Ndinayamba pansi koma ndili ndi maloto,
Mavuto ambiri koma sinditaya mtima.
Anthu akunena, koma ine ndikudziwa,
Tsiku lina ndidzafika komwe ndikufuna.

[VERSE 2]
Moyo ndi nkhondo, koma ndipitiriza,
Ndimagwira ntchito, sindingosiya.
V5.5 pa beat, tikukwera mmwamba,
GMAX ali pano, tikupanga mbiri.

[OUTRO]
${title}...
Tiyeni tipite patsogolo! 🔥`;
    } 
    else {
      song = `[INTRO]
Yeah...
V5.5!
${title}!

[VERSE 1]
I came from the struggle, I came from the pain,
Walking through the storm, standing in the rain.
${idea},
I'm chasing my dream, I will never complain.

[CHORUS]
${title}, this is my time,
I'm turning my struggle into a rhyme.
${idea},
I'm climbing higher, I'm ready to shine.

[VERSE 2]
They tried to stop me, I kept moving on,
Darkness around me but I waited for dawn.
Every single failure made me strong,
Now I'm writing my story inside this song.

[OUTRO]
V5.5...
${genre} vibes...
GMAX! 🔥`;
    }

    lyrics.textContent = song;
    status.textContent = "Song generated successfully! 🎉";
  }, 1000);
  }
