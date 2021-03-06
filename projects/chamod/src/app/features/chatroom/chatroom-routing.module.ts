import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatroomComponent } from './chatroom/chatroom.component';

const routes: Routes = [
  {
    path: '',
    component: ChatroomComponent,
    data: { title: 'chamod.menu.about' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatroomRoutingModule {}
