import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { Card } from '@/components/ui/Card';
import { sectorAllocations } from '@/data/dashboardData';

export const AllocationChart: React.FC = () => {
  return (
    <Card className="p-6">
      <h2 className="font-headline-md text-primary-text mb-4">Distribusi Pendanaan</h2>
      <p className="text-sm text-secondary-text mb-4">
        Alokasi simulasi berdasarkan sektor UMKM.
      </p>
      <div className="flex justify-center">
        <PieChart width={300} height={300}>
          <Pie
            data={sectorAllocations}
            dataKey="percentage"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={110}
            label={({ name, percent }) => `${name} ${((percent ?? 0) * 100).toFixed(0)}%`}
          >
            {sectorAllocations.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${value ?? 0}%`} />
          <Legend />
        </PieChart>
      </div>
      <div className="text-center mt-4 text-primary-text font-numeric-xl">
        Rp{sectorAllocations.reduce((sum, s) => sum + s.amount, 0).toLocaleString('id-ID')}
      </div>
    </Card>
  );
};
