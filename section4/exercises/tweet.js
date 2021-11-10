/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }

  addLike() {
    this.numberOfLikes++;
  }

  addComment(comments) {
    this.comments.push(comments);
  }
};

var tweetOne = new Tweet("Fran", "This rocks!", "12:34 PM", 9, ["Yes sir,", "totally!"]);
console.log(tweetOne);

tweetOne.addLike();
console.log(tweetOne);

tweetOne.addComment("No it doesn't :(");
console.log(tweetOne);
