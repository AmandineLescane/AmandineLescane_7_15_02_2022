<template>
    <div class="post_block"
    v-for="post in posts"
    :key="post.id">
        <div class="post_user">
            <h3>{{user.name}} {{user.lastName}}</h3>
        </div>
        <div class="post_content">
            <h4 class="post_title">{{message.title}}</h4>
            <p class="post_text">{{message.post_content}}</p>
            <p class="post_img">
                <img 
                    src=""  
                    alt=""
                    v-if="message.imageUrl != null"
                />
            </p>
        </div>
        <div class="post_icon">
            <span class="post_like">
                <button class="post_button" @click="likePost()">
                    <i class="fa fa-heart"></i>
                </button>
                <p class= "likeNbr">{{message.likeNbr}}</p>
            </span>
            <button class="post_button" @click="deletePost()">
                <i class="fa fa-trash"></i>
            </button>
        </div>
        <div class="comment_block">
            <div class="comment_content">
                <input
                    class="comment_create" 
                    placeholder="Votre commentaire..."
                    v-model="comment_create"
                    @keyup.enter="createComment()"
                />
            </div>
            <div class="comment_list"
                v-for="comment in comments"
                :key="comment.id"
            >
                <span class="comment">
                <h5 class="comment_user">{{user.name}} {{user.lastName}}</h5>
                <p class="comment_text">{{comment.comment_content}}</p>
                </span>
                <button class="post_button" @click="deleteComment()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "post",
    data (){
        return {
            posts : [],
            comments : [],
            comment_create : "",
        }
    },
    // methods : {
    //     getPosts(){
    //         fetch('http://localhost:3000/api/post/', {
    //             method : "GET",
    //             Authorization : `Bearer ${localStorage.getItem("token")}`,
    //         })
    //         .then((res)=> {
    //             this.posts = res.data;
    //         })
    //         .catch((err)=> {
    //             console.log("erreur lors du chargement des posts")
    //         })
    //     },
    //     createComment(){
    //         let newComment = {
    //             comment_content : this.comment_content,
    //         }; 
    //         fetch('http://localhost:3000/api/comment/', newComment, {
    //             method : "POST",
    //             Authorization : `Bearer ${localStorage.getItem("token")}`,
    //         })
    //         .then((res)=> {
    //             console.log(res);
    //         })
    //         .catch((err)=> {
    //             console.log(err);
    //         })
    //     },
    //     deletePost(){
    //         fetch('http://localhost:3000/api/post/:id', {
    //             method : "DELETE",
    //             Authorization : `Bearer ${localStorage.getItem("token")}`,
    //         })
    //         .then((res)=> {
    //             console.log(res);
    //             window.location.reload();
    //         })
    //         .catch((err)=> {
    //             console.log(err);
    //         })
    //     },
    //     deleteComment(){
    //         fetch('http://localhost:3000/api/comment/:id', {
    //             method : "DELETE",
    //             Authorization : `Bearer ${localStorage.getItem("token")}`,
    //         })
    //         .then((res)=> {
    //             console.log(res);
    //             window.location.reload();
    //         })
    //         .catch((err)=> {
    //             console.log(err);
    //         })
    //     },
    // mounted(){
    //     this.getPosts();
    // },
    // }
}
</script>

<style lang="scss">
@import "../style.scss";
.post_block{
    background-color: white;
    display: flex;
    flex-direction: column;
    border: solid 2px $border-color;
    border-radius : 40px;
    margin: 15px;
    padding : 20px;

    .post_content{
    color : black;
    }

    .post_user{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin : 5px;
    padding: 4px;
    border-bottom: solid 2px $border-color;
    }
    img {
    object-fit: contain;
    width: 100%;
    max-height: 40%;
    }
}
.post_icon {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-top: solid 2px $border-color;
    border-bottom: solid 2px $border-color;
}
.post_like{
    display: flex;
    align-items: center;
}
.post_button {
    border: none; 
    background-color: white;
    cursor: pointer;
    :hover{
        transform: scale(1.1);
    }
}
.fa{
    font-size: 20px;
    padding: 5px;
}
.fa-heart{
        color: $font-color;
        transition: cubic-bezier(.2, 3, .4, 1) .4s;
}
.fa-trash{
    color: black;
    transition: cubic-bezier(.2, 3, .4, 1) .4s;
}
.comment_block{
    display: flex;
    flex-direction: column ;
    margin-top: 10px;
    color: black;

    .comment_create{
        width: 99%;
        height: 25px;
        border: solid 1px $border-color;
        border-radius : 10px;
        background-color: $background-color;
    }
    .comment_list{
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 4px;
        padding: 3px 0px 10px 0px;
        background-color: white;
        border-bottom: $border-color solid 1px;
    }
    p{
        font-size: 15px;
    }
    .comment{
        background-color: white;
    }
}
.comment_user, .comment_text{
    margin: 0px;
}
.fa-times{
    color: lightgray;
    font-size: large;
    transition: cubic-bezier(.2, 3, .4, 1) .4s;
}
</style>