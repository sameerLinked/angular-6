import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { FormControl, FormGroup, Validators, FormBuilder, ReactiveFormsModule   } from '@angular/forms';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private userService: UserService) { }
 userId = 1;
_postsArray:any[];
  ngOnInit() {
	  this.getUserById(1);
  }
getUserById(userId): void {
    this.userService.getUserById(userId)
        .subscribe(res => this._postsArray  = res.json());
  }
  
}
