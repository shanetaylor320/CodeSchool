<template>
  <div class="about">
    <h1>This is an about page</h1>
    <InfoSection v-for="info in infos" v-bind:infoprop="info" />
  </div>
</template>

<script>
import InfoSection from '../components/InfoSection.vue'

export default {
  components: {
    InfoSection
  },
  data () {
    return {
      infos: [
        {
          title: "The first information you need",
          topics: [
            "how to do stuff",
            "how to do stuff good"
          ]
        },
        {
          title: "The second information you need",
          topics: [
            "how to do stuff",
            "how to do stuff good"
          ]
        },
        {
          title: "The third information you need",
          topics: [
            "how to do stuff",
            "how to do stuff good"
          ]
        }
      ]
    }
  }
}
</script>
