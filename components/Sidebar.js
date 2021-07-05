import Avatar from '@/components/icons/Avatar';
import { HEADLINE, NAME } from '@/utils/constant';

export default function Sidebar() {
  return (
    <aside className="h-[93.7vh] min-w-[255px] sticky top-5 hidden m-5 w-72 bg-white rounded-3xl lg:block">
      <div className="flex flex-col px-6">
        <div className="flex flex-col items-center my-5 text-center">
          <Avatar />
          <h1 className="mb-1 mt-5 text-lg font-medium">{NAME}</h1>
          <h3 className="relative w-3/4 text-gray-400 text-sm italic">
            {HEADLINE}
          </h3>
        </div>
        <section className="mt-10 space-y-8">
          <div className="space-y-1">
            <h2>Masih dipikirin</h2>
            <div className="animate-pulse">
              <div className="h-4 bg-pink-200 rounded" />
            </div>
          </div>
          <div className="space-y-1">
            <h2>WIP</h2>
            <div className="animate-pulse">
              <div className="h-4 bg-violet-200 rounded" />
            </div>
          </div>
          <div className="space-y-1">
            <h2>Lagi cari ide</h2>
            <div className="animate-pulse">
              <div className="h-4 bg-purple-200 rounded" />
            </div>
          </div>
        </section>
      </div>
    </aside>
  );
}
