<template>
  <div class="p-footerArea">
    <div class="p-footer--pageTop">
      <a href="#top" v-smooth-scroll>
        <img class="p-footer--pageTopImg" src="/images/pagetop.svg" alt="">
      </a>
    </div>
    <div class="p-footer">
      <div class="p-footer--inner">
        <nav class="p-navi">
          <a class="p-navi--link" href="/">chatboxについて</a>
          <a class="p-navi--link" href="/">サービス</a>
          <a class="p-navi--link" href="/">メンバー</a>
          <a class="p-navi--link" href="/contact">お問い合わせ</a>
        </nav>
        <div class="p-footer--body">
          <div class="p-footer--icon"></div>
          <div class="p-footer--copyright">Copyright © chatbox.inc All Rights Reserved.</div>
          <div class="p-footer--sns">
            <a class="p-footer--instagram" href="https://www.instagram.com/chatbox_inc/" target="_blank">
              <i class="fa fa-instagram " aria-hidden="true"></i>
            </a>
            <a class="p-footer--twitter" href="https://twitter.com/chatbox_inc/" target="_blank">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a class="p-footer--facebook" href="https://www.facebook.com/chatbox.inc/" target="_blank">
              <i class="fa fa-facebook p-footer--facebook" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~assets/scss/object/component/_container.scss";
@import "~assets/scss/layout/_layout.scss";
@import "~assets/scss/object/component/_title.scss";

.p-footerArea {
  margin-top: 5em;
  border-top: 2px solid #c3504f;
  background-color: #faf7f7;
  @include desktop() {
    margin-top: 100px;
  }
}

.p-footer {
  @include c-container;
  color: #b43b3e;
  padding-bottom: 1rem;
  @include desktop {
    padding-bottom: 60px;
  }

  &--pageTop {
    @include c-container;
    position: relative;
  }
  &--pageTopImg {
    display: inline-block;
    width: 20px;
    height: auto;
    position: absolute;
    bottom: 20px;
    right: 20px;
    @include desktop {
      right: 0;
    }
  }
  &--body {
    display: flex;
    font-size: 1rem;
    align-items: center;
    padding: 1rem 0;
    justify-content: flex-start;
  }
  &--icon {
    display: inline-block;
    margin-right: 10px;
    width: 2.2rem;
    height: 2.2rem;
    background-image: url("~static/images/icon_chatbox.svg");
    background-repeat: no-repeat;
    background-size: contain;
  }
  &--copyright {
    display: inline-block;
    width: 50%;
    @include desktop {
      font-size: 1.3rem;
    }
  }
  &--sns {
    display: inline-block;
    margin-left: auto;
    font-size: 2.3rem;
  }
  &--instagram {
    display: inline-block;
    margin-right: 20px;
    color: #c3504f;
    &:hover {
      opacity: 0.7;
    }
  }
  &--twitter {
    display: inline-block;
    margin-right: 20px;
    color: #c3504f;
    &:hover {
      opacity: 0.7;
    }
  }
  &--facebook {
    display: inline-block;
    color: #c3504f;
    &:hover {
      opacity: 0.7;
    }
  }
}
.p-navi {
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: bold;
  border-bottom: 1px solid rgba(195, 80, 79, 0.5);
  letter-spacing: 1px;
  color: #c3504f;
  @include desktop {
    justify-content: flex-start;
    font-size: 1.5rem;
  }
  &--link {
    text-decoration: none;
    padding: 1.2rem 0;
    color: inherit;
    &:hover {
      opacity: 0.7;
    }
    @include desktop {
      padding-top: 3rem;
      padding-bottom: 2rem;
      padding-right: 2rem;
    }
  }
}
</style>
