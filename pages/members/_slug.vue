<template>
  <section>
    <members-firstview :item="member.firstView"></members-firstview>
    <members-interview :item="member.interview"></members-interview>
    <members-week :item="member.weekItems"></members-week>
    <members-can :item="member.canItems"></members-can>
    <members-message :item="member.message"></members-message>
    <members-introduction :item="member.profile"></members-introduction>
    <page-member :list-items="listItems"></page-member>
    <members-chatbox></members-chatbox>
  </section>
</template>

<script>
import membersFirstview from "~/components/pages/members/Firstview.vue";
import membersInterview from "~/components/pages/members/Interview.vue";
import membersWeek from "~/components/pages/members/Week.vue";
import membersCan from "~/components/pages/members/Can.vue";
import membersMessage from "~/components/pages/members/Message.vue";
import membersIntroduction from "~/components/pages/members/Introduction.vue";
import PageMember from "~/components/pages/Index/Member.vue";
import membersChatbox from "~/components/pages/members/Chatbox.vue";

export default {
  data() {
    return {};
  },
  computed: {
    listItems() {
      return this.$store.state.listItems;
    },
    member() {
      return this.$store.state.members[this.$route.params.slug]
    }


  },
  components: {
    membersFirstview,
    membersInterview,
    membersWeek,
    membersCan,
    membersMessage,
    membersIntroduction,
    membersChatbox,
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
