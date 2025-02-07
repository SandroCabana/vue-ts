<template>
    <h1>Login</h1>
    <v-card>
        <v-form>
            <v-text-field label="Username" v-model="username" autocomplete="username"></v-text-field>
            <v-text-field label="Password" v-model="password" type="password" autocomplete="current-password"></v-text-field>
            <v-btn @click="sendLogin">Login</v-btn>
        </v-form>
        {{ user }}
    </v-card>
</template>

<script lang="ts" setup>
import { ref,type Ref } from 'vue';
import AuthService from '@/services/api/AuthService';
import type { User } from '@/interfaces/User';

const authStore = new AuthService();
const username = ref<string>('');
const password = ref<string>('');
let user = ref<Ref<User | null>>(ref(null));

    const sendLogin = async (): Promise<void> => {
    await authStore.login(username.value, password.value);
    user = authStore.getUser();
    console.log(user.value);
};
</script>