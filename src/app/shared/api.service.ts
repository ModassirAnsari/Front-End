import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule}  from '@angular/common/http'
import{map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http :HttpClient) { }
  postSupplier(data :any){
    return this.http.post<any>("http://localhost:1998/suppliers",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getSupplier(){
    return this.http.get<any>("http://localhost:1998/suppliers")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  updateSupplier(data :any,id:number){
  return this.http.put<any>("http://localhost:1998/suppliers/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
 
  // ============
  getProductDetails(productId: number) {
    return this.http.get<any>(`http://localhost:1998/suppliers/${productId}`)
      .pipe(map((res: any) => {
        return res;
      }));
  }
  // ==========

    deleteSupplier(id:number){
      return this.http.delete<any>("http://localhost:1998/suppliers/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
    }
}
