import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';  

@Component({
  selector: 'app-task-stat',
  templateUrl: './task-stat.component.html',
  styleUrls: ['./task-stat.component.css']
})
export class TaskStatComponent implements OnInit {
  barchart: any;
  @Input() tasks: any=[];
taskPriority:any=["high","medium","low"];
taskStatus:any=["inprocess","todo","complete"];
noOfTasksForPriority :number[]=[0,0,0];
noOfTasksForStatus:number[]=[0,0,0];
  constructor() { }

  ngOnInit() {
    console.log("tasks are"+this.tasks)
   
    console.log(this.noOfTasksForPriority)
        this.barTrial()
        this.barTrial2()
  }
  barTrial(){
     this.tasks.forEach(task => {
      if(task.priority == "1"){
        console.log("high")
        this.noOfTasksForPriority[0]=this.noOfTasksForPriority[0]+1;
      }else if(task.priority == "2"){
        console.log("medium")
        this.noOfTasksForPriority[1]=this.noOfTasksForPriority[1]+1;
      }else{
        console.log("low")
        this.noOfTasksForPriority[2]=this.noOfTasksForPriority[2]+1;
      }
    });
      this.barchart = new Chart('canvas', {  
        type: 'bar',  
        data: {  
          labels: this.taskPriority,  
          datasets: [  
            {  
              data: this.noOfTasksForPriority,  
              borderColor: '#3cba9f',  
              backgroundColor: [  
                "#3cb371",  
                "#0000FF",  
                "#9966FF",  
                "#4C4CFF",  
                "#00FFFF",  
                "#f990a7",  
                "#aad2ed",  
                "#FF00FF",  
                "Blue",  
                "Red",  
                "Blue"  
              ],  
              fill: false  
            }  
          ]  
        },  
        options: {  
          legend: {  
            display: false  
          },  
          scales: {  
            xAxes: [{  
              display: true  
            }],  
            yAxes: [{  
              display: true ,
              ticks: {
                    beginAtZero: true
                } 
            }],  
          }  
        }  
      }); 
  }
  barTrial2(){
     this.tasks.forEach(task => {
      if(task.status == "in_process"){
        
        this.noOfTasksForStatus[0]=this.noOfTasksForStatus[0]+1;
      }else if(task.status == "to_do"){
        
        this.noOfTasksForStatus[1]=this.noOfTasksForStatus[1]+1;
      }else{
        
        this.noOfTasksForStatus[2]=this.noOfTasksForStatus[2]+1;
      }
    });
      this.barchart = new Chart('canvas2', {  
        type: 'horizontalBar',  
        data: {  
          labels: this.taskStatus,  
          datasets: [  
            {  
              data: this.noOfTasksForStatus,  
              borderColor: '#3cba9f',  
              backgroundColor: [  
                "#3cb371",  
                "#0000FF",  
                "#9966FF",  
                "#4C4CFF",  
                "#00FFFF",  
                "#f990a7",  
                "#aad2ed",  
                "#FF00FF",  
                "Blue",  
                "Red",  
                "Blue"  
              ],  
              fill: false  
            }  
          ]  
        },  
        options: {  
          legend: {  
            display: false  
          },  
          scales: {  
            xAxes: [{  
              display: true  
            }],  
            yAxes: [{  
              display: true ,
              ticks: {
                    beginAtZero: true
                } 
            }],  
          }  
        }  
      }); 
  }

}
