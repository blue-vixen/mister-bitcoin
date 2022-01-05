import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact.model'

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {
  @Input() contact: Contact
  @Output() onRemove = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }
}
