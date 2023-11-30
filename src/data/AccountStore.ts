import { Store } from "pullstate";

export const AccountStore = new Store({
  profile: {
    firstname: "Uros",
    surname: "Milic",
  },
  cards: [
    {
      id: 1,
      type: "mastercard",
      description: "Current Account",
      number: "4859 2390 5635 7347",
      expiry: "11/22",
      secret: "483",
      color: "orange",
      balance: 38.21,
      transactions: [
        {
          name: "Nikolina Kovač",
          amount: 2.5,
          deposit: true,
        },
        {
          name: "Olga Antić",
          amount: 12.99,
          deposit: true,
        },
        {
          name: "Nenad Lončar",
          amount: 74.99,
          deposit: false,
        },
        {
          name: "Ranko Milošević",
          amount: 4.2,
          deposit: false,
        },
        {
          name: "Vedrana Petrović",
          amount: 12.73,
          deposit: true,
        },
        {
          name: "Branka Stankić",
          amount: 17.1,
          deposit: false,
        },
        {
          name: "Miroslava Brkić",
          amount: 9.99,
          deposit: true,
        },
      ],
    },
    {
      id: 2,
      type: "visa",
      description: "Savings",
      number: "7349 1284 6790 4587",
      expiry: "05/23",
      secret: "590",
      color: "blue",
      balance: 82.4,
      transactions: [
        {
          name: "Marko Milovanović",
          amount: 70.9,
          deposit: true,
        },
        {
          name: "Todor Marković",
          amount: 11.5,
          deposit: true,
        },
      ],
    },
    {
      id: 3,
      type: "visa",
      description: "House Fund",
      number: "6783 5692 4475 6682",
      expiry: "01/24",
      secret: "321",
      color: "purple",
      balance: 0,
      transactions: [],
    },
  ],
});
