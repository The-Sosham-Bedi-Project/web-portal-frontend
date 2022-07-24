import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bibliography-list',
  templateUrl: './bibliography-list.component.html',
  styleUrls: ['./bibliography-list.component.css']
})
export class BibliographyListComponent implements OnInit {

  @Input() translations: any[] =[];
  currentPage: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
