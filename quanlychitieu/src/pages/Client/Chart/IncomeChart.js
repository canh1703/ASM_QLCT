


import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const IncomeChart = () => {
    const data = {
        labels: ['Lương', 'Tiết kiệm'],
        datasets: [
            {
                label: 'Thống kê thu nhập và chi tiêu',
                data: [1200000, 2500000],
                backgroundColor: [
                    '#A6CEE3',  
                    '#FDB5B5',  
                    '#FFE2A1',  
                    '#B2DFDB', 
                    '#C5E1A5'   ],
                    hoverBackgroundColor: [ 
                        '#A6CEE3',  
                        '#FDB5B5',  
                        '#FFE2A1',  
                        '#B2DFDB', 
                        '#C5E1A5' ]
            }
        ]
    };

    const options = {
        plugins: {
            datalabels: {
                color: '#fff',
                formatter: (value, context) => {
                    const total = context.chart._metasets[0].total;
                    const percentage = ((value / total) * 100).toFixed(2) + '%';
                    return percentage;
                },
                anchor: 'end',
                align: 'start',
                offset: 10
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => {
                        const label = tooltipItem.label || '';
                        const value = tooltipItem.raw || 0;
                        return `${label}: ${value}`;
                    }
                }
            }
        }
    };

    return <Pie data={data} options={options} />;
};

export default IncomeChart;
