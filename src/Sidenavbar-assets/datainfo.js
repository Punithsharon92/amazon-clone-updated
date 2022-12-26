const entryData = [
  {
    id: 1010,
    mainTitle: "Trending",
    type: { _id: 10101, row: false, dropdown: false },
    entries: [
      { title: "Best Sellers", subEntries: [{}] },
      { title: "New Realeses", subEntries: [{}] },
      { title: "Movers and Shaker", subEntries: [{}] },
    ],
  },
  {
    id: 1020,
    mainTitle: "Digital Content And Devices",
    type: { _id: 10201, row: true, dropdown: false },
    entries: [
      {
        title: "Echo & Alexa",
        id: 1,
        subEntries: [
          { rowtitle: "All-new Echo Dot(4th Gen)" },
          { rowtitle: "Echo Dot(3rd Gen)" },
          { rowtitle: "Echo Show 8" },
          { rowtitle: "All-new Echo(4th Gen)" },
          { rowtitle: "Echo Show 5" },
          { rowtitle: "Echo Studio" },
          { rowtitle: "All-new Echo Show 10" },
        ],
      },
      {
        title: "Amazon Music",
        subEntries: [
          { rowtitle: "All Music" },
          { rowtitle: "Bollywood Dhamaka" },
        ],
      },
      {
        title: "Apps for Android",
        subEntries: [{ rowtitle: "Apps" }, { rowtitle: "Games" }],
      },
      {
        title: "Echo, Alexa & Smart Home",
        subEntries: [{ rowtitle: "Buy Alexa" }, { rowtitle: "Smart Home" }],
      },
      {
        title: "Fire TV",
        subEntries: [{ rowtitle: "Netflix" }, { rowtitle: "Live TV and more" }],
      },
      {
        title: "Fire Tablets",
        subEntries: [{ rowtitle: "Apps" }, { rowtitle: "Tablets and more" }],
      },
      {
        title: "Kindle E-reader & Books",
        subEntries: [{ rowtitle: "Books" }, { rowtitle: "Comics and more" }],
      },
      {
        title: "Audible Audiobooks",
        subEntries: [
          { rowtitle: "Listen and read" },
          { rowtitle: "Podcasts and more" },
        ],
      },
    ],
  },
  {
    id: 1030,
    mainTitle: "Shope By Category",
    type: { _id: 10301, row: true, dropdown: true },
    entries: [
      {
        title: "Mobiles, Computers",
        subEntries: [
          { rowtitle: "All Mobiles" },
          { rowtitle: "All Computers" },
        ],
      },
      {
        title: "TV, Appliances, Electonics",
        subEntries: [
          { rowtitle: "All TVs" },
          { rowtitle: "Electrical Appliances" },
        ],
      },
      {
        title: "Men's Fashion",
        subEntries: [{ rowtitle: "Apps" }, { rowtitle: "Games" }],
      },
      {
        title: "Home, Kitchen, Pets",
        subEntries: [
          { rowtitle: "Home & Kitch" },
          { rowtitle: "Pet Products" },
        ],
      },
      {
        title: "Beauty, Health & Grocery",
        subEntries: [
          { rowtitle: "Heath & Grocery" },
          { rowtitle: "Beauty Products" },
        ],
        dropdownStart: true,
      },
      {
        title: "Car Motorbike, Industrial",
        subEntries: [
          { rowtitle: "Car & MotorBike" },
          { rowtitle: "Industrial" },
        ],
      },
      {
        title: "Toys, Children & Baby",
        subEntries: [
          { rowtitle: "Toys for kids" },
          { rowtitle: "Baby Products" },
        ],
      },
      {
        title: "Gradening",
        subEntries: [
          { rowtitle: "Buy Gardening Products" },
          { rowtitle: "Smart Garden" },
        ],
      },
    ],
  },
  {
    id: 1040,
    mainTitle: "Programs & Features",
    type: { _id: 10301, row: true, dropdown: false },
    entries: [
      {
        title: "Gift Cards & Mobile Reacharges",
        subEntries: [
          { rowtitle: "Buy Gift Cards" },
          { rowtitle: "Recharge Phone" },
        ],
      },
      {
        title: "Flight Tickets",
        subEntries: [{}],
      },
      {
        title: "#FoundItOnAmazon",
        subEntries: [{}],
      },
      {
        title: "Clearance Store",
        subEntries: [{}],
      },
    ],
  },
  {
    id: 1050,
    mainTitle: "Help & Settings",
    type: { _id: 10401, row: false, dropdown: false },
    entries: [
      {
        title: "Your Account",
        subEntries: [{}],
      },
      {
        title: "Customer Service",
        subEntries: [{}],
      },
      {
        title: "Sign Out",
        subEntries: [{}],
      },
      {
        title: "",
        subEntries: [{}],
      },
      {
        title: "",
        subEntries: [{}],
      },
    ],
  },
];

export default entryData;
