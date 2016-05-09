import {Page} from 'ionic-angular';
import {NgFor} from 'angular2/common';
import {BuildReport} from '../build-report/build-report';

@Page({
    templateUrl: "build/pages/dashboard/dashboard.html",
    directives: [NgFor, BuildReport]
})
export class DashboardPage {
    private buildReports: Array<any> = [
        {
        "created": 1462467280493,
        "groupSummary": {
            "resultsByStatus": {
                "BROKEN_TEST": 11,
                "FAIL": 22,
                "NOT_TESTED": 0,
                "NO_RESULT": 10,
                "PASS": 208,
                "SKIPPED": 10
            },
            "statusListOrdered": [
                "PASS",
                "FAIL",
                "BROKEN_TEST",
                "NO_RESULT",
                "SKIPPED"
            ],
            "total": 261,
            "totalTime": 0
        },
        "grouptype": "PARALLEL",
        "name": "Build Report for Panel 3.3.0 Build 17146",
        "state": "FINISHED",
        "testruns": [
            {
                "build": {
                    "buildId": "572bcf300a6f039639fface4",
                    "name": "17146"
                },
                "dateCreated": 1462515682246,
                "files": [],
                "id": "572c37e20a6f0396382d1124",
                "name": "Cross Sensor Level 2",
                "project": {
                    "id": "55bfec8c0a6f0374b5a39827",
                    "name": "Panel"
                },
                "release": {
                    "name": "3.3.0",
                    "releaseId": "56e93e190a6f03bc07547780"
                },
                "runFinished": 1462516739943,
                "runStarted": 1462515682000,
                "state": "FINISHED",
                "summary": {
                    "resultsByStatus": {
                        "BROKEN_TEST": 3,
                        "FAIL": 1,
                        "NOT_TESTED": 0,
                        "NO_RESULT": 10,
                        "PASS": 5,
                        "SKIPPED": 0
                    },
                    "statusListOrdered": [
                        "PASS",
                        "FAIL",
                        "BROKEN_TEST",
                        "NO_RESULT"
                    ],
                    "total": 19,
                    "totalTime": 0
                },
                "testplan": {
                    "createdBy": "slickqa-python",
                    "id": "570bf74d0a6f039637d94ffd",
                    "isprivate": false,
                    "name": "Cross Sensor Level 2",
                    "project": {
                        "id": "55bfec8c0a6f0374b5a39827",
                        "name": "Panel"
                    },
                    "sharedWith": []
                },
                "testplanId": "570bf74d0a6f039637d94ffd"
            },
            {
                "build": {
                    "buildId": "572bcf300a6f039639fface4",
                    "name": "17146"
                },
                "dateCreated": 1462510987182,
                "files": [],
                "id": "572c258b0a6f03963473fefc",
                "name": "24 Hour Level 2",
                "project": {
                    "id": "55bfec8c0a6f0374b5a39827",
                    "name": "Panel"
                },
                "release": {
                    "name": "3.3.0",
                    "releaseId": "56e93e190a6f03bc07547780"
                },
                "runFinished": 1462515347092,
                "runStarted": 1462510987000,
                "state": "FINISHED",
                "summary": {
                    "resultsByStatus": {
                        "BROKEN_TEST": 1,
                        "FAIL": 6,
                        "NOT_TESTED": 0,
                        "NO_RESULT": 0,
                        "PASS": 18,
                        "SKIPPED": 10
                    },
                    "statusListOrdered": [
                        "PASS",
                        "FAIL",
                        "BROKEN_TEST",
                        "SKIPPED"
                    ],
                    "total": 35,
                    "totalTime": 0
                },
                "testplan": {
                    "createdBy": "slickqa-python",
                    "id": "570bf08a0a6f0396353e358e",
                    "isprivate": false,
                    "name": "24 Hour Level 2",
                    "project": {
                        "id": "55bfec8c0a6f0374b5a39827",
                        "name": "Panel"
                    },
                    "sharedWith": []
                },
                "testplanId": "570bf08a0a6f0396353e358e"
            },
            {
                "build": {
                    "buildId": "572bcf300a6f039639fface4",
                    "name": "17146"
                },
                "dateCreated": 1462506227400,
                "files": [],
                "id": "572c12f30a6f039639ffada3",
                "name": "Security Core Level 2",
                "project": {
                    "id": "55bfec8c0a6f0374b5a39827",
                    "name": "Panel"
                },
                "release": {
                    "name": "3.3.0",
                    "releaseId": "56e93e190a6f03bc07547780"
                },
                "runFinished": 1462510647481,
                "runStarted": 1462506227000,
                "state": "FINISHED",
                "summary": {
                    "resultsByStatus": {
                        "BROKEN_TEST": 0,
                        "FAIL": 0,
                        "NOT_TESTED": 0,
                        "NO_RESULT": 0,
                        "PASS": 35,
                        "SKIPPED": 0
                    },
                    "statusListOrdered": [
                        "PASS"
                    ],
                    "total": 35,
                    "totalTime": 0
                },
                "testplan": {
                    "createdBy": "slickqa-python",
                    "id": "56b936d70a6f032e7d642719",
                    "isprivate": false,
                    "name": "Security Core Level 2",
                    "project": {
                        "id": "55bfec8c0a6f0374b5a39827",
                        "name": "Panel"
                    },
                    "sharedWith": []
                },
                "testplanId": "56b936d70a6f032e7d642719"
            },
            {
                "build": {
                    "buildId": "572bcf300a6f039639fface4",
                    "name": "17146"
                },
                "dateCreated": 1462505498770,
                "files": [],
                "id": "572c101b0a6f039637d98b23",
                "name": "ZWave Admin Control Level 1",
                "project": {
                    "id": "55bfec8c0a6f0374b5a39827",
                    "name": "Panel"
                },
                "release": {
                    "name": "3.3.0",
                    "releaseId": "56e93e190a6f03bc07547780"
                },
                "runFinished": 1462505889685,
                "runStarted": 1462505498000,
                "state": "FINISHED",
                "summary": {
                    "resultsByStatus": {
                        "BROKEN_TEST": 0,
                        "FAIL": 1,
                        "NOT_TESTED": 0,
                        "NO_RESULT": 0,
                        "PASS": 7,
                        "SKIPPED": 0
                    },
                    "statusListOrdered": [
                        "PASS",
                        "FAIL"
                    ],
                    "total": 8,
                    "totalTime": 0
                },
                "testplan": {
                    "createdBy": "slickqa-python",
                    "id": "57212db30a6f039637d96f02",
                    "isprivate": false,
                    "name": "ZWave Admin Control Level 1",
                    "project": {
                        "id": "55bfec8c0a6f0374b5a39827",
                        "name": "Panel"
                    },
                    "sharedWith": []
                },
                "testplanId": "57212db30a6f039637d96f02"
            },
            {
                "build": {
                    "buildId": "572bcf300a6f039639fface4",
                    "name": "17146"
                },
                "dateCreated": 1462504503468,
                "files": [],
                "id": "572c0c370a6f039631363d42",
                "name": "Thermostat Schedule (Panel UI) Level 1",
                "project": {
                    "id": "55bfec8c0a6f0374b5a39827",
                    "name": "Panel"
                },
                "release": {
                    "name": "3.3.0",
                    "releaseId": "56e93e190a6f03bc07547780"
                },
                "runFinished": 1462505163685,
                "runStarted": 1462504503000,
                "state": "FINISHED",
                "summary": {
                    "resultsByStatus": {
                        "BROKEN_TEST": 0,
                        "FAIL": 1,
                        "NOT_TESTED": 0,
                        "NO_RESULT": 0,
                        "PASS": 23,
                        "SKIPPED": 0
                    },
                    "statusListOrdered": [
                        "PASS",
                        "FAIL"
                    ],
                    "total": 24,
                    "totalTime": 0
                },
                "testplan": {
                    "createdBy": "slickqa-python",
                    "id": "5723f5b00a6f03962ff37531",
                    "isprivate": false,
                    "name": "Thermostat Schedule (Panel UI) Level 1",
                    "project": {
                        "id": "55bfec8c0a6f0374b5a39827",
                        "name": "Panel"
                    },
                    "sharedWith": []
                },
                "testplanId": "5723f5b00a6f03962ff37531"
            },
            {
                "build": {
                    "buildId": "572bcf300a6f039639fface4",
                    "name": "17146"
                },
                "dateCreated": 1462504091012,
                "files": [],
                "id": "572c0a9b0a6f03963b84e456",
                "name": "Thermostat Schedule (Panel API) Level 1",
                "project": {
                    "id": "55bfec8c0a6f0374b5a39827",
                    "name": "Panel"
                },
                "release": {
                    "name": "3.3.0",
                    "releaseId": "56e93e190a6f03bc07547780"
                },
                "runFinished": 1462504472941,
                "runStarted": 1462504091000,
                "state": "FINISHED",
                "summary": {
                    "resultsByStatus": {
                        "BROKEN_TEST": 0,
                        "FAIL": 0,
                        "NOT_TESTED": 0,
                        "NO_RESULT": 0,
                        "PASS": 24,
                        "SKIPPED": 0
                    },
                    "statusListOrdered": [
                        "PASS"
                    ],
                    "total": 24,
                    "totalTime": 0
                },
                "testplan": {
                    "createdBy": "slickqa-python",
                    "id": "5723f3e60a6f03963a6486dd",
                    "isprivate": false,
                    "name": "Thermostat Schedule (Panel API) Level 1",
                    "project": {
                        "id": "55bfec8c0a6f0374b5a39827",
                        "name": "Panel"
                    },
                    "sharedWith": []
                },
                "testplanId": "5723f3e60a6f03963a6486dd"
            },
            {
                "build": {
                    "buildId": "572bcf300a6f039639fface4",
                    "name": "17146"
                },
                "dateCreated": 1462503785674,
                "files": [],
                "id": "572c096a0a6f03962ff38a1c",
                "name": "Thermostat Settings Level 1",
                "project": {
                    "id": "55bfec8c0a6f0374b5a39827",
                    "name": "Panel"
                },
                "release": {
                    "name": "3.3.0",
                    "releaseId": "56e93e190a6f03bc07547780"
                },
                "runFinished": 1462504060742,
                "runStarted": 1462503785000,
                "state": "FINISHED",
                "summary": {
                    "resultsByStatus": {
                        "BROKEN_TEST": 0,
                        "FAIL": 0,
                        "NOT_TESTED": 0,
                        "NO_RESULT": 0,
                        "PASS": 2,
                        "SKIPPED": 0
                    },
                    "statusListOrdered": [
                        "PASS"
                    ],
                    "total": 2,
                    "totalTime": 0
                },
                "testplan": {
                    "createdBy": "slickqa-python",
                    "id": "57212b8c0a6f039630433e1c",
                    "isprivate": false,
                    "name": "Thermostat Settings Level 1",
                    "project": {
                        "id": "55bfec8c0a6f0374b5a39827",
                        "name": "Panel"
                    },
                    "sharedWith": []
                },
                "testplanId": "57212b8c0a6f039630433e1c"
            },
            {
                "build": {
                    "buildId": "572bcf300a6f039639fface4",
                    "name": "17146"
                },
                "dateCreated": 1462502137269,
                "files": [],
                "id": "572c02f90a6f039631363d1b",
                "name": "Security Core Level 1",
                "project": {
                    "id": "55bfec8c0a6f0374b5a39827",
                    "name": "Panel"
                },
                "release": {
                    "name": "3.3.0",
                    "releaseId": "56e93e190a6f03bc07547780"
                },
                "runFinished": 1462503442593,
                "runStarted": 1462502137000,
                "state": "FINISHED",
                "summary": {
                    "resultsByStatus": {
                        "BROKEN_TEST": 0,
                        "FAIL": 1,
                        "NOT_TESTED": 0,
                        "NO_RESULT": 0,
                        "PASS": 29,
                        "SKIPPED": 0
                    },
                    "statusListOrdered": [
                        "PASS",
                        "FAIL"
                    ],
                    "total": 30,
                    "totalTime": 0
                },
                "testplan": {
                    "createdBy": "slickqa-python",
                    "id": "56b8c8ed0a6f032e7c25903c",
                    "isprivate": false,
                    "name": "Security Core Level 1",
                    "project": {
                        "id": "55bfec8c0a6f0374b5a39827",
                        "name": "Panel"
                    },
                    "sharedWith": []
                },
                "testplanId": "56b8c8ed0a6f032e7c25903c"
            },
            {
                "build": {
                    "buildId": "572bcf300a6f039639fface4",
                    "name": "17146"
                },
                "dateCreated": 1462501580918,
                "files": [],
                "id": "572c00cd0a6f039639ffad65",
                "name": "Thermostat BATs",
                "project": {
                    "id": "55bfec8c0a6f0374b5a39827",
                    "name": "Panel"
                },
                "release": {
                    "name": "3.3.0",
                    "releaseId": "56e93e190a6f03bc07547780"
                },
                "runFinished": 1462501795841,
                "runStarted": 1462501580000,
                "state": "FINISHED",
                "summary": {
                    "resultsByStatus": {
                        "BROKEN_TEST": 0,
                        "FAIL": 2,
                        "NOT_TESTED": 0,
                        "NO_RESULT": 0,
                        "PASS": 5,
                        "SKIPPED": 0
                    },
                    "statusListOrdered": [
                        "PASS",
                        "FAIL"
                    ],
                    "total": 7,
                    "totalTime": 0
                },
                "testplan": {
                    "createdBy": "slickqa-python",
                    "id": "570c636b0a6f039639ff72a3",
                    "isprivate": false,
                    "name": "Thermostat BATs",
                    "project": {
                        "id": "55bfec8c0a6f0374b5a39827",
                        "name": "Panel"
                    },
                    "sharedWith": []
                },
                "testplanId": "570c636b0a6f039639ff72a3"
            },
            {
                "build": {
                    "buildId": "572bcf300a6f039639fface4",
                    "name": "17146"
                },
                "dateCreated": 1462500877399,
                "files": [],
                "id": "572bfe0d0a6f03963c68cf62",
                "name": "Z-Wave BATs",
                "project": {
                    "id": "55bfec8c0a6f0374b5a39827",
                    "name": "Panel"
                },
                "release": {
                    "name": "3.3.0",
                    "releaseId": "56e93e190a6f03bc07547780"
                },
                "runFinished": 1462501247881,
                "runStarted": 1462500877000,
                "state": "FINISHED",
                "summary": {
                    "resultsByStatus": {
                        "BROKEN_TEST": 0,
                        "FAIL": 0,
                        "NOT_TESTED": 0,
                        "NO_RESULT": 0,
                        "PASS": 9,
                        "SKIPPED": 0
                    },
                    "statusListOrdered": [
                        "PASS"
                    ],
                    "total": 9,
                    "totalTime": 0
                },
                "testplan": {
                    "createdBy": "slickqa-python",
                    "id": "5706e1330a6f03962ff34aa7",
                    "isprivate": false,
                    "name": "Z-Wave BATs",
                    "project": {
                        "id": "55bfec8c0a6f0374b5a39827",
                        "name": "Panel"
                    },
                    "sharedWith": []
                },
                "testplanId": "5706e1330a6f03962ff34aa7"
            },
            {
                "build": {
                    "buildId": "572bcf300a6f039639fface4",
                    "name": "17146"
                },
                "dateCreated": 1462496014206,
                "files": [],
                "id": "572beb0e0a6f03963657d99a",
                "name": "Security Core BATs",
                "project": {
                    "id": "55bfec8c0a6f0374b5a39827",
                    "name": "Panel"
                },
                "release": {
                    "name": "3.3.0",
                    "releaseId": "56e93e190a6f03bc07547780"
                },
                "runFinished": 1462500539401,
                "runStarted": 1462496014000,
                "state": "FINISHED",
                "summary": {
                    "resultsByStatus": {
                        "BROKEN_TEST": 0,
                        "FAIL": 6,
                        "NOT_TESTED": 0,
                        "NO_RESULT": 0,
                        "PASS": 37,
                        "SKIPPED": 0
                    },
                    "statusListOrdered": [
                        "PASS",
                        "FAIL"
                    ],
                    "total": 43,
                    "totalTime": 0
                },
                "testplan": {
                    "createdBy": "slickqa-python",
                    "id": "56984ba50a6f03839ee72eaf",
                    "isprivate": false,
                    "name": "Security Core BATs",
                    "project": {
                        "id": "55bfec8c0a6f0374b5a39827",
                        "name": "Panel"
                    },
                    "sharedWith": []
                },
                "testplanId": "56984ba50a6f03839ee72eaf"
            },
            {
                "build": {
                    "buildId": "572bcf300a6f039639fface4",
                    "name": "17146"
                },
                "dateCreated": 1462489328614,
                "files": [],
                "id": "572bd0f00a6f039637d98a8c",
                "name": "Camera defaults using gui for Doorbell v1",
                "project": {
                    "id": "55bfec8c0a6f0374b5a39827",
                    "name": "Panel"
                },
                "release": {
                    "name": "3.3.0",
                    "releaseId": "56e93e190a6f03bc07547780"
                },
                "runFinished": 1462491120927,
                "runStarted": 1462489328000,
                "state": "FINISHED",
                "summary": {
                    "resultsByStatus": {
                        "BROKEN_TEST": 0,
                        "FAIL": 2,
                        "NOT_TESTED": 0,
                        "NO_RESULT": 0,
                        "PASS": 12,
                        "SKIPPED": 0
                    },
                    "statusListOrdered": [
                        "PASS",
                        "FAIL"
                    ],
                    "total": 14,
                    "totalTime": 0
                },
                "testplan": {
                    "createdBy": "slickqa-python",
                    "id": "56eb07960a6f03bbfe68f423",
                    "isprivate": false,
                    "name": "Camera defaults using gui for Doorbell v1",
                    "project": {
                        "id": "55bfec8c0a6f0374b5a39827",
                        "name": "Panel"
                    },
                    "sharedWith": []
                },
                "testplanId": "56eb07960a6f03bbfe68f423"
            },
            {
                "build": {
                    "buildId": "572bcf300a6f039639fface4",
                    "name": "17146"
                },
                "dateCreated": 1462488881223,
                "files": [],
                "id": "572bcf310a6f03963a649a4e",
                "name": "Camera defaults using gui for 520",
                "project": {
                    "id": "55bfec8c0a6f0374b5a39827",
                    "name": "Panel"
                },
                "release": {
                    "name": "3.3.0",
                    "releaseId": "56e93e190a6f03bc07547780"
                },
                "runFinished": 1462489297985,
                "runStarted": 1462488881000,
                "state": "FINISHED",
                "summary": {
                    "resultsByStatus": {
                        "BROKEN_TEST": 7,
                        "FAIL": 2,
                        "NOT_TESTED": 0,
                        "NO_RESULT": 0,
                        "PASS": 2,
                        "SKIPPED": 0
                    },
                    "statusListOrdered": [
                        "PASS",
                        "FAIL",
                        "BROKEN_TEST"
                    ],
                    "total": 11,
                    "totalTime": 0
                },
                "testplan": {
                    "createdBy": "slickqa-python",
                    "id": "56eaeada0a6f03bbff5dc15c",
                    "isprivate": false,
                    "name": "Camera defaults using gui for 520",
                    "project": {
                        "id": "55bfec8c0a6f0374b5a39827",
                        "name": "Panel"
                    },
                    "sharedWith": []
                },
                "testplanId": "56eaeada0a6f03bbff5dc15c"
            }
        ]
    },
        {
            "created": 1462683604978,
            "groupSummary": {
                "resultsByStatus": {
                    "BROKEN_TEST": 7,
                    "FAIL": 20,
                    "NOT_TESTED": 0,
                    "NO_RESULT": 0,
                    "PASS": 214,
                    "SKIPPED": 0
                },
                "statusListOrdered": [
                    "PASS",
                    "FAIL",
                    "BROKEN_TEST"
                ],
                "total": 241,
                "totalTime": 0
            },
            "grouptype": "PARALLEL",
            "name": "Build Report for Panel 3.4.0 Build 17169",
            "state": "FINISHED",
            "testruns": [
                {
                    "build": {
                        "buildId": "572f1c350a6f0396304360c0",
                        "name": "17169"
                    },
                    "dateCreated": 1462725107370,
                    "files": [],
                    "id": "572f69f30a6f03963474050e",
                    "name": "Cross Sensor Level 2",
                    "project": {
                        "id": "55bfec8c0a6f0374b5a39827",
                        "name": "Panel"
                    },
                    "release": {
                        "name": "3.4.0",
                        "releaseId": "572b27930a6f039630435828"
                    },
                    "runFinished": 1462726165652,
                    "runStarted": 1462725107000,
                    "state": "FINISHED",
                    "summary": {
                        "resultsByStatus": {
                            "BROKEN_TEST": 3,
                            "FAIL": 1,
                            "NOT_TESTED": 0,
                            "NO_RESULT": 0,
                            "PASS": 5,
                            "SKIPPED": 0
                        },
                        "statusListOrdered": [
                            "PASS",
                            "FAIL",
                            "BROKEN_TEST"
                        ],
                        "total": 9,
                        "totalTime": 0
                    },
                    "testplan": {
                        "createdBy": "slickqa-python",
                        "id": "570bf74d0a6f039637d94ffd",
                        "isprivate": false,
                        "name": "Cross Sensor Level 2",
                        "project": {
                            "id": "55bfec8c0a6f0374b5a39827",
                            "name": "Panel"
                        },
                        "sharedWith": []
                    },
                    "testplanId": "570bf74d0a6f039637d94ffd"
                },
                {
                    "build": {
                        "buildId": "572f1c350a6f0396304360c0",
                        "name": "17169"
                    },
                    "dateCreated": 1462720318056,
                    "files": [],
                    "id": "572f573e0a6f0396353e7605",
                    "name": "24 Hour Level 2",
                    "project": {
                        "id": "55bfec8c0a6f0374b5a39827",
                        "name": "Panel"
                    },
                    "release": {
                        "name": "3.4.0",
                        "releaseId": "572b27930a6f039630435828"
                    },
                    "runFinished": 1462724770487,
                    "runStarted": 1462720318000,
                    "state": "FINISHED",
                    "summary": {
                        "resultsByStatus": {
                            "BROKEN_TEST": 0,
                            "FAIL": 4,
                            "NOT_TESTED": 0,
                            "NO_RESULT": 0,
                            "PASS": 21,
                            "SKIPPED": 0
                        },
                        "statusListOrdered": [
                            "PASS",
                            "FAIL"
                        ],
                        "total": 25,
                        "totalTime": 0
                    },
                    "testplan": {
                        "createdBy": "slickqa-python",
                        "id": "570bf08a0a6f0396353e358e",
                        "isprivate": false,
                        "name": "24 Hour Level 2",
                        "project": {
                            "id": "55bfec8c0a6f0374b5a39827",
                            "name": "Panel"
                        },
                        "sharedWith": []
                    },
                    "testplanId": "570bf08a0a6f0396353e358e"
                },
                {
                    "build": {
                        "buildId": "572f1c350a6f0396304360c0",
                        "name": "17169"
                    },
                    "dateCreated": 1462715613598,
                    "files": [],
                    "id": "572f44dd0a6f0396347404eb",
                    "name": "Security Core Level 2",
                    "project": {
                        "id": "55bfec8c0a6f0374b5a39827",
                        "name": "Panel"
                    },
                    "release": {
                        "name": "3.4.0",
                        "releaseId": "572b27930a6f039630435828"
                    },
                    "runFinished": 1462719982634,
                    "runStarted": 1462715613000,
                    "state": "FINISHED",
                    "summary": {
                        "resultsByStatus": {
                            "BROKEN_TEST": 0,
                            "FAIL": 3,
                            "NOT_TESTED": 0,
                            "NO_RESULT": 0,
                            "PASS": 32,
                            "SKIPPED": 0
                        },
                        "statusListOrdered": [
                            "PASS",
                            "FAIL"
                        ],
                        "total": 35,
                        "totalTime": 0
                    },
                    "testplan": {
                        "createdBy": "slickqa-python",
                        "id": "56b936d70a6f032e7d642719",
                        "isprivate": false,
                        "name": "Security Core Level 2",
                        "project": {
                            "id": "55bfec8c0a6f0374b5a39827",
                            "name": "Panel"
                        },
                        "sharedWith": []
                    },
                    "testplanId": "56b936d70a6f032e7d642719"
                },
                {
                    "build": {
                        "buildId": "572f1c350a6f0396304360c0",
                        "name": "17169"
                    },
                    "dateCreated": 1462714749608,
                    "files": [],
                    "id": "572f417d0a6f03963136428b",
                    "name": "ZWave Admin Control Level 1",
                    "project": {
                        "id": "55bfec8c0a6f0374b5a39827",
                        "name": "Panel"
                    },
                    "release": {
                        "name": "3.4.0",
                        "releaseId": "572b27930a6f039630435828"
                    },
                    "runFinished": 1462715276567,
                    "runStarted": 1462714749000,
                    "state": "FINISHED",
                    "summary": {
                        "resultsByStatus": {
                            "BROKEN_TEST": 2,
                            "FAIL": 1,
                            "NOT_TESTED": 0,
                            "NO_RESULT": 0,
                            "PASS": 5,
                            "SKIPPED": 0
                        },
                        "statusListOrdered": [
                            "PASS",
                            "FAIL",
                            "BROKEN_TEST"
                        ],
                        "total": 8,
                        "totalTime": 0
                    },
                    "testplan": {
                        "createdBy": "slickqa-python",
                        "id": "57212db30a6f039637d96f02",
                        "isprivate": false,
                        "name": "ZWave Admin Control Level 1",
                        "project": {
                            "id": "55bfec8c0a6f0374b5a39827",
                            "name": "Panel"
                        },
                        "sharedWith": []
                    },
                    "testplanId": "57212db30a6f039637d96f02"
                },
                {
                    "build": {
                        "buildId": "572f1c350a6f0396304360c0",
                        "name": "17169"
                    },
                    "dateCreated": 1462713703284,
                    "files": [],
                    "id": "572f3d670a6f03963c68d5c3",
                    "name": "Thermostat Schedule (Panel UI) Level 1",
                    "project": {
                        "id": "55bfec8c0a6f0374b5a39827",
                        "name": "Panel"
                    },
                    "release": {
                        "name": "3.4.0",
                        "releaseId": "572b27930a6f039630435828"
                    },
                    "runFinished": 1462714416962,
                    "runStarted": 1462713703000,
                    "state": "FINISHED",
                    "summary": {
                        "resultsByStatus": {
                            "BROKEN_TEST": 0,
                            "FAIL": 1,
                            "NOT_TESTED": 0,
                            "NO_RESULT": 0,
                            "PASS": 23,
                            "SKIPPED": 0
                        },
                        "statusListOrdered": [
                            "PASS",
                            "FAIL"
                        ],
                        "total": 24,
                        "totalTime": 0
                    },
                    "testplan": {
                        "createdBy": "slickqa-python",
                        "id": "5723f5b00a6f03962ff37531",
                        "isprivate": false,
                        "name": "Thermostat Schedule (Panel UI) Level 1",
                        "project": {
                            "id": "55bfec8c0a6f0374b5a39827",
                            "name": "Panel"
                        },
                        "sharedWith": []
                    },
                    "testplanId": "5723f5b00a6f03962ff37531"
                },
                {
                    "build": {
                        "buildId": "572f1c350a6f0396304360c0",
                        "name": "17169"
                    },
                    "dateCreated": 1462713216568,
                    "files": [],
                    "id": "572f3b810a6f03962ff38fa1",
                    "name": "Thermostat Schedule (Panel API) Level 1",
                    "project": {
                        "id": "55bfec8c0a6f0374b5a39827",
                        "name": "Panel"
                    },
                    "release": {
                        "name": "3.4.0",
                        "releaseId": "572b27930a6f039630435828"
                    },
                    "runFinished": 1462713672957,
                    "runStarted": 1462713216000,
                    "state": "FINISHED",
                    "summary": {
                        "resultsByStatus": {
                            "BROKEN_TEST": 0,
                            "FAIL": 0,
                            "NOT_TESTED": 0,
                            "NO_RESULT": 0,
                            "PASS": 24,
                            "SKIPPED": 0
                        },
                        "statusListOrdered": [
                            "PASS"
                        ],
                        "total": 24,
                        "totalTime": 0
                    },
                    "testplan": {
                        "createdBy": "slickqa-python",
                        "id": "5723f3e60a6f03963a6486dd",
                        "isprivate": false,
                        "name": "Thermostat Schedule (Panel API) Level 1",
                        "project": {
                            "id": "55bfec8c0a6f0374b5a39827",
                            "name": "Panel"
                        },
                        "sharedWith": []
                    },
                    "testplanId": "5723f3e60a6f03963a6486dd"
                },
                {
                    "build": {
                        "buildId": "572f1c350a6f0396304360c0",
                        "name": "17169"
                    },
                    "dateCreated": 1462712840209,
                    "files": [],
                    "id": "572f3a080a6f0396353e75e0",
                    "name": "Thermostat Settings Level 1",
                    "project": {
                        "id": "55bfec8c0a6f0374b5a39827",
                        "name": "Panel"
                    },
                    "release": {
                        "name": "3.4.0",
                        "releaseId": "572b27930a6f039630435828"
                    },
                    "runFinished": 1462713186227,
                    "runStarted": 1462712840000,
                    "state": "FINISHED",
                    "summary": {
                        "resultsByStatus": {
                            "BROKEN_TEST": 0,
                            "FAIL": 2,
                            "NOT_TESTED": 0,
                            "NO_RESULT": 0,
                            "PASS": 0,
                            "SKIPPED": 0
                        },
                        "statusListOrdered": [
                            "FAIL"
                        ],
                        "total": 2,
                        "totalTime": 0
                    },
                    "testplan": {
                        "createdBy": "slickqa-python",
                        "id": "57212b8c0a6f039630433e1c",
                        "isprivate": false,
                        "name": "Thermostat Settings Level 1",
                        "project": {
                            "id": "55bfec8c0a6f0374b5a39827",
                            "name": "Panel"
                        },
                        "sharedWith": []
                    },
                    "testplanId": "57212b8c0a6f039630433e1c"
                },
                {
                    "build": {
                        "buildId": "572f1c350a6f0396304360c0",
                        "name": "17169"
                    },
                    "dateCreated": 1462711314921,
                    "files": [],
                    "id": "572f34130a6f039637d9908e",
                    "name": "Security Core Level 1",
                    "project": {
                        "id": "55bfec8c0a6f0374b5a39827",
                        "name": "Panel"
                    },
                    "release": {
                        "name": "3.4.0",
                        "releaseId": "572b27930a6f039630435828"
                    },
                    "runFinished": 1462712505086,
                    "runStarted": 1462711314000,
                    "state": "FINISHED",
                    "summary": {
                        "resultsByStatus": {
                            "BROKEN_TEST": 0,
                            "FAIL": 1,
                            "NOT_TESTED": 0,
                            "NO_RESULT": 0,
                            "PASS": 29,
                            "SKIPPED": 0
                        },
                        "statusListOrdered": [
                            "PASS",
                            "FAIL"
                        ],
                        "total": 30,
                        "totalTime": 0
                    },
                    "testplan": {
                        "createdBy": "slickqa-python",
                        "id": "56b8c8ed0a6f032e7c25903c",
                        "isprivate": false,
                        "name": "Security Core Level 1",
                        "project": {
                            "id": "55bfec8c0a6f0374b5a39827",
                            "name": "Panel"
                        },
                        "sharedWith": []
                    },
                    "testplanId": "56b8c8ed0a6f032e7c25903c"
                },
                {
                    "build": {
                        "buildId": "572f1c350a6f0396304360c0",
                        "name": "17169"
                    },
                    "dateCreated": 1462710758197,
                    "files": [],
                    "id": "572f31e60a6f039639ffb347",
                    "name": "Thermostat BATs",
                    "project": {
                        "id": "55bfec8c0a6f0374b5a39827",
                        "name": "Panel"
                    },
                    "release": {
                        "name": "3.4.0",
                        "releaseId": "572b27930a6f039630435828"
                    },
                    "runFinished": 1462710977876,
                    "runStarted": 1462710758000,
                    "state": "FINISHED",
                    "summary": {
                        "resultsByStatus": {
                            "BROKEN_TEST": 0,
                            "FAIL": 2,
                            "NOT_TESTED": 0,
                            "NO_RESULT": 0,
                            "PASS": 5,
                            "SKIPPED": 0
                        },
                        "statusListOrdered": [
                            "PASS",
                            "FAIL"
                        ],
                        "total": 7,
                        "totalTime": 0
                    },
                    "testplan": {
                        "createdBy": "slickqa-python",
                        "id": "570c636b0a6f039639ff72a3",
                        "isprivate": false,
                        "name": "Thermostat BATs",
                        "project": {
                            "id": "55bfec8c0a6f0374b5a39827",
                            "name": "Panel"
                        },
                        "sharedWith": []
                    },
                    "testplanId": "570c636b0a6f039639ff72a3"
                },
                {
                    "build": {
                        "buildId": "572f1c350a6f0396304360c0",
                        "name": "17169"
                    },
                    "dateCreated": 1462710048200,
                    "files": [],
                    "id": "572f2f200a6f03962e43ff9b",
                    "name": "Z-Wave BATs",
                    "project": {
                        "id": "55bfec8c0a6f0374b5a39827",
                        "name": "Panel"
                    },
                    "release": {
                        "name": "3.4.0",
                        "releaseId": "572b27930a6f039630435828"
                    },
                    "runFinished": 1462710421778,
                    "runStarted": 1462710048000,
                    "state": "FINISHED",
                    "summary": {
                        "resultsByStatus": {
                            "BROKEN_TEST": 0,
                            "FAIL": 0,
                            "NOT_TESTED": 0,
                            "NO_RESULT": 0,
                            "PASS": 9,
                            "SKIPPED": 0
                        },
                        "statusListOrdered": [
                            "PASS"
                        ],
                        "total": 9,
                        "totalTime": 0
                    },
                    "testplan": {
                        "createdBy": "slickqa-python",
                        "id": "5706e1330a6f03962ff34aa7",
                        "isprivate": false,
                        "name": "Z-Wave BATs",
                        "project": {
                            "id": "55bfec8c0a6f0374b5a39827",
                            "name": "Panel"
                        },
                        "sharedWith": []
                    },
                    "testplanId": "5706e1330a6f03962ff34aa7"
                },
                {
                    "build": {
                        "buildId": "572f1c350a6f0396304360c0",
                        "name": "17169"
                    },
                    "dateCreated": 1462706185077,
                    "files": [],
                    "id": "572f20090a6f03963a64a061",
                    "name": "Camera defaults using gui for Doorbell v1",
                    "project": {
                        "id": "55bfec8c0a6f0374b5a39827",
                        "name": "Panel"
                    },
                    "release": {
                        "name": "3.4.0",
                        "releaseId": "572b27930a6f039630435828"
                    },
                    "runFinished": 1462708012990,
                    "runStarted": 1462706185000,
                    "state": "FINISHED",
                    "summary": {
                        "resultsByStatus": {
                            "BROKEN_TEST": 0,
                            "FAIL": 2,
                            "NOT_TESTED": 0,
                            "NO_RESULT": 0,
                            "PASS": 12,
                            "SKIPPED": 0
                        },
                        "statusListOrdered": [
                            "PASS",
                            "FAIL"
                        ],
                        "total": 14,
                        "totalTime": 0
                    },
                    "testplan": {
                        "createdBy": "slickqa-python",
                        "id": "56eb07960a6f03bbfe68f423",
                        "isprivate": false,
                        "name": "Camera defaults using gui for Doorbell v1",
                        "project": {
                            "id": "55bfec8c0a6f0374b5a39827",
                            "name": "Panel"
                        },
                        "sharedWith": []
                    },
                    "testplanId": "56eb07960a6f03bbfe68f423"
                },
                {
                    "build": {
                        "buildId": "572f1c350a6f0396304360c0",
                        "name": "17169"
                    },
                    "dateCreated": 1462705330934,
                    "files": [],
                    "id": "572f1cb30a6f03962d7d4f12",
                    "name": "Security Core BATs",
                    "project": {
                        "id": "55bfec8c0a6f0374b5a39827",
                        "name": "Panel"
                    },
                    "release": {
                        "name": "3.4.0",
                        "releaseId": "572b27930a6f039630435828"
                    },
                    "runFinished": 1462709715455,
                    "runStarted": 1462705330000,
                    "state": "FINISHED",
                    "summary": {
                        "resultsByStatus": {
                            "BROKEN_TEST": 0,
                            "FAIL": 3,
                            "NOT_TESTED": 0,
                            "NO_RESULT": 0,
                            "PASS": 40,
                            "SKIPPED": 0
                        },
                        "statusListOrdered": [
                            "PASS",
                            "FAIL"
                        ],
                        "total": 43,
                        "totalTime": 0
                    },
                    "testplan": {
                        "createdBy": "slickqa-python",
                        "id": "56984ba50a6f03839ee72eaf",
                        "isprivate": false,
                        "name": "Security Core BATs",
                        "project": {
                            "id": "55bfec8c0a6f0374b5a39827",
                            "name": "Panel"
                        },
                        "sharedWith": []
                    },
                    "testplanId": "56984ba50a6f03839ee72eaf"
                },
                {
                    "build": {
                        "buildId": "572f1c350a6f0396304360c0",
                        "name": "17169"
                    },
                    "dateCreated": 1462705205355,
                    "files": [],
                    "id": "572f1c350a6f039637d99066",
                    "name": "Camera defaults using gui for Ping",
                    "project": {
                        "id": "55bfec8c0a6f0374b5a39827",
                        "name": "Panel"
                    },
                    "release": {
                        "name": "3.4.0",
                        "releaseId": "572b27930a6f039630435828"
                    },
                    "runFinished": 1462706154317,
                    "runStarted": 1462705205000,
                    "state": "FINISHED",
                    "summary": {
                        "resultsByStatus": {
                            "BROKEN_TEST": 2,
                            "FAIL": 0,
                            "NOT_TESTED": 0,
                            "NO_RESULT": 0,
                            "PASS": 9,
                            "SKIPPED": 0
                        },
                        "statusListOrdered": [
                            "PASS",
                            "BROKEN_TEST"
                        ],
                        "total": 11,
                        "totalTime": 0
                    },
                    "testplan": {
                        "createdBy": "slickqa-python",
                        "id": "56f04c000a6f030f14cb6060",
                        "isprivate": false,
                        "name": "Camera defaults using gui for Ping",
                        "project": {
                            "id": "55bfec8c0a6f0374b5a39827",
                            "name": "Panel"
                        },
                        "sharedWith": []
                    },
                    "testplanId": "56f04c000a6f030f14cb6060"
                }
            ]
        }];

    private buildReport: any;
    private buildReportIndex: number;

    constructor() {
        this.buildReportIndex = 0;
        this.buildReport = this.buildReports[0];
        var that = this;
        setInterval(function() {
            that.buildReportIndex++;
            if(that.buildReportIndex >= that.buildReports.length) {
                that.buildReportIndex = 0;
            }
            that.buildReport = that.buildReports[that.buildReportIndex];
        }, 5000);
    }
}

