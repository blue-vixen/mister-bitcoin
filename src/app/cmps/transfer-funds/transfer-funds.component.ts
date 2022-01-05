import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'transfer-funds',
  templateUrl: './transfer-funds.component.html',
  styleUrls: ['./transfer-funds.component.scss']
})
export class TransferFundsComponent implements OnInit, OnDestroy {

  amount: number = 0
  @Input() contact: Contact
  @Input() user: User
  subscription: Subscription
  answer: string


  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }


  ngOnDestroy(): void {
  }

  onTransfer() {
    if (this.amount > this.user.coins || this.amount < 0) {
      this.answer = 'You can\'t do that.'
      setTimeout(() => {
        this.answer = ''
      }, 5000)
    } else {

      this.userService.addMove(this.contact, this.amount)
      this.answer = `You successfully transferred ${this.amount} ${this.amount === 1 ? 'coin' : 'coins'} to ${this.contact.name}`
      setTimeout(() => {
        this.answer = ''
      }, 5000)
      this.amount = 0;
    }
  }
}
