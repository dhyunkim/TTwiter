import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';
import styled from 'styled-components';
import {Menu, Input, Row, Col} from 'antd';

const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`;

const AppLayout = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>TTwiter</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>Profile</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton></SearchInput>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>Sign UP</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>{isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}</Col>
                <Col xs={24} md={12}>{children}</Col>
                <Col xs={24} md={6}><a href="https://www.naver.com" target="_blank" rel="noreferrer noopener">Made by Naver</a></Col>
            </Row>
        </div>
    )
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default AppLayout;