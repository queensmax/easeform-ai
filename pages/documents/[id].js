import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import FuturisticButton from '../../components/FuturisticButton';
import TechCard from '../../components/TechCard';
import withAuth from '../../components/withAuth';

const DocumentDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  
  const [document, setDocument] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [templateType, setTemplateType] = useState('');
  const [saveLoading, setSaveLoading] = useState(false);

  useEffect(() => {
    const fetchDocument = async () => {
      if (!id) return;
      
      try {
        const res = await fetch(`/api/documents/${id}`);
        const data = await res.json();
        
        if (data.success) {
          setDocument(data.document);
          setTitle(data.document.title);
          setContent(data.document.content);
          setTemplateType(data.document.templateType);
        } else {
          setError('Failed to load document');
        }
      } catch (err) {
        setError('Error loading document');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDocument();
  }, [id]);

  const handleSave = async () => {
    setSaveLoading(true);
    
    try {
      const res = await fetch(`/api/documents/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          content,
          templateType
        }),
      });
      
      const data = await res.json();
      
      if (data.success) {
        setDocument(data.document);
        setEditing(false);
      } else {
        setError('Failed to update document');
      }
    } catch (err) {
      setError('Error updating document');
      console.error(err);
    } finally {
      setSaveLoading(false);
    }
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
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="loading-spinner"></div>
          </div>
        ) : error ? (
          <div className="bg-red-900 text-red-300 p-4 rounded-md mb-6 max-w-4xl mx-auto">
            {error}
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={() => router.push('/documents')}
                className="text-gray-400 hover:text-white flex items-center"
              >
                <span className="mr-1">←</span> 返回文档列表
              </button>
              
              {!editing && (
                <FuturisticButton onClick={() => setEditing(true)}>
                  编辑文档
                </FuturisticButton>
              )}
            </div>
            
            <TechCard>
              <div className="p-6">
                {editing ? (
                  <div>
                    <div className="mb-4">
                      <label htmlFor="title" className="block text-gray-400 mb-1">
                        标题
                      </label>
                      <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
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
                        value={templateType}
                        onChange={(e) => setTemplateType(e.target.value)}
                        className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                      >
                        <option value="custom">自定义表格</option>
                        <option value="tax">税务表格</option>
                        <option value="employment">就业表格</option>
                        <option value="rental">租赁表格</option>
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="content" className="block text-gray-400 mb-1">
                        内容
                      </label>
                      <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        rows="12"
                        className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                      ></textarea>
                    </div>
                    
                    <div className="flex justify-end space-x-3">
                      <button
                        onClick={() => {
                          setTitle(document.title);
                          setContent(document.content);
                          setTemplateType(document.templateType);
                          setEditing(false);
                        }}
                        className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition"
                      >
                        取消
                      </button>
                      <FuturisticButton onClick={handleSave} disabled={saveLoading}>
                        {saveLoading ? '保存中...' : '保存更改'}
                      </FuturisticButton>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h1 className="text-3xl font-bold mb-2 text-white">{document.title}</h1>
                    <div className="flex items-center mb-6">
                      <span className="bg-gray-700 text-white text-sm px-2 py-1 rounded-md">
                        {getTemplateTypeLabel(document.templateType)}
                      </span>
                      <span className="text-gray-400 text-sm ml-4">
                        更新于 {new Date(document.updatedAt).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="bg-gray-800 rounded-md p-4 whitespace-pre-wrap text-white">
                      {document.content}
                    </div>
                  </div>
                )}
              </div>
            </TechCard>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default withAuth(DocumentDetail);
