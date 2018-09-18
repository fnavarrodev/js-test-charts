import {ChartController} from './chart.controller';

const App = {
    init() {
        const chartController = new ChartController();
        chartController.init();
    },
};
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
