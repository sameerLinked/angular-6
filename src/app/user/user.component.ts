import { Component, OnInit , Output, EventEmitter, Input } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { FormControl, FormGroup, Validators, FormBuilder, ReactiveFormsModule   } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

 newUser = new User();
  constructor(private userService: UserService) { }

  ngOnInit() {
	  
  }
 create(user) {
	 
       let data = JSON.stringify(user);
       this.userService.create(user).subscribe()
    }
}
