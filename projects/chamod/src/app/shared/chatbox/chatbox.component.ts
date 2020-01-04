import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'chamod-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatBoxComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
