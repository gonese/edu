<template>
    
    <div>
        <div>
            <el-input placeholder="enter username" v-model="name" clearable class = ''></el-input>
            <span v-if="error.name" class="err-msg">{{error.name}}</span>
        </div>
        <div>
            <el-input placeholder="enter password" v-model="password" show-password class="input-style"> </el-input>
            <span v-if="error.pwd" class="err-msg">{{error.pwd}}</span>
        </div>
        <div>
            <el-button type="primary" @click="login" class="login_style">Log In</el-button>
        </div>
    </div>
</template>
<script>
    export default{
        name:"Login",
        data(){
            return {
                name:"",
                password:"",
                error:{
                    name:"",
                    password:""
                }
            }

        },
        methods:{
            login(){
                const {name,password,$router} = this
                this.$router.push({
                    path:"/",
                    parameters:{
                        username: this.name
                    }
                })

            },
            debug (event) {
                console.log(event.target.name)
            }
        }



    }

</script>