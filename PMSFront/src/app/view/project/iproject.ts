import { User } from "src/app/view/user/user";

export interface IProject {
    managerId:String,
    projectId:String,
    projectName:String,
    teamMember:User[],
    scrumMaster:string,
    status:string
}
