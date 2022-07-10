const prompt = require("prompt-sync")();

const database = [
  {
    username: "Ayush",
    password: "1234",
  },
  {
    username: "Popper",
    password: "12345",
  },
  {
    username: "Lopez",
    password: "4321",
  },
];

const userfeed = [
  {
    username: "Ayush",
    feed: ["WOw i like it", "This is going well"],
  },
  {
    username: "Popper",
    feed: ["WOw hate it", "This is fucking hard"],
  },
  {
    username: "Lopez",
    feed: ["WOw i am the star", "This is the best day"],
  },
];

const register = () => {
  const username = prompt("Enter your username : ");
  const password = prompt("Enter your password : ");
  database.push({ username: username, password: password });
  userfeed.push({ username: username, feed: [] });
};

const isUserValid = (username, password) => {
  for (var i = 0; i < database.length; i++) {
    if (database[i].username == username && database[i].password == password) {
      return true;
    }
  }
  return false;
};

const showfeed = (username) => {
  for (var i = 0; i < userfeed.length; i++) {
    if (userfeed[i].username == username) {
      userfeed[i].feed.forEach((feed, i) => {
        console.log(i, feed);
      });
      return;
    }
  }
};

const signin = (username, password) => {
  if (isUserValid(username, password)) {
    console.log("Logging in ..");
    showfeed(username);
  } else {
    console.log("Wrong Credentials..");
  }
};

const main = () => {
  // register();
  const username = prompt("Enter your username : ");
  const password = prompt("Enter your password : ");
  signin(username, password);
};

main();
