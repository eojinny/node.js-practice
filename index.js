import express from 'express';
import { specs } from './config/swagger.config.js';
import SwaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv';
import cors from 'cors';

import { response } from './config/response.js';
import { BaseError } from './config/error.js';
import { status } from './config/response.status.js';

import { tempRouter } from './src/routes/temp.route.js';
import { userRouter } from './src/routes/user.route.js';

dotenv.config();    // .env 파일 사용 (환경 변수 관리)

const app = express();

// server setting - veiw, static, body-parser etc..
app.set('port', process.env.PORT || 3000)   // 서버 포트 지정
app.use(cors());                            // cors 방식 허용
app.use(express.static('public'));          // 정적 파일 접근
app.use(express.json());                    // request의 본문을 json으로 해석할 수 있도록 함
app.use(express.urlencoded({ extended: false }));

// swagger
app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(specs));

// router setting
app.use('/temp', tempRouter);
app.use('/user', userRouter);


// Use the routes
app.use('/stores', require('./routes/storeRoutes'));
app.use('/reviews', require('./routes/reviewRoutes'));
app.use('/missions', require('./routes/missionRoutes'));
app.use('/challenges', require('./routes/challengeRoutes'));



const reviewRoutes = require('./routes/reviewRoutes');
app.use('/api', reviewRoutes);

const storeMissionRoutes = require('./routes/storeMissionRoutes');
app.use('/stores', storeMissionRoutes);

const inProgressMissionRoutes = require('./routes/inProgressMissionRoutes');
app.use('/missions', inProgressMissionRoutes);


// error handling
app.use((req, res, next) => {
    const err = new BaseError(status.NOT_FOUND);
    next(err);
});

app.use((err, req, res, next) => {
    console.log(err);
    // 템플릿 엔진 변수 설정
    res.locals.message = err.message;
    // 개발환경이면 에러를 출력하고 아니면 출력하지 않기
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.data.status).send(response(err.data));
});

app.listen(app.get('port'), () => {
    console.log(`Example app listening on port ${app.get('port')}`);
});


