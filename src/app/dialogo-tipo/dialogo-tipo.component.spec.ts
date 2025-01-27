import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDialogoComponent } from './dialogo-tipo.component';

describe('TipoDialogoComponent', () => {
  let component: TipoDialogoComponent;
  let fixture: ComponentFixture<TipoDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoDialogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
