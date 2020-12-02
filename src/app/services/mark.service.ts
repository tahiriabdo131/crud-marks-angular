import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mark } from '../models/mark';

@Injectable()
export class MarkService{

    apiUrl = "http://localhost:4000/marks";
    
    constructor(private http: HttpClient){
    }

    getData(){
       return this.http.get<Mark[]>(`${this.apiUrl}`);
    }

    addData(objMark){
        return this.http.post<Mark>(`${this.apiUrl}`,objMark)
    }

    updateData(mark){
        return this.http.put<Mark[]>(`${this.apiUrl}/${mark.id}`,mark);
    }

    deleteData(id){
        return this.http.delete(`${this.apiUrl}/${id}`);    
    }
}
