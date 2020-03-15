<template>
    <div id="video">
        <el-row>
            <video-player class="video-player-box"
                          ref="videoPlayer"
                          :options="playerOptions"
                          :playsinline="true"
                          @play="onPlayerPlay($event)"
                          @pause="onPlayerPause($event)"
            >
            </video-player>
        </el-row>
        <el-row>
            <div style="font-size: 30px;color: #1b61a9">
                <svg class="icon" aria-hidden="true" @click="videoLike">
                    <use v-if="videoInfo.isLiked" xlink:href="#icon-like2"/>
                    <use v-else xlink:href="#icon-like1"/>
                </svg>
                <svg class="icon" aria-hidden="true" @click="videoMark">
                    <use v-if="videoInfo.isMarked" xlink:href="#icon-mark2"/>
                    <use v-else xlink:href="#icon-mark1"/>
                </svg>
                <svg class="icon" aria-hidden="true" @click="videoShare">
                    <use xlink:href="#icon-share"/>
                </svg>
            </div>
        </el-row>
        <el-row>
            评论<br>
            <el-input  v-model="comment.content" type="textarea" resize="none" :autosize="{ minRows: 1, maxRows: 3 }" style="width: 80%;resize: none;font-size: 15px;"/>
            <el-button type="primary" size="medium" round @click="videoComment">评论</el-button>
            <el-divider />
            <div class="infinite-list" v-infinite-scroll="videoCommentGetMore" style="overflow: auto; height: 400px;">
                <div v-for="(v, k) in videoInfo.comments" :key="'comment' + k">
                    <span>{{ v.username }}</span>
                    <span>{{ v.time }}</span>
                    <div>{{ v.content }}</div>
                    <el-divider />
                </div>
            </div>
        </el-row>
    </div>
</template>

<script>
    import 'video.js/dist/video-js.css'
    import { videoPlayer } from 'vue-video-player'
    import './icon/iconfont'
    export default {
        components: {
            videoPlayer
        },
        data() {
            return {
                playerOptions: {
                    muted: true,
                    language: 'zh-CN',
                    playbackRates: [0.25, 0.5, 1.0, 1.25, 2.0],
                    sources: [{
                        type: "video/mp4",
                        src: "https://www.w3school.com.cn/i/movie.mp4"
                    }],
                },
                videoInfo: {
                    isLiked: false,
                    isMarked: false,
                    comments: [
                        {
                            username: 'a',
                            time: '2020-01-01',
                            content: 'fd'
                        },
                        {
                            username: 'b',
                            time: '2020-02-01',
                            content: 'ads'
                        },
                    ]
                },
                comment: {
                    username: 'a',
                    time: '2020-01-01',
                    content: ''
                }
            }
        },
        created() {
            this.initPlayer();
        },
        mounted() {
            console.log('player: mounted', this.player)
        },
        computed: {
            player() {
                return this.$refs.videoPlayer.player
            }
        },
        methods: {
            initPlayer() {

            },
            videoLike() {
                this.videoInfo.isLiked = !this.videoInfo.isLiked
            },
            videoMark() {
                this.videoInfo.isMarked=!this.videoInfo.isMarked
            },
            videoShare() {
            },
            videoComment() {
                if (this.comment.content.length === 0) {
                    this.$message.warning({ message: '评论不能为空', duration:1500 });
                    return;
                }
                this.comment.content = '';
            },
            videoCommentGetMore() {
                if (this.videoInfo.comments.length > 10) {
                    return;
                }
                this.videoInfo.comments.push({
                    username: 'c',
                    time: '2020-02-0e',
                    content: 'adsa'
                })
            },
            onPlayerPlay(player) {
                console.log('player: play', player)
            },
            onPlayerPause(player) {
                console.log('player: pause', player)
            },

        }
    }
</script>

<style scoped>
#video{
    height: 800px;
    width: 100%;
    justify-content: center;
    align-items: center;
}
.icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>