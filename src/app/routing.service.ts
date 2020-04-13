import { Injectable } from '@angular/core';
export type EditorType = 'list' | 'add' | 'edit';

@Injectable()
export class RoutingService {

  constructor() { }
  editor: EditorType = 'list';
  get showListEditor() {
    return this.editor === 'list';
  }

  get showAddEditor() {
    return this.editor === 'add';
  }

  get showEditEditor() {
    return this.editor === 'edit';
  }
  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}