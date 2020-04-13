import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../contact';
import { RoutingService, EditorType } from '../routing.service';
import { ContactService } from '../contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent 
implements OnInit {
  @Input() inputContact: Contact;
  @Output() editorEvent = new EventEmitter<EditorType>();
  @Output() contactEvent = new EventEmitter<Contact>();
 editor: EditorType;
 

  constructor(private routingService: RoutingService,
  private contactService: ContactService) { }
  
  editClick(text: EditorType){
    this.editor = text;
    this.editorEvent.emit(this.editor);
    this.contactEvent.emit(this.inputContact);
}

  ngOnInit() {
  }
  delete(){
    this.contactService.deleteContact(this.inputContact);
  }
}