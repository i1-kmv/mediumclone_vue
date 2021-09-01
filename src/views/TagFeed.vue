<template>
    <div class="home-page">
        <mcv-banner/>
        <div class="container page">
            <div class="row">
                <div class="col-md-9">
                    <mcv-feed :api-url="apiUrl"></mcv-feed>
                </div>
                <div class="col-md-3">
                    <mcv-popular-tags/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import McvFeed from '@/components/Feed.vue'
    import McvPopularTags from '@/components/PopularTags.vue'
    import McvBanner from '@/components/Banner.vue'

    export default {
        name: 'McvTagFeed',
        components: {
            McvFeed,
            McvPopularTags,
            McvBanner
        },
        computed: {
            apiUrl() {
                const tagName = this.$route.params.slug
                return `/articles?tag=${tagName}`
            }
        }
    }
</script>
