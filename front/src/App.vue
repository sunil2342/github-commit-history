<template>
  <div id="app">
    <h1 class="mt-5">Results</h1>
    <div class="row">
      <div class="col-lg-12">
      </div>
    </div>

    <div class="row" :key=result.sha v-for="result in results">
      <div class="col-lg-12">
        <div class="row">
          <div class="col-lg-12">
            <span class="bold">sha: </span>{{result['sha']}}<br/>
            <span class="bold">node_id: </span>{{result['node_id']}}<br/>

            <span class="bold">Url: </span>{{result['url']}}<br/>
            <span class="bold">HTML Url: </span>{{result['html_url']}}<br/>
            <span class="bold">Comments Url: </span>{{result['comments_url']}}<br/><br/>

            <span class="bold">Commit</span><br/>
            <span class="bold">Message: </span>{{result['commit']['message']}}<br/>
            <span class="bold">Url: </span>{{result['commit']['url']}}<br/>
            <span class="bold">Comment Count: </span>{{result['commit']['comment_count']}}<br/><br/>

            <span class="bold">Verification </span><br/>
            <span class="bold small">Verified: </span>{{result['commit']['verification']['verified']}}<br/>
            <span class="bold small">Reason:</span>{{result['commit']['verification']['reason']}}<br/><br/>

            </div>
          </div>
          <div class="row">
            <div class="col-lg-4">&nbsp;
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 wrap-text">
              <span class="bold">Author </span><br/>
              <span class="bold small">Name: </span>{{result['commit']['author']['name']}}<br/>
              <span class="bold small">Email:</span>{{result['commit']['author']['email']}}<br/>
              <span class="bold small">Date:</span>{{result['commit']['author']['date']}}<br/>
            </div>
            <div class="col-lg-4">
              <span class="bold">Committer </span><br/>
              <span class="bold small">Name: </span>{{result['commit']['committer']['name']}}<br/>
              <span class="bold small">Email: </span>{{result['commit']['committer']['email']}}<br/>
              <span class="bold small">Date: </span>{{result['commit']['committer']['date']}}<br/>
            </div>
            <div class="col-lg-4 wrap-text">
              <span class="bold">Tree </span><br/>
              <span class="bold small">sha: </span>{{result['commit']['tree']['sha']}}<br/>
              <span class="bold small">Url: </span>{{result['commit']['tree']['url']}}<br/>
            </div>
          </div>
          <div class="row spacer">
            <div class="col-lg-12">&nbsp;
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <span class="bold">Author</span><br/>
              <span class="bold small">Login: </span>{{result['author']['login']}}<br/>
              <span class="bold small">Id: </span>{{result['author']['id']}}<br/>
              <span class="bold small">Node Id: </span>{{result['author']['node_id']}}<br/>
              <span class="bold small">Avatar Url: </span>{{result['author']['avatar_url']}}<br/>
              <span class="bold small">gravatar id: </span>{{result['author']['gravatar_id']}}<br/>
              <span class="bold small">Url: </span>{{result['author']['url']}}<br/>
              <span class="bold small">HTML Url: </span>{{result['author']['html_url']}}<br/>
              <span class="bold small">Followers Url: </span>{{result['author']['followers_url']}}<br/>
              <span class="bold small">Following Url: </span>{{result['author']['following_url']}}<br/>
              <span class="bold small">Gists Url: </span>{{result['author']['gists_url']}}<br/>
              <span class="bold small">Starred Url: </span>{{result['author']['starred_url']}}<br/>
              <span class="bold small">Subscriptions Url: </span>{{result['author']['subscriptions_url']}}<br/>
              <span class="bold small">Organizations Url: </span>{{result['author']['organizations_url']}}<br/>
              <span class="bold small">Repos Url: </span>{{result['author']['repos_url']}}<br/>
              <span class="bold small">Events Url Url: </span>{{result['author']['events_url']}}<br/>
              <span class="bold small">Received Events Url: </span>{{result['author']['received_events_url']}}<br/>
              <span class="bold small">Type: </span>{{result['author']['type']}}<br/>
              <span class="bold small">Site Admin: </span>{{result['author']['site_admin']}}<br/><br/>
            </div>
            <div class="col-lg-6">
              <span class="bold">Committer</span><br/>
              <span class="bold small">Login: </span>{{result['committer']['login']}}<br/>
              <span class="bold small">Id: </span>{{result['committer']['id']}}<br/>
              <span class="bold small">Node Id: </span>{{result['committer']['node_id']}}<br/>
              <span class="bold small">Avatar Url: </span>{{result['committer']['avatar_url']}}<br/>
              <span class="bold small">gravatar id: </span>{{result['committer']['gravatar_id']}}<br/>
              <span class="bold small">Url: </span>{{result['committer']['url']}}<br/>
              <span class="bold small">HTML Url: </span>{{result['committer']['html_url']}}<br/>
              <span class="bold small">Followers Url: </span>{{result['committer']['followers_url']}}<br/>
              <span class="bold small">Following Url: </span>{{result['committer']['following_url']}}<br/>
              <span class="bold small">Gists Url: </span>{{result['committer']['gists_url']}}<br/>
              <span class="bold small">Starred Url: </span>{{result['committer']['starred_url']}}<br/>
              <span class="bold small">Subscriptions Url: </span>{{result['committer']['subscriptions_url']}}<br/>
              <span class="bold small">Organizations Url: </span>{{result['committer']['organizations_url']}}<br/>
              <span class="bold small">Repos Url: </span>{{result['committer']['repos_url']}}<br/>
              <span class="bold small">Events Url Url: </span>{{result['committer']['events_url']}}<br/>
              <span class="bold small">Received Events Url: </span>{{result['committer']['received_events_url']}}<br/>
              <span class="bold small">Type: </span>{{result['committer']['type']}}<br/>
              <span class="bold small">Site Admin: </span>{{result['committer']['site_admin']}}<br/>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <span class="bold">Parents</span>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 bold small">
              sha
            </div>
            <div class="col-lg-4 bold small">
             url
            </div>
            <div class="col-lg-4 bold small">
              html url
            </div>
          </div>
          <div class="row" v-for="(parent, index) in result['parents']" :key="index">
            <div class="col-lg-4 wrap-text">
              {{parent['sha']}}
            </div>
            <div class="col-lg-4 wrap-text">
             {{parent['url']}}
            </div>
            <div class="col-lg-4 wrap-text">
              {{parent['html_url']}}
            </div>
          </div>
        <hr/>

      </div>
    </div>

  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    //HelloWorld
  },
  data () {
    return {
      baseUrl: 'http://localhost:3030/',
      results: [],
      parents: []
    }
  },
  methods: {
    getSoftrawData(){
      this.$http.get(this.baseUrl+'history')
        .then(response => {
          this.results = response.data
          this.parents = response.data.parents
        })
        .catch(() => {
          console.log('error')
        })
    }
  },
  mounted () {
    this.getSoftrawData()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
.bold {
  font-weight: bold;
  font-size: 16px;
}
.small {
  font-size: 14px;
}
hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.wrap-text{
  word-wrap: break-word;
}
.spacer {
  height: 10px;
}
</style>
