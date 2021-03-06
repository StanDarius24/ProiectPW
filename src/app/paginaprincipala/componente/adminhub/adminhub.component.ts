import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-adminhub',
  templateUrl: './adminhub.component.html',
  styleUrls: ['./adminhub.component.css']
})
export class AdminhubComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit(): void {
  }
  mergemlaStergere()
  {
    this.router.navigate(['/sterge']).then();
  }
  mergemlaEditare()
  {
    this.router.navigate(['/editare']).then();
  }
  mergemlaCreere()
  {
    this.router.navigate(['/create']).then();
  }
  mergemlaCategorie()
  {
    this.router.navigate(['/categ']).then();
  }
}
