import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-bibliography',
  templateUrl: './bibliography.component.html',
  styleUrls: ['./bibliography.component.css']
})
export class BibliographyComponent implements OnInit {

  translations: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  search(searchString: any) :void {
    this.router.navigate(['/results', searchString]);
  }

}
