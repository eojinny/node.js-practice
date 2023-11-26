import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";

import { signinResponseDTO } from "../dtos/user.dto"
import { addUser, getUser, getUserPreferToUserID, setPrefer } from "../models/user.dao";

export const joinUser = async (body) => {
    const birth = new Date(body.birthYear, body.birthMonth, body.birthDay);
    const prefer = body.prefer;

    const joinUserData = await addUser({
        'email': body.email,
        'name': body.name,
        'gender': body.gender,
        'birth': birth,
        'addr': body.addr,
        'specAddr': body.specAddr,
        'phone': body.phone
    });

    if (joinUserData == -1) {
        throw new BaseError(status.EMAIL_ALREADY_EXIST);
    } else {
        for (let i = 0; i < prefer.length; i++) {
            await setPrefer(joinUserData, prefer[i]);
        }
        return signinResponseDTO(await getUser(joinUserData), await getUserPreferToUserID(joinUserData));
    }
}
// services/reviewService.js
const reviewDao = require('../daos/reviewDao');

class ReviewService {
    getAllReviews(callback) {
        reviewDao.getAllReviews(callback);
    }

    getReviewById(id, callback) {
        reviewDao.getReviewById(id, callback);
    }

    addReview(title, content, callback) {
        reviewDao.addReview(title, content, callback);
    }
}

module.exports = new ReviewService();
