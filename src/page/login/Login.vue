<template>
    <div id="login">
        <el-form :model="ruleForm2" :rules="rules2"
         status-icon
         ref="ruleForm2" 
         label-position="left" 
         label-width="0px" 
         class="demo-ruleForm login-page">
            <h3 class="title" style="margin-bottom: 20px;" >用户登录</h3>
            <el-form-item prop="username">
                <el-input type="text" 
                    v-model="ruleForm2.username" 
                    auto-complete="off" 
                    placeholder="用户名"
                ></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" 
                    v-model="ruleForm2.password" 
                    auto-complete="off" 
                    placeholder="密码"
                ></el-input>
            </el-form-item>
            <el-checkbox 
                v-model="checked"
                class="rememberme"
            >记住密码</el-checkbox>
            <el-form-item style="width:100%;">
                <el-button type="primary" style="width:100%;" @click="handleSubmit" :loading="logining">登录</el-button>
            </el-form-item>
            <el-row style="text-align: center; margin-top: -10px;">
                <el-link type="primary" style="margin-right: 50px;">忘记密码</el-link>
                <el-link type="primary" @click="register_tel()">用户注册</el-link>
            </el-row>            
        </el-form>
    </div>
</template>

<script>
export default {
    name:"Login",
    data(){
        return {
            logining: false,
            ruleForm2: {
                username: '',
                password: '',
            },
            rules2: {
                username: [{required: true, message: '请输入账号！', trigger: 'blur'}],
                password: [{required: true, message: '请输入密码！', trigger: 'blur'}]
            },
            checked: false
        }
    },
    components:{
    },
    created(){
    },
    methods:{ 
        register_tel(){
            this.$router.push({ path:'/login/register_tel'  })
        }
    }
}
</script>

<style scoped>
#login{
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
}
/*
.login-container {
    width: 100%;
    height: 100%;
}
*/
.login-page {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}
label.el-checkbox.rememberme {
    margin: 0px 0px 15px;
    text-align: left;
}
</style>