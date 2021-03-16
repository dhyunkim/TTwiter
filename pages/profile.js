import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import FollowList from '../components/FollowList';
import NicknameEditForm from '../components/NicknameEditForm';

const Profile = () => {
    const follwerList = [{nickname: '김동현'}, {nickname: '안녕'}, {nickname: '빠영'}];
    const follwingList = [{nickname: '김동현'}, {nickname: '안녕'}, {nickname: '빠영'}];

    return (
        <>
            <Head>
                <title>내 프로필 | NodeBird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉 목록" data={follwingList} />
                <FollowList header="팔로워 목록" data={follwerList} />
            </AppLayout>
        </>
    );
};

export default Profile;