<template>
  <FullCalendar class="calendar-container" :options="calendarOptions" />
</template>

<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'

export default {
  name: 'HelloWorld',
  components: {
    FullCalendar
  },
  computed: {
    calendarOptions() {
      return {
        plugins: [dayGridPlugin],
        initialView: 'dayGridMonth',
        events: [
          { title: 'Evento 1', date: '2026-04-01' },
          { title: 'Evento 2', date: '2026-04-05' }
        ]
      }
    }
  }
}
</script>

<style>
.calendar-container {
  width: 80%;   /* cambia esto */
  margin: auto;   /* centrar */
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>