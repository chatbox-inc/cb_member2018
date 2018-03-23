<template>
    <section class="p-messege">
        <div class="p-messege__bg">
            <div class="p-messege__inner">
                <div class="p-messege__contents">
                    <h3 class="p-messege__headingTitle">Message</h3>
                    <div class="p-messege__headingDescription" v-html="marked(item)"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  props: {
    item: String
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/object/component/_container.scss";

.p-messege {
  margin-bottom: 40px;
  @include desktop {
  }
  &__bg {
    background-image: url(/images/mikakane/messege_top.jpg);
    text-align: right;
    margin-bottom: 85px;
    width: 100%;
    height: auto;
    background-repeat: no-repeat;
    background-size: contain;
    @include desktop() {
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  &__inner {
    @include c-container;
  }
  &__contents {
    width: 100%;
    margin-left: auto;
    position: relative;
    top: 220px;
    background-color: rgba(195, 80, 79, 0.9);
    @include desktop() {
      width: 40%;
      position: static;
      background-color: transparent;
    }
  }
  &__headingTitle {
    padding: 25px 0;
    font-size: 2.5rem;
    font-family: Yu Mincho Medium, YuMincho, serif;
    font-weight: 400;
    line-height: 1;
    text-align: center;
    color: #fff;
    background-size: cover;
    &::first-letter {
      font-size: 1.5em;
      color: #fff;
      @include desktop {
        color: #c3504f;
      }
    }
    @include desktop {
      margin-bottom: 1.2em;
      font-size: 5rem;
    }
  }
  &__headingDescription {
    color: #fff;
    text-align: left;
    padding: 0 13px 50px 13px;
    @include desktop {
    }
  }
}
</style>
