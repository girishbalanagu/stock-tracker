import { Component, OnInit } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular';
import { Workbook } from 'exceljs';
import { saveAs } from 'file-saver';
import { exportDataGrid } from 'devextreme/excel_exporter';
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
  onExporting(e: { component: any; cancel: boolean; }) {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('StockQuotes');

    exportDataGrid({
      component: e.component,
      worksheet,
      autoFilterEnabled: true,
    }).then(() => {
      workbook.xlsx.writeBuffer().then((buffer) => {
        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx');
      });
    });
    e.cancel = true;
  }

}
