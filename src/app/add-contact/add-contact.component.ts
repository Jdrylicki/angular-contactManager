import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RoutingService, EditorType } from '../routing.service';
import { Contact } from '../contact'; 
import { ContactService } from '../contact.service';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
@Output() editorEvent = new EventEmitter<EditorType>();
  editor: EditorType;

save(first: string, last: string, phone: string, e: string):void{
  first = first.trim();
    last = last.trim();
    phone = phone.trim();
    e = e.trim();
    if(!first || !last || !phone || !e){
      return;
    }
  let newContact: Contact = {
  firstName: first,
  lastName: last,
  phoneNum: phone,
  email: e
};
 this.contactService.addContact(newContact);
 this.cancel('list');
}

  constructor(private routingService: RoutingService,
  private contactService: ContactService) { }

  ngOnInit() {
  }
    cancel(text: EditorType){
    this.editor = text;
    this.editorEvent.emit(this.editor);
    }
}