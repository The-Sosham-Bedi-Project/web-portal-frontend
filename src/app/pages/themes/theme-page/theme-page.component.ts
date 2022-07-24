import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs';

@Component({
  selector: 'app-theme-page',
  templateUrl: './theme-page.component.html',
  styleUrls: ['./theme-page.component.css']
})
export class ThemePageComponent implements OnInit {

  t: any = {};
  id: string = 'kjjhjhjh';
  trasnlationIds = [];
  translations = [];
  currentPage = 1;

  constructor(private activatedRoute: ActivatedRoute, private apollo: Apollo) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(map(p => p['id'])).subscribe(
      (id:string) => { this.id = id }
    );
    this.apollo
      .watchQuery({
        query: gql`{
          themeById(_id: "${this.id}") {    
            themeName
    
            imageUrl
            
            translations {
              id
            }
          }
      }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        this.t = result?.data?.themeById;
        this.trasnlationIds = this.t.translations.map((value: { id: any; }) => value.id);
        console.log(JSON.stringify(this.trasnlationIds))
        this.apollo
      .watchQuery({
        query: gql`{
          translationByIdList(ids : ${JSON.stringify(this.trasnlationIds)}) {
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
        this.translations = result?.data?.translationByIdList;      
      });
      });
      
  }
}
