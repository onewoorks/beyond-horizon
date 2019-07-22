<template>
  <div class="content">
    <div class="md-layout">
      <md-card>
        <md-card-content>
          <div class="report-template">
            <div class="header">INSPECTION REPORT</div>
            <div class="md-layout sub-header">
              <div class="md-layout-item sub-header-item">Contract No:</div>
              <div class="md-layout-item sub-header-item">Report No:</div>
              <div class="md-layout-item sub-header-item">Page No:</div>
            </div>

            <div class="report-title">
              <div>{{ cluster }}</div>
              <div>{{ report_description }}</div>
              <div>{{ date_of_inspection }}</div>
            </div>

            <div class="md-layout report-reviewer">
                <div class="md-layout-item md-size-35 report-owner">
                    <div>Beyond Horizon Technologies Sdn Bhd</div>
                    <div class="md-layout report-border-top">
                        <div class="md-layout-item">Prepared By :</div>
                        <div class="md-layout-item">Reviewed By :</div>
                    </div>
                    <div class="md-layout report-border-top">
                        <div class="md-layout-item"></div>
                        <div class="md-layout-item"></div>
                    </div>
                    <div class="md-layout">
                        <div class="md-layout-item">Name :</div>
                        <div class="md-layout-item">Name :</div>
                    </div>
                    <div class="md-layout report-border-top">
                        <div class="md-layout-item">Date : </div>
                        <div class="md-layout-item">Date : </div>
                    </div>
                </div>
                <div class="md-layout-item">
                    <div>Client Info</div>
                    <div class="md-layout report-border-top">
                        <div class="md-layout-item">Reviewed By : </div>
                        <div class="md-layout-item">Endorsed By : </div>
                        <div class="md-layout-item">Approved By : </div>
                    </div>
                    <div class="md-layout report-border-top">
                        <div class="md-layout-item">Name : </div>
                        <div class="md-layout-item">Name : </div>
                        <div class="md-layout-item">Name : </div>
                    </div>
                    <div class="md-layout report-border-top">
                        <div class="md-layout-item">Date : </div>
                        <div class="md-layout-item">Date : </div>
                        <div class="md-layout-item">Date : </div>
                    </div>
                </div>
            </div>

            <div class="report-tocc">
                <div >to : </div>
                <div>cc : </div>
            </div>

            <div v-for="(content,index) in contents" :key="index">
              <report-page-header />
              <div class="md-layout report-common-content">
                <div v-html="content.content"></div>
              </div>
            </div>

            <div v-for="(appendix, index) in appendices" :key="index">
              <report-page-header />
              <div class="md-layout report-common-content">
                <div v-for="(equipment, eid) in appendix" :key="eid">
                  <div v-if="equipment.category == 'images'">
                    <img :src="require(`@/data/Equipments/images/${equipment.data}`)" />
                  </div>

                  <div v-if="equipment.category != 'images'">{{ equipment}}</div>
                </div>
              </div>

            </div>
            
          </div>
        </md-card-content>
      </md-card>

    </div>
  </div>
</template>

<style>
.report-template {
}

.report-template .md-layout-item {
    padding:0
}

.report-template .report-border-top {
    border-top: 1px solid #999;
}
.report-template .report-border-right {
    border-right: 1px solid #999;
}

.report-template .header {
  padding: 10px;
  border: 1px solid #999;
  text-align: center;
}
.report-template .sub-header {
  width: 100%;
  border-bottom: 1px solid #999;
  border-right: 1px solid #999;
}
.report-template .sub-header-item {
  border-left: 1px solid #999;
}

.report-template .report-title {
  padding: 10px;
  text-transform: uppercase;
  text-align: center;
  margin-top: 10px;
  border: 1px solid #999;
}

.report-template .report-reviewer{
    padding: 0px !important; 
    margin-top: 10px;
    border:1px solid #999;
}

.report-template .report-reviewer .report-owner {
    border-right: 1px solid #999
}

.report-template .report-tocc {
    margin-top: 10px;
    border: 1px solid #999
}

.report-template .report-common-header {
    margin-top: 10px;
    border:1px solid #999;
}

.report-template .report-common-content {
    margin-top:10px;
    border:1px solid #999
}
</style>

<script>
import report from '@/data/report-01.json'
import { ReportPageHeader } from "@/components";

export default {
  components: {
    ReportPageHeader,
  },
  data() {
    return {
      cluster: "Cluster Title : ",
      report_description: "Report Description :",
      date_of_inspection: "Date OF INSPECTION",
      raw: report,
      contents: report.page_content,
      appendices: report.appendices
    };
  },
};
</script>
