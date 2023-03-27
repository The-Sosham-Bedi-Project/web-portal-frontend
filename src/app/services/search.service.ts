import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public translations =[];
  public searchQuery ="";

  constructor(private apollo: Apollo) { }

  getSearchInput(searchInput: any) {
    let input = "";
    if (searchInput.searchString) {
      input += `searchString:"${searchInput.searchString}"`
    }
    if (searchInput.translatedFrom) {
      input += `translatedFrom:"${searchInput.translatedFrom}"`
    }
    if (searchInput.translatedInto) {
      input += `translatedInto:"${searchInput.translatedInto}"`
    }
    return input;
  }

  getSearchQueary(searchInput: any) {
    let input = "";
    if (searchInput.searchString) {
      input += ` keyword:"${searchInput.searchString}"`
    }
    if (searchInput.translatedFrom) {
      input += ` original language:"${searchInput.translatedFrom}"`
    }
    if (searchInput.translatedInto) {
      input += ` translated into:"${searchInput.translatedInto}"`
    }
    return input;
  }

  search(searchInput: any) {
    this.searchQuery = this.getSearchQueary(searchInput);
    const input = this.getSearchInput(searchInput);
    if (input !== "") return this.apollo
      .watchQuery({
        query: gql`{
          search(
            searchInput: {${input}}) {
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
      else return;
  } 
}
