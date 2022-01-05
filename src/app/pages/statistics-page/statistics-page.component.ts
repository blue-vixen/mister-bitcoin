import { Component, OnInit } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'statistics-page',
  templateUrl: './statistics-page.component.html',
  styleUrls: ['./statistics-page.component.scss']
})
export class StatisticsPageComponent implements OnInit {

  constructor(private bitcoinService: BitcoinService) { }

  marketPriceData: any
  confirmedTransactions: any

  async ngOnInit(): Promise<any> {
    let currMarketPriceData = await this.bitcoinService.getMarketPrice().toPromise()
    let currConfirmedTransactions = await this.bitcoinService.getConfirmedTransactions().toPromise()
    this.marketPriceData = currMarketPriceData
    this.confirmedTransactions = currConfirmedTransactions
    let { values } = this.marketPriceData
    let values2 = this.confirmedTransactions.values

    const marketPriceChart = new Chart("marketPriceChart", {
      type: 'line',
      data: {

        labels: values.map((item) =>
          new Date(item.x * 1000).toLocaleDateString()
        ),
        datasets: [{
          label: this.marketPriceData.name,
          data: values.map((item) => item.y),
          backgroundColor:
            'rgba(255, 99, 132, 0.2)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    const confirmedTransactionsChart = new Chart("confirmedTransactionsChart", {
      type: 'line',
      data: {

        labels: values2.map((item) =>
          new Date(item.x * 1000).toLocaleDateString()
        ),
        datasets: [{
          label: this.confirmedTransactions.name,
          data: values2.map((item) => item.y),
          backgroundColor:
            'rgba(300, 99, 140, 0.2)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

  }

}
