import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.css']
})
export class GithubUserComponent implements OnInit {

  @Input() user: GitUser;
  constructor() { }

  ngOnInit() {
  }

}

export class GitUser {
  login: string;
  id: number;
  avatar_url: string;
  url: string;
  html_url: string;
  // "followers_url": "https://api.github.com/users/nallayasami/followers";
  // "following_url": "https://api.github.com/users/nallayasami/following{/other_user}";
  // "gists_url": "https://api.github.com/users/nallayasami/gists{/gist_id}";
  // "starred_url": "https://api.github.com/users/nallayasami/starred{/owner}{/repo}";
  // "subscriptions_url": "https://api.github.com/users/nallayasami/subscriptions";
  // "organizations_url": "https://api.github.com/users/nallayasami/orgs";
  // "repos_url": "https://api.github.com/users/nallayasami/repos";
  // "events_url": "https://api.github.com/users/nallayasami/events{/privacy}";
  // "received_events_url": "https://api.github.com/users/nallayasami/received_events";
  // "type": "User";
  // "site_admin": false;
  // "score": 19.077597;
}
