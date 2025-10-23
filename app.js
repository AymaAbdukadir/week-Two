const menubar = document.querySelector(".fa-bars");
const nav = document.querySelector(".nav");
const icons = document.querySelector(" .nav .icons ");
const form = document.querySelector("form");
const sumbitBtn = document.querySelector(".Sumbit");
const firstName = document.querySelector(".first-name");
const LastName = document.querySelector(".last-name");
const Email = document.querySelector(".email");

menubar.addEventListener("click", (e) => {
  if (e.target.className.includes("fa-bars")) {
    e.target.className = "fa-solid fa-x";
    nav.style.display = "flex";
    icons.style.display = "flex";
  } else {
    e.target.className = "fa-solid fa-bars";
    nav.style.display = "none";
    icons.style.display = "none";
  }
});

// form Validation

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (firstName.value === "" || LastName.value === ' ' || Email.value === "") {
    
    alert("Please fill in all fields before submitting! ");
  } 
  

  
  else{
    Toastify({
  text: "✅ Form sent successfully!",
  duration: 3000,
  close: true,
  gravity: "top",
  position: "right", 
  backgroundColor: "linear-gradient(to right, #228b22, #ffc328)",
}).showToast();
  }
});


