import { Component, OnInit } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular';
import { Customer, AnalystService } from '../services/analyst.service';

@Component({
  selector: 'app-analyst-page',
  templateUrl: './analyst-page.component.html',
  styleUrls: ['./analyst-page.component.css']
})
export class AnalystPageComponent implements OnInit {

  customers: Customer[];

  constructor(service: AnalystService) {
    this.customers = service.getCustomers();
  }

  ngOnInit(): void {
  }

}
