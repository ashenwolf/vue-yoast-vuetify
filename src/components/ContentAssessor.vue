<template>
  <div class="vue-yoast-bootstrap">
    <slot :results="assessorResults">
      <div class="list-group">
        <template 
          v-for="rating in ['feedback', 'bad', 'ok', 'good']" 
          v-if="typeof assessorResultsByRating[rating] !== 'undefined'">
          <div v-for="item in assessorResultsByRating[rating]" v-if="item.text != ''" class="py-1 list-group-item" >
            <span :class="['badge', getBootstrapRatingVariant(item.rating), 'mr-1']">&nbsp;</span>
            <span v-html="item.text"></span>
          </div>
        </template>
      </div>
    </slot>
  </div>
</template>

<style lang="css" scoped>
.badge {
    vertical-align: middle;
    margin-top: -2px;
    border-radius: 50%;
    height: 16px;
    width: 16px;
    display: inline-block;
}

</style>

<script>
  import VueYoast from 'vue-yoast'
  import {getBootstrapRatingVariant} from '../utils.js'
  export default {
    name: 'content-assessor',
    extends: VueYoast.ContentAssessor,
    methods: {
      getBootstrapRatingVariant
    }
  }
</script>
