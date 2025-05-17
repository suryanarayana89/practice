import { Component, computed, EventEmitter, input, Input, Output, output,signal } from '@angular/core';

import { DUMMY_USERS } from '../../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // singal based approach
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => {
  //    return 'assets/users/' + this.avatar()
  // });

// ----------------------------------------------------------------------------
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;

  @Output() select = new EventEmitter<string>(); //this is a custom event which emits event, this is widely used from Angular 2
  //instead of custom event as line 28
  //select = output<string>(); //input creates a signal output doesn't

  get imagePath(){
    return 'assets/users/' + this.avatar
  }

  // ----------------------------------------------------------------------------
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);


 onSelectUser(){
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]); //setting new value to a signal
    // //this.selectedUser = DUMMY_USERS[randomIndex];
    // console.log('Clicked!');

    this.select.emit("Id: "+this.id+" name: "+this.name);
   //this.select.emit(2);
  }
}
