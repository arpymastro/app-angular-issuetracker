import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location, formatDate } from '@angular/common';

import { Issue } from '../issue';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-addissue',
  templateUrl: './addissue.component.html',
  styleUrls: ['./addissue.component.css']
})
export class AddissueComponent implements OnInit {

  severities: string[] = [ "Normal", "Medium", "High" ];
  allStatus: string[] = [ "Open", "In Progress", "Closed"];

  constructor(
    private route: ActivatedRoute,
    private _issuseService: IssueService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {

  }

  addIssue(issueForm:any): void{
    let newIssue: Issue = {
      id: NaN,
      description: issueForm.description,
      severity: issueForm.severity,
      status: issueForm.status,
      createdDate: formatDate(new Date(), 'dd-MM-yyyy hh:mm', 'en-US'),
      resolvedDate: null
    }

    console.log("New Issue", newIssue);
    this._issuseService.addIssue(newIssue)
      .subscribe(
        () => {
          this.router.navigate(['']);
        },
        (error: any) => console.log(error)
      );
  }
}
