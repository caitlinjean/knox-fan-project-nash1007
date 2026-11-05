
/* knox fan project — interactive features */

const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");
const tabIndicator = document.querySelector(".tab-indicator");
const tabToggle = document.querySelector(".tab-toggle");

// move the sliding highlight to the selected button
function moveIndicator(button) {
  tabIndicator.style.left = `${button.offsetLeft}px`;
  tabIndicator.style.width = `${button.offsetWidth}px`;
}

// handle tab switching
tabButtons.forEach(button => {
  button.addEventListener("click", () => {

    // deactivate all tabs
    tabButtons.forEach(tab => {
      tab.classList.remove("active");
      tab.setAttribute("aria-selected", "false");
    });

    // hide all content panels
    tabPanels.forEach(panel => {
      panel.classList.remove("active");
      panel.hidden = true;
    });

    // activate selected tab
    button.classList.add("active");
    button.setAttribute("aria-selected", "true");

    // show corresponding content
    const panelId = button.getAttribute("aria-controls");
    const selectedPanel = document.getElementById(panelId);

    selectedPanel.hidden = false;
    selectedPanel.classList.add("active");

    // slide highlight to selected tab
    moveIndicator(button);
  });
});

// position highlight when page loads
const activeTab = document.querySelector(".tab-button.active");

if (activeTab) {
  moveIndicator(activeTab);
}

// keep highlight aligned when window resizes
window.addEventListener("resize", () => {
  const activeButton = document.querySelector(".tab-button.active");

  if (activeButton) {
    moveIndicator(activeButton);
  }
});
