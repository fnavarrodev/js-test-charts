import Siema from 'siema';
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
        // CARROUSEL
        const mySiema = new Siema();
        // Add a function that generates pagination to prototype
        Siema.prototype.addPagination = function() {
            for (let i = 0; i < this.innerElements.length; i++) {
                const div = document.createElement('div');
                div.classList.add('int-bullet');
                div.addEventListener('click', () => this.goTo(i));
                this.selector.appendChild(div);
            }
        };

        // Trigger pagination creator
        mySiema.addPagination();
    }
}

export {ChartController};
