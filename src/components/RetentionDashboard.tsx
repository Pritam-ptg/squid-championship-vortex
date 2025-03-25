
import React from 'react';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Users, AlertCircle, ArrowUpRight } from 'lucide-react';

// Sample data for retention heat map
const retentionData = [
  { week: "Week 1", retention: 100 },
  { week: "Week 2", retention: 78 },
  { week: "Week 3", retention: 59 },
  { week: "Week 4", retention: 45 },
  { week: "Week 5", retention: 38 },
  { week: "Week 6", retention: 32 },
  { week: "Week 7", retention: 28 },
  { week: "Week 8", retention: 25 },
];

const userCohorts = [
  { cohort: "April 2025", users: 1250, retention: 54 },
  { cohort: "May 2025", users: 980, retention: 62 },
  { cohort: "June 2025", users: 1430, retention: 48 },
  { cohort: "July 2025", users: 1680, retention: 58 },
];

const RetentionDashboard = () => {
  return (
    <section className="py-16 md:py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="squid-title squid-gradient text-3xl md:text-4xl lg:text-5xl mb-4">
            USER SURVIVAL CHALLENGE
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Track how users survive through each week. Only the most engaged players remain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="squid-box squid-pulse">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-400">CURRENT PLAYERS</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Users className="mr-2 h-5 w-5 text-pink-500" />
                  <span className="squid-title text-2xl">5,623</span>
                </div>
                <span className="text-sm text-teal-400 flex items-center">
                  +12.5% <ArrowUpRight className="ml-1 h-4 w-4" />
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="squid-box squid-pulse">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-400">SURVIVAL RATE</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Trophy className="mr-2 h-5 w-5 text-pink-500" />
                  <span className="squid-title text-2xl">46.8%</span>
                </div>
                <span className="text-sm text-pink-400 flex items-center">
                  -2.3% <ArrowUpRight className="ml-1 h-4 w-4 transform rotate-90" />
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="squid-box squid-pulse">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-400">CRITICAL THRESHOLD</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <AlertCircle className="mr-2 h-5 w-5 text-pink-500" />
                  <span className="squid-title text-2xl">WEEK 3</span>
                </div>
                <span className="text-sm text-gray-400">59% Drop-off</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="squid-box col-span-1 lg:col-span-2">
            <CardHeader>
              <CardTitle className="squid-title text-xl">WEEKLY SURVIVAL CHALLENGE</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ChartContainer 
                  className="h-full" 
                  config={{
                    retention: {
                      label: "Retention",
                      theme: {
                        light: "#3274FF",
                        dark: "#3274FF",
                      },
                    }
                  }}
                >
                  {/* Blue retention chart would go here - maintained original color as requested */}
                  <div className="flex items-center h-full justify-center text-center">
                    <div className="w-full h-full">
                      {/* Retention heatmap visualization */}
                      <div className="flex items-end h-full justify-between">
                        {retentionData.map((data, i) => (
                          <div key={i} className="flex flex-col items-center flex-1">
                            <div 
                              className="w-full mx-0.5 transition-all duration-500 bg-gradient-to-t from-blue-800 to-blue-400"
                              style={{ height: `${data.retention}%`, opacity: 0.1 + (data.retention / 100) * 0.9 }}
                            ></div>
                            <div className="mt-2 text-xs">{data.week}</div>
                            <div className="mt-1 squid-title">{data.retention}%</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="squid-box">
            <CardHeader>
              <CardTitle className="squid-title text-xl">PLAYER COHORTS</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="squid-title">COHORT</TableHead>
                    <TableHead className="text-right squid-title">PLAYERS</TableHead>
                    <TableHead className="text-right squid-title">SURVIVAL</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {userCohorts.map((cohort) => (
                    <TableRow key={cohort.cohort}>
                      <TableCell className="font-medium">{cohort.cohort}</TableCell>
                      <TableCell className="text-right">{cohort.users}</TableCell>
                      <TableCell className="text-right">{cohort.retention}%</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RetentionDashboard;
