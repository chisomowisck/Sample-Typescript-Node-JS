import { session } from '../../sessions/session'

export const GetAll = async (req, res) => {
    const { body } = req;
    console.log(body);
    res.send('Hello World!');
}
