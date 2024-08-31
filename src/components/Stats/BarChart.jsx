import React from 'react'
import Chart from 'react-apexcharts'

const BarChart = ({darkMode}) => {

    const chartConfig = {
        series: [
            {
                name: "Sales",
                data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
            },
        ],
        options: {
            chart: {
                type: "bar",
                height: 240,
                toolbar: {
                    show: false,
                },
            },
            title: {
                show: false,
            },
            dataLabels: {
                enabled: false,
            },
            colors: ["#020617"],
            plotOptions: {
                bar: {
                    columnWidth: "40%",
                    borderRadius: 2,
                },
            },
            xaxis: {
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                labels: {
                    style: {
                        colors: darkMode ? "#dddddd" : "#616161",
                        fontsize: "12px",
                        fontfamily: "inherit",
                        fontWeight: 400,
                    },
                },
                categories: [
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
            },
            yaxis: {
                labels: {
                    style: {
                        colors: darkMode ? "#dddddd" : "#616161",
                        fontsize: "12px",
                        fontfamily: "inherit",
                        fontWeight: 400,
                    },
                },
            },
            grid: {
                show: true,
                borderColor: "#o0o0o0",
                strakeDashArray: 5,
                xaxis: {
                    lines: {
                        show: true,
                    },
                },
                padding: {
                    top: 5,
                    right: 20,
                },
            },
            fill: {
                capacity: 0.8,
            },
            tootip: {
                theme: "dark",
            },
        },
    };

  return (
    <div className='px-2 pb-0'>
        <Chart options={chartConfig.options} series={chartConfig.series} type='bar' height={240} />
    </div>
  )
}

export default BarChart