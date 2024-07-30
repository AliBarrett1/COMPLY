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

        create: procedure.input($Schema.AnalysisResultInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).analysisResult.create(input as any))),

        delete: procedure.input($Schema.AnalysisResultInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).analysisResult.delete(input as any))),

        findFirst: procedure.input($Schema.AnalysisResultInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).analysisResult.findFirst(input as any))),

        findMany: procedure.input($Schema.AnalysisResultInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).analysisResult.findMany(input as any))),

        findUnique: procedure.input($Schema.AnalysisResultInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).analysisResult.findUnique(input as any))),

        update: procedure.input($Schema.AnalysisResultInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).analysisResult.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    create: {

        useMutation: <T extends Prisma.AnalysisResultCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AnalysisResultCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AnalysisResultGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AnalysisResultGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AnalysisResultCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AnalysisResultCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AnalysisResultGetPayload<T>, Context>) => Promise<Prisma.AnalysisResultGetPayload<T>>
            };

    };
    delete: {

        useMutation: <T extends Prisma.AnalysisResultDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AnalysisResultDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AnalysisResultGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AnalysisResultGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AnalysisResultDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AnalysisResultDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AnalysisResultGetPayload<T>, Context>) => Promise<Prisma.AnalysisResultGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.AnalysisResultFindFirstArgs, TData = Prisma.AnalysisResultGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.AnalysisResultFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AnalysisResultGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AnalysisResultFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AnalysisResultFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AnalysisResultGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AnalysisResultGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.AnalysisResultFindManyArgs, TData = Array<Prisma.AnalysisResultGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.AnalysisResultFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.AnalysisResultGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AnalysisResultFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AnalysisResultFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.AnalysisResultGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.AnalysisResultGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.AnalysisResultFindUniqueArgs, TData = Prisma.AnalysisResultGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.AnalysisResultFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AnalysisResultGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AnalysisResultFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AnalysisResultFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AnalysisResultGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AnalysisResultGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    update: {

        useMutation: <T extends Prisma.AnalysisResultUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AnalysisResultUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AnalysisResultGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AnalysisResultGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AnalysisResultUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AnalysisResultUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AnalysisResultGetPayload<T>, Context>) => Promise<Prisma.AnalysisResultGetPayload<T>>
            };

    };
}
