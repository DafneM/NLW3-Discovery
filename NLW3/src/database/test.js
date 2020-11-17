const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then(async (db) => {
 


    //inserindo dados na tabela
    await saveOrphanage(db, {
            lat: "-27.2056602",
            lng: "-49.6532568",
            name: "Lar dos Meninos",
            about: "Presta assistência a crianças de 06 a 15 anos que se encontrem em situação de risco e/ou vulnerabilidade social",
            whatsapp: "",
            images: [
                "https://images.unsplash.com/photo-1576025773492-cc2eb828c42a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

                "https://images.unsplash.com/photo-1576025773492-cc2eb828c42a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
            ].toString(),
            instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
            opening_hours: "Horários de visita das 18h até 8h",
            open_on_weekends: "0"
        })

    //consultando dados na tablela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultando so um orfanato pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)

    /*apagar dado da tabela
    await db.run('DELETE FROM tabela WHERE id="3"')*/


})