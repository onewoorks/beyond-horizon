import Vue from 'vue'
import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import ReportGenerated from "@/pages/ReportGenerated.vue";
import InspectionReport from "@/pages/Reports/InspectionReport.vue";
import Equipments from '@/components/Plugins/Tiptap.vue'
import Login from '@/pages/Login'
import VueRouter from "vue-router";
import Towermap from '@/pages/Reports/Towermap'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/login",
    children: [
      {
        path: "login",
        name: "login",
        component: Login
      },
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: "reports",
        name: "Report Generated",
        component: ReportGenerated
      },
      {
        path: "reports/:report_id",
        name: "Inspection Report",
        component: InspectionReport
      },
      {
        path: "user",
        name: "User Profile",
        component: UserProfile
      },
      {
        path: "table",
        name: "Table List",
        component: TableList
      },
      {
        path: "typography",
        name: "Typography",
        component: Typography
      },
      {
        path: "icons",
        name: "Icons",
        component: Icons
      },
      {
        path: "maps",
        name: "Maps",
        meta: {
          hideFooter: true
        },
        component: Maps
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications
      },
      {
        path: "towermap",
        name: "towermap",
        component: Towermap
      }
    ]
  }
];

export default routes