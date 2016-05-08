
export interface ResultsByStatusData {
    BROKEN_TEST: number;
    FAIL: number;
    NOT_TESTED: number;
    NO_RESULT: number;
    PASS: number;
    SKIPPED: number;
}

export interface TestResultSummaryData {
    statusListOrdered: Array<string>;
    resultsByStatus: ResultsByStatusData;
    total: number;
    totalTime: number;
}

export interface BuildReferenceData {
    buildId: string;
    name: string;
}

export interface ProjectReferenceData {
    id: string;
    name: string;
}

export interface ReleaseReferenceData {
    name: string;
    releaseId: string;
}

export interface TestplanData {
    createdBy: string;
    id: string;
    isprivate: boolean;
    name: string;
    project: ProjectReferenceData;
    sharedWith: Array<string>;
}

export interface TestrunData {
    build: BuildReferenceData;
    dateCreated: number;
    id: string;
    name: string;
    project: ProjectReferenceData;
    release: ReleaseReferenceData;
    runFinished: number;
    runStarted: number;
    state: string;
    summary: TestResultSummaryData;
    testplan: TestplanData;
    testplanId: string;
}

export interface BuildReportData {
    name: string;
    type: string;
    created: number;
    grouptype: string;
    state: string;
    testruns: Array<TestrunData>;
    groupSummary: TestResultSummaryData;
}
