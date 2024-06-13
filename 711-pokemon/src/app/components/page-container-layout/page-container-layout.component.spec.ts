import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContainerLayoutComponent } from './page-container-layout.component';

describe('PageContainerLayoutComponent', () => {
  let component: PageContainerLayoutComponent;
  let fixture: ComponentFixture<PageContainerLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PageContainerLayoutComponent]
    });
    fixture = TestBed.createComponent(PageContainerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
