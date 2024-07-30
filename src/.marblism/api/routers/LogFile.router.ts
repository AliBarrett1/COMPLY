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

        create: procedure.input($Schema.LogFileInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).logFile.create(input as any))),

        delete: procedure.input($Schema.LogFileInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).logFile.delete(input as any))),

        findFirst: procedure.input($Schema.LogFileInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).logFile.findFirst(input as any))),

        findMany: procedure.input($Schema.LogFileInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).logFile.findMany(input as any))),

        findUnique: procedure.input($Schema.LogFileInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).logFile.findUnique(input as any))),

        update: procedure.input($Schema.LogFileInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).logFile.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    create: {

        useMutation: <T extends Prisma.LogFileCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.LogFileCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.LogFileGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.LogFileGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.LogFileCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.LogFileCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.LogFileGetPayload<T>, Context>) => Promise<Prisma.LogFileGetPayload<T>>
            };

    };
    delete: {

        useMutation: <T extends Prisma.LogFileDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.LogFileDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.LogFileGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.LogFileGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.LogFileDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.LogFileDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.LogFileGetPayload<T>, Context>) => Promise<Prisma.LogFileGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.LogFileFindFirstArgs, TData = Prisma.LogFileGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.LogFileFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.LogFileGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.LogFileFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.LogFileFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.LogFileGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.LogFileGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.LogFileFindManyArgs, TData = Array<Prisma.LogFileGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.LogFileFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.LogFileGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.LogFileFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.LogFileFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.LogFileGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.LogFileGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.LogFileFindUniqueArgs, TData = Prisma.LogFileGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.LogFileFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.LogFileGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.LogFileFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.LogFileFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.LogFileGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.LogFileGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    update: {

        useMutation: <T extends Prisma.LogFileUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.LogFileUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.LogFileGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.LogFileGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.LogFileUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.LogFileUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.LogFileGetPayload<T>, Context>) => Promise<Prisma.LogFileGetPayload<T>>
            };

    };
}
