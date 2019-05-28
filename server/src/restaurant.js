const restaurants = [
  {
    id: 1,
    name: "Esora",
    lat: 1.293559,
    lng: 103.841586,
    details: {
      shortDescription:
        "Esora is a treat for the senses. Chef-owner Shigeru Koizumi prepares Kappo-style cuisine with utmost precision, bringing together his experience cooking at three-Michelin-starred Nihonryori Ryugin in Tokyo and Singapore’s very own two-Michelin-starred Odette. ",
      place: "15 Mohamed Sultan Rd",
      ratings: 5,
      sampleMenu: [""],
      openTime: "Tue-Sat 7pm-9pm",
      website: "https://testwebsite.com",
      image: {
        logo:
          "https://4cxqn5j1afk2facwz3mfxg5r-wpengine.netdna-ssl.com/wp-content/uploads/2015/06/01-Town-Restaurant.jpg",
        background:
          "https://4cxqn5j1afk2facwz3mfxg5r-wpengine.netdna-ssl.com/wp-content/uploads/2015/06/01-Town-Restaurant.jpg"
      }
    },
    category: "Japanese"
  },
  {
    id: 2,
    name: "NOX - Dine In The Dark",
    lat: 1.3075115,
    lng: 103.8563458,
    details: {
      shortDescription:
        "In our modern culture where we are often overwhelmed by sensory stimulation, the focus on visual presentation is constantly increasing. Now, how would you feel if you could not see and were living in total darkness? ",
      ratings: 5,
      sampleMenu: [""],
      openTime: "6 - 10 PM",
      website: "https://www.noxdineinthedark.com/page/reservations/",
      image: {
        logo:
          "https://4cxqn5j1afk2facwz3mfxg5r-wpengine.netdna-ssl.com/wp-content/uploads/2015/06/01-Town-Restaurant.jpg",
        background:
          "https://4cxqn5j1afk2facwz3mfxg5r-wpengine.netdna-ssl.com/wp-content/uploads/2015/06/01-Town-Restaurant.jpg"
      },
      contactNumber: "6837 3322"
    },
    category: "Japanese"
  },
  {
    id: 3,
    name: "Pastamania ",
    lat: 1.2985438,
    lng: 103.7719856,
    details: {
      shortDescription:
        "The first Pastamania outlet was opened in April 1998, with an outlet within a food court in the basement of Scotts Shopping Centre in Singapore.",
      place: "1 Fusionopolis Way #01-04 Fusionopolis One Singapore 138632",
      ratings: 5,
      sampleMenu: [""],
      openTime: "Tue-Sat 7pm-9pm",
      website: "https://testwebsite.com",
      image: {
        logo:
          "https://4cxqn5j1afk2facwz3mfxg5r-wpengine.netdna-ssl.com/wp-content/uploads/2015/06/01-Town-Restaurant.jpg",
        background:
          "https://4cxqn5j1afk2facwz3mfxg5r-wpengine.netdna-ssl.com/wp-content/uploads/2015/06/01-Town-Restaurant.jpg"
      },
      contactNumber: "6837 3322"
    },
    category: "Japanese"
  },
  {
    id: 4,
    name: "Kucina Italian Restaurant",
    lat: 1.314468,
    lng: 103.894586,
    details: {
      shortDescription: "Cozy - Casual - Good for kids",
      place: "11 Tanjong Katong Rd, #B1-09/10 OneKM Mall, Singapore 437157",
      ratings: 4.2,
      sampleMenu: [""],
      openTime: "11:30 AM - 10 PM",
      website: "https://kucinaitalian.com",
      image: {
        logo:
          "https://lh5.googleusercontent.com/p/AF1QipO4RvoncRT-gXRPU2AEw04AUb8qxsMODV4kRg1_=w408-h272-k-no",
        background:
          "https://lh5.googleusercontent.com/p/AF1QipO4RvoncRT-gXRPU2AEw04AUb8qxsMODV4kRg1_=w408-h272-k-no"
      },
      contactNumber: "6837 3322"
    },
    category: "Italian"
  },
  {
    id: 5,
    name: "JAAN",
    lat: 1.29357,
    lng: 103.853107,
    details: {
      shortDescription: "Cozy - Vegetarian Options",
      place: "2 Stamford Rd, Level 70, Singapore 178882",
      ratings: 4.5,
      sampleMenu: [""],
      openTime: "12–2:30pm, 7–10:30pm",
      website: "https://jaan.com.sg",
      image: {
        logo:
          "https://lh5.googleusercontent.com/p/AF1QipO4RvoncRT-gXRPU2AEw04AUb8qxsMODV4kRg1_=w408-h272-k-no",
        background:
          "https://lh5.googleusercontent.com/p/AF1QipPkDU9PxP9OPpLjh7_cu27amy020Gnoy-lxW64Y=w408-h272-k-no"
      },
      contactNumber: "6837 3322"
    },
    category: "British"
  },
  {
    id: 6,
    name: "Golden Jade Restaurant",
    lat: 1.312522,
    lng: 103.87784,
    details: {
      shortDescription: "Cozy - Vegetarian Options",
      place: "271 Geylang Rd, Singapore 389324",
      ratings: 4.4,
      sampleMenu: [""],
      openTime: "11 AM – 3 AM",
      website: "https://testsite.sg",
      image: {
        logo:
          "https://lh5.googleusercontent.com/p/AF1QipPQjmRz6SN8Y4sB1edA39GBZfJrq8xRGo7CHCXh=w408-h272-k-no",
        background:
          "https://lh5.googleusercontent.com/p/AF1QipPQjmRz6SN8Y4sB1edA39GBZfJrq8xRGo7CHCXh=w408-h272-k-no"
      },
      contactNumber: "6744 3022"
    },
    category: "Chinese"
  },
  {
    id: 7,
    name: "Yes Natural Restaurant",
    lat: 1.315937,
    lng: 103.883789,
    details: {
      shortDescription: "Cozy - Vegetarian Options",
      place: "57 Lor 27 Geylang, Singapore 388184",
      ratings: 4.3,
      sampleMenu: [""],
      openTime: "11am–3pm, 5–9:30pm",
      website: "https://www.yesnatural.sg/",
      image: {
        logo:
          "https://lh5.googleusercontent.com/p/AF1QipMGCg_TsmcS8zOUM4nGx9ByoiSQh7RydhyA5MwO=w408-h306-k-no",
        background:
          "https://lh5.googleusercontent.com/p/AF1QipMGCg_TsmcS8zOUM4nGx9ByoiSQh7RydhyA5MwO=w408-h306-k-no"
      },
      contactNumber: "6741 1580"
    },
    category: "Vegetarian"
  },
  {
    id: 8,
    name: "béni Singapore",
    lat: 1.301831,
    lng: 103.837006,
    details: {
      shortDescription:
        "In the Mandarin Gallery, this small, elegant restaurant offers contemporary French cuisine",
      place: "333A Orchard Road, #02-37 Mandarin Gallery, 238897",
      ratings: 4.5,
      sampleMenu: [""],
      openTime: "12–3 PM, 7–10 PM (Sunday Close)",
      website: "https://www.beni-sg.com/",
      image: {
        logo:
          "https://lh5.googleusercontent.com/p/AF1QipM9xKCGYJ1C_6RTAsEp08ckeQy_QAEVD2gahXeX=w408-h306-k-no",
        background:
          "https://lh5.googleusercontent.com/p/AF1QipM9xKCGYJ1C_6RTAsEp08ckeQy_QAEVD2gahXeX=w408-h306-k-no"
      },
      contactNumber: "9159 3177"
    },
    category: "French"
  },
  {
    id: 9,
    name: "Alma by Juan Amador",
    lat: 1.308599,
    lng: 103.834315,
    details: {
      shortDescription:
        "Alma, which is Spanish for soul, makes eating precisely that: a place where not only friends and food come together, but everything it takes to transform your visit into an unforgettable experience.",
      place: "22 Scotts Rd, Singapore 228221",
      ratings: 4.6,
      sampleMenu: [""],
      openTime: "12–2pm, 6–9:30pm",
      website: "https://alma.sg/",
      image: {
        logo:
          "https://lh5.googleusercontent.com/p/AF1QipOI20IjOO9B5LaWeDapEFlxk8mFfSVB1Ze27bPL=w408-h271-k-no",
        background:
          "https://lh5.googleusercontent.com/p/AF1QipOI20IjOO9B5LaWeDapEFlxk8mFfSVB1Ze27bPL=w408-h271-k-no"
      },
      contactNumber: "6735 9937"
    },
    category: "Fine Dining"
  },
  {
    id: 10,
    name: "Braci",
    lat: 1.286338,
    lng: 103.849366,
    details: {
      shortDescription:
        "Perched on the top two floors of a charming heritage shophouse by the Singapore River, Braci is an exclusive Italian hideaway in the heart of bustling Boat Quay overlooking the river. ",
      place: "52 Boat Quay, #05-01/ #06-01, Singapore 049841",
      ratings: 4.6,
      sampleMenu: [""],
      openTime: "5 PM – 12 AM",
      website: "http://www.braci.sg/",
      image: {
        logo:
          "https://lh5.googleusercontent.com/p/AF1QipOElXJ9D725Tkr5cjchFO_E7eH0VYGVVk6DD274=w408-h306-k-no",
        background:
          "https://lh5.googleusercontent.com/p/AF1QipOElXJ9D725Tkr5cjchFO_E7eH0VYGVVk6DD274=w408-h306-k-no"
      },
      contactNumber: "6866 1933"
    },
    category: "Italian"
  },
  {
    id: 11,
    name: "Restaurant 11",
    lat: 1.331141,
    lng: 103.82709,
    details: {
      shortDescription:
        "Perched on the top two floors of a charming heritage shophouse by the Singapore River, Braci is an exclusive Italian hideaway in the heart of bustling Boat Quay overlooking the river. ",
      place: "52 Boat Quay, #05-01/ #06-01, Singapore 049841",
      ratings: 4.6,
      sampleMenu: [""],
      openTime: "5 PM – 12 AM",
      website: "http://www.braci.sg/",
      image: {
        logo:
          "https://lh5.googleusercontent.com/p/AF1QipOElXJ9D725Tkr5cjchFO_E7eH0VYGVVk6DD274=w408-h306-k-no",
        background:
          "https://lh5.googleusercontent.com/p/AF1QipOElXJ9D725Tkr5cjchFO_E7eH0VYGVVk6DD274=w408-h306-k-no"
      },
      contactNumber: "6866 1933"
    },
    category: "Italian"
  },
  {
    id: 12,
    name: "Restaurant 12",
    lat: 1.318068,
    lng: 103.800277,
    details: {
      shortDescription:
        "Perched on the top two floors of a charming heritage shophouse by the Singapore River, Braci is an exclusive Italian hideaway in the heart of bustling Boat Quay overlooking the river. ",
      place: "52 Boat Quay, #05-01/ #06-01, Singapore 049841",
      ratings: 4.6,
      sampleMenu: [""],
      openTime: "5 PM – 12 AM",
      website: "http://www.braci.sg/",
      image: {
        logo:
          "https://lh5.googleusercontent.com/p/AF1QipOElXJ9D725Tkr5cjchFO_E7eH0VYGVVk6DD274=w408-h306-k-no",
        background:
          "https://lh5.googleusercontent.com/p/AF1QipOElXJ9D725Tkr5cjchFO_E7eH0VYGVVk6DD274=w408-h306-k-no"
      },
      contactNumber: "6866 1933"
    },
    category: "Italian"
  },
  {
    id: 13,
    name: "Restaurant 13",
    lat: 1.300048,
    lng: 103.801478,
    details: {
      shortDescription:
        "Perched on the top two floors of a charming heritage shophouse by the Singapore River, Braci is an exclusive Italian hideaway in the heart of bustling Boat Quay overlooking the river. ",
      place: "52 Boat Quay, #05-01/ #06-01, Singapore 049841",
      ratings: 4.6,
      sampleMenu: [""],
      openTime: "5 PM – 12 AM",
      website: "http://www.braci.sg/",
      image: {
        logo:
          "https://lh5.googleusercontent.com/p/AF1QipOElXJ9D725Tkr5cjchFO_E7eH0VYGVVk6DD274=w408-h306-k-no",
        background:
          "https://lh5.googleusercontent.com/p/AF1QipOElXJ9D725Tkr5cjchFO_E7eH0VYGVVk6DD274=w408-h306-k-no"
      },
      contactNumber: "6866 1933"
    },
    category: "Italian"
  },
  {
    id: 14,
    name: "Restaurant 14",
    lat: 1.305883,
    lng: 103.83305,
    details: {
      shortDescription:
        "Perched on the top two floors of a charming heritage shophouse by the Singapore River, Braci is an exclusive Italian hideaway in the heart of bustling Boat Quay overlooking the river. ",
      place: "52 Boat Quay, #05-01/ #06-01, Singapore 049841",
      ratings: 4.6,
      sampleMenu: [""],
      openTime: "5 PM – 12 AM",
      website: "http://www.braci.sg/",
      image: {
        logo:
          "https://lh5.googleusercontent.com/p/AF1QipOElXJ9D725Tkr5cjchFO_E7eH0VYGVVk6DD274=w408-h306-k-no",
        background:
          "https://lh5.googleusercontent.com/p/AF1QipOElXJ9D725Tkr5cjchFO_E7eH0VYGVVk6DD274=w408-h306-k-no"
      },
      contactNumber: "6866 1933"
    },
    category: "Italian"
  },
  {
    id: 15,
    name: "Restaurant 15",
    lat: 1.298081,
    lng: 103.856457,
    details: {
      shortDescription:
        "Perched on the top two floors of a charming heritage shophouse by the Singapore River, Braci is an exclusive Italian hideaway in the heart of bustling Boat Quay overlooking the river. ",
      place: "52 Boat Quay, #05-01/ #06-01, Singapore 049841",
      ratings: 4.6,
      sampleMenu: [""],
      openTime: "5 PM – 12 AM",
      website: "http://www.braci.sg/",
      image: {
        logo:
          "https://lh5.googleusercontent.com/p/AF1QipOElXJ9D725Tkr5cjchFO_E7eH0VYGVVk6DD274=w408-h306-k-no",
        background:
          "https://lh5.googleusercontent.com/p/AF1QipOElXJ9D725Tkr5cjchFO_E7eH0VYGVVk6DD274=w408-h306-k-no"
      },
      contactNumber: "6866 1933"
    },
    category: "Italian"
  },
  {
    id: 16,
    name: "Restaurant 16",
    lat: 1.312669,
    lng: 103.881852,
    details: {
      shortDescription:
        "Perched on the top two floors of a charming heritage shophouse by the Singapore River, Braci is an exclusive Italian hideaway in the heart of bustling Boat Quay overlooking the river. ",
      place: "52 Boat Quay, #05-01/ #06-01, Singapore 049841",
      ratings: 4.6,
      sampleMenu: [""],
      openTime: "5 PM – 12 AM",
      website: "http://www.braci.sg/",
      image: {
        logo:
          "https://lh5.googleusercontent.com/p/AF1QipOElXJ9D725Tkr5cjchFO_E7eH0VYGVVk6DD274=w408-h306-k-no",
        background:
          "https://lh5.googleusercontent.com/p/AF1QipOElXJ9D725Tkr5cjchFO_E7eH0VYGVVk6DD274=w408-h306-k-no"
      },
      contactNumber: "6866 1933"
    },
    category: "Italian"
  },
  {
    id: 17,
    name: "Restaurant 17",
    lat: 1.309065,
    lng: 103.854913,
    details: {
      shortDescription:
        "Perched on the top two floors of a charming heritage shophouse by the Singapore River, Braci is an exclusive Italian hideaway in the heart of bustling Boat Quay overlooking the river. ",
      place: "52 Boat Quay, #05-01/ #06-01, Singapore 049841",
      ratings: 4.6,
      sampleMenu: [""],
      openTime: "5 PM – 12 AM",
      website: "http://www.braci.sg/",
      image: {
        logo:
          "https://lh5.googleusercontent.com/p/AF1QipOElXJ9D725Tkr5cjchFO_E7eH0VYGVVk6DD274=w408-h306-k-no",
        background:
          "https://lh5.googleusercontent.com/p/AF1QipOElXJ9D725Tkr5cjchFO_E7eH0VYGVVk6DD274=w408-h306-k-no"
      },
      contactNumber: "6866 1933"
    },
    category: "Italian"
  },
  {
    id: 18,
    name: "Restaurant 18",
    lat: 1.296709,
    lng: 103.858173,
    details: {
      shortDescription:
        "Perched on the top two floors of a charming heritage shophouse by the Singapore River, Braci is an exclusive Italian hideaway in the heart of bustling Boat Quay overlooking the river. ",
      place: "52 Boat Quay, #05-01/ #06-01, Singapore 049841",
      ratings: 4.6,
      sampleMenu: [""],
      openTime: "5 PM – 12 AM",
      website: "http://www.braci.sg/",
      image: {
        logo:
          "https://lh5.googleusercontent.com/p/AF1QipOElXJ9D725Tkr5cjchFO_E7eH0VYGVVk6DD274=w408-h306-k-no",
        background:
          "https://lh5.googleusercontent.com/p/AF1QipOElXJ9D725Tkr5cjchFO_E7eH0VYGVVk6DD274=w408-h306-k-no"
      },
      contactNumber: "6866 1933"
    },
    category: "Italian"
  },
  {
    id: 19,
    name: "Restaurant 19",
    lat: 1.302887,
    lng: 103.832435,
    details: {
      shortDescription:
        "Perched on the top two floors of a charming heritage shophouse by the Singapore River, Braci is an exclusive Italian hideaway in the heart of bustling Boat Quay overlooking the river. ",
      place: "52 Boat Quay, #05-01/ #06-01, Singapore 049841",
      ratings: 4.6,
      sampleMenu: [""],
      openTime: "5 PM – 12 AM",
      website: "http://www.braci.sg/",
      image: {
        logo:
          "https://lh5.googleusercontent.com/p/AF1QipOElXJ9D725Tkr5cjchFO_E7eH0VYGVVk6DD274=w408-h306-k-no",
        background:
          "https://lh5.googleusercontent.com/p/AF1QipOElXJ9D725Tkr5cjchFO_E7eH0VYGVVk6DD274=w408-h306-k-no"
      },
      contactNumber: "6866 1933"
    },
    category: "Italian"
  },
  {
    id: 20,
    name: "Restaurant 20",
    lat: 1.327599,
    lng: 103.861948,
    details: {
      shortDescription:
        "Perched on the top two floors of a charming heritage shophouse by the Singapore River, Braci is an exclusive Italian hideaway in the heart of bustling Boat Quay overlooking the river. ",
      place: "52 Boat Quay, #05-01/ #06-01, Singapore 049841",
      ratings: 4.6,
      sampleMenu: [""],
      openTime: "5 PM – 12 AM",
      website: "http://www.braci.sg/",
      image: {
        logo:
          "https://lh5.googleusercontent.com/p/AF1QipOElXJ9D725Tkr5cjchFO_E7eH0VYGVVk6DD274=w408-h306-k-no",
        background:
          "https://lh5.googleusercontent.com/p/AF1QipOElXJ9D725Tkr5cjchFO_E7eH0VYGVVk6DD274=w408-h306-k-no"
      },
      contactNumber: "6866 1933"
    },
    category: "Italian"
  },
  {
    id: 21,
    name: "Restaurant 21",
    lat: 1.375004,
    lng: 103.860968,
    details: {
      shortDescription:
        "Perched on the top two floors of a charming heritage shophouse by the Singapore River, Braci is an exclusive Italian hideaway in the heart of bustling Boat Quay overlooking the river. ",
      place: "52 Boat Quay, #05-01/ #06-01, Singapore 049841",
      ratings: 4.6,
      sampleMenu: [""],
      openTime: "5 PM – 12 AM",
      website: "http://www.braci.sg/",
      image: {
        logo:
          "https://lh5.googleusercontent.com/p/AF1QipOElXJ9D725Tkr5cjchFO_E7eH0VYGVVk6DD274=w408-h306-k-no",
        background:
          "https://lh5.googleusercontent.com/p/AF1QipOElXJ9D725Tkr5cjchFO_E7eH0VYGVVk6DD274=w408-h306-k-no"
      },
      contactNumber: "6866 1933"
    },
    category: "Chinese"
  },
  {
    id: 12,
    name: "Restaurant 22",
    lat: 1.363335,
    lng: 103.883617,
    details: {
      shortDescription:
        "Perched on the top two floors of a charming heritage shophouse by the Singapore River, Braci is an exclusive Italian hideaway in the heart of bustling Boat Quay overlooking the river. ",
      place: "52 Boat Quay, #05-01/ #06-01, Singapore 049841",
      ratings: 4.6,
      sampleMenu: [""],
      openTime: "5 PM – 12 AM",
      website: "http://www.braci.sg/",
      image: {
        logo:
          "https://lh5.googleusercontent.com/p/AF1QipOElXJ9D725Tkr5cjchFO_E7eH0VYGVVk6DD274=w408-h306-k-no",
        background:
          "https://lh5.googleusercontent.com/p/AF1QipOElXJ9D725Tkr5cjchFO_E7eH0VYGVVk6DD274=w408-h306-k-no"
      },
      contactNumber: "6866 1933"
    },
    category: "Chinese"
  },
  {
    id: 23,
    name: "Restaurant 23",
    lat: 1.341711,
    lng: 103.923082,
    details: {
      shortDescription:
        "Perched on the top two floors of a charming heritage shophouse by the Singapore River, Braci is an exclusive Italian hideaway in the heart of bustling Boat Quay overlooking the river. ",
      place: "52 Boat Quay, #05-01/ #06-01, Singapore 049841",
      ratings: 4.6,
      sampleMenu: [""],
      openTime: "5 PM – 12 AM",
      website: "http://www.braci.sg/",
      image: {
        logo:
          "https://lh5.googleusercontent.com/p/AF1QipOElXJ9D725Tkr5cjchFO_E7eH0VYGVVk6DD274=w408-h306-k-no",
        background:
          "https://lh5.googleusercontent.com/p/AF1QipOElXJ9D725Tkr5cjchFO_E7eH0VYGVVk6DD274=w408-h306-k-no"
      },
      contactNumber: "6866 1933"
    },
    category: "Chinese"
  },
  {
    id: 24,
    name: "Restaurant 24",
    lat: 1.330042,
    lng: 103.844496,
    details: {
      shortDescription:
        "Perched on the top two floors of a charming heritage shophouse by the Singapore River, Braci is an exclusive Italian hideaway in the heart of bustling Boat Quay overlooking the river. ",
      place: "52 Boat Quay, #05-01/ #06-01, Singapore 049841",
      ratings: 4.6,
      sampleMenu: [""],
      openTime: "5 PM – 12 AM",
      website: "http://www.braci.sg/",
      image: {
        logo:
          "https://lh5.googleusercontent.com/p/AF1QipOElXJ9D725Tkr5cjchFO_E7eH0VYGVVk6DD274=w408-h306-k-no",
        background:
          "https://lh5.googleusercontent.com/p/AF1QipOElXJ9D725Tkr5cjchFO_E7eH0VYGVVk6DD274=w408-h306-k-no"
      },
      contactNumber: "6866 1933"
    },
    category: "Chinese"
  },
  {
    id: 25,
    name: "Restaurant 25",
    lat: 1.376173,
    lng: 103.953959,
    details: {
      shortDescription:
        "Perched on the top two floors of a charming heritage shophouse by the Singapore River, Braci is an exclusive Italian hideaway in the heart of bustling Boat Quay overlooking the river. ",
      place: "52 Boat Quay, #05-01/ #06-01, Singapore 049841",
      ratings: 4.6,
      sampleMenu: [""],
      openTime: "5 PM – 12 AM",
      website: "http://www.braci.sg/",
      image: {
        logo:
          "https://lh5.googleusercontent.com/p/AF1QipOElXJ9D725Tkr5cjchFO_E7eH0VYGVVk6DD274=w408-h306-k-no",
        background:
          "https://lh5.googleusercontent.com/p/AF1QipOElXJ9D725Tkr5cjchFO_E7eH0VYGVVk6DD274=w408-h306-k-no"
      },
      contactNumber: "6866 1933"
    },
    category: "Chinese"
  },
  {
    id: 26,
    name: "Restaurant 26",
    lat: 1.345283,
    lng: 103.947076,
    details: {
      shortDescription:
        "Perched on the top two floors of a charming heritage shophouse by the Singapore River, Braci is an exclusive Italian hideaway in the heart of bustling Boat Quay overlooking the river. ",
      place: "52 Boat Quay, #05-01/ #06-01, Singapore 049841",
      ratings: 4.6,
      sampleMenu: [""],
      openTime: "5 PM – 12 AM",
      website: "http://www.braci.sg/",
      image: {
        logo:
          "https://lh5.googleusercontent.com/p/AF1QipOElXJ9D725Tkr5cjchFO_E7eH0VYGVVk6DD274=w408-h306-k-no",
        background:
          "https://lh5.googleusercontent.com/p/AF1QipOElXJ9D725Tkr5cjchFO_E7eH0VYGVVk6DD274=w408-h306-k-no"
      },
      contactNumber: "6866 1933"
    },
    category: "Chinese"
  },
  {
    id: 27,
    name: "Restaurant 27",
    lat: 1.311647,
    lng: 103.911386,
    details: {
      shortDescription:
        "Perched on the top two floors of a charming heritage shophouse by the Singapore River, Braci is an exclusive Italian hideaway in the heart of bustling Boat Quay overlooking the river. ",
      place: "52 Boat Quay, #05-01/ #06-01, Singapore 049841",
      ratings: 4.6,
      sampleMenu: [""],
      openTime: "5 PM – 12 AM",
      website: "http://www.braci.sg/",
      image: {
        logo:
          "https://lh5.googleusercontent.com/p/AF1QipOElXJ9D725Tkr5cjchFO_E7eH0VYGVVk6DD274=w408-h306-k-no",
        background:
          "https://lh5.googleusercontent.com/p/AF1QipOElXJ9D725Tkr5cjchFO_E7eH0VYGVVk6DD274=w408-h306-k-no"
      },
      contactNumber: "6866 1933"
    },
    category: "Chinese"
  },
  {
    id: 28,
    name: "Restaurant 28",
    lat: 1.341164,
    lng: 103.87501,
    details: {
      shortDescription:
        "Perched on the top two floors of a charming heritage shophouse by the Singapore River, Braci is an exclusive Italian hideaway in the heart of bustling Boat Quay overlooking the river. ",
      place: "52 Boat Quay, #05-01/ #06-01, Singapore 049841",
      ratings: 4.6,
      sampleMenu: [""],
      openTime: "5 PM – 12 AM",
      website: "http://www.braci.sg/",
      image: {
        logo:
          "https://lh5.googleusercontent.com/p/AF1QipOElXJ9D725Tkr5cjchFO_E7eH0VYGVVk6DD274=w408-h306-k-no",
        background:
          "https://lh5.googleusercontent.com/p/AF1QipOElXJ9D725Tkr5cjchFO_E7eH0VYGVVk6DD274=w408-h306-k-no"
      },
      contactNumber: "6866 1933"
    },
    category: "Chinese"
  },
  {
    id: 29,
    name: "Restaurant 29",
    lat: 1.372398,
    lng: 103.978648,
    details: {
      shortDescription:
        "Perched on the top two floors of a charming heritage shophouse by the Singapore River, Braci is an exclusive Italian hideaway in the heart of bustling Boat Quay overlooking the river. ",
      place: "52 Boat Quay, #05-01/ #06-01, Singapore 049841",
      ratings: 4.6,
      sampleMenu: [""],
      openTime: "5 PM – 12 AM",
      website: "http://www.braci.sg/",
      image: {
        logo:
          "https://lh5.googleusercontent.com/p/AF1QipOElXJ9D725Tkr5cjchFO_E7eH0VYGVVk6DD274=w408-h306-k-no",
        background:
          "https://lh5.googleusercontent.com/p/AF1QipOElXJ9D725Tkr5cjchFO_E7eH0VYGVVk6DD274=w408-h306-k-no"
      },
      contactNumber: "6866 1933"
    },
    category: "Chinese"
  },
  {
    id: 30,
    name: "Restaurant 30",
    lat: 1.342224,
    lng: 103.722616,
    details: {
      shortDescription:
        "Perched on the top two floors of a charming heritage shophouse by the Singapore River, Braci is an exclusive Italian hideaway in the heart of bustling Boat Quay overlooking the river. ",
      place: "52 Boat Quay, #05-01/ #06-01, Singapore 049841",
      ratings: 4.6,
      sampleMenu: [""],
      openTime: "5 PM – 12 AM",
      website: "http://www.braci.sg/",
      image: {
        logo:
          "https://lh5.googleusercontent.com/p/AF1QipOElXJ9D725Tkr5cjchFO_E7eH0VYGVVk6DD274=w408-h306-k-no",
        background:
          "https://lh5.googleusercontent.com/p/AF1QipOElXJ9D725Tkr5cjchFO_E7eH0VYGVVk6DD274=w408-h306-k-no"
      },
      contactNumber: "6866 1933"
    },
    category: "Chinese"
  }
];

module.exports = restaurants;
