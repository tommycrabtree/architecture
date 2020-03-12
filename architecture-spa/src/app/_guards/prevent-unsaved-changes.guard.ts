import { Injectable } from '@angular/core';
import { MemberEditComponent } from '../member-edit/member-edit.component';
import { CanDeactivate } from '@angular/router';

@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<MemberEditComponent> {
  canDeactivate(component: MemberEditComponent) {
    if (component.editForm.dirty) {
      return confirm('Are you sure you want to leave this page?  Any unsaved changes will be lost.');
    }
    return true;
  }
}
