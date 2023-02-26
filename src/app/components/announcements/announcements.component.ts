import { Component, OnInit } from '@angular/core';

export interface Announcement {
  id: string;
  message: string;
}

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {

  announcements = [
     'Checkout the our repository of translations!',
     'The State of Indian Translations'
   ];

   current = 0;
   total = this.announcements.length;
   wait = 4000;

  constructor() { }

  ngOnInit(): void {
    this.announce();
  }

  announce() {
    setTimeout(() => {
      this.current = (this.current + 1)%this.total;
      this.announce();
  }, this.wait);
  }
}
