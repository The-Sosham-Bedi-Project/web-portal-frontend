import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  searchString: string = '';
  translatedFrom: string = '';
  translatedInto: string = '';

  constructor(private searchService: SearchService, private router: Router) { }

  ngOnInit(): void {
  }

  deleteEmptyProps(obj: any): any {
    // modifies passed obj in place, removing empty properties (inc. empty arrays)
    Object.keys(obj).forEach(k => {
      if (obj[k] === '') {
        delete obj[k];
      }
    });
    return obj
  }

  emitSearch() {
    let event = {
      searchString: this.searchString,
      translatedFrom: this.translatedFrom,
      translatedInto: this.translatedInto
    };

    this.searchService.search(this.deleteEmptyProps(event))?.valueChanges.subscribe((result: any) => {
      this.searchService.translations = result?.data?.search;
    });

    this.router.navigate(['results']);
  }

}
