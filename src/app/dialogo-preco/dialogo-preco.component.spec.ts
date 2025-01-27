import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecoDialogoComponent } from './dialogo-preco.component';

describe('PrecoDialogoComponent', () => {
  let component: PrecoDialogoComponent;
  let fixture: ComponentFixture<PrecoDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrecoDialogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrecoDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
