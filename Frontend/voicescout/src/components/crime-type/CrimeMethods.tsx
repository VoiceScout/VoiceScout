import React from 'react'
import style from "./CrimeMethods.module.css";
import phone1 from "img/methods1.png";
import phone2 from "img/methods2.png";
import { useState, useRef, useEffect } from "react";


export default function CrimeMethods() {
    const [buttonState, setButtonState] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    const buttonTab = (index:number) => {
        setButtonState(index);
      }
    
      useEffect(() => {
        const scrollHandler = (e: WheelEvent) => {
          e.preventDefault();
          const container = scrollRef.current;
          if (container) {
            const containerScrollPosition = container.scrollLeft;
            container.scrollTo({
              top: 0,
              left: containerScrollPosition + e.deltaY,
            });
          }
        };
        const container = scrollRef.current;
        if (container) {
          container.addEventListener('wheel', scrollHandler, { passive: false });
        }
        return () => {
          if (container) {
            container.removeEventListener('wheel', scrollHandler);
          }
        };
      }, [scrollRef]);
  return (
    <div className={style.content_scroll}>
        <div className={style.content_box}>
            <div className={style.button_tap}>
                <button className={buttonState === 1 ? style.tabbutton_on + " " + style.tabbutton: style.tabbutton} onClick={() => buttonTab(1)}>기관사칭형</button>
                <button className={buttonState === 2 ? style.tabbutton_on + " " + style.tabbutton: style.tabbutton} onClick={() => buttonTab(2)}>대출사기형</button>
            </div>
        </div>
        <div className={buttonState === 1 ? style.tabcontent_on + " " + style.tabcontent : style.tabcontent}>
            <div ref={scrollRef} className={style.wrap}>
                <div className={style.phone_img}>
                    <img src={phone1} alt="phone_img"></img>
                </div>
                <div className={style.chat_box}>나도 모르는 소액결제<br />문자 주문한 적 없는 소액결제에 당황한 A씨는 해당업체에 전화를 걸었다.</div>
                <div className={style.chat+" "+ style.ch2}>
                    <div className={style.icon + " "+ style.right_male}></div>
                    <div className={style.textbox}>제가 결제하지도 않은 상품이 결제되었다고 문자가 와서요</div>
                </div>
                <div className={style.chat +" "+ style.ch1}>
                    <div className={style.icon + " "+ style.left_criminal}></div>
                    <div className={style.textbox}>전산상에는 고객님 명의로 결제가 된 것으로 나옵니다. <br />
                    최근 고객님 같이 명의 도용 사례가 많은데 저희가 경찰에 바로 접수해드리겠습니다.</div>
                </div>
                <div className={style.border_box}>잠시 후 걸려오는 한 통의 전화</div>
                <div className={style.chat +" "+ style.ch1}>
                    <div className={style.icon + " "+ style.left_criminal}></div>
                    <div className={style.textbox}>서울지방경찰청 사이버수사대 이○○ 수사관입니다.<br />
                    약식조사에 앞서 금융거래내역 및 본인 인증이 필요하니 휴대폰에 '팀 뷰어'라는 앱을 검색해서 설치하세요.</div>
                </div>
                <div className={style.border_box}>피해자가 ‘팀 뷰어’(원격제어)앱을 설치하자 범인2는 피해자 휴대폰 에 원격 접속하여 악성코드를 설치하였다.<br />악성코드가 설치되면 피해자가 어떤 번호로 전화를 하더라도 범인에게 전화가 연결된다.(전화가로채기수법)</div>
                <div className={style.chat +" "+ style.ch1}>
                    <div className={style.icon + " "+ style.left_criminal}></div>
                    <div className={style.textbox}>사건을 서울중앙지검에서 하고 있으니 서울중앙지검에 전화해서 박○○ 검사를 찾으세요.</div>
                </div>
                <div className={style.border_box}>피해자는 서울중앙지검 대표번호(00-0000-0000)로 전화를 걸지만 악성코드가 설치되어 범인3에게 연결된다.</div>
                <div className={style.chat +" "+ style.ch1}>
                    <div className={style.icon + " "+ style.left_criminal}></div>
                    <div className={style.textbox}>서울중앙지검 첨단수사부 박○○ 검사입니다.<br />
                    현재 선생님의 통장은 불법자금 세탁계좌로 보이며, 제가 지금 불러주는 서울중앙지검 인터넷 사이트에 <br />
                    접속하셔서 사건번호를 확인하시고, 선생님의 카톡으로 공문도 발송해드리겠습니다.</div>
                </div>
                <div className={style.border_box}>이때 범인3은 서울중앙지검 가짜 인터넷 주소를 알려주고, 가짜 공문을 카톡으로 피해자에게 전송하자,
                <br />피해자는 범인3을 전적으로 신뢰하게 되었다.</div>
                <div className={style.chat +" "+ style.ch1}>
                    <div className={style.icon + " "+ style.left_criminal}></div>
                    <div className={style.textbox}>지금부터 타인의 음성이 섞이거나 사건에 대하여 발설하는 것이 확인되면<br />
                    혐의를 인정하는 것으로 여기고 구속수사까지 될 수 있으니<br />
                    주변에 사람이 없는 조용한 곳으로 이동하세요.</div>
                </div>
                <div className={style.chat +" "+ style.ch1}>
                    <div className={style.icon + " "+ style.left_criminal}></div>
                    <div className={style.textbox}>대구 남구에 거주하는 40대 남성 홍○○을 알고 있으신가요?</div>
                </div>
                <div className={style.chat+" "+ style.ch2}>
                    <div className={style.icon + " "+ style.right_male}></div>
                    <div className={style.textbox}>저는 처음 듣는 사람인데... 대포통장이라니요.</div>
                </div>
                <div className={style.chat +" "+ style.ch1}>
                    <div className={style.icon + " "+ style.left_criminal}></div>
                    <div className={style.textbox}>본인은 자꾸 모르신다고 하는데,<br />
                    본인 명의의 대포통장을 타인에게 금전의 대가를 받고 파신건지 확인을<br />
                    해봐야 알고요. 지금 본인은 피해자인지 가해자인지 사인이 불분명해요.<br />
                    지금부터 수사를 위해서 통장거래내역, 카드사용 내역 확인이 필요합니다.<br />
                    금융감독원 직원을 연결할테니 협조해 주세요.</div>
                </div>
                <div className={style.chat +" "+ style.ch1}>
                    <div className={style.icon + " "+ style.left_criminal}></div>
                    <div className={style.textbox}>금융감독원 최○○ 과장입니다. 현재 경찰, 검찰과 합동 수사중에 있으며 선생님의 무혐의를<br />
                    입증하고 범인을 검거하기 위해선 본인 계좌의 통장거래내역, 카드 사용 확인이 필요합니다.<br />
                    지금부터는 수사상 보안을 유지해야 합니다. 본인도 보실수 없기 때문에<br />
                    휴대폰 화면을 뒤집퍼 놓고 스피커폰으로 사건 진행하도록 하겠습니다.<br />
                    이미 본인 계좌는 보안상의 문제가 있기 때문에 OTP카드에 생성되는 번호를 알려주세요.</div>
                </div>
                <div className={style.chat+" "+ style.ch2}>
                    <div className={style.icon + " "+ style.right_male}></div>
                    <div className={style.textbox}>네? 그건 조금...</div>
                </div>
                <div className={style.chat +" "+ style.ch1}>
                    <div className={style.icon + " "+ style.left_criminal}></div>
                    <div className={style.textbox}>지금 제가 도와드리고 있는 거에요.<br />
                    본인의 무혐의를 입증하기 위해선 금융 거래 등을 알아야 하기 때문에...</div>
                </div>
                <div className={style.border_box}>결국, 수사에 협조하지 않으면 구속 될수 있다는 말에 압박을 느낀 피해자는 순순히 수사기관이 지시하는대로 따랐고,<br />
                    피해자가 대학등록금과 생활비를 위해 힘겹게 아르바이트로 모은 900만원이 인출되었다.</div>
            </div>
        </div>


        <div className={buttonState === 2 ? style.tabcontent_on + " " + style.tabcontent : style.tabcontent}>
            <div ref={scrollRef} className={style.wrap}>
                <div className={style.phone_img}>
                    <img src={phone2} alt="phone_img"></img>
                </div>
                <div className={style.chat_box}>자영업을 하는 피해자A씨는 코로나19 장기화로 인한 경영난에 힘들어하던 중 문자 1통을 받고 전화를 걸게 되는데...</div>
                <div className={style.chat+" "+ style.ch2}>
                    <div className={style.icon + " "+ style.right_female}></div>
                    <div className={style.textbox}>문자 보고 연락드리는데 ○○저축은행 맞나요?</div>
                </div>
                <div className={style.chat +" "+ style.ch1}>
                    <div className={style.icon + " "+ style.left_criminal}></div>
                    <div className={style.textbox}>네. 고객님 ○○저축은행 상담원 이○○입니다. 무엇을 도와드릴까요?</div>
                </div>
                <div className={style.chat+" "+ style.ch2}>
                    <div className={style.icon + " "+ style.right_female}></div>
                    <div className={style.textbox}>문자내용대로 정말로 2.5%로 대출이 가능한거에요?</div>
                </div>
                <div className={style.chat +" "+ style.ch1}>
                    <div className={style.icon + " "+ style.left_criminal}></div>
                    <div className={style.textbox}>네 코로나19로 어려움에 빠져 있는 국민들을 위한 정부특별지원상품이라서<br />
                    간단한 대출조건만 갖추면 가능합니다. 지금 다른 은행에서 대출받으신 거 있으세요?</div>
                </div>
                <div className={style.chat+" "+ style.ch2}>
                    <div className={style.icon + " "+ style.right_female}></div>
                    <div className={style.textbox}>XX은행에서 5천만원 대출한게 있습니다.</div>
                </div>
                <div className={style.chat +" "+ style.ch1}>
                    <div className={style.icon + " "+ style.left_criminal}></div>
                    <div className={style.textbox}>네, 그럼 먼저 고객님 신용등급 조회를 해야 하니<br />
                    지금 보내드리는 문자에 있는 링크를 누르셔서 앱을 설치하세요.</div>
                </div>
                <div className={style.border_box}>범인이 보낸 링크를 클릭하면 악성앱이 설치되어 피해자가 어떤 번호로 전화를 걸더라도 범인에게 연결(전화가로채기수법)</div>
                <div className={style.chat +" "+ style.ch1}>
                    <div className={style.icon + " "+ style.left_criminal}></div>
                    <div className={style.textbox}>조회해보니 고객님의 XX은행 기존대출건을 일부 상환하셔야합니다.<br />
                    그래야 신용등급이 상향되서 연이율 2.5%로 최대 9천만원까지 대출이 간으하세요.<br />
                    XX은행에 전화하셔서 상환절차부터 진행하시면 됩니다.</div>
                </div>
                <div className={style.border_box}>(XX은행 대표번호로 전화를 걸어 대출금 상환을 문의하는 피해자 A씨) <br />대표번호로 전화했지만 악성앱이 설치되어 있어 범인에게 전화가 연결</div>
                <div className={style.chat +" "+ style.ch1}>
                    <div className={style.icon + " "+ style.left_criminal}></div>
                    <div className={style.textbox}>내일 10시에 고객님 가게로 저희 직원이 갈테니까 현금 준비하셔서 전달하시면 됩니다.</div>
                </div>
                <div className={style.border_box}>다음 날 피해자 A씨는 조금이라도 이자를 절약하기 위해 수소문 끝에 친척에게 빌린 3,500만원을 XX은행 직원에게 전달한다.</div>
            </div>
        </div>
    </div>
  )
}
