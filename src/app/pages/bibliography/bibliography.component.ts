import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-bibliography',
  templateUrl: './bibliography.component.html',
  styleUrls: ['./bibliography.component.css']
})
export class BibliographyComponent implements OnInit {

  translations: any[] = [];

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    // this.apollo
    //   .watchQuery({
    //     query: gql`{
    //     translations {
    //       _id
    
    //       imgUrl
    
    //       titleTranslation
    //       translators
    //       translatedInto
    
    //       titleOriginal
    //       authors
    //       translatedFrom
    //     }
    //   }
    //     `,
    //   })
    //   .valueChanges.subscribe((result: any) => {
    //     this.translations = result?.data?.translations;
    //   });
  }

  search(searchString: any) :void {
    this.apollo
      .watchQuery({
        query: gql`{
          search(searchString: "${searchString}") {
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
