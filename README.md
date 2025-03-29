# EaseForm AI 网站后端功能实现指南

本文档提供了如何设置和运行 EaseForm AI 网站后端功能的详细说明。

## 项目结构

```
easeform-ai/
├── components/        # 前端组件
│   ├── Layout.js      # 网站布局组件
│   ├── withAuth.js    # 身份验证高阶组件
│   └── ...
├── lib/               # 工具函数
│   ├── auth.js        # 身份验证工具
│   └── dbConnect.js   # 数据库连接工具
├── models/            # 数据模型
│   ├── User.js        # 用户模型
│   ├── Document.js    # 文档模型
│   ├── Subscription.js # 订阅模型
│   └── Payment.js     # 支付模型
├── pages/             # 页面组件
│   ├── api/           # API 路由
│   │   ├── auth/      # 身份验证 API
│   │   ├── documents/ # 文档 API
│   │   ├── payments/  # 支付 API
│   │   ├── subscriptions/ # 订阅 API
│   │   └── users/     # 用户 API
│   ├── documents/     # 文档页面
│   ├── profile.js     # 个人资料页面
│   ├── payment.js     # 支付页面
│   ├── subscription.js # 订阅页面
│   └── ...
├── .env.example       # 环境变量示例
└── package.json       # 项目依赖
```

## 设置步骤

1. **MongoDB Atlas 设置**

   按照之前提供的步骤创建 MongoDB Atlas 账户和数据库。获取连接字符串后，创建 `.env.local` 文件并填入以下内容：

   ```
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority
   JWT_SECRET=your_jwt_secret_key_here
   NODE_ENV=development
   ```

   请将 `<username>`、`<password>`、`<cluster>` 和 `<database>` 替换为您的 MongoDB Atlas 信息。
   为 `JWT_SECRET` 生成一个随机字符串作为密钥。

2. **安装依赖**

   ```bash
   npm install bcryptjs jsonwebtoken cookie mongoose uuid
   ```

3. **运行开发服务器**

   ```bash
   npm run dev
   ```

## 功能说明

### 用户认证

- 注册: `/api/auth/register` - 创建新用户并返回 JWT 令牌
- 登录: `/api/auth/login` - 验证用户凭据并返回 JWT 令牌

### 个人资料管理

- 获取资料: `/api/users/profile` (GET) - 获取当前用户资料
- 更新资料: `/api/users/profile` (PUT) - 更新用户资料

### 订阅管理

- 获取订阅: `/api/subscriptions` (GET) - 获取用户订阅列表
- 创建订阅: `/api/subscriptions` (POST) - 创建新订阅

### 支付处理

- 处理支付: `/api/payments/process` (POST) - 处理订阅支付

### 文档管理

- 获取文档列表: `/api/documents` (GET) - 获取用户文档列表
- 创建文档: `/api/documents` (POST) - 创建新文档
- 获取单个文档: `/api/documents/[id]` (GET) - 获取特定文档
- 更新文档: `/api/documents/[id]` (PUT) - 更新文档
- 删除文档: `/api/documents/[id]` (DELETE) - 删除文档

## 用户流程

1. 用户注册/登录
2. 进入个人资料页面
3. 选择订阅计划
4. 完成支付
5. 管理订阅
6. 创建和管理文档

## 安全说明

- 所有受保护的路由都使用 `withAuth` 高阶组件进行保护
- 密码使用 bcrypt 进行加密
- JWT 令牌用于身份验证
- API 路由使用中间件验证用户身份

## 注意事项

- 当前实现是一个演示版本，实际生产环境中应添加更多安全措施
- 支付处理是模拟的，实际应用中应集成真实的支付网关
- 数据库连接字符串和 JWT 密钥应妥善保管，不要提交到版本控制系统
