import { Component } from '@angular/core';
import { ForumService } from '../../../../core/services/forum.service';
interface Post {
  title: string;
  time: string;
  author: string;
  tags: string[];
  votes: number;
  replies: number;
  views: number;
  borderColor: string;
}

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.sass']
})
export class ListPostComponent {
  posts: Post[] = [];

  constructor(private forumService: ForumService) {}

  ngOnInit(): void {
    this.forumService.getPosts().subscribe((data: any) => {
      this.posts = data;
    });
    console.log("------------->",this.posts);
  }


}
