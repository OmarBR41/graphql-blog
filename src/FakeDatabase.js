class FakeDatabase {
  constructor() {
    this.authors = [
      {
        id: "88d6bec2",
        name: "Omar Benavides",
        email: "omar.benavides.rmz@gmail.com",
      },
      { id: "77e2448a", name: "Jane Doe", email: "jane.doe@obr.com" },
      { id: "0beb564c", name: "John Doe", email: "john.doe@obr.com" },
    ];

    this.blogPosts = [
      {
        id: 1,
        title: "My first blog post",
        content: "This is my first blog post!",
        author: "88d6bec2",
      },
      {
        id: 2,
        title: "Why you should start using ReactJS",
        content:
          "ReactJS is the modern way of web development, you should definitely give it a try!",
        author: "88d6bec2",
      },
      {
        id: 3,
        title: "How to build a GraphQL API",
        content: "GraphQL is so cool!",
        author: "77e2448a",
      },
      {
        id: 4,
        title: "Flask or Django?",
        content:
          "Flask can be a great tool for small projects, but if you're going for a bigger website, Django might be a better option.",
        author: "0beb564c",
      },
    ];

    this.comments = [
      {
        id: 1,
        postId: 2,
        name: "Anonymous",
        content: "Good luck with your blog!",
      },
      {
        id: 2,
        postId: 1,
        name: "Mary",
        content: "Great first article, keep going.",
      },
      { id: 3, postId: 3, name: "Peter", content: "I also love GraphQL <3" },
      {
        id: 4,
        postId: 4,
        name: "O",
        content:
          "Are you really still using Python for your backend? Switch to NodeJS, it's way better!",
      },
    ];
  }

  // ------------------------------------------------------------
  //                      READ METHODS
  // ------------------------------------------------------------
  getBlogPosts() {
    // Here you would make a db connection + query + return data
    return this.blogPosts;
  }

  getBlogPost(id) {
    return this.blogPosts.filter((post) => {
      return post.id === id;
    })[0];
  }

  getCommentsForPost(postId) {
    return this.comments.filter((comment) => {
      return comment.postId === postId;
    });
  }

  getAuthor(authorId) {
    return this.authors.filter((author) => {
      return author.id === authorId;
    })[0];
  }

  getPostsOfAuthor(authorId) {
    return this.getBlogPosts().filter((item) => {
      return item.author === authorId;
    });
  }

  // ------------------------------------------------------------
  //                      WRITE METHODS
  // ------------------------------------------------------------
  addNewBlogPost(post) {
    post.id = this.blogPosts.length + 1;
    this.blogPosts.push(post);
    return post;
  }

  addNewComment(comment) {
    comment.id = this.comments.length + 1;
    this.comments.push(comment);
    return comment;
  }
}

export const fakeDatabase = new FakeDatabase();
