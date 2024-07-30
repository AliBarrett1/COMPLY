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

        create: procedure.input($Schema.ComplianceSummaryInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).complianceSummary.create(input as any))),

        delete: procedure.input($Schema.ComplianceSummaryInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).complianceSummary.delete(input as any))),

        findFirst: procedure.input($Schema.ComplianceSummaryInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).complianceSummary.findFirst(input as any))),

        findMany: procedure.input($Schema.ComplianceSummaryInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).complianceSummary.findMany(input as any))),

        findUnique: procedure.input($Schema.ComplianceSummaryInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).complianceSummary.findUnique(input as any))),

        update: procedure.input($Schema.ComplianceSummaryInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).complianceSummary.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    create: {

        useMutation: <T extends Prisma.ComplianceSummaryCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ComplianceSummaryCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ComplianceSummaryGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ComplianceSummaryGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ComplianceSummaryCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ComplianceSummaryCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ComplianceSummaryGetPayload<T>, Context>) => Promise<Prisma.ComplianceSummaryGetPayload<T>>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ComplianceSummaryDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ComplianceSummaryDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ComplianceSummaryGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ComplianceSummaryGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ComplianceSummaryDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ComplianceSummaryDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ComplianceSummaryGetPayload<T>, Context>) => Promise<Prisma.ComplianceSummaryGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ComplianceSummaryFindFirstArgs, TData = Prisma.ComplianceSummaryGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ComplianceSummaryFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ComplianceSummaryGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ComplianceSummaryFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ComplianceSummaryFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ComplianceSummaryGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ComplianceSummaryGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ComplianceSummaryFindManyArgs, TData = Array<Prisma.ComplianceSummaryGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.ComplianceSummaryFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ComplianceSummaryGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ComplianceSummaryFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ComplianceSummaryFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ComplianceSummaryGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ComplianceSummaryGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ComplianceSummaryFindUniqueArgs, TData = Prisma.ComplianceSummaryGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ComplianceSummaryFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ComplianceSummaryGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ComplianceSummaryFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ComplianceSummaryFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ComplianceSummaryGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ComplianceSummaryGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    update: {

        useMutation: <T extends Prisma.ComplianceSummaryUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ComplianceSummaryUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ComplianceSummaryGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ComplianceSummaryGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ComplianceSummaryUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ComplianceSummaryUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ComplianceSummaryGetPayload<T>, Context>) => Promise<Prisma.ComplianceSummaryGetPayload<T>>
            };

    };
}
