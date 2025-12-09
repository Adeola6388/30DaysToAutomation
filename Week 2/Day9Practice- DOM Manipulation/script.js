document.addEventListener("DOMContentLoaded", () => {
  const changeColorBtn = document.getElementById("changeColorBtn");
  const changeTextBtn = document.getElementById("changeTextBtn");
  const addItemBtn = document.getElementById("addItemBtn");

  const colors = ["#A3D9FF", "#FFB6C1", "#B19CD9", "#A0E7E5"];
  const messages = [
    "You’re becoming an Automation Pro!",
    "Keep pushing your limits 💪",
    "Every click is a step closer to mastery!"
  ];

// Change background color
  changeColorBtn.addEventListener("click", () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  });

  // Change paragraph text
  changeTextBtn.addEventListener("click", () => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    paragraphText.textContent = randomMessage;
  });

  // Add new list item
  addItemBtn.addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.textContent = "New QA Skill Added!";
    qaList.appendChild(newItem);
  });
});