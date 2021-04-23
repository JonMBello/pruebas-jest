const handlers = ({axios}) => ({
    get: async(req, res) => {
        const {data} = await axios.get('https://jsonplaceholder.cypress.io/users');
        res.status(200).send(data);
    },
    post: async (req, res) => {
        const {body} = req;
        const {data} = await axios.post('https://jsonplaceholder.cypress.io/users', body);
        res.status(201).send(data);
    },
    put :  async (req, res) => {
        const {body} = req;
        const {id}  = req.params;
        const {data} = await axios.put(`https://jsonplaceholder.cypress.io/users/${id}`, body);
        res.sendStatus(204);
    },
    delete: async (req, res) => {
        const {id} = req.params;
        const{data} = await axios.delete(`https://jsonplaceholder.cypress.io/users/${id}`);
        res.sendStatus(204);
    }
})


module.exports = handlers;