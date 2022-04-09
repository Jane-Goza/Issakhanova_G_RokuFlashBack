<template>
  <section class="signUp">
    <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign Up</h2>
        </div>
        <form @submit.prevent="eventSignUpClickHandler" class="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true"/>
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email" class="sr-only">Email address</label>
              <input id="email" v-model="email" name="email" type="email" autocomplete="email" required=""
                     class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                     placeholder="Email address"/>
            </div>
            <div>
              <label for="firstName" class="sr-only">First Name</label>
              <input id="firstName" v-model="firstName" name="firstName" type="text" autocomplete="firstName"
                     required=""
                     class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                     placeholder="First Name"/>
            </div>
            <div>
              <label for="lastName" class="sr-only">Last Name</label>
              <input id="lastName" v-model="lastName" name="lastName" type="text" autocomplete="lastName" required=""
                     class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                     placeholder="Last Name"/>
            </div>
            <div>
              <label for="password" class="sr-only">Password</label>
              <input id="password" v-model="password" name="password" type="password" autocomplete="current-password"
                     required=""
                     class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                     placeholder="Password"/>
            </div>
            <div>
              <p>Type of account</p>
              <label for="child" class="">Child</label>
              <input id="child" v-model="typeOfAccount" value="child" name="child" type="radio"
                     autocomplete="current-password"
                     style="display: inline-block; margin-left: 10px;" class="px-4"
              />
              <br>
              <label for="adult" class="">Adult</label>
              <input id="adult" v-model="typeOfAccount" value="adult" name="adult" type="radio"
                     autocomplete="current-password"
                     style="display: inline-block; margin-left: 10px;" class="px-4"
              />
            </div>
          </div>
          <div>
            <button type="submit"
                    class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span class="absolute left-0 inset-y-0 flex items-center pl-3"><LockClosedIcon
                  class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true"/></span>
              Sign up
            </button>
            <br>
            <p>Already have an account?
              <router-link to="/signIn">Sign In</router-link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import {LockClosedIcon} from '@heroicons/vue/solid'
import {API_URL} from "@/utils/consts"
import router from "@/router"

export default {
  name: 'registration',
  components: {
    LockClosedIcon,
  },
  data() {
    return {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      typeOfAccount: ''
    }
  },

  methods: {
    eventSignUpClickHandler() {
      const email = this.email
      const firstName = this.firstName
      const password = this.password
      const lastName = this.lastName
      const typeOfAccount = this.typeOfAccount
      const credentials = {
        email,
        firstName,
        password,
        lastName,
        typeOfAccount
      }
      console.log(credentials)
      fetch(`${API_URL}/user/registration`, {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/json'
        },
        body: JSON.stringify(credentials)
      }).then(response => response.json())
          .then(data => {
            localStorage.setItem('accessToken', data.accessToken)
            router.push("/movies")
          })
    }
  },

}
</script>


<style scoped lang="scss">
.signUp {
  max-width: 1280px;
  display: flex;
  justify-content: center;
  margin: 40px 20px;
  margin-left: auto;
  margin-right: auto;
  z-index: 2;
}
</style>
