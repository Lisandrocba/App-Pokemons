import SQLite from "react-native-sqlite-storage";

const db = SQLite.openDatabase('address.db');

export const init =()=>{
    const promise = new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            tx.executeSql('CREATE TABLE IF NOT EXISTS adress (id INTEGER PROMARY KEY NOT NULL, name TEXT NOT NULL, ability TEXT NOT NULL, image TEXT NOT NULL, ataque INTEGER NOT NULL, defensa INTEGER NOT NULL )', [], ()=>{
                resolve();
            }, (_,err)=>{
                reject(err)
            })
        })
    })

    return promise
}