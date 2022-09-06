
import { getHellfireClubSubscriptions, subscribeToHellfireClub } from './firebase/hellfire-club.js'


const txtName = document.getElementById('txtName')
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')

const btnSubscribe = document.getElementById('btnSubscribe')

btnSubscribe.addEventListener('click', async () => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }

    // Salvar no Banco de Dados:
    const subscriptionId = await subscribeToHellfireClub(subscription)
    console.log(`Inscrito com sucesso: ${subscription}`)

    // Resetar inputs do Formulário
    txtName.value = ''
    txtEmail.value = ''
    txtLevel.value = ''
    txtCharacter.value = ''

    alert(`Inscrito com sucesso: ${subscriptionId}`)
})

async function loadData() {
    const subscriptions = await getHellfireClubSubscriptions()
    console.log(subscriptions)
}

loadData()