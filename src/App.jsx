import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import MarketingNotes from './components/MarketingNotes'
import WorkSection from './components/WorkSection'
import AboutSection from './components/AboutSection'
import ContactBanner from './components/ContactBanner'
import Footer from './components/Footer'
import FolderFloat from './components/Folder_Float'

function App() {
  return (
    <>
      <Header />
      <main
        id="top"
        className="relative min-h-screen w-full bg-background-paper bg-dot-pattern pt-20"
      >
        <div className="flex w-full flex-col gap-space-xl">
          <Hero />

          <section
            className="relative z-20 mx-auto flex w-full max-w-7xl justify-center overflow-x-visible px-gutter py-space-lg"
            aria-label="出海手记"
          >
            <FolderFloat
              items={[
                '先读懂本地用户',
                '欧洲市场要细拆',
                '短视频也要有文化梗',
                '增长要可复用',
                '文化共鸣大于硬翻',
                'AI 放大内容产能',
              ]}
              label="出海手记"
              sublabel="Insights notes"
              trigger="hover"
              closeOnSelect
              physics
              drift={0.65}
              onSelect={(value, index) => console.log(value, index)}
              folderColor="#6b38d4"
              frontColor="#8455ef"
              paperColor="#e9ddff"
              itemColor="#fef9c3"
              itemTextColor="#1e293b"
              labelColor="#fffbff"
              width={200}
              height={148}
              radius={14}
              spread={420}
              lift={28}
              tilt={12}
              flapAngle={34}
              restAngle={16}
              openDuration={520}
              stagger={45}
              bounce={0.3}
            />
          </section>

          <Marquee />
          <MarketingNotes />
          <WorkSection />
          <AboutSection />
          <ContactBanner />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
