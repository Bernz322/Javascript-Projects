const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  // for every "panels", add an event listener to each of them
  panel.addEventListener("click", () => {
    panels.forEach((panel) => {
      // everytime a panel is clicked, remove the active class
      panel.classList.remove("active");
    });
    // then add the active class to the new one
    panel.classList.add("active");
  });
});
