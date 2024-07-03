import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumComponent } from './components/forum/forum.component';
import { ListPostComponent } from './components/list-post/list-post.component';
import { ActiveTopicsComponent } from './components/active-topics/active-topics.component';
import { StatsComponent } from './components/stats/stats.component';



@NgModule({
  declarations: [
    ForumComponent,
    ListPostComponent,
    ActiveTopicsComponent,
    StatsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ForumComponent
  ]
})
export class ForumModule { }
