<template>
  <div class="content">
      <div @click="close()" class='fixed-header'>
          <md-icon>keyboard_arrow_right</md-icon>
      </div>

    <div class='report-body'>
        <table class="table border-bottom-none">
          <thead>
            <tr>
              <th scope="">
                  <img src="@/assets/img/logo.gif" />
              </th>
              <th scope="" colspan="4" style="text-transform:uppercase">{{ report.title }}</th>
              <th scope="">
                  <img src="@/assets/img/report_images/tnb-logo.png" alt="">
              </th>
            </tr>
          </thead>
          <tbody class='border-bottom-none'>
            <tr>
              <th scope="">Feeder Name</th>
              <td colspan="5">{{ report.feeder_name }}</td>
            </tr>
            <tr>
              <th scope="" style="width:15%">Pole No</th>
              <td style="width:22%">{{ report.pole_no }}</td>
              <th scope="" style="width:15%">Ambient Temp</th>
              <td style="width:22%">28.0 &deg;c</td>
              <th scope="" style="width:15%">Date</th>
              <td style="width:18%">24/06/2019</td>
            </tr>
            <tr>
              <th scope="">Pole Type</th>
              <td>{{ report.pole_type}}</td>
              <th scope="">Rating</th>
              <td>415V</td>
              <th scope="">Time</th>
              <td>10:38 pm</td>
            </tr>
            <tr>
              <th scope="">Equipment</th>
              <td>BLACK BOX</td>
              <th scope="">Phase</th>
              <td>THREE PHASE</td>
              <th scope="">Humidity</th>
              <td>65.0%</td>
            </tr>
            <tr>
              <th scope="">Coordinate</th>
              <td colspan="5">2.867404, 101.677559</td>
            </tr>
          </tbody>
        </table>
    
        <table class="table">
            <thead>
                <tr>
                    <th scope="">IR IMAGE</th>
                    <th scope="">VISUAL IMAGE</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <img src="@/assets/img/report_images/ir-1.png" alt="">
                    </td>
                    <td>
                        <img src="@/assets/img/report_images/vs-1.png" alt="">
                    </td>
                </tr>
                <tr>
                    <td>
                        <table class='table-mini'>
                            <thead>
                                <th scope="">PARAMETER</th>
                                <th scope="">VALUE</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Sp1 Spot Temp</td>
                                    <td>69.0 &#176;c</td>
                                </tr>
                                <tr>
                                    <td>Sp2 Spot Temp</td>
                                    <td>30.9 &deg;c</td>
                                </tr>
                                <tr>
                                    <td>Dt1 Delta T</td>
                                    <td>38.1 &deg;c</td>
                                </tr>
                                <tr>
                                    <td>SEVERITY</td>
                                    <td style='background-color:yellow'>SERIOUS</td>
                                </tr>
                            </tbody>
                        </table>
    
                        <br>
                        <table class="table-mini">
                            <thead>
                                <tr>
                                    <td style="background-color:lightgrey">Severity</td>
                                    <td style="width:20%; background-color:lightblue">Low</td>
                                    <td style="width:20%; background-color:lightgreen">Minor</td>
                                    <td style="width:20%; background-color:yellow">Serious</td>
                                    <td style="width:20%; background-color:red">Critical</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="background-color:lightgrey">Same Component (&deg;c)</td>
                                    <td>1-10</td>
                                    <td>11-20</td>
                                    <td>21-40</td>
                                    <td>>40</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                    <td>
                        <img src="@/assets/img/report_images/vs-2.png" alt="">
                        </td>
                </tr>
            </tbody>
        </table>
    
        <table class="table">
            <thead>
                <tr>
                    <th colspan="2" scope="">Analysis And Recommendation</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="" style="width:180px">Analysis</th>
                    <td>{{ report.analysis_and_recommendations.analysis}}</td>
                </tr>
                <tr>
                    <th scope="">Condition</th >
                    <td style="background-color:yellow">{{ report.analysis_and_recommendations.condition.text }}</td>
                </tr>
                <tr>
                    <th scope="">Recommendation</th>
                    <td>
                        <ol>
                            <li v-for="item in report.analysis_and_recommendations.recommendation.text">{{ item }}</li>
                        </ol>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        close: function(){
            document.getElementsByClassName('mini-report')[0].style.display = 'none'
        }
    },
  data() {
    return {
      report: {
        title: "quick scanning report savr P.0 : 40948534",
        feeder_name: "JALAN EMAS 3",
        pole_no: "JE 3/4/1",
        pole_type: "ABC",
        equipment: "BLACK BOX",
        coordinate: "2.867404, 101.677559",
        analysis_and_recommendations: {
            analysis: "Hot spot detected at black box, The anamoly due to high resistance from looseness, rust or dit increase the spot temperature",
            condition: {
                color_indicator: "yellow",
                text: "Severity SERIOUS"
            },
            recommendation: {
                text: [
                    "Disassemble, clean and reassemble the termination and fuse",
                    "Be cautious about over tightening as it can demage the contacting surface",
                    "Replace with new black box if it corroded"
                ]
            }
        }
      }
    };
  }
};
</script>

<style>
    .content {
        padding:20px;
    }
    .table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 10px;
        font-size: 0.9em
    }
    .table th, .table td {
        padding: 2px 4px;
        border: 1px solid #000
    }
    .table>tbody th {
        text-align: left
    }
    .border-bottom-none {
        border-bottom: none
    }
    .table-mini {
        width: 100%;
        padding: 1px;
        border-collapse: collapse;
        text-align: center;
        font-size: .9em
    }
    .table-mini>thead th {
        text-align: center
    }
    .table-mini th, .table-mini td {
        padding: 1px
    }
    .fixed-header {
        position: fixed;
        margin-left:-60px;
        padding: 10px 10px;
        background-color: ghostwhite;
        cursor: pointer;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }
</style>