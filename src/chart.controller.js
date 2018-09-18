import {ChartModel} from './chart.model';
import {ChartView} from './chart.view';
import {ChartCall} from './chart.call';
import {BaseLayoutView} from './baseLayout.view';

class ChartController {
    async init() {
        const chartsResponse = await ChartCall.getCharts();
        const charts = chartsResponse.data.charts;
        BaseLayoutView.render();
        charts.forEach((chart) => {
            this.chartModel = new ChartModel(chart);
            this.chartView = new ChartView(this.chartModel);
            this.chartView.render();
        });
    }
}

export {ChartController};
