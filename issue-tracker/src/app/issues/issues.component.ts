import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Issue } from '../issue';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {
  
  issues: Issue[];
  severities: string[] = [ "Normal", "Medium", "High" ];
  allStatus: string[] = [ "Open", "In Progress", "Closed"];

  constructor(
    private _issueService: IssueService,
    private router: Router
  ) { }
  
  ngOnInit() {
    this.getIssues();
  }

  getIssues(){
    this._issueService.getIssues()
      .subscribe((issues:any) => this.issues = issues,
        err => console.log());
  }

  deleteIssue(issueId: number){
    this._issueService.deleteIssue(issueId)
      .subscribe(
        () => {
          this.getIssues()
        },
        (error:any) => console.log(error)
      );
  }

  statusChange(statusSearch){
    this._issueService.getIssuesByStatus(statusSearch)
      .subscribe((issues:any) => this.issues = issues,
        err => console.log());
  }

  severityChange(severitySearch){
    this._issueService.getIssuesBySeverity(severitySearch)
      .subscribe((issues:any) => this.issues = issues,
        err => console.log());
  }
}