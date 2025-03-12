import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSonidosComponent } from './lista-sonidos.component';

describe('ListaSonidosComponent', () => {
  let component: ListaSonidosComponent;
  let fixture: ComponentFixture<ListaSonidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaSonidosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaSonidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
