import express from 'express';
import { Test, Exception } from '../controllers/controller.js';

export const Router = express.Router();

Router.get('/test', Test);

Router.get('/exception/:flag', Exception);