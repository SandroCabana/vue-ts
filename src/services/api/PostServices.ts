import {ref,type Ref} from 'vue'
import {type IPost} from '@/interfaces/IPost'
class PostServices {
    private posts:Ref<Array<IPost>> = ref([]);
    constructor(){
        this.posts = ref<Array<IPost>>([]);
    }
    getPosts ():Ref<Array<IPost>>{
        return this.posts;
    }
    async fetchAll():Promise<void>{
        try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        this.posts.value = data;
        } catch (error) {
            console.log(error);
        }
    }   
}
export default PostServices;