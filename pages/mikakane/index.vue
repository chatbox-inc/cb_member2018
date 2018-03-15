<template>
  <section>
    <mikakane-firstview></mikakane-firstview>
    <mikakane-interview></mikakane-interview>
    <mikakane-week></mikakane-week>
    <mikakane-can></mikakane-can>
    <mikakane-message></mikakane-message>
    <mikakane-introduction></mikakane-introduction>
    <page-member :list-items="listItems"></page-member>
    <mikakane-chatbox></mikakane-chatbox>
  </section>
</template>

<script>
import mikakaneFirstview from "~/components/pages/mikakane/Firstview.vue";
import mikakaneInterview from "~/components/pages/mikakane/Interview.vue";
import mikakaneWeek from "~/components/pages/mikakane/Week.vue";
import mikakaneCan from "~/components/pages/mikakane/Can.vue";
import mikakaneMessage from "~/components/pages/mikakane/Message.vue";
import mikakaneIntroduction from "~/components/pages/mikakane/Introduction.vue";
import PageMember from "~/components/pages/Index/Member.vue";
import mikakaneChatbox from "~/components/pages/mikakane/Chatbox.vue";

export default {
  data() {
    return {};
  },
  computed: {
    listItems() {
      return this.$store.state.listItems;
    }
  },
  components: {
    mikakaneFirstview,
    mikakaneInterview,
    mikakaneWeek,
    mikakaneCan,
    mikakaneMessage,
    mikakaneIntroduction,
    mikakaneChatbox,
    PageMember
  },
  mounted() {
    if (!window.navigator) {
      this.online = false;
      return;
    }
  },
  methods: {}
};
</script>

<style lang="sass">

</style>
