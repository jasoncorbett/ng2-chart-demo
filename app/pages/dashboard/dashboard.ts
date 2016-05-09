import {Page} from 'ionic-angular';
import {BuildReport} from '../build-report/build-report';
import {HTTP_PROVIDERS, Http} from 'angular2/http';

@Page({
    templateUrl: "build/pages/dashboard/dashboard.html",
    directives: [BuildReport],
    providers: [HTTP_PROVIDERS]
})
export class DashboardPage {
    private buildReports:Array<any> = [];

    private buildReport:any = {};
    private buildReportIndex:number;

    constructor(private http:Http) {
        this.buildReportIndex = 0;
        var that = this;

        this.fetchdata(this);
        setInterval(function() {
            console.log("Fetching data");
            that.fetchdata(that);
        }, 60000);

        setInterval(function () {
            that.buildReportIndex++;
            if (that.buildReportIndex >= that.buildReports.length) {
                that.buildReportIndex = 0;
            }
            if(that.buildReports.length > 0) {
                that.buildReport = that.buildReports[that.buildReportIndex];
            }
        }, 8000);
    }

    fetchdata(that: DashboardPage) {
        let newBuildReports = [];
        this.http.get('config.json?cacheKill=' + new Date().getTime())
            .subscribe(
                function (data) {
                    let config = data.json();
                    for (let projectName in config.projects) {
                        that.http.get(config.slickApiBaseUrl + "projects/" + projectName + "?cacheKill=" + new Date().getTime())
                            .subscribe(function (projectResult) {
                                let project = projectResult.json();
                                for (let buildReportConfig of config.projects[projectName]) {
                                    if(buildReportConfig.release) {
                                        let release = {};
                                        for(let potentialRelease of project.releases) {
                                            if(potentialRelease.name == buildReportConfig.release) {
                                                release = potentialRelease;
                                                break;
                                            }
                                        }
                                            let newestBuild = {built: 0};
                                            for(let build of release.builds) {
                                                if(build.built > newestBuild.built) {
                                                    newestBuild = build;
                                                }
                                            }
                                        that.http.get(config.slickApiBaseUrl + "build-report/" + projectName + "/" + release.name + "/" + newestBuild.name + "?cacheKill=" + new Date().getTime())
                                            .subscribe(function(buildReportResponse) {
                                                newBuildReports.push(buildReportResponse.json());
                                                that.buildReports = newBuildReports;
                                                if(_.isEmpty(that.buildReport)) {
                                                    that.buildReport = that.buildReports[0];
                                                }
                                            });
                                    } else if(buildReportConfig.excludeRelease) {
                                        let release = {};
                                        let build = {built: 0};
                                        for(let potentialRelease of project.releases) {
                                            if(potentialRelease.name.indexOf(buildReportConfig.excludeRelease) < 0) {
                                                for(let potentialBuild of potentialRelease.builds) {
                                                    if(potentialBuild.built > build.built) {
                                                        release = potentialRelease;
                                                        build = potentialBuild;
                                                    }
                                                }
                                            }
                                        }
                                        that.http.get(config.slickApiBaseUrl + "build-report/" + projectName + "/" + release.name + "/" + build.name + "?cacheKill=" + new Date().getTime())
                                            .subscribe(function(buildReportResponse) {
                                                newBuildReports.push(buildReportResponse.json());
                                                that.buildReports = newBuildReports;
                                                if(_.isEmpty(that.buildReport)) {
                                                    that.buildReport = that.buildReports[0];
                                                }
                                            });
                                    } else {
                                        console.log("Bad configuration:");
                                        console.log(buildReportConfig);
                                    }
                                }
                            });
                    }
                },
                err => console.log(err)
            );

    }
}

