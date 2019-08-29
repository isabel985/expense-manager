import React from 'react';
import ReportSummary from '../components/reports/ReportSummary';
import ReportFilters from '../components/reports/ReportFilters';
import ReportHeader from '../components/reports/ReportHeader';

const Reports = () => {
  return (
    <>
      <div>I'm Reports</div>
      <ReportSummary />
      <ReportFilters />
      <ReportHeader />
    </>
  );
};

export default Reports;