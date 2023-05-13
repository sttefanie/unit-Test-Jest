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
})
});
