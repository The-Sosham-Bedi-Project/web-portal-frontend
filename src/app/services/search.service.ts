import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private apollo: Apollo) { }

  search(searchString: any) {
    return this.apollo
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
  }
}
