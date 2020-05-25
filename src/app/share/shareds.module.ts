import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { AlertService } from './services/alert.service'
import { MemberService } from './services/member.service'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { ValidatorsService } from './services/validator.service'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { FooterComponent } from './components/footer/footer.component'
import { NavBarComponent } from './components/nav-bar/nav-bar.component'
import { AuthContentComponent } from './components/auth-content/auth-content.component'


@NgModule({
    declarations: [NavBarComponent, FooterComponent, AuthContentComponent],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        MatProgressBarModule,
    ],
    exports: [
        FormsModule,
        NavBarComponent,
        FooterComponent,
        ReactiveFormsModule,
        AuthContentComponent,
    ],
    providers: [AlertService, MemberService, ValidatorsService],
})
export class SharedsModule {}
