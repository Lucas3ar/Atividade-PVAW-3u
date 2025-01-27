import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaDialogoComponent } from './dialogo-marca.component';

describe('DialogoPrecoComponent', () => {
  let component: MarcaDialogoComponent;
  let fixture: ComponentFixture<MarcaDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarcaDialogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarcaDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
