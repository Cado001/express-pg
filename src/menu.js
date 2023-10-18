import { client } from "./connectDb.js"

export async function getAllMenuItems(req,res){
    const result = await client.query('select * FROM menu')
    res.send(result.rows)
}

export async function addMenuItem(req,res){
    const body = req.body
    // const id = body.id
    // const name = body.name 
    // const description = body.description
    // const price = body.price 
    const {id, name, description, price} = body

    const result= await client.query(`INSERT INTO menu(id,name, description, price)
    VALUES ( ${id}, '${name}', '${description}', ${price})`) // Execute the query
    res.send(result)
}