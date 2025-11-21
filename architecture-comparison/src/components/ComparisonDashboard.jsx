import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from 'recharts';
import { architecturesData } from '../data/architectures';

const ComparisonDashboard = () => {
  // Convert metrics to chart data
  const metricsComparison = [
    {
      metric: 'Cost',
      Legacy: 3,
      Native: 3,
      Translator: 1,
    },
    {
      metric: 'Tech Debt',
      Legacy: 1,
      Native: 5,
      Translator: 2,
    },
    {
      metric: 'Data Lineage',
      Legacy: 1,
      Native: 5,
      Translator: 1,
    },
    {
      metric: 'Consistency',
      Legacy: 1,
      Native: 5,
      Translator: 2,
    },
    {
      metric: 'Future Ready',
      Legacy: 1,
      Native: 5,
      Translator: 1,
    },
    {
      metric: 'Maintenance',
      Legacy: 1,
      Native: 4,
      Translator: 2,
    },
  ];

  const radarData = [
    { subject: 'Cost Efficiency', Native: 60, Translator: 80, fullMark: 100 },
    { subject: 'Data Quality', Native: 100, Translator: 40, fullMark: 100 },
    { subject: 'Future Ready', Native: 100, Translator: 20, fullMark: 100 },
    { subject: 'Maintenance', Native: 90, Translator: 40, fullMark: 100 },
    { subject: 'Consistency', Native: 100, Translator: 40, fullMark: 100 },
    { subject: 'Lineage', Native: 100, Translator: 30, fullMark: 100 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-b from-gray-50 to-white border-t-4 border-blue-500 shadow-xl"
    >
      <div className="container mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Comparison Dashboard</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bar Chart */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Metrics Comparison (Higher is Better)
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={metricsComparison}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="metric" />
                <YAxis domain={[0, 5]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="Native" fill="#0066CC" name="Native CDM (JPM)" />
                <Bar dataKey="Translator" fill="#F59E0B" name="Translator (Peers)" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Radar Chart */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Architecture Radar Comparison
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} />
                <Radar
                  name="Native CDM (JPM)"
                  dataKey="Native"
                  stroke="#0066CC"
                  fill="#0066CC"
                  fillOpacity={0.6}
                />
                <Radar
                  name="Translator (Peers)"
                  dataKey="Translator"
                  stroke="#F59E0B"
                  fill="#F59E0B"
                  fillOpacity={0.6}
                />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-300">
            <div className="text-green-800 font-bold text-lg mb-2">✅ Native CDM Wins</div>
            <div className="text-3xl font-bold text-green-900 mb-2">5/6</div>
            <div className="text-sm text-green-700">
              Superior in data quality, lineage, consistency, future readiness, and maintenance
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl border-2 border-yellow-300">
            <div className="text-yellow-800 font-bold text-lg mb-2">⚠️ Translation Layer</div>
            <div className="text-3xl font-bold text-yellow-900 mb-2">1/6</div>
            <div className="text-sm text-yellow-700">
              Lower upfront cost, but accumulating technical debt and ongoing maintenance burden
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-300">
            <div className="text-blue-800 font-bold text-lg mb-2">💡 Key Insight</div>
            <div className="text-sm text-blue-700 leading-relaxed">
              Native CDM requires higher upfront investment but pays down technical debt and
              provides long-term advantages in data quality, compliance, and future innovation
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ComparisonDashboard;
