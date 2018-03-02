<template>
  <div class="p-header" id="top">
    <a href="https://chatbox-inc.com/" target="_blank" class="p-header--triangle"></a>
    <div class="p-header--logoArea">
        <img class="p-header--logoImg" src="/images/logo.svg" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~assets/scss/object/component/_container.scss";
@import "~assets/scss/object/component/_title.scss";
@import "~assets/scss/layout/_layout.scss";
.p-header {
  &--triangle {
    display: inline-block;
    position: fixed;
    top: 0;
    left: 0;
    border: 30px solid transparent;
    border-top: 30px solid #c2504f;
    border-left: 30px solid #c2504f;
    z-index: 100000;
    transition: all 0.3s;

    &:hover {
      opacity: 0.8;
      transition: all 0.3s;
    }

    &::after {
      content: "";
      display: inline-block;
      width: 20px;
      height: 20px;
      background: url("/images/icon_chatbox-white.svg") no-repeat;
      background-size: contain;
      background-position: center;
      position: absolute;
      top: -24px;
      left: -24px;
      @include desktop() {
        width: 30px;
        height: 30px;
        top: -33px;
        left: -38px;
      }
    }
    @include desktop() {
      border: 50px solid transparent;
      border-top: 50px solid #c2504f;
      border-left: 50px solid #c2504f;
    }
  }
  &--logoArea {
    width: 100%;
    padding: 2rem 0;
    text-align: center;
    @include desktop {
      width: 100%;
      padding: 4rem 0;
    }
  }
  &--logoImg {
    display: inline-block;
    width: auto;
    height: 4rem;

    @include desktop() {
      display: inline-block;
      width: auto;
      height: 7rem;
    }
  }
}
</style>
