import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { InvestmentResult } from '../../classes/investment-result';
import { InvestmentServiceService } from '../../service/investment-service.service';


@Component({
  selector: 'app-result',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {

  @Input() results: InvestmentResult[] =[];

  



}
