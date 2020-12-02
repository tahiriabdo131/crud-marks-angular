import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MarkService } from 'src/app/services/mark.service';
import { Mark } from 'src/app/models/mark';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent implements OnInit {
  //variable to show the form of 'addition' or not
  vShowFormAdd: boolean = false;
  //variable to show the form of 'update' or not
  vShowFormUpdat: boolean = false;
  //Name enter to search
  searchText = '';
  //list of marks
  marks: Mark[] = [];
  //list of marksFilter
  marksFilter: Mark[] = [];
  //object for the data binding (look at ngModel)
  objMark: Mark ={
    name: '',
    mark: 0
  }

  //id of mark that we want to update
  markIdToUpdate: number;

  constructor(private markService: MarkService,private http: HttpClient) { }

  ngOnInit(){
    this.getAllMarks();
    //console.log(this.nombrePages);
  }

  //get All marks
  getAllMarks(){
    return this.markService.getData().subscribe(
      (data) => {
        this.marksFilter = this.marks = data;
      });
  }

  //delete mark
  onDeleteMark(markToDelete){
    if(confirm("Are you sure to delete "+markToDelete.name))
    this.markService.deleteData(markToDelete.id).subscribe(
      () => {
        //this.getAllMarks();
        // best practice getAll excepte the id of the item deleted
        this.marksFilter = this.marks = this.marks.filter(mark => mark.id != markToDelete.id);
        //alert("student deleted successfully");
      }
    );
  }

  // add Mark && update Mark
  onSubmit(form: NgForm){
    if(this.objMark.mark<=20 && this.objMark.mark>=0){
      if(this.vShowFormAdd){
        this.vShowFormAdd = !this.vShowFormAdd;
        this.markService.addData(this.objMark).subscribe(
          //spread operator => best practice
          (mark) => {
            this.marksFilter = this.marks = [mark, ...this.marks]
            alert("student updated successfully");
          }
         //() => this.getAllMarks()
        );
      }
      else if(this.vShowFormUpdat){
        this.vShowFormUpdat = false;
        this.markService.updateData(this.markIdToUpdate,this.objMark, ).subscribe(
          () => {
            this.getAllMarks()
            alert("student updated successfully");
          }
        );
      }
    }
    else{
      alert("You must to print a number beetwen 0 and 20");
    }

  }

  //click button (add new Mark)
  showFormAdd(){
    this.vShowFormAdd = !this.vShowFormAdd;
    this.vShowFormUpdat = false;
    this.searchText = '';
    this.objMark.name = '';
    this.objMark.mark = null;
  }

  //click button update Mark
  showFormUpdate(mark){
    this.vShowFormUpdat = true;
    this.vShowFormAdd = false;
    this.searchText = '';
    this.objMark.name = mark.name;
    this.objMark.mark = mark.mark;
    this.markIdToUpdate = mark.id;
  }

 //search in real time
 searchName(){
    //console.log(this.searchText);
    this.marksFilter = this.marks.filter((mark) => mark.name.toUpperCase().includes(this.searchText.toUpperCase()));
  }
}
