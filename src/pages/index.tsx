import Heading from '@/components/lib/Heading';
import Text from '@/components/lib/Text';

import styles from '../styles/landing-page.module.scss';

const Index = () => {
  return (
    <main className={styles.main}>
      <Heading variant="h1">Hello, Welcome to CCI CGOP</Heading>
      <Text variant="body2">This is supposed to be the welcome page.</Text>
    </main>
  );
};

export default Index;
