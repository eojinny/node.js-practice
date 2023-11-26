import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import { storeRegister } from "../services/store.service.js";

export const storeRegister = async (req, res, next) => {
    console.log("가게에 리뷰 추가하기!");
    console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트 용

    res.send(response(status.SUCCESS, await storeRegister(req.body)));
}


class ReviewController {
    getAllReviews(req, res) {
        const reviews = reviewService.getAllReviews();
        res.json(reviews);
    }

    getReviewById(req, res) {
        const id = parseInt(req.params.id);
        const review = reviewService.getReviewById(id);

        if (review) {
            res.json(review);
        } else {
            res.status(404).json({ error: 'Review not found' });
        }
    }

}//리뷰 dto 
module.exports = new ReviewController();