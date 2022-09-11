import Heading from '@/components/lib/Heading';
import Text from '@/components/lib/Text';
import AuthLayout from '@/layouts/AuthLayout';
import Meta from '@/templates/Meta';

const links = [
  {
    icon: 'ant-design:user-outlined',
    title: 'Profile',
    url: '/member/profile',
  },
  {
    icon: 'ic:outline-feedback',
    title: 'Give Feedback',
    url: '/member/feedback',
  },
];
const Profile = () => {
  return (
    <AuthLayout
      meta={<Meta title="Profile" description="Your Profile" />}
      links={links}
    >
      <div className="h-500 grid place-items-center gap-5">
        <Heading>Profile screen</Heading>
        <Text>This is the profile screen!</Text>
      </div>
    </AuthLayout>
  );
};

export default Profile;
