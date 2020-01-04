import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import { Feature, rooms } from '../chatroom.data';

@Component({
  selector: 'chamod-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatroomComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  rooms: Feature[] = rooms;

  ngOnInit() {}

  openLink(link: string) {
    window.open(link, '_blank');
  }
}
