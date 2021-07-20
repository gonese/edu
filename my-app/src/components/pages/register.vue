<template>
    <div class="card">
         <h3 class="card-header text-center">Registeration</h3>
            <div class="card body">
                <form id="register">
                    <div class="form-row">
                        <p> User Name:</p>
                        <input type=text placeholder="Username" v-model.trim="$v.username.$model" :class="{'is-invalid':$v.username.$error,'is-valid':!$v.username.$invalid}">
                        <div class="valid-feedback">Valid Username</div>
                        <div class="invalid-feedback">
                            <span v-if="!$v.username.required">Username is required</span>
                            <span v-if="!$v.username.minLength">Username must contain at least {{$v.username.$params.minLength.min}} characters</span>
                            <span v-if="!$v.username.maxLength">Username must contain most {{$v.username.$params.maxLength.max}} characters</span>
                        </div>
                    </div>
                    <div>
                        <p>password:</p>
                        <input v-model="password" placeholder="Password">
                    </div>
                <div>
                    <p>repeat the password::</p>
                    <input v-model="repeatPassword" placeholder="Repeat Password">
                    </div>
                    <div>
                        <p>email:</p>
                        <input v-model="email" placeholder="Email Address">
                    </div>
                    <div>
                        <p>phone number:</p>
                        <input v-model="phone" placeholder="Phone Number">
                    </div>
                </form>
            </div>    
    </div>
</template>
<script>
import { required,minLength,maxLength,alphaNum,requiredUnless,sameAs,numeric,email} from 'vuelidate/lib/validators'

export default{
    name:"register",
    data(){
        return {username:'',
        password:'',
        repeatPassword:'',
        email:'',
        phone:''
        }
    },
    validations:{
        username:{
            required,
            minLength: minLength(6),
            maxLength: maxLength(12)
        },
        password:{
            required,
            alphaNum,
            minLength: minLength(6),
            maxLength: maxLength(20)
            
        },
        repeatpassword:{
            sameasPassword: sameAs('password')
        },
        email:{
            email,
            required:requiredUnless('phone')
        },
        phone:{
            numeric,
            required:requiredUnless('email')
        }

    }
}
</script>

<style scoped>
</style>