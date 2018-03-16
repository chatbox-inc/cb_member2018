<template>
  <li :class="'p-week__listItem num0' + (index)">
    <div class="p-week__listItemThumb" :style="thumbStyle"></div>
    <div class="p-week__listItemDescription">
      <div class="p-week__listItemDescriptionTitle">{{item.title}}</div>
      <p class="p-week__listItemDescriptionText">{{item.description}}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: ["index", "item"],
  computed: {
    thumbStyle() {
      return { backgroundImage: `url('/images/skill_talk.jpg')` };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/object/component/_container.scss";
@import "~assets/scss/object/component/_title.scss";

.p-week {
  &__listItem {
    display: block;
    border-top: 3px solid #c3504f;
    margin: 0 3px 60px 3px;
    width: 46%;
    background: #faf7f7;
    text-decoration: none;
    color: #393739;
    position: relative;
    z-index: 100;
    :not(last:last-child) {
      margin: 0;
    }
    @include desktop {
      width: 23%;
      margin: 0 7px 90px 7px;
      z-index: 0;
    }
    &:last-child {
      margin: 0 3px 0 3px;
      @include desktop {
        margin: 0 7px 90px 7px;
      }
    }
    &::before {
      display: inline-block;
      border-radius: 100%;
      width: 60px;
      height: 60px;
      text-align: center;
      line-height: 2.5;
      font-size: 1.4rem;
      color: #fff;
      background: #c3504f;
      position: absolute;
      top: -30px;
      left: 58%;
      transform: translateX(-40px);
      z-index: -10;
      @include desktop {
        width: 80px;
        height: 80px;
        border: none;
        line-height: 3;
        font-size: 1.6rem;
        top: -41px;
        left: 55%;
        transform: translateX(-50px);
        z-index: -10;
      }
    }
  }
  &__listItem.num01::before {
    content: "月";
  }
  &__listItem.num02::before {
    content: "火";
  }
  &__listItem.num03::before {
    content: "水";
  }
  &__listItem.num04::before {
    content: "木";
  }
  &__listItem.num05::before {
    content: "金";
  }
  &__listItem.num06::before {
    content: "土";
  }
  &__listItem.num07::before {
    content: "日";
  }
  &__listItemHeading {
    text-align: center;
    padding: 1.4rem;
    font-size: 1.7rem;
    font-weight: bold;
    background: #faf7f7;
    @include desktop {
      padding: 2rem;
      font-size: 1.8rem;
    }
  }
  &__listItemThumb {
    width: 100%;
    background: #fff;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    &::before {
      content: "";
      display: block;
      padding-top: 65%;
    }
  }
  &__listItemDescription {
    text-align: left;
    padding: 2rem 1.7rem 2rem 1.7rem;
    @include desktop {
      padding: 1.5rem;
      text-align: left;
    }
  }
  &__listItemDescriptionTitle {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 2px;
    @include desktop {
      font-size: 1.6rem;
    }
  }
  &__listItemDescriptionText {
    line-height: 2.5;
  }
}
</style>
