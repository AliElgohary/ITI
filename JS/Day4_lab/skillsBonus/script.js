function addSkill() {
  var skillInput = document.getElementById("skill-input");
  var skillValue = skillInput.value.trim();

  if (skillValue !== "") {
    var skillsList = document.getElementById("skills-list");
    var skillItem = document.createElement("li");
    skillItem.className = "skill-item";
    skillItem.innerHTML = `
            <span>${skillValue}</span>
            <button onclick="removeSkill(this)">X</button>
        `;
    skillsList.appendChild(skillItem);
    skillInput.value = "";
  }
}

function removeSkill(button) {
  var skillItem = button.parentNode;
  var skillsList = document.getElementById("skills-list");
  skillsList.removeChild(skillItem);
}
