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
            <textarea class="feed_typetext" name="textarea" placeholder="Partagez avec la communauté"></textarea>
            <div class="feed_buttons">
                <input class="add_img" type="file" name="add_img" >
                <input class="input_createpost" type="submit" value="Publier">
            </div>
        </div>
        <div class="feed_posts">
            <post v-for="post in posts" />
        </div>
    </div>
</template> 

<script>
import navBar from '../components/navBar.vue'
import post from '../components/post.vue'

export default {
    name: "feed",
    components:{
        navBar, 
        post
    },
}
</script>

<style lang="scss" scoped>
*{
    font-family:'quicksand';
}
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
.feed_title{
    display: flex;
    justify-content: center;
    border : solid 4px #ed4033;
    border-radius: 20px;
    color: #ed4033;
    padding : 10px;
    margin: 15px;
    background : #ffebeb;
}
.feed_content{
    display: flex;
    flex-direction: column;
    align-items: center;
    background : #ffebeb;
    color: #ed4033;
    border: solid 2px #f9d7d6;
    border-radius : 40px;
    padding : 10px;
    margin: 15px;
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
        border: solid 3px #f9d7d6;
        border-radius : 10px;
        background-color : #f9d7d6;
        color: black;
        font-weight: bold;
        transition: cubic-bezier(.2, 3, .4, 1) .4s;
        &:hover{
        transform: scale(1.1);
        }
    }
}
</style>