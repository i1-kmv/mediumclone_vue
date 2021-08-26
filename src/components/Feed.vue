<template>
    <div>
        <div v-if="isLoading">Loading...</div>
        <div v-if="error">Something bad happened</div>
        <div v-if="feed">
            <div class="article-preview" v-for="(article,index) in feed.articles" :key="index">
                <div class="article-meta">
                    <router-link :to="{name:'userProfile', params: {slug: article.author.username} }">
                        <img :src="article.author.image">
                    </router-link>
                    <div class="info">
                        <router-link class="author"
                                     :to="{name:'userProfile', params: {slug: article.author.username} }">
                            {{article.author.username}}
                        </router-link>
                    </div>
                    <span class="date">
                        {{article.createdAdd}}

                    </span>
                </div>
                <div class="pull-sx-right">
                    ADD TO FAVOURITES
                </div>
            </div>
            <router-link :to="{name:'article', params:{slug: article.slug}}" class="preview-link">
                <h1>{{article.title}}</h1>
                <p>{{article.description}}</p>
                <span>Read more...</span>
                TAG LIST
            </router-link>
        </div>
        Pagination

    </div>
</template>

<script>

    import {actionTypes} from "../store/modules/feed"
    import {mapState} from "vuex";

    export default {
        name: "Feed.vue",
        props: {
            apiUrl: {
                type: String,
                required: true
            }
        },
        computed: {
            ...mapState({
                isLoading: state => state.feed.isLoading,
                feed: state => state.feed.data,
                error: state => state.feed.error
            })
        },
        mounted() {
            this.$store.dispatch(actionTypes.getFeed, {apiUrl: this.apiUrl})
        }
    }
</script>

<style scoped>

</style>