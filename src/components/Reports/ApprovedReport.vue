<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Report No">{{ item.reportNo }}</md-table-cell>
        <md-table-cell md-label="Date Of Inspection">{{ item.dateOfInspection }}</md-table-cell>
        <md-table-cell md-label="Cluster Field">{{ item.clusterField }}</md-table-cell>
        <md-table-cell md-label="Description">{{ item.description }}</md-table-cell>
        <md-table-cell md-label="Client">{{ item.client }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "approved-report",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selected: [],
      users: [
        {
          reportNo: "BH/SKO-D35/ABS/012/20",
          dateOfInspection: "28th September 2018",
          clusterField: "D35, D35PG-A",
          description: "ON-LINE REMOTELY OPERATED AERIAL VEHICLE ASSISTED INSPECTION OF FLARE TIP & FLARE BOOM",
          client: "Oud-Turnhout"
        },
        {
          reportNo: "BH/SSPC-GK/AAR/006/18",
          dateOfInspection: "24th August 2018",
          clusterField: "SARAWAK SHELL BERHAD SABAH SHELL PETROLEUM COMPANY LIMITED",
          description: "GUMUSUT KAKAP FLARE TIP INSPECTION BY ROAV",
          client: "SHELL Berhad"
        },
        {
          reportNo: "BH/SKO-MCOT/AAR/010/18",
          dateOfInspection: "2nd - 4th August 2018",
          clusterField: "SARAWAK OIL",
          description: "Remotely Operated Aerial Vehicle assisted inspection of Skimmer Plate & Roof Truss",
          client: "SARAWAK OIL"
        }
      ]
    };
  }
};
</script>
