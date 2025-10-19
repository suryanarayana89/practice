import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { InvestmentResult } from '../../classes/investment-result';
import { InvestmentServiceService } from '../../service/investment-service.service';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {

  //@Input() results: InvestmentResult[] =[];

  private investmentService = inject(InvestmentServiceService);

  get results(): InvestmentResult[] {
    return this.investmentService.investmentResult;
  }

}
