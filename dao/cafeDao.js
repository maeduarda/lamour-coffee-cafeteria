const { response } = require('express');
const mysql = require('mysql2');

class cafeDao {
     constructor(){ 
        this._connection = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: ' ',
            database: 'mochacafe', 
          }); 

    }
    //metodo para mostrar as quantidades na pagina produtos
    list(){
        return new Promise( (resolve, reject) => {
            this._connection.query(
                'SELECT * FROM estoque',
                function(err, results, fields) {
                    if(err) {
                        reject(err);
                    }else{
                        resolve(results);
                    } 

                 }
            )
        })
 
 


    }
    //metodo da "compra"
    update(id){ 
        return new Promise( (resolve, reject) => {
            this._connection.query(
                'update estoque set quantidade = quantidade - 1 where id=?',[id], 
                function(err, results, fields) {
                    if(err) {
                        reject(err);
                    }else{
                        resolve(results);
                    }
                }
            )
        })
    } 
    //metodo do salvamento
    save(login){ 
        return new Promise( (resolve, reject) => {
            this._connection.query(
                'insert into users (email, password, nome) values (?,?,?)',[login.email, login.password, login.nome], 
                
                function(err, results) {
                    //console.log(err)
                    //console.log(results)
                    if(err) {
                        reject(err);
                    }else{
                        resolve(results);
                    }
                    
                }
            )
        })
    } 
    //metodo usado no login
    CheckUser(login){ 
        return  new  Promise( (resolve, reject) => {
           this._connection.query(
            'SELECT * FROM users WHERE email = ? ', [login.email],
                function(err, results) {
                    
                    if(err) {
                        reject(err);
                    }else{
                     resolve(results); 
                    } 

                }
            )
        });
    } 
    //metodo usado no cadastro 
    CheckEmail(email){ 
        return  new  Promise( (resolve, reject) => {
           this._connection.query(
            'SELECT * FROM users WHERE email = ?', [email],
                function(err, results) {
                    if(err) {
                        reject(err);
                    }else{
                     resolve(results); 
                    } 

                }
            )
        });
    }
    listUsers(){
        return new Promise( (resolve, reject) => {
            this._connection.query(
                'SELECT * FROM users',
                function(err, results, fields) {
                    if(err) {
                        reject(err);
                    }else{
                        resolve(results);
                    } 

                 }
            )
        })

    }
    delete(id){ 
        return new Promise( (resolve, reject) => {
            this._connection.query(
                'delete from users where id =?', [id], 
                function(err, results) {
                    if(err) {
                        reject(err);
                    }else{
                        resolve(results);
                    }
                }
            )
        })
    }
    updateUsers(users){ 
        return new Promise( (resolve, reject) => {
            this._connection.query(
                'update users set email=?, password=?, nome=? where id=?',[users.email, users.password,users.nome, users.id], 
                function(err, results, fields) {
                    if(err) {
                        reject(err);
                    }else{
                        resolve(results);
                    }
                }
            )
        })
    }  
    findById(id){
        return new Promise( (resolve, reject) => {
            this._connection.query(
                'SELECT * from users where id =?', [id], 
                function(err, results, fields) {
                    if(err) {
                        reject(err);
                    }else{
                        resolve(results);
                    }
                }
            )
        })
    }
    saveEstoque(remersa){ 
        return new Promise( (resolve, reject) => {
            this._connection.query(
                'insert into estoque (cafe, quantidade) values (?,?)',[remersa.cafe, remersa.quantidade], 
                
                function(err, results) {
                    if(err) {
                        reject(err);
                    }else{
                        resolve(results);
                    }
                    
                }
            )
        })
    }
    deleteProdutos(id){ 
        return new Promise( (resolve, reject) => {
            this._connection.query(
                'delete from estoque where id =?', [id], 
                function(err, results) {
                    if(err) {
                        reject(err);
                    }else{
                        resolve(results);
                    }
                }
            )
        })
    }
    updateEstoque(produtos){ 
        return new Promise( (resolve, reject) => {
            this._connection.query(
                'update estoque set cafe=?, quantidade=? where id=?',[produtos.cafe, produtos.quantidade, produtos.id], 
                function(err, results, fields) {
                    if(err) {
                        reject(err);
                    }else{
                        resolve(results);
                    }
                }
            )
        })
    }
    listById(id){
        return new Promise( (resolve, reject) => {
            this._connection.query(
                'SELECT * FROM estoque where id = ?',[id],
                function(err, results, fields) {
                    if(err) {
                        reject(err);
                    }else{
                        resolve(results);
                    } 

                 }
            )
        })
 
 


    }

} 
module.exports = cafeDao 