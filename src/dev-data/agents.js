/**
 * The function formats a number as a price with commas separating thousands.
 * @param price - The input parameter "price" is a number that needs to be formatted with commas as
 * thousands separators. The function "price" takes this number as input and returns the formatted
 * number as a string.
 * @returns The function `price` is returning a formatted string of the input `price` with commas
 * separating every three digits. The `format` method is being added to the `Number` prototype to
 * achieve this formatting.
 */
const price = (price) => {
  Number.prototype.format = function (n, x) {
    var re = "\\d(?=(\\d{" + (x || 3) + "})+" + (n > 0 ? "\\." : "$") + ")";
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, "g"), "$&,");
  };
  return price.format();
};

/* The above code is defining an array of objects called "agents". Each object represents a real estate
agent and contains information such as their name, email, phone number, address, social media links,
photo, and a list of their property listings. Each property listing is also an object with details
such as title, price, location, description, images, amenities, agent information, and features. */
const agents = [
  {
    id: 1,
    name: "Kevin Caster",
    email: "kevinn@gmail.com",
    phone: "+2572067895",
    address: "P.O BOX 2456 Thailand",
    county: "Nairboi",
    town: "Thailand",
    photo: "agent2.jpg",

    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
    social: {
      facebook: "https://www.facebook.com/kevin.caster.9655/",
      instagram: "https://www.facebook.com/kevin.caster.9655/",
      twitter: "https://www.facebook.com/kevin.caster.9655/",
      linkedin: "https://www.facebook.com/kevin.caster.9655/",
    },
    featured: true,
    listings: [
      {
        id: 1,
        title: "Apartment for rent",
        slug: "apartment-for-rent",
        price: price(35000),
        location: "Mombasa",
        description:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        images: ["image2.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
        amenities: [
          "Air Conditioning",
          "Security System",
          "Parking Space",
          "Gym Room",
          "Free WIFI",
          "Fire Place",
        ],
        agent: {
          name: "Elizabeth Keen",
          image: "agent1.jpg",
        },
        features: {
          bedrooms: 3,
          status: true,
          garage: 1,
          elevator: true,
          kitchen: true,
        },
        address: {
          address: "Thailand Westlands",
          county: "Thailand",
          city: "Thailand",
          street: "Tengecha St",
          area: "Thailand",
        },

        featured: true,
        type: "rental",
        listedIn: "rentals",
        category: "Apartments",
      },
      {
        id: 2,
        title: "House for Sell",
        slug: "house-for-sell",
        price: price(35000),
        location: "Nakuru",
        description:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        images: ["image8.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
        amenities: [
          "Air Conditioning",
          "Security System",
          "Parking Space",
          "Gym Room",
          "Free WIFI",
          "Fire Place",
        ],
        agent: {
          name: "Kevin Caster",
          image: "agent3.jpg",
        },
        features: {
          bedrooms: 3,
          status: true,
          garage: 1,
          elevator: true,
          kitchen: true,
        },
        address: {
          address: "Thailand Westlands",
          county: "Thailand",
          city: "Thailand",
          street: "Tengecha St",
          area: "Thailand",
        },
        featured: true,
        type: "rental",
        listedIn: "rentals",
        category: "Houses",
      },
    ],
  },
  {
    id: 2,
    name: "Priscilla Frankson",
    email: "priscilla@gmail.com",
    phone: "+2572067895",
    address: "P.O BOX 2456 Thailand",
    county: "Germany",
    town: "Germany",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
    social: {
      facebook: "https://www.facebook.com/kevin.caster.9655/",
      instagram: "https://www.facebook.com/kevin.caster.9655/",
      twitter: "https://www.facebook.com/kevin.caster.9655/",
      linkedin: "https://www.facebook.com/kevin.caster.9655/",
    },
    featured: true,
    photo: "agent4.jpg",
    listings: [
      {
        id: 1,
        title: "Apartment for rent",
        slug: "apartment-for-rent",
        price: price(35000),
        location: "Mombasa",
        description:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        images: ["image2.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
        amenities: [
          "Air Conditioning",
          "Security System",
          "Parking Space",
          "Gym Room",
          "Free WIFI",
          "Fire Place",
        ],
        agent: {
          name: "Elizabeth Keen",
          image: "agent1.jpg",
        },
        features: {
          bedrooms: 3,
          status: true,
          garage: 1,
          elevator: true,
          kitchen: true,
        },
        address: {
          address: "Thailand Westlands",
          county: "Thailand",
          city: "Thailand",
          street: "Tengecha St",
          area: "Thailand",
        },

        featured: true,
        type: "rental",
        listedIn: "rentals",
        category: "Apartments",
      },
      {
        id: 2,
        title: "House for Sell",
        slug: "house-for-sell",
        price: price(35000),
        location: "Nakuru",
        description:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        images: ["image8.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
        amenities: [
          "Air Conditioning",
          "Security System",
          "Parking Space",
          "Gym Room",
          "Free WIFI",
          "Fire Place",
        ],
        agent: {
          name: "Kevin Caster",
          image: "agent3.jpg",
        },
        features: {
          bedrooms: 3,
          status: true,
          garage: 1,
          elevator: true,
          kitchen: true,
        },
        address: {
          address: "Thailand Westlands",
          county: "Thailand",
          city: "Thailand",
          street: "Tengecha St",
          area: "Thailand",
        },
        featured: true,
        type: "rental",
        listedIn: "rentals",
        category: "Houses",
      },
    ],
  },
  {
    id: 3,
    name: "Joram Davies",
    email: "joram@gmail.com",
    phone: "+2572067895",
    address: "P.O BOX 2456 Thailand",
    county: "Nairboi",
    town: "Thailand",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
    social: {
      facebook: "https://www.facebook.com/kevin.caster.9655/",
      instagram: "https://www.facebook.com/kevin.caster.9655/",
      twitter: "https://www.facebook.com/kevin.caster.9655/",
      linkedin: "https://www.facebook.com/kevin.caster.9655/",
    },
    photo: "agent3.jpg",
    featured: true,
    listings: [
      {
        id: 1,
        title: "Apartment for rent",
        slug: "apartment-for-rent",
        price: price(35000),
        location: "Mombasa",
        description:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        images: ["image2.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
        amenities: [
          "Air Conditioning",
          "Security System",
          "Parking Space",
          "Gym Room",
          "Free WIFI",
          "Fire Place",
        ],
        agent: {
          name: "Elizabeth Keen",
          image: "agent1.jpg",
        },
        features: {
          bedrooms: 3,
          status: true,
          garage: 1,
          elevator: true,
          kitchen: true,
        },
        address: {
          address: "Thailand Westlands",
          county: "Thailand",
          city: "Thailand",
          street: "Tengecha St",
          area: "Thailand",
        },

        featured: true,
        type: "rental",
        listedIn: "rentals",
        category: "Apartments",
      },
      {
        id: 2,
        title: "House for Sell",
        slug: "house-for-sell",
        price: price(35000),
        location: "Nakuru",
        description:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        images: ["image8.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
        amenities: [
          "Air Conditioning",
          "Security System",
          "Parking Space",
          "Gym Room",
          "Free WIFI",
          "Fire Place",
        ],
        agent: {
          name: "Kevin Caster",
          image: "agent3.jpg",
        },
        features: {
          bedrooms: 3,
          status: true,
          garage: 1,
          elevator: true,
          kitchen: true,
        },
        address: {
          address: "Thailand Westlands",
          county: "Thailand",
          city: "Thailand",
          street: "Tengecha St",
          area: "Thailand",
        },
        featured: true,
        type: "rental",
        listedIn: "rentals",
        category: "Apartments",
      },
    ],
  },
  {
    id: 4,
    name: "Joram Davies",
    email: "joram@gmail.com",
    phone: "+2572067895",
    address: "P.O BOX 2456 Thailand",
    county: "Nairboi",
    town: "Thailand",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
    social: {
      facebook: "https://www.facebook.com/kevin.caster.9655/",
      instagram: "https://www.facebook.com/kevin.caster.9655/",
      twitter: "https://www.facebook.com/kevin.caster.9655/",
      linkedin: "https://www.facebook.com/kevin.caster.9655/",
    },
    photo: "agent3.jpg",
    featured: true,
    listings: [
      {
        id: 1,
        title: "Apartment for rent",
        slug: "apartment-for-rent",
        price: price(35000),
        location: "Mombasa",
        description:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        images: ["image2.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
        amenities: [
          "Air Conditioning",
          "Security System",
          "Parking Space",
          "Gym Room",
          "Free WIFI",
          "Fire Place",
        ],
        agent: {
          name: "Elizabeth Keen",
          image: "agent1.jpg",
        },
        features: {
          bedrooms: 3,
          status: true,
          garage: 1,
          elevator: true,
          kitchen: true,
        },
        address: {
          address: "Thailand Westlands",
          county: "Thailand",
          city: "Thailand",
          street: "Tengecha St",
          area: "Thailand",
        },

        featured: true,
        type: "rental",
        listedIn: "rentals",
        category: "Apartments",
      },
      {
        id: 2,
        title: "House for Sell",
        slug: "house-for-sell",
        price: price(35000),
        location: "Nakuru",
        description:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        images: ["image8.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
        amenities: [
          "Air Conditioning",
          "Security System",
          "Parking Space",
          "Gym Room",
          "Free WIFI",
          "Fire Place",
        ],
        agent: {
          name: "Kevin Caster",
          image: "agent3.jpg",
        },
        features: {
          bedrooms: 3,
          status: true,
          garage: 1,
          elevator: true,
          kitchen: true,
        },
        address: {
          address: "Thailand Westlands",
          county: "Thailand",
          city: "Thailand",
          street: "Tengecha St",
          area: "Thailand",
        },
        featured: true,
        type: "rental",
        listedIn: "rentals",
        category: "Apartments",
      },
    ],
  },
];

export default agents;
