import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Post } from './post';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

  getPosts() {
    return  this.http.get('http://jsonplaceholder.typicode.com/posts')
            .toPromise()
            .then(response => response.json() as Post[])
            .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error);
  }

}
