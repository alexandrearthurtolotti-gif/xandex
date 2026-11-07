const mqtt = require('mqtt')
const { timestamp } = require('node:console')

const cliente = mqtt.connect('mqtt://localhost:1884')

cliente.on('connect', ()=>{
setTimeout(()=>{
console.log('publicador conectado')

const leitura = {
    dispositivo: 'sensor-01',
    temperatura: 26.8,
    umidade: 62,
    timestamp: new Date().toISOString()
}

const payload = JSON.stringify(leitura)

cliente.publish(
'iot/sensor/temperatura',
payload,
{ qos:1 },
(erro) =>{
    if (erro) {
        console.error('erro publicar o topico', erro)
    return
}
else{
console.log('menssagem realizada', payload)
}
cliente.end()
}
)
},5000)
})
cliente.on('erro',(erro)=>{
    console.error('erro mqtt', erro.message)
})

