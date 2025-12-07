const palettes = [
  {
    name: "Aurora Mint",
    accent: "#66f7c7",
    accent2: "#2fd1ff",
    glow: "rgba(102, 247, 199, 0.35)",
    background:
      "radial-gradient(circle at 18% 20%, rgba(102, 247, 199, 0.12), transparent 32%), radial-gradient(circle at 82% 10%, rgba(47, 209, 255, 0.12), transparent 32%), linear-gradient(135deg, #060912, #0d1429)",
  },
  {
    name: "Sundown Coral",
    accent: "#ff8e6e",
    accent2: "#ffd166",
    glow: "rgba(255, 142, 110, 0.35)",
    background:
      "radial-gradient(circle at 20% 15%, rgba(255, 142, 110, 0.18), transparent 32%), radial-gradient(circle at 80% 5%, rgba(255, 209, 102, 0.12), transparent 30%), linear-gradient(135deg, #0b0d1a, #1b1323)",
  },
  {
    name: "Signal Blue",
    accent: "#6fb1ff",
    accent2: "#63ffe2",
    glow: "rgba(111, 177, 255, 0.32)",
    background:
      "radial-gradient(circle at 10% 18%, rgba(111, 177, 255, 0.18), transparent 30%), radial-gradient(circle at 88% 8%, rgba(99, 255, 226, 0.12), transparent 34%), linear-gradient(135deg, #050814, #0d1a32)",
  },
];

const sparks = [
  "Turn your README into a visual story by pulling out one hero stat and one customer quote.",
  "Swap the CTA to an early-access form and explain what users unlock in the first 5 minutes.",
  "Add a scrolling strip of team avatars to prove there are real people behind the project.",
  "Plot a 3-step timeline showing how a user goes from signup to their first success.",
  "Show one before/after metric with a short caption to highlight the core outcome.",
  "Add a link to your documentation and list the three most-clicked pages as quick chips.",
  "Embed a code snippet that proves how little setup is needed to get started.",
  "Stack two testimonials: one from a developer, one from a non-technical teammate.",
  "Drop in a mini FAQ with the top three objections you hear and fast answers.",
];

const paletteToggle = document.getElementById("palette-toggle");
const paletteName = document.getElementById("palette-name");
const sparkButtons = [
  document.getElementById("spark-button"),
  document.getElementById("spark-button-secondary"),
];
const sparkOutput = document.getElementById("spark-output");

let paletteIndex = 0;

const applyPalette = (palette) => {
  document.documentElement.style.setProperty("--accent", palette.accent);
  document.documentElement.style.setProperty("--accent-2", palette.accent2);
  document.documentElement.style.setProperty("--glow", palette.glow);
  document.body.style.backgroundImage = palette.background;
  paletteName.textContent = palette.name;
};

const shufflePalette = () => {
  paletteIndex = (paletteIndex + 1) % palettes.length;
  applyPalette(palettes[paletteIndex]);
};

const randomSpark = () => {
  const next = sparks[Math.floor(Math.random() * sparks.length)];
  sparkOutput.textContent = next;
};

if (paletteToggle && paletteName) {
  paletteToggle.addEventListener("click", shufflePalette);
  applyPalette(palettes[paletteIndex]);
}

sparkButtons.forEach((btn) => {
  if (btn) {
    btn.addEventListener("click", randomSpark);
  }
});

randomSpark();
