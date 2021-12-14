<template>
    <div class="Header">
            <h1>Groupomania</h1>
        <ul>
            <li><a href="http://google.com">Connection</a></li>
            <li><a href="http://google.com">Créer un compte</a></li>
            <li></li>
        </ul>
    </div>
</template>

<script>

</script>

<style>
.Header{
    height: 100%;
    background-color: #236db6;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

img{
    width: 5%;
    height: 5%;
}
h1{
    margin: 5px 10px 10px 60px;
}
ul{
    text-decoration: none;
    list-style: none;
    color: black;
    display: flex;
    flex-direction: row;
}
li{
    margin: 10px;
}
</style>