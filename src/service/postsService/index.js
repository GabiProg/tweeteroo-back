const usuarios = [];
const tweets = [];

class User {
  constructor({ username, avatar }) {
    this.username = username;
    this.avatar = avatar;
  }
}

class Post {
  constructor({ username, tweet, avatar }) {
    this.username = username;
    this.avatar = avatar;
    this.tweet = tweet;
  }
}

async function PostUser({username, avatar})  {

  usuarios.push(new User({
    username,
    avatar
  }));

  return usuarios;
};

async function PostTweetsService({ tweet, username }) {

  const { avatar } = usuarios.find(user => user.username === username);

  tweets.push(new Post({
    username,
    avatar,
    tweet
  }));

  return tweets;
};

async function GetUsernamesService({ username }) {

  const tweetsDoUsuario = tweets.filter(t => t.username === username);

  return tweetsDoUsuario;
};

async function GetTweetsService({ page }) {

  const limite = 10;
  const start = (page - 1) * limite;
  const end = page * limite;

  if (tweets.length <= 10) {
    const tweet = [...tweets].reverse();
    return tweet;
  }

  const allTweets = [...tweets].reverse().slice(start, end);
  return allTweets;
};

const postsService = {
    PostUser,
    PostTweetsService,
    GetUsernamesService,
    GetTweetsService
};

export default postsService;