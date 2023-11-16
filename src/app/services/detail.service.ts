import { Injectable } from '@angular/core';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
post:Post[]=[];

adddetail(post:Post){

  if(this.post.length < 1){

    this.post.push(post);

  }
  else{

    this.post.unshift(post);
    this.post.splice(1);

  }

}


getdetail(){

  return this.post;

}

constructor() { }


}
