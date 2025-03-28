import Link from 'next/link';

export default function Profile() {
  return (
    <div className="section">
      <h1 className="section-title">个人资料</h1>
      
      <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="tab-container">
          <div className="tabs">
            <div className="tab active">个人信息</div>
            <div className="tab">安全设置</div>
            <div className="tab">通知偏好</div>
          </div>
          
          <div className="profile-content">
            <div className="profile-header" style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
              <div className="profile-avatar" style={{ 
                width: '100px', 
                height: '100px', 
                borderRadius: '50%', 
                backgroundColor: 'var(--card-background)', 
                border: '2px solid var(--primary-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                marginRight: '2rem'
              }}>
                用户
              </div>
              <div>
                <h2 style={{ marginBottom: '0.5rem' }}>用户名</h2>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>免费账户</p>
              </div>
            </div>
            
            <form>
              <div className="form-group">
                <label className="form-label">全名</label>
                <input type="text" className="form-input" placeholder="输入您的全名" />
              </div>
              
              <div className="form-group">
                <label className="form-label">电子邮件</label>
                <input type="email" className="form-input" placeholder="输入您的电子邮件" />
              </div>
              
              <div className="form-group">
                <label className="form-label">公司/组织</label>
                <input type="text" className="form-input" placeholder="输入您的公司或组织名称" />
              </div>
              
              <div className="form-group">
                <label className="form-label">职位</label>
                <input type="text" className="form-input" placeholder="输入您的职位" />
              </div>
              
              <div className="form-group">
                <label className="form-label">时区</label>
                <select className="form-input">
                  <option>(GMT+08:00) 北京，香港，新加坡</option>
                  <option>(GMT+00:00) 伦敦，都柏林</option>
                  <option>(GMT-05:00) 纽约，多伦多</option>
                  <option>(GMT-08:00) 洛杉矶，温哥华</option>
                </select>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>
                <button type="button" className="button button-secondary" style={{ marginRight: '1rem' }}>取消</button>
                <button type="submit" className="button button-primary">保存更改</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Link href="/subscription" className="button button-secondary">
          管理订阅
        </Link>
      </div>
    </div>
  );
}
