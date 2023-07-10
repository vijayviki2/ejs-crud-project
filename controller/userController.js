const userController = {
    index: (req,res) => {
        res.render('index.ejs')
    },
    new: (req,res) => {
        res.render('new.ejs')
    },
    edit: (req,res) => {
        res.render('edit.ejs')
    },
    pnf: (req,res) => {
        res.render('pnf.ejs')
    }
}

module.exports = userController