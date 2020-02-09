import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Issue } from '../issue';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailComponent implements OnInit {

  issue: Issue;
  
  constructor(
    private route: ActivatedRoute,
    private _issuseService: IssueService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getIssueById();    
  }

  getIssueById(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this._issuseService.getIssueById(id)
     .subscribe((issue:Issue) => this.issue = issue,
      err => console.log(),
      () => {
        console.log('Reponse from service:', this.issue);
      }
    );
  }

  goBack(): void{
    this.location.back();
  }
}