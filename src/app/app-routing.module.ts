import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutAuthorComponent } from './pages/about-author/about-author.component';
import { BibliographyComponent } from './pages/bibliography/bibliography.component';
import { ThemesComponent } from './pages/themes/themes.component';
import { TranslationComponent } from './pages/translation/translation.component';

const routes: Routes = [
  { path: '', component: BibliographyComponent, pathMatch: 'full' },
  { path: 'translantion/:id', component: TranslationComponent },
  { path: 'themes', component: ThemesComponent },
  { path: 'about', component: AboutAuthorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
