import { Component, OnInit } from '@angular/core';
import { ProjectService } from "src/app/view/project/project.service";
import { Router } from "@angular/router";
import { IProject } from "src/app/view/project/iproject";
import { LoginService } from "src/app/my-login/login.service";
import { UserService } from "src/app/view/user/user.service";
import { User } from "src/app/view/user/user";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects: IProject[] = [];
  addflag: boolean = true;
  newProject: IProject;
  role: boolean = false;
  users:User[];
  constructor(private projectService: ProjectService, private router: Router, private loginService: LoginService,private userService:UserService) { }

  ngOnInit() {
    this.newProject = { managerId: "", projectId: "", projectName: "", teamMember: [], scrumMaster: "", status: "" }
    if (sessionStorage.getItem('role') != 'admin') {
      this.role = true
    }
    this.getProjects();
    this.userService.getUsers().subscribe(data=>{
      this.users=data
    }
    );
  }
  getProjects() {
    this.projectService.getProjects().subscribe(data => {
      this.projects = data
    }, (err: any) => {
      if (err)
        this.loginService.msg = err.error

    })
  }
  onDetail(projectId: any) {
    if (projectId) {
      this.router.navigate(["project", projectId])
    }
  }
  addProject() {
    this.projectService.addProject(this.newProject).subscribe(data => {
      console.log(data)
      this.toggle();
      this.newProject = { managerId: "", projectId: "", projectName: "", teamMember: [], scrumMaster: "", status: "" }
      this.getProjects();
    }, (err: any) => {
      console.log("error is" + JSON.stringify(err.error))
      this.loginService.msg = err.error
    })
  }
  toggle() {
    this.newProject = { managerId: "", projectId: "", projectName: "", teamMember: [], scrumMaster: "", status: "" }
    this.addflag = !this.addflag
  }
}
