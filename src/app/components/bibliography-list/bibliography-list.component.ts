import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bibliography-list',
  templateUrl: './bibliography-list.component.html',
  styleUrls: ['./bibliography-list.component.css']
})
export class BibliographyListComponent implements OnInit {

  GridView = true;

  @Input() translations: any[] =[];
  currentPage: number = 1;

  constructor() { }

  ngOnInit(): void {
    console.log()
  }

  createTruncatedList(listString:string) {
    const list = listString.split(',');
    if(list.length<=2) {
      return listString 
    } else return list[0]+list[1]+" and more";
  }

}
