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
  },
  {
    "exchange": "NMS",
    "shortname": "Microsoft Corporation",
    "quoteType": "EQUITY",
    "symbol": "MSFT",
    "index": "quotes",
    "score": 403788.0,
    "typeDisp": "Equity",
    "longname": "Microsoft Corporation",
    "exchDisp": "NASDAQ",
    "sector": "Technology",
    "industry": "Software—Infrastructure",
    "dispSecIndFlag": true,
    "isYahooFinance": true
},
{
    "exchange": "MEX",
    "shortname": "MICROSOFT CORP",
    "quoteType": "EQUITY",
    "symbol": "MSFT.MX",
    "index": "quotes",
    "score": 20320.0,
    "typeDisp": "Equity",
    "longname": "Microsoft Corporation",
    "exchDisp": "Mexico",
    "sector": "Technology",
    "industry": "Software—Infrastructure",
    "isYahooFinance": true
},
{
    "exchange": "GER",
    "shortname": "MICROSOFT CORP",
    "quoteType": "EQUITY",
    "symbol": "MSF.DE",
    "index": "quotes",
    "score": 20216.0,
    "typeDisp": "Equity",
    "longname": "Microsoft Corporation",
    "exchDisp": "XETRA",
    "sector": "Technology",
    "industry": "Software—Infrastructure",
    "isYahooFinance": true
},
{
    "exchange": "FRA",
    "shortname": "MICROSOFT CORP",
    "quoteType": "EQUITY",
    "symbol": "MSF.F",
    "index": "quotes",
    "score": 20051.0,
    "typeDisp": "Equity",
    "longname": "Microsoft Corporation",
    "exchDisp": "Frankfurt",
    "sector": "Technology",
    "industry": "Software—Infrastructure",
    "isYahooFinance": true
},
{
    "exchange": "BUE",
    "shortname": "MICROSOFT CORP",
    "quoteType": "EQUITY",
    "symbol": "MSFT.BA",
    "index": "quotes",
    "score": 20025.0,
    "typeDisp": "Equity",
    "longname": "Microsoft Corporation",
    "exchDisp": "Buenos Aires",
    "sector": "Technology",
    "industry": "Software—Infrastructure",
    "isYahooFinance": true
},
{
    "exchange": "SAO",
    "shortname": "MICROSOFT   DRN",
    "quoteType": "EQUITY",
    "symbol": "MSFT34.SA",
    "index": "quotes",
    "score": 20018.0,
    "typeDisp": "Equity",
    "longname": "Microsoft Corporation",
    "exchDisp": "São Paulo",
    "sector": "Technology",
    "industry": "Software—Infrastructure",
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
