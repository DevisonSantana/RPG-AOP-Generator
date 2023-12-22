let sujeito = ["Inocente curioso", "Criminoso", "Pessoa influente (magnata, político…)", "Bando cultista",
           "Cultista independente", "Ex-agente da Ordo Realitas", "Item amaldiçoado", "Criatura paranormal"]

let acao = ["Invocou uma criatura de propósito*", "Invocou uma criatura sem querer*", 
          "Está sequestrando inocentes", "Está assassinando inocentes", 
          "Está usando um ritual ou item amaldiçoado para cometer crimes mundanos (roubo, extorsão…)", "Está recrutando cultistas", 
          "Está pesquisando um ritual perigoso", "Está coletando itens amaldiçoados", "Matou um agente da Ordo Realitas"]

let local = ["Escola*", "Hospital*", "Vilarejo*", "Fazenda*", 
         "Mata fechada", "Becos de metrópole", "Arranha-céu*", 
         "Grande loja de departamento*", "Esgoto", "Zona industrial da cidade*"
         , "Shopping center*", "Orfanato*", "Museu*", "Cemitério", "Delegacia ou base militar", 
         "Mansão*", "Antiga sede da Ordo Realitas", "Navio*", "Ilha remota"]

let aliado = ["Civil alheio ao paranormal", "Civil exposto ao paranormal", 
          "Antigo conhecido de um dos agentes (amigo de infância, ex-colega de faculdade ou trabalho, ex-namorado…)", 
          "Outro agente da Ordo Realitas"]

let objeto = ["Equipamento*", "Ingrediente para um ritual poderoso  (máscara ritualística, gema rara…)", 
          "Artefato com grande valor para a Ordem (tomo antigo, relíquia ancestral…)", 
          "Item amaldiçoado*"]

let evento = ["O aparecimento de uma/outra criatura paranormal de grande poder", "A chegada de reforços inimigos", 
          "Uma doença paranormal/maldição afetando o aliado", "Civis se revoltando contra eles", "A revelação de que o aliado era o vilão", 
          "A revelação de que as ações do inimigo eram justificadas", "Perda de seus equipamentos (por furto, falha tecnológica…)", 
          "Ter que proteger um civil", "Perda de comunicação com a Ordo Realitas e acesso ao sistema de crédito", 
          "Agentes da lei os importunando", "Um desastre (incêndio, tempestade, furacão, blecaute, agitação civil…)", 
          "O aparecimento de um antigo inimigo"]

let elemento = ["Morte", "Energia", "Conhecimento", "Sangue"]

function gerate(input){
    let gen = Math.floor(Math.random() * input.length)
    return input[gen]
}

let mission = document.getElementById('mission')
let start = document.getElementById('create')



start.addEventListener('click', (e) =>{
    e.preventDefault()
    mission.innerText = 
    `“Um(a) ${gerate(sujeito)} ${gerate(acao)} em um(a) 
    ${gerate(local)}. Durante a investigação, o 
    grupo terá a ajuda de um(a) ${gerate(aliado)} e 
    poderá encontrar ${gerate(objeto)}. Porém, em 
    determinado momento os agentes serão 
    surpreendidos por ${gerate(evento)}.
    ELEMENTO: ${gerate(elemento)}”`
})