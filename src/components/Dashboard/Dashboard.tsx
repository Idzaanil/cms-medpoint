// src/components/Dashboard/Dashboard.tsx
import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient'; // Import client Supabase

// Menentukan tipe data yang diterima dari Supabase
interface Item {
  id: number;
  name: string;
}

const Dashboard: React.FC = () => {
  const [data, setData] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: fetchedData, error } = await supabase.from('your_table_name').select('*');
        if (error) throw error;
        setData(fetchedData as Item[]); // Menyimpan data yang diterima
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li> {/* Pastikan data sesuai */}
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
