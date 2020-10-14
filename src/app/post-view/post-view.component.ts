import { Component, Input, OnInit } from '@angular/core';

import { Post, Posts } from '../interface/post'

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

  @Input() myPost:Post;
  constructor() { }

  ngOnInit(): void {
 

  }

}
