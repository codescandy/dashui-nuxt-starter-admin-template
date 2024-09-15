<script setup>
import { GroupingRows } from "./__code";
const { avatarText } = useFormatters();
import avatar1 from "/images/avatar/avatar-1.jpg";
import avatar2 from "/images/avatar/avatar-2.jpg";
import avatar4 from "/images/avatar/avatar-4.jpg";
import avatar7 from "/images/avatar/avatar-7.jpg";
import avatar8 from "/images/avatar/avatar-8.jpg";

const userList = [
  {
    responsiveId: "",
    id: 1,
    avatar: avatar8,
    fullName: "Korrie OCrevy",
    post: "Nuclear Power Engineer",
    email: "kocrevy0@thetimes.co.uk",
    city: "Krasnosilka",
    startDate: "09/23/2016",
    salary: 23896.35,
    age: "61",
    experience: "1 Year",
    status: "Professional",
  },
  {
    responsiveId: "",
    id: 2,
    avatar: avatar1,
    fullName: "Bailie Coulman",
    post: "VP Quality Control",
    email: "bcoulman1@yolasite.com",
    city: "Hinigaran",
    startDate: "05/20/2018",
    salary: 13633.69,
    age: "63",
    experience: "3 Years",
    status: "Professional",
  },
  {
    responsiveId: "",
    id: 3,
    avatar: avatar7,
    fullName: "Stella Ganderton",
    post: "Operator",
    email: "sganderton2@tuttocitta.it",
    city: "Golcowa",
    startDate: "03/24/2018",
    salary: 13076.28,
    age: "66",
    experience: "6 Years",
    status: "Applied",
  },
  {
    responsiveId: "",
    id: 4,
    avatar: avatar8,
    fullName: "Dorolice Crossman",
    post: "Cost Accountant",
    email: "dcrossman3@google.co.jp",
    city: "Paquera",
    startDate: "12/03/2017",
    salary: 12336.17,
    age: "22",
    experience: "2 Years",
    status: "Professional",
  },
  {
    responsiveId: "",
    id: 6,
    avatar: "",
    fullName: "Genevra Honeywood",
    post: "Geologist",
    email: "ghoneywood5@narod.ru",
    city: "Maofan",
    startDate: "06/01/2017",
    salary: 17803.8,
    age: "61",
    experience: "1 Year",
    status: "Current",
  },
  {
    responsiveId: "",
    id: 7,
    avatar: "",
    fullName: "Eileen Diehn",
    post: "Environmental Specialist",
    email: "ediehn6@163.com",
    city: "Lampuyang",
    startDate: "10/15/2017",
    salary: 18991.67,
    age: "59",
    experience: "9 Years",
    status: "Rejected",
  },
  {
    responsiveId: "",
    id: 8,
    avatar: avatar7,
    fullName: "Richardo Aldren",
    post: "Senior Sales Associate",
    email: "raldren7@mtv.com",
    city: "Skoghall",
    startDate: "11/05/2016",
    salary: 19230.13,
    age: "55",
    experience: "5 Years",
    status: "Rejected",
  },
  {
    responsiveId: "",
    id: 9,
    avatar: avatar2,
    fullName: "Allyson Moakler",
    post: "Safety Technician",
    email: "amoakler8@shareasale.com",
    city: "Mogilany",
    startDate: "12/29/2018",
    salary: 11677.32,
    age: "39",
    experience: "9 Years",
    status: "Applied",
  },
  {
    responsiveId: "",
    id: 11,
    avatar: "",
    fullName: "De Falloon",
    post: "Sales Representative",
    email: "dfalloona@ifeng.com",
    city: "Colima",
    startDate: "06/12/2018",
    salary: 19252.12,
    age: "30",
    experience: "0 Year",
    status: "Resigned",
  },
  {
    responsiveId: "",
    id: 12,
    avatar: "",
    fullName: "Cyrus Gornal",
    post: "Senior Sales Associate",
    email: "cgornalb@fda.gov",
    city: "Boro Utara",
    startDate: "12/09/2017",
    salary: 16745.47,
    age: "22",
    experience: "2 Years",
    status: "Resigned",
  },
  {
    responsiveId: "",
    id: 13,
    avatar: "",
    fullName: "Tallou Balf",
    post: "Staff Accountant",
    email: "tbalfc@sina.com.cn",
    city: "Siliana",
    startDate: "01/21/2016",
    salary: 15488.53,
    age: "36",
    experience: "6 Years",
    status: "Resigned",
  },
  {
    responsiveId: "",
    id: 15,
    avatar: "",
    fullName: "Wilmar Bourton",
    post: "Administrative Assistant",
    email: "wbourtone@sakura.ne.jp",
    city: "Bích Động",
    startDate: "04/25/2018",
    salary: 13304.45,
    age: "19",
    experience: "9 Years",
    status: "Applied",
  },
  {
    responsiveId: "",
    id: 16,
    avatar: avatar4,
    fullName: "Robinson Brazenor",
    post: "General Manager",
    email: "rbrazenorf@symantec.com",
    city: "Gendiwu",
    startDate: "12/23/2017",
    salary: 11953.08,
    age: "66",
    experience: "6 Years",
    status: "Applied",
  },
  {
    responsiveId: "",
    id: 17,
    avatar: "",
    fullName: "Nadia Bettenson",
    post: "Environmental Tech",
    email: "nbettensong@joomla.org",
    city: "Chabařovice",
    startDate: "07/11/2018",
    salary: 20484.44,
    age: "64",
    experience: "4 Years",
    status: "Current",
  },
  {
    responsiveId: "",
    id: 18,
    avatar: "",
    fullName: "Titus Hayne",
    post: "Web Designer",
    email: "thayneh@kickstarter.com",
    city: "Yangon",
    startDate: "05/25/2019",
    salary: 16871.48,
    age: "59",
    experience: "9 Years",
    status: "Current",
  },
  {
    responsiveId: "",
    id: 19,
    avatar: avatar4,
    fullName: "Roxie Huck",
    post: "Administrative Assistant",
    email: "rhucki@ed.gov",
    city: "Polýkastro",
    startDate: "04/04/2019",
    salary: 19653.56,
    age: "41",
    experience: "1 Year",
    status: "Resigned",
  },
  {
    responsiveId: "",
    id: 23,
    avatar: avatar7,
    fullName: "Rosmunda Steed",
    post: "Assistant Media Planner",
    email: "rsteedm@xing.com",
    city: "Manzanares",
    startDate: "12/23/2017",
    salary: 13778.34,
    age: "21",
    experience: "1 Year",
    status: "Applied",
  },
  {
    responsiveId: "",
    id: 26,
    avatar: avatar2,
    fullName: "Morgen Benes",
    post: "Senior Sales Associate",
    email: "mbenesp@ted.com",
    city: "Cà Mau",
    startDate: "04/10/2016",
    salary: 16969.63,
    age: "42",
    experience: "2 Years",
    status: "Resigned",
  },
  {
    responsiveId: "",
    id: 28,
    avatar: "",
    fullName: "Kliment McGinney",
    post: "Chief Design Engineer",
    email: "kmcginneyr@paginegialle.it",
    city: "Xiaocheng",
    startDate: "07/09/2018",
    salary: 24027.81,
    age: "28",
    experience: "8 Years",
    status: "Resigned",
  },
  {
    responsiveId: "",
    id: 31,
    avatar: "",
    fullName: "Teressa Bleakman",
    post: "Senior Editor",
    email: "tbleakmanu@phpbb.com",
    city: "Žebrák",
    startDate: "09/03/2016",
    salary: 24875.41,
    age: "37",
    experience: "7 Years",
    status: "Applied",
  },
];

const headers = [
  {
    title: "Group by status",
    key: "data-table-group",
  },
  {
    title: "NAME",
    key: "fullName",
  },
  {
    title: "EMAIL",
    key: "email",
  },
  {
    title: "DATE",
    key: "startDate",
  },
  {
    title: "SALARY",
    key: "salary",
  },
  {
    title: "AGE",
    key: "age",
  },
  {
    title: "STATUS",
    key: "status",
  },
];

const groupBy = [{ key: "status" }];

const resolveStatusVariant = (status) => {
  if (status === "Current") return { color: "primary" };
  else if (status === "Professional") return { color: "success" };
  else if (status === "Rejected") return { color: "error" };
  else if (status === "Resigned") return { color: "warning" };
  else return { color: "info" };
};

const getIcon = (props) => props.icon;
</script>

<template>
  <div id="grouping-rows">
    <GlobalsIntro title="Grouping Rows">
      When using the <code>group-by</code> prop, you can customize the group header with the
      <code>group-header</code> slot.
    </GlobalsIntro>
    <GlobalsCodePre :code="GroupingRows">
      <v-data-table :headers="headers" :items="userList" :items-per-page="10" :group-by="groupBy">
        <!-- full name -->
        <template #item.fullName="{ item }">
          <div class="d-flex align-center">
            <v-avatar
              size="32"
              :color="item.avatar ? '' : 'primary'"
              :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
              :variant="!item.avatar ? 'tonal' : undefined"
            >
              <v-img v-if="item.avatar" :src="item.avatar" />
              <span v-else>{{ avatarText(item.fullName) }}</span>
            </v-avatar>
            <div class="d-flex flex-column ms-3">
              <span class="d-block font-weight-medium text-high-emphasis">{{ item.fullName }}</span>
              <small>{{ item.post }}</small>
            </div>
          </div>
        </template>

        <template #item.status="{ item }">
          <v-chip
            :color="resolveStatusVariant(item.status).color"
            size="small"
            class="font-weight-medium"
          >
            {{ item.status }}
          </v-chip>
        </template>

        <template #data-table-group="{ props, item, count }">
          <td class="d-flex align-center">
            <v-btn v-bind="props" variant="text" density="comfortable">
              <v-icon :icon="getIcon(props)" />
            </v-btn>

            <span>{{ item.value }}</span>
            <span>({{ count }})</span>
          </td>
        </template>
      </v-data-table>
    </GlobalsCodePre>
  </div>
</template>
