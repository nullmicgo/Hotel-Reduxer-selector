const login = () => new Promise(
  (resolve, reject) => {
    setTimeout(() => resolve({
      "firstName": "Michael",
      "lastName": "Lau",
      "gender": "Male",
      "maritalStatus": "Married",
      "reservation": {
        "startDate": "2018-09-02T12:00",
        "endDate": "2019-07-04T12:00",
        "roomType": "dlxoc",
      }
    }), Math.random() * 100);
  }
);

const fetchRooms = () => new Promise(
  (resolve, reject) => {
    setTimeout(() => resolve([
      {
        id: "stdct",
        name: "HOTEL 0001",
        description: "1 Queen bed",
        image: "https://c1.momondo.net/assets/photos/cards/card_hotels_001.jpg?q=60&h=400"

      },
      {
        id: "stdoc",
        name: "HOTEL 0002",
        description: "1 Queen bed",
        image: "https://c1.momondo.net/assets/photos/cards/card_hotels_001.jpg?q=60&h=400"
      },
      {
        id: "dlxct",
        name: "HOTEL 0003",
        description: "2 Double beds",
        image: "https://c1.momondo.net/assets/photos/cards/card_hotels_001.jpg?q=60&h=400"
      },
      {
        id: "dlxoc",
        name: "Deluxe Room, Ocean View",
        description: "2 Double beds",
        image: "https://c1.momondo.net/assets/photos/cards/card_hotels_001.jpg?q=60&h=400"
      },
      {
        id: "gdlux",
        name: "HOTEL 0004",
        description: "1 King bed and 1 Sofa bed",
        image: "https://c1.momondo.net/assets/photos/cards/card_hotels_001.jpg?q=60&h=400"
      },
      {
        id: "royal",
        name: "HOTEL 0005",
        description: "2 king beds",
        image: "https://c1.momondo.net/assets/photos/cards/card_hotels_001.jpg?q=60&h=400"
      }
    ]), Math.random() * 100);
  }
)

export default { login, fetchRooms };
