<template>
    <div>
        <form id="register">
            <div>
                <p>User Name:</p>
                <input v-model="username" placeholder="username">
            </div>
            <div>
                <p>password:</p>
                <input v-model="password" placeholder="password">
            </div>
            <div>
                <p>email:</p>
                <input v-model="Email" placeholder="password">
            </div>
            <div>
                <p>phone number:</p>
                <input v-model="Phone" placeholder="password">
            </div>
        </form>
    </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
})
</script>
