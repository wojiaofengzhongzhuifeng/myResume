
let myChart = echarts.init(document.getElementById('main'));

let option = {
    title: {
        text: ''
    },
    legend: {
        data: ['饶家俊']
    },
    radar: [
        {
            indicator: [
                { text: 'HTML', max: 100 },
                { text: 'CSS', max: 100 },
                { text: 'JavaScript', max: 100 },
                { text: 'HTTP', max: 100 },
                { text: 'Vue', max: 100 },
            ],
            center: ['50%', '50%'],
            radius: 150,
            startAngle: 90,
            splitNumber: 5,
            shape: 'circle',
            name: {
                formatter:'【{value}】',
                textStyle: {
                    color:'#72ACD1'
                }
            },
            splitArea: {
                areaStyle: {
                    color: ['rgba(114, 172, 209, 0.2)',
                        'rgba(114, 172, 209, 0.4)', 'rgba(114, 172, 209, 0.6)',
                        'rgba(114, 172, 209, 0.8)', 'rgba(114, 172, 209, 1)'],
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 10
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            }
        },
    ],
    series: [
        {
            name: '雷达图',
            type: 'radar',
            itemStyle: {
                emphasis: {
                    // color: 各异,
                    lineStyle: {
                        width: 5
                    }
                }
            },
            data: [
                {
                    value: [60,60,70,60,60],
                    name: '饶家俊',
                    symbol: 'rect',
                    symbolSize: 5,
                    lineStyle: {
                        normal: {
                            type: 'solid'
                        }
                    }
                },
            ]
        },
    ]
}

myChart.setOption(option);
