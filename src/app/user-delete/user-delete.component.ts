import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  
  id:string;

  constructor(private _Activatedroute:ActivatedRoute,
    private _router:Router,
    private userService: UserService) {
  }
 
  ngOnInit() {
    this._Activatedroute.paramMap.subscribe(params => { 
      console.log(params);
       this.id = params.get('id'); 
       this.userService.delete(this.id).subscribe(result => this.gotoUserList());
   });

  }

  
  gotoUserList() {
    this._router.navigate(['/users']);
  }

}
