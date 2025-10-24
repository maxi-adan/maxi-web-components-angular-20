import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BadgeComponent } from './components/maxi/badge/badge.component';
import { ButtonComponent } from './components/maxi/button/button.component';
import { CheckboxComponent } from './components/maxi/checkbox/checkbox.component';
import { InputFieldComponent } from './components/maxi/input-field/input-field-component';
import { InputNumberComponent } from './components/maxi/input-number/input-number.component';
import { InputSwitchComponent } from './components/maxi/input-switch/input-switch.component';
import { NotificationsComponent } from './components/maxi/notifications/notifications.component';
import { PreloadComponent } from './components/maxi/preload/preload.component';
import { RadioComponent } from './components/maxi/radio/radio.component';
import { SidebarComponent } from './components/maxi/sidebar/sidebar.component';
import { SkeletonComponent } from './components/maxi/skeleton/skeleton.component';
import { SpinnerComponent } from './components/maxi/spinner/spinner.component';
import { TabsComponent } from './components/maxi/tabs/tabs.component';
import { TooltipComponent } from './components/maxi/tooltip/tooltip.component';
import { AutocompleteComponent } from './components/maxi/autocomplete/autocomplete.component';
import { CardComponent } from './components/maxi/card/card.component';
import { ChipsComponent } from './components/maxi/chips/chips.component';
import { DialogComponent } from './components/maxi/dialog/dialog.component';
import { DropdownComponent } from './components/maxi/dropdown/dropdown.component';
import { MultiSelectComponent } from './components/maxi/multi-select/multi-select.component';
import { PaginatorComponent } from './components/maxi/paginator/paginator.component';
import { CalendarComponent } from './components/maxi/calendar/calendar.component';
import { TableComponent } from './components/maxi/table/table.component';
import { TimelineComponent } from './components/maxi/timeline/timeline.component';
import { AccordionComponent } from './components/maxi/accordion/accordion.component';
import { CascadeMenuComponent } from './components/maxi/cascade-menu/cascade-menu.component';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    BadgeComponent,
    ButtonComponent,
    CheckboxComponent,
    InputFieldComponent,
    InputNumberComponent,
    InputSwitchComponent,
    NotificationsComponent,
    PreloadComponent,
    RadioComponent,
    SidebarComponent,
    SkeletonComponent,
    SpinnerComponent,
    TabsComponent,
    TooltipComponent,
    AutocompleteComponent,
    CardComponent,
    ChipsComponent,
    DialogComponent,
    DropdownComponent,
    MultiSelectComponent,
    PaginatorComponent,
    CalendarComponent,
    TableComponent,
    TimelineComponent,
    AccordionComponent,
    CascadeMenuComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  title = 'maxi-angular-components-test';
}
