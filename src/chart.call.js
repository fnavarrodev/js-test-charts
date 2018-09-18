import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import charts from './mocks/charts.json';

const mockAxios = axios.create();
const mock = new MockAdapter(mockAxios, {delayResponse: 300});

mock.onGet(/\/charts/).reply(() => [200, {
    charts,
}]);

const ChartCall = {
    async getCharts() {
        const url = '/charts';
        const chartData = await mockAxios.get(url);
        return chartData;
    },
};

export {ChartCall};
