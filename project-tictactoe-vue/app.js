;(function(Vue){

    const vm = new Vue({
        el:'#app',
        data(){
            return{
                sections: [0,0,0,0,0,0,0,0,0],
                step: 0,
                changePlay : false,
            }
        },
        computed:{
            status(){
                return[
                    this.sections[0] + this.sections[1] + this.sections[2],
                    this.sections[3] + this.sections[4] + this.sections[5],
                    this.sections[6] + this.sections[7] + this.sections[8],
                    this.sections[0] + this.sections[3] + this.sections[6],
                    this.sections[1] + this.sections[4] + this.sections[7],
                    this.sections[2] + this.sections[5] + this.sections[8],
                    this.sections[0] + this.sections[4] + this.sections[8],
                    this.sections[2] + this.sections[4] + this.sections[6],
                ]
            },
            winner(){
                let winner = 0
                if(this.step >= 4 || this.step >=5){
                   winner = this.status.find((count) =>{
                        return count === 3 || count === 30 
                    }) || 0
                    if(winner === 3){
                        winner = 'Circle'
                    }else if(winner === 30){
                        winner = 'Cross'
                    }else if(winner === 0 && (this.step > 8 || this.step > 9)){
                        winner = 'Nobody'
                    }
                }
                return winner
            }
        },
        methods:{
            test(e){
                console.log(e)
            },
            clickHandler(index){
                if(this.sections[index] === 0){
                    this.sections[index] = this.step % 2 === 0 ? 1 : 10
                    // this.$set(this.sections, index, this.step % 2 === 0 ? 1: 10)
                    this.step ++
                    this.forceRender()
                    this.changePlay = true
                }
            },
            resetHandler(){
                this.sections = [0,0,0,0,0,0,0,0,0]
                this.step = 0   
                this.changePlay = false

            },
            forceRender(){
                let temp = [...this.sections] 
                this.sections = [0,0,0,0,0,0,0,0,0]
                this.$nextTick(()=>{
                    this.sections = temp
                })  
            },
            changHandler(){
                if(this.changePlay === false){
                    this.changePlay = !this.changePlay
                    this.step = 1
                }
            }
        },
    })

})(Vue)