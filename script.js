function updateFavoritesHTML(){
   document.querySelector("div.favorites").innerHTML = "";
   JSON.parse(localStorage.getItem("xtrp-favorites-homepage-favorites")).forEach(function(link,index){
      document.querySelector("div.favorites").innerHTML += `
      <button onclick='var currentLinks = JSON.parse(localStorage.getItem("xtrp-favorites-homepage-favorites")) || [];currentLinks.splice(${index}, 1);localStorage.setItem("xtrp-favorites-homepage-favorites", JSON.stringify(currentLinks));updateFavoritesHTML();' class="removeLink"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg></button>
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
         if(!link.startsWith("https://") || !link.startsWith("http://")){
            link = "http://" + link;
         }
         currentLinks.push({name: name, url: link});
         localStorage.setItem("xtrp-favorites-homepage-favorites", JSON.stringify(currentLinks));
         updateFavoritesHTML();
      }
   }   
}
updateFavoritesHTML();