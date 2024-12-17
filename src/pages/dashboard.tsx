import React from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseclient';
import { FaSignOutAlt, FaChartPie, FaUsers, FaCog } from 'react-icons/fa';
import './dashboard.css'; // Pastikan untuk mengimpor file CSS

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  // Fungsi Logout
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      alert('Gagal logout: ' + error.message);
    } else {
      alert('Logout berhasil!');
      navigate('/'); // Kembali ke halaman login
    }
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1 className="text-2xl font-bold text-purple-600">Mediverse</h1>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li className="sidebar-item">
              <FaChartPie className="sidebar-icon" />
              <span>Dashboard</span>
            </li>
            <li className="sidebar-item">
              <FaUsers className="sidebar-icon" />
              <span>Pengguna</span>
            </li>
            <li className="sidebar-item">
              <FaCog className="sidebar-icon" />
              <span>Pengaturan</span>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <header className="header">
          <h2 className="header-title">Dashboard</h2>
          <button onClick={handleLogout} className="logout-button">
            <FaSignOutAlt className="logout-icon" />
            Logout
          </button>
        </header>

        {/* Content */}
        <main className="content">
          <div className="stats-cards">
            {/* Card 1 */}
            <div className="card">
              <h3 className="card-title">Total Pengguna</h3>
              <p className="card-value">1,245</p>
            </div>

            {/* Card 2 */}
            <div className="card">
              <h3 className="card-title">Jumlah Pasien</h3>
              <p className="card-value">823</p>
            </div>

            {/* Card 3 */}
            <div className="card">
              <h3 className="card-title">Reservasi Hari Ini</h3>
              <p className="card-value">54</p>
            </div>
          </div>

          {/* Table Example */}
          <div className="table-container">
            <h3 className="table-title">Daftar Pengguna Terbaru</h3>
            <div className="table-wrapper">
              <table className="table">
                <thead>
                  <tr className="table-header">
                    <th className="table-cell">No</th>
                    <th className="table-cell">Nama</th>
                    <th className="table-cell">Email</th>
                    <th className="table-cell">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-row">
                    <td className="table-cell">1</td>
                    <td className="table-cell">John Doe</td>
                    <td className="table-cell">john.doe@example.com</td>
                    <td className="table-cell">Aktif</td>
                  </tr>
                  <tr className="table-row">
                    <td className="table-cell">2</td>
                    <td className="table-cell">Jane Smith</td>
                    <td className="table-cell">jane.smith@example.com</td>
                    <td className="table-cell">Tidak Aktif</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
