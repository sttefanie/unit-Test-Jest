import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
// Teste de um cabeçãho com o texto SignUp e usar o querySelector para ver se os elementos que procuramos esta em um H1
  it('has Sign Up header', () => {
     const signUp = fixture.nativeElement  as HTMLElement;
     const h1 = signUp.querySelector('h1');
    expect(h1?.textContent).toBe('Sign Up');
  });
});
