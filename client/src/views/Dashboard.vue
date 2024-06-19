<script setup>
import { RouterLink, RouterView,useRoute } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- <header> -->
   
    <div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<form class="login100-form validate-form" method="post" action="http://localhost:3000/users/login">
					<span class="login100-form-title p-b-43">
						Dashboard KALEB APPS
					</span>
          <br>
          <br>

					
					<p style="font-size: 12pt;color: #000;font-style: bold;">Username : <p @change="getQueryParams">{{queryParams}}</p> </p>
					
					
					
					<!-- <div class="login100-form-social flex-c-m">
						<a href="#" class="login100-form-social-item flex-c-m bg1 m-r-5">
							<i class="fa fa-facebook-f" aria-hidden="true"></i>
						</a>

						<a href="#" class="login100-form-social-item flex-c-m bg2 m-r-5">
							<i class="fa fa-twitter" aria-hidden="true"></i>
						</a>
					</div> -->
				</form>

				<div class="login100-more" style="background-image: url('/src/assets/img/bg-01.jpg');">
				</div>
			</div>
		</div>
	</div>
    
    <!-- <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
  <!-- </header> -->
<RouterView></RouterView>
 
</template>


<script>

export default {
        name: 'DisplayQueryParams',
        data() {
            return {
                queryParams: {},
                showQueryParams: false,
            };
        },
        setup() {
            const route = useRoute();
            return { route };
        },
        methods: {
            getQueryParams() {
                this.queryParams = this.route.query;
                this.showQueryParams = true;
            },
        },
    };
</script>

<style scoped>

</style>
