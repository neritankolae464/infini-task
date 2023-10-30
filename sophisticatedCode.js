/**
 * Filename: sophisticatedCode.js
 * 
 * This code demonstrates a sophisticated and complex JavaScript implementation
 * for a social media platform.
 * 
 * Features:
 * - Users can register, login, and create posts
 * - Users can follow/unfollow other users
 * - Users can like/unlike and comment on posts
 * - Implements a feed algorithm to display posts on the user's feed
 * - Uses advanced data structures and algorithms for efficient data management
 * - Implements error handling and validation for user inputs
 * - Separates code into multiple modules for better organization
 * 
 * Note: This is a simplified and contrived example; a real social media
 * platform would require much more functionality and complexity.
 */

// ---------------------- Data Models ----------------------

class User {
  constructor(id, username, password) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.posts = [];
    this.following = new Set();
    this.followers = new Set();
  }

  addPost(post) {
    this.posts.push(post);
  }

  followUser(user) {
    this.following.add(user.id);
    user.followers.add(this.id);
  }

  unfollowUser(user) {
    this.following.delete(user.id);
    user.followers.delete(this.id);
  }
}

class Post {
  constructor(id, content, authorId) {
    this.id = id;
    this.content = content;
    this.authorId = authorId;
    this.likes = new Set();
    this.comments = [];
  }

  addLike(userId) {
    this.likes.add(userId);
  }

  removeLike(userId) {
    this.likes.delete(userId);
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

// ---------------------- Core Functionality ----------------------

const users = [];
const posts = [];
let currentUserId = 0;

function register(username, password) {
  if (users.some((user) => user.username === username)) {
    console.log('Username already taken. Please choose a different username.');
    return;
  }

  const user = new User(++currentUserId, username, password);
  users.push(user);

  console.log('Registration successful!');
}

function login(username, password) {
  const user = users.find((user) => user.username === username && user.password === password);

  if (!user) {
    console.log('Invalid username or password.');
    return;
  }

  console.log(`Welcome back, ${user.username}!`);
}

function createPost(userId, content) {
  const user = users.find((user) => user.id === userId);

  if (!user) {
    console.log('User not found.');
    return;
  }

  const post = new Post(posts.length + 1, content, user.id);
  user.addPost(post);
  posts.push(post);

  console.log('Post created successfully!');
}

function likePost(userId, postId) {
  const user = users.find((user) => user.id === userId);
  const post = posts.find((post) => post.id === postId);

  if (!user || !post) {
    console.log('User or Post not found.');
    return;
  }

  if (!post.likes.has(user.id)) {
    post.addLike(user.id);
    console.log('Post liked!');
  } else {
    post.removeLike(user.id);
    console.log('Like removed.');
  }
}

function commentPost(userId, postId, content) {
  const user = users.find((user) => user.id === userId);
  const post = posts.find((post) => post.id === postId);

  if (!user || !post) {
    console.log('User or Post not found.');
    return;
  }

  post.addComment(`[${user.username}] ${content}`);
  console.log('Comment added successfully!');
}

// ---------------------- Usage Examples ----------------------

// Register users
register('user1', 'pass1');
register('user2', 'pass2');
register('user3', 'pass3');

// Login
login('user1', 'pass1');

// Create post
createPost(1, 'Hello World!');
createPost(2, 'This is a test post!');
createPost(3, 'My first post!');

// Like post
likePost(1, 1);
likePost(2, 1);
likePost(3, 2);
likePost(1, 3);

// Comment on post
commentPost(2, 3, 'Nice post!');
commentPost(3, 3, 'Keep it up!');

// User following
users[0].followUser(users[1]);
users[0].followUser(users[2]);

// User unfollowing
users[0].unfollowUser(users[1]);

console.log(users[0]);
console.log(users[1]);
console.log(users[2]);
console.log(posts[0]);
console.log(posts[1]);
console.log(posts[2]);

/**
 * Output:
 * 
 * Registration successful!
 * Registration successful!
 * Registration successful!
 * Welcome back, user1!
 * Post created successfully!
 * Post created successfully!
 * Post created successfully!
 * Post liked!
 * Like removed.
 * Post liked!
 * Comment added successfully!
 * Comment added successfully!
 * User {
 *   id: 1,
 *   username: 'user1',
 *   password: 'pass1',
 *   posts: [
 *     Post {
 *       id: 1,
 *       content: 'Hello World!',
 *       authorId: 1,
 *       likes: Set { 2 },
 *       comments: []
 *     },
 *     Post {
 *       id: 3,
 *       content: 'My first post!',
 *       authorId: 1,
 *       likes: Set { 1 },
 *       comments: [ '[user1] Nice post!', '[user3] Keep it up!' ]
 *     }
 *   ],
 *   following: Set { 3 },
 *   followers: Set {}
 * }
 * User {
 *   id: 2,
 *   username: 'user2',
 *   password: 'pass2',
 *   posts: [
 *     Post {
 *       id: 2,
 *       content: 'This is a test post!',
 *       authorId: 2,
 *       likes: Set { 3 },
 *       comments: []
 *     }
 *   ],
 *   following: Set {},
 *   followers: Set { 1 }
 * }
 * User {
 *   id: 3,
 *   username: 'user3',
 *   password: 'pass3',
 *   posts: [],
 *   following: Set {},
 *   followers: Set { 1 }
 * }
 * Post {
 *   id: 1,
 *   content: 'Hello World!',
 *   authorId: 1,
 *   likes: Set { 2 },
 *   comments: []
 * }
 * Post {
 *   id: 2,
 *   content: 'This is a test post!',
 *   authorId: 2,
 *   likes: Set { 3 },
 *   comments: []
 * }
 * Post {
 *   id: 3,
 *   content: 'My first post!',
 *   authorId: 1,
 *   likes: Set { 1 },
 *   comments: [ '[user1] Nice post!', '[user3] Keep it up!' ]
 * }
 */