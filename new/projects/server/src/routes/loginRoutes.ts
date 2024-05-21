import { Request, Response, Router } from "express";
const router = Router();

router.get("/login", (req: Request, res: Response) => {
  res.send(`
  <div>
   <form method="POST" >
    <div> 
      <label>Email:</label>
      <input name='email'/>
    </div>
    <div> 
      <label>Password:</label>
      <input name='password'/>
    </div>
    <button>Submit</button>
   </form>
  </div>
  `);
});

router.post("/login", (req: Request, res: Response) => {});

export { router };
