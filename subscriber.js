const mqtt = require('mqtt')
const cliente = mqtt.connect('mqtt://localhost:1884')

cliente.on('connect', ()=>{

console.log('conectado ao mqttt')

cliente.subscribe
'iot/sensor/temperatura',
{qos: 0},
(erro, concedidos) =>{
    console.log('erro ao assinar o topico', erro)
    return
}
console.log('assinatura realizada')

})

cliente.on('message', (topico, mensagem) =>{
    console.log('topico', topico)
    console.log('mensagem', mensagem.toString())
})

cliente.on('error', (erro)=>{
    console.log('erro mqtt', erro.messagem)

})

cliente.on('reconect', ()=>{
    console.log('tentando reconectar')
})
