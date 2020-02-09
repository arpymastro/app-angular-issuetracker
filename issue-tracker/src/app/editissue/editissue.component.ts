import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location, formatDate } from '@angular/common';

import { Issue } from '../issue';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-editissue',
  templateUrl: './editissue.component.html',
  styleUrls: ['./editissue.component.css']
})
export class EditissueComponent implements OnInit {
  issue: Issue;

  severities: string[] = [ "Normal", "Medium", "High" ];
  allStatus: string[] = [ "Open", "In Progress", "Closed"];
  
  constructor(
    private route: ActivatedRoute,
    private _issuseService: IssueService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getIssueById();    
  }

  editIssue(issueForm:any): void{
    var resolvedDate=null;
    if(issueForm.status == "Closed")
    {
      resolvedDate = formatDate(new Date(), 'dd-MM-yyyy hh:mm', 'en-US');
    }

    let editedIssue: Issue = {
      id: issueForm.id,
      description: issueForm.description,
      severity: issueForm.severity,
      status: issueForm.status,
      createdDate: issueForm.createdDate,
      resolvedDate: resolvedDate
    }

    this._issuseService.editIssue(editedIssue)
      .subscribe(
        () => {
          this.router.navigate(['']);
        },
        (error: any) => console.log(error)
      );
  }

  getIssueById(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this._issuseService.getIssueById(id)
     .subscribe((issue:Issue) => this.issue = issue,
      err => console.log(),
    );
  }

  goBack(): void{
    this.location.back();
  }
}