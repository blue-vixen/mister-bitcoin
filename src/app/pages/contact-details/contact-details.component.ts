import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user.model';
import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit, OnDestroy {

  subscription: Subscription
  userSubscription: Subscription
  contact: Contact
  user: User
  constructor(private contactService: ContactService, private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  async ngOnInit(): Promise<void> {

    //One way of getting contact by params - observing the params
    // this.subscription = this.route.params.subscribe(async params => {
    //   const contact = await this.contactService.getContactById(params['id']).toPromise()
    //   this.contact = contact
    // })

    //Second way of getting contact by params: creating a new observable when getting new params.id 
    // this.subscription = this.route.params.pipe(mergeMap((params) => this.contactService.getContactById(params['id'])))
    //   .subscribe(contact => {
    //     this.contact = contact
    //   })

    //Third way of getting contact - through custom resolver
    this.subscription = this.route.data.subscribe(data => {
      this.contact = data['contact']
    })
    this.userSubscription = this.userService.user$.subscribe(user => this.user = user);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  onGoBack() {
    this.router.navigateByUrl('contact')
  }

}
