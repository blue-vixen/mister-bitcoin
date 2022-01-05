import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { UtilsService } from './utils.service';

@Injectable({
    providedIn: 'root'
})

export class BitcoinService {
    constructor(private http: HttpClient, private utilsService: UtilsService) { }

    getRate(coins: Number) {
        const result = this.utilsService.load('btc')
        if (!result) {
            console.log('getting from API')
            return this.http.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
                .pipe(map((res) => {
                    this.utilsService.store('btc', res)
                    return res
                }))
        } else {
            return result
        }
    }

    getMarketPrice() {
        return this.http.get<any>('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
            .pipe(map((res) => {
                this.utilsService.store('marketPrice', res)
                return res
            }))
    }

    getConfirmedTransactions() {
        return this.http.get<any>('https://api.blockchain.info/charts/n-transactions?timespan=5months&format=json&cors=true')
            .pipe(map((res) => {
                this.utilsService.store('confirmedTrans', res)
                return res
            }))
    }

}