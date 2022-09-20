const recordList = [
  {
    name: "Bruno Mars Silk Sonic",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, unde esse voluptatum necessitatibus explicabo reprehenderit qui aut cum placeat dicta.",
    price: 64.95,
    urlsleeve: "./images/cover_silk_sonic.jpg",
    urlrecord: "./images/record_silk_sonic.png",
    featured: "no",
  },
  {
    name: "Janis Joplin Greatest Hits",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, unde esse voluptatum necessitatibus explicabo reprehenderit qui aut cum placeat dicta.",
    price: 75.0,
    urlsleeve: "./images/cover_janis-joplin.jpeg",
    urlrecord: "./images/record_janis-record-joplin-janis.png",
    featured: "no",
  },
  {
    name: "INXS Baby Dont Cry",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, unde esse voluptatum necessitatibus explicabo reprehenderit qui aut cum placeat dicta.",
    price: 45.95,
    urlsleeve:
      "https://i.discogs.com/0v5ED0z0Rz6T2wITMUjs4283TdNsE3Gxd_Q-XGXqias/rs:fit/g:sm/q:90/h:600/w:586/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc5MTU5/NjItMTQ1MTU4MzY0/NS03NDQyLmpwZWc.jpeg",
    urlrecord:
      "https://coloredvinylrecords.com/pictures/i/inxs-baby-don-t-cry.png",
    featured: "yes",
  },
  {
    name: "Cruel Hand The Negatives",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, unde esse voluptatum necessitatibus explicabo reprehenderit qui aut cum placeat dicta.",
    price: 55.0,
    urlsleeve:
      "https://i.discogs.com/2r7a97Up0PWkb0rDCJDdZsvcsbs8zG3BdfKeVRYIFLY/rs:fit/g:sm/q:90/h:400/w:400/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYyMjQ4/NDItMTQxNDE1Njg3/MC04OTQ2LmpwZWc.jpeg",
    urlrecord:
      "https://coloredvinylrecords.com/pictures/c/cruel-hand-the-negatives.png",
    featured: "no",
  },
  {
    name: "Nirvana Nevermind",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, unde esse voluptatum necessitatibus explicabo reprehenderit qui aut cum placeat dicta.",
    price: 55.95,
    urlsleeve:
      "https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg",
    urlrecord:
      "https://coloredvinylrecords.com/pictures/n/nirvana-nevermind.png",
    featured: "yes",
  },
  {
    name: "Saw VI Music from and Inspired",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, unde esse voluptatum necessitatibus explicabo reprehenderit qui aut cum placeat dicta.",
    price: 65.0,
    urlsleeve:
      "https://i.discogs.com/IrfVd2b8CmSibB5PAajZRmtc9imLC1FpMMu5riY8fTk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxMTQw/NTItMTUzOTI1MDg4/NS0yNjM2LmpwZWc.jpeg",
    urlrecord:
      "https://coloredvinylrecords.com/pictures/v/various-saw-vi-music-from-and-inspired-by-saw-vi.png",
    featured: "no",
  },
  {
    name: "Rob Zombie The lunar Injection",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, unde esse voluptatum necessitatibus explicabo reprehenderit qui aut cum placeat dicta.",
    price: 75.0,
    urlsleeve:
      "https://coloredvinylrecords.com/pictures/r/rob-zombie-the-lunar-injection-kool-aid-eclipse-conspiracy-3-01645643344.jpg",
    urlrecord:
      "https://coloredvinylrecords.com/pictures/r/rob-zombie-the-lunar-injection-kool-aid-eclipse-conspiracy-3.png",
    featured: "no",
  },
  {
    name: "James Brown Live at The Apollo",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, unde esse voluptatum necessitatibus explicabo reprehenderit qui aut cum placeat dicta.",
    price: 40.0,
    urlsleeve:
      "https://cdn.shopify.com/s/files/1/0525/9119/8390/products/live-at-the-apollo-1962_540x.jpg?v=1657677559",
    urlrecord:
      "https://coloredvinylrecords.com/pictures/j/james-brown-live-at-the-apollo.png",
    featured: "no",
  },
  {
    name: "Queen Studio Collection",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, unde esse voluptatum necessitatibus explicabo reprehenderit qui aut cum placeat dicta.",
    price: 80.0,
    urlsleeve:
      "https://coloredvinylrecords.com/pictures/q/queen-studio-collection-01451999116.jpg",
    urlrecord:
      "https://coloredvinylrecords.com/pictures/q/queen-studio-collection.png",
    featured: "no",
  },
  {
    name: "Run DMC Ultimate",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, unde esse voluptatum necessitatibus explicabo reprehenderit qui aut cum placeat dicta.",
    price: 75.0,
    urlsleeve: "./images/cover_ulimate_run_dmc.jpg",
    urlrecord: "./images/record_ulimate_run_dmc.png",
    featured: "yes",
  },
  {
    name: "Major Lazer Free the Universe",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, unde esse voluptatum necessitatibus explicabo reprehenderit qui aut cum placeat dicta.",
    price: 65.0,
    urlsleeve: "https://m.media-amazon.com/images/I/71h37X3e-6L._SL1000_.jpg",
    urlrecord:
      "https://coloredvinylrecords.com/pictures/m/major-lazer-free-the-universe.png",
    featured: "yes",
  },
  {
    name: "Transplants In a Warzone",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, unde esse voluptatum necessitatibus explicabo reprehenderit qui aut cum placeat dicta.",
    price: 65.0,
    urlsleeve:
      "https://coloredvinylrecords.com/pictures/t/transplants-in-a-warzone-01456155517.jpg",
    urlrecord:
      "https://coloredvinylrecords.com/pictures/t/transplants-in-a-warzone.png",
    featured: "no",
  },
  {
    name: "Run the Jewels Run the Jewels",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, unde esse voluptatum necessitatibus explicabo reprehenderit qui aut cum placeat dicta.",
    price: 65.0,
    urlsleeve:
      "https://coloredvinylrecords.com/pictures/r/run-the-jewels-run-the-jewels-4-01451997559.jpg",
    urlrecord:
      "https://coloredvinylrecords.com/pictures/r/run-the-jewels-run-the-jewels-4.png",
    featured: "no",
  },
  {
    name: "Jurassic 5 Quality Control",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, unde esse voluptatum necessitatibus explicabo reprehenderit qui aut cum placeat dicta.",
    price: 85.0,
    urlsleeve:
      "https://i.scdn.co/image/ab67616d0000b273ca8066d17c777c4357ff0f24",
    urlrecord:
      "https://coloredvinylrecords.com/pictures/j/jurassic-5-quality-control.png",
    featured: "no",
  },
  {
    name: "Sublime 40oz to Freedom",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, unde esse voluptatum necessitatibus explicabo reprehenderit qui aut cum placeat dicta.",
    price: 65.0,
    urlsleeve:
      "https://coloredvinylrecords.com/pictures/s/sublime-40oz-to-freedom-01451998785.jpg",
    urlrecord:
      "https://coloredvinylrecords.com/pictures/s/sublime-40oz-to-freedom.png",
    featured: "no",
  },
  {
    name: "The Roots Do you want more?",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, unde esse voluptatum necessitatibus explicabo reprehenderit qui aut cum placeat dicta.",
    price: 65.0,
    urlsleeve:
      "https://coloredvinylrecords.com/pictures/t/the-roots-do-you-want-more-01449511481.png",
    urlrecord:
      "https://coloredvinylrecords.com/pictures/t/the-roots-do-you-want-more.png",
    featured: "no",
  },
  {
    name: "A Tribe Called Quest",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, unde esse voluptatum necessitatibus explicabo reprehenderit qui aut cum placeat dicta.",
    price: 55.0,
    urlsleeve:
      "https://coloredvinylrecords.com/pictures/a/a-tribe-called-quest-midnight-marauders-01424880527.png",
    urlrecord:
      "https://coloredvinylrecords.com/pictures/a/a-tribe-called-quest-midnight-marauders.png",
    featured: "no",
  },
  {
    name: "Bob Marley Legend",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, unde esse voluptatum necessitatibus explicabo reprehenderit qui aut cum placeat dicta.",
    price: 90.0,
    urlsleeve:
      "https://i.etsystatic.com/10759380/r/il/0987ab/3395179191/il_1140xN.3395179191_59cg.jpg",
    urlrecord:
      "https://coloredvinylrecords.com/pictures/b/bob-marley-and-the-wailers-legend.png",
    featured: "no",
  },
  {
    name: "The Beatles Sgt. Pepper",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, unde esse voluptatum necessitatibus explicabo reprehenderit qui aut cum placeat dicta.",
    price: 150.0,
    urlsleeve:
      "https://coloredvinylrecords.com/pictures/t/the-beatles-sgt-pepper-s-lonely-hearts-club-band-2-01422925147.png",
    urlrecord:
      "https://coloredvinylrecords.com/pictures/t/the-beatles-sgt-pepper-s-lonely-hearts-club-band-2.png",
    featured: "yes",
  },
  {
    name: "No Doubt Tragic Kingdom",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, unde esse voluptatum necessitatibus explicabo reprehenderit qui aut cum placeat dicta.",
    price: 45.0,
    urlsleeve:
      "https://m.media-amazon.com/images/I/814mV5CY9mL._AC_SL1400_.jpg",
    urlrecord:
      "https://coloredvinylrecords.com/pictures/n/no-doubt-tragic-kingdom.png",
    featured: "no",
  },
];
