<template>
  <div class="p-firstView">
    <div class="p-firstView__inner">
      <div class="p-firstView__heading">
        <h2 class="p-firstView__headingTitle">我輩は猫である。</h2><br>
        <h2 class="p-firstView__headingTitle">名前はまだない。</h2>
        <p class="p-firstView__headingCompany">株式会社 chatbox</p>
        <p class="p-firstView__headingPosition">代表取締役</p>
        <p class="p-firstView__headingName">後藤知宏</p>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
@import "~assets/scss/layout/_layout.scss";
@import "~assets/scss/object/component/_container.scss";
@import "~assets/scss/object/component/_title.scss";

.p-firstView {
  background: url("http://placehold.it/480x480") center no-repeat;
  background-size: cover;
  position: relative;
  margin-bottom: 50px;
  height: 500px;
  @include desktop {
    margin-bottom: 100px;
    height: 600px;
  }
  &::before {
    content: "";
    display: block;
    height: 500px;
    background: linear-gradient(
      90deg,
      rgba(195, 80, 79, 0.49) 0%,
      rgba(182, 80, 78, 0.29) 67.45%,
      rgba(123, 5, 3, 0) 100%
    );
    @include desktop {
      height: 600px;
    }
  }
  &::after {
    display: inline-block;
    content: "";
    width: 2px;
    height: 600px;
    background: #c3504f;
    position: absolute;
    left: 50%;
    top: 95%;
    transform: translateX(-1px);
    animation: border_sp 0.5s ease 0.5s alternate both running;
    @include desktop() {
      height: 15%;
      animation: border_pc 0.5s ease 0.5s alternate both running;
      top: 90%;
    }
    @keyframes border_sp {
      0% {
        height: 0;
      }
      100% {
        height: 50px;
      }
    }
    @keyframes border_pc {
      0% {
        height: 0;
      }
      100% {
        height: 20%;
      }
    }
  }
  &__inner {
    @include c-container;
  }
  &__heading {
    color: #fff;
    position: absolute;
    bottom: 18%;
    @include desktop {
      bottom: 15%;
    }
  }
  &__headingTitle {
    display: inline-block;
    font-size: 2.5rem;
    font-weight: bold;
    letter-spacing: 3px;
    line-height: 1.5;
    @include desktop {
      margin-bottom: 10px;
      font-size: 3rem;
      letter-spacing: 6px;
    }
  }
  &__headingCompany{
      padding-top: 100px;
    @include desktop {
      padding-top: 30px;
    }
  }
  &__headingName{
    font-size: 3.5rem;
    font-weight: bold;
  }
  &__headingIntro {
    font-size: 1.4rem;
    letter-spacing: 2px;
    @include desktop {
      font-size: 1.8rem;
    }
  }
}
</style>
