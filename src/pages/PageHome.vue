<template>
  <q-page class="relative-position" >
    <q-scroll-area class="absolute full-height full-width" >
      <div class="q-py-lg  q-px-md row items-end q-col-gutter-md">

        <div class="col">
            <q-input
            bottom-slots 
            v-model="newQweet" 
            placeholder="wha's up?" 
            counter 
            maxlength="280" 
            class="new-qweet"
            autogrow
          >
              <template v-slot:before>
                <q-avatar>
                  <img :src="avatarLink">
                </q-avatar>
              </template>
          </q-input>
        </div>

        <div class="col col-shrink">
            <q-btn class="q-mb-lg" :disable="!newQweet" unelevated rounded color="primary" label="Qweet"  @click="addNewQweet" no-caps/>
        </div>
      </div>

      <q-separator size="10px" color="grey-2" class="divider" />

      <!-- tweets -->


      <q-list separator>
        <transition-group
          appear
          enter-active-class="animated fadeIn slow"
          leave-active-class="animated fadeOut slow"
        >
          <q-item class="q-py-md qweet" v-for="qweet in qweets" :key="qweet.id">
            <q-item-section avatar top>
              <q-avatar>
                <img :src="avatarLink">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-subtitle1"> 
                  <strong> Mr.Robot </strong> 
                  <span class="text-grey-7">
                    @fsociety 
                    <br class="lt-md">&bull; {{ qweet.date | relativeDate}}
                  </span>
              </q-item-label>
              <q-item-label class="qtweet-content text-body1" >
                {{ qweet.content }}
              </q-item-label>

              <div class="row justify-between q-mt-sm qweet-icons">
                <q-btn flat round color="grey" icon="far fa-comment" size="sm" />
                <q-btn flat round color="grey" icon="fas fa-retweet" size="sm" />
                <q-btn flat round 
                @click="likeQweet(qweet)"
                :color="qweet.liked ? 'pink' :'grey' " 
                :icon="qweet.liked ? 'fas fa-heart' : 'far fa-heart'" 
                size="sm" />
                <q-btn flat round color="grey" icon="fas fa-trash" size="sm" @click="deleteQweet(qweet)" />
              </div>
            </q-item-section>


          </q-item>
        </transition-group>
      </q-list>
    </q-scroll-area>
  </q-page>
</template>

<script>
import db from 'boot/firebase'
import { formatDistance } from 'date-fns'

export default {
  name: 'PageHome',
  data(){
    return {
      newQweet : '',
      avatarLink : "https://avatarfiles.alphacoders.com/163/thumb-1920-163207.jpg",
      qweets : [ 

        // {
        //   id : 1,
        //   content : "Lorem ipsum dolor sit,inventore magnam iste exercitationem dolorem id consequatur sit harum? ",
        //   date : 1619307994862,
        //   liked : false,
        // },
        // {
        //   id:2,
        //   content : "Lorem ipsum dolor sit,inventore magnam iste exercitationem dolorem id consequatur sit harum? ",
        //   date : 1619305039994,
        //   liked : true,
        // }    

      ]
    }
  },
  mounted () {


    db.collection("qweets").orderBy('date').onSnapshot((snapshot) => {

            snapshot.docChanges().forEach((change) => {
              let qweetChange = change.doc.data()
              qweetChange.id = change.doc.id
              if (change.type === "added") {
                  this.qweets.unshift(qweetChange)
              }
              if (change.type === "modified") {
                  let index = this.qweets.findIndex(qweet => qweet.id === qweetChange.id)
                  Object.assign(this.qweets[index],qweetChange)

              }
              if (change.type === "removed") {
                  let index = this.qweets.findIndex(qweet => qweet.id === qweetChange.id)
                  this.qweets.splice(index,1)
              }
        })
    })
    
  },
  filters : {
    relativeDate(value){
      return formatDistance(value, new Date(), { addSuffix: true })
    }
  },
  methods : {
    addNewQweet(){
        let qweet = {
          content : this.newQweet,
          date : Date.now(),
          liked : false
        }
        db.collection('qweets').add(qweet)
        .then(() => {
        })
        .catch((error) => {
            console.error("Error adding document: ", error)
        })
        this.newQweet = ''
    },
    deleteQweet(qweet){
      db.collection("qweets").doc(qweet.id).delete().then(() => {
      }).catch((error) => {
          console.error("Error removing document: ", error)
      });
    },
    likeQweet(qweet){

      db.collection("qweets").doc(qweet.id).update({
            liked: !qweet.liked
        })
        .then(() => {
        })
        .catch((error) => {
            console.error("Error updating document: ", error);
        });
    }
  }
}
</script>
<style lang="sass">
.new-sweet 
  textarea
    font-size: 19px
    line-height: 1.4 !important 
.divider
  border-top : 1px solid
  border-bottom: 1px solid
  border-color : $grey-4
.qtweet-content
  white-space: pre-line
.qweet-icons
  margin-left : -5px
.qweet:not(:first-child)
  border-top : 1px solid rgba(0 ,0 ,0, 0.12)
</style>