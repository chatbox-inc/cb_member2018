<template>
  <section class="p-skillUp">
    <div class="p-skillUp__inner">
      <div class="p-skillUp__heading">
        <h3 class="p-skillUp__headingTitle">スキルアップ施策</h3>
        <p class="p-skillUp__headingIntro">chatboxでは自分で決めた目標に対して、積極的にスキルアップを目指していく人を応援しています。「自ら学び、教え合う」ことがごく自然に受け入れられている社内なので、得意分野をどんどん伸ばし、苦手分野は得意な人に教えてもらいながら補強していくことが可能です。</p>
      </div>
      <ul class="p-skillUp__Lists">
        <skillup-list :index="index" :skill="item" v-for="(item,index) in listItems" :key="index"></skillup-list>
      </ul>
    </div>
  </section>
</template>

<script>
  import SkillupList from "./_SkillUpList.vue"
  export default {
    data () {
      return {
        listItems: [
          {
            title: 'コミュニケーション能力の育成',
            text: '実際の現場ではディレクターだけでなく、デザイナー・エンジニアについてもコミュニケーション能力が必要とされています。chatboxでは様々な役職のスタッフ同士で日常的に意見交換やアドバイスを受ける機会が設けられているため、努力次第で自分にとって必要なコミュニケーション能力を向上させることができます。',
            thumbnail: '/images/skill_talk.jpg'
          },
          {
            title: '自己管理能力の向上',
            text: 'chatboxでは各々が無理せずきちんと休めるよう、プロジェクト管理ツールBacklogやSlackを使って進捗管理・報告をしっかりと行なっています。また、フレックスタイム制・リモートワークといった柔軟な働き方も導入しており、自身で体調・進捗状況の管理ができればライフスタイルの変化に合わせた働き方を実現することができます。',
            thumbnail: '/images/skill_workStyle.jpg'
          },
          {
            title: 'スクール・勉強会の開催',
            text: 'chatboxの開催するスクールLec Caféに参加することで、「現場で使える最新技術」を得られることが可能です。また、フロントエンド・PHPなどのイベント運営にスタッフとして携わることで、技術知識の取得だけでなく社外のデザイナー・エンジニアと交流する機会を得ることができます。',
            thumbnail: '/images/skill_event.jpg'
          }
        ]
      }
    },
    components: {
        SkillupList
    },
    async mounted () {
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/object/component/_container.scss";
  @import "~assets/scss/object/component/_title.scss";
  .p-skillUp{
    margin-bottom: 108px;
    @include desktop {
      margin-bottom: 178px;
    }
    &__inner {
      @include c-container;
    }
    &__heading {

    }
    &__headingTitle {
      @include c-titleCenter;
    }
    &__headingIntro {
      margin-bottom: 40px;
      line-height: 2;
    }
    &__Lists {
    }

  }

</style>
