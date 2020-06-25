import React, { Component, lazy } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import {
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row
} from 'reactstrap';
import './dashboard.css'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'

//const Widget03 = lazy(() => import('../../views/Widgets/Widget03'));

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

// Card Chart 1
const cardChartData1 = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  datasets: [
    {
      label: 'Water used on each day of the week',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,255,255,.55)',
      data: [100, 99, 100],
    },
  ],
};

const cardChartOpts1 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}


// Card Chart 2
const cardChartData2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandInfo,
      borderColor: 'rgba(255,255,255,.55)',
      data: [1, 18, 9, 17, 34, 22, 11],
    },
  ],
};

const cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 3
const cardChartData3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40],
    },
  ],
};

const cardChartOpts3 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};




// Social Box Chart

// const makeSocialBoxData = (dataSetNo) => {
//   const dataset = socialBoxData[dataSetNo];
//   const data = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [
//       {
//         backgroundColor: 'rgba(255,255,255,.1)',
//         borderColor: 'rgba(255,255,255,.55)',
//         pointHoverBackgroundColor: '#fff',
//         borderWidth: 2,
//         data: dataset.data,
//         label: dataset.label,
//       },
//     ],
//   };
//   return () => data;
// };

// const socialChartOpts = {
//   tooltips: {
//     enabled: false,
//     custom: CustomTooltips
//   },
//   responsive: true,
//   maintainAspectRatio: false,
//   legend: {
//     display: false,
//   },
//   scales: {
//     xAxes: [
//       {
//         display: false,
//       }],
//     yAxes: [
//       {
//         display: false,
//       }],
//   },
//   elements: {
//     point: {
//       radius: 0,
//       hitRadius: 10,
//       hoverRadius: 4,
//       hoverBorderWidth: 3,
//     },
//   },
// };

// sparkline charts




// Main Chart

//Random Numbers
// function random(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// var elements = 27;
// var data1 = [];
// var data2 = [];
// var data3 = [];

// for (var i = 0; i <= elements; i++) {
//   data1.push(random(50, 200));
//   data2.push(random(80, 100));
//   data3.push(65);
// }


// const mainChartOpts = {
//   tooltips: {
//     enabled: false,
//     custom: CustomTooltips,
//     intersect: true,
//     mode: 'index',
//     position: 'nearest',
//     callbacks: {
//       labelColor: function (tooltipItem, chart) {
//         return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
//       }
//     }
//   },
//   maintainAspectRatio: false,
//   legend: {
//     display: false,
//   },
//   scales: {
//     xAxes: [
//       {
//         gridLines: {
//           drawOnChartArea: false,
//         },
//       }],
//     yAxes: [
//       {
//         ticks: {
//           beginAtZero: true,
//           maxTicksLimit: 5,
//           stepSize: Math.ceil(250 / 5),
//           max: 250,
//         },
//       }],
//   },
//   elements: {
//     point: {
//       radius: 0,
//       hitRadius: 10,
//       hoverRadius: 4,
//       hoverBorderWidth: 3,
//     },
//   },
// };

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      energyData1: '',
      waterData1: '',
      energyData2: '',
      waterData2: '',
      energyData3: '',
      waterData3: '',
      timeStamp: '',
      timeStamp2: '',
      warning: false,
      cardenergy: 0,
      cardwater: 0,
      totalCost: 0,
      graph_energy: '',
      graph_water: ''
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }
  async componentDidMount() {
    try {
      this.getData()
      ///this.getfromApi()
      this.interval = setInterval(this.getData, 60000);
    } catch (err) {
      console.log(err.message);
    }
  }

  getData = async () => {
    await fetch(`http://localhost:5000/api/energy/p1`)
      .then(response => response.json())
      .then(energy => {
        var ene1 = []
        var ene2 = []
        var ene3 = []
        var time = []
        var time2 = []
        var wat1 = []
        var wat2 = []
        var wat3 = []
        var graph_ene = []
        var graph_wat = []
        var cardene = 0.0
        var cardwat = 0.0
        var time_temp = ''
        var lenn = energy.energy.length
        console.log(energy.energy[0])
        var i
        for (i = lenn - 12; i < lenn; i++) {
          ene1.push(energy.energy[i].Energy1 * 1000)
          wat1.push(energy.energy[i].WaterLevel1)
          ene2.push(energy.energy[i].Energy1 * 1000)
          wat2.push(energy.energy[i].WaterLevel2)
          ene3.push(energy.energy[i].Energy3 * 1000)
          wat3.push(energy.energy[i].WaterLevel3)

          time_temp = energy.energy[i].Hour + ':' + energy.energy[i].Minute

          time.push(time_temp)
          cardene = cardene + energy.energy[i].Energy1 + energy.energy[i].Energy2 + energy.energy[i].Energy3
          cardwat = cardwat + energy.energy[i].WaterLevel3 + energy.energy[i].WaterLevel2 + energy.energy[i].WaterLevel1
        }
        for (i = lenn - 7; i < lenn; i++) {
          graph_ene.push(energy.energy[i].Energy1 + energy.energy[i].Energy2 + energy.energy[i].Energy3)
          graph_wat.push(energy.energy[i].WaterLevel1 + energy.energy[i].WaterLevel2 + energy.energy[i].WaterLevel3)
          time_temp = energy.energy[i].Hour + ':' + energy.energy[i].Minute
          time2.push(time_temp)
        }
        var len = wat1.length
        //wat1[len] = 0
        if (wat1[len - 1] === 0 || wat3[len - 1] === 0 || wat2[len - 1] === 0) {
          this.setState({ warning: true })
        }
        this.setState({ timeStamp2: time2, graph_energy: graph_ene, graph_water: graph_wat, cardenergy: cardene, cardwater: cardwat, energyData1: ene1, waterData1: wat1, energyData2: ene2, waterData2: wat2, energyData3: ene3, waterData3: wat3, timeStamp: time })
      })
  }
  getfromApi = async () => {
    let myheaders = {
      "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNfaWQiOiI1NWQ0YzliZC01YzdiLTRmZjgtOGU2Yi01NGUzNzBhMGIxMjAiLCJleHAiOjE1ODc3MjA1Njh9.pnHo5s6W4WmX4unfwleaGnypXmxsbdYQoVEbZnefoVQ"
    }
    try {
      var cost = 0
      await fetch(`http://54.244.196.27/aquagen/v1/industries/DEMO1/consumption/latest?unit_id=DEMO1IU1`, {
        method: 'GET',
        headers: myheaders
      })
        .then(response => response.json())
        .then(energy1 => {
          console.log(energy1.data.total_cost)
          cost = energy1.data.total_cost
        })
      this.setState({ totalCost: cost })
    } catch (err) {
      console.log(err.message);
    }
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
        {/* <Row>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Total Energy Consumed</p>
                      <CardTitle tag="p">1500</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fas fa-sync-alt" /> Update Now
                  </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-money-coins text-success" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Energy Saved</p>
                      <CardTitle tag="p">1345</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="far fa-calendar" /> Last day
                  </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-vector text-danger" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Hours used</p>
                      <CardTitle tag="p">20</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="far fa-clock" /> In the last hour
                  </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-time-alarm text-primary" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Last Hour</p>
                      <CardTitle tag="p">65</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fas fa-sync-alt" /> Update now
                  </div>
              </CardFooter>
            </Card>
          </Col>
        </Row> */}
        <Row>
          <Col xs="12" sm="6" lg="3">
            {!this.state.warning && (<Card className="text-white bg-success">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <ButtonDropdown id='card4' isOpen={this.state.card4} toggle={() => { this.setState({ card4: !this.state.card4 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
                <div className="text-value">Status Card</div>
                <div>No Issues</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                {/* <Bar data={{
                  labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                  datasets: [
                    {
                      label: 'My First dataset',
                      backgroundColor: 'rgba(255,255,255,.3)',
                      borderColor: 'transparent',
                      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98],
                    },
                  ],
                }} options={cardChartOpts4} height={10} /> */}
                Everything is Under Control
              </div>
            </Card>)}
            {this.state.warning && (<Card className="text-white bg-danger">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <ButtonDropdown id='card4' isOpen={this.state.card4} toggle={() => { this.setState({ card4: !this.state.card4 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
                <div className="text-value">Status Card</div>
                <div>Warning!!!</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                {/* <Bar data={{
                  labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                  datasets: [
                    {
                      label: 'My First dataset',
                      backgroundColor: 'rgba(255,255,255,.3)',
                      borderColor: 'transparent',
                      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98],
                    },
                  ],
                }} options={cardChartOpts4} height={10} /> */}
                Dry Run
              </div>
            </Card>)}
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <ButtonDropdown id='card1' isOpen={this.state.card1} toggle={() => { this.setState({ card1: !this.state.card1 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    {/* <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem disabled>Disabled action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu> */}
                  </ButtonDropdown>
                </ButtonGroup>
                <div className="text-value">{this.state.cardenergy} Units</div>
                <div>Total Energy Consumption</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={{
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                    {
                      label: 'My First dataset',
                      backgroundColor: brandInfo,
                      borderColor: 'rgba(255,255,255,.55)',
                      data: this.state.graph_energy,
                    },
                  ],
                }} options={{
                  tooltips: {
                    enabled: false,
                    custom: CustomTooltips
                  },
                  maintainAspectRatio: false,
                  legend: {
                    display: false,
                  },
                  scales: {
                    xAxes: [
                      {
                        gridLines: {
                          color: 'transparent',
                          zeroLineColor: 'transparent',
                        },
                        ticks: {
                          fontSize: 2,
                          fontColor: 'transparent',
                        },

                      }],
                    yAxes: [
                      {
                        display: false,
                        ticks: {
                          display: false,
                          min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
                          max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
                        },
                      }],
                  },
                  elements: {
                    line: {
                      tension: 0.00001,
                      borderWidth: 1,
                    },
                    point: {
                      radius: 4,
                      hitRadius: 10,
                      hoverRadius: 4,
                    },
                  },
                }} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-primary">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown id='card2' isOpen={this.state.card2} toggle={() => { this.setState({ card2: !this.state.card2 }); }}>
                    <DropdownToggle className="p-0" color="transparent">
                      <i className="icon-location-pin"></i>
                    </DropdownToggle>
                    {/* <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu> */}
                  </Dropdown>
                </ButtonGroup>
                <div className="text-value">{this.state.cardwater} Units</div>
                <div>Water Consumption Every Day</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={{
                  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                  datasets: [
                    {
                      label: 'My First dataset',
                      backgroundColor: brandPrimary,
                      borderColor: 'rgba(255,255,255,.55)',
                      data: this.state.graph_water,
                    },
                  ],
                }} options={cardChartOpts1} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-warning">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown id='card3' isOpen={this.state.card3} toggle={() => { this.setState({ card3: !this.state.card3 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </ButtonGroup>
                <div className="text-value">13.556 Units</div>
                <div>Average Power Consumed</div>
              </CardBody>
              <div className="chart-wrapper" style={{ height: '70px' }}>
                <Line data={cardChartData3} options={cardChartOpts3} height={70} />
              </div>
            </Card>
          </Col>


        </Row>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col sm="5">
                    <CardTitle className="mb-0">Power Consumed</CardTitle>
                    <div className="small text-muted">April 2020</div>
                  </Col>
                  <Col sm="7" className="d-none d-sm-inline-block">
                    <Button color="primary" className="float-right"><i className="icon-cloud-download"></i></Button>
                    <ButtonToolbar className="float-right" aria-label="Toolbar with button groups">
                    </ButtonToolbar>
                  </Col>
                </Row>
                <div className="chart-wrapper" style={{ height: 500 + 'px', marginTop: 40 + 'px' }}>
                  <Line data={{
                    labels: this.state.timeStamp,
                    datasets: [
                      {
                        label: 'Water Pumping',
                        backgroundColor: hexToRgba(brandInfo, 10),
                        borderColor: brandInfo,
                        pointHoverBackgroundColor: '#fff',
                        borderWidth: 2,
                        data: this.state.energyData1,
                      },
                      {
                        label: 'Water Treatment',
                        backgroundColor: hexToRgba(brandWarning, 10),
                        borderColor: brandWarning,
                        pointHoverBackgroundColor: '#fff',
                        borderWidth: 2,
                        // borderDash: [8, 5],
                        data: this.state.energyData2,
                      },

                      {
                        label: 'Water Recycling',
                        backgroundColor: hexToRgba(brandSuccess, 10),
                        borderColor: brandSuccess,
                        pointHoverBackgroundColor: '#fff',
                        borderWidth: 2,
                        // borderDash: [8, 5],
                        data: this.state.energyData3,
                      },
                    ],
                  }}
                    options={{
                      tooltips: {
                        enabled: false,
                        custom: CustomTooltips,
                        intersect: true,
                        mode: 'index',
                        position: 'nearest',
                        callbacks: {
                          labelColor: function (tooltipItem, chart) {
                            return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
                          }
                        }
                      },
                      maintainAspectRatio: false,
                      legend: {
                        display: false,
                      },
                      scales: {
                        xAxes: [
                          {
                            gridLines: {
                              drawOnChartArea: false,
                            },
                          }],
                        yAxes: [
                          {
                            ticks: {
                              beginAtZero: true,
                              maxTicksLimit: 5,
                              stepSize: Math.ceil(500 / 5),
                              max: 500,
                            },
                          }],
                      },
                      elements: {
                        point: {
                          radius: 0,
                          hitRadius: 10,
                          hoverRadius: 4,
                          hoverBorderWidth: 3,
                        },
                      },
                    }
                    } height={500} />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Energy Comparison</CardTitle>
                <p className="card-category"></p>
              </CardHeader>
              <CardBody>
                <Pie
                  data={canvas => {
                    return {
                      labels: [1, 2, 3],
                      datasets: [
                        {
                          label: "Emails",
                          pointRadius: 0,
                          pointHoverRadius: 0,
                          backgroundColor: ["#4acccd", "#fcc468", "#ef8157"],
                          borderWidth: 0,
                          data: [342, 480, 530]
                        }
                      ]
                    };
                  }}

                  options={{
                    legend: {
                      display: false
                    },

                    pieceLabel: {
                      render: "percentage",
                      fontColor: ["white"],
                      precision: 2
                    },

                    tooltips: {
                      enabled: false
                    },

                    scales: {
                      yAxes: [
                        {
                          ticks: {
                            display: false
                          },
                          gridLines: {
                            drawBorder: false,
                            zeroLineColor: "transparent",
                            color: "rgba(255,255,255,0.05)"
                          }
                        }
                      ],

                      xAxes: [
                        {
                          barPercentage: 1.6,
                          gridLines: {
                            drawBorder: false,
                            color: "rgba(255,255,255,0.1)",
                            zeroLineColor: "transparent"
                          },
                          ticks: {
                            display: false
                          }
                        }
                      ]
                    }
                  }}
                />
              </CardBody>
              <CardFooter>
                <div className="legend">
                  <i className="fa fa-circle text-primary" /> Water Treatment {" "}
                  <i className="fa fa-circle text-warning" /> Water Pumping{" "}
                  <i className="fa fa-circle text-danger" /> Water Recycling{" "}
                </div>
                <hr />
                <div className="stats">
                  <i className="fa fa-calendar" />
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col md="8">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h5"></CardTitle>
                <p className="card-category">Line Chart of Power Consumer VS. Water Consumed</p>
              </CardHeader>
              <CardBody>
                <Line
                  key={Math.random()}
                  data={{
                    // labels: [
                    //   "Mon",
                    //   "Tue",
                    //   "Wed",
                    //   "Thu",
                    //   "Fri",
                    //   "Sat",
                    //   "Sun",
                    // ],
                    labels: this.state.timeStamp2,
                    datasets: [
                      {
                        data: this.state.graph_energy,
                        fill: false,
                        borderColor: "#fbc658",
                        backgroundColor: "transparent",
                        pointBorderColor: "#fbc658",
                        pointRadius: 4,
                        pointHoverRadius: 4,
                        pointBorderWidth: 8
                      },
                      {
                        data: this.state.graph_water,
                        fill: false,
                        borderColor: "#51CACF",
                        backgroundColor: "transparent",
                        pointBorderColor: "#51CACF",
                        pointRadius: 4,
                        pointHoverRadius: 4,
                        pointBorderWidth: 8
                      }
                    ]
                  }

                  }
                  options={{
                    legend: {
                      display: false,
                      position: "top"
                    }
                  }}
                  width={400}
                  height={100}
                />
              </CardBody>
              <CardFooter>
                <div className="chart-legend">
                  <i className="fa fa-circle text-warning" /> Energy Consumption{" "}
                  <i className="fa fa-circle text-primary" /> Water Comsumption{" "}

                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>

        {/* <Row>
          <Col>
            <Card>
              <CardHeader>
                Water Consumption
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12" md="6" xl="6">
                    <hr className="mt-0" />
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                          Monday
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="info" value="34" />
                        <Progress className="progress-xs" color="danger" value="78" />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                          Tuesday
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="info" value="56" />
                        <Progress className="progress-xs" color="danger" value="94" />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                          Wednesday
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="info" value="12" />
                        <Progress className="progress-xs" color="danger" value="67" />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                          Thursday
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="info" value="43" />
                        <Progress className="progress-xs" color="danger" value="91" />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                          Friday
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="info" value="22" />
                        <Progress className="progress-xs" color="danger" value="73" />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                          Saturday
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="info" value="53" />
                        <Progress className="progress-xs" color="danger" value="82" />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                          Sunday
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="info" value="9" />
                        <Progress className="progress-xs" color="danger" value="69" />
                      </div>
                    </div>
                    <div className="legend text-center">
                      <small>
                        <sup className="px-1"><Badge pill color="info">&nbsp;</Badge></sup>
                        Water Consumed
                        &nbsp;
                        <sup className="px-1"><Badge pill color="danger">&nbsp;</Badge></sup>
                        Water at the starting of the day
                      </small>
                    </div>
                  </Col>
                  <Col xs="12" md="6" xl="6">
                    <Col sm="6">
                      <div className="callout callout-warning">
                        <small className="text-muted">Number of people in the apartment</small>
                        <br />
                        <strong className="h4">56</strong>
                        <div className="chart-wrapper">
                          <Line data={makeSparkLineData(2, brandWarning)} options={sparklineChartOpts} width={100} height={30} />
                        </div>
                      </div>
                    </Col>
                    <Col sm="6">
                      <div className="callout callout-success">
                        <small className="text-muted">Average Consumption</small>
                        <br />
                        <strong className="h4">300 Gallons</strong>
                        <div className="chart-wrapper">
                          <Line data={makeSparkLineData(3, brandSuccess)} options={sparklineChartOpts} width={100} height={30} />
                        </div>
                      </div>
                    </Col>
                    <hr className="mt-0" />
                  </Col>
                </Row>

                <br />
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                    <tr>
                      <th className="text-center"><i className="icon-people"></i></th>
                      <th>Manager</th>
                      <th>Usage</th>
                      <th>Activity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">
                        <div className="avatar">
                          <img src={'assets/img/avatars/1.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                          <span className="avatar-status badge-success"></span>
                        </div>
                      </td>
                      <td>
                        <div>Meghna Kashyap</div>
                        <div className="small text-muted">
                          <span>New</span> | Registered: Jan 1, 2015
                      </div>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>50%</strong>
                          </div>
                        </div>
                        <Progress className="progress-xs" color="success" value="50" />
                      </td>
                      <td>
                        <div className="small text-muted">Last login</div>
                        <strong>10 sec ago</strong>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row> */}
      </div>
    );
  }
}

export default Dashboard;
