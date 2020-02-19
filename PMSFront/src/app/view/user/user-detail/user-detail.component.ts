import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from "src/app/view/user/user.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { User } from "src/app/view/user/user";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
role:boolean=false;
  userId:number;
  //user:FormGroup;
  user:User={
      userId:"" ,
      userName:"" ,
      email:"" ,
      phone:"" ,
      loginName:"" ,
      password:"",
      role:"",
      status:""};
  constructor(private router:Router,private route:ActivatedRoute,private userService:UserService) {
this.userId=this.route.snapshot.params.userId

   }
   flag:boolean=false;
  ngOnInit() {
    // this.user=new FormGroup({
    //   userId:new FormControl('',[Validators.required]) ,
    //   userName:new FormControl('',[Validators.required]) ,
    //   email:new FormControl('',[Validators.required]) ,
    //   phone:new FormControl('',[Validators.required]) ,
    //   loginName:new FormControl('',[Validators.required]) ,
    //   password:new FormControl('',[Validators.required]),
    //   role:new FormControl('',[Validators.required]),
    //   status:new FormControl('',[Validators.required])
    // })
    if(sessionStorage.getItem('role')=='admin'){
      this.role=true;
    }
    console.log(this.role)
    this.getUserDetails()
  }
  getUserDetails(){
    this.userService.getUserDetails(this.userId).subscribe(
      data=>{
        console.log(data)
        this.user=data[0]
      }
    );
  }
  editUser(){
    this.flag=true
  }
  updateUser(fs:any){
    if(fs){
      console.log(fs)
      if(fs.invalid){
        return;
      }
    }
    this.userService.updateUserDetails(this.user).subscribe(
      data=>{
        console.log(data)
        this.flag=false;
        this.router.navigate(['user'])
      }
    );
  }
  cancelUpdateUser(){
    this.flag=false;
    this.getUserDetails();
  }
  
}
