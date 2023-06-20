import { createStore } from "vuex"

const store = createStore({
    state() {   
        return {
            statusBtn: { 
                pageTitle: "Создание новости",
                acceptСhangesBtn: "Добавить новость",
                removeDataBtn: "Сбросить поля",
                addNewsIconBtn: false,
                acceptChangesIconBtn: false,
            },
            news: [
                {
                    id: Date.now() + 1,
                    title: "Генштаб: в России сформируют две армии и два военных округа",
                    about: "В Вооруженных силах России в 2023 году должны сформировать общевойсковую и воздушную армии, а также два военных округа — Московский и Ленинградский. Об этом заявил заместитель начальника Генштаба генерал-полковник Евгений Бурдинский в статье для журнала Минобороны «Военные комиссариаты России».",
                    text: "В числе главных задач российских Вооруженных сил на 2023 год Бурдинский назвал выполнение задания на отбор граждан на военную службу по контракту, а также выполнение нормы призыва граждан на военную службу. О создании двух новых «межвидовых стратегических территориальных объединения Вооруженных Сил» — Московского и Ленинградского военных округов — министр обороны Сергей Шойгу объявил в декабре 2022 года. Тогда же он заявил о планах сформировать «самодостаточные группировки войск» на присоединенных территориях",
                },
            ],
            selectedNews: {
                id: "",
                title: "",
                about: "",
                text: ""
            },
        }
    },
    mutations: {
        addNews(state, newNews) {
            state.news.push(newNews)
        },
        openNews(state, selectedNews) {
            state.selectedNews = selectedNews
            console.log("То что в open в store", state.selectedNews);
        },
        removeNews(state, newNews) {
            const index = state.news.findIndex(item => item.id === newNews.id);
            if (index !== -1) {
                state.news.splice(index, 1);
            }
        },
        updateNews(state, newNews) {
            const index = state.news.findIndex(item => item.id === newNews.id);
            if (index !== -1 ) {
                state.news.splice(index, 1, newNews);
            }
        },
        clearSelectedNews(state, selectedNews) {
            state.selectedNews = selectedNews
        },
        updateBtnStatus(state, btnData) {
            state.statusBtn = btnData
        }
    },
    actions: {
        addNews({commit}, newNews) {
            commit('newNews', newNews)
        },
        openNews({commit}, selectedNews) {
            commit('selectedNews', selectedNews)
        },
        removeNews({commit}, newNews ) {
            commit('newNews', newNews)
        },
        updateNews({commit}, newNews) {
            commit('newNews', newNews)
        },
    },
    getters: {
        getNews(state) {
            return state.news
        },
        getSelectedNews(state) {
            return state.selectedNews
        }
    } 
})

 export default store;