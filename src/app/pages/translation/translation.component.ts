import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css']
})
export class TranslationComponent implements OnInit {

  t: any = {};
  id: string = 'kjjhjhjh';

  constructor(private activatedRoute: ActivatedRoute, private apollo: Apollo) { }

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

}
