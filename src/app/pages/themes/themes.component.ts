import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit {
  translations: any[] = [];

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: gql`{
          themes {
            _id
            
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
        this.translations = result?.data?.themes;
      });
  }

}
