/* Exporting an array of message objects, each containing information about a message such as the
sender, recipient, message body, and title. This code can be imported into other modules to use the
`messages` array. */
export const messages = [
  {
    id: 1,
    from: "Kevin Caster",
    to: 3,
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium aut quod molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, officiis! Fuga deserunt consequuntur iure repellendus expedita consectetur, est sequi quod qui explicabo consequatur tempora?",
    read: true,
    emailFrom: "kevin@gmail.com",
    phone: +254720843306,
    title: "Interested in The Apartment for Sale",
  },
  {
    id: 2,
    from: "Joram Davies",
    to: 3,
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium aut quod molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, officiis! Fuga deserunt consequuntur iure repellendus expedita consectetur, est sequi quod qui explicabo consequatur tempora?",
    read: true,
    emailFrom: "joram@gmail.com",
    phone: +254720843306,
    title: "Interested in The House for Sell in Thailand County",
  },
  {
    id: 3,
    from: "Priscilla Johnson",
    to: 3,
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium aut quod molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, officiis! Fuga deserunt consequuntur iure repellendus expedita consectetur, est sequi quod qui explicabo consequatur tempora?",
    read: true,
    emailFrom: "priscilla@gmail.com",
    phone: +254720843306,
    title: "Interested in The House for Sell in Thailand County",
  },
];
