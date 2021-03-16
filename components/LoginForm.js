// import React, {useState, useCallback, useMemo} from 'react';
// import {Button, Form, Input} from 'antd';
// import Link from 'next/link';
// import styled from 'styled-components';

// const ButtonWrapper = styled.div`
//     margin-top: 10px;
// `;

// const FormWrapper = styled(Form)`
//     padding: 10px;
// `;

// const LoginForm = ({setIsLoggedIn}) => {
//     const [id, setId] = useState('');
//     const [password, setPassword] = useState('');

//     const onChangeId = useCallback((e) => {
//         setId(e.target.value);
//     }, []);

//     const onChangePassword = useCallback((e) => {
//         setPassword(e.target.value);
//     }, []);

//     const onsubmitForm = useCallback(() => {
//         console.log(id, password);
//         setIsLoggedIn(true);
//     }, [id, password]);

   
//     const style = useMemo(() => {{margin: 10}}, []);

//     return (
//         <FormWrapper onFinish={onsubmitForm}>
//             <div>
//                 <label htmlFor="user-id">아이디</label>
//                 <br />
//                 <Input name="user-id" onChnage={onChangeId} required />
//             </div>
//             <div>
//                 <label htmlFor="user-id">비밀번호</label>
//                 <br />
//                 <Input name="user-password" 
//                     type="password" 
                    
//                     onChnage={onChangePassword} 
//                     required
//                 />               
//             </div>
//             <ButtonWrapper style={style}>
//                 <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
//                 <Link href="/signup"><a><Button>회원가입</Button></a></Link>
//             </ButtonWrapper>
//         </FormWrapper>
//     );
// }

// export default LoginForm;


import React, { useCallback } from 'react';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';

import useInput from '../hooks/useInput';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [password, onChangePassword] = useInput('');
  const onSubmitForm = useCallback(() => {
    console.log({
      id, password,
    });
    setIsLoggedIn(true);
  }, [id, password]);

  return (
    <Form onFinish={onSubmitForm} style={{ padding: '10px' }}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input name="user-password" value={password} onChange={onChangePassword} type="password" required />
      </div>
      <div style={{ marginTop: '10px' }}>
        <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
        <Link href="/signup"><a><Button>회원가입</Button></a></Link>
      </div>
    </Form>
  );
};

export default LoginForm;