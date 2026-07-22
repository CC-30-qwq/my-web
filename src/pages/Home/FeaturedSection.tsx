import { Link } from 'react-router-dom';
import GameCard from '../../components/GameCard';
import AnimatedTitle from '../../components/AnimatedTitle';
import { Icons } from '../../components/Icons';
import games from '../../data/games';

const featuredGames = games.filter((g) => g.featured);

export default function FeaturedSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-14">
          <div>
            <span className="text-body-muted font-semibold text-primary-light uppercase tracking-widest">
              游戏精选
            </span>
            <AnimatedTitle
              text="精选游戏"
              className="text-h2 text-text-primary mt-3 mb-2"
            />
            <p className="text-text-secondary text-body">在线试玩，无需下载安装</p>
          </div>
          <Link
            to="/games"
            className="hidden sm:inline-flex items-center gap-1.5 text-primary-light hover:text-primary font-medium text-body transition-colors"
          >
            查看全部
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={Icons.chevronRight} />
            </svg>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {featuredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

        <div className="text-center mt-10 sm:hidden">
          <Link
            to="/games"
            className="inline-flex items-center gap-1.5 text-primary-light font-medium text-body"
          >
            查看全部游戏
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={Icons.chevronRight} />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
