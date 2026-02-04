# 开发指南

> 开发者工具箱 - 快速开发参考

---

## 🎨 设计系统

### 核心原则
- ✅ 使用 **Slate** 色系 (替代 gray)
- ✅ 统一圆角 `rounded-lg`
- ✅ 标准过渡 `duration-200`
- ✅ 主色调 `primary-500` (#3B82F6)

### 颜色速查

```tsx
// 背景
bg-slate-50         // 亮色页面
bg-white            // 亮色表面
bg-slate-900        // 暗色页面
bg-slate-800        // 暗色表面

// 文字
text-slate-900      // 亮色主文字
text-slate-100      // 暗色主文字
text-slate-600      // 亮色次文字
text-slate-400      // 暗色次文字

// 主色
bg-primary-500      // 主按钮
text-primary-600    // 主色文字
ring-primary-500    // 焦点环
```

### 组件样式

```tsx
// 按钮
className="px-4 py-2 bg-primary-500 text-white rounded-lg
  hover:bg-primary-600 focus:ring-2 focus:ring-primary-500
  transition-all duration-200 cursor-pointer"

// 输入框
className="w-full px-3 py-2 border border-slate-300
  dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800
  text-slate-900 dark:text-slate-100
  focus:ring-2 focus:ring-primary-500 focus:border-transparent
  transition-all duration-200"

// 卡片
className="bg-white dark:bg-slate-800 rounded-lg
  shadow-lg p-4 border border-slate-200 dark:border-slate-700"
```

---

## 📐 布局规范

### 间距
- 页面边距: `p-4` (16px)
- 组件间距: `space-y-2` (8px)
- 内边距: `p-3` (12px)

### 圆角
- 卡片/按钮: `rounded-lg` (8px)
- 输入框: `rounded-lg` (8px)

### 阴影
- 卡片默认: `shadow-lg`
- 悬停效果: `hover:shadow-xl`
- 激活状态: `shadow-md`

---

## ⚡ 动画规范

### 过渡时长
- 标准交互: `duration-200`
- 快速交互: `duration-150`

### 常用动画
```tsx
// 淡入
className="animate-in fade-in"

// 滑动
className="slide-in-from-top-2"

// 悬停
className="hover:scale-105"
```

---

## 🌓 主题系统

### 类名格式
```tsx
// 亮色 → 暗色
className="bg-white dark:bg-slate-800"
className="text-slate-900 dark:text-slate-100"
```

### 主题 Hook
```tsx
import { useTheme } from './hooks/useTheme'

const { isDark } = useTheme()
```

---

## 🎯 组件开发

### 新工具模板
```tsx
import React from 'react'
import { ToolLayout } from '../components/layouts'
import { Button } from '../components/common'

const NewTool: React.FC = () => {
  return (
    <ToolLayout title="工具名称" subtitle="工具描述">
      {/* 工具内容 */}
    </ToolLayout>
  )
}

export default NewTool
```

### 使用公共组件
```tsx
// 按钮
import { Button } from '../components/common'
<Button variant="primary" size="md" onClick={handler}>
  按钮
</Button>

// 代码编辑器
import { CodeEditor } from '../components/common'
<CodeEditor value={code} onChange={setCode} language="json" />

// 复制 Hook
import { useCopyToClipboard } from '../hooks'
const { copy, copied } = useCopyToClipboard()
```

---

## 🔄 代码迁移

### 快速替换
```bash
# 颜色迁移
gray → slate

# 圆角统一
rounded-md → rounded-lg

# 过渡统一
duration-150/300 → duration-200
```

### 注意事项
- ✅ 使用 Slate 色系
- ✅ 添加 cursor-pointer
- ✅ 添加 focus ring
- ✅ 添加 dark: 暗色样式
- ❌ 避免使用 emoji 图标
- ❌ 避免使用 !important

---

## 🚀 开发命令

```bash
# 开发
npm run dev              # 前端开发
pnpm tauri dev          # Tauri 应用

# 构建
npm run build           # 前端构建
pnpm tauri build        # Tauri 构建

# 类型检查
tsc --noEmit            # TypeScript 检查
```

---

## 📚 相关文档

- **DESIGN_SYSTEM.md** - 完整设计系统
- **README.md** - 项目说明
- **CLAUDE.md** - AI 指令

---

**更新时间**: 2025-02-04
**版本**: 2.0.0
