var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "hr",
  port:3306,
  database:"promart"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!!!!!");
}); 

function getProducts(callback)
{
    sql = 'select * from promart';
    var response ;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Get All promart : " );
      // console.log(result);
      callback(result);
    });
}
function getEmployee(name,callback)
{
    sql = `select * from promart where pname= "${name}"`;
    var response ;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Get Blog for Id: "+name );
      callback(result);
    });
}
function addProducts(blog, callback)
{
    console.log('from the db demo');
    console.log(blog);
    sql = "insert into promart(pid,pname,pdesc,price,pcategory,pqty) values('"+blog.id+"','"+blog.name+"','"+blog.desc+"',"+blog.price+",'"+blog.category+"',"+blog.qty+")";
      console.log(blog);
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Inserted: " );
      callback(result);
    });
}
function editEmployee(product, callback)
{
    sql = "update promart set price = "+product.price+",pqty="+product.qty+" where pid = '"+product.id+"'";
    console.log(sql);
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Updatng DB: " );
      callback(result);
    });
}
function deleteproduct(pid,callback)
{
    console.log('this is from the dbdemo js');
    console.log(pid);
    sql = `delete from promart where pid ='${pid}' `;
    console.log(sql);
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("deleted: " );
      callback('deleted');
    });
}
exports.getProducts = getProducts;
exports.addProducts = addProducts;
exports.deleteproduct = deleteproduct;
exports.getEmployee = getEmployee;
exports.editEmployee = editEmployee;