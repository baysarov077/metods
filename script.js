const phone = {
    name: 'Iphone',
    model:  8,
    memory: 64,
    color: 'black',
    power: true,
    batteryPower: 80,
    ison() {
        if(this.power === true) {
            return 'Телефон включен'
        } else {
            return 'Телефон выключен'
        }
    },
    switch() {
        if(this.power === false) {
           return this.power = true
        } else {
           return this.power = false
        }
    },
    getBatteryPower() {
        return `Ваша зарядка ${this.batteryPower} %`
    },
    call(name) {
        return `Я звоню ${name}`
    },
    sent: [
        {
            to: '8922 260 11 89',
            time: '12:30',
            message: 'Интукод рулит'
        },
        {
            to: '8922 260 11 89',
            time: '12:50',
            message: 'Адам рулит'
        }
    ],
    inbox: [
        {
            from: '8938 645 78 87',
            time: '12:58',
            message: 'Интукод не рулит'
        },
        {
            from: '8964 889 45 55',
            time: '13:10',
            message: 'Адамс рулит аьлла'
        }
    ],
    sentMessage() {
        this.sent.push({to: '8922 260 11 89', time: '13:12', message:'Не рулит алал ахь кхи'})
    },
    clearInbox() {
        for(i = 0; i < this.inbox.length; i++) {
            delete this.inbox[i]
        }
    },
    clearSent() {
        for(i = 0; i < this.sent.length; i++) {
            delete this.sent[i]
        }
    }
}
phone.sentMessage()
phone.clearSent()
console.log(phone.sent)
phone.clearInbox()
console.log(phone.inbox)
