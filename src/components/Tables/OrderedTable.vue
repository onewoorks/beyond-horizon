<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Performed">{{ item.salary }}</md-table-cell>
        <md-table-cell md-label="State">{{ item.country }}</md-table-cell>
        <md-table-cell md-label="Task">{{ item.city }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "ordered-table",
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
          id: 1,
          name: "Jaafar Ali",
          salary: "0",
          country: "Melaka",
          city: "TOWER CODE 1"
        },
        {
          id: 2,
          name: "Khalid Yusof",
          salary: "0",
          country: "Johor",
          city: "TOWER CODE 1"
        },
        {
          id: 3,
          name: "Halim Bakar",
          salary: "0",
          country: "Terengganu",
          city: "BLOCK B"
        },
        {
          id: 4,
          name: "Maslan Masor",
          salary: "0",
          country: "Kedah",
          city: "STATION A"
        }
      ]
    };
  }
};
</script>
