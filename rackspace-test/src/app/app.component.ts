import { Component } from '@angular/core';
import { Post } from './post';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts: Post[];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPosts()
    .then((posts: Post[]) => {
      this.posts = posts;
    });

  }

  handleUserIdClickedUp(ev: any): void {
    this.posts.sort((a: Post, b: Post): number => {
      if (a.userId < b.userId) return -1;
      if (a.userId === b.userId) return 0;
      if (a.userId > b.userId) return 1;
    });
  }
  
  handleUserIdClickedDown(ev: any): void {
    this.posts.sort((a: Post, b: Post): number => {
      if (a.userId < b.userId) return 1;
      if (a.userId === b.userId) return 0;
      if (a.userId > b.userId) return -1;
    });
  }

  handleIdClickedUp(ev: any): void {
    this.posts.sort((a: Post, b: Post): number => {
      if (a.id < b.id) return -1;
      if (a.id === b.id) return 0;
      if (a.id > b.id) return 1;
    });
  }
  
  handleIdClickedDown(ev: any): void {
    this.posts.sort((a: Post, b: Post): number => {
      if (a.id < b.id) return 1;
      if (a.id === b.id) return 0;
      if (a.id > b.id) return -1;
    });
  }

  handleTitleClickedUp(ev: any): void {
    this.posts.sort((a: Post, b: Post): number => {
      if (a.title < b.title) return -1;
      if (a.title === b.title) return 0;
      if (a.title > b.title) return 1;
    });    
  }
  
  handleTitleClickedDown(ev: any): void {
    this.posts.sort((a: Post, b: Post): number => {
      if (a.title < b.title) return 1;
      if (a.title === b.title) return 0;
      if (a.title > b.title) return -1;
    });      
  }

  handleBodyClickedUp(ev: any): void {
    this.posts.sort((a: Post, b: Post): number => {
      if (a.body < b.body) return -1;
      if (a.body === b.body) return 0;
      if (a.body > b.body) return 1;
    }); 
  }

  handleBodyClickedDown(ev: any): void {
    this.posts.sort((a: Post, b: Post): number => {
      if (a.body < b.body) return 1;
      if (a.body === b.body) return 0;
      if (a.body > b.body) return -1;
    }); 
  }  
}
