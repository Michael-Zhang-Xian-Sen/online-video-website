<template>
    <div id="video-upload">
        <br>
        <el-upload class="avatar-uploader"
                   ref="upload"
                   drag
                   action="http://47.99.44.124:8088/upload"
                   :auto-upload="false"
                   :limit="1"
                   :on-exceed="uploadExceed"
                   :data="videoInfo"
                   :before-upload="uploadBefore"
                   :on-progress="uploadProcess"
                   :on-success="uploadSuccess"
        >
            <div v-if="!isVideoUploading">
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">支持mp4、avi、mkv等常用格式</div>
            </div>
            <el-progress v-if="isVideoUploading"
                         type="circle"
                         :percentage="videoUploadPercent"
                         style="margin-top:7px;" 
            />
        </el-upload>
        <el-form style="margin: 0 10%;">
            <el-form-item label="标题">
                <el-input v-model="videoInfo.name"></el-input>
            </el-form-item>
            <el-form-item label="简介">
                <el-input type="textarea" v-model="videoInfo.introduction" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
            </el-form-item>
            <el-form-item style="text-align: right;">
                <el-button type="primary" @click="submitUpload">上传视频</el-button>
            </el-form-item>
        </el-form>
        <br>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isVideoUploading: false,
                videoUploadPercent: "",
                videoInfo: {
                    name: 'test video',
                    introduction: '简介简介简介',
                },
            }
        },
        methods: {
            submitUpload() {
                this.$refs.upload.submit();
            },
            uploadExceed(files, fileList) {
                this.$message.warning(` ${files.length + fileList.length} 个视频超出了上限，只能上传1个`);
            },
            uploadBefore(file) {
                if (['video/mp4', 'video/ogg', 'video/flv', 'video/avi', 'video/wmv', 'video/rmvb', 'video/mov']
                    .indexOf(file.type) === -1) {
                    this.$message.warning("视频格式不支持");
                    return false;
                }
                const fileSize = file.size / 1024 / 1024 < 100;
                if (!fileSize) {
                    this.$message.warning("视频不能超过100MB");
                    return false;
                }
                this.isVideoUploading = true;
            },
            uploadProcess(event, file) {
                this.videoUploadPercent = file.percentage.toFixed(0) * 1;
            },
            uploadSuccess(res, file) {
                this.videoUploadPercent = 0;
                console.log(res, file);
                this.isVideoUploading = false;
            }
        }
    }
</script>

<style scoped>
#video-upload{
    text-align: center;
}
</style>