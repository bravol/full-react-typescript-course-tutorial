import { Request, Response } from "express";
import { controller, get } from "./decorators";

@controller("/auth")
class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response): void {
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
  }
}
