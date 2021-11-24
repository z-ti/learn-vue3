module.exports = {
    {
        url: '/api/users', 
        method: 'b',
        response: req => {
            return {
                code: 0,
                data: [
                    {name: 'tom'},
                    {name: 'jerry'}
                ]
            }
        }

    },
    {
        url: '/api/post',
        method: 'post',
        timeout: 2000,
        reponse: req => {
            code: 0,
            data: {
                name: 'vben'
            }
        }
    }
}