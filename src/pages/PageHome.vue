<template>
  <q-page >
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
          <q-btn class="q-mb-lg" :disable="!newQweet" unelevated rounded color="primary" label="Qweet"  no-caps/>
      </div>
    </div>

    <q-separator size="10px" color="grey-2" class="divider" />

    <!-- tweets -->


    <q-list separator>
        <q-item class="q-py-md" v-for="qweet in qweets" :key="qweet.date">
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
                </span>
            </q-item-label>
            <q-item-label class="qtweet-content text-body1" >
              {{ qweet.content }}
            </q-item-label>

            <div class="row justify-between q-mt-sm qweet-icons">
              <q-btn flat round color="grey" icon="far fa-comment" size="sm" />
              <q-btn flat round color="grey" icon="fas fa-retweet" size="sm" />
              <q-btn flat round color="grey" icon="far fa-heart" size="sm" />
              <q-btn flat round color="grey" icon="fas fa-trash" size="sm" />
            </div>
          </q-item-section>

          <q-item-section side top> 
            {{ qweet.date | relativeDate}}
          </q-item-section>
        </q-item>

    </q-list>

  </q-page>
</template>

<script>
import { formatDistance } from 'date-fns'

export default {
  name: 'PageHome',
  data(){
    return {
      newQweet : '',
      avatarLink : "https://avatarfiles.alphacoders.com/163/thumb-1920-163207.jpg",
      qweets : [
        {
          content : "Lorem ipsum dolor sit,inventore magnam iste exercitationem dolorem id consequatur sit harum? ",
          date : 1619307994862,
        },
        {
          content : "Lorem ipsum dolor sit,inventore magnam iste exercitationem dolorem id consequatur sit harum? ",
          date : 1619305039994,
        }        
      ]
    }
  },
  filters : {
    relativeDate(value){
      return formatDistance(value, new Date(), { addSuffix: true })
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
</style>