import React, { useState } from 'react'
import AesCrypto from './tools/AesCrypto'
import Base64Converter from './tools/Base64Converter'
import PemCertificateViewer from './tools/CertificateViewer'
import DnsResolver from './tools/DnsResolver'
import FormatConverter from './tools/FormatConverter'
import ImageConverter from './tools/ImageConverter'
import ImagePreview from './tools/ImagePreview'
import IpInfo from './tools/IpInfo'
import JsonFormatter from './tools/JsonFormatter'
import JsonToGo from './tools/JsonToGo'
import JwtDecode from './tools/JwtDecode'
import JwtEncode from './tools/JwtEncode'
import Md5Crypto from './tools/Md5Crypto'
import PasswordGenerator from './tools/PasswordGenerator'
import PasswordHasher from './tools/PasswordHasher'
import PemToPfxConverter from './tools/PemToPfxConverter'
import PfxToPemConverter from './tools/PfxToPemConverter'
import { RegexTester } from './tools/RegexTester'
import Settings from './tools/Settings'
import ShaCrypto from './tools/ShaCrypto'
import SqlToEnt from './tools/SqlToEnt'
import SqlToGo from './tools/SqlToGo'
import SslChecker from './tools/SslChecker'
import SubnetCalculator from './tools/SubnetCalculator'
import TimestampConverter from './tools/TimestampConverter'
import UrlEncoderDecoder from './tools/UrlEncoderDecoder'
import VideoConverter from './tools/VideoConverter'
import WhoisLookup from './tools/WhoisLookup'

type ToolCategory = {
  id: string
  name: string
  icon: string
  tools: Array<{
    id: string
    name: string
  }>
}

const toolCategories: ToolCategory[] = [
  {
    id: 'encoding',
    name: '编码/解码',
    icon: '🔐',
    tools: [
      { id: 'base64converter', name: 'Base64 编解码' },
      { id: 'urlencoderdecoder', name: 'URL 编解码' },
      { id: 'aescrypto', name: 'AES 加密/解密' },
      { id: 'md5crypto', name: 'MD5 加密' },
      { id: 'shacrypto', name: 'SHA 哈希加密' },
      { id: 'jwtencode', name: 'JWT 生成' },
      { id: 'jwtdecode', name: 'JWT 解码' },
      { id: 'passwordgenerator', name: '密码生成器' },
      { id: 'passwordhasher', name: '密码加密验证' },
    ],
  },
  {
    id: 'certificate',
    name: '证书工具',
    icon: '📜',
    tools: [
      { id: 'certificate', name: '证书查看器' },
      { id: 'pemtopfx', name: 'PEM 转 PFX' },
      { id: 'pfxtopem', name: 'PFX 转 PEM' },
      { id: 'sslchecker', name: '在线 SSL 检测' },
    ],
  },
  {
    id: 'network',
    name: '网络工具',
    icon: '🌐',
    tools: [
      { id: 'subnetcalculator', name: '子网掩码计算器' },
      { id: 'ipinfo', name: 'IP 地址信息查询' },
      { id: 'dnsresolver', name: 'DNS 解析工具' },
      { id: 'whois', name: '域名 Whois 查询' },
    ],
  },
  {
    id: 'dataformat',
    name: '数据格式转换',
    icon: '📄',
    tools: [
      { id: 'jsonformatter', name: 'JSON 格式化' },
      { id: 'formatconverter', name: '格式转换器' },
      { id: 'jsontogo', name: 'JSON 转 Go 结构体' },
      { id: 'sqltogo', name: 'SQL 转 Go 结构体' },
      { id: 'sqltoent', name: 'SQL 转 Go Ent ORM' },
    ],
  },
  {
    id: 'media',
    name: '媒体格式转换',
    icon: '🎬',
    tools: [
      { id: 'imageconverter', name: '图片格式转换' },
      { id: 'imagepreview', name: '图片预览器' },
      { id: 'videoconverter', name: '视频格式转换' },
    ],
  },
  {
    id: 'developer',
    name: '开发工具',
    icon: '🛠️',
    tools: [{ id: 'regextester', name: '正则表达式测试器' }],
  },
  {
    id: 'time',
    name: '时间工具',
    icon: '⏰',
    tools: [{ id: 'timestamp', name: '时间戳转换' }],
  },
]

const Toolbox: React.FC = () => {
  const [activeTool, setActiveTool] = useState<
    | 'aescrypto'
    | 'base64converter'
    | 'urlencoderdecoder'
    | 'jwtencode'
    | 'jwtdecode'
    | 'md5crypto'
    | 'shacrypto'
    | 'passwordgenerator'
    | 'passwordhasher'
    | 'certificate'
    | 'pemtopfx'
    | 'pfxtopem'
    | 'subnetcalculator'
    | 'ipinfo'
    | 'dnsresolver'
    | 'whois'
    | 'sslchecker'
    | 'jsonformatter'
    | 'jsontogo'
    | 'formatconverter'
    | 'imageconverter'
    | 'imagepreview'
    | 'videoconverter'
    | 'sqltogo'
    | 'sqltoent'
    | 'regextester'
    | 'timestamp'
    | 'settings'
  >('base64converter')

  const [expandedCategory, setExpandedCategory] = useState<string | null>(
    'encoding',
  )

  const toggleCategory = (categoryId: string) => {
    // 如果点击的是已展开的分类，则折叠它；否则只展开当前分类
    setExpandedCategory((prev) => (prev === categoryId ? null : categoryId))
  }

  return (
    <div className='toolbox flex flex-row w-full h-full'>
      {/* Left sidebar */}
      <nav className='toolbox-nav w-48 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mr-4 h-full flex flex-col max-h-[calc(100vh-2rem)]'>
        <div
          className='space-y-2 flex-1 overflow-y-auto'
          style={{ maxHeight: 'calc(100vh - 8rem)' }}>
          {toolCategories.map((category) => (
            <div key={category.id} className='mb-2'>
              <button
                onClick={() => toggleCategory(category.id)}
                className='w-full px-3 py-2 flex items-center justify-between rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-500 transition-colors'>
                <div className='flex items-center space-x-2 min-w-0 flex-1'>
                  <span>{category.icon}</span>
                  <span className='text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap truncate'>
                    {category.name}
                  </span>
                </div>
                <span className='text-gray-500 dark:text-gray-400 flex-shrink-0 ml-2'>
                  {expandedCategory === category.id ? '▼' : '▶'}
                </span>
              </button>

              {expandedCategory === category.id && (
                <div className='mt-1 ml-2 space-y-1'>
                  {category.tools.map((tool) => (
                    <div
                      key={tool.id}
                      className={`px-3 py-2 rounded-md cursor-pointer transition-colors text-sm whitespace-nowrap ${
                        activeTool === tool.id
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-50 text-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                      }`}
                      onClick={() => setActiveTool(tool.id as any)}>
                      {tool.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Settings button at bottom */}
        <div className='mt-4 pt-4 border-t border-gray-200 dark:border-gray-600'>
          <button
            onClick={() => setActiveTool('settings')}
            className={`w-full px-3 py-2 rounded-md cursor-pointer transition-colors flex items-center space-x-2 ${
              activeTool === 'settings'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500'
            }`}>
            <span>⚙️</span>
            <span className='text-sm font-medium'>设置</span>
          </button>
        </div>
      </nav>

      {/* Right content area */}
      <div className='toolbox-content flex-1 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md overflow-auto h-full w-full'>
        {activeTool === 'aescrypto' && <AesCrypto />}
        {activeTool === 'base64converter' && <Base64Converter />}
        {activeTool === 'urlencoderdecoder' && <UrlEncoderDecoder />}
        {activeTool === 'jwtencode' && <JwtEncode />}
        {activeTool === 'jwtdecode' && <JwtDecode />}
        {activeTool === 'md5crypto' && <Md5Crypto />}
        {activeTool === 'shacrypto' && <ShaCrypto />}
        {activeTool === 'passwordgenerator' && <PasswordGenerator />}
        {activeTool === 'passwordhasher' && <PasswordHasher />}
        {activeTool === 'certificate' && <PemCertificateViewer />}
        {activeTool === 'pemtopfx' && <PemToPfxConverter />}
        {activeTool === 'pfxtopem' && <PfxToPemConverter />}
        {activeTool === 'subnetcalculator' && <SubnetCalculator />}
        {activeTool === 'ipinfo' && <IpInfo />}
        {activeTool === 'dnsresolver' && <DnsResolver />}
        {activeTool === 'whois' && <WhoisLookup />}
        {activeTool === 'sslchecker' && <SslChecker />}
        {activeTool === 'jsonformatter' && <JsonFormatter />}
        {activeTool === 'jsontogo' && <JsonToGo />}
        {activeTool === 'formatconverter' && <FormatConverter />}
        {activeTool === 'imageconverter' && <ImageConverter />}
        {activeTool === 'imagepreview' && <ImagePreview />}
        {activeTool === 'videoconverter' && <VideoConverter />}
        {activeTool === 'timestamp' && <TimestampConverter />}
        {activeTool === 'regextester' && <RegexTester />}
        {activeTool === 'sqltogo' && <SqlToGo />}
        {activeTool === 'sqltoent' && <SqlToEnt />}
        {activeTool === 'settings' && <Settings />}
      </div>
    </div>
  )
}

export default Toolbox
