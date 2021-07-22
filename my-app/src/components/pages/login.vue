<template>
 <div>
    <b-form @submit="onSubmit" @reset="onReset" >
      <b-form-group v-if="loeginMethod == 'username'"
        id="input-group-1"
        label="User Name:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.username"
          type="text"
          placeholder="Enter Username"
          required
        ></b-form-input>
      </b-form-group>

    <b-form-group v-if="loeginMethod == 'email'"
        id="input-group-1"
        label="Email Address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter Email"
          required
        ></b-form-input>
      </b-form-group>

    <b-form-group v-if="loeginMethod == 'phone'"
        id="input-group-1"
        label="Phone Number:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="text"
          placeholder="Enter Phone Number"
          required
        ></b-form-input>
      </b-form-group>
      


     <b-form-group
        label="login methods:"
        label-cols-sm="3"
        label-align-sm="right"
        class="mb-0"
        v-slot="{ ariaDescribedby }"
      >
        <b-form-radio-group
          class="pt-2"
          v-model="loeginMethod"
          :options="['username', 'email', 'phone']"
          :aria-describedby="ariaDescribedby"
        ></b-form-radio-group>
      </b-form-group>

      <b-button type="submit" variant="primary">Log in</b-button>
    </b-form>
  </div>
</template>
<script>
    export default{
        name:"Login",
        data(){
            return {
                form:{
                login:"",
                password:"",

                },
                loeginMethod:"username"
            }

        },
        methods:{
            // login(){
            //     const {name,password,$router} = this
            //     this.$router.push({
            //         path:"/",
            //         parameters:{
            //             username: this.name
            //         }
            //     })

            // },
            register(){
                this.$router.push({
                    path:"/register"
                })
            }
            ,
            debug (event) {
                console.log(event.target.name)
            },
            onSubmit(event) {
                event.preventDefault()
                alert(JSON.stringify(this.form))
            },
            onReset(event) {
                event.preventDefault()
                // Reset our form values
                this.form.email = ''
                this.form.name = ''
                this.form.food = null
                this.form.checked = []
        // Trick to reset/clear native browser form validation state
                this.show = false
                this.$nextTick(() => {
                this.show = true
        })
      }
        }



    }

</script>