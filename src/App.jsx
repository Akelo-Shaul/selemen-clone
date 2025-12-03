import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/SplitText"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"

function App() {

  gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText)

  useGSAP(() => {
    
    // set default scroller so individual ScrollTrigger configs (like herosection) don't have to repeat it
    ScrollTrigger.defaults({
      // markers: {
      //   startColor: "grey",
      //   endColor: "gold",
      //   fontSize: "22px",
      //   indent: 10
      // }
     })

    function loader() {
      var tl1 = gsap.timeline({
        defaults: {
          duration: 1,
        }
      })

      tl1.from('#ig6',{
        scale: 0,
      }, 'a')
      .from('#ig3',{
        scale: 0,
        delay: .2,
      }, 'a')
      .from('#ig4',{
        scale: 0,
        delay: .4,
      }, 'a')
      .from('#ig5',{
        scale: 0,
        delay: .6,
      },'a')
      .from('#ig7', {
        scale: 0,
        delay: .8,
      }, 'a')
      .from('#ig2', {
        scale: 0,
        delay: 1,
      }, 'a')
      .from('#ig1', {
        scale: 0,
        delay: 1.2,
      }, 'a')
      .from('.heading img', {
        // transform: 'translateY(100%)',
        yPercent: 100,
        delay: .7,
        duration: .8
      }, 'a')
    }
    loader()

    function herosection() {
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.herosection',
          // scroller: '[data-scroll-container]',
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
      // .to('#head', {
      //   opacity: 0,
      //   delay: .25
      // }, 'a')
    }
    herosection()

    function page2() {
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#page2',
          // scroller: '[data-scroll-container]',
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
          // scroller: '[data-scroll-container]',
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
          // scroller: '[data-scroll-container]',
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
          // scroller: '[data-scroll-container]',
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
          // scroller: '[data-scroll-container]',
          // markers: true,
          start: '16% 0%',
          end: 'top -150%',
          scrub: 1,
          pin: true
        }
      })      
    }
    eightyAnimation()

    function page5() {
      var tl5 = gsap.timeline({
        scrollTrigger: {
          trigger: "#page5",
          start: "top 0%",
          end: "top -300%",
          scrub: 2,
          pin: true
        }
      })
      tl5.to("#pt1", {
        // clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
          clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0 0%)",
      },"a")
      .to("#pt2",{
          clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0 0%)",
      },"a")
      .to("#pt3",{
          clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0 0%)",
      })
    }
    page5()

    function page6() {
      var tl6 = gsap.timeline({
        scrollTrigger: {
          trigger: "#page6",
          start: "top 65%",
          end: "top 40%",
          scrub: 2
        }
      })
      tl6.from("#line6-vt",{
        height: "0"
      }, "h")
      .from("#line6", {
        width: 0
      }, "h")
      .from("#line6-h", {
        width: 0
      }, "h")
      .from("#linee", {
        width: 0
      }, "h")
    }
    page6()

    function page7() {
      const slide = document.querySelector("#slide7");
      const text = slide.querySelector("h1")

      slide.appendChild(text.cloneNode(true))

      const textWidth = text.offsetWidth

      gsap.to(slide, {
        x: -textWidth,
        duration: 30,
        repeat: -1,
        ease: "none"
      })
    }
    page7()

    function page8(){
      gsap.to("#page8 img", {
        yPercent: 20,
        scrollTrigger: {
          trigger: "#page9",
          start: "top bottom",
          end: "top -10%",
          scrub: true,
        }
      });
    }
    page8()
    
    function page9() {
      const over = document.querySelectorAll("#page9 .over")

      over.forEach(function(ov){
        gsap.to(ov, {
          width: "0%",
          scrollTrigger: {
            trigger: ov,
            start: "top bottom",
            end: "top -20%",
            scrub: true
          }
        })
      })

      document.querySelectorAll("#page9 img[data-scroll-speed]").forEach((el) => {
        const speed = parseFloat(el.getAttribute("data-scroll-speed"));

        gsap.to(el, {
          yPercent: speed * -20, // adjust multiplier for dramatic effect
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });

    }
    page9()

    function page10() {
      var tl10 = gsap.timeline({
        scrollTrigger: {
          trigger: "#page10",
          start: "top 70%",
          end: "top 40%",
          scrub: 2
        }
      })
      tl10.from("#li1", {
        width: 0
      },"t")
      tl10.from("#li2", {
        height: 0
      }, "t")
    }
    page10()

    function page11() {
      const ii1 = document.querySelector("#ii1");
      const ii2 = document.querySelector("#ii2");
      const ii3 = document.querySelector("#ii3");

      var tl11 = gsap.timeline({
        scrollTrigger: {
          trigger: "#page11",
          start: "top 60%",
          ease: "power2.out",
          scrub: 2
        }
      })
      tl11.to("#ii1",{
        yPercent: parseFloat(ii1.getAttribute("data-scroll-speed")) * -20
      }, "p")
      tl11.to("#ii2",{
        yPercent: parseFloat(ii2.getAttribute("data-scroll-speed")) * -20
      }, "p")
      tl11.to("#ii3",{
        yPercent: parseFloat(ii3.getAttribute("data-scroll-speed")) * -20
      }, "p")
    }
    page11()

    function page13(){
      var tl13 = gsap.timeline({
        scrollTrigger: {
          trigger: "#page13",
          start: "top 45%",
          end: "top -30%",
          scrub: 2
        }
      })
      tl13.from("#page13 #one", {
        y: "25%"
      },"r")
      tl13.from("#page13 #two", {
        y: "45%"
      },"r")
      tl13.from("#page13 #three", {
        y: "36%"
      },"r")
    }
    page13()

    function page14() {
      var tl14 = gsap.timeline({
        scrollTrigger: {
          trigger: "#page14",
          start: "top 70%",
          end: "top 10%",
          scrub: 2
        }
      })
      tl14.from("#line14-v",{
        height: "0"
      }, "o")
      tl14.from("#line14", {
        width: "0"
      }, "o")
      tl14.from("#line15",{
        width:"0"
      }, "o")
      tl14.from("#line16",{
        width:"0"
      }, "o")
      tl14.from("#line17",{
        width:"0"
      }, "o")
      tl14.from("#line18",{
        width:"0"
      }, "o")
    }
    page14()

    function page15() {
      gsap.to("#page15 .elem:first-child img", {
        yPercent: -30,  // Positive value for slower upward scroll
        ease: "none",
        scrollTrigger: {
          trigger: "#page15 .elem:first-child",
          start: "top bottom",
          end: "bottom top",
          scrub: 1  // Slight delay for smoother effect
        }
      })
    }
    page15()

    function footer() {
      var tlf = gsap.timeline({
        scrollTrigger: {
          trigger: "#footer",
          start: "top 80%",
          end: "top 60%",
          scrub: 2
        }
      })
      tlf.from("#fl", {
        height: "0"
      })

      var split = new SplitText("#foot h1", {type: "chars"});

      gsap.from(split.chars, {
        y: "-100%",
        stagger: 0.05,
        scrollTrigger: {
          trigger: "#foot",
          start: "top 60%",
          end: "top 40%",
          scrub: 2
        }
      })
    }
    footer()

    ScrollTrigger.refresh()
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
    <div className="w-full h-full">
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
        <div id="down" className="absolute top-[-30%] w-full h-[45vh] !py-[15px] !px-[40px] flex items-end justify-between">
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

      <section id="page5" className="relative w-full h-screen overflow-hidden" data-scroll-section >
        <div className="pt bg-[url(https://selemen.liqium.com/img/b1.jpg)] z-1" id="pt1">
          <div className="textt">
            <h1>apartments #80</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, itaque?</p>
          </div>
        </div>
        <div className="pt bg-[url(https://selemen.liqium.com/img/b2.jpg)] z-2" id="pt2">
          <div className="textt">
            <h1>sea of light</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, itaque?</p>
          </div>
        </div>
        <div className="pt bg-[url(https://selemen.liqium.com/img/b3.jpg)] z-3" id="pt3">
          <div className="textt">
            <h1>first number</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, itaque?</p>
          </div>
        </div>
      </section>

      <section id="page6" className="h-screen w-full flex flex-col items-center !py-0 !px-[40px]" data-scroll-section>
        <div id="elem1" className="relative w-full h-[18%] flex items-end justify-between !px-0 !py-[20px]">
          <h4 className="text-[#ffffff79] text-[16px] font-[400]">All apartments</h4>
          <h4 className="text-[#ffffff79] text-[16px] font-[400]">All premises</h4>
          <div id="line6" className="h-[1px] w-full bg-[#ffffff4f] absolute left-[50%] bottom-0 translate-x-[-50%]"></div>
          <div id="line6-vt" className="h-full w-[1px] bg-[#ffffff4f] absolute left-[50%] bottom-0 translate-x-[-50%]"></div>
        </div>
        <div id="elem2" className="relative w-full h-[18%] flex items-center justify-center">
          <button className="!py-[15px] !px-[30px] rounded-[50px] bg-[#35363D] text-[#ffffff79] text-[12px] font-[500]">Send Request</button>
          <div id="line6-h" className="h-[1px] w-full bg-[#ffffff34] absolute left-[50%] bottom-0 translate-x-[-50%]"></div>
        </div>
        <div id="elem3" className="relative w-full flex items-center justify-between mt-[180px]">
          <h4 className="text-[50px] font-[400] text-[#fff]">We will help <br /> you to implement</h4>
          <h4 className="text-[50px] font-[400] text-[#fff] translate-y-[50%] text-end">any design<br /> <span className="text-[#ffffff79]">solutions</span></h4>
          <div id="linee" className="absolute bottom-1/6 left-[33%] w-[47%] bottom-0 h-[1px] bg-[#ffffff34]"></div>
        </div>
        <div id="para" className="w-[35%] overflow-hidden !mt-[120px]">
          <p className="text-[20px] text-[#A9ABB5]">Selemen® — is a company for the construction and
              decoration of premises. We carry out projects on time,
              within budget and with an exceptional level of quality.</p>
        </div>
      </section>

      <section id="page7" className="h-[70vh] w-full flex items-center justify-center overflow-hidden relative" data-scroll-section>
        <div id="slide7" className="whitespace-nowrap flex">
          <h1 className="mr-[4vw]">Future by Selemen<sup className="text-[5vw]">®</sup></h1>
        </div>
      </section>

      <section id="page8" className="h-[110vh] w-full overflow-hidden" data-scroll-section>
        <img className="h-full w-full object-cover object-center" src="https://selemen.liqium.com/img/bg13.jpg" alt="" />
      </section>

      <section id="page9" className="relative !p-[20px] !pt-[200px] bg-[#151519] !pb-[300px] overflow-hidden" data-scroll-section>
        <img id="ig91" data-scroll data-scroll-speed="5" src="https://selemen.liqium.com/img/lt1.jpg" alt="" />
        <img id="ig92" data-scroll data-scroll-speed="4" src="https://selemen.liqium.com/img/lt2.jpg" alt="" />
        <img id="ig93" data-scroll data-scroll-speed="4" src="https://selemen.liqium.com/img/lt3.jpg" alt="" />
        <div>
          <div className="over"></div>
          <h1>Selemen®</h1>
        </div>
        <div>
          <div className="over"></div>
          <h1>provides a full</h1>
        </div>
        <div>
          <div className="over"></div>
          <h1>range of services</h1>
        </div>
        <div>
          <div className="over"></div>
          <h1>for interior</h1>
        </div>
        <div>
          <div className="over"></div>
          <h1>decoration</h1>
        </div>
        <div>
          <div className="over"></div>
          <h1>and construction</h1>
        </div>
        <div>
          <div className="over"></div>
          <h1>solutions turnkey</h1>
        </div>
        <div>
          <div className="over"></div>
          <h1>for residential</h1>
        </div>
        <div>
          <div className="over"></div>
          <h1>and commercial</h1>
        </div>
        <div>
          <div className="over"></div>
          <h1>Construction</h1>
        </div>
      </section>

      <section id="page10" className="h-[55vh] w-full bg-[#151519] !py-0 !px-[40px] flex flex-col justify-between">
        <h4>Advantages and facts</h4>
        <div id="about" className="relative flex items-end justify-between w-full h-[95%]">
          <div id="li1" className="absolute left-[50%] translate-x-[-50%] top-0 w-full h-[1px] bg-[#ffffff5f]"></div>
          <div id="li2" className="absolute left-[50%] translate-x-[-50%] top-0 w-[1px] h-full bg-[#ffffff5f]"></div>
          <h4>About company</h4>
          <h4>Services</h4>
        </div>
      </section>

      <section id="page11" className="relative h-[110vw] w-full bg-[url(https://selemen.liqium.com/img/bg1.jpg)] bg-cover bg-center flex flex-col items-center text-center" >
        <h1>Guarantee of <br /> reliability</h1>
        <p>And full information about <br />all stages of repair</p>
        <div id="ii1" data-scroll data-scroll-speed="2">
          <h4>01</h4>
          <h2>We implement <br />
          the most techically <br />
          complex design <br />
          and architectural <br />
          solutions</h2>
        </div>
        <div id="ii2" data-scroll data-scroll-speed="2">
          <h4>02</h4>
          <h2>We use the best <br />
          building materials <br />
          available in the market </h2>
        </div>
        <div id="ii3" data-scroll data-scroll-speed="2">
          <h4>03</h4>
          <h2>Jewellery precision of <br />
          work, due to the <br />
          professionalism and <br />
          experience of our <br />
          employees</h2>
        </div>
      </section>

      <section id="page12" className="h-[70vh] w-full bg-[#151519] text-center flex flex-col justify-end pb-[20px]">
        <h1>Wide range of <br /> solutions</h1>
        <p>We will help you to implement a project of <br /> any complexity</p>
      </section>

      <section id="page13" className="h-screen w-full bg-[#151519] flex items-center justify-between">
        <div className="elems">
          <div className="s1">
            <img className="im1" src="https://selemen.liqium.com/img/mv1.jpg" alt="" />
            <img className="im2" src="https://selemen.liqium.com/img/mv2.jpg" alt="" />
          </div>
          <div className="s2" id="one">
            <img className="im3" src="https://selemen.liqium.com/img/mv3.jpg" alt="" />
            <img className="im4" src="https://selemen.liqium.com/img/mv4.jpg" alt="" />
          </div>
        </div>
        <div id="two" className="elems"></div>
        <div className="elems" id="three">
          <div className="s2">
            <img className="im5" src="https://selemen.liqium.com/img/mv6.jpg" alt="" />
            <img className="im6" src="https://selemen.liqium.com/img/mv7.jpg" alt="" />
          </div>
          <div className="s1" id="one">
            <img className="im1" src="https://selemen.liqium.com/img/mv8.jpg" alt="" />
            <img className="im2" src="https://selemen.liqium.com/img/mv9.jpg" alt="" />
          </div>
        </div>
      </section>

      <section id="page14" className="relative h-[110vh] w-full !px-[40px] flex flex-col text-[#fff] !mt-[300px]">
        <div id="line14" className="w-[calc(100%-80px)] h-[1px] bg-[#ffffff5f] absolute top-0 left-[50%] -translate-y-1/2 -translate-x-1/2"></div>
        <div id="line14-v" className="!w-[1px] h-[51%] absolute bg-[#ffffff5f] top-0 left-[50%] -translate-x-1/2"></div>
        
        <div className="w-full relative">
          <h1 className="w-[48%] font-[500] text-[52px] leading-none !mt-[20px]">We are happy to answer your questions and discuss your projects</h1>
        </div>

        <form action="" className="flex relative flex-col gap-y-[40px] !mt-[80px]">
          <div id="line15" className="w-full h-[1px] bg-[#ffffff5f] absolute top-0 left-[50%] -translate-y-1/2 -translate-x-1/2"></div>
          <div className="flex !mt-[10px]">
            <div className="flex flex-1 items-start justify-start min-w-[200px] h-full">
              <input type="text" name="phone" placeholder="Phone" 
              className="w-full bg-transparent p-2 outline-none"
              />
            </div>
            <div className="flex-1 min-w-[200px] !ml-[40px]">
              <input type="email" name="email" placeholder="Email" required 
              className="w-full bg-transparent p-2 outline-none"/>
            </div>
          </div>
          <div id="line16" className="w-full h-[1px] bg-[#ffffff5f] absolute top-[25%] left-[50%] -translate-y-1/2 -translate-x-1/2"></div>
          <div className="!py-10">
            <input type="text" placeholder="Name"  
              className="w-full bg-transparent p-2 outline-none"/>
          </div>
          <div id="line17" className="w-full h-[1px] bg-[#ffffff5f] absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2"></div>
          <div>
            <input type="text" placeholder="Message"  
              className="w-full bg-transparent p-2 outline-none"/>
          </div>
          <div id="line18" className="w-full h-[1px] bg-[#ffffff5f] absolute top-[75%] left-[50%] -translate-y-1/2 -translate-x-1/2"></div>
          <div className="relative w-full h-[18%] flex items-center justify-center !mt-[80px]">
            <button className="!py-[15px] !px-[30px] rounded-[50px] bg-[#35363D] text-[#ffffff79] text-[12px] font-[500] !mb-[10px]">Send Request</button>
          </div>
        </form>
      </section>

      <section id="page15" className="h-[120vh] w-full">
        <div className="elem w-full h-[50%] overflow-hidden">
          <img data-scroll data-scroll-speed="-1.5" className="w-full h-full object-cover object-[0%_10%]" src="https://selemen.liqium.com/img/bg2n1.jpg" alt="" />
        </div>
        <div className="elem w-full h-[50%] overflow-hidden !pt-[60px] !px-[40px]">
          <div 
          className="info h-[30%] w-full !mt-[75px] bg-[linear-gradient(transparent_30%,rgba(143,142,142,0.168))] border-b border-[#ffffff5f] flex items-end gap-[550px] !p-[22px]">
            <h2 className="text-[20px] font-[400] text-[#ffffffaa]">Info@selemen.ru</h2>
          </div>
          <div className="info h-[30%] w-full !mt-[75px] bg-[linear-gradient(transparent_30%,rgba(143,142,142,0.168))] border-b border-[#ffffff5f] flex items-end gap-[550px] !p-[22px]">
            <h2 className="text-[20px] font-[400] text-[#ffffffaa]">WhatsApp</h2>
            <h2 className="text-[20px] font-[400] text-[#ffffffaa]">Telegram</h2>
          </div>
        </div>
      </section>

      <section id="footer" className="relative h-screen w-full !px-[40px] !py-0">
        <h3 className="font-[300] text-[#ffffff5d] !mb-[150px] text-[23px]">More than 20 years <br />
        of successful work </h3>
        <div id="fl" className="absolute top-0 left-[50%] -translate-x-1/2 w-[1px] h-[50%] bg-[#ffffff5f]"></div>
        <div id="foot" className="w-full flex items-end overflow-hidden">
          <h1 className="text-[25vw] font-[500] text-[#ffffff20] leading-none tracking-[-10px]">Selemen</h1>
        </div>
        <div id="bottom" className="h-[60px] w-full border-t border-[#ffffff5f] flex items-center justify-between ">
          <h2 className="font-[300] text-[#ffffff81]">©2025</h2>
          <h2 className="font-[300] text-[#ffffff81]">Made by <span className="text-[#ffffffde]"> WhiteLotisZ</span></h2>
        </div>
      </section>

    </div>
  )
}

export default App
