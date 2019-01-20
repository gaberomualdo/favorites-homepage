function updateFavoritesHTML(){
   document.querySelector("div.favorites").innerHTML = "";
   JSON.parse(localStorage.getItem("xtrp-favorites-homepage-favorites")).forEach(function(link){
      document.querySelector("div.favorites").innerHTML += `
      <div class="item" link="${link.url}">
         <div class="favicon" style="background-image: url(https://www.google.com/s2/favicons?domain=${link.url})"></div>
         <p>${link.name}</p>
      </div>
      `;
   });
   document.querySelectorAll("div.item").forEach(function(link){
      link.onclick = function(){
         window.open(this.getAttribute("link"), "_self");
      }
   });
   document.querySelector("div.item.add").onclick = function(){
      var name = prompt("Enter Name: ");
      var link = prompt("Enter Link: ");
      if(name && link) {
         var currentLinks = JSON.parse(localStorage.getItem("xtrp-favorites-homepage-favorites")) || [];
         currentLinks.push({name: name, url: link});
         localStorage.setItem("xtrp-favorites-homepage-favorites", JSON.stringify(currentLinks));
         updateFavoritesHTML();
      }
   }   
}
updateFavoritesHTML();