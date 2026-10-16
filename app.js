const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.send('Hello World fawad ali!');
  
});

const githubdata={
    
  "login": "Meer-Fawad",
  "id": 172130184,
  "node_id": "U_kgDOCkJ_iA",
  "avatar_url": "https://avatars.githubusercontent.com/u/172130184?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Meer-Fawad",
  "html_url": "https://github.com/Meer-Fawad",
  "followers_url": "https://api.github.com/users/Meer-Fawad/followers",
  "following_url": "https://api.github.com/users/Meer-Fawad/following{/other_user}",
  "gists_url": "https://api.github.com/users/Meer-Fawad/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Meer-Fawad/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Meer-Fawad/subscriptions",
  "organizations_url": "https://api.github.com/users/Meer-Fawad/orgs",
  "repos_url": "https://api.github.com/users/Meer-Fawad/repos",
  "events_url": "https://api.github.com/users/Meer-Fawad/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Meer-Fawad/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Meer Fawad Ali",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "cs student",
  "twitter_username": null,
  "public_repos": 5,
  "public_gists": 0,
  "followers": 0,
  "following": 2,
  "created_at": "2024-06-08T15:17:40Z",
  "updated_at": "2026-08-10T06:48:48Z"
}

app.get('/github', (req, res) => {
  res.json(githubdata);
});


app.get('/about', (req, res) => {
  res.send('About Page');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});