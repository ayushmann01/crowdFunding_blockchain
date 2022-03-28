import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.css']
})
export class ContributeComponent implements OnInit {


  static selectedCompany: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selected(comapany: string) {
    // console.log(comapany);
    ContributeComponent.selectedCompany = comapany;
    this.router.navigate(['/company']);
  }

  companies = [
    {
      name: 'Lenskart.com',
      field: 'lenses',
      amount_raising: '12 crores',
      time:  '2d 24hrs 60mins.',
      objective: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestiae blanditiis a animi nostrum, magnam minima accusamus optio hic culpa.
      `
    },
    {
      name: 'Lenskart.com',
      field: 'lenses',
      amount_raising: '12 crores',
      time:  '2d 24hrs 60mins.',
      objective: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestiae blanditiis a animi nostrum, magnam minima accusamus optio hic culpa.
      `
    },
    {
      name: 'Lenskart.com',
      field: 'lenses',
      amount_raising: '12 crores',
      time:  '2d 24hrs 60mins.',
      objective: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestiae blanditiis a animi nostrum, magnam minima accusamus optio hic culpa.
      `
    },
    {
      name: 'Lenskart.com',
      field: 'lenses',
      amount_raising: '12 crores',
      time:  '2d 24hrs 60mins.',
      objective: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestiae blanditiis a animi nostrum, magnam minima accusamus optio hic culpa.
      `
    },
    {
      name: 'Lenskart.com',
      field: 'lenses',
      amount_raising: '12 crores',
      time:  '2d 24hrs 60mins.',
      objective: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestiae blanditiis a animi nostrum, magnam minima accusamus optio hic culpa.
      `
    },
    {
      name: 'Lenskart.com',
      field: 'lenses',
      amount_raising: '12 crores',
      time:  '2d 24hrs 60mins.',
      objective: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestiae blanditiis a animi nostrum, magnam minima accusamus optio hic culpa.
      `
    }
  ];

}
