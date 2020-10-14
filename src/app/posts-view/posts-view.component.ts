import { Component, OnInit } from '@angular/core';
import { Posts} from '../interface/Post'
import { PostService } from '../post.service';


@Component({
  selector: 'app-posts-view',
  templateUrl: './posts-view.component.html',
  styleUrls: ['./posts-view.component.css']
})
export class PostsViewComponent implements OnInit {
posts:Posts;
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(
      (data: Posts) => this.posts= data

    );
  }

}
