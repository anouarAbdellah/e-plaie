import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'argon-dashboard-angular';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('fr');
    
    // Use French for translations
    this.translate.use('fr');
  }
}
