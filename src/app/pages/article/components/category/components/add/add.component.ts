import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { EmailValidator, EqualPasswordsValidator } from '../../../../../../theme/validators';

@Component({
  selector: 'article-category-add',
  template: require('./add.html')
})

export class ArticleCategoryAdd {

  @Input() categories;
  @Input() submiting:boolean;
  @Output() submitCategory:EventEmitter<any> = new EventEmitter();

  public form:FormGroup;
  public name:AbstractControl;
  public slug:AbstractControl;
  public pid:AbstractControl;
  public description:AbstractControl;

  constructor(fb:FormBuilder) {

    this.form = fb.group({
      'name': ['', Validators.compose([Validators.required])],
      'slug': ['', Validators.compose([Validators.required])],
      'pid': ['', Validators.compose([])],
      'description': ['', Validators.compose([])]
    });

    this.name = this.form.controls['name'];
    this.slug = this.form.controls['slug'];
    this.pid = this.form.controls['pid'];
    this.description = this.form.controls['description'];
  }

  public onSubmit(category:Object):void {
    if (this.form.valid) this.submitCategory.emit(category);
  }
}
