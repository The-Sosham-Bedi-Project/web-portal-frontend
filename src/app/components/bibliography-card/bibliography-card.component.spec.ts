import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliographyCardComponent } from './bibliography-card.component';

describe('BibliographyCardComponent', () => {
  let component: BibliographyCardComponent;
  let fixture: ComponentFixture<BibliographyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibliographyCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliographyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
