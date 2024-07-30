/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createAccountRouter from "./Account.router";
import createUserRouter from "./User.router";
import createSessionRouter from "./Session.router";
import createRoleRouter from "./Role.router";
import createLogFileRouter from "./LogFile.router";
import createAnalysisResultRouter from "./AnalysisResult.router";
import createRequirementRouter from "./Requirement.router";
import createReportRouter from "./Report.router";
import createComplianceSummaryRouter from "./ComplianceSummary.router";
import { ClientType as AccountClientType } from "./Account.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as SessionClientType } from "./Session.router";
import { ClientType as RoleClientType } from "./Role.router";
import { ClientType as LogFileClientType } from "./LogFile.router";
import { ClientType as AnalysisResultClientType } from "./AnalysisResult.router";
import { ClientType as RequirementClientType } from "./Requirement.router";
import { ClientType as ReportClientType } from "./Report.router";
import { ClientType as ComplianceSummaryClientType } from "./ComplianceSummary.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        account: createAccountRouter(router, procedure),
        user: createUserRouter(router, procedure),
        session: createSessionRouter(router, procedure),
        role: createRoleRouter(router, procedure),
        logFile: createLogFileRouter(router, procedure),
        analysisResult: createAnalysisResultRouter(router, procedure),
        requirement: createRequirementRouter(router, procedure),
        report: createReportRouter(router, procedure),
        complianceSummary: createComplianceSummaryRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    account: AccountClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    session: SessionClientType<AppRouter>;
    role: RoleClientType<AppRouter>;
    logFile: LogFileClientType<AppRouter>;
    analysisResult: AnalysisResultClientType<AppRouter>;
    requirement: RequirementClientType<AppRouter>;
    report: ReportClientType<AppRouter>;
    complianceSummary: ComplianceSummaryClientType<AppRouter>;
}
