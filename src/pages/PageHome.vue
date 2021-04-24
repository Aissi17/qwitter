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
                <img src="https://avatarfiles.alphacoders.com/163/thumb-1920-163207.jpg">
              </q-avatar>
            </template>
        </q-input>
      </div>

      <div class="col col-shrink">
          <q-btn class="q-mb-lg" :disable="!newQweet" unelevated rounded color="primary" label="Qweet"  no-caps/>
      </div>
    </div>

    <q-separator size="10px" color="grey-2" class="divider" />
  </q-page>
</template>

<script>
export default {
  name: 'PageHome',
  data(){
    return {
      newQweet : '',
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
</style>