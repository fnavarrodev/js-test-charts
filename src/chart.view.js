import * as c3 from 'c3';

class ChartView {
    constructor(value) {
        this.model = value;
    }

    render() {
        document.querySelector('#charts').innerHTML += `
            <div class="chartCard">
                <div class="graph">
                    <div class="middleInfo">
                        <div class="chartName">${this.model.getName()}</div>
                        <div class="chartAmount">${this.model.getAmount().replace(/(.)(?=(\d{3})+$)/g, '$1.')}${this.model.getCurrencySymbol()}</div>
                        <div id="history-${this.model.getName()}"></div>
                    </div>
                    <div class="donutGraph" id="${this.model.getName()}"></div>
                </div>
                <div class="chartDevicesInfo">
                    <div class="device firstDevice">
                        <div class="chartDeviceName" style="color: ${this.model.getDevices()[0].hexColor}">Tablet</div>
                        <div class="chartDeviceAmount">
                            <span>${this.model.getDevices()[0].percentage}%</span>
                            <span>${this.model.getDevices()[0].amount.replace(/(.)(?=(\d{3})+$)/g, '$1.')}${this.model.getCurrencySymbol()}</span>
                        </div>
                    </div>
                    <div class="device secondDevice">
                        <div class="chartDeviceName" style="color: ${this.model.getDevices()[1].hexColor}">Smartphone</div>
                        <div class="chartDeviceAmount">
                            <span>${this.model.getDevices()[1].percentage}%</span>
                            <span>${this.model.getDevices()[1].amount.replace(/(.)(?=(\d{3})+$)/g, '$1.')}${this.model.getCurrencySymbol()}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        setTimeout(() => {
            // Donut
            const colors = {};
            colors[`${this.model.getName()}1`] = this.model.getDevices()[0].hexColor;
            colors[`${this.model.getName()}2`] = this.model.getDevices()[1].hexColor;
            const graph = c3.generate({
                bindto: `#${this.model.getName()}`,
                data: {
                    columns: [
                        [`${this.model.getName()}1`, this.model.getDevices()[0].percentage],
                        [`${this.model.getName()}2`, this.model.getDevices()[1].percentage],
                    ],
                    colors,
                    type: 'donut',
                },
                donut: {
                    width: 9,
                },
                legend: {
                    show: false,
                },
                tooltip: {
                    show: false,
                },
            });
            graph.resize({
                height: 180,
            });
            //Line graph for history data
            const historyData = ['data1'].concat(this.model.getHistoryAmounts());
            const lineGraph = c3.generate({
                bindto: `#history-${this.model.getName()}`,
                data: {
                    columns: [
                        historyData,
                    ],
                    types: {
                        data1: 'area-spline',
                    },
                    colors: {
                        data1: this.model.getDevices()[0].hexColor,
                    },
                },
                legend: {
                    show: false,
                },
                tooltip: {
                    show: false,
                },
                point: {
                    show: false,
                },
                axis: {
                    x: {
                        show: false,
                    },
                    y: {
                        show: false,
                    },
                },
            });
            lineGraph.resize({
                width: 150,
                height: 70,
            });
        }, 100);
    }
}

export {ChartView};
