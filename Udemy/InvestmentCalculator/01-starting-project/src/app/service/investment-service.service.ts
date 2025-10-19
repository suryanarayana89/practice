import { Injectable, signal } from '@angular/core';
import { InvestmentData } from '../classes/investment-data';
import { InvestmentResult } from '../classes/investment-result';

@Injectable({
  providedIn: 'root'
})
export class InvestmentServiceService {

  investmentResult :InvestmentResult[] = [];
  

  constructor() { }

    onCalculateInvestmentResults(investmentData: InvestmentData) {  
    console.log('In Investment-Service: ');
    const initialInvestment = investmentData.initialInvestment;
    const annualInvestment = investmentData.annualInvestment;
    const expectedReturn = investmentData.expectedReturn;
    const duration = investmentData.duration;
  
    const annualData = [];
    let investmentValue = initialInvestment;
  
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
  
    this.investmentResult = annualData.map(data => new InvestmentResult(
      data.year,
      data.interest,
      data.valueEndOfYear,
      data.annualInvestment,
      data.totalInterest,
      data.totalAmountInvested
    ));
    
    console.log('Printing Investment Result: ');
    console.log(this.investmentResult);
    return this.investmentResult;
  }

}
