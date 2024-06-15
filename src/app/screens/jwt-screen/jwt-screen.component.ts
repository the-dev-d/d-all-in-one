import { Component, signal } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BlocktextComponent } from '../../components/blocktext/blocktext.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-jwt-screen',
  standalone: true,
  imports: [ReactiveFormsModule, BlocktextComponent, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './jwt-screen.component.html',
})
export class JwtScreenComponent {

    header = signal('')
    payload = signal('')
    signature  = signal('')

    form = this.fb.group({
      token: ['eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c', [Validators.pattern(/^[A-z\d_+\/]+\.[A-z\d_+\/]+.[A-z\d_+\/]+$/)]],
      secret: [""]
    })
    
    constructor(private fb: FormBuilder) {
      this.handleChange();
      this.form.controls.secret.valueChanges.subscribe(secret => {
        if(!secret)
          return;
        
        const header = btoa(this.header());
        const payload = btoa(this.payload());
        const body = btoa(header + "." + payload);
        const crypto = new Crypto();


      })
    }

    handleChange() {

      const data = this.form.value;
      if(this.form.invalid) return;

      const {token} = data;
      if(!token) return;

      const [header, payload] = token.split('.');
      this.header.set(atob(header));
      this.payload.set(atob(payload));
      
    }



}
