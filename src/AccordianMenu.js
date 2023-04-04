import { useRef, useState } from "react";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";

const UL = styled.ul`
width: 1200px;
margin:0 auto;
color: #fff;
`

const LI = styled.li`
color: #fff;
`
const Ae = styled.div`
display: none;
&.on {
    display: block;
}
`


const AccordianMenu = () => {

    const MENU_LIST = [
        { title: '넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?', desc: '넷플릭스는 장편 영화, 다큐멘터리, 시리즈, 애니메이션, 각종 상을 수상한 넷플릭스 오리지널 등 수많은 콘텐츠를 확보하고 있습니다. 마음에 드는 콘텐츠를 원하는 시간에 원하는 만큼 시청하실 수 있습니다.' },
        { title: '넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?', desc: '넷플릭스는 장편 영화, 다큐멘터리, 시리즈, 애니메이션, 각종 상을 수상한 넷플릭스 오리지널 등 수많은 콘텐츠를 확보하고 있습니다. 마음에 드는 콘텐츠를 원하는 시간에 원하는 만큼 시청하실 수 있습니다.' },
        { title: '넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?', desc: '넷플릭스는 장편 영화, 다큐멘터리, 시리즈, 애니메이션, 각종 상을 수상한 넷플릭스 오리지널 등 수많은 콘텐츠를 확보하고 있습니다. 마음에 드는 콘텐츠를 원하는 시간에 원하는 만큼 시청하실 수 있습니다.' },
        { title: '넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?', desc: '넷플릭스는 장편 영화, 다큐멘터리, 시리즈, 애니메이션, 각종 상을 수상한 넷플릭스 오리지널 등 수많은 콘텐츠를 확보하고 있습니다. 마음에 드는 콘텐츠를 원하는 시간에 원하는 만큼 시청하실 수 있습니다.' },
        { title: '넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?', desc: '넷플릭스는 장편 영화, 다큐멘터리, 시리즈, 애니메이션, 각종 상을 수상한 넷플릭스 오리지널 등 수많은 콘텐츠를 확보하고 있습니다. 마음에 드는 콘텐츠를 원하는 시간에 원하는 만큼 시청하실 수 있습니다.' },
        { title: '넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?', desc: '넷플릭스는 장편 영화, 다큐멘터리, 시리즈, 애니메이션, 각종 상을 수상한 넷플릭스 오리지널 등 수많은 콘텐츠를 확보하고 있습니다. 마음에 드는 콘텐츠를 원하는 시간에 원하는 만큼 시청하실 수 있습니다.' },
        { title: '넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?', desc: '넷플릭스는 장편 영화, 다큐멘터리, 시리즈, 애니메이션, 각종 상을 수상한 넷플릭스 오리지널 등 수많은 콘텐츠를 확보하고 있습니다. 마음에 드는 콘텐츠를 원하는 시간에 원하는 만큼 시청하실 수 있습니다.' },

    ];

    const [activeIndex, setActiveIndex] = useState(false);
    const [on, setOn] = useState(false);

    const onClick = (e) => {
        [...e.target.parent.parent.children].forEach(it => it.childElement.classList.remove('on'))
        e.target.nextElementSibling.classList.toggle('on')
    }
    const onClick2 = (idx) => {
        aa.current[idx].classList.add('on')
    }

    const aa = useRef([])


    return (
        // 1단 메뉴 부분 
        // ListItem 하나 하나가 <li>이다
        <ul>
            {
                MENU_LIST.map((it, idx) => <li>
                    <div onClick={() => onClick2(idx)} >Q {it.title}</div>
                    <Ae ref={el => aa.current[idx] = el} className={on ? 'on' : ''}>A {it.desc}</Ae>
                </li>)
            }
        </ul>
    );



};

export default AccordianMenu