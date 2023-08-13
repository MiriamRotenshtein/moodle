var mysql = require('mysql');

function connect(){
    mysql.createConnection({
        host: "mariadb",
        user: "bn_moodle",
        password: "foobar1111",
        database: "bitnami_moodle"
    });
}

function query(){
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM mdl_adminpresets_it", function (err, result, fields) {
          if (err) throw err;
          console.log(result);
        });
    });
}


