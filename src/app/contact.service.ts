import { Injectable } from '@angular/core';
import { CONTACTS } from './base-contacts';
import { Contact } from './contact';

@Injectable()
export class ContactService {

  constructor() { }
 addContact(contact: Contact){
   CONTACTS.push(contact);
 }

 deleteContact(contact: Contact){
   const index: number = CONTACTS.indexOf(contact);
   CONTACTS.splice(index, 1);
 }
}