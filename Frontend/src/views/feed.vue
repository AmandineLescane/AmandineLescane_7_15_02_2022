<template> 
    <div class="menu">
        <navBar/>
    </div>
    <div class="div_img">
        <img src="../assets/icon-above-font.png"  alt="auth_img" class="auth_img">
    </div>
    <div class="feed_content">
        <h2>Quoi de neuf ?</h2>
        <div class="feed_createpost">
            <textarea 
                class="feed_typetext" 
                name="textarea" 
                placeholder="Partagez avec la communauté"
                v-model="post_content">
            </textarea>
            <div class="feed_buttons">
                <input 
                    class="add_img" 
                    type="file" 
                    ref="image"
                    name="image"
                    accept="image/png, image/jpeg"
                    @change="add_img(image)"
                >
                <input 
                class="input_createpost" 
                type="submit" 
                value="Publier"
                @click.prevent="createPost()"
                />
            </div>
        </div>
        <div class="feed_posts">
            <Post/>
        </div>
    </div>
</template> 

<script>
import navBar from '../components/navBar.vue';
import Post from '../components/post.vue';

export default {
    name: "feed",
    components:{
    navBar,
    Post
},
    data (){
        return {
        post_content: "",
        image: "", 
        }
    },
    methods : {
        // add_img(){
            
        // },
        createPost(){
            let newPost = {
                post_content : this.post_content,
                image : this.image,
                UserId : localStorage.getItem("userId"),
            }

            if (this.post_content === ""){
                alert("Le contenu du post est vide, veuillez écrire quelque chose !");
            }
            else { 
                fetch('http://localhost:3000/api/post/', {
                    method : "POST",
                    body: JSON.stringify(newPost),
                    headers:{
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                })
                .then((res => {
                    res.json()
                    .then(data => {
                        console.log(data);
                        if(res.status === 201){
                            document.location.reload();
                            this.$router.push("/feed");
                        } else {
                            alert("Erreur lors de la publication de votre post");
                        }
                    })
                .catch(error => console.log(error))
                }))
            }
        },
    }
}
</script>

<style lang="scss" scoped>
@import "../style.scss";
.div_img{
    display: flex;
    flex-direction : row;
    justify-content: center;
    margin-right: 20px;
    margin-left: 20px;
    .auth_img{
        width: 200px;
    }
}
.feed_posts {
    width: 60%;
    margin-top : 30px;
}
.feed_content{
    display: flex;
    flex-direction: column;
    align-items: center;
    background : $background-color;
    color: $font-color;
    border: solid 2px $border-color;
    border-radius : 40px;
    padding : 10px;
    margin: 25px;
    .feed_createpost{
        display:flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
    }
    .feed_typetext{
    width: 90%;
    max-width: 90%;
    border: solid 3px #f9d7d6;
    border-radius : 10px;
    }
    .feed_buttons{
        display: flex;
        width: 90%;
        flex-direction : row;
        justify-content: space-between;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .input_createpost{
        @include feed_button;
    }
}
</style>