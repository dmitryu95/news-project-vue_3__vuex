<template>
    <div class="main" @submit.prevent>
        <div class="header">
            <router-link to="/">
                <button type="button" 
                    href="#/add-news" 
                    class="back-btn"
                    @click="clearDataNews">
                    &lt;
                </button>
            </router-link>
            <h1> 
                {{ this.$store.state.statusBtn.pageTitle }} 
            </h1>
        </div>
        <div class="container">
            <div class="title-container">
                <p class="title-text"> Заголовок новости </p>
                <textarea class="title"
                    type="text"
                    :value="this.$store.state.selectedNews.title"
                    @input="getNewsTitle">
                </textarea>
            </div>
            <div class="about-container">
                <p class="title-text" >
                    Подзаголовок
                </p>
                <textarea class="about"
                    :value="this.$store.state.selectedNews.about"
                    @input="getNewsAbout">
                </textarea>
            </div>
            <div class="text-container">
                <p class="title-text">
                    Содержание новости
                </p>
                <textarea class="text"
                    :value="this.$store.state.selectedNews.text"
                    @input="getNewsText">
                </textarea>
            </div>
            <div class="button-wrap">
            <!-- <router-link to="/"> -->
                <button @click="updateNewsBtn" class="news-btn">
                    <img src='../assets/save-icon.png' v-if=this.$store.state.statusBtn.addNewsIconBtn>
                    <div class="add-news-img" v-if=this.$store.state.statusBtn.acceptChangesIconBtn>
                        <p id="add-news-sym" class="add-news-sym"> + </p>
                    </div> 
                    <p style="color: #282828;">{{ this.$store.state.statusBtn.acceptСhangesBtn }} </p>
                </button>
            <!-- </router-link> -->
            <!-- <router-link to="/"> -->
                <button type="button" class="news-btn" @click="removeNews">
                    <img src="../assets/delete-icon.png">
                    <p style="color: #282828;">{{ this.$store.state.statusBtn.removeDataBtn }}</p>
                </button>
            <!-- </router-link> -->

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Add-news-page",
    data() {
        return {
            newTitle: this.$store.state.selectedNews.title,
            newAbout: this.$store.state.selectedNews.about,
            newText: this.$store.state.selectedNews.text,
        }
    },
    methods: {
        getNewsTitle(event) {
            this.newTitle = event.target.value
        },

        getNewsAbout(event) {
            this.newAbout = event.target.value
        },

        getNewsText(event) {
            this.newText = event.target.value
        },

        updateNewsBtn() {
            if(this.$store.state.selectedNews.id == "") {
                const newNews = {
                    id: Date.now(),
                    title: this.newTitle,
                    about: this.newAbout,
                    text: this.newText
                } 
                if(newNews.title !== "") {
                    this.$store.commit('addNews', newNews)
                    alert("Новость успешно добавлена")
                } else alert("Заполните поля")
            } else {
                const newNews = {
                    id: this.$store.state.selectedNews.id,
                    title: this.newTitle,
                    about: this.newAbout,
                    text: this.newText
                } 
                if(newNews.title !== "") {
                    this.$store.commit('updateNews', newNews)
                } else alert("Заполните поля")
            } 
            this.clearDataNews()
        },
        clearDataNews() {
            this.newsId = ""
            this.newTitle = "",
            this.newAbout = "",
            this.newText = ""
            const newNews = {
                id: this.newsId = "",
                title : this.newTitle,
                about : this.newAbout,
                text :  this.newText
            }
            this.$store.commit('clearSelectedNews', newNews)
        },
        removeNews() {
            console.log(this.$store.state.selectedNews.id);
            if(this.$store.state.selectedNews.id !== "") {
                alert("Новость успешно удалилась!!!")
                const newNews = {
                        id: this.$store.state.selectedNews.id,
                } 
                    this.$store.commit('removeNews', newNews)
            } this.clearDataNews()
        }
    }
}
</script>

<style scoped>
h1 {
    color: white;
}

p {
    color: #ffffff;
    font-size: 14px;
    padding: 0px;
    margin: 0px;
}
.title-text {
    color: #282828; 
    display: flex;
    width: 100%;
    margin: auto;
    padding-bottom: 5px;
    font-family: Montserrat;
    font-style: italic;
    font-size: 16px;
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
    border: none; 
    padding-right: 30px;
}
.container {
    width: 60%;
    margin: auto;
    padding: 0;
    display: flex;
    flex-direction: column;
}
.title-container {
    margin-top: 7%;
}
.text-container {
    margin-top: 7%;
}
.title {
    width: 100%;
    height: 40px;
    resize: none;
    border: 2px solid black;
    border-radius: 7px;
    font-size: 20px;
    font-family: Montserrat;
}
.about-container {
    margin-bottom: 0px;
    margin-top: 7%;
}
.about {
    width: 100%;
    height: 40px;
    resize: none;
    border: 2px solid black;
    border-radius: 7px;
    font-size: 18px;
    font-family: Montserrat;
}
.text {
    width: 100%;
    height: 200px;
    text-align: start;
    display: flex;
    margin: auto;
    resize: none;
    border: 2px solid black;
    border-radius: 7px;
    font-size: 18px;
    font-family: Montserrat;
}
.button-wrap{
    display: flex;
    width: 100%;
    margin: auto;
    display: flex;
    margin-top: 40px;
    
}
.news-btn{
    display: flex;
    border-radius: 10px;
    border: 2px solid;
    border-color: black;
    background-color: white;
    flex-direction: row;
    align-items: center;
    height: 50px;
    margin-right: 100px;
}

img {
    height: 25px;
    padding-right: 10px;
}
.add-news-img {
    border-radius: 25px;
    width: 25px;
    height: 25px;
    display: flex;
    border: 1px solid black;
    margin: 5px;
    color: #282828;
}
.add-news-sym {
    font-size: 35px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin: auto;
    margin-block-start: 0px;
    margin-block-end: 0px;
    align-content: center;
    margin-top: 1px;
    color: black;
}
</style>