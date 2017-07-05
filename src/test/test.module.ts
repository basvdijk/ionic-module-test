import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicPageModule } from 'ionic-angular';

import { Test } from './test';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicPageModule.forChild(Test)
    ],
    declarations: [
        Test,
    ],
    exports: [
        Test,
    ],
})
export class TestModule { }