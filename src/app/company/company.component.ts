import { Component, OnInit } from '@angular/core';
import {ContributeComponent} from '../contribute/contribute.component';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  selectedCompany = ContributeComponent.selectedCompany;

  constructor() { }

  ngOnInit(): void {
  }

}
