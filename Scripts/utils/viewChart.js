let pieCtx = $("#viewPieChart");
let lineCtx = $("#viewLineChart");



$(document).ready(() => {
    PopulatePieChartData().done((chartInfo) => {
        viewPieChart.data.labels = chartInfo.siteList;
        viewPieChart.data.datasets[0].data = chartInfo.viewList;
        viewPieChart.update();
    });

    PopulateLineChartData().done((chartInfo) => {
        viewLineChart.data.labels = chartInfo.labels;
        viewLineChart.data.datasets[0].data = chartInfo.data
        viewLineChart.update();
    });

});

let viewPieChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: ["rgba(0,0,0,0.8)", "rgba(0,0,0,0.6)", "rgba(0,0,0,0.4)", "rgba(0,0,0,0.3)", "rgba(0,0,0,0.2)", "rgba(0,0,0,0.1)"]
        }]
    },
    options: {
        legend: {
            labels: {
                fontColor: 'white'
            }
        },
        responsive: false
    }
});

let viewLineChart = new Chart(lineCtx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: "Views",
            data: [],
            backgroundColor: ["rgba(0,0,0,0.6)"]
        }]
    },
    options: {
        legend: {
            labels: {
                fontColor: 'white'
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontColor: 'white'
                },
            }],
            xAxes: [{
                ticks: {
                    fontColor: 'white'
                },
            }]
        },
        responsive: false
    }
})




function PopulatePieChartData() {
    return GetPieChartData().then((chartData) => {
        let siteList = [];
        let viewList = [];
        chartData.siteslist.forEach((site) => { siteList.push(site) })
        chartData.viewslist.forEach((view) => { viewList.push(view)})

        return {
            siteList: siteList,
            viewList: viewList
        }
    },
        (xhr) => {
            console.log(xhr.responseText);
        });
}

function PopulateLineChartData() {
    return GetLineChartData().then((chartData) => {
        let labels = [];
        let data = [];
        chartData.Labels.forEach((label) => { labels.push(label) });
        chartData.Data.forEach((record) => { data.push(record) });
        return {
            labels: labels,
            data: data
        };
    },
        (xhr) => {
            console.log(xhr.responseText);
        });
}



function GetPieChartData() {
    return $.ajax({
        url: '/Home/GetPieChartData',
        data: {}
    });
}

function GetLineChartData() {
    return $.ajax({
        url: '/Home/GetLineChartData',
        data: {}
    })
}
