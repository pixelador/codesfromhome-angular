import { Component, OnInit } from '@angular/core';
// Import mock posts data
import { POSTS } from '../mock-posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts = POSTS;

  constructor() { }

  ngOnInit() {
  }

}
