import { Injectable } from '@angular/core';






export class Customer {
  exchange!: string;
  shortname!: string;
  quoteType!: string;
  symbol!: string;
  index!: string;
  score!: number;
  typeDisp!: string;
  longname!: string;
  exchDisp!: string;
  sector!: string;
  industry!: string;
  dispSecIndFlag?: boolean;
  isYahooFinance!: boolean;
}

const customers: Customer[] = [
  {
      "exchange": "NMS",
      "shortname": "Tesla, Inc.",
      "quoteType": "EQUITY",
      "symbol": "TSLA",
      "index": "quotes",
      "score": 1831827.0,
      "typeDisp": "Equity",
      "longname": "Tesla, Inc.",
      "exchDisp": "NASDAQ",
      "sector": "Consumer Cyclical",
      "industry": "Auto Manufacturers",
      "dispSecIndFlag": true,
      "isYahooFinance": true
  },
  {
      "exchange": "NEO",
      "shortname": "TESLA, INC. CDR (CAD HEDGED)",
      "quoteType": "EQUITY",
      "symbol": "TSLA.NE",
      "index": "quotes",
      "score": 23111.0,
      "typeDisp": "Equity",
      "longname": "Tesla, Inc.",
      "exchDisp": "NEO",
      "sector": "Consumer Cyclical",
      "industry": "Auto Manufacturers",
      "isYahooFinance": true
  },
  {
      "exchange": "GER",
      "shortname": "TESLA INC",
      "quoteType": "EQUITY",
      "symbol": "TL0.DE",
      "index": "quotes",
      "score": 20650.0,
      "typeDisp": "Equity",
      "longname": "Tesla, Inc.",
      "exchDisp": "XETRA",
      "sector": "Consumer Cyclical",
      "industry": "Auto Manufacturers",
      "isYahooFinance": true
  },
  {
      "exchange": "MEX",
      "shortname": "TESLA INC",
      "quoteType": "EQUITY",
      "symbol": "TSLA.MX",
      "index": "quotes",
      "score": 20232.0,
      "typeDisp": "Equity",
      "longname": "Tesla, Inc.",
      "exchDisp": "Mexico",
      "sector": "Consumer Cyclical",
      "industry": "Auto Manufacturers",
      "isYahooFinance": true
  },
  {
      "exchange": "FRA",
      "shortname": "TESLA INC",
      "quoteType": "EQUITY",
      "symbol": "TL0.F",
      "index": "quotes",
      "score": 20231.0,
      "typeDisp": "Equity",
      "longname": "Tesla, Inc.",
      "exchDisp": "Frankfurt",
      "sector": "Consumer Cyclical",
      "industry": "Auto Manufacturers",
      "isYahooFinance": true
  }
];

@Injectable()
export class AnalystService {

  constructor() { }
  getCustomers() {
    return customers;
  }
}
