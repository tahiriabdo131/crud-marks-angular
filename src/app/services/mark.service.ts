import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mark } from '../models/mark';

@Injectable()
export class MarkService{

  apiUrl = "https://fake-api-ip4o.onrender.com/api/students";
    
    constructor(private http: HttpClient){
    }

    getData(){
       return this.http.get<Mark[]>(`${this.apiUrl}`);
    }

    addData(objMark){
        return this.http.post<Mark>(`${this.apiUrl}`,objMark)
    }

    updateData(id,mark){
        return this.http.put<Mark[]>(`${this.apiUrl}/${id}`,mark);
    }

    deleteData(id){
        return this.http.delete(`${this.apiUrl}/${id}`);    
    }
}
