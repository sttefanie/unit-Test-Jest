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
 describe('Layout', () => {
    it('has Sign Up header', () => {
     const signUp = fixture.nativeElement  as HTMLElement;
     const h1 = signUp.querySelector('h1');
    expect(h1?.textContent).toBe('Sign Up');
  })
  //Test que verifica se o formulário de registro contém um campo de entrada para o nome de usuário
    it('has username input', () => {
      const signUp = fixture.nativeElement as HTMLElement;
      const label = signUp.querySelector('label[for="username"]')
      const input = signUp.querySelector('input[id="username"]');
      expect(input).toBeTruthy();
      expect(label).toBeTruthy();
      expect(label?.textContent).toContain('Username');
    })
  //Test que verifica se o formulário de registro contém um campo de entrada para o e-mal do usuário
  it('has email input', () => {
    const signUp = fixture.nativeElement as HTMLElement;
    const label = signUp.querySelector('label[for="email"]')
    const input = signUp.querySelector('input[id="email"]');
    expect(input).toBeTruthy();
    expect(label).toBeTruthy();
    expect(label?.textContent).toContain('E-mail');
  })
   //Test que verifica se o formulário de registro contém um campo de entrada para o e-mal do usuário
   it('has password input', () => {
    const signUp = fixture.nativeElement as HTMLElement;
    const label = signUp.querySelector('label[for="password"]')
    const input = signUp.querySelector('input[id="password"]');
    expect(input).toBeTruthy();
    expect(label).toBeTruthy();
    expect(label?.textContent).toContain('Password');
  })

it('has password type for password input', () => {
  const signUp = fixture.nativeElement as HTMLElement;
  const input = signUp.querySelector('input[id="password"]') as HTMLInputElement;
  expect(input.type).toBe('password');
})

it('has password repeat input', () => {
  const signUp = fixture.nativeElement as HTMLElement;
  const label = signUp.querySelector('label[for="passwordRepeat"]');
  const input = signUp.querySelector('input[id="passwordRepeat"]');
  expect(input).toBeTruthy();
  expect(label).toBeTruthy();
  expect(label?.textContent).toContain('Password Repeat');

})
it('has password type for password repeat input', () => {
  const signUp = fixture.nativeElement as HTMLElement;
  const input = signUp.querySelector('input[id="passwordRepeat"]') as HTMLInputElement;
  expect(input.type).toBe('password');
})

it('has Sign Up button', () => {
  const signUp = fixture.nativeElement  as HTMLElement;
  const button = signUp.querySelector('button');
 expect(button?.textContent).toBe('Sign Up');
})
it('disables the button initialy', () => {
  const signUp = fixture.nativeElement as HTMLElement;
  const button = signUp.querySelector('button');
  expect(button?.disabled).toBeTruthy()
})
})

});
