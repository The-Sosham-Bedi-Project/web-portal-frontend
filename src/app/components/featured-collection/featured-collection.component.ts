import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-featured-collection',
  templateUrl: './featured-collection.component.html',
  styleUrls: ['./featured-collection.component.css']
})
export class FeaturedCollectionComponent implements OnInit {

  id = "62d8befc8057769f145df871";
  t:any;

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: gql`{
          themeById(_id: "${this.id}") {             
            themeName
    
            imageUrl
          }
      }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        this.t = result?.data?.themeById;
        console.log(this.t)
      });
  }

}
