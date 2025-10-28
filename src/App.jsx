import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/SplitText"
import LocomotiveScroll from "locomotive-scroll"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"

function App() {

  gsap.registerPlugin(ScrollTrigger, SplitText)

  useGSAP(() => {


    const scroller = document.querySelector('[data-scroll-container]')

    // guard: if DOM not ready or element missing, bail out
    if (!scroller) {
      console.warn('data-scroll-container not found — skipping Locomotive/ScrollTrigger init')
      return
    }

    const loco = new LocomotiveScroll({
      el: scroller,
      smooth: true,
    })

    loco.on('scroll', ScrollTrigger.update)

    ScrollTrigger.scrollerProxy(scroller, {
      scrollTop(value) { 
        return arguments.length
           ? loco.scrollTo(value, { duration: 0, disableLerp: true })
           : loco.scroll.instance.scroll.y
      },
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight}
      },
      pinType: scroller.style.transform ? 'transform' : 'fixed',
    })

    // set default scroller so individual ScrollTrigger configs (like herosection) don't have to repeat it
    ScrollTrigger.defaults({ scroller })

    ScrollTrigger.addEventListener('refresh', () => loco.update())
    ScrollTrigger.refresh()

    function loader() {
      var tl1 = gsap.timeline({})

      tl1.from('#ig6',{
        scale: 0,
        duration: 1
      }, 'a')
      .from('#ig3',{
        scale: 0,
        delay: .2,
        duration: 1
      }, 'a')
      .from('#ig4',{
        scale: 0,
        delay: .4,
        duration: 1
      }, 'a')
      .from('#ig5',{
        scale: 0,
        delay: .6,
        duration: 1
      },'a')
      .from('#ig7', {
        scale: 0,
        delay: .8,
        duration: 1
      }, 'a')
      .from('#ig2', {
        scale: 0,
        delay: 1,
        duration: 1
      }, 'a')
      .from('#ig1', {
        scale: 0,
        delay: 1.2,
        duration: 1
      }, 'a')
      .from('.heading img', {
        transform: 'translateY(100%)',
        delay: .7,
        duration: .8
      }, 'a')
    }
    loader()

    function herosection() {
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.herosection',
          scroller: '[data-scroll-container]',
          start: 'top top',
          end: 'top -150%',
          scrub: 4,
          pin: true
        }
      })

      tl.to('#ig1', {
        x: '130%',
        y: '155%'
      } , 'a')
      .to('#ig2', {
        x: '-80%',
        y: '200%',
        delay: .04
      } , 'a')
      .to('#ig3', {
        x: '-70%',
        y: '-150%',
        delay: .06
      }, 'a')
      .to('#ig4', {
        x: '140%',
        y: '-150%',
        delay: .10
      }, 'a')
      .to('#ig5', {
        x: '110%',
        y: '140%',
        delay: .14
      }, 'a')
      .to('#ig6', {
        x: '150%',
        y: '-190%',
        delay: .18
      }, 'a')
      .to('#ig7', {
        x: '-80%',
        y: '-180%',
        delay: .23
      }, 'a')
      .to('.herosection h4', {
        opacity: 0,
        delay: .23
      }, 'a')
      .to('#head', {
        opacity: 0,
        delay: .25
      }, 'a')
    }
    herosection()

    function page2() {
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#page2',
          scroller: '[data-scroll-container]',
          start: 'top 70%',
          end: 'top 55%',
          scrub: 2
        }
      })

      tl.from('#down #line1', {
        width: '0%'
      }, 'a')
      .from('#down #line2', {
        height: '0%'
      }, 'a')
      
      gsap.from('#page2 #line', {
        height: '0%',
        scrollTrigger: {
          trigger: '#page2',
          scroller: '[data-scroll-container]',
          start: 'top 10%',
          end: 'top -10%',
          scrub: 2
        }
      })
    }
    page2()

    function page3() {
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#page3',
          scroller: '[data-scroll-container]',
          start: 'top 80%',
          end: 'top 65%',
          scrub: 2
        }
      })
      tl.from('#page3 #l1', {
        width: '0%'
      }, 'b')
      .from('#page3 #l2', {
        height: '0%'
      }, 'b')
      .from('#page3 #line3-vt', {
        height: '0%'
      }, 'b')

      gsap.from('#page3 #l2', {
        width: '0%',
        scrollTrigger: {
          trigger: '#page3',
          scroller: '[data-scroll-container]',
          start: 'bottom 90%',
          end: 'bottom 85%',
          scrub: 2
        }
      }, 'b')
    }
    page3()

    function eightyAnimation() {
      gsap.to('#page4 img', {
        scale: 20,
        rotate: 90,
        y: '-500%',
        x: '40%',
        scrollTrigger: {
          trigger: '#page4',
          scroller: '[data-scroll-container]',
          markers: true,
          start: '16% 0%',
          end: 'top -150%',
          scrub: 1,
          pin: true
        }
      })      
    }
    eightyAnimation()
  })

  useEffect(() => {
    const left = document.querySelector('#left .over .igs')
    const right = document.querySelector('#right .over .igs')

    const handleLeftEnter = () => {
      right.classList.remove('hoveractive')
      left.classList.add('hoveractive')
    }

    const handleRightEnter = () => {
      left.classList.remove('hoveractive')
      right.classList.add('hoveractive')
    }

    left.addEventListener('mouseenter', handleLeftEnter)

    right.addEventListener('mouseenter', handleRightEnter)

    return () => {
      left.removeEventListener('mouseenter', handleLeftEnter)
      right.removeEventListener('mouseenter', handleRightEnter)
    }
  }, [])

  return (
    <div data-scroll-container className="w-full h-full overflow-hidden">
      <section className="herosection relative h-screen flex flex-col items-center justify-center bg-[#151519] overflow-hidden" data-scroll-section>
        <div className="heading flex items-center justify-center z-9 overflow-hidden mb-[50px]">
          <img id="head" className="w-[80vw]" src="https://selemen.liqium.com/img/logo.svg" alt="" />
        </div>
        <img id="ig1" className="absolute w-[22%] right-[24%] bottom-[15%] z-99" src="https://selemen.liqium.com/img/m6.jpg" alt="" />
        <img id="ig2" className="absolute w-[22%] left-[21%] bottom-[29%] z-4" src="https://selemen.liqium.com/img/m1.jpg" alt="" />
        <img id="ig3" className="absolute w-[15%] top-[7%] left-[34%]" src="https://selemen.liqium.com/img/m2.jpg" alt="" />
        <img id="ig4" className="absolute w-[23%] top-[12%] left-[52%] z-3" src="https://selemen.liqium.com/img/m5.jpg" alt="" />
        <img id="ig5" className="absolute w-[25%] bottom-[10%] z-3" src="https://selemen.liqium.com/img/m4.jpg" alt="" />
        <img id="ig6" className="absolute w-[17%] right-[28%] z-2" src="https://selemen.liqium.com/img/m7.jpg" alt="" />
        <img id="ig7" className="absolute w-[17%] bottom-[21%] z-1" src="https://selemen.liqium.com/img/m3.jpg" alt="" />
        <h4 className="absolute bottom-[5%] text-[#ffffffae] font-[300] text-[15px]">Construction Company</h4>
      </section>

      <section id="page2" className="relative h-[120vh] w-full flex flex-col items-center justify-center" data-scroll-section>
        <div id="down" className="absolute top-[-30%] w-full h-[45vh] py-[15px] px-[40px] flex items-end justify-between">
          <h4 className="font-[300] text-[17px] text-[#A9ABB5]">© 2025</h4>
          <h4 className="font-[300] text-[17px] text-[#A9ABB5]">Our Address</h4>
          <div id="line1" className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[calc(100%-80px)] h-[1px] bg-[#ffffff4f]"></div>
          <div id="line2" className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[1px] h-[90%] bg-[#ffffff4f]"></div>
        </div>
        <h2 className="text-[50px] text-[#A9ABB5] font-[500] leading-none">20+ expertise. <br /> We guarantee</h2> {/* leading is for line height */}
        <h1 className="text-[130px] text-[#ffffff] font-[500] tracking-[-5px] mb-[50px] z-3">Quality</h1> {/* tracking is for letter spacint */}
        <img className="absolute bottom-[7%] h-[37%]" src="https://selemen.liqium.com/img/j1.jpg" alt="" />
        <div className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[1px] h-[42%] bg-[#ffffff4f]" id="line"></div>
      </section>

      <section id="page3" className="relative w-full h-[170vh] flex items-center" data-scroll-section>
        <div id="l1" className="line3 w-[calc(100%-80px)] absolute left-[50%] translate-x-[-50%] h-[1px] bg-[#ffffff4f] top-0"></div>
        <div id="line3-vt" className="w-[1px] absolute top-0 left-[50%] translate-x-[-50%] h-full bg-[#ffffff4f]"></div>
        <div id="l2" className="line3 w-[calc(100%-80px)] absolute left-[50%] translate-x-[-50%] h-[1px] bg-[#ffffff4f] bottom-0"></div>
        <div id="left" className="w-[50%] h-full flex items-center flex-col text-center py-[25px]! px-0">
          <h3 className="font-[500] text-[#A9ABB5]">01</h3>
          <h4 className="mt-[35px]! font-[400] text-[14px] text-[#A9ABB5]">We use high standards of engineering <br />solutions to create space as useful as possible</h4>
          <div className="over w-full h-[120vh] mt-[150px]! flex items-center justify-center pr-[60px]!">
            <div className="igs hoveractive w-[65%] h-[75%] bg-[url(https://selemen.liqium.com/img/j2.jpg)] bg-cover bg-center overflow-hidden transition-all duration-1000 ease-in-out flex flex-col items-center justify-center">
              <h5 className="text-[1vw] text-[#fff] font-[500] transition-all duration-500 ease-in-out opacity-70">Commercial</h5>
              <h2 className="text-[2vw] text-[#fff] font-[600] transition-all duration-500 ease-in-out opacity-70">Premises</h2>
            </div>
          </div>
        </div>
        <div id="right" className="w-[50%] h-full flex items-center flex-col text-center py-[25px]! px-0">
          <h3 className="font-[500] text-[#A9ABB5]">02</h3>
          <h4 className="mt-[35px]! font-[400] text-[14px] text-[#A9ABB5]">We use high standards of engineering <br />solutions to create space as useful as possible</h4>
          <div className="over w-full h-[120vh] mt-[150px]! flex items-center justify-center pl-[60px]!">
            <div className="igs w-[65%] h-[75%] bg-[url(https://selemen.liqium.com/img/j3.jpg)] bg-cover bg-center overflow-hidden transition-all duration-1000 ease-in-out flex flex-col items-center justify-center">
              <h5 className="text-[1vw] text-[#fff] font-[500] transition-all duration-500 ease-in-out opacity-70">Homes</h5>
              <h2 className="text-[2vw] text-[#fff] font-[600] transition-all duration-500 ease-in-out opacity-70">appartments</h2>
            </div>
          </div>
        </div>
      </section>

      <section id="page4" className="h-[120vh] w-full flex items-center justify-center overflow-hidden" data-scroll-section>
        <div className="w-[45%] mt-[160px]">
          <img className="origin-left" src="https://selemen.liqium.com/img/80r.svg" alt="" /> {/* origin-left is to set transform origin to left side */}
        </div>
      </section>
    </div>
  )
}

export default App
