import { NgModule } from '@angular/core';
import {
    MatBadgeModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
 } from '@angular/material';

@NgModule ({
    imports: [
        MatBadgeModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule
    ],
    exports: [
        MatBadgeModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule
    ],
})

export class MaterialModule {}
