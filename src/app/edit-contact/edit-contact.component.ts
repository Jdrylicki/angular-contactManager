import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Contact } from '../contact';
import { RoutingService, EditorType } from '../routing.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
@Input() inputContact: Contact;
@Output() editorEvent = new EventEmitter<EditorType>();
editor: EditorType;
contact: Contact = this.inputContact;
  constructor(private routingService: RoutingService) { }

  ngOnInit() {
  }
cancel(text: EditorType){
    this.editor = text;
    this.editorEvent.emit(this.editor);
    }
}