import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css']
})
export class TranslationComponent implements OnInit {

  t: any = {};
  id: string = 'kjjhjhjh';

  constructor(private activatedRoute: ActivatedRoute, private apollo: Apollo, private searchService: SearchService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(map(p => p['id'])).subscribe(
      (id:string) => { this.id = id }
    );
    this.apollo
      .watchQuery({
        query: gql`{
          translationById(_id: "${this.id}") {    
            titleOriginal
            titleTranslation
            singleOrAnthology
            authors
            translators
            editors
            translatedFrom
            translatedInto
            type
            yearOfPublicationOriginal
            yearOfPublicationTranslation
            publisherOriginal
            publisherTranslation
            ebook
            genre
            isbn
          }
      }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        this.t = result?.data?.translationById;
        // console.log(this.t);
      });
  }
  search(searchString: string) {
    this.searchService.search({searchString:searchString})?.valueChanges.subscribe((result: any) => {
      this.searchService.translations = result?.data?.search;
    });
    this.router.navigate(['results']);
  }
}
