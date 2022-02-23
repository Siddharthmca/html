const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM blossoms', (err, blossoms) => {
      if (err) {
        res.json(err);
      }
      var r = res.render('blossoms', {
        data: blossoms
        //print it as json

      });
      var resultArray = Object.values(JSON.parse(JSON.stringify(blossoms)))
      console.log(resultArray);
    });

  });
};

// controller.search = (req, res) => {
//   const { id } = req.params;
//   req.getConnection((err, conn) => {
//     conn.query("SELECT * blossoms WHERE id = ?", [id], (err, rows) => {
//       res.render('blossoms_search', {
//         data: rows[0]
//       })


//     });

//   });
// };


controller.search = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM blossoms WHERE id = ?", [id], (err, rows) => {
      res.render('blossoms_search', {
        data: rows[0]
      })
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO blossoms set ?', data, (err, blossoms) => {
      console.log(blossoms)
      res.redirect('/');
    })
  })
};

controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM blossoms WHERE id = ?", [id], (err, rows) => {
      res.render('blossoms_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newblossoms = req.body;
  req.getConnection((err, conn) => {

    conn.query('UPDATE blossoms set ? where id = ?', [newblossoms, id], (err, rows) => {
      res.redirect('/');
    });
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM blossoms WHERE id = ?', [id], (err, rows) => {
      res.redirect('/');
    });
  });
}

// controller.search = (req, res) => {
//   const { id } = req.params;
//   req.getConnection((err, connection) => {
//     connection.query('SELECT * blossoms WHERE id = ?', [id], (err, rows) => {
//       res.redirect('/');
//     });
//   });
// }

module.exports = controller;
