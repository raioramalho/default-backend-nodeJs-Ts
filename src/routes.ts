import { Request, Response, Router } from "express"
import { StatusCodes } from "http-status-codes";

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
    return res.status(StatusCodes.OK).send([{
        message: {
            status: 'OK!',
        }
    }]);
});


export default routes;
