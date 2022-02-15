import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2PageComponent } from './page2-page.component';

describe('Page2PageComponent', () => {
  let component: Page2PageComponent;
  let fixture: ComponentFixture<Page2PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page2PageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page2PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
