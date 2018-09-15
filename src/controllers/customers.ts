import { Controller } from "./controller";
import { HttpServer } from "../server/httpServer";
import { Request , Response  } from "restify";
import { customerService} from "../services/customer";

export class CustomerController implements Controller {
  /**
   * initialize
   */
  public initialize(httpServer:HttpServer): void {
    httpServer.get("/customers",this.list.bind(this));
    httpServer.post("/customer",this.create.bind(this));
    httpServer.put("/customer/:id",this.update.bind(this));
    httpServer.del("/customers:id",this.remove.bind(this));
  }  

  private async list(req: Request,res: Response): Promise<void> {
     res.send(await customerService.list());    
  }

  private async create(req: Request,res: Response): Promise<void> {
    res.send(await customerService.create(req.body));    
  }

  private async update(req: Request,res: Response): Promise<void> {
    
  }

  private async remove(req: Request,res: Response): Promise<void> {
    
  }
}

