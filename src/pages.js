const Database = require('./database/db');
const saveOrphanage = require('./database/saveOrphanage');

module.exports = {
   
    index(request, response) {
        return response.render('index')
    },

    async orphanage(request, response) {
        
        const id = request.query.id

        try {    
            const db = await Database;
            const results = await db.all(`SELECT * FROM orphanages WHERE id = "${id}"`)
            const orphanage = results[0]
            // mostra os dados do orphanage
            // console.log(orphanage[0])

            // logicas
            orphanage.images = orphanage.images.split(",")
            orphanage.firstImage = orphanage.images[0]
            orphanage.open_on_weekends == "0" ? orphanage.open_on_weekends = false : orphanage.open_on_weekends = true

            return response.render('orphanage', { orphanage })   
        } catch (error) {
            console.log(error)
            return response.send('Orphanage not found!')
        }
    },

    async orphanages(request, response) {
        try {

            // usando async /await
            const db = await Database

            const orphanages = await db.all("SELECT * FROM orphanages")
            return response.render('orphanages', { orphanages })
        } catch (error) {
            console.log(error)
            return response.send('Something is wrong with database!')
        }
    },

            // usando .then ao inves de async/await
            // Database.then(db => {
            //     const orphanages = await db.all("SELECT * FROM orphanages")
            //     return response.render('orphanages', { orphanages })
            // })

    createOrphanage(request, response) {
        return response.render('create-orphanage')
    },
    
    async saveOrphanage(request, response) {

        const fields = request.body

        //validar campos preenchidos
        if(Object.values(fields).includes('')){ 
            return response.send('Todos os campos devem ser preenchidos!') 
        }

        try {
            // salvar um orphanage
        const db = await Database
        await saveOrphanage(db,{
            lat: fields.lat,
            lng: fields.lng,
            name: fields.name,
            about: fields.about,
            whatsapp: fields.whatsapp,
            images: fields.images.toString(),
            instructions: fields.instructions,
            opening_hours: fields.opening_hours,
            Open_on_weekends: fields.open_on_weekends
        })
            //redirecionamento
            return response.redirect('/orphanages')
        } catch (error) {
            console.log(error)
            return response.send('Erro no banco de dados!')
        }
    }
}