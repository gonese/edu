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
                     <div class="form-row">
                        <p> Email:</p>
                        <input type=text placeholder="email" v-model.trim="$v.email.$model" :class="{'is-invalid':$v.email.$error,'is-valid':!$v.email.$invalid}">
                        <div class="valid-feedback">Valid email</div>
                        <div class="invalid-feedback">
                            <span v-if="!$v.email.email">Invalid Email Address</span>
                            <span v-if="!$v.email.required"> You need either email or phone number for registeration</span>
                        </div>
                    </div>
                     <div class="form-row">
                        <p> Phone:</p>
                        <input type=text placeholder="phone" v-model.trim="$v.phone.$model" :class="{'is-invalid':$v.phone.$error,'is-valid':!$v.phone.$invalid}">
                        <div class="valid-feedback">Valid Phone Number</div>
                        <div class="invalid-feedback">
                            <span v-if="!$v.phone.numeric">Invalid Phone Number</span>
                            <span v-if="!$v.phone.required">You need either email or phone number for registeration</span>
                        </div>
                    </div>
                     <div class="form-row">
                        <p> password:</p>
                        <input type=text placeholder="password" v-model.trim="$v.password.$model" :class="{'is-invalid':$v.password.$error,'is-valid':!$v.password.$invalid}">
                        <div class="valid-feedback">Valid Password</div>
                        <div class="invalid-feedback">
                            <span v-if="!$v.password.required">password is required</span>
                            <span v-if="!$v.password.minLength">password must contain at least {{$v.password.$params.minLength.min}} characters</span>
                            <span v-if="!$v.password.maxLength">password must contain most {{$v.password.$params.maxLength.max}} characters</span>
                        </div>
                    </div>
                     <div class="form-row">
                        <p> repeat password:</p>
                        <input type=text placeholder="repeat password" v-model.trim="$v.repeatpassword.$model" :class="{'is-invalid':$v.repeatpassword.$error,'is-valid':!$v.repeatpassword.$invalid}">
                        <div class="valid-feedback">Valid Password</div>
                        <div class="invalid-feedback">
                            <span v-if="!$v.repeatpassword.sameas">Password doesn't match</span>
                        </div>
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
        repeatpassword:'',
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
            required,
            sameas: sameAs("password")
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