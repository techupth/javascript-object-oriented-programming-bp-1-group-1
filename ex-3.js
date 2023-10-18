//  Start coding here

class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

class PostList {
  constructor(post, addPost) {
    this.post = post;
    this.addPost = addPost;
  }

  sharePost() {
    console.log(`You've shared post ${this.post} to your friend`);
  }
}

class Post {
  constructor(id, title, content, comment) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.comment = comment;
  }

  addComment(comment) {
    this.comment.push(comment);
  }
}

class Comment {
  constructor(id, content, createdBy, like) {
    this.id = id;
    this.content = content;
    this.createdBy = createdBy;
    this.like = like;
  }

  addLike() {
    this.like += 1;
  }
}

class Facebook {
  constructor(gropList, pageList) {
    this.gropList = gropList;
    this.pageList = pageList;
  }

  addGroup(group) {
    this.gropList.push(group);
  }
}

class FacebookPage {
  constructor(name) {
    this.name = name;
  }
}

class FacebookGroup {
  constructor(name) {
    this.name = name;
  }
}

class Notification {
  constructor(id) {
    this.id = id;
  }

  send(comment, title) {
    console.log(
      `Notification : ${comment} has just commented on this post ${title} `
    );
  }
}
