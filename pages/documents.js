import withAuth from '../components/withAuth';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import FuturisticButton from '../components/FuturisticButton';
import TechCard from '../components/TechCard';
import { useRouter } from 'next/router';

const Documents = () => {
  const router = useRouter();
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showNewDocForm, setShowNewDocForm] = useState(false);
  const [newDocTitle, setNewDocTitle] = useState('');
  const [newDocType, setNewDocType] = useState('custom');
  const [newDocContent, setNewDocContent] = useState('');

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const res = await fetch('/api/documents');
        const data = await res.json();
        
        if (data.success) {
          setDocuments(data.documents);
        } else {
          setError('Failed to load documents');
        }
      } catch (err) {
        setError('Error loading documents');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  const handleCreateDocument = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await fetch('/api/documents', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: newDocTitle,
          content: newDocContent,
          templateType: newDocType
        }),
      });
      
      const data = await res.json();
      
      if (data.success) {
        // Add new document to list
        setDocuments([data.document, ...documents]);
        // Reset form
        setNewDocTitle('');
        setNewDocType('custom');
        setNewDocContent('');
        setShowNewDocForm(false);
      } else {
        setError('Failed to create document');
      }
    } catch (err) {
      setError('Error creating document');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteDocument = async (id) => {
    if (!confirm('确定要删除此文档吗？')) {
      return;
    }
    
    try {
      const res = await fetch(`/api/documents/${id}`, {
        method: 'DELETE',
      });
      
      const data = await res.json();
      
      if (data.success) {
        // Remove document from list
        setDocuments(documents.filter(doc => doc._id !== id));
      } else {
        setError('Failed to delete document');
      }
    } catch (err) {
      setError('Error deleting document');
      console.error(err);
    }
  };

  const handleViewDocument = (id) => {
    router.push(`/documents/${id}`);
  };

  const getTemplateTypeLabel = (type) => {
    const labels = {
      tax: '税务表格',
      employment: '就业表格',
      rental: '租赁表格',
      custom: '自定义表格'
    };
    
    return labels[type] || '自定义表格';
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">文档管理</h1>
        
        {error && (
          <div className="bg-red-900 text-red-300 p-4 rounded-md mb-6 max-w-4xl mx-auto">
            {error}
          </div>
        )}
        
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">我的文档</h2>
            <FuturisticButton onClick={() => setShowNewDocForm(!showNewDocForm)}>
              {showNewDocForm ? '取消' : '创建新文档'}
            </FuturisticButton>
          </div>
          
          {showNewDocForm && (
            <TechCard>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-white">创建新文档</h3>
                <form onSubmit={handleCreateDocument}>
                  <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-400 mb-1">
                      标题
                    </label>
                    <input
                      type="text"
                      id="title"
                      value={newDocTitle}
                      onChange={(e) => setNewDocTitle(e.target.value)}
                      className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="templateType" className="block text-gray-400 mb-1">
                      模板类型
                    </label>
                    <select
                      id="templateType"
                      value={newDocType}
                      onChange={(e) => setNewDocType(e.target.value)}
                      className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="custom">自定义表格</option>
                      <option value="tax">税务表格</option>
                      <option value="employment">就业表格</option>
                      <option value="rental">租赁表格</option>
                    </select>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="content" className="block text-gray-400 mb-1">
                      内容
                    </label>
                    <textarea
                      id="content"
                      value={newDocContent}
                      onChange={(e) => setNewDocContent(e.target.value)}
                      rows="6"
                      className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="flex justify-end">
                    <FuturisticButton type="submit" disabled={loading}>
                      {loading ? '创建中...' : '创建文档'}
                    </FuturisticButton>
                  </div>
                </form>
              </div>
            </TechCard>
          )}
          
          {loading && !showNewDocForm ? (
            <div className="flex justify-center py-12">
              <div className="loading-spinner"></div>
            </div>
          ) : documents.length === 0 ? (
            <TechCard>
              <div className="p-12 text-center">
                <p className="text-gray-400 mb-4">您还没有创建任何文档</p>
                <FuturisticButton onClick={() => setShowNewDocForm(true)}>
                  创建第一个文档
                </FuturisticButton>
              </div>
            </TechCard>
          ) : (
            <div className="grid gap-4">
              {documents.map((doc) => (
                <TechCard key={doc._id}>
                  <div className="p-4 flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-bold text-white">{doc.title}</h3>
                      <p className="text-gray-400 text-sm">
                        {getTemplateTypeLabel(doc.templateType)} • 
                        更新于 {new Date(doc.updatedAt).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleViewDocument(doc._id)}
                        className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition"
                      >
                        查看
                      </button>
                      <button
                        onClick={() => handleDeleteDocument(doc._id)}
                        className="px-3 py-1 bg-red-900 hover:bg-red-800 text-white rounded-md transition"
                      >
                        删除
                      </button>
                    </div>
                  </div>
                </TechCard>
              ))}
            </div>
          )}
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-white">表格模板</h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            <TechCard>
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-2">税务表格</h3>
                <p className="text-gray-400 mb-4">标准税务申报和财务文档模板</p>
                <button
                  onClick={() => {
                    setNewDocTitle('税务申报表');
                    setNewDocType('tax');
                    setNewDocContent('这是一个税务申报表模板。请填写您的个人信息和财务数据。');
                    setShowNewDocForm(true);
                  }}
                  className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition w-full"
                >
                  使用模板
                </button>
              </div>
            </TechCard>
            
            <TechCard>
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-2">就业表格</h3>
                <p className="text-gray-400 mb-4">雇佣合同和人力资源文档模板</p>
                <button
                  onClick={() => {
                    setNewDocTitle('雇佣合同');
                    setNewDocType('employment');
                    setNewDocContent('这是一个雇佣合同模板。请填写雇主和雇员信息以及工作条款。');
                    setShowNewDocForm(true);
                  }}
                  className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition w-full"
                >
                  使用模板
                </button>
              </div>
            </TechCard>
            
            <TechCard>
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-2">租赁表格</h3>
                <p className="text-gray-400 mb-4">房屋租赁和物业管理文档模板</p>
                <button
                  onClick={() => {
                    setNewDocTitle('租赁协议');
                    setNewDocType('rental');
                    setNewDocContent('这是一个租赁协议模板。请填写房东和租户信息以及租赁条款。');
                    setShowNewDocForm(true);
                  }}
                  className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition w-full"
                >
                  使用模板
                </button>
              </div>
            </TechCard>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withAuth(Documents);
