import { Component, signal } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { UserInputComponent } from "./components/user-input/user-input.component";
// import { InvestmentData } from "./classes/investment-data";
// import { FormsModule } from '@angular/forms';
// import { InvestmentResult } from './classes/investment-result';
import { ResultComponent } from "./components/result/result.component";
// import {SignalsComponent } from "./components/signals/signals.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, ResultComponent],
})
export class AppComponent {

  //investmentResult :InvestmentResult[] = [];

 // investmentResult = signal<InvestmentResult[]>([]);


  //annualData: InvestmentResult[] = [];


//  constructor() {
//   this.investmentResult = new InvestmentResult();
//  }

//   onCalculateInvestmentResults(investmentData: InvestmentData) { 
//   const initialInvestment = investmentData.initialInvestment;
//   const annualInvestment = investmentData.annualInvestment;
//   const expectedReturn = investmentData.expectedReturn;
//   const duration = investmentData.duration;

//   const annualData = [];
//   let investmentValue = initialInvestment;

//   for (let i = 0; i < duration; i++) {
//     const year = i + 1;
//     const interestEarnedInYear = investmentValue * (expectedReturn / 100);
//     investmentValue += interestEarnedInYear + annualInvestment;
//     const totalInterest =
//       investmentValue - annualInvestment * year - initialInvestment;
//     annualData.push({
//       year: year,
//       interest: interestEarnedInYear,
//       valueEndOfYear: investmentValue,
//       annualInvestment: annualInvestment,
//       totalInterest: totalInterest,
//       totalAmountInvested: initialInvestment + annualInvestment * year,
//     });
//   }
//   console.log('Annual Data:');
//   //add data from annualData to investmentResult
//   // this.investmentResult = annualData.map(data => new InvestmentResult(
//   //   data.year,
//   //   data.interest,
//   //   data.valueEndOfYear,
//   //   data.annualInvestment,
//   //   data.totalInterest,
//   //   data.totalAmountInvested
//   // ));

//   this.investmentResult.set(annualData.map(data => new InvestmentResult(
//     data.year,
//     data.interest,
//     data.valueEndOfYear,
//     data.annualInvestment,
//     data.totalInterest,
//     data.totalAmountInvested
//   )));
//   console.log(this.investmentResult);
//   return this.investmentResult;
// }

}
