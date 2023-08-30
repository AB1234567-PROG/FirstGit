const posts = [];
let lastActivityTime = null;

function createPost(postTitle) {
  return new Promise((resolve) => {
    setTimeout(() => {
      posts.push({ title: postTitle });
      resolve();
    }, 1000);
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve) => {
    setTimeout(() => {
      lastActivityTime = new Date();
      resolve();
    }, 1000);
  });
}

function deleteLastPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        const deletedPost = posts.pop();
        resolve(deletedPost);
      } else {
        reject("ERROR: No posts to delete");
      }
    }, 1000);
  });
}

function printPostsAndActivity() {
  console.log("Posts:", posts);
  console.log("Last Activity Time:", lastActivityTime);
}

Promise.all([createPost("Post 1"), updateLastUserActivityTime()])
  .then(() => Promise.all([createPost("Post 2"), updateLastUserActivityTime()]))
  .then(() => Promise.all([createPost("Post 3"), updateLastUserActivityTime()]))
  .then(() => {
    printPostsAndActivity();
    return Promise.all([deleteLastPost()]);
  })
  .then((deletedPosts) => {
    console.log("Deleted Post:", deletedPosts[0].title);
    printPostsAndActivity();
  })
  .catch((error) => {
    console.error(error);
  });
