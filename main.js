console.log("hello");

// Menu coming in from the side
document.getElementById("hamburger_trigger").addEventListener("click", menuOut);
document.getElementById("cross_trigger").addEventListener("click", menuLeave);

// Menu appears
function menuOut() {
  document.getElementById("menu_from_side").classList.add("show-menu");
}

// Menu leaves
function menuLeave() {
  document.getElementById("menu_from_side").classList.remove("show-menu");
}

// feature product section loop
const featureproducts = document.querySelector(".featureproducts");
const featureAlbumsForSale = document.createElement("div");

featureAlbumsForSale.classList.add("grid-container");
featureproducts.appendChild(featureAlbumsForSale);

recordList.forEach((album) => {
  if (album.featured === "yes") {
    const recordItem = document.createElement("div");

    recordItem.innerHTML = `<div class='vinyl'>
<img class='sleeve' src="${album.urlsleeve}">
<img class='record' src="${album.urlrecord}">
        </div>

        <div id="grad1"></div>
      <div class="record_info">
        <h5>${album.name}</h5>
<p>${album.description}</p>
      </div>

          <div class="price-buy-now-container">
            <h4>aud $${album.price.toFixed(2)}</h4>
            <button><a href="#">Buy Now</a></button>
          </div>`;

    document.querySelector(".grid-container").appendChild(recordItem);
    recordItem.classList.add("record_item");
  }
});
