const handlers = require('./index');

describe('Handlers', () => {
    describe('Users', () => {
        describe('Get', () => {
            it('return to user JSON', async () => {
                const axios = {
                    get: jest.fn().mockResolvedValue({data:1})
                }
                const res = {
                    status: jest.fn().mockReturnThis(),
                    send: jest.fn()
                }
                await handlers({axios}).get({}, res);
                expect(res.status.mock.calls).toEqual([[200]]);
                expect(res.send.mock.calls).toEqual([[1]]);
            })
        });
        describe('Post', () => {
            it('creates a resource', async () => {
                const axios = {
                    post: jest.fn().mockResolvedValue({data:1})
                }
                const res = {
                    status: jest.fn().mockReturnThis(),
                    send: jest.fn()
                }
                const req = {
                    body: 'Request Body'
                }
                await handlers({axios}).post(req, res);
                expect(res.status.mock.calls).toEqual([[201]]);
                expect(res.send.mock.calls).toEqual([[1]]);
                expect(axios.post.mock.calls).toEqual([['https://jsonplaceholder.cypress.io/users', 'Request Body']]);
            })
        });
        describe('Put', () => {
            it('updates a resource', async () => {
                const axios = {
                    put: jest.fn().mockResolvedValue('1')
                }
                const req = {
                    body : 'Request Body',
                    params : {
                        id : 12
                    }
                }
                const res = {
                    sendStatus : jest.fn().mockReturnThis()
                }
                await handlers({axios}).put(req, res);
                expect(res.sendStatus.mock.calls).toEqual([[204]]);
                expect(axios.put.mock.calls).toEqual([['https://jsonplaceholder.cypress.io/users/12', 'Request Body']]);
            });
        });
        describe('Delete', () => {
            it('delete a resource', async () => {
                const axios = {
                    delete : jest.fn().mockResolvedValue('1')
                }
                const req = {
                    params: {
                        id: 12
                    }
                }
                const res = {
                    sendStatus: jest.fn().mockReturnThis()
                }
                await handlers({axios}).delete(req, res);
                expect (res.sendStatus.mock.calls).toEqual([[204]]);
                expect(axios.delete.mock.calls).toEqual([['https://jsonplaceholder.cypress.io/users/12']]);
            });
        });
    });
    
});