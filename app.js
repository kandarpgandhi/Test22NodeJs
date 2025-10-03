const express = require('express')
const mysql = require('mysql2')
const app = express()

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Abc@123',
    database: 'testDb'
})

connection.connect((err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Connection has been created')
    const creationUsers = `CREATE TABLE Users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20),
    email VARCHAR(20)
    )`

    connection.execute(creationUsers, (err) => {
        if (err) {
            console.log(err)
            connection.end()
            return
        }
        console.log('User Table is created')
    })

    const creationBuses = `CREATE TABLE Buses(
    id INT AUTO_INCREMENT PRIMARY KEY,
    busNumber INT,
    totalSeats INT,
    availableSeats INT
    )`
    connection.execute(creationBuses, (err) => {
        if (err) {
            console.log(err)
            connection.end()
            return
        }
        console.log('Buses Table is created')
    })

    const creationBooking = `CREATE TABLE Bookings(
    id INT AUTO_INCREMENT PRIMARY KEY,
    seatNumber INT
    )`
    connection.execute(creationBooking, (err) => {
        if (err) {
            console.log(err)
            connection.end()
            return
        }
        console.log('Bookings Table is created')
    })

    const creationPayments = `CREATE TABLE Payments(
    id INT AUTO_INCREMENT PRIMARY KEY,
    amountPaid INT,
    paymentStatus VARCHAR(10)
    )`
    connection.execute(creationPayments, (err) => {
        if (err) {
            console.log(err)
            connection.end()
            return
        }
        console.log('Payments Table is created')
    })




})
app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(3000, (err) => {
    console.log('Server is running')
})