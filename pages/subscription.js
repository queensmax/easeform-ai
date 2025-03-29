import withAuth from '../components/withAuth';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import FuturisticButton from '../components/FuturisticButton';
import TechCard from '../components/TechCard';
import { useRouter } from 'next/router';

const Subscription = () => {
  const router = useRouter();
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user profile
        const userRes = await fetch('/api/users/profile');
        const userData = await userRes.json();
        
        if (userData.success) {
          setUser(userData.user);
        }
        
        // Fetch subscriptions
        const subRes = await fetch('/api/subscriptions');
        const subData = await subRes.json();
        
        if (subData.success) {
          setSubscriptions(subData.subscriptions);
        } else {
          setError('Failed to load subscriptions');
        }
      } catch (err) {
        setError('Error loading data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSubscribe = async (plan, billingCycle) => {
    try {
      // Create subscription
      const subRes = await fetch('/api/subscriptions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          plan,
          billingCycle,
          paymentMethod: 'credit_card', // Default for demo
        }),
      });
      
      const subData = await subRes.json();
      
      if (subData.success) {
        // Redirect to payment page
        router.push({
          pathname: '/payment',
          query: { 
            subscriptionId: subData.subscription._id,
            plan,
            billingCycle
          }
        });
      } else {
        setError('Failed to create subscription');
      }
    } catch (err) {
      setError('Error creating subscription');
      console.error(err);
    }
  };

  const getPlanPrice = (plan, billingCycle) => {
    const prices = {
      basic: { monthly: 9.99, annual: 99.99 },
      premium: { monthly: 19.99, annual: 199.99 },
      enterprise: { monthly: 49.99, annual: 499.99 }
    };
    
    return prices[plan][billingCycle];
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">订阅管理</h1>
        
        {loading ? (
          <div className="flex justify-center">
            <div className="loading-spinner"></div>
          </div>
        ) : error ? (
          <div className="text-red-500 text-center">{error}</div>
        ) : (
          <div>
            {/* Current Subscription */}
            {user && (
              <div className="max-w-3xl mx-auto mb-12">
                <TechCard>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4 text-white">当前订阅</h2>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-white text-lg capitalize">
                          {user.subscription === 'free' ? '免费版' : user.subscription}
                        </p>
                        {user.subscriptionEndDate && (
                          <p className="text-gray-400">
                            到期日期: {new Date(user.subscriptionEndDate).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                      {user.subscription !== 'free' && (
                        <FuturisticButton>
                          取消订阅
                        </FuturisticButton>
                      )}
                    </div>
                  </div>
                </TechCard>
              </div>
            )}
            
            {/* Subscription History */}
            {subscriptions.length > 0 && (
              <div className="max-w-3xl mx-auto mb-12">
                <TechCard>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4 text-white">订阅历史</h2>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-700">
                            <th className="text-left py-2 text-gray-400">计划</th>
                            <th className="text-left py-2 text-gray-400">开始日期</th>
                            <th className="text-left py-2 text-gray-400">结束日期</th>
                            <th className="text-left py-2 text-gray-400">状态</th>
                          </tr>
                        </thead>
                        <tbody>
                          {subscriptions.map((sub) => (
                            <tr key={sub._id} className="border-b border-gray-800">
                              <td className="py-3 text-white capitalize">{sub.plan}</td>
                              <td className="py-3 text-white">
                                {new Date(sub.startDate).toLocaleDateString()}
                              </td>
                              <td className="py-3 text-white">
                                {new Date(sub.endDate).toLocaleDateString()}
                              </td>
                              <td className="py-3">
                                <span className={`px-2 py-1 rounded-full text-xs ${
                                  sub.status === 'active' ? 'bg-green-900 text-green-300' : 
                                  sub.status === 'canceled' ? 'bg-yellow-900 text-yellow-300' : 
                                  'bg-red-900 text-red-300'
                                }`}>
                                  {sub.status === 'active' ? '活跃' : 
                                   sub.status === 'canceled' ? '已取消' : '已过期'}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </TechCard>
              </div>
            )}
            
            {/* Available Plans */}
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center text-white">可用订阅计划</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* Basic Plan */}
                <TechCard>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">基础版</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-white">${getPlanPrice('basic', 'monthly')}</span>
                      <span className="text-gray-400">/月</span>
                    </div>
                    <p className="text-gray-300 mb-4">适合个人用户的基础功能</p>
                    <ul className="mb-6 space-y-2">
                      <li className="text-gray-400">✓ 每月最多10个表单</li>
                      <li className="text-gray-400">✓ 基础模板库</li>
                      <li className="text-gray-400">✓ 标准支持</li>
                    </ul>
                    <div className="space-y-3">
                      <FuturisticButton 
                        onClick={() => handleSubscribe('basic', 'monthly')}
                        className="w-full"
                      >
                        月付订阅
                      </FuturisticButton>
                      <FuturisticButton 
                        onClick={() => handleSubscribe('basic', 'annual')}
                        className="w-full"
                      >
                        年付订阅 (省17%)
                      </FuturisticButton>
                    </div>
                  </div>
                </TechCard>
                
                {/* Premium Plan */}
                <TechCard>
                  <div className="p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 transform rotate-45 translate-x-2 -translate-y-1">
                      推荐
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">高级版</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-white">${getPlanPrice('premium', 'monthly')}</span>
                      <span className="text-gray-400">/月</span>
                    </div>
                    <p className="text-gray-300 mb-4">适合专业用户的高级功能</p>
                    <ul className="mb-6 space-y-2">
                      <li className="text-gray-400">✓ 无限表单</li>
                      <li className="text-gray-400">✓ 高级模板库</li>
                      <li className="text-gray-400">✓ 优先支持</li>
                      <li className="text-gray-400">✓ 高级分析</li>
                    </ul>
                    <div className="space-y-3">
                      <FuturisticButton 
                        onClick={() => handleSubscribe('premium', 'monthly')}
                        className="w-full"
                      >
                        月付订阅
                      </FuturisticButton>
                      <FuturisticButton 
                        onClick={() => handleSubscribe('premium', 'annual')}
                        className="w-full"
                      >
                        年付订阅 (省17%)
                      </FuturisticButton>
                    </div>
                  </div>
                </TechCard>
                
                {/* Enterprise Plan */}
                <TechCard>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">企业版</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-white">${getPlanPrice('enterprise', 'monthly')}</span>
                      <span className="text-gray-400">/月</span>
                    </div>
                    <p className="text-gray-300 mb-4">适合团队和企业的全功能套件</p>
                    <ul className="mb-6 space-y-2">
                      <li className="text-gray-400">✓ 无限表单和用户</li>
                      <li className="text-gray-400">✓ 完整模板库</li>
                      <li className="text-gray-400">✓ 24/7专属支持</li>
                      <li className="text-gray-400">✓ 高级分析和报告</li>
                      <li className="text-gray-400">✓ VIP人工咨询</li>
                    </ul>
                    <div className="space-y-3">
                      <FuturisticButton 
                        onClick={() => handleSubscribe('enterprise', 'monthly')}
                        className="w-full"
                      >
                        月付订阅
                      </FuturisticButton>
                      <FuturisticButton 
                        onClick={() => handleSubscribe('enterprise', 'annual')}
                        className="w-full"
                      >
                        年付订阅 (省17%)
                      </FuturisticButton>
                    </div>
                  </div>
                </TechCard>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default withAuth(Subscription);
