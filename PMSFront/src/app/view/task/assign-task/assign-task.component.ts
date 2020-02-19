import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { UserService } from "src/app/view/user/user.service";
import { TaskService } from "src/app/view/task/task.service";
import { ProjectService } from "src/app/view/project/project.service";

@Component({
  selector: 'app-assign-task',
  templateUrl: './assign-task.component.html',
  styleUrls: ['./assign-task.component.css']
})
export class AssignTaskComponent implements OnInit {
 @Output() cancelAssign:EventEmitter<any>=new EventEmitter()
  @Output() taskAssigned:EventEmitter<any>=new EventEmitter()
 @Input() projectId:any;
 task:any;
 user:any;
 users:any=[];
 tasks:any=[];
  constructor(private userService:UserService,private taskService:TaskService,private projectService:ProjectService) { }

  ngOnInit() {
    this.getUsers();
    this.getTasks();
  }
  // getUsers(){
  //   this.userService.getUsers().subscribe(data=>{
  //     console.log(data)
  //     this.users=data
  //   },
  //   err=>{
  //     console.log("error :" +err)
  //   })
  // }
   getUsers(){
    this.projectService.getProjectDetails(this.projectId).subscribe(data=>{
      console.log(data)
      this.users=data[0].teamMember;
    },
    err=>{
      console.log("error :" +err)
    })
  }
  getTasks(){
    this.taskService.getTasks(this.projectId).subscribe(data => {
        this.tasks = data;
      }, (err: any) => {
        console.log("error is: " + err)
      })
  }
  cancel(){
    this.cancelAssign.emit()
  }
  assignTask(){
    this.taskService.assignTask(this.task,this.user).subscribe((data:any)=>{
      console.log("data is :"+data);
      this.task={};
      this.user={};
      this.taskAssigned.emit();
    },(err:any)=>{
      console.log("error is :"+ JSON.stringify(err));
    })
  }
  
}
