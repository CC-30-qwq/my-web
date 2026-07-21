export interface Game {
  id: string;
  name: string;
  description: string;
  engine: 'Unity WebGL' | 'Cocos Creator';
  thumbnail: string;
  size: string;
  tags: string[];
  path: string;
  featured: boolean;
}

const games: Game[] = [
  {
    id: 'zhi-ling-jie-ma',
    name: '指令解码',
    description: '一款基于指令解码玩法的创新游戏，结合视频教学与互动操作，帮助理解计算机指令执行流程。支持 1080P 高清画质，60 帧流畅体验。',
    engine: 'Unity WebGL',
    thumbnail: '/images/games/zhi-ling-jie-ma.jpg',
    size: '253 MB',
    tags: ['教育', '模拟', '视频互动'],
    path: '/games/zhi-ling-jie-ma/index.html',
    featured: true,
  },
  {
    id: 'sekiro',
    name: 'Sekiro',
    description: '受经典动作游戏启发的 WebGL 作品，拥有流畅的战斗系统和精美的场景设计。',
    engine: 'Unity WebGL',
    thumbnail: '/images/games/sekiro.jpg',
    size: '66 MB',
    tags: ['动作', '冒险', '3D'],
    path: '/games/sekiro/index.html',
    featured: true,
  },
  {
    id: 'relax',
    name: 'Relaxing Games',
    description: '休闲放松类游戏合集，适合在工作学习之余放松身心，享受宁静的游戏时光。',
    engine: 'Unity WebGL',
    thumbnail: '/images/games/relax.jpg',
    size: '53 MB',
    tags: ['休闲', '放松', '治愈'],
    path: '/games/relax/index.html',
    featured: true,
  },
  {
    id: 'rts',
    name: 'RTS 即时战略',
    description: '即时战略游戏原型，考验策略思维和即时决策能力，在战场上运筹帷幄。',
    engine: 'Unity WebGL',
    thumbnail: '/images/games/rts.jpg',
    size: '29 MB',
    tags: ['策略', 'RTS', '战争'],
    path: '/games/rts/index.html',
    featured: false,
  },
  {
    id: 'jade-developer',
    name: 'Jade Developer',
    description: '基于 Cocos Creator 引擎打造的创意游戏，拥有独特的玩法和精美的 2D 画面表现。',
    engine: 'Cocos Creator',
    thumbnail: '/images/games/jade-developer.jpg',
    size: '17 MB',
    tags: ['创意', '2D', '休闲'],
    path: '/games/jade-developer/index.html',
    featured: true,
  },
];

export default games;
