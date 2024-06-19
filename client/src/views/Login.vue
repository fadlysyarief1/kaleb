<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- <header> -->
   
    <div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<form class="login100-form validate-form" method="post" action="http://localhost:3000/users/login">
					<span class="login100-form-title p-b-43">
						Login KALEB APPS
					</span>
          <br>
          <br>

					
					<p style="font-size: 12pt;color: #000;font-style: bold;">Username </p>
					<div class="wrap-input100 validate-input" style="height: 45px;" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" type="text" name="email">
						<span class="focus-input100"></span>
						<span class="label-input100"></span>
					</div>
					<br>
                    <p style="font-size: 12pt;color: #000;font-style: bold;">Password</p>
					<div class="wrap-input100 validate-input" style="height: 45px;" data-validate="Password is required">
						<input class="input100"  type="password" name="pass">
						<span class="focus-input100"></span>
						
					</div>

                    <br>

					<div class="container-login100-form-btn">
						<button type="submit" class="login100-form-btn">
							Login
						</button>
					</div>
					
					<div class="text-center p-t-20 p-b-20">
						<span class="txt2 btn btn-primary" style="width: 100%;">
							<RouterLink to="/register" style="color: white;text-decoration: none;">Register</RouterLink>
						</span>
					</div>

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
  data() {
    return {
      username: "",
      password: "",
    };
  },
  
};
</script>

<style scoped>

</style>
