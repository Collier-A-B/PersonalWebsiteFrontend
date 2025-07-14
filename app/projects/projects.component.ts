import { Component } from '@angular/core';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  readonly apiUrl = 'https://personalwebsiteapi-eehfckbda8gkavaq.eastus2-01.azurewebsites.net/GetAllProjects';

  projectsList: any[] = [];

  constructor(private service: ProjectsService){}



  ngOnInit(): void {
      this.service.GetAllProjects().subscribe({
        next: data => {
          this.projectsList = Object.values(data);
          console.log(this.projectsList);
        },
        error: error => {
          console.error("There was an error: ", error);
        }
      }
      );

  }
}
