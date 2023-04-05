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

/* The above code is defining an array of objects called "listing". Each object represents a property
listing with various details such as title, price, location, description, images, amenities, agent
information, features, address, and category. The objects are used to display property listings on a
website or application. */
const listing = [
  {
    id: 1,
    title: "Apartment for rent",
    slug: "apartment-for-rent",
    price: price(350000),
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
    price: price(25000),
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
      county: "Germany",
      city: "Thailand",
      street: "Tengecha St",
      area: "Thailand",
    },
    featured: true,
    type: "rental",
    listedIn: "rentals",
    category: "Offices",
  },
  {
    id: 3,
    title: "Apartment In Thailand",
    slug: "apartment-in-Thailand",
    price: price(31000),
    location: "Thailand",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
    images: ["image7.jpg", "image3.jpg", "image2.jpg", "image8.jpg"],
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
      image: "agent4.jpg",
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
      county: "Mombasa",
      city: "Thailand",
      street: "Tengecha St",
      area: "Thailand",
    },
    featured: true,
    type: "rental",
    listedIn: "Sales",
    category: "Offices",
  },
  {
    id: 4,
    title: "Renovated House For Sale",
    slug: "renoveted-house-for-sale",
    price: price(35000),
    location: "Germany",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
    images: ["image4.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
    amenities: [
      "Air Conditioning",
      "Security System",
      "Parking Space",
      "Gym Room",
      "Free WIFI",
      "Fire Place",
    ],
    agent: {
      name: "Priscilla Frankson",
      image: "agent2.jpg",
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
      county: "Kisii",
      city: "Thailand",
      street: "Tengecha St",
      area: "Thailand",
    },
    featured: true,
    type: "sale",
    listedIn: "Sales",
    category: "Houses",
  },
  {
    id: 5,
    title: "House in Nakuru",
    slug: "house-in-nakuru",
    price: price(35000),
    location: "Thailand",
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
      name: "Joram Davies",
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
    type: "sale",
    listedIn: "Sales",
    category: "Retails",
  },
  {
    id: 6,
    title: "Apartment for rent",
    slug: "apartment-for-rent",
    price: price(35000),
    location: "Thailand",
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
      name: "Kevin Caster",
      image: "agent2.jpg",
    },
    features: {
      bedrooms: 10,
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
    type: "sale",
    listedIn: "rentals",
    category: "Apartments",
  },
  {
    id: 7,
    title: "Offices for rent",
    slug: "offices-for-rent",
    price: price(35000),
    location: "Thailand",
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
      name: "Laura Ray",
      image: "agent1.jpg",
    },
    features: {
      bedrooms: 8,
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
  {
    id: 8,
    title: "Apartment for rent",
    slug: "apartmen-for-rent",
    price: price(35000),
    location: "Thailand",
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
      image: "agent4.jpg",
    },
    features: {
      bedrooms: 4,
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
  {
    id: 9,
    title: "Apartment for rent",
    slug: "apartment-for-rent",
    price: price(35000),
    location: "Thailand",
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
      name: "Edward Johnson",
      image: "agent4.jpg",
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
    type: "sale",
    listedIn: "rentals",
    category: "Retails",
  },
];

export default listing;
