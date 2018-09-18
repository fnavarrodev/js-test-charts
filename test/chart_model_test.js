import {ChartModel} from '../src/chart.model';
import charts from '../src/mocks/charts.json';

describe('ChartModel', () => {
   const chartModel = new ChartModel(charts[0]);

   // this.name = chart.name;
   it('getName', () => {
       expect(chartModel.getName()).toBe('revenue');
   });
   it('getName must be string', () => {
       expect(typeof chartModel.getName()).toEqual('string');
   });
   it('getName must have a value', () => {
       expect(chartModel.getName()).not.toBeNull();
       expect(chartModel.getName()).toBeDefined();
   });
   // this.amount = chart.amount;
   it('getAmount', () => {
       expect(chartModel.getAmount()).toBe('200000');
   });
   it('getAmount must be numeric', () => {
       expect(isNaN(chartModel.getAmount())).toEqual(false);
   });
   it('getAmount must be string', () => {
       expect(chartModel.getAmount()).not.toBeNull();
       expect(chartModel.getAmount()).toBeDefined();
   });
   // this.type = chart.type;
   it('getType', () => {
       expect(chartModel.getType()).toBe('money');
   });
   it('getType must be string', () => {
       expect(typeof chartModel.getType()).toEqual('string');
   });
   it('getType must have a value', () => {
       expect(chartModel.getType()).not.toBeNull();
       expect(chartModel.getType()).toBeDefined();
   });
   // this.currency = chart.currency;
   it('getCurrency', () => {
       expect(chartModel.getCurrency()).toBe('EUR');
   });
   it('getCurrency must be string', () => {
       expect(typeof chartModel.getCurrency()).toEqual('string');
   });
   it('getCurrency must have a value', () => {
       expect(chartModel.getCurrency()).not.toBeNull();
       expect(chartModel.getCurrency()).toBeDefined();
   });
   // this.currencySymbol = chart.currencySymbol;
   it('getCurrencySymbol', () => {
       expect(chartModel.getCurrencySymbol()).toBe('€');
   });
   it('getCurrencySymbol must be string', () => {
       expect(typeof chartModel.getCurrencySymbol()).toEqual('string');
   });
   it('getCurrencySymbol must have a value', () => {
       expect(chartModel.getCurrencySymbol()).not.toBeNull();
       expect(chartModel.getCurrencySymbol()).toBeDefined();
   });
   // this.devices = chart.devices;
   it('getDevices must be an array longer than 2', () => {
       expect(chartModel.getDevices().length >= 2).toEqual(true);
   });
   // this.historyAmounts = chart.historyAmounts;
   it('getHistoryAmounts must be an array longer than 1', () => {
       expect(chartModel.getHistoryAmounts().length >= 1).toEqual(true);
   });
});
