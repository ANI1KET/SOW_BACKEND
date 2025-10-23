import * as jwt from "jsonwebtoken";
import { hashSync, compareSync } from "bcrypt";
import { Request, NextFunction, Response } from "express";

import { prismaClient } from "../server";
import { JWT_SECRET } from "../env_variable";
import { ErrorCode } from "../exceptions/errorhandler";
import { LoginSchema, SignupSchema } from "../schemas/uers";
import { NotFoundException } from "../exceptions/not_found";
import { BadRequestsException } from "../exceptions/bad_requests";

export const signUp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  SignupSchema.parse(req.body);
  const { email, password } = req.body;

  let user = await prismaClient.user.findFirst({ where: { email } });

  if (user)
    throw new BadRequestsException(
      "User already exist",
      ErrorCode.USER_ALREADY_EXIST
    );

  user = await prismaClient.user.create({
    data: {
      email,
      password_hash: hashSync(password, 10),
    },
  });

  res.status(201).json(user);
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  LoginSchema.parse(req.body);
  const { email, password } = req.body;

  let user = await prismaClient.user.findFirst({ where: { email } });

  if (!user)
    throw new NotFoundException(
      "User does not exist",
      ErrorCode.USER_NOT_FOUND
    );

  if (!compareSync(password, user.password_hash))
    throw new NotFoundException(
      "Incorrect email or password",
      ErrorCode.INCORRECT_EMAIL_PASSWORD
    );

  const token = jwt.sign(
    {
      userId: user.id,
    },
    JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.status(201).json({ user, token });
};
