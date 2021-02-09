import { NgModule } from "@angular/core";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    imports : [
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatButtonModule
    ],
    exports : [
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatButtonModule
    ]
})
export class MaterialModule {}