<template>
<div class="novel">
    <div class="__p_2090_uid_527" v-for="list in novellist">
        <p class="__p_2090_uid_588">{{list.year}}</p>
        <div class="__p_2090_uid_576" v-for="item in list.data">
          <span class="__p_2090_uid_578">{{item.time}}</span>
          <span @click="set(item.title)" class="__p_2090_uid_577">{{item.title}}</span>
        </div>
    </div>
    <div class="__p_2090_uid_682"><span>分页的</span>
    </div>
</div>
</template>

<script>
export default {
name: 'novel',
data () {
    return {
    novellist:[
      {
          year:"2019",
          data:[
            {
              time:"11-14",
              title:"忘川渡我，千秋万煅"
            },
            {
              time:"10-14",
              title:"齐登天梯，盾有灵犀"
            },
            {
              time:"06-14",
              title:"火徵海域，物是人非"
            }
          ],
      },
      {
          year:"2018",
          data:[
            {
              time:"11-14",
              title:"忘川渡我，千秋万煅"
            },
            {
              time:"10-14",
              title:"齐登天梯，盾有灵犀"
            },
            {
              time:"06-14",
              title:"火徵海域，物是人非"
            }
          ],
      }
    ]
    }
  },
  methods:{
      set(value){
        this.$router.push({path:'/deteil?'+value});
      }
  }
}
</script>

<style scoped>
 .__p_2090_uid_588 {
    font-size: 18px;
  }

  .__p_2090_uid_578 {
    font-size: 14px;
    color: #D5D5D5;
    margin-right: 10px;
  }

  .__p_2090_uid_577 {
    font-size: 16px;
    color: #767171;
  }

  .__p_2090_uid_576 {
    margin-left: 30px;
    padding-left: 30px;
    border-left: 1px solid #D5D5D5;
    padding-top: 7px;
    padding-bottom: 7px;
  }  

  .__p_2090_uid_527 {
    width: 700px;
    display: block;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-left: auto;
    line-height: 30px;
    margin-right: auto;
  }

  .__p_2090_uid_682 {
    width: 700px;
    display: block;
    margin-left: auto;
    margin-top: 20px;
    margin-right: auto;
  }
</style>
      