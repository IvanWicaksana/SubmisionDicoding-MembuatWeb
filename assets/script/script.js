//Fungsi Back To Top
const mybutton = document.getElementById("topBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Fungsi Drop Down Menu

function dropDownMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches(".btnMenu")) {
      const dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  }

//Fungsi Pop Up
function popUpDriverLn() {
  const popup = document.getElementById("detailDriverLn");
  popup.classList.toggle("show");
}
function popUpDriverDr() {
  const popup = document.getElementById("detailDriverDr");
  popup.classList.toggle("show");
}