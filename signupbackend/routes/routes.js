const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt')

const signUpTemplateCopy = require('../models/SignUpModels')


router.post('/signup', async (request, response) => {
    const saltPassword =  await bcrypt.genSalt(10)
    const secPwd = await bcrypt.hash(request.body.password, saltPassword )

    const signUpUser = new signUpTemplateCopy ({
        fullName: request.body.fullName,
        username: request.body.username,
        email: request.body.email,
        password: secPwd
    })

    signUpUser.save()
    .then( data => {
        response.json(data)
    } )
    .catch( err => {
        response.json(err)
    })
})

router.get('/ping', (req, resp) => {
    resp.json({status:'ok'}).end();
})

module.exports = router;