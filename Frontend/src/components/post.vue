<template>
    <div class="post_block">
        <div class="post_user">
            <h5>{{post.user.prenom}} {{post.user.nom}}</h5>
        </div>
        <div class="post_content">
            <h6 class="post_title"></h6>
            <p class="post_text"></p>
            <p class="post_img">
                <img v-bind:src="post.imageURL"  alt=""/>
            </p>
        </div>
        <div class="post_like post_delete">
            <font-awesome-icon icon="fa-solid fa-heart" />
            <button class="post_delete" v-if="post.userId === user.id || user.isAdmin === true" @click="deletePost">Supprimer</button>
        </div>
        <div class="comment_block">
            <div class="comment_content">
                <textarea class="comment_create" placeholder="Votre commentaire..."></textarea>
                <input class="input_createpost" type="submit" value="Publier">
            </div>
            <h5 class="comment_user">{{comment.user.prenom}} {{comment.user.nom}}</h5>
            <p class="comment_text">{{comment.content}}</p>
            <font-awesome-icon icon="fa-solid fa-xmark"  v-if="post.userId === user.id || user.isAdmin === true" @click="deletePost"/>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
</style>