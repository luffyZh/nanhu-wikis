import React, { useState } from 'react';
import { 
  Search, Bell, User, LayoutDashboard, Library, Sparkles, 
  BarChart2, Settings, Shield, ChevronRight, ChevronDown,
  FileText, Box, FileSpreadsheet, Video, Download, Eye, 
  Clock, Star, Folder, FilePlus2, Image as ImageIcon, 
  PlayCircle, Camera, Layers, Film, AlertCircle, 
  CalendarCheck, Send, CheckCircle2, Users, FolderKanban
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const App = () => {
  // 系统级状态
  const [activeSidebar, setActiveSidebar] = useState('library');
  
  // 素材库专属状态
  const [expandedFolders, setExpandedFolders] = useState(['02']);
  const [activeProductTab, setActiveProductTab] = useState('marketing');

  // --- 模拟数据区 ---
  const statsData = [
    { name: '1月', 素材量: 120, AI调用: 40 }, { name: '2月', 素材量: 180, AI调用: 90 },
    { name: '3月', 素材量: 250, AI调用: 150 }, { name: '4月', 素材量: 310, AI调用: 210 },
    { name: '5月', 素材量: 450, AI调用: 380 }, { name: '6月', 素材量: 580, AI调用: 490 },
  ];

  const marketingData = {
    visualAssets: [
      { name: '【公开】【2026-09】御界_无背景高清_正面.png', author: '肖振国', icon: ImageIcon, bg: 'bg-gray-100' },
      { name: '【公开】【2026-09】御界_3D渲染图_科技蓝.png', author: '肖振国', icon: Layers, bg: 'bg-blue-50' },
      { name: '【公开】【2026-10】御界_实机照片_园区部署.jpg', author: '肖振国', icon: Camera, bg: 'bg-slate-100' },
    ],
    multimedia: [
      { name: '【公开】【2026-10】御界_概念宣传片_1分钟版.mp4', duration: '01:00', author: '肖振国' },
      { name: '【公开】【2026-11】御界_实机演示Demo_3分钟.mp4', duration: '03:15', author: '周德友' },
    ],
    brochures: [
      { name: '【公开】【2026-11】御界_产品宣传册_V2.0_画册版.pdf', date: '2026-11-15', version: 'V2.0 (最新)', status: 'current' },
      { name: '【公开】【2026-08】御界_产品宣传册_V1.0_折页版.pdf', date: '2026-08-10', version: 'V1.0', status: 'archive' },
    ]
  };

  const salesKitData = [
    { name: '【非密】【2026-11】御界_标准对客演示_V3.1.pptx', type: 'ppt', date: '2026-11-10', author: '周德友', security: '非密', highlight: true },
    { name: '【公开】【2026-11】御界_一页纸介绍(One-Pager).pdf', type: 'pdf', date: '2026-11-09', author: '林仟慧', security: '公开' },
    { name: '【秘密】【2026-10】御界_标准报价单与配置表_26H2.xlsx', type: 'xls', date: '2026-10-28', author: '周德友', security: '秘密' },
  ];

  // --- 渲染子页面函数 ---

  // 1. 首页工作台 (Dashboard)
  const renderDashboard = () => (
    <div className="p-8 flex-1 overflow-y-auto bg-gray-50/50">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">工作台</h1>
      {/* KPI 卡片 */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        {[
          { label: '本月新签合同额', value: '320 万', trend: '+12%' },
          { label: '全院素材总量', value: '1,284 份', trend: '+54 份' },
          { label: '产品上线数量', value: '3 款', trend: '御界/隐卫' },
          { label: 'AI 二创采纳率', value: '78%', trend: '+5%' },
        ].map((kpi, i) => (
          <div key={i} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <div className="text-sm text-gray-500 mb-2">{kpi.label}</div>
            <div className="text-2xl font-bold text-gray-900">{kpi.value}</div>
            <div className="text-xs text-green-600 mt-2 font-medium">{kpi.trend}</div>
          </div>
        ))}
      </div>
      {/* 快捷入口 & 动态 */}
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h3 className="text-lg font-bold mb-4">快捷入口</h3>
          <div className="grid grid-cols-4 gap-4">
            {['汇报素材', '投标模板', '技术资料', '合规文件', '周报台账', '成果佐证', '产品画册', '报价单'].map((item, i) => (
              <button key={i} className="py-3 bg-gray-50 hover:bg-blue-50 hover:text-blue-600 rounded-lg text-sm font-medium text-gray-700 transition-colors border border-gray-100">
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h3 className="text-lg font-bold mb-4">我的待办</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 mt-1.5 bg-red-500 rounded-full"></div>
              <div>
                <div className="text-sm font-medium">审批：隐卫_核心算法说明.pdf</div>
                <div className="text-xs text-gray-500 mt-1">林仟慧 申请下载 (涉密)</div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 mt-1.5 bg-blue-500 rounded-full"></div>
              <div>
                <div className="text-sm font-medium">更新：御界_标准对客演示PPT</div>
                <div className="text-xs text-gray-500 mt-1">已超过 30 天未更新</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // 2. AI 二创工作台
  const renderAIWorkbench = () => (
    <div className="flex-1 flex overflow-hidden bg-gray-50/50">
      <div className="w-1/3 border-r border-gray-200 bg-white p-6 flex flex-col">
        <h2 className="text-lg font-bold flex items-center mb-6"><Sparkles className="w-5 h-5 mr-2 text-purple-600"/> AI 辅助二创</h2>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">1. 选择参考素材 (最多3份)</label>
          <div className="p-3 border border-dashed border-gray-300 rounded-lg bg-gray-50 text-sm text-gray-500 flex items-center justify-center cursor-pointer hover:bg-gray-100">
            <FilePlus2 className="w-4 h-4 mr-2" /> 点击从知识库关联素材
          </div>
          {/* 已选素材模拟 */}
          <div className="mt-3 p-2 bg-purple-50 border border-purple-100 rounded flex items-center text-xs text-purple-700">
            <FileText className="w-3 h-3 mr-2" /> 【机密】御界_产品需求文档_V2.0.docx
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <label className="block text-sm font-medium text-gray-700 mb-2">2. 描述生成需求</label>
          <textarea 
            className="flex-1 w-full border border-gray-200 rounded-lg p-3 text-sm resize-none focus:border-purple-500 outline-none"
            placeholder="例如：请根据参考文档，帮我提炼一份面向能源行业客户的 3 分钟电梯演讲稿，重点突出极低功耗的优势..."
            defaultValue="请根据参考文档，帮我提炼一份面向能源行业客户的 3 分钟电梯演讲稿，重点突出极低功耗的优势。"
          ></textarea>
        </div>
        <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2.5 rounded-lg text-sm font-medium flex items-center justify-center">
          <Send className="w-4 h-4 mr-2" /> 开始生成
        </button>
      </div>
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8 min-h-full">
          <div className="text-gray-400 text-sm flex items-center justify-end mb-6 border-b border-gray-100 pb-4">
            <CheckCircle2 className="w-4 h-4 mr-1 text-green-500" /> 已开启强制引用溯源
          </div>
          <h1 className="text-xl font-bold mb-4">御界 - 能源行业电梯演讲稿</h1>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            您好！我是南湖类脑研究院的周德友。针对咱们能源厂区布线难、巡检成本高的痛点，我向您推荐我们的电子哨兵“御界”。
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            传统摄像头需要拉专线供电，而“御界”搭载了我们自研的类脑边缘计算芯片，实现了<span className="bg-purple-100 text-purple-800 px-1 rounded cursor-pointer">极低功耗运行 [1]</span>，仅靠太阳能板即可全天候工作。同时，它具备<span className="bg-purple-100 text-purple-800 px-1 rounded cursor-pointer">毫秒级预警能力 [1]</span>，一旦发现异常入侵或设备冒火，数据在端侧直接处理，<span className="bg-purple-100 text-purple-800 px-1 rounded cursor-pointer">隐私计算不过传 [2]</span>，绝对保障咱们厂区的数据安全。
          </p>
          <div className="mt-12 pt-6 border-t border-gray-200">
            <h4 className="text-xs font-bold text-gray-500 mb-2">引用来源：</h4>
            <ul className="text-xs text-gray-500 space-y-1">
              <li>[1] 【机密】【2026-10】御界_产品需求文档(PRD)_V2.0.docx (第 12 页)</li>
              <li>[2] 【秘密】【2026-11】御界_核心卖点与竞品打法_V1.2.pdf (第 3 页)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  // 3. 数据统计
  const renderStats = () => (
    <div className="p-8 flex-1 overflow-y-auto bg-gray-50/50">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">系统数据统计</h1>
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-base font-bold mb-4">知识资产增长趋势 (近半年)</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={statsData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#888'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#888'}} />
                <Tooltip />
                <Area type="monotone" dataKey="素材量" stroke="#3b82f6" fill="#eff6ff" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-base font-bold mb-4">AI 二创调用频次</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={statsData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#888'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#888'}} />
                <Tooltip />
                <Line type="monotone" dataKey="AI调用" stroke="#9333ea" strokeWidth={2} dot={{r: 4}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );

  // 4. 周报系统 (解耦与关联)
  const renderWeekly = () => (
    <div className="p-8 flex-1 overflow-y-auto bg-gray-50/50">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">团队周报与效能</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">写本周周报</button>
      </div>
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 max-w-4xl">
        <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold">周</div>
            <div>
              <div className="font-bold text-gray-900">周德友的周报</div>
              <div className="text-xs text-gray-500">2026年11月 第3周 (11.16 - 11.22)</div>
            </div>
          </div>
          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded font-medium">已提交</span>
        </div>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-bold text-gray-800 mb-3 flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-blue-500"/> 本周核心工作成果</h4>
            <ul className="space-y-3 pl-6">
              <li className="text-sm text-gray-600">
                1. 完成了“御界”面向能源行业的对客演示材料更新。
                {/* 核心：周报直接关联知识库资产 */}
                <div className="mt-2 p-2 bg-gray-50 border border-gray-200 rounded flex items-center w-fit cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition-colors">
                  <Box className="w-4 h-4 text-orange-500 mr-2" />
                  <span className="text-blue-600 font-medium text-xs">引用资产：【非密】【2026-11】御界_标准对客演示_V3.1.pptx</span>
                </div>
              </li>
              <li className="text-sm text-gray-600">
                2. 配合肖振国完成了展会画册的 V2.0 定稿。
                <div className="mt-2 p-2 bg-gray-50 border border-gray-200 rounded flex items-center w-fit cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition-colors">
                  <FileText className="w-4 h-4 text-red-500 mr-2" />
                  <span className="text-blue-600 font-medium text-xs">引用资产：【公开】【2026-11】御界_产品宣传册_V2.0_画册版.pdf</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  // 5. 素材库 (保留之前最满意的画册视图代码)
  const renderLibrary = () => (
    <div className="flex flex-1 overflow-hidden bg-white">
      {/* 目录树 */}
      <div className="w-64 border-r border-gray-200 overflow-y-auto py-4 flex flex-col bg-white shrink-0">
        <div className="px-4 mb-3 flex justify-between items-center">
          <span className="font-medium text-gray-800">全院目录树</span>
        </div>
        <div className="px-2 space-y-1">
          <div>
            <button className="w-full flex items-center px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-50 rounded group">
              <ChevronRight className="w-4 h-4 mr-1 text-gray-400" />
              <FolderKanban className="w-4 h-4 mr-2 text-blue-400" />
              <span className="truncate">01 项目知识库</span>
            </button>
          </div>
          <div>
            <button onClick={() => setExpandedFolders(prev => prev.includes('02') ? prev.filter(id => id !== '02') : [...prev, '02'])} className="w-full flex items-center px-2 py-1.5 text-sm font-medium text-gray-900 bg-gray-50 rounded">
              <ChevronDown className="w-4 h-4 mr-1 text-gray-500" />
              <Box className="w-4 h-4 mr-2 text-blue-500" />
              <span className="truncate">02 产品知识库</span>
            </button>
            {expandedFolders.includes('02') && (
              <div className="ml-6 mt-1 space-y-1 border-l border-gray-200 pl-2">
                <button className="w-full flex items-center px-2 py-1.5 text-sm text-blue-700 bg-blue-50 rounded font-medium">
                  <Box className="w-4 h-4 mr-2 text-blue-500" />
                  <span className="truncate">电子哨兵“御界”</span>
                </button>
                <button className="w-full flex items-center px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-50 rounded">
                  <Box className="w-4 h-4 mr-2 text-gray-400" />
                  <span className="truncate">隐私防护“隐卫”</span>
                </button>
              </div>
            )}
          </div>
          {['03 核心技术库', '04 市场与商机库', '05 基础定位与汇报'].map((name, idx) => (
            <div key={idx}>
              <button className="w-full flex items-center px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-50 rounded group">
                <ChevronRight className="w-4 h-4 mr-1 text-gray-400" />
                <Folder className="w-4 h-4 mr-2 text-blue-400" />
                <span className="truncate">{name}</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 文件列表区 */}
      <div className="flex-1 flex flex-col overflow-hidden bg-gray-50/30">
        <div className="px-8 py-6 border-b border-gray-200 bg-white shrink-0">
          <div className="flex items-center text-xs text-gray-500 mb-3">
            <span>素材库</span><ChevronRight className="w-3 h-3 mx-1" />
            <span>02 产品知识库</span><ChevronRight className="w-3 h-3 mx-1" />
            <span className="text-gray-900 font-medium">电子哨兵“御界”</span>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">电子哨兵“御界”</h1>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm flex items-center transition-colors">
              <FilePlus2 className="w-4 h-4 mr-2" />上传素材
            </button>
          </div>
        </div>

        <div className="px-8 pt-4 bg-white border-b border-gray-200 shrink-0">
          <div className="flex space-x-6">
            {[
              { id: 'marketing', label: '02 市场宣发 (画册视图)' },
              { id: 'sales-kit', label: '03 销售工具包 (表格视图)' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveProductTab(tab.id)}
                className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
                  activeProductTab === tab.id ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-8">
          {activeProductTab === 'marketing' ? (
            <div className="space-y-10 max-w-6xl">
              {/* 视觉资产库 */}
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-800 flex items-center"><ImageIcon className="w-5 h-5 mr-2 text-blue-500" /> 视觉资产库</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {marketingData.visualAssets.map((item, idx) => (
                    <div key={idx} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                      <div className={`h-40 ${item.bg} flex items-center justify-center relative`}>
                        <item.icon className="w-12 h-12 text-gray-300" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-3">
                          <button className="p-2 bg-white text-gray-800 rounded-full hover:bg-blue-50"><Eye className="w-4 h-4" /></button>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">{item.name}</div>
                        <div className="flex items-center justify-between">
                          <span className="px-2 py-0.5 bg-green-100 text-green-700 border-green-200 text-[10px] rounded border">公开</span>
                          <span className="text-xs text-gray-400 flex items-center"><User className="w-3 h-3 mr-1"/>{item.author}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              {/* 宣传册 */}
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-800 flex items-center"><FileText className="w-5 h-5 mr-2 text-red-500" /> 产品宣传册 (版本控制)</h3>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 border-b border-gray-200 text-gray-500">
                      <tr><th className="px-6 py-3 font-medium">文件名称</th><th className="px-6 py-3 font-medium">版本状态</th></tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {marketingData.brochures.map((item, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                          <td className="px-6 py-4 flex items-center space-x-3">
                            <FileText className="text-red-500 w-5 h-5" />
                            <span className={item.status === 'current' ? 'text-gray-900 font-medium' : 'text-gray-500 line-through'}>{item.name}</span>
                          </td>
                          <td className="px-6 py-4">
                            {item.status === 'current' ? <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded border border-blue-200">{item.version}</span> : <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded border border-gray-200">{item.version} (已归档)</span>}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          ) : (
            <div className="max-w-6xl">
              <div className="mb-4 p-4 bg-blue-50/80 border border-blue-100 rounded-lg flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <div className="text-sm text-blue-800">
                  <span className="font-semibold">使用建议：</span> 销售外出拜访请优先使用带有 <span className="inline-flex items-center px-1.5 py-0.5 bg-yellow-100 text-yellow-700 text-[10px] font-bold rounded border border-yellow-200 mx-1"><Star className="w-3 h-3 mr-0.5 fill-current" /> 推荐定稿</span> 的版本。
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-50 border-b border-gray-200 text-gray-500">
                    <tr><th className="px-6 py-3 font-medium">素材名称</th><th className="px-6 py-3 font-medium">密级</th></tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {salesKitData.map((file, idx) => (
                      <tr key={idx} className={`hover:bg-gray-50 ${file.highlight ? 'bg-blue-50/30' : ''}`}>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-3">
                            {file.type === 'ppt' ? <Box className="text-orange-500 w-5 h-5" /> : file.type === 'xls' ? <FileSpreadsheet className="text-green-500 w-5 h-5" /> : <FileText className="text-red-500 w-5 h-5" />}
                            <span className="font-medium text-gray-900">{file.name}</span>
                            {file.highlight && <span className="px-1.5 py-0.5 bg-yellow-100 text-yellow-700 text-[10px] font-bold rounded border border-yellow-200 flex items-center"><Star className="w-3 h-3 mr-0.5 fill-current" /> 推荐定稿</span>}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-0.5 text-xs font-medium rounded border ${file.security === '公开' ? 'bg-green-100 text-green-700 border-green-200' : file.security === '非密' ? 'bg-blue-100 text-blue-700 border-blue-200' : 'bg-orange-100 text-orange-700 border-orange-200'}`}>{file.security}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-screen bg-white font-sans text-gray-800">
      {/* 顶栏 Topbar */}
      <header className="h-14 border-b border-gray-200 flex items-center justify-between px-4 bg-white shrink-0 z-10">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 bg-blue-600 rounded flex items-center justify-center">
              <Box className="w-4 h-4 text-white" />
            </div>
            <span className="text-base font-bold text-gray-900 tracking-tight">NHLN-WIKI</span>
          </div>
          <div className="relative group">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="搜索素材、模板、样例..." className="pl-9 pr-12 py-1.5 bg-gray-100/80 border border-transparent rounded-lg text-sm focus:bg-white focus:border-blue-500 outline-none w-80 transition-all" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-1.5 rounded-lg">
            <div className="w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-medium text-sm">周</div>
            <div className="hidden md:block text-left">
              <div className="text-sm font-medium text-gray-700 leading-none">周德友</div>
              <div className="text-[11px] text-gray-500 mt-1">板块负责人</div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* 侧边栏 Sidebar */}
        <aside className="w-56 border-r border-gray-200 bg-gray-50/50 flex flex-col justify-between shrink-0">
          <div className="py-4 overflow-y-auto">
            <div className="px-4 mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">工作空间</div>
            <nav className="space-y-0.5 px-2 mb-6">
              {[
                { id: 'dashboard', icon: LayoutDashboard, label: '首页工作台' },
                { id: 'library', icon: Library, label: '全量素材库' },
                { id: 'ai', icon: Sparkles, label: 'AI 二创工作台' },
                { id: 'stats', icon: BarChart2, label: '数据统计' },
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveSidebar(item.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-colors ${
                    activeSidebar === item.id ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <item.icon className={`w-4 h-4 ${activeSidebar === item.id ? 'text-blue-600' : 'text-gray-400'}`} />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>

            <div className="px-4 mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">效能管理</div>
            <nav className="space-y-0.5 px-2 mb-6">
              <button
                onClick={() => setActiveSidebar('weekly')}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-colors ${
                  activeSidebar === 'weekly' ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <CalendarCheck className={`w-4 h-4 ${activeSidebar === 'weekly' ? 'text-blue-600' : 'text-gray-400'}`} />
                <span>周报系统</span>
              </button>
            </nav>

            <div className="px-4 mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">管理模块</div>
            <nav className="space-y-0.5 px-2">
              <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100 transition-colors">
                <Folder className="w-4 h-4 text-gray-400" />
                <span>分类与目录管理</span>
              </button>
              <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100 transition-colors">
                <Shield className="w-4 h-4 text-gray-400" />
                <span>权限与成员</span>
              </button>
              <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100 transition-colors">
                <Settings className="w-4 h-4 text-gray-400" />
                <span>系统设置</span>
              </button>
            </nav>
          </div>
        </aside>

        {/* 动态主内容区 (根据侧边栏点击切换) */}
        {activeSidebar === 'dashboard' && renderDashboard()}
        {activeSidebar === 'ai' && renderAIWorkbench()}
        {activeSidebar === 'stats' && renderStats()}
        {activeSidebar === 'weekly' && renderWeekly()}
        {activeSidebar === 'library' && renderLibrary()}
      </div>
    </div>
  );
};

export default App;