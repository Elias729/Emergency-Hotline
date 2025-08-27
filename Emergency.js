 const menuToggle = document.getElementById("menuToggle");
 const menuItems = document.getElementById("menuItems");

 menuToggle.addEventListener("click", () => {
     menuItems.classList.toggle("hidden")
 });

 const heartBtn = document.getElementById("heartBtn");
 let heartBtnValue = parseInt(heartBtn.innerText);
 const likeCount = document.getElementsByClassName("likeCount");


 for (let i = 0; i < likeCount.length; i++) {
     likeCount[i].addEventListener("click", () => {
         heartBtnValue++;
         heartBtn.innerText = heartBtnValue;
     });
 }