import Link from 'next/link';
import { useState } from 'react';

export default function Payment() {
  const [paymentMethod, setPaymentMethod] = useState('credit');
  
  return (
    <div className="section">
      <h1 className="section-title">支付</h1>
      
      <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="tab-container">
          <div className="tabs">
            <div 
              className={`tab ${paymentMethod === 'credit' ? 'active' : ''}`}
              onClick={() => setPaymentMethod('credit')}
            >
              信用卡
            </div>
            <div 
              className={`tab ${paymentMethod === 'paypal' ? 'active' : ''}`}
              onClick={() => setPaymentMethod('paypal')}
            >
              PayPal
            </div>
            <div 
              className={`tab ${paymentMethod === 'alipay' ? 'active' : ''}`}
              onClick={() => setPaymentMethod('alipay')}
            >
              支付宝
            </div>
          </div>
          
          <div className="payment-content">
            <div className="payment-summary" style={{ marginBottom: '2rem', padding: '1rem', backgroundColor: 'rgba(255, 107, 0, 0.1)', borderRadius: '0.5rem' }}>
              <h3 style={{ marginBottom: '1rem' }}>订阅摘要</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span>套餐</span>
                <span>高级版</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span>周期</span>
                <span>月付</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                <span>总计</span>
                <span>¥79.99/月</span>
              </div>
            </div>
            
            {paymentMethod === 'credit' && (
              <form>
                <div className="form-group">
                  <label className="form-label">持卡人姓名</label>
                  <input type="text" className="form-input" placeholder="输入持卡人姓名" />
                </div>
                
                <div className="form-group">
                  <label className="form-label">卡号</label>
                  <input type="text" className="form-input" placeholder="输入卡号" />
                </div>
                
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div className="form-group" style={{ flex: 1 }}>
                    <label className="form-label">有效期</label>
                    <input type="text" className="form-input" placeholder="MM/YY" />
                  </div>
                  
                  <div className="form-group" style={{ flex: 1 }}>
                    <label className="form-label">安全码</label>
                    <input type="text" className="form-input" placeholder="CVV" />
                  </div>
                </div>
                
                <div className="form-group">
                  <label className="form-label">账单地址</label>
                  <input type="text" className="form-input" placeholder="输入账单地址" />
                </div>
                
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div className="form-group" style={{ flex: 1 }}>
                    <label className="form-label">城市</label>
                    <input type="text" className="form-input" placeholder="输入城市" />
                  </div>
                  
                  <div className="form-group" style={{ flex: 1 }}>
                    <label className="form-label">邮政编码</label>
                    <input type="text" className="form-input" placeholder="输入邮政编码" />
                  </div>
                </div>
                
                <div className="form-group">
                  <label className="form-label">国家/地区</label>
                  <select className="form-input">
                    <option>中国</option>
                    <option>美国</option>
                    <option>加拿大</option>
                    <option>英国</option>
                    <option>澳大利亚</option>
                  </select>
                </div>
              </form>
            )}
            
            {paymentMethod === 'paypal' && (
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <p style={{ marginBottom: '2rem' }}>点击下方按钮将跳转至PayPal进行支付</p>
                <button className="button button-primary">使用PayPal支付</button>
              </div>
            )}
            
            {paymentMethod === 'alipay' && (
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <p style={{ marginBottom: '2rem' }}>扫描下方二维码使用支付宝完成支付</p>
                <div style={{ 
                  width: '200px', 
                  height: '200px', 
                  margin: '0 auto', 
                  backgroundColor: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#000',
                  fontWeight: 'bold'
                }}>
                  支付宝二维码
                </div>
              </div>
            )}
            
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>
              <Link href="/subscription" className="button button-secondary" style={{ marginRight: '1rem' }}>
                取消
              </Link>
              <button type="submit" className="button button-primary">确认支付</button>
            </div>
          </div>
        </div>
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <p style={{ marginBottom: '1rem', color: 'rgba(255, 255, 255, 0.7)' }}>
          所有支付信息均通过安全加密处理。我们不会存储您的完整信用卡信息。
        </p>
        <Link href="/privacy" style={{ color: 'var(--primary-color)' }}>
          查看我们的隐私政策
        </Link>
      </div>
    </div>
  );
}
