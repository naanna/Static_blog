<template>
    <div class="home">
        <div class="__p_1366_uid_509">
            <p class="__p_1366_uid_510">最近</p>
            <p class="__p_1366_uid_510" v-for="list in recentlist">{{list}}</p>
      </div>
        <div class="__p_1366_uid_464" v-for="item in novel">
            <p class="__p_1366_uid_474">{{ item.title }}</p>
            <div class="__p_1366_uid_475">
                <span class="__p_1366_uid_477">壮壮发表于</span>
                <span class="__p_1366_uid_477">{{ item.time }}</span>
                <span class="__p_1366_uid_477">|</span>
                <span class="__p_1366_uid_477">标签</span>
                <span class="__p_1366_uid_477">{{ item.label }}</span>
            </div>
            <p class="__p_1366_uid_478" v-html="item.text"></p>
            <router-link to="/deteil"><span class="__p_1366_uid_479">阅读全文 》</span></router-link>
        </div>
    </div>
</template>

<script>
    export default {
    name: 'home',
        data () {
            return {
            novel:[
              {
                title:"忘川渡我，千秋万煅",
                time:"2019-6-13",
                label:"小说",
                text:"收到波塞西的传音，傅青轮心下稍安，注意力又放回到眼前的天梯上，两面碎裂的沧海之盾盘旋着，仿佛一张大网，过滤了大部分的压力，以至于现在傅青轮的感受就如同刚刚站在起点上一般。<br>听上去这个魂技似乎有些逆天了，但感受着沧海之盾那种如臂使指的流畅感，无疑在告诉他背后的真相。<br>是的，对御苍穹来说，如果在他倒下之前，有人能伤害到他的队友，那么他便不配被称为“最强之盾”，但若是真有那样一天，那么第四魂技就是他的答案——暂时剥离自己的武魂换取不超过半柱香的保护！值得他用出这个魂技的，就是他哪怕付出生命也要保护的人啊！<br>此时被波塞西从环形海中救起的他已经失去了意识，但傅青轮知道他不是一个人在战斗，这条三百三十六层高的登天之路，他们有三个人为之一起拼命。<br>一百六十四层，傅青轮仅仅保持着海洋领域，走到这里，两面沧海盾上突兀地布满了蛛网般的裂纹，有些难以想象和形容，水裂开是怎样的画面，但他知道只要他再挪动一下脚步，或许御苍穹的武魂就会彻底破碎，并从此成为一位连武魂都没有的“魂师”。"
              },
              {
                title:"齐登天梯，盾有灵犀",
                time:"2019-6-14",
                label:"小说",
                text:"“准备好了么？”傅青轮轻轻问道，两人皆轻轻点头。“那么，苍穹先开始吧，不寐其次，我最后！”<br>一年过去，御苍穹已经达到了四十九级，安排他在第一位自然是因为他是最无需让人担心的，随后的叶不寐则需要傅青轮的帮助，最后再由期间调息恢复快来御苍穹协助他完成目标。<br>所以说，御苍穹基本上只能靠自己一个人的力量，无疑他的压力不小，但他从来不会在队友面前退缩。只要他还站在队伍的前线，他身后任何一位想要保护的人就都不会遭受苦难！这正是他一直以来坚持的梦想。<br>“火徵——海洋领域！”琴弦颤动，第四魂环亮起，一圈圈水纹一样的波动以傅青轮为中心传递开来，方圆十里似乎都笼罩在微蓝色光芒之中，这是傅青轮唯一能帮他的了。"
              },
              {
                title:"火徵海域，物是人非",
                time:"2019-6-15",
                label:"小说",
                text:"紫色雷霆蜿蜒着窜下，闪烁在眼前，刺眼的光芒让人根本看不清它们的轨迹，但毫无疑问的目标正是九天玄阶上端坐着的傅青轮。<br>按理说，这里是海神圣地，不容其他力量放肆，但这是天发杀机，天道的意志即使是神也无法违背，而且任何人都不能插手其中，一旦进入天劫范围，只会一并被锁定为目标，天劫的威力更是只增不减。<br>因此，一切都只能依靠傅青轮自己一个人面对。<br>囚龙不安分地离开识海，在他身周舞动，第三魂环亮起那抹神秘的黑色，一头黑龙虚影瞬间从魂环中飞出，钻入囚龙剑中，千年木心所化的囚龙顿时如同重回了塑型状态，在半空中勾勒出先前黑龙的模样。"
              },
            ],
            recentlist:[
              "忘川渡我，千秋万煅",
              "齐登天梯，盾有灵犀",
              "火徵海域，物是人非"
            ]
            }
         }
    }
</script>


<style scoped>
    .__p_1366_uid_510 {
      font-size: 15px;
      display: block;
      text-align: center;
      line-height: 15px;
    }
  
    .__p_1366_uid_509 {
      width: 150px;
      background: #FFFFFF;
      border: 1px solid #FFFFFF;
      display: inline-block;
      line-height: 20px;
      vertical-align: top;
      margin-top: 20px;
    }
    .__p_1366_uid_478 {
      font-size: 16px;
    }
      
    .__p_1366_uid_464 {
      width: 500px;
      display: inline-block;
      padding-top: 20px;
      padding-bottom: 40px;
      margin-top: 20px;
      border-bottom: 2px solid #D5D5D5;
      margin-left: 200px;
      vertical-align: top;
    }
    .__p_1366_uid_474 {
      font-size: 30px;
      color: #807982;
      text-align: center;
    }
    .__p_1366_uid_477 {
      color: #D5D5D5;
      padding-left:5px;
    }
  
    .__p_1366_uid_475 {
      text-align: right;
      padding-top: 10px;
      padding-bottom: 10px;
    }

    .__p_1366_uid_479 {
      color: #00aeff;
      float: right;
      margin-left: 0;
      margin-right: 0;
      text-align: right;
      padding-top: 5px;
      padding-bottom: 5px;
    }

</style>
      