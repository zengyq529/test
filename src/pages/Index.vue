<template>
    <div>
        <header class="ui_header">
            <div class="ui_header_in">
                <span class="ui_header_left middle mt10"><img src="/images/logo.jpg" class="userheader"></span>
                <span class="ui_header_center">联系人</span>
                <span class="ui_header_right">添加</span>
            </div>
        </header>

        <div class="ui_contain_top">
            <!--搜索-->
            <div class="ui_contain_search">
                <div class="ui_contain_search_in">
                    <i class="mt10"></i>
                    <input placeholder="搜索">
                </div>
            </div>
            <!--新的朋友-->
            <div class="ui_contain_new mt30">
                <p class="ui_contain_new_top">发现你认识的人</p>
                <div class="ui_contain_new_inner">
                    <span class="ui_contain_new_inner_left big"><img class="userheader" src="/images/logo.jpg"></span>
                    <span class="ui_contain_new_inner_center">
						<b>无线-曾锐</b><i>&#x2640;35</i><br> <!--&#x2642;-->
						6位共同好友<br>
						好好对待每一次伤病否则[这里开始是……]
					</span>
                    <span class="ui_contain_new_inner_right">添加</span>
                </div>
            </div>
        </div>

        <ul class="ui_contain_create mt30">
            <li>新朋友<i></i></li>
            <li>创建群聊<i></i></li>
        </ul>

        <div class="ui_contain_page mt30">
            <div class="banner">
                <ul>
                    <li class="on">好友</li>
                    <li>群聊</li>
                    <li>设备</li>
                    <li>通讯录</li>
                    <li>公众号</li>
                </ul>
                <i></i>
            </div>
            <div class="page">
                <div class="ui_friend_list">
                    <p class="open"><em></em>特别关心<i>1/1</i></p>
                    <ul>
                        <li>
                            <span class="friend_list_left small"><img class="userheader" src="/images/logo.jpg"></span>
                            <span class="friend_list_center"><b>无线-曾锐</b><i class="vip">svip</i><br>[wifi在线]<em class="star"></em>一次伤病否则[这里开始是……]</span>
                        </li>
                        <li>
                            <span class="friend_list_left small"><img class="userheader" src="/images/logo.jpg"></span>
                            <span class="friend_list_center"><b>啊哈哈</b><br>[4G在线]<em class="star"></em>木有东东</span>
                        </li>
                    </ul>
                    <p><em></em>朋友<i>25/52</i></p>
                    <ul class="hide">

                    </ul>
                </div>
            </div>
            <div class="page">
                <div class="ui_friend_list">
                    <p class="open"><em></em>未命名的群聊<i>2</i></p>
                    <ul>
                        <li>
                            <span class="friend_list_left small"><img class="userheader" src="/images/logo.jpg"></span>
                            <span class="friend_list_center one_line"><b>暴风体育，雪儿，zengzeng</b><u>(3)</u></span>
                        </li>
                        <li>
                            <span class="friend_list_left small"><img class="userheader" src="/images/logo.jpg"></span>
                            <span class="friend_list_center one_line"><b>暴风体育，雪儿，zengzeng</b><u>(3)</u></span>
                        </li>
                    </ul>
                    <p><em></em>加入我的群聊<i>10</i></p>
                </div>
            </div>
            <div class="page hide"></div>
            <div class="page hide"></div>
            <div class="page hide"></div>
        </div>

        <div class="ui_footer">
            <ul>
                <li class="ui_footer_message"><i></i><span>消息</span></li>
                <li class="ui_footer_contact"><i></i><span>联系人</span></li>
                <li class="ui_footer_new"><i></i><span>动态</span></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import '../assets/css/style.css'
    export default {
        name: "index",
        data(){
            return{
                title:'hh'
            }
        },
        mounted(){
            console.log(this.title)
            console.log(this.$router)
        }
    }
</script>
