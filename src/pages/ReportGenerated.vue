<template>
  <div class="content">
    <div class="md-layout">
        <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">List of Reports To Client</h4>
            <p class="category">Reports are ready to be viewed by client</p>
          </md-card-header>
          <md-card-content>
            <client-table table-header-color="green"></client-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
    
  </div>
</template>

<script>
import { ClientTable } from "@/components";

export default {
  components: {
    ClientTable
  }
};
</script>
