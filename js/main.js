//console.log("JS")
const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function(){
    //발생내용 logic 작성
    searchInputEl.focus()
})

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused')
    searchInputEl.setAttribute('placeholder', '통합검색')
})
searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused')
    searchInputEl.setAttribute('placeholder', '')
})

// badge scroll
const badgeEl = document.querySelector('header .badges')

window.addEventListener('scroll',_.throttle(function(){
    console.log('scroll!')
    if (window.scrollY > 500){
        // 배지 숨기기
        // gsap.to(요소, 시족시간, 옵션)
        // badgeEl.style.display = 'none'
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        })
        // 하단 to-top 버튼 보이기
        gsap.to('#to-top', .2, {
            x: 0
        })

    } else {
        // 배지 표시
        // badgeEl.style.display = 'block'
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        })
        // 하단 to-top 버튼 숨기기
        gsap.to('#to-top', .2, {
            x: 100
        })
    }
},300)) // _.throttle(함수, 시간)

// 하단 to-top 버튼 동작
const toTopEl = document.querySelector('#to-top')
toTopEl.addEventListener('click', function(){
    gsap.to(window, .6, {
        scrollTo: 0
    })
})

// visual fade-in 효과
const fadeEl = document.querySelectorAll('.visual .fade-in')
fadeEl.forEach(function(fadeEl,index){
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7,
        opacity: 1
    })
})

// swiper

new Swiper('.notice-line .swiper', {
    direction: 'vertical',
    loop: true,
    autoplay: true
})

// promotion swiper
new Swiper('.promotion .swiper', {
    slidesPerView: 3, //한번에 보여주는 슬라이드 개수
    spaceBetween: 10, //슬라이드 사이 여백
    centeredSlides: true, //1번 슬라이드가 가운데부터 시작
    loop: true,
    //autoplay: {
    //    delay: 5000
    //}
    pagination: {
        el: ".promotion .swiper-pagination", //페이지 번호 요소 선택
        clickable: true //사용자의 ㅔ이지 번호 요소 제어
    },
    navigation: {
        nextEl: ".promotion .swiper-button-next",
        prevEl: ".promotion .swiper-button-prev"
    }
})

// awards-swiper
new Swiper('.awards .swiper',{
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        nextEl: ".awards .swiper-button-next",
        prevEl: ".awards .swiper-button-prev"
    }
})

// starbucks promotion
const promotionEl = document.querySelector('.promotion')
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false

promotionToggleBtn.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion
    if(isHidePromotion){
        // 숨김 처리
        promotionEl.classList.add('hide')
    }else{
        // 노출 처리
        promotionEl.classList.remove('hide')
    }
})

// 랜덤(무작위)함수 사용하기
function random(min,max){
    // `.toFixed()`를 통해 반환되는 문자 데이터를,
    // `parseFloat()`
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

// youtube icon ani
function floatingObject(selector, delay, size){
    gsap.to(
        selector, random(1.5, 2.5), {
        y: size,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: random(0, delay)
    })
}
floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5, 15)
floatingObject('.floating3', 1.5, 20)

// scrollMagic
const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function(spyEl){
    new ScrollMagic
    .Scene({ // 감시함 장면(scene) 추가
        triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
        triggerHook: .8 //감시하는 요소가 뷰포티의 어떤 지점에 있을 때 실행되는 자
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스를 추가
    .addTo(new ScrollMagic.Controller()) // 컬트롤러에 장면 할당하면서 실행(필수)
})

// 올해 연도 구하기
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()