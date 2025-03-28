import Link from 'next/link';
import { useState } from 'react';

export default function Subscription() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  
  return (
    <div className="section">
      <h1 className="section-title">订阅管理</h1>
      
      <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="tab-container">
          <div className="tabs">
            <div className="tab active">当前订阅</div>
            <div className="tab">账单历史</div>
            <div className="tab">支付方式</div>
          </div>
          
          <div className="subscription-content">
            <div className="current-plan" style={{ 
              padding: '1.5rem', 
              backgroundColor: 'rgba(255, 107, 0, 0.1)', 
              borderRadius: '0.5rem',
              marginBottom: '2rem',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ 
                position: 'absolute', 
                top: '0', 
                right: '0', 
                backgroundColor: 'var(--primary-color)',
                color: 'var(--text-color)',
                padding: '0.25rem 1rem',
                fontSize: '0.75rem'
              }}>
                当前方案
              </div>
              
              <h3 style={{ marginBottom: '1rem' }}>高级版</h3>
              <p style={{ marginBottom: '1rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                适用于需要高级表单验证和支持的用户
              </p>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span>价格</span>
                <span>¥79.99/月</span>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span>下次计费日期</span>
                <span>2025年4月27日</span>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span>状态</span>
                <span style={{ color: 'var(--primary-color)' }}>活跃</span>
              </div>
            </div>
            
            <h3 style={{ marginBottom: '1.5rem' }}>更改订阅</h3>
            
            <div className="pricing-toggle" style={{ marginBottom: '2rem' }}>
              <span 
                className="toggle-label" 
                style={{ color: billingCycle === 'monthly' ? 'var(--primary-color)' : 'inherit' }}
              >
                月付
              </span>
              
              <label className="toggle-switch">
                <input 
                  type="checkbox" 
                  checked={billingCycle === 'annual'} 
                  onChange={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                />
                <span className="toggle-slider"></span>
              </label>
              
              <span 
                className="toggle-label" 
                style={{ color: billingCycle === 'annual' ? 'var(--primary-color)' : 'inherit' }}
              >
                年付 <span style={{ color: 'var(--primary-color)' }}>（省20%）</span>
              </span>
            </div>
            
            <div className="grid" style={{ marginBottom: '2rem' }}>
              <div className="pricing-card">
                <div className="pricing-header">
                  <h3 className="pricing-name">基础版</h3>
                  <div className="pricing-price">
                    {billingCycle === 'monthly' ? '¥29.99' : '¥287.90'}
                  </div>
                  <div className="pricing-period">
                    {billingCycle === 'monthly' ? '每月' : '每年'}
                  </div>
                </div>
                
                <div className="pricing-features">
                  <div className="pricing-feature">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    访问1个指南
                  </div>
                  <div className="pricing-feature">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    AI生成表单填写示例
                  </div>
                  <div className="pricing-feature">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    基本错误检查
                  </div>
                  <div className="pricing-feature">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    电子邮件支持
                  </div>
                </div>
                
                <button className="button button-secondary">降级至此方案</button>
              </div>
              
              <div className="pricing-card popular">
                <div className="popular-tag">最受欢迎</div>
                <div className="pricing-header">
                  <h3 className="pricing-name">高级版</h3>
                  <div className="pricing-price">
                    {billingCycle === 'monthly' ? '¥79.99' : '¥767.90'}
                  </div>
                  <div className="pricing-period">
                    {billingCycle === 'monthly' ? '每月' : '每年'}
                  </div>
                </div>
                
                <div className="pricing-features">
                  <div className="pricing-feature">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    每月访问5个指南
                  </div>
                  <div className="pricing-feature">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    AI逻辑验证
                  </div>
                  <div className="pricing-feature">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    每月1000次API调用
                  </div>
                  <div className="pricing-feature">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    常见错误预防
                  </div>
                  <div className="pricing-feature">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    优先支持
                  </div>
                </div>
                
                <button className="button button-primary" disabled>当前方案</button>
              </div>
              
              <div className="pricing-card">
                <div className="pricing-header">
                  <h3 className="pricing-name">企业版</h3>
                  <div className="pricing-price">定制</div>
                  <div className="pricing-period">定价</div>
                </div>
                
                <div className="pricing-features">
                  <div className="pricing-feature">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    无限表单访问
                  </div>
                  <div className="pricing-feature">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    详细逐步填写指导
                  </div>
                  <div className="pricing-feature">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    高级错误分析
                  </div>
                  <div className="pricing-feature">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    专属支持专家
                  </div>
                  <div className="pricing-feature">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    自定义API集成
                  </div>
                </div>
                
                <button className="button button-secondary">升级至此方案</button>
              </div>
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <button className="button button-secondary" style={{ color: '#ff4d4d', borderColor: '#ff4d4d' }}>
                取消订阅
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <p style={{ marginBottom: '1rem', color: 'rgba(255, 255, 255, 0.7)' }}>
          有问题？需要帮助？
        </p>
        <Link href="#" style={{ color: 'var(--primary-color)' }}>
          联系我们的支持团队
        </Link>
      </div>
    </div>
  );
}
