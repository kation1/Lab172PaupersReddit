import { Injectable } from '@angular/core';
import {Post, Posts} from './interface/post'
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiURL:'https://www.reddit.com/r/aww/.json'
  constructor(private http:HttpClient) { }

  getPosts()
  {
    return this.http.get<Posts>('https://www.reddit.com/r/aww/.json') //this.apiURL
  }
}
