<template>
    <div>
        <div class="md-layout report-common-header">
                <div class="md-layout-item report-border-right md-size-15">
                    <img :src="`${logo}`" />
                </div>
                <div class="md-layout-item report-border-right">INSPECTION REPORT</div>
                <div class="md-layout-item">
                    <div class="md-layout">
                        <div class="md-layout-item report-border-right">Contract No : </div>
                        <div class="md-layout-item"></div>
                    </div>
                    <div class="md-layout report-border-top">
                        <div class="md-layout-item">Title</div>
                    </div>
                    <div class="md-layout report-border-top">
                        <div class="md-layout-item report-border-right">Report No</div>
                        <div class="md-layout-item"></div>
                    </div>
                    <div class="md-layout report-border-top">
                        <div class="md-layout-item report-border-right">Page No</div>
                        <div class="md-layout-item"></div>
                    </div>
                </div>
            </div>
    </div>
</template>
<script>
export default {
    name: "report-page-header",
    data(){
        return {
            logo: require('@/assets/img/logo.gif')
        }
    }
}
</script>
