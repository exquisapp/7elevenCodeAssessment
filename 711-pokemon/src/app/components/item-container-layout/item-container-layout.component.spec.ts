import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemContainerLayoutComponent } from './item-container-layout.component';

describe('ItemContainerLayoutComponent', () => {
  let component: ItemContainerLayoutComponent;
  let fixture: ComponentFixture<ItemContainerLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ItemContainerLayoutComponent]
    });
    fixture = TestBed.createComponent(ItemContainerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
