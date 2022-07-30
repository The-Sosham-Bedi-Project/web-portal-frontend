import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  search: string = '';
  translations: any;

  constructor(private activatedRoute: ActivatedRoute, private apollo: Apollo) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(map(p => p['search'])).subscribe(
      (search:string) => { this.search = search }
    );
    this.apollo
      .watchQuery({
        query: gql`{
          search(searchString: "${this.search}") {
            _id
            
            imgUrl
            
            titleTranslation
            translators
            translatedInto
            
            titleOriginal
            authors
            translatedFrom
          }
        }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        this.translations = result?.data?.search;
      });
  }

}
