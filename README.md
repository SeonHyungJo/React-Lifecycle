**React-LifeCycle(리액트 라이프사이클)**
===

## 도입부분

요즈음 facebook을 보다가 요즘에 들어서 JavaScript나? React관련된 페이지 추가를 해놓으니까 사람들이 참 글을 많이 올려놓더라

중간중간 도움이 되는 내용도 나오는 것을 보고 나니 나도 스크랩을 하고, 사람들이 자신이 작성한 블로그의 내용을 올리는 분들도 있는데 그런분들 블로그에 들어가서 읽어보고 지식 하나라도 얻어가는 재미에?

지하철이나 일을 하다 중간에 쉬는 시간에 지식을 쌓아가고 있다. 역시나 회사에서 하는 일에만 집중을 하다보면 어느 순간 내가 하고 싶었던 개발이나? 또는 나의 실력이 정체가 되어 여기서 늘어날 수 없을 거 같다는 생각을 한다. 

역시 자신의 사이드 프로젝트는 진행하라는 이유가 여기서 나오는 것 같다.

길어졌지만 한분이 오랜만에 라이프 사이클(life-cycle)에대해서 일깨워주는 글을 올려주셔서 오늘은 제대로 정리를 해보자는 생각에 작성을 했다.

---

## 라이프 사이클이란?

한국말로는 `생태주기`라고 간단히 구글에서는

```
라이프 사이클, life cycle

명사 
1.생물학생리학＝생활사(生活史)①.
2.유통 또는 마케팅 분야에서, 제품이 시장에 도입되어 쇠퇴하기까지의 과정.
```

2번에 좀 더 초점을 맞춰보면....

**제품이 시장에 도입되어 쇠퇴하기까지의 과정.**

즉 웹에서 화면이 그려지기 전부터 사라지기까지의 과정이라고 생각하는게 제일 쉬운 것 같습니다.

각각의 라이브러리나, 프레임워크마다 각자의 라이프사이클이 존재합니다. 개발자들이 개발을 하다보면 각각의 기능, 메소드같은 것들이 어느 시점에서 실행되고 작동되기를 바랍니다.

예를 들어 나는 웹페이지가 그려지기 전에 데이터를 가져오고 싶거나, 중간에 Client가 입력을 하는 순간에 어느 행위를 넣고 싶어, 또는 다시 그려질때 할거야, 다른 페이지로 이동 직전에 할거야 같은 여러 조건들이 충족하는 시점에 넣어줘야합니다. 

이에 라이프사이클이 도움을 주게 됩니다. 

---

## React에서의 라이프사이클


16.3 & 16.4 라이프사이클 : http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

기존의 라이프사이클 => https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html 


먼저 현재 제가 작성하고 있는 기준 React ver16.4.1입니다. React가 16.3에서 새로운 Lifecycle를 추가하고 적절하지 못한 것을 빼고 16.4에서 약간의 수정을 거치면서 헷갈리는 부분이 생길 수 있습니다. 

그냥 제가 볼때는 현재를 기준으로 최신의 것을 아는게 중요하다고 생각합니다. 또한 var 17에서는 기존에 권고 하던 것들을 다 없앤다고 하니깐요.

---

React에서 LifeCycle은 크게 3가지로 볼 수 있습니다.

1. Mounting(초기)
2. Updating(업데이트)
3. UnMouning(해체)

---

## Mounting 

기본적으로 여기에 속하는 Method는 Component에 Instance를 작성해 DOM에 삽입합니다.

- **Constructor()** : 흔히 우리가 생성자라고 부르는 넘
- static getDerivedStateFromProps() : 16.3에서 새로 추가된 넘
- **render()** : 우리가 제일 잘 알고있는 그리는 넘
- **componentDidMount()** : 생성되고 다 그려지고 나서

위의 굵게 칠해진 것이 우리가 기존에 사용하고 잘 사용하는 Method입니다.

위의 내용들을 정말 간단히 살펴보면(내가 정리를 해야하니까)

### Constructor()

흔히 우리가 생성자라고 부르는 Method입니다.

props로 넘어온 인자들을 state에 담을때나, event handler method를 바인딩 할때(흔히 this를 바인딩할때), 사용됩니다.

**그러나 우리가 흔히 state를 변경할 때 사용하는 setState()를 여기에서 사용하면 안됩니다.!!!** 

```
constructor(props) {
    super(props); // state선언시 super()를 사용해서 초기화
    // Don't call this.setState() here!
    this.state = { counter: 0 };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
}
```

여기서!!!
constructor안에서 super()를 꼭 해야하나? 라는 생각을 새ㅓ 찾아보았습니다.

https://medium.com/@umioh1109/react-es6-class-constructor%EC%97%90%EC%84%9C%EC%9D%98-super-9d53ba0611d9static


쉽게 말해서 constuctor안에서 사용할 것을 선언해주는 것이라고 생각하시면 될 듯합니다.

### getDerivedStateFromProps(props, state)

Mounting에서 getDerivedStateFromProps()는 constructor()다음으로 실행이 이루어진다. 기본적으로 매개변수는 `props, state`로 되어있으며 2개간의 비교를 통해서 `return` 값을 통해서 `setState()`를 진행할 수 있게된다.

변화가 없다면 `return null;`를 한다.

**꼭 return이 있어야 한다.**
없다면 콘솔창에 에러가 발생하게 된다.

```
return { add: props.add } = setState{ add: props.add }
```

### render()

이 render는 화면을 그리는 jsx가 담기는 부분으로 누구나 아실거라고 생각합니다.

그리고 `new Props, setState(), forceUpdate()`가 이루어지면 화면이 바뀌는 것을 이미 모두들 아시죠?

즉 부모의 state가 변경이 이루어졌거나, 자신의 state가 바뀌었거나 마지막으로 강제적으로 update를 행했을때 화면이 render되게 됩니다.

### componentDidMount()

화면이 그려지고 즉각적으로 실행이 이루어집니다.

화면이 그려지고 ajax로 데이터를 불러올때 이부분을 사용한다고 합니다.

---

## Updating

Updating이라 함은 우리가 흔히 알고 있는 새로운 정보가 들어와서 바꾸어준다는 것이다.

---

Update되는 경우에는 크게 3가지로 볼 수 있습니다.

1. New Props : 해당 컴포넌트에 새로운 Props값이 들어온 경우
2. setState() : state에 새로운 값을 넣는경우
3. forceUpdate() : 강제로 내가 Updating를 시키는 경우 => 단 shouldComponentUpdate() 경우를 지나지 않고 바로 render()과정을 불러줍니다.

---

### static getDerivedStateFromProps()

위의 내용과 동일

Updating에서 getDerivedStateFromProps()는 위의 3가지 경우 모두 16.4이후로 무조건 거치는 경우의 함수이다.

### shouldComponentUpdate()

render()가 이루어지기 직전에 발생하는 경우입니다.

흔히 우리가 사용하는 경우는 성능의 최적화를 위해서 합니다. React에서 부모의 컴포넌트의 state가 변했을때 자식의 props까지 영향이 미친다면...

당연히 자식에게 New Props가 발생이 되고 3가지 경우 중 1번째에 해당함으로 render()가 행해지려고 하는데

만약에 기존의 props와 새로운 props가 같다면 re-render를 하는 것은 손해에 가깝습니다. 그래서 이런 경우를 방지하기 위해서 많이 사용됩니다.

shouldComponentUpdate(nextProps, nextState)결과값으로는 `boolean` 값으로 `return false`를 할 경우 이 뒤에 일어나는 함수는 실행이 되지 않습니다.

즉 render()이 이루어지지 않습니다.

### render()

위와 동일

### getSnapshotBeforeUpdate()

render()가 이루어지고 DOM이 변하기 전에 실행되는 함수입니다.

공식사이트에서는 현재의 스크롤 위치를 가져올 때 사용한다고 되어있는데 잘모르겠음...

그리고 `return`값으로는 제가 원하는 값을 보내며 `snapshot`이라는 매개변수로 받습니다. 

그것이 바로 뒤에서 나오는 componentDidUpdate()에서 부릅니다.그러면 getSnapshotBeforeUpdate()에서 DOM이 처리가 되고 적용되어야하는 것을 미리 구한다음에 componentDidUpdate()에 넘긴다고 생각하면 쉬울 듯 합니다.

### componentDidUpdate()

componentDidUpdate(prevProps, prevState, snapshot)이제 여기서 위에서 가져온 snapshot과 props, state를 가지고 마지막 처리를 하는 단계 입니다.

---

## Unmounting

### componentWillUnmount()

너무나도 심플하게 1개만 존재합니다. 화면이 지워지고 나면 실행이 되는 함수입니다.

---

## Error Handling

에러 핸들링에러처리를 위한 즉 `try catch...` 같은 함수가 존재하네요

### componentDidCatch()

```
componentDidCatch(error, info)
```

## 참조

- [React 공식 사이트](https://reactjs.org/docs/react-component.html)