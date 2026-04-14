import { useEffect, useReducer, useState } from 'react';

const firstUser = {
  id: '0319-3233-3201',
  firstName: 'Bill',
  lastName: 'wilson',
  city: 'Missoula',
  state: 'Montana',
  email: 'bwilson@mtnwilsons.com',
  admin: 'false',
};

/* 상태가 여러 하위 값으로 구성되거나 다음 상태가 이전 상태에 의존적일때, 이런 패턴이 유용하다
    모든 팀원에게 스프레드를 가르치면 하루만 스프레드를 써먹겠지만, 모든 팀원에게
    useReducer를 가르치면 평생 스프레드를 써먹을 수 있다.
*/
export default function User() {
  // const [user, setUser] = useState(firstUser);
  const [user, setUser] = useReducer(
    (user, newDetails) => ({
      ...user,
      ...newDetails,
    }),
    firstUser,
  );
  /* 이렇게 하면 기존에 있던 데이터도 보존되고 새로 추가한게 기존 데이터 뒤에 놓여지면서 
    dispaly: none; display : flex;를 클래스 하나에 박아둔 효과가 난다.
    이제 새 상태값 newDetails을 리듀서에 보내면 프로터티가 객체에 추가되거나
    기존 프로퍼치가 갱신된다. 
  */
  useEffect(() => {
    console.log('맨 처음 깨끗한 상태 : ', user);
  }, []);

  return (
    <div>
      <h1>
        {user.firstName} {user.lastName} - {user.admin ? 'Admin' : 'user'}
      </h1>
      <p>Email : {user.email}</p>
      <p>
        Location : {user.city}, {user.state}
      </p>
      {/* 껍데기 -> <button>Make Admin</button> */}
      <button
        onClick={() => {
          setUser({ admin: true });
          console.log('덮어씌운 코드의 결과ㅏ', user);
        }}
      >
        덮어씌우깅ㅇ
      </button>
      {/* 상태를 관리할 때 일반적으로 저지르는 실수로 상태를 덮어쓰는 경우가 있다 */}

      <button
        onClick={() => {
          setUser({ ...user, admin: true });
          console.log('잘 작동하는 버트은의 결과ㅏ', user);
        }}
      >
        잘 작동하는 버트은
      </button>
      {/*
        이렇게 하면 firstUser의 상태를 덮어써서 방금 setUser 함수에 전달한 
        admin: true로 변경한다. 현재 값을 사용자와 분리하고, admin 값을 덮어쓰면 이런 일을
        방지할 수 있다.

        허나 이렇게 하면 코드의 모든 onClick을 이런 식으로 작성해야한다. 고로 useReducer를 써서
        원래 값과 바꿀 값을 받아 푸는게 좋다
      */}
    </div>
  );
}
