<template>
  <div>
      <form>
          <input type="text">
          <input type="password">
          <input type="submit">
      </form>
      <button @click="loginTest">test</button>
      <div> {{ test.title }} </div>
  </div>
</template>

<script>
import { mapActions,mapGetters,mapState } from 'vuex'

export default {
    data() {
        return {
            halo:'heaaalo'
        }
    },
    name:'LoginTest',
    methods: {
        ...mapActions([`loginTest`])
    },
    computed: {
        ...mapState([`test`])
    }
}
</script>

<style>

</style>