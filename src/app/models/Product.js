const db = require('../../config/db');

module.exports = {
    create(data) {
        const query = `
            INSERT INTO posts (
                category_id,
                user_id,
                name, 
                description,
                status
            ) VALUES ($1, $2, $3, $4, $5 )
            RETURNING id
        `

        const values = [
            data.category_id,
            1,
            data.name,
            data.description,
            data.status,
        ]

        return db.query(query, values);
    },
}