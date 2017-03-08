import { Component } from '@angular/core';

@Component({
    selector: 'login',
    template: `
        <div>LOGIN</div>
        <form>
            <fieldset>
                <div [ngClass]="{ 'has-error' : firstNameVar.touched && !firstNameVar.valid }">
                    <label for="firstNameId">First Name</label>
                    <input id="firstNameId" type="text"
                        placeholder="First Name (required)"
                        required
                        minLength="3"
                        [(ngModel)]="customer.firstName"
                        name="firstName"
                        #firstNameVar="ngModel"
                        />
                </div>
                <button type="submit">Save</button>   
            </fieldset>
        </form> 
    `
})

export class LoginComponent {
    users: any[] = [{ name: "lukej", password: "fatty123"}];
}