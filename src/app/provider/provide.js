import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { ResponseDTO, flagResponseDTO } from "../dto/response.dto.js";

export const getData = () => {
    return ResponseDTO("This is TEST! >.0");
}

export function CheckFlag(flag) {
    if (flag == 1)
        throw new BaseError(status.BAD_REQUEST);
    else {
        return flagResponseDTO(flag);
    }
}