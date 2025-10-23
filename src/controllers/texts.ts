import { Request, NextFunction, Response } from "express";

import { prismaClient } from "../server";

export const getTexts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { page, language } = req.params;

  const response = await prismaClient.text.findMany({
    where: {
      page,
      language,
    },
  });

  res.status(200).json(response);
};
