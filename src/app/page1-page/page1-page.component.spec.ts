import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1PageComponent } from './page1-page.component';

describe('Page1PageComponent', () => {
  let component: Page1PageComponent;
  let fixture: ComponentFixture<Page1PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page1PageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
