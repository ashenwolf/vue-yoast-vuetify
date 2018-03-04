<template>
  <div class="vue-yoast-bootstrap">
    <slot :results="assessorResults">
      <div class="list-group">
        <template 
          v-for="rating in ['feedback', 'bad', 'ok', 'good']" 
          v-if="typeof assessorResultsByRating[rating] !== 'undefined'">
          <div v-for="item in assessorResultsByRating[rating]" v-if="item.text != ''" class="list-group-item" >
            <span :class="['badge', 'badge-'+getBootstrapRatingVariant(item.rating), 'badge-pill', 'mr-2']">&nbsp;</span>
            <span v-html="item.text"></span>
          </div>
        </template>
      </div>
    </slot>
  </div>
</template>

<script>
  import VueYoast from 'vue-yoast'
  import {getBootstrapRatingVariant} from '../utils.js'
  export default {
    name: 'seo-assessor',
    extends: VueYoast.SeoAssessor,
    methods: {
      getBootstrapRatingVariant
    }
  }
</script>
