import { Request, NextFunction, Response } from "express";

import { prismaClient } from "../server";

export const getProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const response = await prismaClient.pricelist.findMany();

  res.status(200).json(response);
};

export const updateProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { productId } = req.params;
  const updates = req.body;

  await prismaClient.pricelist.update({
    where: { id: productId },
    data: updates,
  });

  res.status(200).json({ sucess: true });
};
