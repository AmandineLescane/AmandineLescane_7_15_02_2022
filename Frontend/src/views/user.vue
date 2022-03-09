<template>
    <navBar />
    <div class="div_img">
        <img src="../assets/icon-above-font.png"  alt="auth_img" class="auth_img">
    </div>
    <div class="user_block">
        <div class="user_title">
            <h1>Mon compte </h1>
        </div>
        <div class="user_name">
            <h4>Prénom : </h4>
        </div>
        <div class="user_lastname">
            <h4>Nom : </h4>
        </div>
        <div class="user_email">
            <h4>Adresse mail : </h4>
        </div>
        <div>
            <input class="user_deactivate" type="button" value="Désactiver compte">
        </div>
    </div>
</template>

<script>
import navBar from '../components/navBar.vue'


export default {
    name: "feed",
    components:{
        navBar, 
    },
}
</script>

<style lang="scss" scoped>
*{
    font-family : 'Quicksand';
}
.user_block{
    background : #ffebeb;
    border-radius : 50px;
    padding : 15px;
    display: flex; 
    flex-direction : column;
    align-items : center;
    border: solid 2px #f9d7d6;
    margin: 15px;
    h1{
        color: #ed4033;
    }
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
.user_deactivate{
    margin-top :15px;
    border: solid 3px #ed4033;
    border-radius : 10px;
    background-color : #ed4033;
    color: black;
    font-size: 18px;
    font-weight: bold;
    transition: cubic-bezier(.2, 3, .4, 1) .4s;
    &:hover{
        transform: scale(1.1);
    }
}

</style>