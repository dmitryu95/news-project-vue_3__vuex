<template>
    <div class="main" @submit.prevent>
        <div class="header">  
            <router-link to="/">
                <button type="button" 
                    href="#/add-news" 
                    class="back-btn"
                    @click="backBtn">
                     &lt; 
                </button>
            </router-link>
            <h1>Новость </h1>
            <router-link class="route-btn" to="/add-news">
                <button href="/add-news" 
                    class="add-news-btn"
                    @click="editNews">
                    <div class="add-news-img">
                        <img src="../assets/edit-icon.png">
                    </div> 
                    <p style="margin:10px 20px 10px 20px;">Редактировать новость</p>
                </button>
            </router-link>
        </div>
        <div class="content">
            <div class="content-title">
                <h2>
                    {{ this.getSelectedNews.title }}
                </h2>
            </div>
            <div class="content-about">
                <h3>
                    {{ this.getSelectedNews.about }}
                </h3>
            </div>
            <div class="content-text">
                <p style="color:#2c3e50; font-size: 16px;">
                    {{ this.getSelectedNews.text }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'News-Page',
    data() {
        return {
            selectedNews: {
            }
        }
    },
    computed: mapGetters(['getSelectedNews']),
    methods: {
        editNews() {
            this.selectedNews = {
                id: Date.now(),
            }
            const btnData = {
                pageTitle: "Редактировать статью",
                acceptСhangesBtn: "Сохранить правки",
                removeDataBtn: "Удалить новость",
                addNewsIconBtn: true,
                acceptChangesIconBtn: false
            }
            this.$store.commit('updateBtnStatus', btnData)
        },
        backBtn() {
            this.deleteData()
        },
        deleteData() {
            this.newsId = "",
            this.newTitle = "",
            this.newAbout = "",
            this.newText = ""
            const newNews = {
                id: this.newsId,
                title : this.newTitle,
                about : this.newAbout,
                text :  this.newText
            }
            this.$store.commit('clearSelectedNews', newNews)
        }
    }
}
</script>

<style scoped>
h1 {
    color: white;
}

h3 {
    border-bottom: 2px solid rgb(44, 62, 80);
    padding: 20px 0px;
}

p {
    color: #ffffff;
    font-size: 14px;
    padding: 0px;
    margin: 0px;
}
.main {
    margin: 0;
    padding: 0;
    width: 100%;
}
.header {
    border: 2px solid #2c3e50;
    display: flex;
    background-color: #282828;
    padding-inline: 10%;
    align-items: center;
}
.back-btn {
    background-color: #282828;
    font-size: 35px;
    color: #ffffff;
    border-color: #282828;
    border: none; 
    padding-right: 30px;
}
.route-btn {
    position: absolute;
    top: 17px;
    right: 30px;
}
.add-news-btn{ 
    display: flex;
    border-radius: 10px;
    border-color: #ffffff;
    background-color: #282828;
    flex-direction:row ;
    align-items: center;
}
.add-news-img {
    border-radius: 25px;
    width: 30px;
    height: 30px;
    display: flex;
    border: 2px solid #ffffff;
    margin: 5px;
}
#add-news-sym {
    font-size: 40px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin: auto;
    margin-block-start: 0px;
    margin-block-end: 0px;
    align-content: center;
    margin-top: 1px;
}
.content {
    display: flex;
    width: 60%;
    margin: auto;
    flex-direction: column;
}
.content-title {
    text-align: left;
}
.content-about {
    text-align: left;
    font-size: 18px;
}
.content-text {
    text-align: left;
    font-size: 16px;
}
</style>