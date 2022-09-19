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

// record list section loop
const backInStock = document.querySelector(".backinstock");
const fullCatalogue = document.createElement("section");

fullCatalogue.classList.add("grid-container");
backInStock.appendChild(fullCatalogue);

recordList.forEach((album) => {
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

  fullCatalogue.appendChild(recordItem);
  recordItem.classList.add("record_item");
});

// // record list section map test
// const backinstock = document.querySelector(".backinstock");
// const fullCat = document.createElement("section");

// fullCat.classList.add("grid-container");
// backinstock.appendChild(fullCat);

// const test = recordList.map(function (album) {
//   const recordItem = document.createElement("div");

//   recordItem.innerHTML = `<div class='vinyl'>
// <img class='sleeve' src="${album.urlsleeve}">
// <img class='record' src="${album.urlrecord}">
//         </div>

//         <div id="grad1"></div>
//       <div class="record_info">
//         <h5>${album.name}</h5>
// <p>${album.description}</p>
//       </div>

//           <div class="price-buy-now-container">
//             <h4>aud $${album.price.toFixed(2)}</h4>
//             <button><a href="#">Buy Now</a></button>
//           </div>`;

//   fullCat.appendChild(recordItem);
//   recordItem.classList.add("record_item");
// });
