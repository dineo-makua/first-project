import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMydreamsComponent } from './list-mydreams.component';

describe('ListMydreamsComponent', () => {
  let component: ListMydreamsComponent;
  let fixture: ComponentFixture<ListMydreamsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListMydreamsComponent]
    });
    fixture = TestBed.createComponent(ListMydreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
