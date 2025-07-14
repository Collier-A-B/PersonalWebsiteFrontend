import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private readonly apiUrl = 'https://localhost:7137/';

  constructor(private httpClient: HttpClient) { } 
  
  GetAllProjects(){
    var url: string = this.apiUrl + "GetAllProjects";
    var result = this.httpClient.get(url, {responseType: "json"});
    return result;
  }

  GetProjectNames(){
    var url: string = this.apiUrl + "GetAllProjectNames";
    var result = this.httpClient.get(url, {responseType: "json"});
    return result;
  }
  RequestProjectByName(projName: string){
    var url: string = this.apiUrl + "GetProjectByName/" + projName;
    var result = this.httpClient.get(url, {responseType: "json"});
    return result;
  }
}
