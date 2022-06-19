import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BibliographyComponent } from './bibliography/bibliography.component';
import { TranslationComponent } from './translation/translation.component';

const routes: Routes = [
  { path: '', component: BibliographyComponent, pathMatch: 'full' },
  { path: 'translantion/:id', component: TranslationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
