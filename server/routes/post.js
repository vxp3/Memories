import express from 'express';
import {getPosts, createPost} from '../controllers/post,js'

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
// router.get('/', getPost);
// router.get('/', getPost);
// router.get('/', getPost);
// router.get('/', getPost);

export default  router;

