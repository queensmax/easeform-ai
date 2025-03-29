import withAuth from '../components/withAuth';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import FuturisticButton from '../components/FuturisticButton';
import TechCard from '../components/TechCard';
import { useRouter } from 'next/router';

const Payment = () => {
  const router = useRouter();
  const { subscriptionId, plan, billingCycle } = router.query;
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('credit_card');
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCVC, setCardCVC] = useState('');

  const getPlanPrice = (plan, billingCycle) => {
    const prices = {
      basic: { monthly: 9.99, annual: 99.99 },
      premium: { monthly: 19.99, annual: 199.99 },
      enterprise: { monthly: 49.99, annual: 499.99 }
    };
    
    return prices[plan]?.[billingCycle] || 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Basic validation
    if (!cardNumber || !cardName || !cardExpiry || !cardCVC) {
      setError('请填写所有支付信息');
      setLoading(false);
      return;
    }
    
    try {
      // Process payment
      const res = await fetch('/api/payments/process', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subscriptionId,
          amount: getPlanPrice(plan, billingCycle),
          paymentMethod,
          currency: 'USD'
        }),
      });
      
      const data = await res.json();
      
      if (data.success) {
        setSuccess(true);
        // Redirect to profile after 2 seconds
        setTimeout(() => {
          router.push('/profile');
        }, 2000);
      } else {
        setError('支付处理失败');
      }
    } catch (err) {
      setError('支付过程中发生错误');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // If no subscription ID is provided, redirect to subscription page
  useEffect(() => {
    if (!subscriptionId && router.isReady) {
      router.replace('/subscription');
    }
  }, [subscriptionId, router]);

  if (!subscriptionId) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="flex justify-center">
            <div className="loading-spinner"></div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">支付</h1>
        
        <div className="max-w-3xl mx-auto">
          <TechCard>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-6 text-white">订单详情</h2>
              
              <div className="flex justify-between mb-4 pb-4 border-b border-gray-700">
                <div>
                  <p className="text-white text-lg capitalize">
                    {plan === 'basic' ? '基础版' : 
                     plan === 'premium' ? '高级版' : '企业版'}
                  </p>
                  <p className="text-gray-400">
                    {billingCycle === 'monthly' ? '月付' : '年付'}
                  </p>
                </div>
                <p className="text-white text-lg">
                  ${getPlanPrice(plan, billingCycle)}
                </p>
              </div>
              
              <div className="flex justify-between mb-6">
                <p className="text-white text-lg font-bold">总计</p>
                <p className="text-white text-lg font-bold">
                  ${getPlanPrice(plan, billingCycle)}
                </p>
              </div>
              
              {success ? (
                <div className="bg-green-900 text-green-300 p-4 rounded-md mb-6">
                  <p className="font-bold">支付成功！</p>
                  <p>您的订阅已激活。正在跳转到个人资料页面...</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="text-xl font-bold mb-4 text-white">支付方式</h3>
                  
                  <div className="mb-6">
                    <div className="flex space-x-4 mb-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="credit_card"
                          checked={paymentMethod === 'credit_card'}
                          onChange={() => setPaymentMethod('credit_card')}
                          className="mr-2"
                        />
                        <span className="text-white">信用卡</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="paypal"
                          checked={paymentMethod === 'paypal'}
                          onChange={() => setPaymentMethod('paypal')}
                          className="mr-2"
                        />
                        <span className="text-white">PayPal</span>
                      </label>
                    </div>
                    
                    {paymentMethod === 'credit_card' && (
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="cardNumber" className="block text-gray-400 mb-1">
                            卡号
                          </label>
                          <input
                            type="text"
                            id="cardNumber"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            placeholder="1234 5678 9012 3456"
                            className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="cardName" className="block text-gray-400 mb-1">
                            持卡人姓名
                          </label>
                          <input
                            type="text"
                            id="cardName"
                            value={cardName}
                            onChange={(e) => setCardName(e.target.value)}
                            placeholder="张三"
                            className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                          />
                        </div>
                        
                        <div className="flex space-x-4">
                          <div className="flex-1">
                            <label htmlFor="cardExpiry" className="block text-gray-400 mb-1">
                              有效期
                            </label>
                            <input
                              type="text"
                              id="cardExpiry"
                              value={cardExpiry}
                              onChange={(e) => setCardExpiry(e.target.value)}
                              placeholder="MM/YY"
                              className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                          </div>
                          
                          <div className="w-1/3">
                            <label htmlFor="cardCVC" className="block text-gray-400 mb-1">
                              CVC
                            </label>
                            <input
                              type="text"
                              id="cardCVC"
                              value={cardCVC}
                              onChange={(e) => setCardCVC(e.target.value)}
                              placeholder="123"
                              className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {paymentMethod === 'paypal' && (
                      <div className="bg-gray-800 border border-gray-700 rounded-md p-4">
                        <p className="text-white mb-2">您将被重定向到PayPal完成支付。</p>
                      </div>
                    )}
                  </div>
                  
                  {error && (
                    <div className="bg-red-900 text-red-300 p-4 rounded-md mb-6">
                      {error}
                    </div>
                  )}
                  
                  <div className="flex justify-end">
                    <FuturisticButton type="submit" disabled={loading}>
                      {loading ? '处理中...' : '完成支付'}
                    </FuturisticButton>
                  </div>
                </form>
              )}
            </div>
          </TechCard>
        </div>
      </div>
    </Layout>
  );
};

export default withAuth(Payment);
