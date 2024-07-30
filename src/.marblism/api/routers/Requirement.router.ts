/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        create: procedure.input($Schema.RequirementInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).requirement.create(input as any))),

        delete: procedure.input($Schema.RequirementInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).requirement.delete(input as any))),

        findFirst: procedure.input($Schema.RequirementInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).requirement.findFirst(input as any))),

        findMany: procedure.input($Schema.RequirementInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).requirement.findMany(input as any))),

        findUnique: procedure.input($Schema.RequirementInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).requirement.findUnique(input as any))),

        update: procedure.input($Schema.RequirementInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).requirement.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    create: {

        useMutation: <T extends Prisma.RequirementCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RequirementCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.RequirementGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.RequirementGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RequirementCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RequirementCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.RequirementGetPayload<T>, Context>) => Promise<Prisma.RequirementGetPayload<T>>
            };

    };
    delete: {

        useMutation: <T extends Prisma.RequirementDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RequirementDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.RequirementGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.RequirementGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RequirementDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RequirementDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.RequirementGetPayload<T>, Context>) => Promise<Prisma.RequirementGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.RequirementFindFirstArgs, TData = Prisma.RequirementGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.RequirementFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.RequirementGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.RequirementFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.RequirementFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.RequirementGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.RequirementGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.RequirementFindManyArgs, TData = Array<Prisma.RequirementGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.RequirementFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.RequirementGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.RequirementFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.RequirementFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.RequirementGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.RequirementGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.RequirementFindUniqueArgs, TData = Prisma.RequirementGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.RequirementFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.RequirementGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.RequirementFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.RequirementFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.RequirementGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.RequirementGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    update: {

        useMutation: <T extends Prisma.RequirementUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RequirementUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.RequirementGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.RequirementGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RequirementUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RequirementUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.RequirementGetPayload<T>, Context>) => Promise<Prisma.RequirementGetPayload<T>>
            };

    };
}
