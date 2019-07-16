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
            <approved-report table-header-color="green"></approved-report>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { SimpleTable, ApprovedReport } from "@/components";

export default {
  components: {
    SimpleTable,
    ApprovedReport
  }
};
</script>
