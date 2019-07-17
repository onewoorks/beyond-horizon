<template>
  <div>
    <md-table v-model="clients" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="No">{{ item.no }}</md-table-cell>
        <md-table-cell md-label="Code">{{ item.code }}</md-table-cell>
        <md-table-cell md-label="Client Name">{{ item.client_name }}</md-table-cell>
        <md-table-cell md-label="Number of Reports">{{ item.no_of_reports }}</md-table-cell>
        <md-table-cell>
          <router-link :to="`/reports/${item.no}`">View</router-link></md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "client-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selected: [],
      clients: [
        {
          no:  1 ,
          code: "BH00118",
          client_name: "Sarawak Shell Berhad",
          no_of_reports: "0"
        },
        {
          no: 2,
          code: "BH000211",
          client_name: "Sabah Shell Petroleum Company",
          no_of_reports: "0"
        },
        {
          no: 3,
          code: "BH0002341",
          client_name: "Petronas Carigali Sdn Bhd - Sarawak Oil Asset",
          no_of_reports: "0"
        },
        {
          no: 4,
          code: "BH00004623",
          client_name: "Petronas Carigali Sdn Bhd - Sarawak Gas Asset",
          no_of_reports: "0"
        },
        {
          no: 5,
          code: "BH00004131",
          client_name: "Petronas Carigali Sdn Bhd - Peninsula Malaysia Asset",
          no_of_reports: "0"
        }
      ]
    };
  }
};
</script>
