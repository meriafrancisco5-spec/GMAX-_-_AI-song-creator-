const generateButton = document.getElementById("generateButton");
const promptInput = document.getElementById("prompt");
const result = document.getElementById("result");

generateButton.addEventListener("click", async () => {
  const prompt = promptInput.value.trim();

  if (!prompt) {
    result.textContent = "Please enter a song idea first.";
    return;
  }

  result.textContent = "🎵 Creating your song...";

  try {
    // Demo generator — works without an API key
    const lyrics = `
[Verse 1]
${prompt}, I'm rising from the ground,
GMAX on the mic, you know I'm coming with the sound.
No matter what they say, I keep moving ahead,
Dreams in my heart and fire in my head.

[Chorus]
We rise, we shine, we never fall,
GMAX on the beat, giving everything our all.
From the dust to the sky, we're going high,
This is our moment — watch us fly.

[Verse 2]
Started with a dream, now I'm building my name,
Step by step, I'm playing my own game.
Hard times came but they couldn't stop me,
Now I'm standing strong — everybody watch me.

[Outro]
GMAX — remember the name.
One dream, one sound, one flame.
`;

    result.textContent = lyrics;
  } catch (error) {
    result.textContent = "Something went wrong. Please try again.";
    console.error(error);
  }
});
