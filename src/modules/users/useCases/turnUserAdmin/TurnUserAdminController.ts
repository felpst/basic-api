import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.body;
    try {
      const user = this.turnUserAdminUseCase.execute(user_id);
      return response.json(user);
    } catch (error) {
      return response
        .status(404)
        .json({ error: "Error while updating user's admin permissions." });
    }
  }
}

export { TurnUserAdminController };
