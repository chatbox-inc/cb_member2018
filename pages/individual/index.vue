<template>
  <section>
    <Individual-firstview></Individual-firstview>
    <Individual-interview></Individual-interview>
    <Individual-week></Individual-week>
    <Individual-can></Individual-can>
    <Individual-message></Individual-message>
    <Individual-introduction></Individual-introduction>
    <page-member :list-items="listItems"></page-member>
    <Individual-chatbox></Individual-chatbox>
  </section>
</template>

<script>
import IndividualFirstview from "~/components/pages/individual/Firstview.vue";
import IndividualInterview from "~/components/pages/individual/Interview.vue";
import IndividualWeek from "~/components/pages/individual/Week.vue";
import IndividualCan from "~/components/pages/individual/Can.vue";
import IndividualMessage from "~/components/pages/individual/Message.vue";
import IndividualIntroduction from "~/components/pages/individual/Introduction.vue";
import PageMember from "~/components/pages/Index/Member.vue";
import IndividualChatbox from "~/components/pages/individual/Chatbox.vue";

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
    IndividualFirstview,
    IndividualInterview,
    IndividualWeek,
    IndividualCan,
    IndividualMessage,
    IndividualIntroduction,
    IndividualChatbox,
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
