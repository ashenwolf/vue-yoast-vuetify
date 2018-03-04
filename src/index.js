import ContentAssessor from './components/ContentAssessor.vue'
import SeoAssessor from './components/SeoAssessor.vue'
import SnippetPreview from './components/SnippetPreview.vue'

export default {
  install (Vue) {
    Vue.component(ContentAssessor.name, ContentAssessor)
    Vue.component(SeoAssessor.name, SeoAssessor)
    Vue.component(SnippetPreview.name, SnippetPreview)
  }
}
