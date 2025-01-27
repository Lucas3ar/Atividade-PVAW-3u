import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomeDialogoComponent } from './dialogo-nome.component';

describe('DialogoNomeComponent', () => {
  let component: NomeDialogoComponent;
  let fixture: ComponentFixture<NomeDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NomeDialogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NomeDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
