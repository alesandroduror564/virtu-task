// complex_code.js

// This code is a complex implementation of a social media application that includes various features such as user registration, profile creation, friend requests, posting, and timeline generation.

// User class
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.friends = [];
    this.posts = [];
  }

  addFriend(user) {
    this.friends.push(user);
    user.friends.push(this);
  }

  createPost(content) {
    const post = new Post(content, this);
    this.posts.push(post);
  }

  getTimeline() {
    let timeline = [];
    for (const friend of this.friends) {
      timeline.push(...friend.posts);
    }
    timeline.sort((a, b) => b.timestamp - a.timestamp);
    return timeline;
  }
}

// Post class
class Post {
  constructor(content, author) {
    this.content = content;
    this.author = author;
    this.timestamp = Date.now();
  }
}

// Registration and initialization of users
const user1 = new User("user1", "password1");
const user2 = new User("user2", "password2");
const user3 = new User("user3", "password3");

// Friend connections
user1.addFriend(user2);
user1.addFriend(user3);

user2.createPost("Hello world!");
user3.createPost("I'm coding in JavaScript!");

// Prints timeline for user1
console.log(user1.getTimeline());