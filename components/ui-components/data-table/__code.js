export const Basic = `<script setup>
  import { data } from './__demo'

  const headers = [
    {
      title: 'ID',
      sortable: false,
      key: 'id'
    },
    {
      title: 'NAME',
      key: 'full_name'
    },
    {
      title: 'EMAIL',
      key: 'email'
    },
    {
      title: 'DATE',
      key: 'start_date'
    },
    {
      title: 'EXPERIENCE',
      key: 'experience'
    },
    {
      title: 'AGE',
      key: 'age'
    }
  ]
</script>

<template>
  <v-data-table :headers="headers" :items="data" :items-per-page="5" />
</template>`;

export const Dense = `<script setup>
  import { data } from './__demo'

  const headers = [
    {
      title: 'ID',
      sortable: false,
      key: 'id'
    },
    {
      title: 'NAME',
      key: 'full_name'
    },
    {
      title: 'EMAIL',
      key: 'email'
    },
    {
      title: 'DATE',
      key: 'start_date'
    },
    {
      title: 'EXPERIENCE',
      key: 'experience'
    },
    {
      title: 'AGE',
      key: 'age'
    }
  ]
</script>

<template>
  <v-data-table
    :headers="headers"
    :items="data"
    :items-per-page="5"
    density="compact"
  />
</template>`;

export const CellSlot = `<sctipt setup>
  import { data } from './__demo'
  const { avatarText } = useFormatters();

  const headers = [
    {
      title: 'NAME',
      key: 'full_name'
    },
    {
      title: 'EMAIL',
      key: 'email'
    },
    {
      title: 'DATE',
      key: 'start_date'
    },
    {
      title: 'SALARY',
      key: 'salary'
    },
    {
      title: 'AGE',
      key: 'age'
    },
    {
      title: 'STATUS',
      key: 'status'
    }
  ]

  const resolveStatusVariant = (status) => {
    if (status === 1)
      return {
        color: 'primary',
        text: 'Current'
      }
    else if (status === 2)
      return {
        color: 'success',
        text: 'Professional'
      }
    else if (status === 3)
      return {
        color: 'error',
        text: 'Rejected'
      }
    else if (status === 4)
      return {
        color: 'warning',
        text: 'Resigned'
      }
    else
      return {
        color: 'info',
        text: 'Applied'
      }
  }
</script>

<template>
  <v-data-table :headers="headers" :items="data" :items-per-page="5">
    <!-- full name -->
    <template #item.full_name="{ item }">
      <div class="d-flex align-center">
        <v-avatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <v-img v-if="item.avatar" :src="item.avatar" />
          <span v-else>{{ avatarText(item.full_name) }}</span>
        </v-avatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis ">{{
            item.full_name
          }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <template #item.status="{ item }">
      <v-chip
        :color="resolveStatusVariant(item.status).color"
        class="font-weight-medium"
        size="small"
      >
        {{ resolveStatusVariant(item.status).text }}
      </v-chip>
    </template>
  </v-data-table>
</template>`;

export const RowSelection = `<sctipt setup>
  import { data } from './__demo'
  const { avatarText } = useFormatters();

  const headers = [
    {
      title: 'NAME',
      key: 'full_name'
    },
    {
      title: 'EMAIL',
      key: 'email'
    },
    {
      title: 'DATE',
      key: 'start_date'
    },
    {
      title: 'SALARY',
      key: 'salary'
    },
    {
      title: 'AGE',
      key: 'age'
    },
    {
      title: 'STATUS',
      key: 'status'
    }
  ]

  const resolveStatusVariant = (status) => {
    if (status === 1)
      return {
        color: 'primary',
        text: 'Current'
      }
    else if (status === 2)
      return {
        color: 'success',
        text: 'Professional'
      }
    else if (status === 3)
      return {
        color: 'error',
        text: 'Rejected'
      }
    else if (status === 4)
      return {
        color: 'warning',
        text: 'Resigned'
      }
    else
      return {
        color: 'info',
        text: 'Applied'
      }
  }
</script>

<template>
  <v-data-table :headers="headers" :items="data" :items-per-page="5" show-select>
    <!-- full name -->
    <template #item.full_name="{ item }">
      <div class="d-flex align-center">
        <v-avatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <v-img v-if="item.avatar" :src="item.avatar" />
          <span v-else>{{ avatarText(item.full_name) }}</span>
        </v-avatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis ">{{
            item.full_name
          }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <template #item.status="{ item }">
      <v-chip
        :color="resolveStatusVariant(item.status).color"
        class="font-weight-medium"
        size="small"
      >
        {{ resolveStatusVariant(item.status).text }}
      </v-chip>
    </template>
  </v-data-table>
</template>`;

export const FixedHeader = `<sctipt setup>
  import { data } from './__demo'
  const { avatarText } = useFormatters();

  const headers = [
    {
      title: 'NAME',
      key: 'full_name'
    },
    {
      title: 'EMAIL',
      key: 'email'
    },
    {
      title: 'DATE',
      key: 'start_date'
    },
    {
      title: 'SALARY',
      key: 'salary'
    },
    {
      title: 'AGE',
      key: 'age'
    },
    {
      title: 'STATUS',
      key: 'status'
    }
  ]

  const resolveStatusVariant = (status) => {
    if (status === 1)
      return {
        color: 'primary',
        text: 'Current'
      }
    else if (status === 2)
      return {
        color: 'success',
        text: 'Professional'
      }
    else if (status === 3)
      return {
        color: 'error',
        text: 'Rejected'
      }
    else if (status === 4)
      return {
        color: 'warning',
        text: 'Resigned'
      }
    else
      return {
        color: 'info',
        text: 'Applied'
      }
  }
</script>

<template>
  <v-data-table :headers="headers" :items="data" items-per-page="10" height="300" fixed-header>
    <!-- full name -->
    <template #item.full_name="{ item }">
      <div class="d-flex align-center">
        <v-avatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <v-img v-if="item.avatar" :src="item.avatar" />
          <span v-else>{{ avatarText(item.full_name) }}</span>
        </v-avatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis ">{{
            item.full_name
          }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <template #item.status="{ item }">
      <v-chip
        :color="resolveStatusVariant(item.status).color"
        class="font-weight-medium"
        size="small"
      >
        {{ resolveStatusVariant(item.status).text }}
      </v-chip>
    </template>
  </v-data-table>
</template>`;

export const ExpandableRows = `<sctipt setup>
  import { data } from './__demo'
  const { avatarText } = useFormatters();

  const headers = [
    {
      title: 'NAME',
      key: 'full_name'
    },
    {
      title: 'EMAIL',
      key: 'email'
    },
    {
      title: 'DATE',
      key: 'start_date'
    },
    {
      title: 'SALARY',
      key: 'salary'
    },
    {
      title: 'AGE',
      key: 'age'
    },
    {
      title: 'STATUS',
      key: 'status'
    }
  ]

  const resolveStatusVariant = (status) => {
    if (status === 1)
      return {
        color: 'primary',
        text: 'Current'
      }
    else if (status === 2)
      return {
        color: 'success',
        text: 'Professional'
      }
    else if (status === 3)
      return {
        color: 'error',
        text: 'Rejected'
      }
    else if (status === 4)
      return {
        color: 'warning',
        text: 'Resigned'
      }
    else
      return {
        color: 'info',
        text: 'Applied'
      }
  }
</script>

<template>
  <v-data-table :headers="headers" :items="data" :items-per-page="5" show-expand>
    <!-- Expanded Row Data -->
    <template #expanded-row="slotProps">
      <tr class="v-data-table__tr">
        <td :colspan="headers.length">
          <p class="my-1">City: {{ slotProps.item.city }}</p>
          <p class="my-1">Experience: {{ slotProps.item.experience }}</p>
          <p>Post: {{ slotProps.item.post }}</p>
        </td>
      </tr>
    </template>

    <!-- full name -->
    <template #item.full_name="{ item }">
      <div class="d-flex align-center">
        <v-avatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <v-img v-if="item.avatar" :src="item.avatar" />
          <span v-else>{{ avatarText(item.full_name) }}</span>
        </v-avatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis ">{{
            item.full_name
          }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <template #item.status="{ item }">
      <v-chip
        :color="resolveStatusVariant(item.status).color"
        class="font-weight-medium"
        size="small"
      >
        {{ resolveStatusVariant(item.status).text }}
      </v-chip>
    </template>
  </v-data-table>
</template>`;

export const GroupingRows = `<script setup>
  import { GroupingRows } from './__code'
  const { avatarText } = useFormatters();
  import avatar1 from '/images/avatar/avatar-1.jpg'
  import avatar2 from '/images/avatar/avatar-2.jpg'
  import avatar4 from '/images/avatar/avatar-4.jpg'
  import avatar7 from '/images/avatar/avatar-7.jpg'
  import avatar8 from '/images/avatar/avatar-8.jpg'

  const userList = [
    {
      responsiveId: '',
      id: 1,
      avatar: avatar8,
      fullName: 'Korrie OCrevy',
      post: 'Nuclear Power Engineer',
      email: 'kocrevy0@thetimes.co.uk',
      city: 'Krasnosilka',
      startDate: '09/23/2016',
      salary: 23896.35,
      age: '61',
      experience: '1 Year',
      status: 'Professional'
    },
    {
      responsiveId: '',
      id: 2,
      avatar: avatar1,
      fullName: 'Bailie Coulman',
      post: 'VP Quality Control',
      email: 'bcoulman1@yolasite.com',
      city: 'Hinigaran',
      startDate: '05/20/2018',
      salary: 13633.69,
      age: '63',
      experience: '3 Years',
      status: 'Professional'
    },
    {
      responsiveId: '',
      id: 3,
      avatar: avatar7,
      fullName: 'Stella Ganderton',
      post: 'Operator',
      email: 'sganderton2@tuttocitta.it',
      city: 'Golcowa',
      startDate: '03/24/2018',
      salary: 13076.28,
      age: '66',
      experience: '6 Years',
      status: 'Applied'
    },
    {
      responsiveId: '',
      id: 4,
      avatar: avatar8,
      fullName: 'Dorolice Crossman',
      post: 'Cost Accountant',
      email: 'dcrossman3@google.co.jp',
      city: 'Paquera',
      startDate: '12/03/2017',
      salary: 12336.17,
      age: '22',
      experience: '2 Years',
      status: 'Professional'
    },
    {
      responsiveId: '',
      id: 6,
      avatar: '',
      fullName: 'Genevra Honeywood',
      post: 'Geologist',
      email: 'ghoneywood5@narod.ru',
      city: 'Maofan',
      startDate: '06/01/2017',
      salary: 17803.8,
      age: '61',
      experience: '1 Year',
      status: 'Current'
    },
    {
      responsiveId: '',
      id: 7,
      avatar: '',
      fullName: 'Eileen Diehn',
      post: 'Environmental Specialist',
      email: 'ediehn6@163.com',
      city: 'Lampuyang',
      startDate: '10/15/2017',
      salary: 18991.67,
      age: '59',
      experience: '9 Years',
      status: 'Rejected'
    },
    {
      responsiveId: '',
      id: 8,
      avatar: avatar7,
      fullName: 'Richardo Aldren',
      post: 'Senior Sales Associate',
      email: 'raldren7@mtv.com',
      city: 'Skoghall',
      startDate: '11/05/2016',
      salary: 19230.13,
      age: '55',
      experience: '5 Years',
      status: 'Rejected'
    },
    {
      responsiveId: '',
      id: 9,
      avatar: avatar2,
      fullName: 'Allyson Moakler',
      post: 'Safety Technician',
      email: 'amoakler8@shareasale.com',
      city: 'Mogilany',
      startDate: '12/29/2018',
      salary: 11677.32,
      age: '39',
      experience: '9 Years',
      status: 'Applied'
    },
    {
      responsiveId: '',
      id: 11,
      avatar: '',
      fullName: 'De Falloon',
      post: 'Sales Representative',
      email: 'dfalloona@ifeng.com',
      city: 'Colima',
      startDate: '06/12/2018',
      salary: 19252.12,
      age: '30',
      experience: '0 Year',
      status: 'Resigned'
    },
    {
      responsiveId: '',
      id: 12,
      avatar: '',
      fullName: 'Cyrus Gornal',
      post: 'Senior Sales Associate',
      email: 'cgornalb@fda.gov',
      city: 'Boro Utara',
      startDate: '12/09/2017',
      salary: 16745.47,
      age: '22',
      experience: '2 Years',
      status: 'Resigned'
    },
    {
      responsiveId: '',
      id: 13,
      avatar: '',
      fullName: 'Tallou Balf',
      post: 'Staff Accountant',
      email: 'tbalfc@sina.com.cn',
      city: 'Siliana',
      startDate: '01/21/2016',
      salary: 15488.53,
      age: '36',
      experience: '6 Years',
      status: 'Resigned'
    },
    {
      responsiveId: '',
      id: 15,
      avatar: '',
      fullName: 'Wilmar Bourton',
      post: 'Administrative Assistant',
      email: 'wbourtone@sakura.ne.jp',
      city: 'Bích Động',
      startDate: '04/25/2018',
      salary: 13304.45,
      age: '19',
      experience: '9 Years',
      status: 'Applied'
    },
    {
      responsiveId: '',
      id: 16,
      avatar: avatar4,
      fullName: 'Robinson Brazenor',
      post: 'General Manager',
      email: 'rbrazenorf@symantec.com',
      city: 'Gendiwu',
      startDate: '12/23/2017',
      salary: 11953.08,
      age: '66',
      experience: '6 Years',
      status: 'Applied'
    },
    {
      responsiveId: '',
      id: 17,
      avatar: '',
      fullName: 'Nadia Bettenson',
      post: 'Environmental Tech',
      email: 'nbettensong@joomla.org',
      city: 'Chabařovice',
      startDate: '07/11/2018',
      salary: 20484.44,
      age: '64',
      experience: '4 Years',
      status: 'Current'
    },
    {
      responsiveId: '',
      id: 18,
      avatar: '',
      fullName: 'Titus Hayne',
      post: 'Web Designer',
      email: 'thayneh@kickstarter.com',
      city: 'Yangon',
      startDate: '05/25/2019',
      salary: 16871.48,
      age: '59',
      experience: '9 Years',
      status: 'Current'
    },
    {
      responsiveId: '',
      id: 19,
      avatar: avatar4,
      fullName: 'Roxie Huck',
      post: 'Administrative Assistant',
      email: 'rhucki@ed.gov',
      city: 'Polýkastro',
      startDate: '04/04/2019',
      salary: 19653.56,
      age: '41',
      experience: '1 Year',
      status: 'Resigned'
    },
    {
      responsiveId: '',
      id: 23,
      avatar: avatar7,
      fullName: 'Rosmunda Steed',
      post: 'Assistant Media Planner',
      email: 'rsteedm@xing.com',
      city: 'Manzanares',
      startDate: '12/23/2017',
      salary: 13778.34,
      age: '21',
      experience: '1 Year',
      status: 'Applied'
    },
    {
      responsiveId: '',
      id: 26,
      avatar: avatar2,
      fullName: 'Morgen Benes',
      post: 'Senior Sales Associate',
      email: 'mbenesp@ted.com',
      city: 'Cà Mau',
      startDate: '04/10/2016',
      salary: 16969.63,
      age: '42',
      experience: '2 Years',
      status: 'Resigned'
    },
    {
      responsiveId: '',
      id: 28,
      avatar: '',
      fullName: 'Kliment McGinney',
      post: 'Chief Design Engineer',
      email: 'kmcginneyr@paginegialle.it',
      city: 'Xiaocheng',
      startDate: '07/09/2018',
      salary: 24027.81,
      age: '28',
      experience: '8 Years',
      status: 'Resigned'
    },
    {
      responsiveId: '',
      id: 31,
      avatar: '',
      fullName: 'Teressa Bleakman',
      post: 'Senior Editor',
      email: 'tbleakmanu@phpbb.com',
      city: 'Žebrák',
      startDate: '09/03/2016',
      salary: 24875.41,
      age: '37',
      experience: '7 Years',
      status: 'Applied'
    }
  ]

  const headers = [
    {
      title: 'Group by status',
      key: 'data-table-group'
    },
    {
      title: 'NAME',
      key: 'fullName'
    },
    {
      title: 'EMAIL',
      key: 'email'
    },
    {
      title: 'DATE',
      key: 'startDate'
    },
    {
      title: 'SALARY',
      key: 'salary'
    },
    {
      title: 'AGE',
      key: 'age'
    },
    {
      title: 'STATUS',
      key: 'status'
    }
  ]

  const groupBy = [{ key: 'status' }]

  const resolveStatusVariant = (status) => {
    if (status === 'Current') return { color: 'primary' }
    else if (status === 'Professional') return { color: 'success' }
    else if (status === 'Rejected') return { color: 'error' }
    else if (status === 'Resigned') return { color: 'warning' }
    else return { color: 'info' }
  }

  const getIcon = (props) => props.icon
</script>

<template>
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
          <span class="d-block font-weight-medium text-high-emphasis ">{{
            item.fullName
          }}</span>
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
</template>`;

export const RowEditingViaDialog = `<script setup>
  const { avatarText } = useFormatters();
  import { data } from './__demo'

  const editDialog = ref(false)
  const deleteDialog = ref(false)

  const defaultItem = ref({
    responsiveId: '',
    id: -1,
    avatar: '',
    full_name: '',
    post: '',
    email: '',
    city: '',
    start_date: '',
    salary: -1,
    age: '',
    experience: '',
    status: -1
  })

  const editedItem = ref(defaultItem.value)
  const editedIndex = ref(-1)
  const userList = ref([])

  // status options
  const selectedOptions = [
    {
      text: 'Current',
      value: 1
    },
    {
      text: 'Professional',
      value: 2
    },
    {
      text: 'Rejected',
      value: 3
    },
    {
      text: 'Resigned',
      value: 4
    },
    {
      text: 'Applied',
      value: 5
    }
  ]

  // headers
  const headers = [
    {
      title: 'NAME',
      key: 'full_name'
    },
    {
      title: 'EMAIL',
      key: 'email'
    },
    {
      title: 'DATE',
      key: 'start_date'
    },
    {
      title: 'SALARY',
      key: 'salary'
    },
    {
      title: 'AGE',
      key: 'age'
    },
    {
      title: 'STATUS',
      key: 'status'
    },
    {
      title: 'ACTIONS',
      key: 'actions'
    }
  ]

  const resolveStatusVariant = (status) => {
    if (status === 1)
      return {
        color: 'primary',
        text: 'Current'
      }
    else if (status === 2)
      return {
        color: 'success',
        text: 'Professional'
      }
    else if (status === 3)
      return {
        color: 'error',
        text: 'Rejected'
      }
    else if (status === 4)
      return {
        color: 'warning',
        text: 'Resigned'
      }
    else
      return {
        color: 'info',
        text: 'Applied'
      }
  }

  const editItem = (item) => {
    editedIndex.value = userList.value.indexOf(item)
    editedItem.value = { ...item }
    editDialog.value = true
  }

  const deleteItem = (item) => {
    editedIndex.value = userList.value.indexOf(item)
    editedItem.value = { ...item }
    deleteDialog.value = true
  }

  const close = () => {
    editDialog.value = false
    editedIndex.value = -1
    editedItem.value = { ...defaultItem.value }
  }

  const closeDelete = () => {
    deleteDialog.value = false
    editedIndex.value = -1
    editedItem.value = { ...defaultItem.value }
  }

  const save = () => {
    if (editedIndex.value > -1) Object.assign(userList.value[editedIndex.value], editedItem.value)
    else userList.value.push(editedItem.value)
    close()
  }

  const deleteItemConfirm = () => {
    userList.value.splice(editedIndex.value, 1)
    closeDelete()
  }

  onMounted(() => {
    userList.value = JSON.parse(JSON.stringify(data))
  })
</script>

<template>
  <!-- 👉 Datatable  -->
  <v-data-table :headers="headers" :items="userList" :items-per-page="5">
    <!-- full name -->
    <template #item.full_name="{ item }">
      <div class="d-flex align-center">
        <!-- avatar -->
        <v-avatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <v-img v-if="item.avatar" :src="item.avatar" />
          <span v-else>{{ avatarText(item.full_name) }}</span>
        </v-avatar>

        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis ">{{
            item.full_name
          }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <!-- status -->
    <template #item.status="{ item }">
      <v-chip :color="resolveStatusVariant(item.status).color" size="small">
        {{ resolveStatusVariant(item.status).text }}
      </v-chip>
    </template>

    <!-- Actions -->
    <template #item.actions="{ item }">
      <div class="d-flex gap-1">
        <icon-btn @click="editItem(item.raw)">
          <v-icon icon="tabler-edit" />
        </icon-btn>
        <icon-btn @click="deleteItem(item.raw)">
          <v-icon icon="tabler-trash" />
        </icon-btn>
      </div>
    </template>
  </v-data-table>

  <!-- 👉 Edit Dialog  -->
  <v-dialog v-model="editDialog" max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">Edit Item</span>
      </v-card-title>

      <v-card-text>
        {{ editedItem?.full_name }}
        <v-container>
          <v-row>
            <!-- fullName -->
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="editedItem.full_name" label="User name" />
            </v-col>

            <!-- email -->
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="editedItem.email" label="Email" />
            </v-col>

            <!-- salary -->
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="editedItem.salary"
                label="Salary"
                prefix="$"
                type="number"
              />
            </v-col>

            <!-- age -->
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="editedItem.age" label="Age" type="number" />
            </v-col>

            <!-- start date -->
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="editedItem.start_date" label="Date" />
            </v-col>

            <!-- status -->
            <v-col cols="12" sm="6" md="4">
              <v-select readonly label="Select" :items="selectedOptions"></v-select>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer />

        <v-btn color="error" variant="outlined" @click="close"> Cancel </v-btn>

        <v-btn color="success" variant="elevated" @click="save"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <!-- 👉 Delete Dialog  -->
  <v-dialog v-model="deleteDialog" max-width="500px">
    <v-card>
      <v-card-title> Are you sure you want to delete this item? </v-card-title>

      <v-card-actions>
        <v-spacer />

        <v-btn color="error" variant="outlined" @click="closeDelete"> Cancel </v-btn>

        <v-btn color="success" variant="elevated" @click="deleteItemConfirm"> OK </v-btn>

        <v-spacer />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>`;

export const ExternalPagination = `<script setup>
  import { data } from './__demo'
  const { avatarText } = useFormatters();

  const userList = ref([])

  const options = ref({
    page: 1,
    itemsPerPage: 5,
    sortBy: [''],
    sortDesc: [false]
  })

  // headers
  const headers = [
    {
      title: 'NAME',
      key: 'full_name'
    },
    {
      title: 'EMAIL',
      key: 'email'
    },
    {
      title: 'DATE',
      key: 'start_date'
    },
    {
      title: 'SALARY',
      key: 'salary'
    },
    {
      title: 'AGE',
      key: 'age'
    },
    {
      title: 'STATUS',
      key: 'status'
    }
  ]

  const resolveStatusVariant = (status) => {
    if (status === 1)
      return {
        color: 'primary',
        text: 'Current'
      }
    else if (status === 2)
      return {
        color: 'success',
        text: 'Professional'
      }
    else if (status === 3)
      return {
        color: 'error',
        text: 'Rejected'
      }
    else if (status === 4)
      return {
        color: 'warning',
        text: 'Resigned'
      }
    else
      return {
        color: 'info',
        text: 'Applied'
      }
  }

  onMounted(() => {
    userList.value = JSON.parse(JSON.stringify(data))
  })
</script>

<template>
  <v-data-table
    :headers="headers"
    :items="userList"
    :items-per-page="options.itemsPerPage"
    :page="options.page"
    :options="options"
  >
    <!-- full name -->
    <template #item.full_name="{ item }">
      <div class="d-flex align-center">
        <v-avatar
          size="32"
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <v-img v-if="item.avatar" :src="item.avatar" />
          <span v-else>{{ avatarText(item.full_name) }}</span>
        </v-avatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis ">{{
            item.full_name
          }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <!-- status -->
    <template #item.status="{ item }">
      <v-chip
        :color="resolveStatusVariant(item.status).color"
        class="font-weight-medium"
        size="small"
      >
        {{ resolveStatusVariant(item.status).text }}
      </v-chip>
    </template>

    <template #bottom>
      <v-card-text class="pt-2">
        <div class="d-flex flex-wrap justify-center justify-sm-space-between gap-y-2 mt-2">
          <v-text-field
            v-model="options.itemsPerPage"
            label="Rows per page:"
            type="number"
            min="-1"
            max="15"
            hide-details
            variant="underlined"
            style="max-inline-size: 8rem; min-inline-size: 5rem"
          />

          <v-pagination
            v-model="options.page"
            :total-visible="$vuetify.display.smAndDown ? 3 : 5"
            :length="Math.ceil(userList.length / options.itemsPerPage)"
          />
        </div>
      </v-card-text>
    </template>
  </v-data-table>
</template>`;

export const KitchenSink = `<script setup>
  import { KitchenSink } from './__code'
  import { productList } from './__demo'

  const search = ref('')

  // headers
  const headers = [
    {
      title: 'PRODUCT',
      key: 'product.name'
    },
    {
      title: 'DATE',
      key: 'date'
    },
    {
      title: 'CATEGORY',
      key: 'product.category'
    },
    {
      title: 'BUYERS',
      key: 'buyer.name'
    },
    {
      title: 'PAYMENT',
      key: 'payment',
      sortable: false
    },
    {
      title: 'STATUS',
      key: 'status',
      sortable: false
    },
    {
      title: 'DELETE',
      key: 'delete',
      sortable: false
    }
  ]

  const deleteItem = (itemId) => {
    const index = productList.value.findIndex((item) => item.product.id === itemId)

    productList.value.splice(index, 1)
  }

  const categoryIcons = [
    {
      name: 'Mouse',
      icon: 'tabler-mouse',
      color: 'warning'
    },
    {
      name: 'Glass',
      icon: 'tabler-eyeglass',
      color: 'primary'
    },
    {
      name: 'Smart Watch',
      icon: 'tabler-device-watch',
      color: 'success'
    },
    {
      name: 'Bag',
      icon: 'tabler-briefcase',
      color: 'info'
    },
    {
      name: 'Storage Device',
      icon: 'tabler-device-audio-tape',
      color: 'warning'
    },
    {
      name: 'Bluetooth',
      icon: 'tabler-bluetooth',
      color: 'error'
    },
    {
      name: 'Gaming',
      icon: 'tabler-device-gamepad-2',
      color: 'warning'
    },
    {
      name: 'Home',
      icon: 'tabler-home',
      color: 'error'
    },
    {
      name: 'VR',
      icon: 'tabler-badge-vr',
      color: 'primary'
    },
    {
      name: 'Shoes',
      icon: 'tabler-shoe',
      color: 'success'
    },
    {
      name: 'Electronics',
      icon: 'tabler-cpu',
      color: 'info'
    },
    {
      name: 'Projector',
      icon: 'tabler-theater',
      color: 'warning'
    },
    {
      name: 'IPod',
      icon: 'tabler-device-airpods',
      color: 'error'
    },
    {
      name: 'Keyboard',
      icon: 'tabler-keyboard',
      color: 'primary'
    },
    {
      name: 'Smart Phone',
      icon: 'tabler-device-mobile',
      color: 'success'
    },
    {
      name: 'Smart TV',
      icon: 'tabler-device-tv',
      color: 'info'
    },
    {
      name: 'Google Home',
      icon: 'tabler-brand-google',
      color: 'warning'
    },
    {
      name: 'Mac',
      icon: 'tabler-brand-apple',
      color: 'error'
    },
    {
      name: 'Headphone',
      icon: 'tabler-headphones',
      color: 'primary'
    },
    {
      name: 'IMac',
      icon: 'tabler-device-imac',
      color: 'success'
    },
    {
      name: 'IPhone',
      icon: 'tabler-brand-apple',
      color: 'warning'
    }
  ]

  const resolveStatusColor = (status) => {
    if (status === 'Confirmed') return 'primary'
    if (status === 'Completed') return 'success'
    if (status === 'Cancelled') return 'error'
  }

  const categoryIconFilter = (categoryName) => {
    const index = categoryIcons.findIndex((category) => category.name === categoryName)
    if (index !== -1)
      return [
        {
          icon: categoryIcons[index].icon,
          color: categoryIcons[index].color
        }
      ]

    return [
      {
        icon: 'tabler-help',
        color: 'primary'
      }
    ]
  }
</script>

<template>
  <v-card-text>
    <v-row>
      <v-col cols="12" offset-md="8" md="4">
        <global-text-field
          v-model="search"
          density="compact"
          placeholder="Search"
          append-inner-icon="tabler-search"
          single-line
          hide-details
          dense
          outlined
        />
      </v-col>
    </v-row>
  </v-card-text>

  <!-- 👉 Data Table  -->
  <v-data-table
    :headers="headers"
    :items="productList"
    :search="search"
    :items-per-page="5"
    class="text-no-wrap"
  >
    <!-- product -->
    <template #item.product.name="{ item }">
      <div class="d-flex align-center">
        <div>
          <v-img :src="item.product.image" height="40" width="40" />
        </div>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text--primary">{{ item.product.name }}</span>
          <span class="text-body-2">{{ item.product.brand }}</span>
        </div>
      </div>
    </template>

    <!-- category -->
    <template #item.product.category="{ item }">
      <div class="d-flex align-center">
        <v-avatar
          v-for="(category, index) in categoryIconFilter(item.product.category)"
          :key="index"
          size="26"
          :color="category.color"
          variant="tonal"
        >
          <v-icon size="20" :color="category.color" class="rounded-0">
            {{ category.icon }}
          </v-icon>
        </v-avatar>
        <span class="ms-1 text-no-wrap">{{ item.product.category }}</span>
      </div>
    </template>

    <!-- buyer -->
    <template #item.buyer.name="{ item }">
      <div class="d-flex align-center">
        <v-avatar
          size="1.875rem"
          :color="!item.avatar ? 'primary' : undefined"
          :variant="!item.avatar ? 'tonal' : undefined"
        >
          <v-img v-if="item.buyer.avatar" :src="item.buyer.avatar" />
          <span v-else>{{ item.buyer.name.slice(0, 2).toUpperCase() }}</span>
        </v-avatar>
        <span class="text-no-wrap font-weight-medium text--primary ms-2">{{
          item.buyer.name
        }}</span>
      </div>
    </template>

    <!-- Payment -->
    <template #item.payment="{ item }">
      <div class="d-flex flex-column">
        <div class="d-flex align-center">
          <span class="font-weight-medium">{{ item.payment.paid_amount }}</span>
          <span class="text-body-2" v-if="item.payment.paid_amount !== item.payment.total"
            >/{{ item.payment.total }}</span
          >
        </div>
        <span class="text-body-2 text-no-wrap">{{ item.payment.received_payment_status }}</span>
      </div>
    </template>

    <!-- Status -->
    <template #item.status="{ item }">
      <v-chip
        :color="resolveStatusColor(item.payment.status)"
        :class="'text-'+resolveStatusColor(item.payment.status)"
        size="small"
        class="font-weight-medium"
      >
        {{ item.payment.status }}
      </v-chip>
    </template>

    <!-- Delete -->
    <template #item.delete="{ item }">
      <icon-btn @click="deleteItem(item.product.id)">
        <v-icon icon="tabler-trash" />
      </icon-btn>
    </template>
  </v-data-table>
</template>`;
