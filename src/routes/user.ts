import {Router, Request, Respone} from 'express';

const router = Router();

//Placeholder Route
router.get("/", (req: Request, res: Response) => {

    // List all users
router.get("/", async (req: Request, res: Response) => {
    try {
        const users = await listUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({error: "Why Error" });
    }
});