import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliographyListComponent } from './bibliography-list.component';

describe('BibliographyListComponent', () => {
  let component: BibliographyListComponent;
  let fixture: ComponentFixture<BibliographyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibliographyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliographyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
