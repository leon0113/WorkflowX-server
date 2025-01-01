import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getTeams = async (req: Request, res: Response): Promise<void> => {
    try {
        const teams = await prisma.team.findMany();
        const teamsWithUsernames = await Promise.all(
            teams.map(async (team) => {
                const productOwner = await prisma.user.findUnique({
                    where: {
                        userId: team.productOwnerUserId!,
                    },
                    select: { username: true }
                });
                const projectManager = await prisma.user.findUnique({
                    where: {
                        userId: team.projectManagerUserId!,
                    },
                    select: { username: true }
                });

                return {
                    ...team,
                    productOwnerUserName: productOwner?.username,
                    projectManagerUserName: projectManager?.username,
                }
            })
        )

        res.json(teamsWithUsernames)
    } catch (error: any) {
        res.status(500).json({ message: `An error occurred while fetching teams, Error: ${error}` });
    }
};