import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  searchString: string = '';
  translations: any;

  constructor(private activatedRoute: ActivatedRoute, private searchService: SearchService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(map(p => p['search'])).subscribe(
      (search: string) => {
        this.searchString = search;
        this.searchService.search(search)
          .valueChanges.subscribe((result: any) => {
            this.translations = result?.data?.search;
          });
      }
    );
  }

  search(searchString: any) :void {
    this.router.navigate(['/results', searchString]);
  }

}
