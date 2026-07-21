export interface Game {
  id: string;
  name: string;
  description: string;
  engine: 'Unity WebGL' | 'Cocos Creator' | 'AIGC';
  thumbnail: string;
  size: string;
  tags: string[];
  path: string;
  featured: boolean;
  type?: 'game' | 'video';
}

const games: Game[] = [
  {
    id: 'zhi-ling-jie-ma',
    name: '指令解码（教学游戏）',
    description: '三款计算机概念教学游戏，主导全部 UI 界面设计与交互流程。v1 拖拽拼装——将指令块拖入正确位置完成程序组装；v2 网格编程——在网格中编写指令序列，含关卡选择、计分面板、星级评价动效。接入 AI 大模型评价反馈，将文字评价转化为弹窗→星级→评语三级信息层级。基于 UGUI 完成界面拼接搭建，处理多分辨率与安全区适配，确保不同设备下布局一致性。',
    engine: 'Unity WebGL',
    thumbnail: '/images/games/zhi-ling-jie-ma.jpg',
    size: '253 MB',
    tags: ['教学游戏', 'UGUI', 'AI 评价', '多分辨率适配', '交互流程'],
    path: '/games/zhi-ling-jie-ma/index.html',
    featured: true,
  },
  {
    id: 'sekiro',
    name: '只狼 战斗系统复刻',
    description: '独立复刻魂类核心攻防机制。Animator 状态机驱动攻击/格挡/受伤/处决全动画状态，攻击不可取消实现动作硬直节奏约束。Input Buffer 按键预输入：后摇阶段缓存输入，可取消窗口到达时自动衔接，消除吞键感。精确格挡系统：逐帧碰撞框检测，格挡窗口 0.15s，触发架势条计算与硬直反馈。架势条数值系统：受击增长、格挡削减、未受击回复、破防处决四阶段差异化视觉。敌人 AI 基于行为树实现巡逻→索敌→追击→近身攻击/后退防御的完整决策链路，攻击欲望随玩家血量动态调整。含技能冷却 UI 与对象池子弹管理。',
    engine: 'Unity WebGL',
    thumbnail: '/images/games/sekiro.jpg',
    size: '66 MB',
    tags: ['Animator', '行为树 AI', 'Input Buffer', '碰撞检测', '魂系'],
    path: '/games/sekiro/index.html',
    featured: true,
  },
  {
    id: 'jade-developer',
    name: 'Jade Developer 翡翠玉石模拟经营',
    description: '独立开发的完整玉石交易模拟经营游戏。核心玩法闭环：原石采购 → 刮皮开玉 → 模具雕刻 → 成品售卖 → 经济循环。像素级雕刻引擎：基于形状遮罩的模具放置验证（边界检测、重叠判定、裂纹规避），代数计数器替代每帧 960KB fill(0) 操作优化缓冲区。程序化石材生成：种子随机数 + 多频正弦扰动生成不规则椭圆石头，支持 5 种皮色 × 5 种玉色 × 4 级品质全组合。多因素玉器定价模型：原石价值、模具面积比、等级系数、暗区/完整度/裂纹调整。RLE 通道分离压缩存档，绕过平台 1MB 单键限制。分层架构：配置层→逻辑层→表现层 + 跨平台适配层，支持抖音/微信/Web/Windows 多端构建。半分辨率纹理生成（CPU 节省 75%）、皮肤纹理降采样（GPU 带宽节省 75%）、GPU 上传限制 15fps、分帧生成避免卡顿。',
    engine: 'Cocos Creator',
    thumbnail: '/images/games/jade-developer.jpg',
    size: '17 MB',
    tags: ['Cocos Creator', '模拟经营', '像素级雕刻', '程序化生成', '性能优化'],
    path: '/games/jade-developer/index.html',
    featured: true,
  },
  {
    id: 'relax',
    name: 'Relaxing Games',
    description: '休闲游戏合集，包含数据分拣员（排序学习）等教育类轻量玩法，注重操作反馈与信息层级设计。另含第三人称射击 Demo——射线检测驱动的战斗系统，基于对象池的子弹管理，状态模式驱动角色行为切换，适合在工作学习之余放松体验。',
    engine: 'Unity WebGL',
    thumbnail: '/images/games/relax.jpg',
    size: '53 MB',
    tags: ['休闲', '教育', '射击', '对象池', '状态模式'],
    path: '/games/relax/index.html',
    featured: true,
  },
  {
    id: 'rts',
    name: 'RTS 即时战略',
    description: 'RTS 交互系统原型。UGUI 框选与多选单位逻辑，基于 NavMesh 实现群体移动与阵型跟随。射线检测驱动的右键移动 + 左键攻击 RTS 标准操作闭环。框选视觉反馈——选择框绘制、单位高亮描边、编队图标。UGUI 网格吸附建造预览——红/绿状态实时切换。四种兵种差异化攻击指示器与弹道表现，对象池管理弹丸 UI 元素。',
    engine: 'Unity WebGL',
    thumbnail: '/images/games/rts.jpg',
    size: '29 MB',
    tags: ['RTS', 'NavMesh', 'UGUI', '框选交互', '对象池'],
    path: '/games/rts/index.html',
    featured: false,
  },
  {
    id: 'aigc-video',
    name: 'AIGC 短视频创作',
    description: '独立完成的 AI 短视频全流程制作。使用即梦文生视频/图生视频工具生成素材，配合剪映完成多轨道剪辑、调色与特效包装。涵盖"提示词→生成→筛选→后期"四步创作流程，快速响应选题，具备独立成片交付能力。',
    engine: 'AIGC',
    thumbnail: '',
    size: '1.1 MB',
    tags: ['AIGC', '即梦', '剪映', '文生视频', '后期剪辑'],
    path: '/videos/aigc.mp4',
    featured: true,
    type: 'video',
  },
];

export default games;
