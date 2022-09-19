const recordList = [
  {
    name: "Bruno Mars Silk Sonic",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, unde esse voluptatum necessitatibus explicabo reprehenderit qui aut cum placeat dicta.",
    price: 64.95,
    placement: "featured",
    urlsleeve: "./images/cover_silk_sonic.jpg",
    urlrecord: "./images/record_silk_sonic.png",
  },
  {
    name: "Janis Joplin Greatest Hits",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, unde esse voluptatum necessitatibus explicabo reprehenderit qui aut cum placeat dicta.",
    price: 75.0,
    placement: "featured",
    urlsleeve: "./images/cover_janis-joplin.jpeg",
    urlrecord: "./images/record_janis-record-joplin-janis.png",
  },
  {
    name: "INXS Baby Dont Cry",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, unde esse voluptatum necessitatibus explicabo reprehenderit qui aut cum placeat dicta.",
    price: 45.95,
    placement: "featured",
    urlsleeve:
      "https://i.discogs.com/0v5ED0z0Rz6T2wITMUjs4283TdNsE3Gxd_Q-XGXqias/rs:fit/g:sm/q:90/h:600/w:586/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc5MTU5/NjItMTQ1MTU4MzY0/NS03NDQyLmpwZWc.jpeg",
    urlrecord:
      "https://coloredvinylrecords.com/pictures/i/inxs-baby-don-t-cry.png",
  },
  {
    name: "Run DMC Ultimate",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, unde esse voluptatum necessitatibus explicabo reprehenderit qui aut cum placeat dicta.",
    price: 150.0,
    placement: "featured",
    urlsleeve: "./images/cover_ulimate_run_dmc.jpg",
    urlrecord: "./images/record_ulimate_run_dmc.png",
  },
];

const featureproducts = document.querySelector(".featureproducts");
const albumsForSale = document.createElement("section");

albumsForSale.classList.add("grid-container");
featureproducts.appendChild(albumsForSale);

recordList.forEach((album) => {
  if (album.placement === "featured") {
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
