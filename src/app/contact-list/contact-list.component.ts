import { Component, OnInit,} from '@angular/core';
import { Contact } from '../contact';
import { CONTACTS } from '../base-contacts';
import { EditorType, RoutingService } from '../routing.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
editor: EditorType = 'list';
currentContact: Contact;
contacts = CONTACTS;
  constructor(private routingService: RoutingService) { }

  ngOnInit() {
  }
  
toggleEditor(text: EditorType){
  this.editor = text;
}

 get showListEditor() {
    return this.editor === 'list';
  }

  get showAddEditor() {
    return this.editor === 'add';
  }
    get showEditEditor() {
    return this.editor === 'edit';
  }

contactConnect(contact: Contact){
  this.currentContact = contact;
}

}
