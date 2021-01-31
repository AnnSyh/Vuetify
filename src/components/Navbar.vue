<template>
  <div>
    <!--  навигация-->
    <v-app-bar
      color="deep-purple"
      dark
    >
      <v-app-bar-nav-icon
        @click="sideNav = !sideNav"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          text
          v-for="(link,i) in links"
          :key="i"
          :to="link.url"
        >
          <v-icon left>{{link.icon}}</v-icon>
          {{link.title}}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer
      v-model="sideNav"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item
            v-for="(link,i) in links"
            :key="i"
            :to="link.url"
          >
            <v-list-item-icon>
              <v-icon>{{link.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{link.title}}</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <!--  /навигация-->

    <!--  основной контент-->
    <v-main>
      <router-view></router-view>
    </v-main>
  </div>

</template>
<script>
export default {
  data() {
    return {
      sideNav:false, //по умолчаниювыпадменюскрыто
      drawer: false,
      group: null,
      links:[
        {title: 'Login', icon:'account_box', url:'/login'},
        {title: 'Register', icon:'face', url:'/register'},
        {title: 'Cart', icon:'shopping_cart', url:'/checkout'},
        {title: 'New product', icon:'add', url:'/new'},
        {title: 'My products', icon:'list', url:'/list'}
      ],
    }
  },
}
</script>
