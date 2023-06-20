<template>
    <div class="main" @submit.prevent>
        <div class="header">
            <h1> Все новости</h1>
            <router-link class="route-btn" to="/add-news">
                <button @click="addNews" 
                    href="/add-news" 
                    class="add-news-btn">
                    <div class="add-news-img">
                        <p id="add-news-sym" class="add-news-sym"> + </p>
                    </div> 
                    <p style="margin:10px 20px 10px 20px;">Добавить новость</p>
                </button>
            </router-link>
        </div>
        <div class="list">
            <div class="news-item" v-for="(item) in getNews" :key="item.id">
                <h2 class="news-item-title">{{ item.title }}</h2>
                <div class="divider"></div>
                <p style="color: black" class="news-item-text">{{ item.about }}</p>
                <router-link to="/news-page">
                    <button 
                        :value="item" 
                        @click="getItemData(item)" 
                        class="news-item-read-more-btn">
                        Читать новость
                    </button> 
                </router-link> 
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Main-page',
    data() {
        return {
            selectedNews: {}
        }
    },
    computed: {
        getSelectedNews() {
            return this.$store.getters.getSelectedNews
        },
        getNews() {
            return this.$store.getters.getNews
        }
    },
    methods: {
        getItemData(item) {
            this.selectedNews = item
            this.$store.commit('openNews', this.selectedNews)
        },
        addNews() {
            this.$store.state.selectedNews.id = ""
            const btnData = {
                pageTitle: "Создать новость",
                acceptСhangesBtn: "Добавить новость",
                removeDataBtn: "Очистить поле ввода",
                addNewsIconBtn: false,
                acceptChangesIconBtn: true
            }
            this.$store.commit('updateBtnStatus', btnData)
        }
    }
}
</script>

<style scoped>
h1 {
    color: white;
}

h2 {
    font-size: 20px;
}

.divider {
    background-color: #282828;
    width: 70%;
    height: 2px;
    margin: auto;
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
    justify-content: space-between;
    align-items: center;
}
.route-btn {
    position: absolute;
    top: 17px;
    right: 30px;
    text-decoration: none;
}
.add-news-btn{ 
    display: flex;
    border-radius: 10px;
    border: 2px solid;
    border-color: #EBEF18;
    background-color: #282828;
    flex-direction: row;
    box-shadow: 0 0 10px #EBEF18;
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

.news-item {
    margin: 20px;
    height: 400px;
    width: 250px; 
    min-height: 350px;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    border: 2px solid #282828;
    border-radius: 20px;
    justify-content: space-around;
    overflow: hidden;
}

.news-item-title {
    padding: 5px;
    overflow: hidden;
}

.news-item-text {
    margin: 10px;
    overflow: hidden;
}

.news-item-read-more-btn {
    padding: 8px 10px;
    margin: 10px 40px;
    background-color: #282828;
    color: white;
    border-radius: 10px;
    font-size: 14px;
    border: 2px solid;
}

.list{
    display: flex;
    flex-wrap: wrap;

}
</style>