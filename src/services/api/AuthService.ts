import { ref, type Ref } from 'vue';
import { type User } from '@/interfaces/User';

class AuthService {
    private user: Ref<User | null> = ref(null);

    constructor() {
        this.user = ref<User | null>(null);
    }

    getUser(): Ref<User | null> {
        return this.user;
    }

    async login(username: string, password: string): Promise<void> {
        try {
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            const user = await response.json();
            this.user.value = user;
        } catch (error) {
            console.log(error);
        }
    }
}

export default AuthService;