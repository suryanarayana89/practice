import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InvestmentData } from  '../../classes/investment-data';
import { InvestmentServiceService } from '../../service/investment-service.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})

export class UserInputComponent {

  investmentData!: InvestmentData;
  investmentService!: InvestmentServiceService;

  constructor(investmentService: InvestmentServiceService) {
    this.investmentService = investmentService;
  }
  
  // constructor() {
  //   this.investmentData = new InvestmentData();
  // }

  @Output() calculateEvent = new EventEmitter<InvestmentData>();

  ngOnInit() {
      // Initialize investmentData with default values if needed
      this.investmentData = new InvestmentData();
    }

    calculateInvestment() {
     // calling the service to calculate investment results
     this.investmentService.onCalculateInvestmentResults(this.investmentData);
     
     // Emit the investmentData to the parent component
     //this.calculateEvent.emit(this.investmentData);
    }


}
