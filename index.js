const express = require("express");
const test = express();


test.get("/:vitor", (req, res) => {
    const {vitor} = req.params
    res.status(200).json({ 
        mensage:`Testando novo projeto ass: Gabriel Valente ${vitor}!`
    });
});

test.listen(3016, () => {
  console.log("Servidor On Junior Junior Vitor Henrique Silva Santos");
});