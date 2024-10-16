import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { library, playCircle, radio, search } from 'ionicons/icons';
import { IonicModule } from '@ionic/angular';
@Component({
  standalone: true,
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  imports: [IonicModule],
})
export class TabsComponent {
  constructor() {
    addIcons({ library, playCircle, radio, search });
  }
}
