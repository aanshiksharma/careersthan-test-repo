const navButtons = document.querySelectorAll(".navlist a");

setSelectStyle(Array.from(navButtons)[0]);

Array.from(navButtons).forEach((button, index) => {
  button.addEventListener("click", () => {
    Array.from(navButtons).forEach((btn) => {
      removeSelectStyle(btn, index);
    });
    setSelectStyle(button);
  });
});

function setSelectStyle(button) {
  button.style.backgroundColor = "#31aea5";
  button.style.color = "#ffffff";
}

function removeSelectStyle(button, index) {
  button.style.backgroundColor = "transparent";
  button.style.color = "#000000";
  Array.from(navButtons)[Array.from(navButtons).length - 1].style.color =
    "#31aea5";
}


const messagingPopupButton = document.getElementById('messagingPopupButton');

messagingPopupButton.addEventListener('click', () => {
  const messagingPopup = document.getElementById('messagingPopup');
  if(messagingPopup.getAttribute('aria-visible') == 'false') {
  messagingPopup.style.transform = 'translateY(0)';
  messagingPopup.setAttribute('aria-visible', 'true');
}
else{
  messagingPopup.style.transform = 'translateY(calc(100% - 3.5rem))';
  messagingPopup.setAttribute('aria-visible', 'false');
}
});