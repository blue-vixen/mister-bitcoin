import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {

  contact: Contact
  constructor(private contactService: ContactService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //Getting contact through resolver
    this.route.data.subscribe(({ contact }) => {
      this.contact = contact._id ? contact : this.contactService.getEmptyContact() as Contact
    })

    // Getting contact from params
    // this.route.params.subscribe(async ({ id }) => {
    //   this.contact = id ? await this.contactService.getContactById(id).toPromise() : this.contactService.getEmptyContact() as Contact
    // })
  }

  async onSaveContact() {
    await this.contactService.saveContact(this.contact)
    this.router.navigateByUrl('contact')
  }


  onGoBack() {
    this.router.navigateByUrl('contact')
  }

}
