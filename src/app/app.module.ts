import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BibliographyComponent } from './pages/bibliography/bibliography.component';
import { AppRoutingModule } from './app-routing.module';
import { TranslationComponent } from './pages/translation/translation.component';
import { HttpClientModule } from '@angular/common/http';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
import {InMemoryCache} from '@apollo/client/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { AboutAuthorComponent } from './pages/about-author/about-author.component';
import { ThemesComponent } from './pages/themes/themes.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ThemePageComponent } from './pages/themes/theme-page/theme-page.component';
import { BibliographyCardComponent } from './components/bibliography-card/bibliography-card.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { BibliographyListComponent } from './components/bibliography-list/bibliography-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BibliographyComponent,
    TranslationComponent,
    AboutAuthorComponent,
    ThemesComponent,
    FooterComponent,
    ContactComponent,
    ThemePageComponent,
    BibliographyCardComponent,
    SearchbarComponent,
    BibliographyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApolloModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'http://localhost:3000/graphql',
          }),
        };
      },
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
