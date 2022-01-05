import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model'
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit, OnDestroy {
  contacts: Contact[]
  contacts$: Observable<Contact[]>

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.loadContacts()
    this.contacts$ = this.contactService.contacts$
  }
  ngOnDestroy(): void {

  }

  onRemoveContact(contactId: string) {
    this.contactService.deleteContact(contactId)
  }

}
