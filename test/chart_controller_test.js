import {ChartController} from '../src/chart.controller';

describe('ChartController', () => {
   const chartController = new ChartController();
   it('init()', () => {
       const chartController = new ChartController();
       spyOn(chartController, 'init');
       chartController.init();
       expect(chartController.init.calls.count()).toBe(1);
       expect(chartController.init).toHaveBeenCalledWith();
   });
});
