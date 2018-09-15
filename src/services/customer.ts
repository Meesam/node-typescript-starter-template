import { Customer } from "../entity/customer";
import { DatabaseProvider } from "../database/index";
import { getRepository } from "typeorm";

export class CustomerService {
  
  /**
   * async getById
   */
//   public async getById(id:number):Promise<Customer> {
//     const connection = await DatabaseProvider.getConnection();
//     return await connection.getRepository(Customer).findByIds(id);  
//   }
  
  public async create(customer:Customer): Promise<Customer> {
    const connection = await DatabaseProvider.getConnection();
    return await connection.getRepository(Customer).save(customer);  
  }

  public async list(): Promise<Customer[]> {
    const connection = await DatabaseProvider.getConnection();
    return await connection.getRepository(Customer).find();  
  }

//   public async update(customer:Customer): Promise<Customer> {
//     const connection = await DatabaseProvider.getConnection();
//     const repo = await connection.getRepository(Customer);
//     const entity = await repo.findByIds(customer.id);
//     entity.firstName=customer.firstName;
//     entity.lastName=customer.lastName;    
//     return await repo.save(customer);  
//   }

//   public async delete(id:number): Promise<void> {
//     const connection = await DatabaseProvider.getConnection();
//     return await connection.getRepository(Customer).delete(id)  ;
//   }
}

export const customerService = new CustomerService();
