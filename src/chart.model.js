class ChartModel {
    constructor(chart) {
        this.name = chart.name;
        this.amount = chart.amount;
        this.type = chart.type;
        this.currency = chart.currency;
        this.currencySymbol = chart.currencySymbol;
        this.devices = chart.devices;
        this.historyAmounts = chart.historyAmounts;
    }
    getName() {
        return this.name;
    }
    getAmount() {
        return this.amount;
    }
    getType() {
        return this.type;
    }
    getCurrency() {
        return (this.currency) ? this.currency : '';
    }
    getCurrencySymbol() {
        return (this.currencySymbol) ? this.currencySymbol : '';
    }
    getDevices() {
        return this.devices;
    }
    getHistoryAmounts() {
        return this.historyAmounts;
    }
}

export {ChartModel};
