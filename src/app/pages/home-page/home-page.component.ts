import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  subscription: Subscription
  user: User
  bitcoinRate: any

  constructor(private userService: UserService, private bitcoinService: BitcoinService, private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.userService.user$.subscribe(user => this.user = user)
    // const bitcoin = await this.bitcoinService.getRate(this.user.coins).toPromise()
    // console.log(bitcoin)
    // this.bitcoinRate = bitcoin
    this.bitcoinRate = 0.00210407
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  onLogOut() {
    this.userService.logout()
    this.router.navigateByUrl('signup')
  }


}
