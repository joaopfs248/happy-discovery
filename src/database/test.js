const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    
    // const orphanage = {
    //     lat: "-22.9356077",
    //     lng: "-43.1805307", 
    //     name: "Fundação Romão Mattos Duarte",
    //     about: "Presta assistência a crianças de 06 à 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    //     whatsapp: "+552125587961",
    //     images: [ 
    //         "https://lh4.googleusercontent.com/-wst4vjm-ZNk/V_z1MNBNPXI/AAAAAAAAaf0/N4_9ZXyIKdQWQJiHZwwbL2nepEhp-4fhQCLIB/photo.jpg",

    //         "https://s2.glbimg.com/BnWntNMTzHkUM0M8b3o3aRBDwbA=/i.glbimg.com/og/ig/infoglobo1/f/original/2018/06/27/77583610_rio_de_janeiro_rj_27-06-1988_-_policia_rj_-_maus_tratos_-_menor_-_jose_augusto_a_esquerda.jpg"
    //     ].toString(),
    //     instructions: "Venha, sinta-se a vontade e traga muito amor e paciência para dar.",
    //     opening_hours: "Horário de visitas Das 8h até 18h",
    //     open_on_weekends: "0"
    // }
    // const orphanage = {
    //     lat: "-22.9008923",
    //     lng: "-43.3552445", 
    //     name: "Anbec - Orf. Santa Rita De Cassia",
    //     about: "Presta assistência para as meninas e adolescentes em situação de vulnerabilidade social em dois programas: Acolhimento institucional na faixa etária de 04 a 10 anos (abrigo) e Casa Dia faixa etária de 04 a 12 anos (externato).",
    //     whatsapp: "+552124252207",
    //     images: [ 
    //         "https://orfanato.portalcyber.com.br/wp-content/uploads/2020/08/WhatsApp-Image-2020-08-12-at-20.59.46-1-1024x512.jpeg",

    //         "https://orfanatosantaritadecassia.com.br/wp-content/uploads/2020/08/capa-foto-2.jpg",

    //         "https://orfanatosantaritadecassia.com.br/wp-content/uploads/2020/08/QR-Code-Orfanato-229x300.png"
    //     ].toString(),
    //     instructions: "Visite-nos, sinta-se a vontade e traga muito amor e paciência para dar.",
    //     opening_hours: "Horário de visitas Das 8h até 18h",
    //     open_on_weekends: "0"
    // }
    const orphanage = {
        lat: "-22.9191906",
        lng: "-43.2372055", 
        name: "ABCDEF - Orf. Fictício",
        about: "Presta assistência para todos os gêneros e idade em situação de vulnerabilidade social.",
        whatsapp: "+552122222222",
        images: [ 
            "https://static.vakinha.com.br/uploads/vakinha/image/209242/Orfanato-Aulas2.jpg?ims=700x410",

            "https://www.kickante.com.br/sites/default/files/styles/campaign_pitch_image/public/financiamento-coletivo/pitch/natal-solidario-orfanato-502967.jpg?itok=HgpNI35m",

            "https://compartilheviagens.com.br/wp-content/uploads/2016/12/destaque.png"
        ].toString(),
        instructions: "Visite-nos, sinta-se a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 8h até 18h",
        open_on_weekends: "1"
    }


    //inserir dados na tabela
    await saveOrphanage(db, orphanage)

    // consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)
    
    // consultar dados da tabela por id
    const selectedOrphanage = await db.all('SELECT * FROM orphanages WHERE id = "1" ')
    console.log(selectedOrphanage)

    // apagar dados da tabela por id
    // console.log(await db.run('DELETE FROM orphanages WHERE id = "1" '))
     console.log(await db.run('DELETE FROM orphanages WHERE id = "3" '))
})