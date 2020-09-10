

export default {
  getData(context,data) {
    new Promise((resolve)=>{
     resolve(data)           
    }).then(res=>{
        console.log(context)
       context.commit('TEST',res)
    })
  }
}