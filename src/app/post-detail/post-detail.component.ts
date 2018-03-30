import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private location: Location
  ) { }

  @Input() post: Post;

  ngOnInit() {
    this.getPost();
  }

  getPost(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    // + operator converts the string to a number
    this.postService.getPost(id).subscribe(post => this.post = post);
  }

  goBack(): void {
    this.location.back();
  }

}
