import withAuth from '../components/withAuth';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import FuturisticButton from '../components/FuturisticButton';
import TechCard from '../components/TechCard';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [updateSuccess, setUpdateSuccess] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch('/api/users/profile');
        const data = await res.json();
        
        if (data.success) {
          setUser(data.user);
          setName(data.user.name);
        } else {
          setError('Failed to load profile');
        }
      } catch (err) {
        setError('Error loading profile');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setUpdateSuccess(false);
    
    try {
      const res = await fetch('/api/users/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });
      
      const data = await res.json();
      
      if (data.success) {
        setUser(data.user);
        setUpdateSuccess(true);
      } else {
        setError('Failed to update profile');
      }
    } catch (err) {
      setError('Error updating profile');
      console.error(err);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">个人资料</h1>
        
        {loading ? (
          <div className="flex justify-center">
            <div className="loading-spinner"></div>
          </div>
        ) : error ? (
          <div className="text-red-500 text-center">{error}</div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <TechCard>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-white">账户信息</h2>
                
                <div className="mb-6">
                  <p className="text-gray-400 mb-1">电子邮件</p>
                  <p className="text-white text-lg">{user.email}</p>
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-400 mb-1">订阅计划</p>
                  <p className="text-white text-lg capitalize">{user.subscription === 'free' ? '免费版' : user.subscription}</p>
                </div>
                
                {user.subscriptionEndDate && (
                  <div className="mb-6">
                    <p className="text-gray-400 mb-1">订阅到期日</p>
                    <p className="text-white text-lg">
                      {new Date(user.subscriptionEndDate).toLocaleDateString()}
                    </p>
                  </div>
                )}
                
                <div className="mb-6">
                  <p className="text-gray-400 mb-1">注册日期</p>
                  <p className="text-white text-lg">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </p>
                </div>
                
                <form onSubmit={handleUpdateProfile}>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-400 mb-1">
                      姓名
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                      required
                    />
                  </div>
                  
                  {updateSuccess && (
                    <div className="mb-4 text-green-500">个人资料已更新</div>
                  )}
                  
                  <div className="flex justify-end">
                    <FuturisticButton type="submit">
                      更新资料
                    </FuturisticButton>
                  </div>
                </form>
              </div>
            </TechCard>
            
            <div className="mt-8 flex justify-center">
              <a href="/subscription">
                <FuturisticButton>
                  管理订阅
                </FuturisticButton>
              </a>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default withAuth(Profile);
