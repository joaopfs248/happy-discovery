const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    const orphanage = {
        lat: "-22.9008923",
        lng: "-43.3552445", 
        name: "Anbec - Orf. Santa Rita De Cassia",
        about: "Presta assistência para as meninas e adolescentes em situação de vulnerabilidade social em dois programas: Acolhimento institucional na faixa etária de 04 a 10 anos (abrigo) e Casa Dia faixa etária de 04 a 12 anos (externato).",
        whatsapp: "+5521988490203",
        images: [ 
            "https://orfanato.portalcyber.com.br/wp-content/uploads/2020/08/WhatsApp-Image-2020-08-12-at-20.59.46-1-1024x512.jpeg",

            "https://orfanatosantaritadecassia.com.br/wp-content/uploads/2020/08/capa-foto-2.jpg"
        ].toString(),
        instructions: "Visite-nos, sinta-se a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 8h até 18h",
        open_on_weekends: "0"
    }
    // const orphanage = {
    //     lat: "-22.9084977",
    //     lng: "-43.2471823", 
    //     name: "Lar de Maria Dolores",
    //     about: "Temos como objetivo social promover a assistência social, às pessoas, de quaisquer procedência, em especial à criança e ao adolescente, em situação de risco ou vulnerabilidade social e pessoal, sem discriminação de etnia, gênero, orientação sexual e religiosa, bem como a portadores de deficiência ou necessidades especiais, por meio de oferta gratuita de serviços socioassistenciais, programas e projetos de proteção social básica e especial, assegurando a função protetiva à família e fortalecendo os vínculos familiares, sociais e comunitários.",
    //     whatsapp: "+5521970311837",
    //     images: [ 
    //         "https://www.lardemariadolores.org.br/wp-content/uploads/2018/05/site5.jpg",

    //         "https://www.lardemariadolores.org.br/wp-content/uploads/2018/05/violino-site1-1.jpg",

    //         "https://www.lardemariadolores.org.br/wp-content/uploads/2018/05/gestante-site3.jpg",

    //         "https://www.lardemariadolores.org.br/wp-content/uploads/2018/05/oficina-dos-pais.jpg"
    //     ].toString(),
    //     instructions: "Conheça e faça uma doação diretamente para as causas que seu coração mais se identificar.",
    //     opening_hours: "Horário de visitas Das 6h até 18h",
    //     open_on_weekends: "1"
    // }

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
})