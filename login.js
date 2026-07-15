const loginBtn = document.getElementById("nav-login");

const closeBtn = document.getElementById("closeBtn");

const loginSidebar = document.getElementById("loginSidebar");

const overlay = document.getElementById("overlay");

console.log("hello");

function showSidebar(){
  event.preventDefault();
  loginSidebar.classList.add("open");
  overlay.classList.add("show");
};



function closeSidebar(){
  loginSidebar.classList.remove("open");
  overlay.classList.remove("show");
}


loginBtn.addEventListener("click", showSidebar);
closeBtn.addEventListener("click",closeSidebar);
overlay.addEventListener("click",closeSidebar);