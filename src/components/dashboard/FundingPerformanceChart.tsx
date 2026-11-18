import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { performanceFilters, performanceData } from '@/data/dashboardData';

export const FundingPerformanceChart: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState(performanceFilters[0].id);
  const data = performanceData[activeFilter] || [];

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-headline-md text-primary-text">Ringkasan Pendanaan</h2>
        <div className="flex space-x-2">
          {performanceFilters.map((f) => (
            <Button
              key={f.id}
              variant={activeFilter === f.id ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter(f.id)}
            >
              {f.label}
            </Button>
          ))}
        </div>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorAlloc" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1677D2" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#1677D2" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="period" />
          <YAxis tickFormatter={(value) => `Rp${(value / 1000000).toFixed(0)}jt`} />
          <Tooltip formatter={(value) => `Rp${Number(value ?? 0).toLocaleString('id-ID')}`} />
          <Area
            type="monotone"
            dataKey="alokasi"
            stroke="#1677D2"
            fillOpacity={1}
            fill="url(#colorAlloc)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};
