<template>
	<div class="flex-row">
    <div v-loading="loading" :fullscreen="false" class="warp">
      <vue-markdown class="mark-down" html :source="source"/>
    </div>
	</div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import md5 from 'js-md5'
import gitcontentsApi from '@/api/gitcontents.api'
import store from '@/nedb'

export default {
  data () {
    return {
      loading: false,
      source: ''
    }
  },
  components: {
    VueMarkdown
  },
  mounted () {
    this.loading = true
    gitcontentsApi.announce().then((response) => {
      this.loading = false
      if (response.status === 200) {
        this.source = response.data
        this.$store.dispatch('setAnnounceViewed', true)
        store.set('announceMd5', md5(response.data))
      }
    }).catch(() => {
      this.loading = false
      this.showError('公告加载失败')
    })
  },
  methods: {
    showError (message) {
      this.$message({
        type: 'error',
        duration: '2000',
        showClose: true,
        dangerouslyUseHTMLString: true,
        message: '<p style="line-height:20px;">' + message + '</p>'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
$warp-width: 90vw;
$warp-height: 60vh;
$warp-padding: 2vw;
.warp {
  width: auto;
  height: auto;
  margin: 2vh 3vw 2vh 3vw;
  padding: $warp-padding;
  border: 1px solid $text-color;
  border-radius: 4px;
  overflow-y: scroll;
  .mark-down {
    color: white;
  }
}
</style>
