<template>
  <div class="card snippet-preview" data-ripple="false">
    <div class="card__text text">
      <div class="title">
        <span ref="title">{{ title }}</span>
      </div>
      <div class="url">
        <span ref="url">{{ baseUrl + url }}</span>
      </div>
      <div class="description">
        <span ref="description">
          {{ description.substr(0, maxDescriptionLength) }} 
          {{ description.length > maxDescriptionLength ? '...' : '' }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import VueYoast from 'vue-yoast'
  import {rateTitleLength, rateMetaDescLength} from '../utils.js'

  export default {
    name: 'snippet-preview',
    extends: VueYoast.SnippetPreview,
    data () {
      return {}
    },
    watch: {
      title () {
        this.$emit('update:titleWidth', this.$refs.title.offsetWidth)
        this.$emit('update:titleLengthPercent', (this.$refs.title.offsetWidth / this.maxTitleWidth) * 100)
      },
      description () {
        this.$emit('update:descriptionLengthPercent', (this.description.length / this.maxDescriptionLength) * 100)
      }
    },
    methods: {
      titleRate () {
        if (this.$refs.title) {
          return rateTitleLength(this.$refs.title.offsetWidth)
        }
        return ''
      },
      descriptionRate () {
        return rateMetaDescLength(this.description.length)
      }
    }
  }
</script>

<style>
  .snippet-preview span{
    font-family: arial,sans-serif !important;
    font-style: normal;
  }
  .snippet-preview .title{
    margin: 0;
    color: #1e0fbe;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.2;
    text-decoration: none;
    box-sizing: border-box;
    white-space: nowrap;
    cursor: pointer;
    display: inline-block;
    overflow: hidden;
    max-width: 600px;
    vertical-align: top;
    text-overflow: ellipsis;
  }
  .snippet-preview .url {
    width: 600px;
    line-height: 1;
    white-space: nowrap;
    box-sizing: border-box;
    white-space: nowrap;
  }
  .snippet-preview .url span{
    display: inline-block;
    overflow: hidden;
    min-width: 20px;
    max-width: 586px;
    font-size: 14px;
    line-height: 16px;
    vertical-align: top;
    text-overflow: ellipsis;
    font-style: normal;
    color: #006621;
    direction: ltr;
  }
  .snippet-preview .description {
    clear: both;
    min-height: 20px;
    width: 600px;
  }
  .snippet-preview .description span {
    color: #545454;
    font-size: 13px;
    line-height: 1.4;
    font-style: normal;
  }
</style>
