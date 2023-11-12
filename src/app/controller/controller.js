import { status } from '../../config/response.status.js';
import { CheckFlag, getData } from '../providers/provider.js';
import { response } from '../../config/response.js';

export const Test = (req, res, next) => {
    console.log("/test");
    res.send(response(status.SUCCESS, getData()));
};

export const Exception = (req, res, next) => {
    console.log("/exception/" + req.params.flag);
    return res.send(response(status.SUCCESS, CheckFlag(req.params.flag)));
}