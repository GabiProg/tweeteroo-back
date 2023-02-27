import postsService from "../service/postsService/index.js";

export async function SignUp(req, res) {
  const { username, avatar } = req.body;
 
  if (!username || !avatar) {
    res.status(400).send('Todos os campos são obrigatórios!');
    return;
  }

  try {
    await postsService.PostUser(username, avatar);
    res.status(200).send("Okay!");

  } catch (error) {
    res.sendStatus(500);
  }
}

export async function PostTweets(req, res) {
  const { tweet, username } = req.body;

  if (!username || !tweet) {
    return res.status(400).send('Todos os campos são obrigatórios!');
  }

  try {
    const tweets = await postsService.PostTweetsService(tweet, username);
    res.status(201).send(tweets);

  } catch (error) {
    res.sendStatus(500);
  }
}

export async function GetUsernames(req, res) {
  const { username } = req.params;

  try {
    const usernames = await postsService.GetUsernamesService(username);
    res.status(200).send(usernames);
    
  } catch (error) {
    res.sendStatus(500);
  }
}

export async function GetTweets(req, res) {
  const { page } = req.query;

  if (page && page < 1) {
    res.status(400).send('Informe uma página válida!');
    return;
  }

  try {
    const tweets = await postsService.GetTweetsService(page);
    res.status(200).send(tweets);

  } catch (error) {
    res.sendStatus(500);
  }
}
