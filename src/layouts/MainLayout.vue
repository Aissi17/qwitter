<template>
  <q-layout view="lHr lpR fFf">

    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title class="text-weight-bold">
          <span class="gt-sm">Qwitter</span> 

            <q-icon
            size="sm"
            color="primary"
            class="q-pa-md lt-md header-icon"
            name="fab fa-suse" 
            />
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
    show-if-above 
    v-model="left" 
    side="left" 
    :width="283"
    bordered
    >


      <q-icon
      size="lg"
      color="primary"
      class="q-pa-md"
      name="fab fa-suse" 
      />

      <q-list>

        <q-item 
        to="/"
        clickable 
        v-ripple
        >
          <q-item-section avatar>
            <q-icon  name="home" size="md" />
          </q-item-section>
          <q-item-section class="text-weight-bold text-h6">Home</q-item-section>
        </q-item> 
        
        <q-item 
        to="/about"
        clickable 
        v-ripple
        >
          <q-item-section avatar>
            <q-icon  name="help" size="md" />
          </q-item-section>
          <q-item-section class="text-weight-bold text-h6">About</q-item-section>
        </q-item>

      </q-list>

    </q-drawer>

    <q-drawer 
    show-if-above 
    v-model="right"
    side="right" 
    bordered
    >
        <!-- search input -->
        <q-input  
        placeholder="Search"
        class="q-ma-md"
        outlined
        rounded
        dense
        >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
      </q-input>
      
      <!-- item list -->
      <q-list separator padding>
          <q-item class="q-pa-md" >
            <q-item-section>
              <q-item-label overline class="text-grey">Python</q-item-label>
              <q-item-label class="text-weight-bold">new update</q-item-label>
              <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
            </q-item-section>
 
            <q-item-section side top>
              <q-item-label caption>5 min ago</q-item-label>
            </q-item-section>
          </q-item>
             <q-item class="q-pa-md" >
            <q-item-section>
              <q-item-label overline class="text-grey">Python</q-item-label>
              <q-item-label class="text-weight-bold">new update</q-item-label>
              <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
            </q-item-section>
 
            <q-item-section side top>
              <q-item-label caption>5 min ago</q-item-label>
            </q-item-section>
          </q-item>
             <q-item class="q-pa-md" >
            <q-item-section>
              <q-item-label overline class="text-grey">Python</q-item-label>
              <q-item-label class="text-weight-bold">new update</q-item-label>
              <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
            </q-item-section>
 
            <q-item-section side top>
              <q-item-label caption>5 min ago</q-item-label>
            </q-item-section>
          </q-item>
          
      </q-list>
    
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: false,
      right: false
    }
  }
}
</script>
<style lang="sass">
.header-icon 
  position : absolute 
  bottom : 0 
  left : 50% 
  transform : translateX(-50%) 
  
</style>