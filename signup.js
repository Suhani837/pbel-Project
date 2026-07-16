const signUpBtn = document.getElementById("signUp");

const closeBtnsign = document.getElementById("closeBtnsign");

const signupSidebar = document.getElementById("signupSidebar");

const overlaysign = document.getElementById("overlay");

console.log("suhani");

function showSidebar(){
  event.preventDefault();
  signupSidebar.classList.add("open");
  overlaysign.classList.add("show");
}

function closeSidebar(){
  signupSidebar.classList.remove("open");
  overlaysign.classList.remove("show");
}

signUpBtn.addEventListener("click",showSidebar);
closeBtnsign.addEventListener("click",closeSidebar);
overlaysign.addEventListener("click",closeSidebar)