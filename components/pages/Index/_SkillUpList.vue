<template>
  <li :class="oddClass" >
    <div class="p-skillUp__ListItemTumb" :style="thumbStyle"></div>
    <div class="p-skillUp__ListItemDetail">
      <h4 class="p-skillUp__ListItemDetailHeading">{{skill.title}}</h4>
      <p class="p-skillUp__ListItemDetailDescription">{{skill.text}}</p>
    </div>
  </li>
</template>

<script>
  export default {
    props: ['skill', 'index'],
    computed: {
      oddClass () {
        return {
          'p-skillUp__ListItem': true,
          'is-odd': (this.index % 2 !== 0)
        }
      },
      thumbStyle () {
        return {
          backgroundImage: `url('${this.skill.thumbnail}')`
        }
      }
    },
    data () {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/object/component/_container.scss";
  @import "~assets/scss/object/component/_title.scss";

  .p-skillUp{
    &__ListItem {
      margin-bottom: 20px;
      display: flex;
      background: #faf7f7;
      border-right: 2px solid #C3504F;
    }
    &__ListItem.is-odd {
      border-right: none;
      border-left: 2px solid #C3504F;
      flex-direction: row-reverse;
      .p-skillUp__ListItemTumb {
        background-position: 80%;
        @include desktop {
          background-position: center;
        }
      }
    }
    &__ListItemTumb {
      display: inline-block;
      width: 40%;
      background-image: url("/images/skill_talk.jpg");
      background-position: 70%;
      background-size: cover;
      @include desktop {
        background-position: center;
      }
    }
    &__ListItemDetail {
      display: inline-block;
      width: 60%;
      padding: 40px;
      box-sizing: border-box;
      vertical-align: top;

    }
    &__ListItemDetailHeading {
      font-weight: bold;
      margin-bottom: 1em;
      font-size: 1.9rem;

    }
    &__ListItemDetailDescription {

    }
  }
</style>
