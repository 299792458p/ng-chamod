import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { SharedModule } from '../../shared/shared.module';
import { ChatroomRoutingModule } from './chatroom-routing.module';

@NgModule({
  imports: [CommonModule, SharedModule, ChatroomRoutingModule],
  declarations: [ChatroomComponent]
})
export class ChatroomModule {}
